//const tombol = document.getElementById("data");
const daftarUser = document.getElementById("daftarUser");

tombol.addEventListener("click", async () => {
  try {
    daftarUser.textContent = "sedang mengambil data dari User";

    const respont = await fetch("data.json");
    const dataUser = await respont.json();

    daftarUser.textContent = "";

    dataUser.forEach((produk) => {
      const itembaru = document.createElement("li");
      itembaru.textContent = produk.name + " (" + produk.harga + ")";
      daftarUser.appendChild(itembaru);
    });
  } catch (error) {
    daftarUser.textContent = "Gagal mengambil data dari server";
    console.log("Terjadi kesalahan:", error);
  }
});

/*
// 1. Buat fungsi asinkronus dengan kata kunci 'async'
async function ambilData() {
  try {
    console.log("Sedang mengambil data dari server...");

    // 2. Minta data ke server luar
    const respon = await fetch("https://jsonplaceholder.typicode.com/users");

    // 3. Konversi respon server menjadi format JSON (Array/Object JS)
    const dataUser = await respon.json();

    // 4. Tampilkan hasilnya di terminal/console
    console.log("Data berhasil diambil:");
    console.log(dataUser);
  } catch (error) {
    console.log("Terjadi kesalahan:", error);
  }
}

// Panggil fungsinya
ambilData();
*/
