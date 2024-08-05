let pai = [];
let ppkn = [];
let bind = [];
let mtkw = [];
let sjr = [];
let bing = [];
let snb = [];
let pjok = [];
let pkwu = [];
let mtkp = [];
let bio = [];
let fis = [];
let kim = [];
let eko = [];

document.getElementById("show-s1").style.backgroundColor = "#1e90ff";
// SEMBUNYIKAN TABEL
document.getElementById("s2").style.display = "none";
document.getElementById("s3").style.display = "none";
document.getElementById("s4").style.display = "none";
document.getElementById("s5").style.display = "none";
document.getElementById("hasil").style.display = "none";

// MUNCULKAN TABEL
document.getElementById("show-s1").addEventListener("click", function () {
  document.getElementById("show-s1").style.backgroundColor = "#1e90ff";
  document.getElementById("show-s2").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s3").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s4").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s5").style.backgroundColor = "#1ef2ff";
  document.getElementById("s1").style.display = "block";
  document.getElementById("s2").style.display = "none";
  document.getElementById("s3").style.display = "none";
  document.getElementById("s4").style.display = "none";
  document.getElementById("s5").style.display = "none";
});

document.getElementById("show-s2").addEventListener("click", function () {
  document.getElementById("show-s1").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s2").style.backgroundColor = "#1e90ff";
  document.getElementById("show-s3").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s4").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s5").style.backgroundColor = "#1ef2ff";
  document.getElementById("s1").style.display = "none";
  document.getElementById("s2").style.display = "block";
  document.getElementById("s3").style.display = "none";
  document.getElementById("s4").style.display = "none";
  document.getElementById("s5").style.display = "none";
});

document.getElementById("show-s3").addEventListener("click", function () {
  document.getElementById("show-s1").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s2").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s3").style.backgroundColor = "#1e90ff";
  document.getElementById("show-s4").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s5").style.backgroundColor = "#1ef2ff";
  document.getElementById("s1").style.display = "none";
  document.getElementById("s2").style.display = "none";
  document.getElementById("s3").style.display = "block";
  document.getElementById("s4").style.display = "none";
  document.getElementById("s5").style.display = "none";
});

document.getElementById("show-s4").addEventListener("click", function () {
  document.getElementById("show-s1").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s2").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s3").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s4").style.backgroundColor = "#1e90ff";
  document.getElementById("show-s5").style.backgroundColor = "#1ef2ff";
  document.getElementById("s1").style.display = "none";
  document.getElementById("s2").style.display = "none";
  document.getElementById("s3").style.display = "none";
  document.getElementById("s4").style.display = "block";
  document.getElementById("s5").style.display = "none";
});
document.getElementById("show-s5").addEventListener("click", function () {
  document.getElementById("show-s1").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s2").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s3").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s4").style.backgroundColor = "#1ef2ff";
  document.getElementById("show-s5").style.backgroundColor = "#1e90ff";
  document.getElementById("s1").style.display = "none";
  document.getElementById("s2").style.display = "none";
  document.getElementById("s3").style.display = "none";
  document.getElementById("s4").style.display = "none";
  document.getElementById("s5").style.display = "block";
});

function simpanNilai() {
  for (let i = 1; i <= 5; i++) {
    const nilaiPAI = parseInt(document.getElementById(`pai${i}`).value);
    pai.push(nilaiPAI);
  }

  for (let i = 1; i <= 5; i++) {
    const nilaiPPKN = parseInt(document.getElementById(`ppkn${i}`).value);
    ppkn.push(nilaiPPKN);
  }
  for (let i = 1; i <= 5; i++) {
    const nilaiBIND = parseInt(document.getElementById(`bind${i}`).value);
    bind.push(nilaiBIND);
  }
  for (let i = 1; i <= 5; i++) {
    const nilaiMTKW = parseInt(document.getElementById(`mtkw${i}`).value);
    mtkw.push(nilaiMTKW);
  }
  for (let i = 1; i <= 5; i++) {
    const nilaiSJR = parseInt(document.getElementById(`sjr${i}`).value);
    sjr.push(nilaiSJR);
  }
  for (let i = 1; i <= 5; i++) {
    const nilaiBing = parseInt(document.getElementById(`bing${i}`).value);
    bing.push(nilaiBing);
  }
  for (let i = 1; i <= 5; i++) {
    const nilaiSNB = parseInt(document.getElementById(`snb${i}`).value);
    snb.push(nilaiSNB);
  }
  for (let i = 1; i <= 5; i++) {
    const nilaiPjok = parseInt(document.getElementById(`pjok${i}`).value);
    pjok.push(nilaiPjok);
  }
  for (let i = 1; i <= 5; i++) {
    const nilaiPKWU = parseInt(document.getElementById(`pkwu${i}`).value);
    pkwu.push(nilaiPKWU);
  }
  for (let i = 1; i <= 5; i++) {
    const nilaiMTKP = parseInt(document.getElementById(`mtkp${i}`).value);
    mtkp.push(nilaiMTKP);
  }
  for (let i = 1; i <= 5; i++) {
    const nilaiBio = parseInt(document.getElementById(`bio${i}`).value);
    bio.push(nilaiBio);
  }
  for (let i = 1; i <= 5; i++) {
    const nilaiFis = parseInt(document.getElementById(`fis${i}`).value);
    fis.push(nilaiFis);
  }
  for (let i = 1; i <= 5; i++) {
    const nilaiKim = parseInt(document.getElementById(`kim${i}`).value);
    kim.push(nilaiKim);
  }
  for (let i = 1; i <= 5; i++) {
    const nilaiEko = parseInt(document.getElementById(`eko${i}`).value);
    eko.push(nilaiEko);
  }

  const arrays = [
    pai,
    ppkn,
    bind,
    mtkw,
    sjr,
    bing,
    snb,
    pjok,
    pkwu,
    mtkp,
    bio,
    fis,
    kim,
    eko,
  ];

  // DATA INPUT NILAI KE HTML
  document.getElementById("pai-s1").innerText = pai[0];
  document.getElementById("pai-s2").innerText = pai[1];
  document.getElementById("pai-s3").innerText = pai[2];
  document.getElementById("pai-s4").innerText = pai[3];
  document.getElementById("pai-s5").innerText = pai[4];

  document.getElementById("ppkn-s1").innerText = ppkn[0];
  document.getElementById("ppkn-s2").innerText = ppkn[1];
  document.getElementById("ppkn-s3").innerText = ppkn[2];
  document.getElementById("ppkn-s4").innerText = ppkn[3];
  document.getElementById("ppkn-s5").innerText = ppkn[4];

  document.getElementById("bind-s1").innerText = bind[0];
  document.getElementById("bind-s2").innerText = bind[1];
  document.getElementById("bind-s3").innerText = bind[2];
  document.getElementById("bind-s4").innerText = bind[3];
  document.getElementById("bind-s5").innerText = bind[4];

  document.getElementById("mtkw-s1").innerText = mtkw[0];
  document.getElementById("mtkw-s2").innerText = mtkw[1];
  document.getElementById("mtkw-s3").innerText = mtkw[2];
  document.getElementById("mtkw-s4").innerText = mtkw[3];
  document.getElementById("mtkw-s5").innerText = mtkw[4];

  document.getElementById("sjr-s1").innerText = sjr[0];
  document.getElementById("sjr-s2").innerText = sjr[1];
  document.getElementById("sjr-s3").innerText = sjr[2];
  document.getElementById("sjr-s4").innerText = sjr[3];
  document.getElementById("sjr-s5").innerText = sjr[4];

  document.getElementById("bing-s1").innerText = bing[0];
  document.getElementById("bing-s2").innerText = bing[1];
  document.getElementById("bing-s3").innerText = bing[2];
  document.getElementById("bing-s4").innerText = bing[3];
  document.getElementById("bing-s5").innerText = bing[4];

  document.getElementById("snb-s1").innerText = snb[0];
  document.getElementById("snb-s2").innerText = snb[1];
  document.getElementById("snb-s3").innerText = snb[2];
  document.getElementById("snb-s4").innerText = snb[3];
  document.getElementById("snb-s5").innerText = snb[4];

  document.getElementById("pjok-s1").innerText = pjok[0];
  document.getElementById("pjok-s2").innerText = pjok[1];
  document.getElementById("pjok-s3").innerText = pjok[2];
  document.getElementById("pjok-s4").innerText = pjok[3];
  document.getElementById("pjok-s5").innerText = pjok[4];

  document.getElementById("pkwu-s1").innerText = pkwu[0];
  document.getElementById("pkwu-s2").innerText = pkwu[1];
  document.getElementById("pkwu-s3").innerText = pkwu[2];
  document.getElementById("pkwu-s4").innerText = pkwu[3];
  document.getElementById("pkwu-s5").innerText = pkwu[4];

  document.getElementById("mtkp-s1").innerText = mtkp[0];
  document.getElementById("mtkp-s2").innerText = mtkp[1];
  document.getElementById("mtkp-s3").innerText = mtkp[2];
  document.getElementById("mtkp-s4").innerText = mtkp[3];
  document.getElementById("mtkp-s5").innerText = mtkp[4];

  document.getElementById("bio-s1").innerText = bio[0];
  document.getElementById("bio-s2").innerText = bio[1];
  document.getElementById("bio-s3").innerText = bio[2];
  document.getElementById("bio-s4").innerText = bio[3];
  document.getElementById("bio-s5").innerText = bio[4];

  document.getElementById("fis-s1").innerText = fis[0];
  document.getElementById("fis-s2").innerText = fis[1];
  document.getElementById("fis-s3").innerText = fis[2];
  document.getElementById("fis-s4").innerText = fis[3];
  document.getElementById("fis-s5").innerText = fis[4];

  document.getElementById("kim-s1").innerText = kim[0];
  document.getElementById("kim-s2").innerText = kim[1];
  document.getElementById("kim-s3").innerText = kim[2];
  document.getElementById("kim-s4").innerText = kim[3];
  document.getElementById("kim-s5").innerText = kim[4];

  document.getElementById("eko-s1").innerText = eko[0];
  document.getElementById("eko-s2").innerText = eko[1];
  document.getElementById("eko-s3").innerText = eko[2];
  document.getElementById("eko-s4").innerText = eko[3];
  document.getElementById("eko-s5").innerText = eko[4];

  // TOTAL DATA TIAP SEMESTER
  let jumlahSemester1 = 0;
  for (const arr of arrays) {
    if (arr.length > 0) {
      jumlahSemester1 += arr[0];
    }
  }

  let jumlahSemester2 = 0;
  for (const arr of arrays) {
    if (arr.length > 1) {
      jumlahSemester2 += arr[1];
    }
  }

  let jumlahSemester3 = 0;
  for (const arr of arrays) {
    if (arr.length > 2) {
      jumlahSemester3 += arr[2];
    }
  }

  let jumlahSemester4 = 0;
  for (const arr of arrays) {
    if (arr.length > 3) {
      jumlahSemester4 += arr[3];
    }
  }

  let jumlahSemester5 = 0;
  for (const arr of arrays) {
    if (arr.length > 4) {
      jumlahSemester5 += arr[4];
    }
  }

  // RATA-RATA TIAP SEMESTER
  const rataRataSemester1 = jumlahSemester1 / 14;
  const rataRataSemester2 = jumlahSemester2 / 14;
  const rataRataSemester3 = jumlahSemester3 / 14;
  const rataRataSemester4 = jumlahSemester4 / 14;
  const rataRataSemester5 = jumlahSemester5 / 14;

  document.getElementById("rataRataSemester1").innerText =
    rataRataSemester1.toFixed(2);
  document.getElementById("rataRataSemester2").innerText =
    rataRataSemester2.toFixed(2);
  document.getElementById("rataRataSemester3").innerText =
    rataRataSemester3.toFixed(2);
  document.getElementById("rataRataSemester4").innerText =
    rataRataSemester4.toFixed(2);
  document.getElementById("rataRataSemester5").innerText =
    rataRataSemester5.toFixed(2);

  // RATA-RATA SEMESTER 1 - 5
  const jumlahRataRataSemester =
    (rataRataSemester1 +
      rataRataSemester2 +
      rataRataSemester3 +
      rataRataSemester4 +
      rataRataSemester5) /
    5;
  document.getElementById("jumlahRataRataSemester").innerText =
    jumlahRataRataSemester.toFixed(2);

 document.getElementById("hasil").style.display = "block";

  Swal.fire({
    position: "top",
    icon: "success",
    title: "Nilai Berhasil Disimpan",
    text: "Scrool ke Bawah",
    showConfirmButton: false,
    timer: 1500,
  });
}

function ubahNilai() {
  pai.splice(0, pai.length);
  ppkn.splice(0, ppkn.length);
  bind.splice(0, bind.length);
  mtkw.splice(0, mtkw.length);
  sjr.splice(0, sjr.length);
  bing.splice(0, bing.length);
  snb.splice(0, snb.length);
  pjok.splice(0, pjok.length);
  pkwu.splice(0, pkwu.length);
  mtkp.splice(0, mtkp.length);
  bio.splice(0, bio.length);
  fis.splice(0, fis.length);
  kim.splice(0, kim.length);
  eko.splice(0, eko.length);

  document.getElementById("hasil").style.display = "none";

  Swal.fire({
    position: "top",
    icon: "success",
    title: "Nilai Berhasil Diubah",
    text: "Silahkan Tekan Tombol Simpan",
    showConfirmButton: false,
    timer: 1500,
  });
}
