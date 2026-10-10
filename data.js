const suaranotifikasi = new Audio("notifikasi.mp3");

document.getElementById("tombol").addEventListener("click", function () {
  suaranotifikasi.currenTime = 0;
  suaranotifikasi.play();

  Swal.fire({
    toast: true,
    position: "top",
    title: "Data berhasill",
    text: "Data berhasil di simpan!",
    icon: "success",
    showConfirmButton: false,
    timer: 3000,
    color: "white",
    background: "#1ABC9C",
    timerProgressBar: true,
  });
});

//data char
let namabelakang = "ahmad";
let namadepan = "azri";

//menyambung String
let namalengkap = namabelakang.concat("", namadepan, ' "si keren"');
console.log(namalengkap);

//mengambil index sesuai request!
console.log(namalengkap.indexOf("a"));

/*
//type data String
let dataString = "Asep";
console.log(typeof dataString);

//type data number
let dataNumber = 12345;
console.log(typeof dataNumber);

//Type data boolean
let dataBoleean = false;
console.log(typeof dataBoleean);
*/
