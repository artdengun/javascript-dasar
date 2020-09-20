// Operator ternary merupakan operator yang teridiri dari tiga bagian.
// Operator-operator sebelumnya hanya dua bagian saja, yaitu: bagian kiri 
// Sementara operator trinary ada bagian kiri, tengah, dan kanan.
// Opertor ternary pada Javascript, biasanya digunakan untuk membuat sebuah percabangan if/else.
// Simbol opertor ternary terdiri dari tanda tanya dan titik dua ( ?: ).

var pertanyaan = confirm("Apakah kamu berumur 18 tahun ? ");

var hasil = pertanyaan ? "Selamat Datang" : "Kamu tidak boleh isi disini";
document.write(hasil);
