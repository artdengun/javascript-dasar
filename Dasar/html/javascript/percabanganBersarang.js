var username = prompt("Username : ");
var password = prompt("Password : ");

if(username == "denigunawan"){
    if(password == "deni"){
        document.write("<h2> Selamat datang pak bos </h2>");
    }else{
        document.write("<p>Password salah, coba lagi!</p>");
    }
} else {
    document.write("<p> Anda tidak terdaftar! </p>")
}
