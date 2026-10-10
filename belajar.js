// const adalah variabel dengan nilai tetap, tidak bisa di ubah
//const nama = "Ahmad Azri";
//const nim = "202515001";

//let adalah variabel dengan nilai yang bisa dirubah
//let nilaimahasiswa = {
//nilaiuts: 70,
//nilaiuas: 80,
//};
// console.log adalah perintah untuk menampilkan data ke console
//console.log(nama);
//console.log(nilaimahasiswa.nilaiuts);
//console.log(nilaimahasiswa.nilaiuas);

//let matakuliah = "pemrograman web";
//console.log(matakuliah[0]); // angka 0 adalah data pertama dari string matakuliah

const Usaha = {
  namaToko: "toko madura",
  isOpen: true,
  jumlahproduk: 50,
};

console.log(Usaha);

let totalbelanja = 40000;
console.log(totalbelanja[0]);

if (totalbelanja >= 30000) {
  console.log(
    "Selamat anda mendapatkan diskon! Total belanja : " + totalbelanja,
  );
} else {
  console.log(
    "Maaf anda tidak mendapatkan diskon! Total belanja anda adalah :" +
      totalbelanja,
  );
}
