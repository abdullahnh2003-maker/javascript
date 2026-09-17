console.log("=== Register Form ===");
const nameIput = document.getElementById('nameInput');
const nameInfo = document.getElementById('nameInfo');
const PreviewName = document.getElementById('previewName');
const PreviewReason = document.getElementById('previewReason');
const previewInterest = document.getElementById('previewInterest');
const PreviewClass = document.getElementById('previewClass');
const PreviewStatus = document.getElementById('previewStatus');
const message = document.getElementById('message');
console.log(nameIput);
nameIput.addEventListener('input', function () {
    const nameVal = nameIput.value;
    // console.log('User sedang mengetik nama.....', nameVal)
    nameInfo.textContent =`Hai, ${nameVal}`
    PreviewName.textContent = nameVal;
})

const classSelect = document.getElementById('classSelect');
console.log(classSelect);
classSelect.addEventListener('change', function () {
    const classVal = classSelect.value;
    // console.log('User sedang memilih kelas.....', nameVal)
    // classSelect.textContent =`Kelas , ${classVal}`
    PreviewClass.textContent = classVal;
})

const interestSelect = document.getElementById('interestSelect');
console.log(interestSelect);
interestSelect.addEventListener('change', function () {
    const interestVal = interestSelect.value;
    // console.log('User sedang memilih kelas.....', nameVal)
    // classSelect.textContent =`Kelas , ${classVal}`
    previewInterest.textContent = interestVal;
})

const agreementCheckbox = document.getElementById('agreement');
console.log(agreementCheckbox);
agreementCheckbox.addEventListener('change', function () {
    const agreementVal = agreementCheckbox.checked; // nilainya boolean
    PreviewStatus.textContent = agreementVal ? 'Sudah siap' : 'Belum siap';
    // if (agreementVal) {
    //     PreviewStatus.textContent = 'Sudah siap'
    // } else {
    //     PreviewStatus.textContent = 'Belum siap'
    // }
})

//  DOMContentLoaded adalah yg dijalankan setelah DOM terload
document.addEventListener('DOMContentLoaded', function () {
    console.log('Eksekusi setelah DOM terload...');
    alert("Welcome to Coders Club")
})

// event keydown adalah even yg dijalankan setiap user menekan tombol keyboard
const reasonInput = document.getElementById('reasonInput');
const characterCount = document.getElementById('characterCount')
reasonInput.addEventListener('keydown', function (e) {
    console.log('user menekan tombol:', e.key);
    const totalCounter = reasonInput.value.length; // get jumlah karakter
    characterCount.textContent = totalCounter
    // Logika perubahan warna indicator
    if (totalCounter >= 90) {
      characterCount.style.color = "red"; // Kritis (Sisa 10 karakter)
    } else if (totalCounter >= 70) {
      characterCount.style.color = "orange"; // Peringatan (Sisa 30 karakter)
    } else {
      characterCount.style.color = "inherit"; // Normal (Kembali ke warna asli bawaan CSS)
    }
})

const registrationForm = document.getElementById('registrationForm')
const resetButton = document.getElementById('resetButton')
console.log(resetButton);
resetButton.addEventListener('click', function () {
    registrationForm.reset(); // reset semua inputan di form
    PreviewName.textContent = 'Belum diisi';
    PreviewClass.textContent = 'Belum dipilih';
    previewInterest.textContent = 'Belum dipilih';
    PreviewReason.textContent = 'Belum ada alasan...';
    PreviewStatus.textContent = '⏳ Belum siap dikirim';
    message.textContent = '👋 Silakan isi form pendaftaran.';
})

// even submit adalah even yg dijalankan setelah user mengirim form
registrationForm.addEventListener('submit', function (e) {
    // mencegah form defaultnya mengirim data ke server
    e.preventDefault();
    console.log('form berhasil dikirim!');
    const confirmDialog = confirm('Apakah anda yakin ingin mengirim pendaftaran')
    if (!confirmDialog) {//klo di cancel
        console.log('User membatalkan pengiriman pendaftaran')
    return; // berhenti disini
    }
    // klo yes - lanjut mengirim ddata ke server
    console.log('User setuju mengirim pendaftaran.')
    // sembunyikan form dan tampilkan area pesan sukses
    registrationForm.style.display = 'none';
    successMessage.style.display = 'block'
})