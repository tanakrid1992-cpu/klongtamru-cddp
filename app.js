'use strict';
/* CDDP v3.1 · เทศบาลตำบลคลองตำหรุ */

// ══════════ ICONS ══════════
const P = {
  search:'<circle cx="11" cy="11" r="7.5"/><path d="m20.5 20.5-4-4"/>', plus:'<path d="M12 5v14M5 12h14"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>', panel:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 3v18M15 9l-3 3 3 3"/>',
  x:'<path d="M18 6 6 18M6 6l12 12"/>', edit:'<path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
  trash:'<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  sheet:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  key:'<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  refresh:'<path d="M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5"/>',
  locate:'<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7.5"/><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3"/>',
  fit:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',
  full:'<path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/>',
  landmark:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l9 5H3z"/>',
  road:'<circle cx="6" cy="19" r="2.5"/><path d="M8.5 19h9a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="2.5"/>',
  waves:'<path d="M2 7c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 13c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"/>',
  pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  nav:'<path d="m3 11 19-9-9 19-2-8-8-2z"/>',
  grid:'<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
  eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  eyeoff:'<path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4.1M6.6 6.6C3.8 8.5 2 12 2 12s3.5 7 10 7a9.7 9.7 0 0 0 5.4-1.6"/>',
  alert:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
  clock:'<circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3 2"/>',
  spark:'<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
  chev:'<path d="m7 15 5-5 5 5"/>', right:'<path d="m9 6 6 6-6 6"/>',
  check:'<path d="M20 6 9 17l-5-5"/>', ok:'<circle cx="12" cy="12" r="9.5"/><path d="m8 12 3 3 5-6"/>',
  save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',
  lock:'<rect x="3" y="11" width="18" height="11" rx="2.5"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>',
  dup:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
  out:'<circle cx="12" cy="12" r="9.5"/><path d="M4.9 4.9l14.2 14.2"/>'
};
const ic = (n, s) => `<svg class="i" viewBox="0 0 24 24"${s?` style="width:${s}px;height:${s}px"`:''} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${P[n]||''}</svg>`;
const hydrate = (root = document) => root.querySelectorAll('i[data-ic]').forEach(e => e.outerHTML = ic(e.dataset.ic));

// ══════════ CONFIG ══════════
const API = (window.CDDP_API || '').trim(), DEMO = !API;
const GROUPS = [['hh','ครัวเรือน'],['inf','โครงสร้างพื้นฐาน'],['pub','สาธารณูปการ'],['env','สาธารณภัยและสิ่งแวดล้อม'],['hlt','สาธารณสุข'],['wf','สวัสดิการสังคม']];
const HH = 'ชื่อหัวหน้าครัวเรือน|เลขที่บ้าน|หมู่|จำนวนสมาชิก|เบอร์โทร|หมายเหตุ';
const CATS = {};
[
 ['household_m1','ครัวเรือน หมู่ 1','🏠','#6366f1','hh',HH],['household_m2','ครัวเรือน หมู่ 2','🏠','#0ea5e9','hh',HH],
 ['household_m3','ครัวเรือน หมู่ 3','🏠','#10b981','hh',HH],['household_m5','ครัวเรือน หมู่ 5','🏠','#f59e0b','hh',HH],
 ['household_m6','ครัวเรือน หมู่ 6','🏠','#ef4444','hh',HH],
 ['road','ถนน','🛣️','#64748b','inf','ชื่อถนน|ประเภทผิว|ความยาวเมตร|ความกว้างเมตร|สภาพ|หมายเหตุ'],
 ['sidewalk','ทางเท้า','🚶','#78716c','inf','ชื่อทางเท้า|วัสดุ|ความยาวเมตร|สภาพ|หมายเหตุ'],
 ['streetlight','เสาไฟส่องสว่าง','💡','#eab308','inf','รหัสเสาไฟ|ประเภทหลอด|สถานะ|หมายเหตุ'],
 ['bridge','สะพาน','🌉','#8b5cf6','inf','ชื่อสะพาน|ประเภท|ความยาวเมตร|สภาพ|หมายเหตุ'],
 ['hydrant','หัวดับเพลิง','🚒','#dc2626','inf','รหัสหัวดับเพลิง|ขนาดท่อ|สถานะ|หมายเหตุ'],
 ['speaker','เสียงตามสาย','📢','#0284c7','inf','รหัสจุดเสียงตามสาย|สถานะ|หมายเหตุ'],
 ['manhole','ฝาท่อ','🕳️','#475569','inf','รหัสฝาท่อ|ขนาด|สภาพ|หมายเหตุ'],
 ['waterway','ทางน้ำ','🌊','#0891b2','inf','ชื่อทางน้ำ|ประเภท|ความยาวเมตร|สภาพ|หมายเหตุ'],
 ['govplace','สถานที่ราชการ','🏛️','#4f46e5','pub','ชื่อสถานที่|หน่วยงาน|เบอร์โทร|หมายเหตุ'],
 ['religion','ศาสนสถาน','🛕','#f97316','pub','ชื่อศาสนสถาน|ศาสนา|ผู้ดูแล|หมายเหตุ'],
 ['school','สถานศึกษา','🏫','#16a34a','pub','ชื่อสถานศึกษา|ระดับ|จำนวนนักเรียน|หมายเหตุ'],
 ['hospital','สถานพยาบาล','🏥','#db2777','pub','ชื่อสถานพยาบาล|ประเภท|เบอร์โทร|หมายเหตุ'],
 ['market','ตลาด','🛒','#ca8a04','pub','ชื่อตลาด|ประเภท|วันเปิด|หมายเหตุ'],
 ['disaster','ภัยพิบัติ','⚠️','#e11d48','env','ประเภทภัย|วันที่เกิด|ระดับความรุนแรง|ผู้ได้รับผลกระทบ|สถานะ|รายละเอียด'],
 ['fire_ext','ถังดับเพลิง','🧯','#b91c1c','env','รหัสถังดับเพลิง|ประเภท|วันตรวจล่าสุด|สถานะ|หมายเหตุ'],
 ['trash_bin','จุดที่ตั้งถังขยะ','🗑️','#15803d','env','รหัสจุดถังขยะ|ประเภทขยะ|จำนวนถัง|หมายเหตุ'],
 ['pet','ทะเบียนสุนัขและแมว','🐕','#d97706','env','ชื่อ-นามสกุลเจ้าของ|เลขบัตรประชาชน|เบอร์โทรศัพท์|บ้านเลขที่|หมู่|แขวง/ตำบล|อำเภอ|ประเภทสัตว์|ชื่อ/อัตลักษณ์|เพศ|ประวัติการฉีดวัคซีน|วันที่ฉีดวัคซีนล่าสุด|การทำหมัน|อายุ (ปี)|อายุ (เดือน)|ลักษณะการเลี้ยง|สถานที่เลี้ยง|ปีสำรวจ|รอบที่|วันที่บันทึกข้อมูล|หมายเหตุ'],
 ['patient_dep','ผู้ป่วยภาวะพึ่งพิง','🧑‍🦽','#be185d','hlt','ชื่อผู้ป่วย|อายุ|ภาวะพึ่งพิง|ผู้ดูแล|เบอร์โทร|หมายเหตุ'],
 ['osm_cg','อสม./CG','🩺','#0d9488','hlt','ชื่อสกุล|ประเภท|หมู่|เบอร์โทร|หมายเหตุ'],
 ['welfare_elder','เบี้ยผู้สูงอายุ','👴','#9333ea','wf','ชื่อสกุล|อายุ|เลขบัตรประชาชน|จำนวนเงิน|หมู่|หมายเหตุ'],
 ['welfare_disabled','เบี้ยผู้พิการ','♿','#2563eb','wf','ชื่อสกุล|ประเภทความพิการ|เลขบัตรประชาชน|จำนวนเงิน|หมู่|หมายเหตุ'],
 ['welfare_newborn','เงินอุดหนุนเด็กแรกเกิด','👶','#ec4899','wf','ชื่อเด็ก|ชื่อผู้ปกครอง|วันเกิด|จำนวนเงิน|หมู่|หมายเหตุ'],
 ['welfare_aids','เบี้ยผู้ป่วยเอดส์','🎗️','#e11d48','wf','ชื่อสกุล|อายุ|จำนวนเงิน|หมู่|หมายเหตุ']
].forEach(([k,l,i,c,g,f]) => CATS[k] = {k,l,i,c,g,f:f.split('|')});
const OPTS = {
  'สถานะ':['ปกติ','ชำรุด','ซ่อมแซม'], 'สภาพ':['ดี','พอใช้','ชำรุด'], 'ระดับความรุนแรง':['น้อย','ปานกลาง','รุนแรง'],
  'ประเภทสัตว์':['สุนัข','แมว'], 'เพศ':['ผู้','เมีย'], 'ประวัติการฉีดวัคซีน':['เคยฉีด','ไม่เคยฉีด','ไม่ทราบ'],
  'การทำหมัน':['ทำหมันแล้ว','ยังไม่ทำหมัน'],
  'ลักษณะการเลี้ยง':['เลี้ยงในพื้นที่จำกัดตลอดเวลา','เลี้ยงแบบปล่อยตลอดเวลา','เลี้ยงในพื้นที่จำกัดเป็นบางเวลา','ไม่มีเจ้าของ'],
  'สถานที่เลี้ยง':['บ้านพักอาศัย','วัด','โรงเรียน','สถานที่ราชการ','ที่สาธารณะ','อื่นๆ'], 'รอบที่':['1','2']
};
const SYS = new Set(['id','lat','lng','ts','updated_by']);
const PII = /บัตรประชาชน/, BAD = /ชำรุด|ซ่อม|เสีย/;
const keysOf = g => Object.keys(CATS).filter(k => CATS[k].g === g);

// ══════════ STATE ══════════
let DATA = {}, USER = null, TOKEN = sessionStorage.getItem('cddp_t') || '';
let CUR = null, EID = null, HIDDEN = new Set(JSON.parse(localStorage.getItem('cddp_hidden') || '[]')), MK = {}, LIMIT = 150;
let F = { q:'', mode:'all', moo:'', sort:'new' }, ME_LL = null;
const IDX = new WeakMap(), FLAG = new WeakMap();
let INS = [], FIELDS = {};

// ══════════ UTILS ══════════
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num = n => (+n || 0).toLocaleString('th-TH');
const lv = k => (USER && USER.perms && USER.perms[k]) || 0;
const norm = s => String(s ?? '').toLowerCase().replace(/^(นาย|นางสาว|นาง|น\.ส\.|ด\.ช\.|ด\.ญ\.|เด็กชาย|เด็กหญิง)\s*/, '').replace(/[\s\-.,/()]/g, '');
const digits = s => String(s ?? '').replace(/\D/g, '');
const hasLL = r => +r.lat && +r.lng;
const tsOf = r => { const t = Date.parse(String(r.ts || '').replace(' ', 'T')); return isNaN(t) ? 0 : t; };
const prim = (k, r) => r[fieldsOf(k)[0]] || '';
function fieldsOf(k){ return FIELDS[k] || CATS[k].f; }
function fmt(f, v){
  if(v == null || v === '') return '';
  const s = String(v);
  if(/เบอร์|โทร/.test(f)){ const d = digits(s); if((d.length===9||d.length===8) && d[0]!=='0') return '0'+d; }
  if(/^\d{4}-\d{2}-\d{2}$/.test(s)){ const d = new Date(s); if(!isNaN(d)) return d.toLocaleDateString('th-TH',{day:'numeric',month:'short',year:'numeric'}); }
  return s;
}
function ago(t){
  const m = (Date.now() - t) / 6e4;
  return m < 1 ? 'เมื่อสักครู่' : m < 60 ? Math.floor(m) + ' นาทีที่แล้ว' : m < 1440 ? Math.floor(m/60) + ' ชม.ที่แล้ว' : Math.floor(m/1440) + ' วันที่แล้ว';
}
function toast(m, t){
  const e = $('#tst'); e.innerHTML = ic(t === 'er' ? 'alert' : t === 'in' ? 'spark' : 'ok') + '<span>' + esc(m) + '</span>';
  e.className = 'tst sh ' + (t || '');
  clearTimeout(toast.t); toast.t = setTimeout(() => e.className = 'tst', 2800);
}
const prog = { n:0, start(){ this.n++; const p = $('#prog'); p.style.opacity = 1; p.style.width = '30%'; clearInterval(this.t);
  this.t = setInterval(() => { const w = parseFloat(p.style.width); if(w < 88) p.style.width = (w + (90 - w) * .12) + '%'; }, 250); },
  done(){ if(--this.n > 0) return; this.n = 0; clearInterval(this.t); const p = $('#prog'); p.style.width = '100%'; setTimeout(() => { p.style.opacity = 0; p.style.width = 0; }, 350); } };
const hl = (s, q) => { s = String(s); const i = s.toLowerCase().indexOf(q); return i < 0 || !q ? esc(s) : esc(s.slice(0,i))+'<mark>'+esc(s.slice(i,i+q.length))+'</mark>'+esc(s.slice(i+q.length)); };
function countUp(el, to){
  const from = 0, t0 = performance.now(), d = 900;
  (function f(t){ const p = Math.min(1, (t - t0) / d); el.textContent = num(Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)))); if(p < 1) requestAnimationFrame(f); })(t0);
}
function thaiID(s){
  const d = digits(s); if(d.length !== 13) return false;
  let sum = 0; for(let i = 0; i < 12; i++) sum += +d[i] * (13 - i);
  return (11 - sum % 11) % 10 === +d[12];
}
function haversine(a, b){
  const R = 6371000, r = x => x * Math.PI / 180, dLa = r(b[0]-a[0]), dLn = r(b[1]-a[1]);
  const h = Math.sin(dLa/2)**2 + Math.cos(r(a[0]))*Math.cos(r(b[0]))*Math.sin(dLn/2)**2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

// ══════════ API ══════════
async function api(action, p = {}, tries = 2){
  if(DEMO) return demo(action, p);
  prog.start();
  try{
    const ctl = new AbortController(), to = setTimeout(() => ctl.abort(), 45000);
    let r;
    try{ r = await fetch(API, {method:'POST', body: JSON.stringify({action, token: TOKEN, ...p}), signal: ctl.signal}); }
    finally{ clearTimeout(to); }
    const j = await r.json();
    if(j.error){
      if(/AUTH_REQUIRED/.test(j.error)){ signOutLocal('เซสชันหมดอายุ กรุณาเข้าสู่ระบบใหม่'); }
      const e = new Error(j.error); e.server = true; throw e;
    }
    return j;
  }catch(err){
    if(!err.server && tries > 1 && action !== 'save' && action !== 'remove') return api(action, p, tries - 1);
    if(!err.server) throw new Error('เชื่อมต่อเซิร์ฟเวอร์ไม่ได้ กรุณาตรวจสอบอินเทอร์เน็ต');
    throw err;
  }finally{ prog.done(); }
}
function demo(a, p){
  const db = JSON.parse(localStorage.getItem('cddp_demo') || '{}');
  const put = () => localStorage.setItem('cddp_demo', JSON.stringify(db));
  const perms = {}; Object.keys(CATS).forEach(k => perms[k] = 3);
  const user = {username:'demo', name:'ผู้ใช้ทดลอง', role:'admin', pii:true, perms};
  if(a === 'save'){
    const l = db[p.cat] = db[p.cat] || [];
    let r = p.rec.id && l.find(x => x.id === p.rec.id);
    if(!r){ r = {id: Date.now().toString(36)}; l.push(r); }
    Object.assign(r, p.rec, {ts: new Date().toISOString().slice(0,16).replace('T',' '), updated_by:'demo'}); put();
    return Promise.resolve({ok:true, rec:r});
  }
  if(a === 'remove'){ db[p.cat] = (db[p.cat]||[]).filter(x => x.id !== p.id); put(); return Promise.resolve({ok:true}); }
  return Promise.resolve({data: db, user});
}
const cacheSave = () => { try{ sessionStorage.setItem('cddp_d', JSON.stringify({data: DATA, user: USER, t: Date.now()})); }catch(_){ sessionStorage.removeItem('cddp_d'); } };
function cacheLoad(){ try{ return JSON.parse(sessionStorage.getItem('cddp_d') || 'null'); }catch(_){ return null; } }
function setSync(t){ const s = $('#sync'); if(!t){ s.classList.add('hide'); return; } s.innerHTML = t; s.classList.remove('hide'); }

// ══════════ AUTH ══════════
function showLogin(msg){
  $('#login').classList.remove('hide');
  const e = $('#lgErr'); e.textContent = msg || ''; e.classList.toggle('hide', !msg);
  if(msg){ e.style.animation = 'none'; e.offsetWidth; e.style.animation = ''; }
  setTimeout(() => ($('#lgU').value ? $('#lgP') : $('#lgU')).focus(), 120);
  warm();
}
function warm(){
  if(DEMO || warm.done) return; warm.done = 1;
  const s = $('#srv');
  fetch(API).then(r => r.json()).then(() => { s.classList.add('ok'); s.lastChild.textContent = 'เซิร์ฟเวอร์พร้อม'; })
    .catch(() => { s.lastChild.textContent = 'เชื่อมต่อเซิร์ฟเวอร์ไม่ได้'; warm.done = 0; });
}
function signOutLocal(msg){
  TOKEN = ''; USER = null; DATA = {}; sessionStorage.removeItem('cddp_t'); sessionStorage.removeItem('cddp_d'); showLogin(msg);
}
function applyData(d, u){ DATA = d || {}; USER = u; Object.keys(CATS).forEach(k => DATA[k] = DATA[k] || []); analyze(); }
function enter(){
  $('#login').classList.add('hide');
  renderMe(); go(CUR && lv(CUR) ? CUR : null, true);
}
async function refresh(fresh){
  const had = !!USER;
  setSync(ic('refresh') .replace('class="i"', 'class="i spin"') + ' กำลังอัปเดต…');
  try{
    const j = await api('getAll', {fresh: !!fresh});
    const changed = JSON.stringify(j.data) !== JSON.stringify(DATA);
    applyData(j.data, j.user); cacheSave();
    if(had && (changed || fresh)) rerender();
    setSync(ic('ok') + ' อัปเดตแล้ว'); setTimeout(() => setSync(''), 2500);
    if(fresh) toast('ดึงข้อมูลล่าสุดแล้ว');
  }catch(err){ setSync(''); if(USER) toast(err.message, 'er'); else throw err; }
}
function rerender(){
  renderMe(); renderNav();
  if(CUR && !lv(CUR)) return go(null);
  if(CUR){ renderList(); renderMap(); } else { renderDash(); renderMap(); }
}

// ══════════ ANALYZE (ตรวจข้อมูลอัจฉริยะ) ══════════
let BND = [], BB = null;
function inside(la, ln){
  if(!BB || la < BB[0] || la > BB[2] || ln < BB[1] || ln > BB[3]) return false;
  let c = false;
  for(let i = 0, j = BND.length - 1; i < BND.length; j = i++){
    const [yi, xi] = BND[i], [yj, xj] = BND[j];
    if((yi > la) !== (yj > la) && ln < (xj - xi) * (la - yi) / (yj - yi) + xi) c = !c;
  }
  return c;
}
function analyze(){
  INS = []; const now = Date.now();
  Object.keys(CATS).forEach(k => {
    const rows = DATA[k] || [], c = CATS[k];
    // ฟิลด์จริง = ฟิลด์มาตรฐาน + คอลัมน์เพิ่มเติมที่มีใน Sheet
    const extra = new Set();
    rows.slice(0, 80).forEach(r => Object.keys(r).forEach(f => { if(!SYS.has(f) && f[0] !== '_' && !c.f.includes(f)) extra.add(f); }));
    const note = c.f.filter(f => /หมายเหตุ|รายละเอียด/.test(f));
    FIELDS[k] = [...c.f.filter(f => !note.includes(f)), ...extra, ...note];
    const fs = FIELDS[k], f0 = fs[0], hn = fs.find(f => /เลขที่|บ้านเลขที่/.test(f));
    const seen = new Map(), cnt = {noloc:0, out:0, dup:0, bad:0, due:0};
    rows.forEach(r => {
      IDX.set(r, fs.map(f => norm(r[f])).join('|') + '|' + fs.map(f => digits(r[f])).join('|'));
      const fl = {};
      if(!hasLL(r)) fl.noloc = 1; else if(BND.length && !inside(+r.lat, +r.lng)) fl.out = 1;
      if(BAD.test(String(r['สถานะ'] || r['สภาพ'] || ''))) fl.bad = 1;
      if(k === 'fire_ext'){ const t = Date.parse(r['วันตรวจล่าสุด']); if(isNaN(t) || now - t > 365 * 864e5) fl.due = 1; }
      const key = norm(r[f0]) + (hn ? '#' + norm(r[hn]) : '');
      if(norm(r[f0])){ if(seen.has(key)){ fl.dup = 1; FLAG.get(seen.get(key)).dup = 1; } else seen.set(key, r); }
      FLAG.set(r, fl);
    });
    rows.forEach(r => { const fl = FLAG.get(r); for(const t in fl) cnt[t]++; });
    if(lv(k)) for(const t in cnt) if(cnt[t]) INS.push({k, t, n: cnt[t]});
  });
  INS.sort((a, b) => ({bad:0, due:1, out:2, dup:3, noloc:4}[a.t] - {bad:0, due:1, out:2, dup:3, noloc:4}[b.t]) || b.n - a.n);
}
const INFO = {
  bad:['wrench','e','ชำรุด/ต้องซ่อม'], due:['clock','w','ถึงกำหนดตรวจ (เกิน 1 ปี)'], out:['out','w','พิกัดอยู่นอกเขตเทศบาล'],
  dup:['dup','v','อาจซ้ำกัน'], noloc:['pin','v','ยังไม่มีพิกัด']
};

// ══════════ SIDEBAR ══════════
function renderMe(){
  $('#meName').textContent = USER.name;
  $('#meAv').textContent = (USER.name || '?').trim().charAt(0);
  $('#meRole').textContent = DEMO ? 'โหมดทดลอง' : ({superadmin:'ผู้ดูแลระบบสูงสุด',admin:'ผู้ดูแลระบบ'}[USER.role] || 'เจ้าหน้าที่');
  $('#mUsers').classList.toggle('hide', USER.role !== 'superadmin' || DEMO);
  $('#mSheet').classList.toggle('hide', !(USER.role === 'admin' || USER.role === 'superadmin'));
  $('#mPw').classList.toggle('hide', DEMO); $('#mOut').classList.toggle('hide', DEMO);
  $('#demoTag').classList.toggle('hide', !DEMO);
}
function renderNav(){
  let h = navItem('', null, 'ภาพรวม', '', '#8b5cf6');
  GROUPS.forEach(([g, gl]) => {
    const ks = keysOf(g).filter(lv); if(!ks.length) return;
    h += `<div class="nv-g">${gl}</div>` + ks.map(k => navItem(k, CATS[k].i, CATS[k].l, DATA[k].length, CATS[k].c)).join('');
  });
  $('#navIn').innerHTML = h;
  requestAnimationFrame(moveInd);
}
const navItem = (k, i, l, n, c) => `<div class="ni${(CUR||'')===k?' on':''}" data-go="${k}" data-tip="${esc(l)}" style="--c:${c}"><span class="ic">${i || ic('grid', 16)}</span><span class="lb">${esc(l)}</span>${n!==''?`<span class="ct">${num(n)}</span>`:''}</div>`;
function moveInd(){
  const on = $('#navIn .ni.on'), ind = $('#ind');
  if(!on){ ind.style.opacity = 0; return; }
  ind.style.opacity = 1; ind.style.left = on.offsetLeft + 'px'; ind.style.width = on.offsetWidth + 'px';
  ind.style.transform = `translateY(${on.offsetTop}px)`;
}

// ══════════ ROUTER ══════════
function go(k, fit){
  const same = (k || null) === CUR;
  CUR = k || null; closeDrawer();
  document.body.classList.remove('nav'); $('#ov').classList.remove('sh');
  if(!same) F = { q:'', mode:'all', moo:'', sort:'new' };
  renderNav();
  const g = CUR && GROUPS.find(x => x[0] === CATS[CUR].g)[1];
  $('#crumb').innerHTML = CUR ? `<span class="c2">CDDP</span>${ic('right')}<span class="c2">${esc(g)}</span>${ic('right')}<b>${esc(CATS[CUR].l)}</b>` : `<span class="c2">CDDP</span>${ic('right')}<b>ภาพรวม</b>`;
  $('#addBtn').classList.toggle('hide', !(CUR && lv(CUR) >= 2));
  CUR ? renderCat() : renderDash();
  renderMap(fit !== false);
  autoLines();
  try{ history.replaceState(null, '', CUR ? '#' + CUR : location.pathname); }catch(_){}
}

// ══════════ DASHBOARD ══════════
function renderDash(){
  const n = k => (DATA[k]||[]).length, sum = ks => ks.filter(lv).reduce((a,k) => a + n(k), 0);
  let pop = 0; keysOf('hh').forEach(k => (DATA[k]||[]).forEach(r => pop += parseInt(r['จำนวนสมาชิก']) || 0));
  const all = Object.keys(CATS).filter(lv), max = Math.max(1, ...all.map(n));
  const hr = new Date().getHours(), greet = hr < 12 ? 'สวัสดีตอนเช้า' : hr < 17 ? 'สวัสดีตอนบ่าย' : 'สวัสดีตอนเย็น';
  const K = [['t1','🏠','ครัวเรือน',sum(keysOf('hh'))],['t2','👥','ประชากร',pop],['t3','🏗️','โครงสร้างพื้นฐาน',sum(keysOf('inf'))],
             ['t4','🤝','ผู้รับสวัสดิการ',sum(keysOf('wf'))],['t5','⚠️','เหตุภัยพิบัติ',lv('disaster')?n('disaster'):0],['t6','📍','ข้อมูลทั้งหมด',sum(all)]];
  let side = '';
  GROUPS.forEach(([g, gl]) => {
    const ks = keysOf(g).filter(lv); if(!ks.length) return;
    side += `<h4>${gl}</h4>` + ks.map(k => { const c = CATS[k], off = HIDDEN.has(k);
      return `<div class="br${off?' off':''}" data-go="${k}" style="--c:${c.c}"><span class="e">${c.i}</span><div><div class="t"><span>${esc(c.l)}</span><b>${num(n(k))}</b></div><div class="bar"><i data-w="${n(k)/max*100}" style="background:${c.c}"></i></div></div><button class="eye" data-eye="${k}" title="แสดง/ซ่อนบนแผนที่">${ic(off?'eyeoff':'eye',16)}</button></div>`;
    }).join('');
  });
  const ins = INS.slice(0, 7).map(x => { const [i, cl, lb] = INFO[x.t], c = CATS[x.k];
    return `<div class="in" data-ins="${x.k}|${x.t}"><span class="x ${cl}">${ic(i)}</span><div><b>${c.i} ${esc(c.l)}</b><small>${lb}</small></div><span class="n">${num(x.n)}</span></div>`; }).join('')
    || `<div class="ok-all">${ic('ok',22)} ข้อมูลครบถ้วน ไม่พบสิ่งที่ต้องตรวจสอบ</div>`;
  const recent = [];
  all.forEach(k => DATA[k].forEach(r => { const t = tsOf(r); if(t) recent.push([t, k, r]); }));
  recent.sort((a, b) => b[0] - a[0]);
  const rec = recent.slice(0, 7).map(([t, k, r]) => `<div class="in" data-rec="${k}|${esc(r.id)}"><span class="x v" style="font-size:16px">${CATS[k].i}</span><div><b>${esc(prim(k, r) || '(ไม่ระบุ)')}</b><small>${esc(CATS[k].l)}${r.updated_by?' · '+esc(r.updated_by):''}</small></div><small style="margin-left:auto;white-space:nowrap">${ago(t)}</small></div>`).join('')
    || '<div class="ok-all" style="color:var(--mu)">ยังไม่มีการแก้ไขผ่านระบบ</div>';
  $('#view').innerHTML = `<div class="page st">
    <div class="pt"><div><h1>${greet}, ${esc(USER.name)} 👋</h1><p>ภาพรวมข้อมูลเมืองดิจิทัล เทศบาลตำบลคลองตำหรุ · ${new Date().toLocaleDateString('th-TH',{dateStyle:'full'})}</p></div></div>
    <div class="kp">${K.map(([t,i,l,v]) => `<div class="k ${t}"><span class="ki">${i}</span><small>${l}</small><b data-n="${v}">0</b></div>`).join('')}</div>
    <div class="dg">
      <div class="card mapcard"><div class="slot" id="slot"></div></div>
      <div class="card"><div class="ch"><h3>${ic('grid')} ข้อมูลตามหมวด</h3><small>คลิกเพื่อเปิด</small></div><div class="grp side-list">${side}</div></div>
    </div>
    <div class="dg2">
      <div class="card"><div class="ch"><h3>${ic('spark')} สิ่งที่ควรตรวจสอบ</h3><small>ระบบวิเคราะห์อัตโนมัติ</small></div><div class="ins">${ins}</div></div>
      <div class="card"><div class="ch"><h3>${ic('clock')} แก้ไขล่าสุด</h3></div><div class="ins">${rec}</div></div>
    </div>
  </div>`;
  mountMap();
  document.querySelectorAll('.k b[data-n]').forEach(b => countUp(b, +b.dataset.n));
  requestAnimationFrame(() => setTimeout(() => document.querySelectorAll('.bar i[data-w]').forEach(i => i.style.width = i.dataset.w + '%'), 60));
}

$('#view').addEventListener('click', e => {
  const eye = e.target.closest('[data-eye]');
  if(eye){ e.stopPropagation(); const k = eye.dataset.eye; HIDDEN.has(k) ? HIDDEN.delete(k) : HIDDEN.add(k);
    localStorage.setItem('cddp_hidden', JSON.stringify([...HIDDEN]));
    eye.closest('.br').classList.toggle('off'); eye.innerHTML = ic(HIDDEN.has(k)?'eyeoff':'eye', 16); renderMap(); return; }
  const ins = e.target.closest('[data-ins]');
  if(ins){ const [k, t] = ins.dataset.ins.split('|'); go(k, false); F.mode = t; renderCat(); renderMap(true); return; }
  const rc = e.target.closest('[data-rec]');
  if(rc){ const [k, id] = rc.dataset.rec.split('|'); go(k); setTimeout(() => focusRec(k, id), 700); return; }
  const g = e.target.closest('.br[data-go]'); if(g) return go(g.dataset.go);
  const ch = e.target.closest('[data-mode]');
  if(ch){ F.mode = ch.dataset.mode; LIMIT = 150; document.querySelectorAll('[data-mode]').forEach(x => x.classList.toggle('on', x === ch)); renderList(); renderMap(); return; }
  const it = e.target.closest('.it[data-id]');
  if(it){
    if(e.target.closest('[data-ed]')) return openForm(it.dataset.id);
    if(e.target.closest('[data-del]')) return removeRec(it.dataset.id);
    focusRec(CUR, it.dataset.id);
  }
  if(e.target.closest('#moreBtn')){ LIMIT += 300; renderList(); }
  if(e.target.closest('#csvBtn')) exportCSV();
});

// ══════════ CATEGORY ══════════
function renderCat(){
  const c = CATS[CUR], rows = DATA[CUR], fs = fieldsOf(CUR); LIMIT = 150;
  const cnt = {noloc:0, out:0, dup:0, bad:0, due:0};
  rows.forEach(r => { const fl = FLAG.get(r) || {}; for(const t in fl) cnt[t]++; });
  const withLL = rows.filter(hasLL).length, pct = rows.length ? Math.round(withLL / rows.length * 100) : 0;
  const moos = fs.includes('หมู่') ? [...new Set(rows.map(r => String(r['หมู่'] || '').trim()).filter(Boolean))].sort((a, b) => a - b) : [];
  const chip = (m, l, n) => `<button class="chip${F.mode===m?' on':''}" data-mode="${m}">${l}${n!=null?` <em>${num(n)}</em>`:''}</button>`;
  $('#view').innerHTML = `<div class="page">
    <div class="pt"><div><h1><span class="em" style="--c:${c.c}">${c.i}</span>${esc(c.l)}</h1><p>ทั้งหมด ${num(rows.length)} รายการ · มีพิกัด ${pct}% · คลิกรายการเพื่อดูบนแผนที่</p></div><div class="sp"></div>
      <button class="btn sm" id="csvBtn">${ic('download',16)} ส่งออก CSV</button></div>
    <div class="cg">
      <div class="card lst">
        <div class="fl">
          <div class="fin">${ic('search')}<input id="flt" placeholder="กรองในหมวดนี้ (ชื่อ เลขที่ เบอร์…)" value="${esc(F.q)}"></div>
          <div class="chips">${chip('all','ทั้งหมด',rows.length)}${cnt.bad?chip('bad','🔧 ชำรุด',cnt.bad):''}${cnt.due?chip('due','⏰ ถึงกำหนดตรวจ',cnt.due):''}${cnt.noloc?chip('noloc','📍 ไม่มีพิกัด',cnt.noloc):''}${cnt.out?chip('out','🚫 นอกเขต',cnt.out):''}${cnt.dup?chip('dup','👥 อาจซ้ำ',cnt.dup):''}
            ${moos.length>1?`<span class="chip"><select id="fMoo"><option value="">ทุกหมู่</option>${moos.map(m => `<option${F.moo===m?' selected':''}>${esc(m)}</option>`).join('')}</select></span>`:''}
            <span class="chip"><select id="fSort"><option value="new">ล่าสุด</option><option value="az">ก-ฮ</option><option value="near">ใกล้ฉัน</option></select></span></div>
        </div>
        <div class="items" id="items"></div>
      </div>
      <div class="card mapcard"><div class="slot" id="slot"></div></div>
    </div></div>`;
  $('#fSort').value = F.sort;
  let t; $('#flt').addEventListener('input', e => { clearTimeout(t); t = setTimeout(() => { F.q = e.target.value; LIMIT = 150; renderList(); renderMap(); }, 120); });
  $('#fMoo') && ($('#fMoo').onchange = e => { F.moo = e.target.value; renderList(); renderMap(); });
  $('#fSort').onchange = e => {
    F.sort = e.target.value;
    if(F.sort === 'near' && !ME_LL) return getGPS(ll => { ME_LL = ll; renderList(); }, () => { F.sort = 'new'; e.target.value = 'new'; });
    renderList();
  };
  renderList(); mountMap();
}
function filtered(){
  const q = norm(F.q), qd = digits(F.q);
  let l = DATA[CUR] || [];
  if(F.mode !== 'all') l = l.filter(r => (FLAG.get(r) || {})[F.mode]);
  if(F.moo) l = l.filter(r => String(r['หมู่'] || '').trim() === F.moo);
  if(q) l = l.filter(r => { const s = IDX.get(r) || ''; return s.includes(q) || (qd.length >= 3 && s.includes(qd)); });
  return l;
}
function renderList(){
  const c = CATS[CUR], fs = fieldsOf(CUR), L = lv(CUR);
  let l = filtered().slice();
  if(F.sort === 'az') l.sort((a, b) => String(a[fs[0]]).localeCompare(String(b[fs[0]]), 'th'));
  else if(F.sort === 'near' && ME_LL) l.sort((a, b) => (hasLL(a) ? haversine(ME_LL, [+a.lat, +a.lng]) : 1e9) - (hasLL(b) ? haversine(ME_LL, [+b.lat, +b.lng]) : 1e9));
  else if(l.some(r => tsOf(r))) l.sort((a, b) => tsOf(b) - tsOf(a));
  else l.reverse();
  const qq = F.q.trim().toLowerCase();
  const h = l.slice(0, LIMIT).map((r, i) => {
    const fl = FLAG.get(r) || {};
    const sub = fs.slice(1).filter(f => !/หมายเหตุ|รายละเอียด/.test(f) && r[f] !== '' && r[f] != null).slice(0, 3)
      .map(f => `<span>${esc(f)}: ${hl(fmt(f, r[f]), qq)}</span>`).join('');
    const near = F.sort === 'near' && ME_LL && hasLL(r) ? `<span class="bdg v">${ic('nav',11)} ${num(Math.round(haversine(ME_LL, [+r.lat, +r.lng])))} ม.</span>` : '';
    const b = (fl.bad?'<span class="bdg e">🔧 ชำรุด</span>':'') + (fl.due?'<span class="bdg w">⏰ ถึงกำหนดตรวจ</span>':'') + (fl.noloc?'<span class="bdg w">📍 ไม่มีพิกัด</span>':'') + (fl.out?'<span class="bdg w">🚫 นอกเขต</span>':'') + (fl.dup?'<span class="bdg v">👥 อาจซ้ำ</span>':'') + near;
    return `<div class="it" data-id="${esc(r.id)}" style="--c:${c.c};animation-delay:${Math.min(i,14)*22}ms"><span class="dot">${c.i}</span>
      <div class="b"><b>${hl(fmt(fs[0], r[fs[0]]) || '(ไม่ระบุชื่อ)', qq)}</b><div class="s">${sub}</div>${b?`<div>${b}</div>`:''}</div>
      <div class="ac">${L>=2?`<button class="ib" data-ed title="แก้ไข">${ic('edit',16)}</button>`:''}${L>=3?`<button class="ib dan" data-del title="ลบ">${ic('trash',16)}</button>`:''}</div></div>`;
  }).join('');
  $('#items').innerHTML = h || `<div class="empty"><div>${c.i}</div>${F.q||F.mode!=='all'||F.moo?'ไม่พบรายการตามเงื่อนไข':'ยังไม่มีข้อมูลในหมวดนี้'}${!F.q&&F.mode==='all'&&L>=2?'<br><small>กด "เพิ่มข้อมูล" ด้านบน หรือกด N</small>':''}</div>`;
  if(l.length > LIMIT) $('#items').insertAdjacentHTML('beforeend', `<button class="btn sm more" id="moreBtn">แสดงเพิ่ม (${num(l.length-LIMIT)})</button>`);
}

// ══════════ MAP ══════════
const TILES = {
  gsat:['https://mt{s}.google.com/vt?lyrs=y&hl=th&x={x}&y={y}&z={z}',{subdomains:'0123',maxZoom:21,attribution:'© Google'}],
  groad:['https://mt{s}.google.com/vt?lyrs=m&hl=th&x={x}&y={y}&z={z}',{subdomains:'0123',maxZoom:21,attribution:'© Google'}],
  esri:['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:21,maxNativeZoom:19,attribution:'© Esri'}],
  light:['https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',{subdomains:'abcd',maxZoom:21,maxNativeZoom:19,attribution:'© OSM © CARTO'}]
};
let map, pts, bnd, roadL, waterL, tile, MB, pickMk = null, gps = null;
function initMap(){
  BND = BOUNDARY_RAW.trim().split(/\s+/).map(p => { const x = p.split(','); return [+x[1], +x[0]]; });
  BB = [Math.min(...BND.map(p => p[0])), Math.min(...BND.map(p => p[1])), Math.max(...BND.map(p => p[0])), Math.max(...BND.map(p => p[1]))];
  map = L.map('map', {preferCanvas:true, zoomControl:false, minZoom:12, maxZoom:21, zoomSnap:.5, wheelPxPerZoomLevel:90});
  L.control.zoom({position:'bottomright'}).addTo(map);
  bnd = L.polygon(BND, {color:'#8b5cf6', weight:2.5, dashArray:'8 6', fillColor:'#8b5cf6', fillOpacity:.05, interactive:false}).addTo(map);
  map.fitBounds(bnd.getBounds(), {padding:[20,20]});
  map.setMaxBounds(bnd.getBounds().pad(.8));
  pts = L.featureGroup().addTo(map);
  roadL = L.layerGroup(ROAD_LINES.map(r => L.polyline(r.c, {color:'#f59e0b', weight:4, opacity:.9}).bindTooltip(r.n, {sticky:true})));
  waterL = L.layerGroup(WATERWAY_LINES.map(w => L.polyline(w.c, {color:'#0ea5e9', weight:5, opacity:.85}).bindTooltip(w.n, {sticky:true})));
  MB = $('#mapBox');
  setBase(localStorage.getItem('cddp_base') || 'gsat');
  $('#baseSel').onchange = e => setBase(e.target.value);
  new ResizeObserver(() => map.invalidateSize()).observe($('#map'));
  map.on('click', e => { if(pickMk){ pickMk.setLatLng(e.latlng); setLL(e.latlng.lat, e.latlng.lng); } });
  $('#tBnd').onclick = () => toggle('tBnd', bnd);
  $('#tRoad').onclick = () => toggle('tRoad', roadL);
  $('#tWater').onclick = () => toggle('tWater', waterL);
  $('#tFit').onclick = () => map.flyToBounds(bnd.getBounds(), {padding:[20,20], duration:.7});
  $('#tFs').onclick = () => document.fullscreenElement ? document.exitFullscreen() : MB.requestFullscreen?.();
  $('#tLoc').onclick = () => getGPS(ll => {
    ME_LL = ll; if(gps) gps.remove();
    gps = L.circleMarker(ll, {radius:9, color:'#fff', weight:3, fillColor:'#10b981', fillOpacity:1}).addTo(map).bindPopup('ตำแหน่งของคุณ');
    map.flyTo(ll, 17); pulse(ll);
  });
}
function setBase(k){
  if(tile) map.removeLayer(tile);
  const t = TILES[k]; tile = L.tileLayer(t[0], {...t[1], updateWhenIdle:true, keepBuffer:3}).addTo(map); tile.bringToBack();
  $('#baseSel').value = k; localStorage.setItem('cddp_base', k);
  let err = 0, ok = false;
  if(k !== 'esri'){
    tile.on('tileload', () => ok = true);
    tile.on('tileerror', () => { if(++err === 4 && !ok){ setBase('esri'); toast('แผนที่ฐานโหลดไม่ได้ สลับเป็นแผนที่สำรองแล้ว', 'in'); } });
  }
}
function mountMap(){ const s = $('#slot'); if(s){ s.appendChild(MB); map.invalidateSize(false); setTimeout(() => map.invalidateSize(), 80); } }
function renderMap(fit){
  pts.clearLayers(); MK = {};
  const sets = CUR ? [[CUR, filtered()]] : Object.keys(CATS).filter(k => lv(k) && !HIDDEN.has(k)).map(k => [k, DATA[k]]);
  let n = 0;
  sets.forEach(([k, rows]) => { const c = CATS[k];
    rows.forEach(r => {
      if(!hasLL(r)) return;
      const m = L.circleMarker([+r.lat, +r.lng], {radius: CUR ? 8 : 6, color:'#fff', weight:2, fillColor:c.c, fillOpacity:1})
        .bindPopup(() => popup(k, r), {maxWidth:320}).addTo(pts);
      MK[k + ':' + r.id] = m; n++;
    });
  });
  $('#mcount').textContent = num(n) + ' จุด' + (CUR ? '' : ' · ' + sets.length + ' หมวด');
  if(fit){
    if(CUR && n) map.flyToBounds(pts.getBounds(), {padding:[50,50], maxZoom:17, duration:.7});
    else map.flyToBounds(bnd.getBounds(), {padding:[20,20], duration:.7});
  }
}
function popup(k, r){
  const c = CATS[k];
  const rows = fieldsOf(k).filter(f => r[f] !== '' && r[f] != null).map(f => `<dt>${esc(f)}</dt><dd>${esc(fmt(f, r[f]))}</dd>`).join('');
  return `<div class="pp"><h5><span style="background:${c.c}22">${c.i}</span>${esc(c.l)}</h5><dl>${rows || '<dt>ไม่มีรายละเอียด</dt><dd></dd>'}</dl>
    <div class="a"><a target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${+r.lat},${+r.lng}">${ic('nav')} นำทาง</a>
    ${lv(k)>=2 ? `<button onclick="App.edit('${k}','${esc(r.id)}')">${ic('edit')} แก้ไข</button>` : ''}</div></div>`;
}
function pulse(ll){ const m = L.marker(ll, {icon: L.divIcon({className:'', html:'<div class="pulse"></div>', iconSize:[0,0]}), interactive:false}).addTo(map); setTimeout(() => m.remove(), 4300); }
function focusRec(k, id){
  document.querySelectorAll('.it.sel').forEach(x => x.classList.remove('sel'));
  const el = document.querySelector(`.it[data-id="${CSS.escape(String(id))}"]`);
  if(el){ el.classList.add('sel'); el.scrollIntoView({block:'nearest', behavior:'smooth'}); }
  const m = MK[k + ':' + id];
  if(!m) return toast('รายการนี้ยังไม่มีพิกัด กด ✎ เพื่อเพิ่มตำแหน่ง', 'in');
  if(innerWidth <= 960) $('#slot')?.scrollIntoView({behavior:'smooth'});
  map.flyTo(m.getLatLng(), 18, {duration:.8});
  map.once('moveend', () => { m.openPopup(); pulse(m.getLatLng()); });
}
function autoLines(){
  if(CUR === 'road' && !map.hasLayer(roadL)) toggle('tRoad', roadL);
  if(CUR === 'waterway' && !map.hasLayer(waterL)) toggle('tWater', waterL);
}
function toggle(id, layer){ const on = !map.hasLayer(layer); on ? layer.addTo(map) : map.removeLayer(layer); $('#'+id).classList.toggle('on', on); }
function getGPS(ok, fail){
  if(!navigator.geolocation){ toast('อุปกรณ์ไม่รองรับ GPS', 'er'); return fail && fail(); }
  toast('กำลังหาตำแหน่ง…', 'in');
  navigator.geolocation.getCurrentPosition(p => ok([p.coords.latitude, p.coords.longitude]),
    () => { toast('ไม่สามารถระบุตำแหน่งได้ (อนุญาตการเข้าถึงตำแหน่งหรือยัง?)', 'er'); fail && fail(); }, {enableHighAccuracy:true, timeout:10000, maximumAge:30000});
}

// ══════════ FORM (อัจฉริยะ) ══════════
function suggest(k, f){
  const s = new Map();
  (DATA[k] || []).forEach(r => { const v = String(r[f] ?? '').trim(); if(v && v.length < 60) s.set(v, (s.get(v) || 0) + 1); });
  return [...s].filter(x => x[1] > 1).sort((a, b) => b[1] - a[1]).slice(0, 30).map(x => x[0]);
}
function field(f, v, i){
  v = v ?? ''; const n = `name="${esc(f)}"`, val = esc(v);
  const w = (inner, wide, note) => `<div class="fd${wide?' w':''}" data-f="${esc(f)}"><label>${esc(f)}${note?` <small>· ${note}</small>`:''}</label>${inner}<div class="hint"></div></div>`;
  if(PII.test(f) && USER && !USER.pii) return w(`<input value="${val}" disabled>`, 0, 'ปิดบังตาม PDPA');
  if(/หมายเหตุ|รายละเอียด/.test(f)) return w(`<textarea ${n} rows="3">${val}</textarea>`, 1);
  if(OPTS[f]){ const l = OPTS[f].includes(String(v)) || !v ? OPTS[f] : [...OPTS[f], String(v)];
    return w(`<select ${n}><option value=""></option>${l.map(x => `<option${x===String(v)?' selected':''}>${esc(x)}</option>`).join('')}</select>`); }
  if(/^วัน(?!เปิด)|เกิด|ตรวจ/.test(f)) return w(`<input type="date" ${n} value="${val.slice(0,10)}">`);
  if(/จำนวน|อายุ|ความยาว|ความกว้าง|เงิน/.test(f)) return w(`<input type="number" step="any" min="0" ${n} value="${val}">`);
  if(/เบอร์|โทร/.test(f)) return w(`<input type="tel" inputmode="tel" ${n} value="${esc(fmt(f, v))}" placeholder="0XX-XXX-XXXX">`);
  if(PII.test(f)) return w(`<input inputmode="numeric" maxlength="17" ${n} value="${val}" placeholder="X-XXXX-XXXXX-XX-X">`);
  const sg = suggest(CUR, f);
  return w(`<input ${n} value="${val}"${sg.length?` list="dl${i}"`:''} autocomplete="off">${sg.length?`<datalist id="dl${i}">${sg.map(x => `<option value="${esc(x)}">`).join('')}</datalist>`:''}`);
}
function openForm(id){
  if(!CUR || lv(CUR) < 2) return;
  const c = CATS[CUR], fs = fieldsOf(CUR);
  let r = {};
  if(id){ r = DATA[CUR].find(x => String(x.id) === String(id)); if(!r) return toast('ไม่พบรายการ กรุณารีเฟรช', 'er'); }
  else {
    const t = new Date(), m = CUR.match(/household_m(\d)/);
    if(m) r['หมู่'] = m[1];
    if(CUR === 'pet') Object.assign(r, {'แขวง/ตำบล':'คลองตำหรุ','อำเภอ':'เมืองชลบุรี','ปีสำรวจ':String(t.getFullYear()+543),'วันที่บันทึกข้อมูล': t.toISOString().slice(0,10)});
    if(CUR === 'fire_ext') r['วันตรวจล่าสุด'] = t.toISOString().slice(0,10);
  }
  EID = id || null;
  $('#dr').innerHTML = `<div class="dh"><h3><span style="background:${c.c}1f">${c.i}</span>${id?'แก้ไข':'เพิ่ม'}${esc(c.l)}</h3><button class="ib" id="drX">${ic('x')}</button></div>
    <form class="db" id="fm" novalidate><div class="fg">${fs.map((f, i) => field(f, r[f], i)).join('')}</div>
      <div class="loc"><b>${ic('pin')} ตำแหน่งที่ตั้ง</b>
        <div class="fg" style="margin-top:12px">
          <div class="fd"><label>ละติจูด (lat) *</label><input name="lat" type="number" step="any" inputmode="decimal" value="${esc(r.lat||'')}" placeholder="13.44xxxx"></div>
          <div class="fd"><label>ลองจิจูด (lng) *</label><input name="lng" type="number" step="any" inputmode="decimal" value="${esc(r.lng||'')}" placeholder="100.99xxxx"></div>
        </div>
        <div class="row"><button type="button" class="btn sm" id="pickBtn">${ic('pin',16)} เลือกบนแผนที่</button><button type="button" class="btn sm" id="gpsBtn">${ic('locate',16)} ตำแหน่งปัจจุบัน</button></div>
        <div class="nb" id="nb"></div>
      </div>
      <div id="warns"></div>
    </form>
    <div class="df"><small>${r.updated_by ? `${ic('clock',13)} แก้ไขล่าสุด ${esc(r.ts||'')} โดย ${esc(r.updated_by)}` : 'Ctrl+S เพื่อบันทึก'}</small><button class="btn" id="drC">ยกเลิก</button><button class="btn pri" id="drS">${ic('save',16)} บันทึก</button></div>`;
  $('#dr').classList.add('sh'); $('#ov').classList.add('sh');
  $('#drX').onclick = $('#drC').onclick = closeDrawer;
  $('#drS').onclick = () => saveForm();
  $('#fm').onsubmit = e => { e.preventDefault(); saveForm(); };
  $('#fm').addEventListener('input', e => { if(e.target.name) check(e.target); if(e.target.name === 'lat' || e.target.name === 'lng') nearby(); });
  $('#fm').querySelectorAll('[name]').forEach(check);
  $('#pickBtn').onclick = startPick;
  $('#gpsBtn').onclick = () => getGPS(ll => { setLL(ll[0], ll[1]); toast('ได้ตำแหน่งแล้ว'); });
  nearby();
  setTimeout(() => $('#fm').querySelector('input:not([disabled]),select,textarea')?.focus(), 420);
}
function hint(el, cls, msg){ const fd = el.closest('.fd'); if(!fd) return; const h = fd.querySelector('.hint'); if(h){ h.className = 'hint ' + (cls || ''); h.textContent = msg || ''; } fd.classList.toggle('bad', cls === 'e'); }
function check(el){
  const f = el.name, v = String(el.value).trim(); if(!f || !v) return hint(el);
  if(PII.test(f)){ const d = digits(v); return d.length !== 13 ? hint(el, 'e', `ต้องมี 13 หลัก (ตอนนี้ ${d.length})`) : thaiID(d) ? hint(el, 'o', '✓ เลขบัตรถูกต้อง') : hint(el, 'e', 'เลขบัตรไม่ถูกต้อง (หลักตรวจสอบไม่ตรง)'); }
  if(/เบอร์|โทร/.test(f)){ const d = digits(v); return d.length === 9 || d.length === 10 ? hint(el) : hint(el, 'w', 'เบอร์โทรควรมี 9–10 หลัก'); }
  if(f === fieldsOf(CUR)[0]){
    const dup = DATA[CUR].find(r => String(r.id) !== String(EID) && norm(r[f]) === norm(v));
    return dup ? hint(el, 'w', '⚠ มีรายการชื่อนี้อยู่แล้ว ตรวจสอบว่าไม่ซ้ำ') : hint(el);
  }
  hint(el);
}
function setLL(la, ln){ const f = $('#fm'); if(!f) return; f.lat.value = (+la).toFixed(6); f.lng.value = (+ln).toFixed(6); nearby(); }
function nearby(){
  const f = $('#fm'), nb = $('#nb'); if(!f || !nb) return;
  const la = +f.lat.value, ln = +f.lng.value;
  if(!la || !ln){ nb.innerHTML = ''; return; }
  let best = null, bd = 1e9;
  DATA[CUR].forEach(r => { if(String(r.id) === String(EID) || !hasLL(r)) return; const d = haversine([la, ln], [+r.lat, +r.lng]); if(d < bd){ bd = d; best = r; } });
  const out = !inside(la, ln);
  nb.innerHTML = (out ? `<span style="color:#b45309">${ic('alert',14)} ตำแหน่งนี้อยู่นอกเขตเทศบาล</span><br>` : `<span style="color:#059669">${ic('ok',14)} อยู่ในเขตเทศบาล</span><br>`)
    + (best ? `ใกล้ “${esc(prim(CUR, best) || '-')}” ระยะ ${num(Math.round(bd))} ม.${bd < 10 ? ' <b style="color:#b45309">— ใกล้มาก อาจซ้ำ</b>' : ''}` : '');
}
function closeDrawer(){ endPick(); $('#dr').classList.remove('sh'); if(!$('#md').classList.contains('sh')) $('#ov').classList.remove('sh'); EID = null; }
async function saveForm(){
  const fm = $('#fm'); if(!fm) return;
  const rec = {}; new FormData(fm).forEach((v, k) => rec[k] = String(v).trim());
  Object.keys(rec).forEach(k => { if(/เบอร์|โทร/.test(k) && rec[k]) rec[k] = digits(rec[k]).replace(/^(\d{2,3})(\d{3})(\d{4})$/, '$1-$2-$3'); });
  if(!(+rec.lat) || !(+rec.lng)){ toast('กรุณาระบุตำแหน่ง (เลือกบนแผนที่ หรือใช้ตำแหน่งปัจจุบัน)', 'er'); fm.lat.focus(); return; }
  const warn = [];
  if(!inside(+rec.lat, +rec.lng)) warn.push('ตำแหน่งอยู่นอกเขตเทศบาล');
  const f0 = fieldsOf(CUR)[0];
  if(!rec[f0] && fm[f0]) warn.push(`ยังไม่ได้กรอก “${f0}”`);
  Object.keys(rec).forEach(k => { if(PII.test(k) && rec[k] && !thaiID(rec[k])) warn.push('เลขบัตรประชาชนไม่ถูกต้อง'); });
  if(rec[f0] && DATA[CUR].some(r => String(r.id) !== String(EID) && norm(r[f0]) === norm(rec[f0]))) warn.push(`มี “${rec[f0]}” อยู่แล้วในหมวดนี้`);
  if(warn.length && !confirm('ตรวจพบ:\n• ' + warn.join('\n• ') + '\n\nต้องการบันทึกต่อหรือไม่?')) return;
  if(EID) rec.id = EID;
  const b = $('#drS'); b.disabled = true; b.innerHTML = ic('refresh',16).replace('class="i"', 'class="i spin"') + ' กำลังบันทึก…';
  try{
    const j = await api('save', {cat: CUR, rec});
    const l = DATA[CUR], i = l.findIndex(x => String(x.id) === String(j.rec.id));
    i >= 0 ? l[i] = j.rec : l.push(j.rec);
    const was = EID; analyze(); cacheSave();
    closeDrawer(); renderNav(); renderCat(); renderMap();
    toast(was ? 'แก้ไขเรียบร้อย' : 'เพิ่มข้อมูลเรียบร้อย');
    setTimeout(() => focusRec(CUR, j.rec.id), 250);
  }catch(err){ toast('บันทึกไม่สำเร็จ: ' + err.message, 'er'); b.disabled = false; b.innerHTML = ic('save',16) + ' บันทึก'; }
}
async function removeRec(id){
  const r = DATA[CUR].find(x => String(x.id) === String(id));
  if(!confirm(`ลบ “${r ? prim(CUR, r) || id : id}” ?\nการลบไม่สามารถย้อนกลับได้`)) return;
  try{
    await api('remove', {cat: CUR, id});
    DATA[CUR] = DATA[CUR].filter(x => String(x.id) !== String(id));
    analyze(); cacheSave(); renderNav(); renderCat(); renderMap(); toast('ลบเรียบร้อย');
  }catch(err){ toast('ลบไม่สำเร็จ: ' + err.message, 'er'); }
}
window.App = { edit: (k, id) => { map.closePopup(); const sw = CUR !== k; if(sw) go(k, false); setTimeout(() => openForm(id), sw ? 300 : 0); } };

function startPick(){
  document.body.classList.add('picking'); $('#pickBar').classList.remove('hide');
  $('#slot')?.scrollIntoView({behavior:'smooth'});
  const f = $('#fm'); const ll = (+f.lat.value && +f.lng.value) ? L.latLng(+f.lat.value, +f.lng.value) : map.getCenter();
  pickMk = L.marker(ll, {draggable:true, autoPan:true}).addTo(map);
  pickMk.on('drag', e => setLL(e.latlng.lat, e.latlng.lng));
  setLL(ll.lat, ll.lng); map.flyTo(ll, Math.max(map.getZoom(), 17));
}
function endPick(){ document.body.classList.remove('picking'); $('#pickBar').classList.add('hide'); if(pickMk){ map.removeLayer(pickMk); pickMk = null; } }

// ══════════ GLOBAL SEARCH (อัจฉริยะ) ══════════
function search(){
  const raw = $('#q').value.trim(), q = norm(raw), qd = digits(raw), ql = raw.toLowerCase(), box = $('#qres');
  if(!q){ box.classList.add('hide'); return; }
  const cats = Object.keys(CATS).filter(k => lv(k) && norm(CATS[k].l).includes(q));
  const res = [];
  for(const k of Object.keys(CATS)){ if(!lv(k)) continue; const fs = fieldsOf(k);
    for(const r of DATA[k]){
      const s = IDX.get(r) || '';
      if(!(s.includes(q) || (qd.length >= 3 && s.includes(qd)))) continue;
      const p = norm(r[fs[0]]);
      const f = fs.find(f => norm(r[f]).includes(q) || (qd.length >= 3 && digits(r[f]).includes(qd))) || fs[0];
      res.push({k, r, f, s: p === q ? 3 : p.startsWith(q) ? 2 : f === fs[0] ? 1.5 : 1});
      if(res.length > 400) break;
    }
  }
  res.sort((a, b) => b.s - a.s);
  let h = cats.length ? '<div class="qh">หมวดข้อมูล</div>' + cats.slice(0, 3).map(k => `<div class="qi" data-cat="${k}"><span class="d" style="background:${CATS[k].c}1f">${CATS[k].i}</span><div><b>${hl(CATS[k].l, ql)}</b><small>${num(DATA[k].length)} รายการ · เปิดหมวด</small></div></div>`).join('') : '';
  if(res.length) h += `<div class="qh"><span>รายการ</span><span>${num(res.length)}${res.length > 400 ? '+' : ''} ผลลัพธ์</span></div>` + res.slice(0, 20).map(m => { const c = CATS[m.k], f0 = fieldsOf(m.k)[0];
    return `<div class="qi" data-k="${m.k}" data-id="${esc(m.r.id)}"><span class="d" style="background:${c.c}1f">${c.i}</span><div><b>${hl(fmt(f0, m.r[f0]) || '(ไม่ระบุ)', ql)}</b><small>${esc(c.l)}${m.f!==f0?' · '+esc(m.f)+': '+hl(fmt(m.f, m.r[m.f]), ql):''}</small></div></div>`; }).join('');
  box.innerHTML = h || `<div class="empty" style="padding:26px">${ic('search',28)}<br>ไม่พบ “${esc(raw)}”</div>`;
  box.querySelector('.qi')?.classList.add('fc');
  box.classList.remove('hide');
}

// ══════════ EXPORT ══════════
function download(name, text, type){
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], {type})); a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
function exportJSON(){ download('CDDP_' + new Date().toISOString().slice(0,10) + '.json', JSON.stringify(DATA, null, 2), 'application/json'); toast('ส่งออกแล้ว'); }
function exportCSV(){
  const c = CATS[CUR], h = [...fieldsOf(CUR), 'lat', 'lng', 'ts', 'updated_by'], rows = filtered();
  const q = v => '"' + String(v ?? '').replace(/"/g, '""') + '"';
  download(c.l + '_' + new Date().toISOString().slice(0,10) + '.csv', '﻿' + [h.map(q).join(','), ...rows.map(r => h.map(f => q(r[f])).join(','))].join('\n'), 'text/csv');
  toast(`ส่งออก ${num(rows.length)} รายการ`);
}

// ══════════ MODAL: USERS / PASSWORD ══════════
function modal(html){ $('#md').innerHTML = html; $('#md').classList.add('sh'); $('#ov').classList.add('sh'); }
function closeModal(){ $('#md').classList.remove('sh'); if(!$('#dr').classList.contains('sh')) $('#ov').classList.remove('sh'); }
function openPw(){
  modal(`<div class="dh"><h3><span style="background:var(--acs);color:var(--ac)">${ic('key')}</span>เปลี่ยนรหัสผ่าน</h3><button class="ib" data-x>${ic('x')}</button></div>
    <form class="db" id="pwF" style="display:grid;gap:14px">
      <div class="fd"><label>รหัสผ่านเดิม</label><input type="password" name="o" autocomplete="current-password" required></div>
      <div class="fd"><label>รหัสผ่านใหม่ <small>(อย่างน้อย 8 ตัว)</small></label><input type="password" name="n" minlength="8" autocomplete="new-password" required><div class="hint" id="pwS"></div></div>
      <div class="fd"><label>ยืนยันรหัสผ่านใหม่</label><input type="password" name="n2" autocomplete="new-password" required></div>
      <button class="btn pri" style="justify-content:center">${ic('check',16)} บันทึก</button></form>`);
  const F2 = $('#pwF');
  F2.n.oninput = () => { const v = F2.n.value, s = (v.length >= 8) + /[A-Z]/.test(v) + /[a-z]/.test(v) + /\d/.test(v) + /[^\w]/.test(v) + (v.length >= 12);
    $('#pwS').className = 'hint ' + (s >= 5 ? 'o' : s >= 3 ? 'w' : 'e'); $('#pwS').textContent = v ? 'ความปลอดภัย: ' + (s >= 5 ? 'ดีมาก' : s >= 3 ? 'ปานกลาง' : 'อ่อน') : ''; };
  F2.onsubmit = async e => {
    e.preventDefault();
    if(F2.n.value !== F2.n2.value) return toast('ยืนยันรหัสผ่านไม่ตรงกัน', 'er');
    try{ await api('changePassword', {oldPw: F2.o.value, newPw: F2.n.value}); toast('เปลี่ยนรหัสผ่านแล้ว'); closeModal(); }
    catch(err){ toast(err.message, 'er'); }
  };
}
let UL = [];
async function openUsers(){
  modal(`<div class="dh"><h3><span style="background:var(--acs);color:var(--ac)">${ic('users')}</span>ผู้ใช้และสิทธิ์</h3><button class="ib" data-x>${ic('x')}</button></div><div class="db" id="ub"><div class="sk" style="height:56px;margin-bottom:8px"></div><div class="sk" style="height:56px;margin-bottom:8px"></div><div class="sk" style="height:56px"></div></div>`);
  try{ UL = (await api('listUsers')).users; userList(); }catch(err){ toast(err.message, 'er'); closeModal(); }
}
function userList(){
  const R = {superadmin:'ผู้ดูแลสูงสุด', admin:'ผู้ดูแลระบบ', user:'เจ้าหน้าที่'};
  $('#ub').innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><span style="color:var(--mu)">${UL.length} บัญชี</span><button class="btn pri sm" id="uNew">${ic('plus',16)} เพิ่มผู้ใช้</button></div>` +
    UL.map(u => `<div class="urow"><div><b>${esc(u.name)}</b><small>${esc(u.username)}</small></div>
      <div><span class="tag ${esc(u.role)}">${R[u.role]||esc(u.role)}</span>${u.pii?'<small style="color:#b45309;margin-top:3px">เห็นเลขบัตร</small>':''}</div>
      <div>${u.status==='disabled'?'<span style="color:var(--er)">● ระงับ</span>':'<span style="color:var(--ok)">● ใช้งาน</span>'}<small>${esc(u.last_login||'ยังไม่เคยเข้า')}</small></div>
      <div><button class="ib" data-ue="${esc(u.username)}">${ic('edit',16)}</button>${u.username!==USER.username?`<button class="ib dan" data-ud="${esc(u.username)}">${ic('trash',16)}</button>`:''}</div></div>`).join('');
  $('#uNew').onclick = () => userForm(null);
  $('#ub').onclick = async e => {
    const ed = e.target.closest('[data-ue]'), dl = e.target.closest('[data-ud]');
    if(ed) userForm(UL.find(u => u.username === ed.dataset.ue));
    if(dl && confirm('ลบบัญชี ' + dl.dataset.ud + ' ?')){
      try{ await api('deleteUser', {username: dl.dataset.ud}); UL = UL.filter(u => u.username !== dl.dataset.ud); userList(); toast('ลบผู้ใช้แล้ว'); }
      catch(err){ toast(err.message, 'er'); }
    }
  };
}
function userForm(u){
  const p = (u && u.perms) || {};
  const sel = (k, v) => `<select name="p_${k}">${[['','ปิด'],['r','ดู'],['w','แก้ไข'],['d','ลบ']].map(([a,b]) => `<option value="${a}"${(v||'')===a?' selected':''}>${b}</option>`).join('')}</select>`;
  const gen = () => Array.from(crypto.getRandomValues(new Uint8Array(10)), b => 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789'[b % 56]).join('');
  $('#ub').onclick = null;
  $('#ub').innerHTML = `<form id="uF"><div class="fg">
    <div class="fd"><label>ชื่อผู้ใช้ *</label><input name="username" value="${esc(u?.username||'')}" ${u?'readonly':''} required pattern="[a-z0-9._\\-]{3,30}" placeholder="somchai.k"></div>
    <div class="fd"><label>ชื่อ-นามสกุล *</label><input name="name" value="${esc(u?.name||'')}" required></div>
    <div class="fd"><label>บทบาท</label><select name="role">${[['user','เจ้าหน้าที่ (กำหนดรายหมวด)'],['admin','ผู้ดูแลระบบ (ทุกหมวด)'],['superadmin','ผู้ดูแลสูงสุด (จัดการผู้ใช้)']].map(([a,b]) => `<option value="${a}"${(u?.role||'user')===a?' selected':''}>${b}</option>`).join('')}</select></div>
    <div class="fd"><label>สถานะ</label><select name="status"><option value="active">ใช้งาน</option><option value="disabled"${u?.status==='disabled'?' selected':''}>ระงับ</option></select></div>
    <div class="fd w"><label>${u?'ตั้งรหัสผ่านใหม่ <small>(เว้นว่าง = ไม่เปลี่ยน)</small>':'รหัสผ่าน * <small>(อย่างน้อย 8 ตัว)</small>'}</label><div style="display:flex;gap:8px"><input name="password" type="text" minlength="8" ${u?'':'required'} style="flex:1"><button type="button" class="btn sm" id="uGen">${ic('spark',15)} สุ่ม</button></div></div>
    <label class="fd w" style="flex-direction:row;gap:8px;align-items:center;font-size:13px;cursor:pointer"><input type="checkbox" name="pii" ${u?.pii?'checked':''} style="height:auto;width:16px"> อนุญาตให้เห็นเลขบัตรประชาชนเต็ม (ข้อมูลอ่อนไหว PDPA)</label>
  </div>
  <div id="pmw">${GROUPS.map(([g, gl]) => `<div class="pm"><h5>${gl}<select data-gs="${g}"><option value="-">ตั้งทั้งกลุ่ม…</option><option value="">ปิด</option><option value="r">ดู</option><option value="w">แก้ไข</option><option value="d">ลบ</option></select></h5>
    ${keysOf(g).map(k => `<div class="r"><span>${CATS[k].i} ${esc(CATS[k].l)}</span>${sel(k, p[k])}</div>`).join('')}</div>`).join('')}</div>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px"><button type="button" class="btn" id="uBack">← กลับ</button><button class="btn pri">${ic('save',16)} บันทึก</button></div></form>`;
  const Fm = $('#uF');
  const tg = () => $('#pmw').classList.toggle('hide', Fm.role.value !== 'user'); tg(); Fm.role.onchange = tg;
  $('#uGen').onclick = () => { Fm.password.value = gen(); Fm.password.select(); };
  Fm.querySelectorAll('[data-gs]').forEach(s => s.onchange = () => { if(s.value === '-') return; keysOf(s.dataset.gs).forEach(k => Fm['p_'+k].value = s.value); s.value = '-'; });
  $('#uBack').onclick = userList;
  Fm.onsubmit = async e => {
    e.preventDefault();
    const d = {username: Fm.username.value.trim().toLowerCase(), name: Fm.name.value.trim(), role: Fm.role.value, status: Fm.status.value, pii: Fm.pii.checked, perms: {}};
    if(Fm.password.value) d.password = Fm.password.value;
    Object.keys(CATS).forEach(k => { if(Fm['p_'+k].value) d.perms[k] = Fm['p_'+k].value; });
    try{ await api('saveUser', {user: d}); UL = (await api('listUsers')).users; userList(); toast('บันทึกผู้ใช้แล้ว' + (d.password ? ' — อย่าลืมแจ้งรหัสผ่านให้ผู้ใช้' : '')); }
    catch(err){ toast(err.message, 'er'); }
  };
}

// ══════════ EVENTS ══════════
function bind(){
  hydrate();
  $('#nav').addEventListener('click', e => { const t = e.target.closest('[data-go]'); if(t) go(t.dataset.go || null); });
  const tip = $('#tip');
  document.addEventListener('mouseover', e => {
    const t = e.target.closest('.ni,[data-tip]');
    const show = t && (t.matches('.mt [data-tip]') || (t.classList.contains('ni') && document.body.classList.contains('rail') && innerWidth > 960));
    if(!show){ tip.classList.remove('sh'); return; }
    const r = t.getBoundingClientRect(); tip.textContent = t.dataset.tip;
    const right = t.closest('.mt');
    tip.style.left = (right ? r.left - tip.offsetWidth - 10 : r.right + 12) + 'px'; tip.style.top = (r.top + r.height / 2 - 14) + 'px'; tip.classList.add('sh');
  });
  $('#colBtn').onclick = () => { document.body.classList.toggle('rail'); localStorage.setItem('cddp_rail', document.body.classList.contains('rail') ? 1 : ''); setTimeout(moveInd, 420); };
  if(localStorage.getItem('cddp_rail')) document.body.classList.add('rail');
  $('#hbBtn').onclick = () => { document.body.classList.add('nav'); $('#ov').classList.add('sh'); };
  $('#ov').onclick = () => { closeDrawer(); closeModal(); document.body.classList.remove('nav'); $('#ov').classList.remove('sh'); };
  $('#meBtn').onclick = e => { e.stopPropagation(); $('#menu').classList.toggle('sh'); };
  document.addEventListener('click', e => {
    if(!e.target.closest('#menu')) $('#menu').classList.remove('sh');
    if(!e.target.closest('.srch')) $('#qres').classList.add('hide');
    const b = e.target.closest('.btn'); // ripple
    if(b){ const r = b.getBoundingClientRect(), s = Math.max(r.width, r.height), sp = document.createElement('span');
      sp.className = 'rip'; sp.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s/2}px;top:${e.clientY - r.top - s/2}px`;
      b.appendChild(sp); setTimeout(() => sp.remove(), 600); }
  });
  $('#menu').addEventListener('click', e => {
    const m = e.target.closest('[data-m]'); if(!m) return;
    $('#menu').classList.remove('sh');
    ({ refresh: () => refresh(true), sheet: () => window.open(window.CDDP_SHEET_URL, '_blank'), export: exportJSON, users: openUsers, pw: openPw,
       out: () => { if(confirm('ออกจากระบบ?')){ api('logout').catch(() => {}); signOutLocal(); } } })[m.dataset.m]();
  });
  $('#md').addEventListener('click', e => { if(e.target.closest('[data-x]')) closeModal(); });
  $('#addBtn').onclick = () => openForm(null);
  $('#pickDone').onclick = () => { endPick(); toast('ใช้ตำแหน่งนี้แล้ว'); };
  let qT;
  $('#q').addEventListener('input', () => { clearTimeout(qT); qT = setTimeout(search, 120); });
  $('#q').addEventListener('focus', search);
  $('#q').addEventListener('keydown', e => {
    const it = [...document.querySelectorAll('.qi[data-k],.qi[data-cat]')]; if(!it.length) return;
    let i = it.findIndex(x => x.classList.contains('fc'));
    if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){ e.preventDefault(); it[i]?.classList.remove('fc'); i = (i + (e.key==='ArrowDown'?1:-1) + it.length) % it.length; it[i].classList.add('fc'); it[i].scrollIntoView({block:'nearest'}); }
    if(e.key === 'Enter') (it[i] || it[0]).click();
    if(e.key === 'Escape'){ $('#qres').classList.add('hide'); e.target.blur(); }
  });
  $('#qres').addEventListener('click', e => {
    const t = e.target.closest('.qi[data-k],.qi[data-cat]'); if(!t) return;
    $('#qres').classList.add('hide'); $('#q').blur();
    if(t.dataset.cat) return go(t.dataset.cat);
    const {k, id} = t.dataset, sw = CUR !== k;
    if(sw) go(k);
    setTimeout(() => focusRec(k, id), sw ? 750 : 0);
  });
  document.addEventListener('keydown', e => {
    const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
    if(e.key === 'Escape'){ if(pickMk) return endPick(); closeDrawer(); closeModal(); }
    if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's' && $('#dr').classList.contains('sh')){ e.preventDefault(); saveForm(); }
    if(typing || !USER) return;
    if(e.key === '/'){ e.preventDefault(); $('#q').focus(); }
    if(e.key.toLowerCase() === 'n' && CUR && lv(CUR) >= 2){ e.preventDefault(); openForm(null); }
  });
  addEventListener('resize', () => { clearTimeout(window._rz); window._rz = setTimeout(moveInd, 120); });
  // Login
  $('#lgEye').onclick = () => { const p = $('#lgP'); p.type = p.type === 'password' ? 'text' : 'password'; $('#lgEye').innerHTML = ic(p.type === 'password' ? 'eye' : 'eyeoff'); };
  $('#lgU').value = localStorage.getItem('cddp_u') || '';
  $('#lgForm').addEventListener('submit', async e => {
    e.preventDefault();
    const b = $('#lgBtn'); b.disabled = true; b.innerHTML = ic('refresh').replace('class="i"', 'class="i spin"') + ' กำลังเข้าสู่ระบบ…';
    try{
      const j = await api('login', {username: $('#lgU').value, password: $('#lgP').value});
      TOKEN = j.token; sessionStorage.setItem('cddp_t', TOKEN); localStorage.setItem('cddp_u', $('#lgU').value.trim());
      $('#lgP').value = '';
      applyData(j.data, j.user); cacheSave(); enter();
      toast('ยินดีต้อนรับ ' + USER.name);
    }catch(err){ showLogin(err.message); }
    b.disabled = false; b.innerHTML = '<span>เข้าสู่ระบบ</span>';
  });
}

// ══════════ BOOT ══════════
function skeleton(){
  $('#view').innerHTML = `<div class="kp">${'<div class="sk" style="height:118px"></div>'.repeat(6)}</div><div class="dg"><div class="sk" style="height:calc(100vh - 320px)"></div><div class="sk" style="height:calc(100vh - 320px)"></div></div>`;
}
document.addEventListener('DOMContentLoaded', async () => {
  bind(); initMap();
  const h = location.hash.slice(1); if(CATS[h]) CUR = h;
  if(DEMO){ const j = await demo('getAll'); applyData(j.data, j.user); enter(); return; }
  if(!TOKEN) return showLogin();
  const c = cacheLoad();
  if(c && c.user){ applyData(c.data, c.user); enter(); refresh(); return; } // แสดงทันทีจากแคช แล้วอัปเดตเบื้องหลัง
  skeleton(); renderMe0();
  try{ await refresh(); enter(); }catch(_){ showLogin(); }
});
function renderMe0(){ $('#crumb').innerHTML = '<b>กำลังโหลดข้อมูล…</b>'; }
