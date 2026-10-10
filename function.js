function hitungTotal(harga, jumlah) {
  const totalBelanja = harga * jumlah;
  const batasDiskon = 30000;
  const persentaseDiskon = 20;

  console.log(`Total belanja: Rp${totalBelanja}`);

  if (totalBelanja >= batasDiskon) {
    const diskon = totalBelanja * (persentaseDiskon / 100);
    const totalBayar = totalBelanja - diskon;

    console.log(`Selamat, Anda mendapat diskon ${persentaseDiskon}%!`);
    console.log(`Potongan diskon: Rp${diskon}`);
    console.log(`Total yang harus dibayar: Rp${totalBayar}`);
    return totalBayar;
  }

  console.log("Maaf, Anda belum mendapatkan diskon.");
  console.log(`Total yang harus dibayar: Rp${totalBelanja}`);
  return totalBelanja;
}

const harga = 10000;
const jumlah = 4;

hitungTotal(harga, jumlah);
