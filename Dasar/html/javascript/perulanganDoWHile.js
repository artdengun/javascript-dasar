var ulangi = confirm ("apakah anda mau mengulang? ");
var counter = 0;

do {
    counter++;
    ulangi = confirm("apakah anda mau mengulang kembali ? ");
}while(ulangi)

document.write("perulangan sudah dilakukan sebanyak " + ulangi + " Kali"); 