for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        document.write("<p>Perulangan ke " + i + "," + j + "</p>");
    }
}
document.write("=======================================================");
var ulangi = confirm("apakah anda ingin mengulang ? ");
var counter = 0;


while(ulangi){
    counter++;
    var bintang = "*".repeat(counter) + "<br/>";
    document.write(counter _+ ": " + bintang);
    ulangi = confirm("apakah anda ingin mengulangi kembali?");
}
