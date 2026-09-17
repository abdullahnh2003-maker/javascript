console.log('--------------------------------')
console.log('----- TUGAS WEEKLY PART 2 ------')
console.log('--------------------------------')

const studentName = "  aHmAd fAuZaN  "  ;
const bersih = studentName.trim()
                          .toUpperCase()
                          .split()
                          .join()
console.log('Original Name : ', studentName)
console.log('Big Name : ', bersih)
const namaBersih = studentName.replace("aHmAd fAuZaN", "Ahmad Fauzan")
console.log('Clean Name : ', namaBersih)

const username = namaBersih.trim()
                           .split(" ")
                           .join(".")
                           .toLowerCase();
console.log({username})
                      

console.log('--------------------------------')
console.log('------- ANALYZE THE NAME -------')
console.log('--------------------------------')

console.log("|----cek nama depan----")
const cekNama = studentName.includes("aHmAd")
if (cekNama) {
    console.log("Contains Ahmad : true")
} else {
    console.log("salah nama")
}

console.log("|----Ambil 5 karakter pertama----")
const ambilNama = namaBersih.slice(2, 7)
console.log("First 5 chars : ", ambilNama)

console.log("|----Ganti nama----")
const gantiNama = studentName.replace("aHmAd fAuZaN", "Budi Fauzan")
console.log('Replacement : ', gantiNama)

console.log('--------------------------------')
console.log('------- Process the Age --------')
console.log('--------------------------------')
const ageText = "17 tahun";
const Age = parseInt(ageText)
console.log("Age Text : ", ageText)
console.log("Age      : ", Age)



console.log('--------------------------------')
console.log('------ Process the Score -------')
console.log('--------------------------------')

const scoreText = "85.678";
const score = parseFloat(scoreText);
const Formatted = score.toFixed(2);
console.log("Original Score : ", scoreText)
console.log("Score          : ", Formatted)
console.log("Formatted      : ", score)

console.log("|----- Pembulatan ----------")
const round = Math.round(scoreText)
const floor = Math.floor(scoreText)
const ceil  = Math.ceil(scoreText)

console.log("Round          : ", round)
console.log("Floor          : ", floor)
console.log("Ceil           : ", ceil)

console.log('--------------------------------')
console.log('----- Determine the Grade ------')
console.log('--------------------------------')

let Grade;
if (score >= 90) {
    Grade = "A";
} else if (score >= 80) {
    Grade = "B";
} else if (score >= 70) {
    Grade = "c";
} else if (score >= 60) {
    Grade = "D";
} else if (score <= 60) {
    Grade = "E";
}

console.log(`🏆 Grade : ${Grade}`)

console.log('--------------------------------')
console.log('--- Process Registration Date --')
console.log('--------------------------------')

const registrationText = "21-08-2026";
const pisah = registrationText.split("-")
const number = Number(pisah[0]);
const numbers = Number(pisah[1]);
const numberst = Number(pisah[2]);
const numbersts = Number(pisah[2]) - Age;
console.log("Clean :", pisah)
console.log("Day   : ", number)
console.log("Month : ", numbers)
console.log("Year  : ", numberst)

console.log('--------------------------------')
console.log('----- Current Date & Time ------')
console.log('--------------------------------')

const now = new Date();
const tahun = now.getFullYear()
const bulan  = now.getMonth() + 1
const tanggal = now.getDate()
const hari = now.getDay()
const jam = now.getHours()
const menit = now.getMinutes()

console.log(`
    Year    : ${tahun}
    Month   : ${bulan}
    Date    : ${tanggal}
    Day     : ${hari}
    Time    : ${jam}:${menit}
`)


console.log('--------------------------------')
console.log('----- Create Date Formatter ----')
console.log('--------------------------------')

function formatDate(date) {
   
}
 console.log(formatDate(now))


console.log('--------------------------------')
console.log('---------- Lucky Dice ----------')
console.log('--------------------------------')

const dice = Math.floor(Math.random() * 6) + 1; {
    if (dice == 6) {
        console.log(`🎲 Lucky Dice : ${dice} 
🔥 JACKPOT!`)
    }
    if (dice == 5) {
        console.log(`🎲 Lucky Dice : ${dice} 
😎 GOOD LUCK!`)
    }
    if (dice == 4) {
        console.log(`🎲 Lucky Dice : ${dice} 
😎 GOOD LUCK!`)
    }
    if (dice == 3) {
        console.log(`🎲 Lucky Dice : ${dice} 
😎 GOOD LUCK!`)
    }
    if (dice == 2) {
        console.log(`🎲 Lucky Dice : ${dice} 
😎 GOOD LUCK!`)
    }
    if (dice == 1) {
        console.log(`🎲 Lucky Dice : ${dice}
💀 BAD LUCK!`)
    }
}


console.log('--------------------------------')
console.log('--------- FINAL REPORT ---------')
console.log('--------------------------------')
console.log(`
    
    `)

console.log(`
╔════════════════════════════════════╗
║      🎓 STUDENT DATA PROCESSOR     ║
╚════════════════════════════════════╝
`)

console.log(`
🔎 NAME ANALYSIS
────────────────────────────────────
Original Name : ${studentName}
Clean Name    : ${namaBersih}
Username      :   ${username}
`)

console.log(`
🔎 NAME ANALYSIS
────────────────────────────────────
Contains Ahmad : ${cekNama}
First 5 chars  : ${ambilNama}
Replacement    :${gantiNama}
`)

console.log(`
🎂 AGE
────────────────────────────────────
Age Text       : ${ageText}
Age            : ${Age}
Birth Year     : ${numbersts}
`)

console.log(`
📊 SCORE
────────────────────────────────────
Original Score : ${scoreText}
Formatted      : ${Formatted}
Round          : ${round}
Floor          : ${floor}
Ceil           : ${ceil}
Grade          : ${Grade}

📅 REGISTRATION
────────────────────────────────────
Date           : ${tanggal}/${bulan}/${tahun}


🕐 REPORT GENERATED
────────────────────────────────────
Date           : ${tanggal}/${bulan}/${tahun}
Time           : ${jam}:${menit}

🎲 LUCKY DICE
────────────────────────────────────
`)

 {
    if (dice == 6) {
        console.log(`🎲 Lucky Dice : ${dice} 
🔥 JACKPOT!`)
    }
    if (dice == 5) {
        console.log(`🎲 Lucky Dice : ${dice} 
😎 GOOD LUCK!`)
    }
    if (dice == 4) {
        console.log(`🎲 Lucky Dice : ${dice} 
😎 GOOD LUCK!`)
    }
    if (dice == 3) {
        console.log(`🎲 Lucky Dice : ${dice} 
😎 GOOD LUCK!`)
    }
    if (dice == 2) {
        console.log(`🎲 Lucky Dice : ${dice} 
😎 GOOD LUCK!`)
    }
    if (dice == 1) {
        console.log(`🎲 Lucky Dice : ${dice}
💀 BAD LUCK!`)
    }
}

console.log(`
╔════════════════════════════════════╗
║       🚀 PROCESS COMPLETE!         ║
╚════════════════════════════════════╝`)

// 📅 REGISTRATION
// ────────────────────────────────────

