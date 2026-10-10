const tombol = document.getElementById("addItem");
const daftar = document.getElementById("daftarbarang");
const input = document.getElementById("inputbarang");
const inputhargabarang = document.getElementById("inputhargabarang");

tombol.addEventListener("click", () => {
  const textinput = input.value.trim();
  const hargabarang = inputhargabarang.value.trim();

  if (textinput !== "" && hargabarang !== "") {
    const itembaru = document.createElement("li");
    itembaru.textContent = textinput + " - (Rp. " + hargabarang + ")";
    itembaru.style.color = "Green";

    const btnhapus = document.createElement("button");
    btnhapus.textContent = "Hapus";
    btnhapus.style.marginLeft = "10px";

    btnhapus.addEventListener("click", () => {
      itembaru.remove();
    });

    itembaru.appendChild(btnhapus);

    daftar.appendChild(itembaru);

    input.value = "";

    const btnupdate = document.createElement("button");
    btnupdate.textContent = "Update";
    btnupdate.style.marginLeft = "10px";

    btnupdate.addEventListener("click", () => {
      itembaru.textContent =
        input.value + " - (Rp. " + inputhargabarang.value + ")";
      itembaru.appendChild(btnupdate);
    });
  }
});
