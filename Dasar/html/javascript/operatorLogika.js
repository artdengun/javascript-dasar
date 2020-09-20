// operator logika pada java script 
// && -> logika AND
// || -> Logika OR
// !  -> Negasi/Kebalikan

var aku = 20;
var kamu = 30;

var benar = aku > kamu;
var salah = aku < kamu;
document.write("=====================================<br/>");
// operator && and 
var hasil = benar && salah;
document.write(`${aku} && ${kamu} = ${hasil}<br/>`);
// operator || or 
var hasil = benar || salah;
document.write(`${benar} || ${salah} = ${hasil}<br>`)
// operator ! (not) membuat yang false menjadi benar

var hasil = !benar;
document.write(`!${benar} = ${hasil}<br/>`);  
document.write("=====================================<br/>");