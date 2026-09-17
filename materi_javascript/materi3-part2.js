console.log("------------------------------------")
console.log("MATERI 3 PART 2 - DATA PROCESSING")
console.log("------------------------------------")

const skills = ['html', 'css', 'JavaScript'];
console.log(skills);

// akses berdasarkan indexnya
console.log(skills[2]); // akses nilai js di indexnya ke 2
skills.push("python"); // tambah item diakhir
console.log(skills);

// menghapus item terakhir
skills.pop();
// skills.pop();
console.log(skills);
skills.unshift('github'); //tambah di depan
console.log(skills);
skills.shift() // hapus dr depan
skills.shift()
console.log(skills);
const cekJs = skills.includes('JavaScript');
console.log({cekJs});
if (cekJs)
    console.log('saya menemukan JavaScript di dunia ini, Hidup Djokowi!!!!!...')
else
    console.log('Saya blm menemukan JavaScript di dunia ini, soalnya uang rakyat dikorupsi')

skills.push('TailwindCss');
skills.push('ReactJs')
skills.push('HonoJs')
console.log(skills);
// cari index berdasarkan velue
const cariIndexReactJS = skills.indexOf('ReactJs');
console.log({cariIndexReactJS});
console.log(`panggil by index: ${skills[cariIndexReactJS]}`);
// string teks yg  di join lewat karakter  pemisah misal , - | >
const joinData = skills.join(' - ');
console.log({joinData})

// ------------------
// DATA PROCESSING
// ------------------
const myWallet = [1000000, 2000000, 50000];
const kursUSD = 17300;
const myDollarWallet = myWallet.map(
    // wallet => (wallet / kursUSD).toFixed(2)
    wallet => {
        const nilaiUSD = (wallet / kursUSD).toFixed(2);
        return `$ ${nilaiUSD}`}
);
console.log({myWallet, myDollarWallet})
// filter data dgn .filter()
const underSejuta = myWallet.filter(
    rupiah => rupiah < 1000000
);
console.log(({underSejuta}));
// menggabungkan atau mengakumulasi data pakai .reduce()
// 0 didlm adlh angka awal
const totalRupiah = myWallet.reduce(
    (akumulator, rupiah) => akumulator + rupiah,
    0
);
console.log({totalRupiah})
// method chaining = menggabungkan berbagai method dalam 1 deklarasi
const totalMuarhUSD = myWallet.map(rupiah => rupiah / kursUSD)
    .filter(usd => usd < 100)
    .reduce((sum, usd) => sum + usd, 0)

const totalBawah100Dollar = `$ ${totalMuarhUSD.toFixed(2)}`;
console.log({totalBawah100Dollar})