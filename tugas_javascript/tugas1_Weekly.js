console.log("======================================")
console.log("HSI STUDENT REPORT CARD")
console.log("======================================")

const tanggal = new Date();
console.log("Tanggal Laporan", tanggal);

console.log("--------------------------------------")

const student = [
    {
        name: "Dubir",
        className: "Mr.Izan",
        scores: [97, 100, 100],
        attendance: 95,
        hasViolation: false
    },
    {
        name: "China",
        className: "Mr.Tsabit",
        scores: [80, 80, 80],
        attendance: 90,
        hasViolation: true
    },
    {
        name: "Plenger",
        className: "Mr.Izan",
        scores: [84, 94, 97],
        attendance: 94,
        hasViolation: false
    },  
];


for (let i = 0; i < student.length; i++) {

let totalScore = 0;
for (let j = 0; j < student[i].scores.length; j++) {
    total = totalScore + student[i].scores[j];
}

let nilairatarata = totalScore + student[i].scores.length;


let grade;
if (nilairatarata >= 90) {
    grade = "A";
} else if (nilairatarata >= 80) {
    grade = "B";
} else if (nilairatarata >= 70) {
    grade = "C";
}  else if (nilairatarata < 70) {
    grade = "D";
}


let status;
if (nilairatarata <= 75 && student[i].attendance < 80 && student[i].hasViolation === false) {
    status = "❌ Tidak Lulus";
} else {
    status = "✅ Lulus";
}


console.log(`
Student #${i + 1}
Nama        : ${student[i].name}
Kelas       : ${student[i].classname}
Nilai       : ${student[i].scores}
Total       : ${totalScore}
Rata-rata   : ${nilairatarata.toFixed(2)}
Grade       : ${grade}
Kehadiran   : ${student[i].attendance}
Pelanggaran : ${student[i].hasViolation}
Status      : ${status}
`);}