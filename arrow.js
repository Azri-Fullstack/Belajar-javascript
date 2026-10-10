//const tambah = (a, b) => a + b;
const nama = "ahmad";
const id = "202515001";
console.log(`nama ${nama}, selamat datang di poltek cwe ${id}.`);

// object destructuring
const user = {
  id: 202515001,
  username: "budi01",
  email: "azrisarolangun@gmail.com",
};

const { username, email } = user;
console.log(username, email);

//Array Destructuring

const kordinat = [10, 20];
const [x, y] = kordinat;
console.log(x, y);

// speed Operator
const hobilama = ["bermain bola", "bermain vole"];
const hobibaru = ["Bermain game", "nonton film"];
console.log(hobibaru);

//pada objest
const profil = { nama: "ahmad", umur: 20, hobi: "bermain game" };
const profilbaru = { ...profil, pekerjaan: "Fullstack Developer" };
console.log(profilbaru);

// latihan arrow function
const buatLaporan = (dataUser) => {
  const { nama, peran } = dataUser;
  return `pengguna ${nama}, memiliki peran sebagai ${peran}.`;
};
console.log(buatLaporan({ nama: "ahmad", peran: "user" }));

const buatlaporan = ({ nama, peran }) =>
  "pengguna ${nama} memiliki peran sebagai ${peran}.";
