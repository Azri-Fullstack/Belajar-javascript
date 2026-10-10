const daftarproduk = [
  { nama: "baju", harga: 50000 },
  { nama: "celana", harga: 25000 },
  { nama: "sepatu", harga: 50000 },
  { nama: "Tas", harga: 90000 },
  { nama: "Topi", harga: 65000 },
];

const Semuaproduk = daftarproduk.map((produk) => ({
  nama: produk.nama,
  harga: produk.harga + 5000,
}));
console.log(Semuaproduk);

const produkmahal = daftarproduk.filter((produk) => produk.harga > 50000);
console.log(produkmahal);

/*
daftarproduk.forEach((produk, index) => {
  console.log(
    "NO : " +
      index +
      ", nama produk : " +
      produk.nama +
      ", harga produk : " +
      produk.harga,
  );
});

const nomor = 2;
console.log(daftarproduk[nomor]);
*/
