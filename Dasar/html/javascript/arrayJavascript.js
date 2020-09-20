// membuat arrays 
var catatan = ["array 0","array 1","array 2","array 3"];

// Mengambil nilai array

document.write(catatan[0]);


// mencetak array dengan perulangan 

document.write("<h3>Daftar Produk:</h3>");
document.write("<ol>");
// menggunakan perulangan untuk menceak arrays 

for(let i = 0; i < catatan.length; i++){
        document.write(`<li>${catatan[i]}</li>`);

 }
 document.write("</ol>")


 // menggunakan foreach

 catatan.forEach((data) => {
    document.write(`<li>${data}</li>`);
 });
 document.write("</ol>");


 // menambahkah data ke arrays bisa menggunakan indek atau push
 // push berfungsi memasukan data ke array tanpa menimpa data yang ada . 

// membuat array
 var buah = ["durian","mangga","semangka"];
// menambah data ke array 
buah.push("sao");

// menampilkan  isi arrays
document.write(buah);

// Method-mothod Array


