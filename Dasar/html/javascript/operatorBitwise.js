// AND                    &
// OR                     |
// XOR                    ^
// Negasi/kebalikan       ~
// Left Shift             «
// // Right Shift         »
// Left Shift (unsigned)  «<
// Right Shift (unsigned) »>

// Operator ini berlaku untuk tipe data int , long , short , char , dan byte .
// Operator ini akan menghitung dari bit-ke-bit.

var x = 4;
var y = 3;

// operator bitwise end 
document.write("=====================================<br/>");
var hasil = x & y;
document.write(`${x} & ${y} = ${hasil}<br/>`);
// operator bitwise or
var hasil = x | y;
document.write(`${x} | ${x} = ${hasil}<br/>`);
// operator bitwise xor
var hasil = x ^ y;
document.write(`${x} ^ ${y} = ${hasil}<br/>`);
// operator negasi 
var hasil = ~x;
document.write(`~${x} = ${hasil}<br/> `);
// operarot bitwise right 
var hasil = x >> y;
document.write(`${x} >> ${y} = ${hasil}<br/>`);
// operator bitwise left shift 
var hasil = x << y;
document.write(`${x} << ${y} = ${hasil}<br/>`);
// operator bitwiser right shift 
var hasil = x >>> y;
document.write(`${x} <<< ${y} = ${hasil}<br/>`);
document.write("=====================================<br/>");