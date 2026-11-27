// ═══════════════════════════════════════════════════════════════
// CDDP v3 · เทศบาลตำบลคลองตำหรุ — Google Apps Script API
// หน้าเว็บอยู่บน GitHub Pages · ข้อมูลอยู่ใน Google Sheet
// ═══════════════════════════════════════════════════════════════
const SPREADSHEET_ID = '1JNCDE_1oDiw0H3Cj61VcywAOKLCp9FlEfCxbw4AuCPY';
const TOKEN_TTL = 21600; // อายุเซสชัน 6 ชม. (ต่ออายุอัตโนมัติเมื่อใช้งาน)
const TZ = 'Asia/Bangkok';

// key → ชื่อชีต (ถ้ามีชีตชื่อ key อยู่แล้วจะใช้ชีตนั้น)
const CATS = {
  household_m1:'ครัวเรือน หมู่ 1', household_m2:'ครัวเรือน หมู่ 2', household_m3:'ครัวเรือน หมู่ 3',
  household_m5:'ครัวเรือน หมู่ 5', household_m6:'ครัวเรือน หมู่ 6',
  road:'ถนน', sidewalk:'ทางเท้า', streetlight:'เสาไฟส่องสว่าง', bridge:'สะพาน', hydrant:'หัวดับเพลิง',
  speaker:'เสียงตามสาย', manhole:'ฝาท่อ', waterway:'ทางน้ำ',
  govplace:'สถานที่ราชการ', religion:'ศาสนสถาน', school:'สถานศึกษา', hospital:'สถานพยาบาล', market:'ตลาด',
  disaster:'ภัยพิบัติ', fire_ext:'ถังดับเพลิง', trash_bin:'จุดที่ตั้งถังขยะ', pet:'ทะเบียนสุนัขและแมว',
  patient_dep:'ผู้ป่วยภาวะพึ่งพิง', osm_cg:'อสม./CG',
  welfare_elder:'เบี้ยผู้สูงอายุ', welfare_disabled:'เบี้ยผู้พิการ',
  welfare_newborn:'เงินอุดหนุนเด็กแรกเกิด', welfare_aids:'เบี้ยผู้ป่วยเอดส์'
};
const SYS = ['id','lat','lng','ts','updated_by'];
const PII = /บัตรประชาชน/;
const USER_H = ['username','name','role','status','pii','perms','salt','hash','last_login'];
const LV = { r:1, w:2, d:3 };

// ── รันครั้งเดียว: สร้างชีตผู้ใช้ + บัญชี admin (ดูรหัสผ่านใน Execution log) ──
function setup() {
  const sh = sheet_('Users');
  if (sh.getLastRow() < 1) {
    sh.appendRow(USER_H); styleHead_(sh, USER_H.length);
  }
  if (!readUsers_().some(u => u.username === 'admin')) {
    const pw = Utilities.getUuid().slice(0, 10);
    const salt = Utilities.getUuid();
    sh.appendRow(['admin','ผู้ดูแลระบบ','superadmin','active',true,'{}',salt,hash_(salt, pw),'']);
    Logger.log('สร้างบัญชี admin แล้ว · รหัสผ่านชั่วคราว: ' + pw + ' (เข้าระบบแล้วเปลี่ยนทันที)');
  } else Logger.log('มีบัญชี admin อยู่แล้ว');
}

// ── HTTP ──
function doGet() { return out_({ ok: true, app: 'CDDP', version: 3 }); }

function doPost(e) {
  let req;
  try { req = JSON.parse(e.postData.contents); } catch (_) { return out_({ error: 'bad request' }); }
  try { return out_(route_(req)); }
  catch (err) { return out_({ error: String(err && err.message || err) }); }
}

function route_(r) {
  if (r.action === 'login') return login_(String(r.username || '').trim().toLowerCase(), String(r.password || ''));
  const u = auth_(r.token);
  const su = () => { if (u.role !== 'superadmin') throw new Error('ไม่มีสิทธิ์'); };
  switch (r.action) {
    case 'getAll': return { data: getAll_(u), user: pub_(u) };
    case 'save': return saveRec_(u, r.cat, r.rec || {});
    case 'remove': return removeRec_(u, r.cat, r.id);
    case 'logout': CacheService.getScriptCache().remove('t_' + r.token); return { ok: true };
    case 'changePassword': return changePw_(u, r.oldPw, r.newPw);
    case 'listUsers': su(); return { users: readUsers_().map(x => ({
      username: x.username, name: x.name, role: x.role, status: x.status, pii: x.pii,
      perms: x.permsObj, last_login: x.last_login })) };
    case 'saveUser': su(); return saveUser_(u, r.user || {});
    case 'deleteUser': su(); return deleteUser_(u, r.username);
  }
  throw new Error('unknown action');
}

// ── Auth ──
function login_(username, password) {
  const c = CacheService.getScriptCache(), fk = 'f_' + username;
  const fails = +(c.get(fk) || 0);
  if (fails >= 5) throw new Error('ใส่รหัสผิดหลายครั้ง กรุณารอ 10 นาที');
  const u = readUsers_().find(x => x.username === username);
  if (!u || hash_(u.salt, password) !== u.hash) {
    c.put(fk, String(fails + 1), 600);
    log_(username, 'login-fail');
    throw new Error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
  }
  if (u.status !== 'active') throw new Error('บัญชีนี้ถูกระงับ ติดต่อผู้ดูแลระบบ');
  c.remove(fk);
  const token = Utilities.getUuid() + Utilities.getUuid().slice(0, 8);
  c.put('t_' + token, u.username, TOKEN_TTL);
  sheet_('Users').getRange(u.row, USER_H.indexOf('last_login') + 1).setValue(now_());
  log_(u.username, 'login');
  return { token, user: pub_(u) };
}

function auth_(token) {
  const c = CacheService.getScriptCache();
  const name = token && c.get('t_' + token);
  if (!name) throw new Error('AUTH_REQUIRED');
  const u = readUsers_().find(x => x.username === name);
  if (!u || u.status !== 'active') throw new Error('AUTH_REQUIRED');
  c.put('t_' + token, name, TOKEN_TTL);
  return u;
}

function level_(u, cat) {
  if (!CATS[cat]) return 0;
  if (u.role === 'admin' || u.role === 'superadmin') return 3;
  return LV[u.permsObj[cat]] || 0;
}

function pub_(u) {
  const perms = {};
  Object.keys(CATS).forEach(k => { const l = level_(u, k); if (l) perms[k] = l; });
  return { username: u.username, name: u.name, role: u.role, pii: u.pii, perms };
}

// ── Data ──
function getAll_(u) {
  const res = {};
  Object.keys(CATS).forEach(k => { if (level_(u, k)) res[k] = readCat_(k, u.pii); });
  return res;
}

function catSheet_(key, create) {
  const ss = ss_();
  let sh = ss.getSheetByName(CATS[key]) || ss.getSheetByName(key);
  if (!sh && create) {
    sh = ss.insertSheet(CATS[key]);
    sh.getRange(1, 1, 1, SYS.length).setValues([SYS]);
    styleHead_(sh, SYS.length);
  }
  return sh;
}

function readCat_(key, pii) {
  const sh = catSheet_(key);
  if (!sh || sh.getLastRow() < 2) return [];
  const v = sh.getDataRange().getValues();
  const h = v[0].map(String);
  let idc = h.indexOf('id');
  if (idc < 0) { idc = h.length; h.push('id'); sh.getRange(1, idc + 1).setValue('id'); }
  const miss = [];
  const rows = [];
  for (let i = 1; i < v.length; i++) {
    if (v[i].every(x => x === '')) continue;
    const o = {};
    h.forEach((k, j) => { if (k) o[k] = cell_(k, v[i][j]); });
    if (!o.id) { o.id = newId_(); miss.push([i + 1, o.id]); }
    if (!pii) Object.keys(o).forEach(k => { if (PII.test(k)) o[k] = mask_(o[k]); });
    rows.push(o);
  }
  // เติม id ให้แถวที่กรอกเองในชีต (ทำครั้งเดียว)
  miss.forEach(([r, id]) => sh.getRange(r, idc + 1).setNumberFormat('@').setValue(id));
  return rows;
}

function saveRec_(u, cat, rec) {
  const lv = level_(u, cat);
  if (lv < 2) throw new Error('ไม่มีสิทธิ์แก้ไขหมวดนี้');
  const lock = LockService.getScriptLock(); lock.waitLock(15000);
  try {
    const sh = catSheet_(cat, true);
    const lastCol = Math.max(sh.getLastColumn(), 1);
    const h = sh.getRange(1, 1, 1, lastCol).getValues()[0].map(String);
    const keys = Object.keys(rec).filter(k => k && k.length <= 60 && k[0] !== '_'
      && k !== 'ts' && k !== 'updated_by' && k !== 'id' && !(PII.test(k) && !u.pii));
    SYS.concat(keys).forEach(k => {
      if (h.indexOf(k) < 0) { h.push(k); sh.getRange(1, h.length).setValue(k); }
    });
    let row = -1, cur = h.map(() => '');
    if (rec.id) {
      const ids = sh.getRange(1, h.indexOf('id') + 1, sh.getLastRow(), 1).getDisplayValues();
      for (let i = 1; i < ids.length; i++) if (ids[i][0] === String(rec.id)) { row = i + 1; break; }
      if (row < 0) throw new Error('ไม่พบรายการ (อาจถูกลบไปแล้ว)');
      cur = sh.getRange(row, 1, 1, h.length).getValues()[0];
    }
    const id = rec.id ? String(rec.id) : newId_();
    const set = { id, ts: now_(), updated_by: u.username };
    keys.forEach(k => set[k] = clean_(rec[k]));
    const vals = h.map((k, j) => k in set ? set[k] : cur[j]);
    if (row < 0) row = sh.getLastRow() + 1;
    sh.getRange(row, 1, 1, h.length).setNumberFormat('@').setValues([vals]);
    log_(u.username, rec.id ? 'update' : 'add', cat, id);
    const o = {};
    h.forEach((k, j) => { if (k) o[k] = cell_(k, vals[j]); });
    if (!u.pii) Object.keys(o).forEach(k => { if (PII.test(k)) o[k] = mask_(o[k]); });
    return { ok: true, rec: o };
  } finally { lock.releaseLock(); }
}

function removeRec_(u, cat, id) {
  if (level_(u, cat) < 3) throw new Error('ไม่มีสิทธิ์ลบหมวดนี้');
  const lock = LockService.getScriptLock(); lock.waitLock(15000);
  try {
    const sh = catSheet_(cat);
    if (!sh) throw new Error('ไม่พบชีต');
    const h = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].map(String);
    const ids = sh.getRange(1, h.indexOf('id') + 1, sh.getLastRow(), 1).getDisplayValues();
    for (let i = ids.length - 1; i >= 1; i--) {
      if (ids[i][0] === String(id)) { sh.deleteRow(i + 1); log_(u.username, 'delete', cat, id); return { ok: true }; }
    }
    throw new Error('ไม่พบรายการ');
  } finally { lock.releaseLock(); }
}

// ── Users ──
function readUsers_() {
  const sh = sheet_('Users');
  if (sh.getLastRow() < 2) return [];
  const v = sh.getDataRange().getValues(), h = v[0].map(String);
  return v.slice(1).map((r, i) => {
    const o = { row: i + 2 };
    h.forEach((k, j) => o[k] = r[j]);
    o.username = String(o.username).trim().toLowerCase();
    o.pii = o.pii === true || String(o.pii).toUpperCase() === 'TRUE';
    o.status = String(o.status || 'active');
    o.last_login = o.last_login instanceof Date ? fmtDate_(o.last_login, true) : String(o.last_login || '');
    try { o.permsObj = JSON.parse(o.perms || '{}'); } catch (_) { o.permsObj = {}; }
    return o;
  }).filter(o => o.username);
}

function saveUser_(me, d) {
  const username = String(d.username || '').trim().toLowerCase();
  if (!/^[a-z0-9._-]{3,30}$/.test(username)) throw new Error('ชื่อผู้ใช้ใช้ a-z 0-9 . _ - ยาว 3-30 ตัว');
  if (['user','admin','superadmin'].indexOf(d.role) < 0) throw new Error('บทบาทไม่ถูกต้อง');
  if (d.password && String(d.password).length < 8) throw new Error('รหัสผ่านอย่างน้อย 8 ตัวอักษร');
  const perms = {};
  Object.keys(d.perms || {}).forEach(k => { if (CATS[k] && LV[d.perms[k]]) perms[k] = d.perms[k]; });
  const sh = sheet_('Users');
  const ex = readUsers_().find(x => x.username === username);
  if (ex && ex.username === me.username && d.role !== 'superadmin') throw new Error('ไม่สามารถลดสิทธิ์ตัวเองได้');
  const base = [username, String(d.name || '').trim() || username, d.role,
    d.status === 'disabled' ? 'disabled' : 'active', !!d.pii, JSON.stringify(perms)];
  if (ex) {
    sh.getRange(ex.row, 1, 1, 6).setValues([base]);
    if (d.password) { const s = Utilities.getUuid(); sh.getRange(ex.row, 7, 1, 2).setValues([[s, hash_(s, d.password)]]); }
  } else {
    if (!d.password) throw new Error('กรุณาตั้งรหัสผ่าน');
    const s = Utilities.getUuid();
    sh.appendRow(base.concat([s, hash_(s, d.password), '']));
  }
  log_(me.username, ex ? 'user-update' : 'user-add', '', username);
  return { ok: true };
}

function deleteUser_(me, username) {
  if (username === me.username) throw new Error('ไม่สามารถลบบัญชีตัวเองได้');
  const u = readUsers_().find(x => x.username === username);
  if (!u) throw new Error('ไม่พบผู้ใช้');
  sheet_('Users').deleteRow(u.row);
  log_(me.username, 'user-delete', '', username);
  return { ok: true };
}

function changePw_(u, oldPw, newPw) {
  if (hash_(u.salt, String(oldPw || '')) !== u.hash) throw new Error('รหัสผ่านเดิมไม่ถูกต้อง');
  if (String(newPw || '').length < 8) throw new Error('รหัสผ่านใหม่อย่างน้อย 8 ตัวอักษร');
  const s = Utilities.getUuid();
  sheet_('Users').getRange(u.row, 7, 1, 2).setValues([[s, hash_(s, newPw)]]);
  log_(u.username, 'change-password');
  return { ok: true };
}

// ── Utils ──
let _ss;
function ss_() { return _ss || (_ss = SpreadsheetApp.openById(SPREADSHEET_ID)); }
function sheet_(name) { return ss_().getSheetByName(name) || ss_().insertSheet(name); }
function out_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function hash_(salt, pw) {
  return Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, salt + pw, Utilities.Charset.UTF_8));
}
function newId_() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
function now_() { return fmtDate_(new Date(), true); }
function fmtDate_(d, time) { return Utilities.formatDate(d, TZ, time ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd'); }
function cell_(k, v) { return v instanceof Date ? fmtDate_(v, k === 'ts') : (v === null ? '' : String(v)); }
function clean_(v) { v = v == null ? '' : String(v).slice(0, 5000); return /^[=@]/.test(v) ? "'" + v : v; }
function mask_(v) { v = String(v || ''); return v.length > 4 ? '•••••••••' + v.slice(-4) : v; }
function styleHead_(sh, n) {
  sh.getRange(1, 1, 1, n).setFontWeight('bold').setBackground('#0f766e').setFontColor('#ffffff');
  sh.setFrozenRows(1);
}
function log_(user, action, cat, id) {
  try {
    const sh = sheet_('Log');
    if (sh.getLastRow() < 1) { sh.appendRow(['เวลา','ผู้ใช้','การกระทำ','หมวด','รหัส']); styleHead_(sh, 5); }
    sh.appendRow([now_(), user, action, cat ? (CATS[cat] || cat) : '', id || '']);
    if (sh.getLastRow() > 6000) sh.deleteRows(2, 1000);
  } catch (_) {}
}

// สำรองข้อมูลรายวัน (ตั้ง trigger ด้วย createDailyBackup ครั้งเดียว)
function createDailyBackup() {
  ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === 'dailyBackup').forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('dailyBackup').timeBased().everyDays(1).atHour(1).create();
}
function dailyBackup() { ss_().copy('Backup_CDDP_' + fmtDate_(new Date())); }
