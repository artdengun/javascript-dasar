var bahasa = ["Javascript", "HTML", "CSS", "Typescript"];

for (i = 0; i < bahasa; i++){
    document.write(i+". "+ bahasa + "<br/>");
}

document.write("===========================================");

for (i in bahasa){
    document.write(i+". " + bahasa[i] + "<br/>");
}

document.write("===========================================");

var hari = ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"];
hari.forEach(function(day){
    document.write("<p>" + day + "</p>");
});

document.write("===========================================");

hari.forEach((day) =>{ 
    document.write("<p>" + day + "</p>");
});