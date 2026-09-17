console.log("--------------------------------------")
console.log("MATERI 3 PART 1 -  DATA MANIPULATION")
console.log("--------------------------------------")
//  STRING MANIPULATION
const namaTokoh = "prof. Dr. Ing. H. Bacharuddin Jusuf Habibie, FREng."
console.log({namaTokoh})
const namaTokohKecil = namaTokoh.toLowerCase(); // jgn lupa () karena dia function
const namaTokohBesar = namaTokoh.toUpperCase(); // jgn lupa () karena dia function
console.log({namaTokohKecil, namaTokohBesar})
const namaPanggilan = namaTokoh.slice(36, 43); // (index awal / index akhir)
console.log({ namaPanggilan })
const cekHaji = namaTokoh.includes("H.");
if (cekHaji) {
    console.log('siap pak haji!')
} else {
    console.log("blm sempat Haji, kuotanya dikorupsi woi!!")
}
const namaTokohBaru = namaTokoh.replace("Bacharuddin", "Muhammad");
console.log({namaTokohBaru})
const namaSamaan = "Aba Abdillah bin Abu Ubaidillah bin Abu Sufyan";
const gantiNama = namaSamaan.replaceAll("Abu", "Abi");
console.log({namaSamaan, gantiNama})

//  NUMBER MANIPULATION
const gajiTokoh = "35000000"; // berupa string
const nominalGaji = Number(gajiTokoh); // berubah jadi integer
console.log({ gajiTokoh, nominalGaji })
const saldoBelanja = "25000.324"; // tipe desimal
const saldoDesimal = parseFloat(saldoBelanja); // berubah jadi number/float
console.log({ saldoBelanja, saldoDesimal })
const tambahSaldo = saldoDesimal + 100000; //akan bug jika tidak di konversi
console.log({tambahSaldo})
const formatSaldo = tambahSaldo.toFixed(2); //motong belakang koma
console.log({formatSaldo}) 

// sample angka2 pembulatan dgn fungsi math
const angkaX = Math.round(85.6); //yg terdekat (atas/bawah)
const angkaY = Math.floor(85.9); // ke bawah
const angkaZ = Math.ceil(85.1); // ke atas
console.log({ angkaX, angkaY, angkaZ })

// date MANIPULATION
const tanggalBaru = new Date(); // tipe data date
const tanggalLokal = tanggalBaru.toLocaleString();
const tanggalString = tanggalBaru.toString();
console.log({ tanggalBaru, tanggalLokal, tanggalString});
const tahunIni = tanggalBaru.getFullYear();  //nomor tahun
const bulanIni = tanggalBaru.getMonth() + 1; //nomor bulan
const tanggalIni = tanggalBaru.getDate(); //nomor tanggal
// const hariIni = tanggalBaru.getDay();
const hariIni = 5;
const daftarHariIndo = ['ahad', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']
const hariIndo = daftarHariIndo[hariIni];
const tanggalIndo = `${hariIndo}/${tanggalIni}/${bulanIni}/${tahunIni}`;
console.log({ tanggalIndo, hariIni, tanggalIni, bulanIni, tahunIni})
// format saudi
const saudiDate = new Intl.DateTimeFormat('ar-SA').format(tanggalBaru);
console.log({saudiDate});