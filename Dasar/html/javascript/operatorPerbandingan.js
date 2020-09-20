// Nama Operator Simbol
// Lebih Besar     >
// Lebih Kecil     <
// Sama Dengan == atau ===
// Tidak Sama dengan != atau !==
// Lebih Besar Sama dengan >=
// Lebih Kecil Sama dengan <=



var aku = 20;
var kamu = 19;

document.write("=====================================<br/>");
// sama dengan
var hasil = aku == kamu;
document.write(`${aku} == ${kamu} = ${hasil}<br/>`);

// lebih besar 
var hasil = aku > kamu;
document.write(`${aku} > ${kamu} = ${hasil}<br/>`);

// lebih besar sama dengan
var hasil = aku >= kamu;
document.write(`${aku} >= ${kamu} = ${hasil}<br/>`);

// lebih kecil
var hasil = aku < kamu;
document.write(`${aku} < ${kamu} = ${hasil}<br/>`);

// lebih kecil sama dengan
var hasil = aku <= kamu;
document.write(`${aku} <= ${kamu} = ${hasil}<br/>`);

// tidak sama dengan 
var hasil = aku != kamu;
document.write(`${aku} != ${kamu} = ${hasil}<br/>`);
document.write("=====================================<br/>");