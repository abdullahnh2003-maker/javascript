console.log("Hello, World!")
console.log("------------------------------------------------------")
// komen di js pake //
let namaSantri = "bagong"
let umur = 15; //integer / number (bisa juga tanpa koma)
let kenyang = false; // boolean (bisa juga tanpa koma)
console.log(namaSantri);// print nilai
console.log({umur, kenyang});// debug biar jadi objek
//  var = bisa berubah (mutable _ versi jadul)
//  let = bisa berubah (mutable)
// const = tdk bisa berubah (mutable)
const jumlahKelasAngkatan2026 = 5;
console.log("Jumlah Kelas", jumlahKelasAngkatan2026);
// umur e nambah per 01 juli
umur = 16; // let bisa ditimpa/ ubah lagi
// umur = "hello bang" (bisa ditimpa tipe data lain)
console.log("umur terkini :", umur); 
// jumlahKelasAngkatan2026 = 10; // pasti eror
console.log('------------------------------------------------------')
angkaX = "10"; // string 
angkay = 50; // number
totalAngka = angkay - angkaX; // 50 - "10" = 40
console.log("Total Angka :", totalAngka);
totalAngkaAneh = angkay + angkaX; //50 + "10" = "5010"
console.log("Total Angka Aneh :", totalAngkaAneh);
// temlate literal = cara nyambung teks dr variabel
const salam = "Assalamualaikum"; //teks unicode
const menyala = "💨" //teks emoji
const salamSapa = salam + ", Babang Ganteng! " + menyala;
console.log(salamSapa);// menyambung teks
//  gunakan backtick `isi konten`
const salamSapaAlus = `${salam}, Babang Ganteng! ${menyala}`;
console.log(salamSapaAlus) 
console.log("------------------------------------------------------")
// cara mengenali tipe data: typeof
const tipeSAlam = `tipe data salam: ${typeof salam}`;
const tipeUmur = `tipe data Umur: ${typeof umur}`;
console.log(tipeSAlam);
console.log(tipeUmur);

console.log("------------------------------------------------")

// operator perbandingan
const UmurBudi = 19 // integer
const UmurAceng = "19" // string
// sama dgn 2 (==): tdk membandingkan tipe data
// sama dgn 3 (===): ikut embandingkan tipe data
const chekUmur = UmurBudi === UmurAceng;
// const chekUmur = UmurBudi == UmurAceng;
console.log({UmurBudi, UmurAceng, chekUmur});
// jika seumuran
if (chekUmur) {
    console.log("Budi dan Aceng Seumuran!")
} else {
    console.log("Budi dan Aceng TDK Seumuran!")
}

const umurSupri = 15;
if (umurSupri > UmurBudi) {
    console.log("supardi Mudaan!");
} else {
    console.log("Supardi Tuaan!");
}
// != tdk sama dengan
// !== tdk sama dengan + tipe datanya sama
if (UmurBudi !== UmurAceng) {
    console.log("budi dan ujang beda")
} else {
    console.log("budi dan ujang samaan")
}

// perulangn for loop
for (let i = 1; i <= 5; i++) {
    console.log(`hello bang ke-${i}!`);
    if (i === 2) {
        console.log('wah udah lewat 2 aja......')
    }
}
// array = data berurutan yg berindeks
const daftarSantri = ['bima', 'bumi', 'bemi'];
console.log(daftarSantri); // saemua items
console.log(daftarSantri [0]); // item ke 0
console.log(daftarSantri [1]); // item ke 1
console.log(daftarSantri [2]); // item ke 2

// object = pakai {} dan punya key
const profilBima = {
    nama: 'Bima Saputra Al-Jawi',
    kelas: 11,
    asrama: 'ibn-Qayyim'
}

console.log(profilBima); // print semua
console.log("Nama   :   ", profilBima.nama); // panggil berdasarkan key
console.log("Kelas  :  ", profilBima.kelas); // panggil berdasarkan key
console.log("Asrama : ", profilBima.asrama); // panggil berdasarkan key

// Date => manipulasi penanggalan
const tanggalBaru = new Date();
console.log(tanggalBaru); // format UTC
console.log(tanggalBaru.toString); 
console.log(tanggalBaru.toLocaleString); 