
const schedule = [
  {day:1,start:"08:00",end:"10:00",name:"Managementul calității",type:"curs",room:"Amfiteatrul A3 (corp C)",teacher:"Dragolea Larisa",weeks:"all"},
  {day:1,start:"10:00",end:"12:00",name:"Tehnica negocierii afacerilor",type:"curs",room:"H2.4 Sala de prezentări (Administarea A, corp H)",teacher:"Dragolea Larisa",weeks:"all"},
  {day:1,start:"12:00",end:"14:00",name:"Cercetări de marketing",type:"seminar",room:"LAA (corp D)",teacher:"Lazea Ruxandra",weeks:"all"},

  {day:2,start:"08:00",end:"10:00",name:"Finanțe",type:"curs",room:"Amfiteatrul A6 (corp C)",teacher:"Danulețiu Dan",weeks:"all"},
  {day:2,start:"10:00",end:"12:00",name:"Cercetări de marketing",type:"curs",room:"Amfiteatrul A3 (corp C)",teacher:"Muntean Andreea",weeks:"all"},
  {day:2,start:"12:00",end:"14:00",name:"Limba engleză",type:"seminar",room:"LAA (corp D)",teacher:"Mureșan Maria",weeks:"all"},

  {day:3,start:"08:00",end:"10:00",name:"Tehnici și operațiuni bancare",type:"seminar",room:"H2.5 – Lab de contabilitate aplicată (corp H)",teacher:"Botar Claudia-Florina",weeks:"even"},
  {day:3,start:"10:00",end:"12:00",name:"Managementul calității",type:"seminar",room:"LRI (corp B)",teacher:"Trif Georgiana",weeks:"odd"},
  {day:3,start:"10:00",end:"12:00",name:"Tehnica negocierii afacerilor",type:"seminar",room:"H1.5 – Lab Comunicații (corp H)",teacher:"Nichita Anca",weeks:"even"},
  {day:3,start:"12:00",end:"14:00",name:"Fundamentarea științei mărfurilor",type:"laborator",room:"H0.2 – Lab Prelevare/Eșantionare (corp H)",teacher:"Bostan Roxana",weeks:"even"},
  {day:3,start:"14:00",end:"16:00",name:"Finanțe",type:"seminar",room:"Lab Merceolog (corp C)",teacher:"Botar Claudia-Florina",weeks:"even"},

  {day:4,start:"08:00",end:"10:00",name:"Evaluarea și Finanțarea Investițiilor",type:"curs",room:"Amfiteatrul A3 (corp C)",teacher:"Iuga Iulia",weeks:"all"},
  {day:4,start:"10:00",end:"12:00",name:"Tehnici și operațiuni bancare",type:"curs",room:"Amfiteatrul A3 (corp C)",teacher:"Iuga Iulia",weeks:"all"},
  {day:4,start:"14:00",end:"16:00",name:"Fundamentarea științei mărfurilor",type:"curs",room:"Amfiteatrul A3 (corp C)",teacher:"Popa Maria",weeks:"all"},
  {day:4,start:"18:00",end:"20:00",name:"Limba franceză",type:"seminar",room:"Amfiteatrul A8 (corp B)",teacher:"Cibian Aura",weeks:"all"},

  {day:5,start:"08:00",end:"10:00",name:"Pedagogie II",type:"curs",room:"Amfiteatrul A7 (corp B)",teacher:"Felea Maria Iulia",weeks:"all"},
  {day:5,start:"10:00",end:"12:00",name:"Limba germană",type:"curs",room:"Sala Bosch (laborator)",teacher:"Todescu Valentin",weeks:"all"},
  {day:5,start:"12:00",end:"14:00",name:"Pedagogie II",type:"seminar",room:"Amfiteatrul A7 (corp B)",teacher:"Felea Maria Iulia",weeks:"all"}
];

function weekType(date = new Date()) {
  // Reference: Monday 5 Oct 2026 is ODD.
  const ref = new Date(2026, 9, 5);
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diffDays = Math.floor((d-ref)/86400000);
  const weekIndex = Math.floor(diffDays/7);
  return ((weekIndex % 2 + 2) % 2 === 0) ? "odd" : "even";
}
function visibleForWeek(item, date=new Date()) {
  return item.weeks==="all" || item.weeks===weekType(date);
}
function minutes(t){ const [h,m]=t.split(":").map(Number); return h*60+m; }
function dayName(d){ return ["","Luni","Marți","Miercuri","Joi","Vineri","Sâmbătă","Duminică"][d]; }
