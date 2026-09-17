console.log('============================')
console.log('== HSI STUDENT MANAGEMENT ==')
console.log('============================')
let students = [];

// localStorage adalah atribut yg digunakan untk menyimpan data di browser
localStorage.setItem('kelas', 'XI RPL 1')
localStorage.setItem('total_siswa', 9)

const kelas = localStorage.getItem('kelas')
const totalSiswa = localStorage.getItem('total_siswa')
console.log({kelas, totalSiswa})

// Ambil data siswa tersimpan dari localStorage jika ada
const studentsFromStorage = JSON.parse(localStorage.getItem('students'));
if (studentsFromStorage) {
    students = studentsFromStorage;
}

// Variable penanda mode edit (null = mode tambah)
let editIndex = null;

// Ambil elemen HTML
const studentForm = document.getElementById("studentForm")
const studentName = document.getElementById("studentName")
const studentScore = document.getElementById("studentScore")
const studentList = document.getElementById("studentList")
const totalStudentsElem = document.getElementById("totalStudents")
const averageScoreElem = document.getElementById("averageScore")
const submitBtn = studentForm.querySelector("button[type='submit']")

// ====================================================
// FUNGSI UNTUK MENAMPILKAN NOTIFIKASI DI DALAM WEB
// ====================================================
function showNotification(pesan) {
    // Cari elemen notifikasi, jika belum ada buat elemen baru
    let notifBox = document.getElementById("notifBox");
    
    if (!notifBox) {
        notifBox = document.createElement("div");
        notifBox.id = "notifBox";
        
        // Styling sederhana
        notifBox.style.padding = "10px 15px";
        notifBox.style.marginTop = "15px";
        notifBox.style.marginBottom = "15px";
        notifBox.style.borderRadius = "8px";
        notifBox.style.backgroundColor = "#d1e7dd";
        notifBox.style.color = "#0f5132";
        notifBox.style.fontWeight = "bold";
        notifBox.style.fontSize = "14px";
        
        // Cari elemen header biru (div yang membungkus judul H1)
        const headerDiv = document.querySelector(".header") || document.querySelector("header") || document.querySelector("h1").parentElement;
        
        if (headerDiv) {
            // Taruh kotak notifikasi tepat di bawah div header biru
            headerDiv.after(notifBox);
        } else {
            // Cadangan jika div header tidak ditemukan
            studentForm.parentNode.insertBefore(notifBox, studentForm);
        }
    }

    // Isi teks notifikasi dan tampilkan
    notifBox.textContent = pesan;
    notifBox.style.display = "block";

    // Sembunyikan notifikasi otomatis setelah 3 detik
    setTimeout(() => {
        notifBox.style.display = "none";
    }, 3000);
}

// Fungsi menghitung total & rata-rata nilai
function updateStats() {
    const total = students.length;
    totalStudentsElem.textContent = total;

    if (total === 0) {
        averageScoreElem.textContent = 0;
        return;
    }

    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum += Number(students[i].nilai);
    }
    const avg = sum / total;
    averageScoreElem.textContent = avg.toFixed(1);
}

// Event Listener Submit Form (Tambah / Update)
studentForm.addEventListener("submit", (e) => {
    e.preventDefault(); // cegah agar form tdk submit/refresh

    if (editIndex !== null) {
        // Mode Edit Data
        students[editIndex].name = studentName.value;
        students[editIndex].nilai = studentScore.value;
        
        showNotification("🔄 Data siswa berhasil diupdate!");
        editIndex = null;
        submitBtn.textContent = "➕ Tambah Siswa";
    } else {
        // Mode Tambah Data
        const studentData = {
            name: studentName.value,
            nilai: studentScore.value
        };
        students.push(studentData);
        
        showNotification("✅ Data siswa berhasil ditambahkan!");
    }

    // Update localStorage
    localStorage.setItem('students', JSON.stringify(students));

    // Reset Form & Render ulang UI
    studentForm.reset();
    renderStudentList();
})

// Fungsi Render UI
function renderStudentList() {
    studentList.innerHTML = "";

    if (students.length === 0) {
        studentList.innerHTML = "<div class='empty'>Belum ada data siswa</div>";
    } else {
        // loop data student -> generate student Item
        for (let i = 0; i < students.length; i++) {
            const student = students[i];
            studentList.innerHTML += `
            <div class="student-item">
              <div class="student-name">
                <span class="student-number">${i + 1}.</span>
                ${student.name}
              </div>
              <div class="score">${student.nilai}</div>
              <div class="action-buttons" style="display:flex; gap:6px;">
                <button class="primary-btn" type="button" onclick="editStudent(${i})" style="padding: 6px 10px; font-size: 12px; width: auto;">✏️ Ubah</button>
                <button class="delete-btn" type="button" onclick="deleteStudent(${i})">🗑️ Hapus</button>
              </div>
            </div>
            `;
        }
    }

    // Update Angka Statistik
    updateStats();
}

// Fungsi Edit / Ubah Siswa
function editStudent(index) {
    studentName.value = students[index].name;
    studentScore.value = students[index].nilai;
    editIndex = index;
    submitBtn.textContent = "💾 Simpan Perubahan";
    studentName.focus();
}

// Fungsi Hapus Siswa
function deleteStudent(index) {
    const confirmDelete = confirm(`⚠️ Apakah Anda yakin ingin menghapus "${students[index].name}"?`);
    if (confirmDelete) {
        students.splice(index, 1);
        localStorage.setItem('students', JSON.stringify(students));
        
        showNotification("🗑️ Data siswa berhasil dihapus!");
        
        renderStudentList();
    }
}

// Panggil pertama kali untuk render data
renderStudentList();