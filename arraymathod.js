/*
const angka = [1, 2, 3, 4];
const dikalidua = angka.map((n) => n * 2);
console.log(dikalidua);
//output: [2, 4, 6, 8]

//filter
const nilai = [50, 75, 86, 90, 100];
const lulus = nilai.filter((n) => n >= 75);
console.log(lulus);
//output: [75, 86, 90, 100]

//reduce
const harga = [10000, 20000, 50000, 80000];
const totalBelanja = harga.reduce((total, curr) => total + curr, 0);
console.log(totalBelanja);
//output: 160000

*/
//latihan praktis

const daftarproduk = [
  { nama: "baju batik boxy", harga: 80000, kategori: "pakaian" },
  { nama: "celana levis", harga: 60000, kategori: "pakaian" },
  { nama: "sepatu ourtus", harga: 180000, kategori: "aksesories" },
  { nama: "xiaomie 13t", harga: 1280000, kategori: "elektronik" },
  { nama: "jam Aulon", harga: 150000, kategori: "aksesories" },
];

const searchinput = document.getElementById("searchinput");
const produklist = document.getElementById("produklist");

const tampilkanproduk = (produk) => {
  if (produk.length === 0) {
    produklist.innerHTML = "<li>produk tidak ditemukan</li>";
    return;
  }

  produklist.innerHTML = produk
    .map(({ nama, harga, kategori }) => {
      return `<li><strong>${nama}</strong> - Rp${harga.toLocaleString()} <em>(${kategori})</em></li>`;
    })
    .join("");
};

tampilkanproduk(daftarproduk);

searchinput.addEventListener("input", (e) => {
  const katakunci = e.target.value.toLowerCase();
  const hasilfilter = daftarproduk.filter(({ nama, kategori }) => {
    return (
      nama.toLowerCase().includes(katakunci) ||
      kategori.toLowerCase().includes(katakunci)
    );
  });
  tampilkanproduk(hasilfilter);
});

/*
const totalharga = daftarproduk.reduce(
  (total, produk) => total + produk.harga,
  0,
);
console.log("total harga produk pakaian: ", totalharga);

const produkpakaian = daftarproduk.filter(
  (produk) => produk.kategori == "pakaian",
);
console.log(produkpakaian);

const daftarnama = daftarproduk.map((produk) => produk.nama);
console.log(daftarnama);
*/
