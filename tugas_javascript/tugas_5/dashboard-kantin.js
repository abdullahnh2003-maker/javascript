// new flatpickr("#fDate", {
//   mode: "range",
//   dateFormat: "d-F-y",
// });

// const $kategori = document.querySelector("#kategori")
// new tomSelect("#fKat", {
//   persist: false,
//   createOnBlur: true,
//   create: true,
//   plugins: ["remove_button"],
//   placeholder: "Pilih kategori...",
  
// });

// new Chart(cBar, {
//   type: "bar",
//   data: {
//     labels: ["Sab", "Min", "Sen", "Sel", "Rab", "Kam"],
//     datasets: [
//       {
//         label: "",
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });

// const cDn = document.getElementById("cDn");
// new Chart(cDn, {
//   type: 'doughnut',
//   data: {
//     labels: ['makanan', 'minuman', 'snack'],
//     datasets: [{
//         data: [25, 30, 20]
//     }]
//   }
// });

// // 1. Data awal produk (1 produk asli + 9 produk baru: minuman, makanan, snack)
// var tabledata = [

//     {id: 2, name: "Es Teh Manis", kategori: "Minuman", terjual: "45", omzet: "2026-06-01", harga: "5000"},
//     {id: 3, name: "Kopi Susu Gula Aren", kategori: "Minuman", terjual: "30", omzet: "2026-06-02", harga: "18000"},
//     {id: 4, name: "Jus Alpukat", kategori: "Minuman", terjual: "15", omzet: "2026-06-03", harga: "12000"},
//     {id: 5, name: "Nasi Goreng Spesial", kategori: "Makanan", terjual: "25", omzet: "2026-06-01", harga: "20000"},
//     {id: 6, name: "Mie Ayam Bakso", kategori: "Makanan", terjual: "40", omzet: "2026-06-02", harga: "15000"},
//     {id: 7, name: "Sate Ayam Madura", kategori: "Makanan", terjual: "20", omzet: "2026-06-03", harga: "25000"},
//     {id: 8, name: "Keripik Singkong Balado", kategori: "Snack", terjual: "50", omzet: "2026-06-01", harga: "10000"},
//     {id: 9, name: "Pisang Keju Coklat", kategori: "Snack", terjual: "35", omzet: "2026-06-02", harga: "12000"},
//     {id: 10, name: "Rata-Rata Makaroni Ngehe", kategori: "Snack", terjual: "60", omzet: "2026-06-03", harga: "8000"}
// ];

// // 2. Inisialisasi Tabel Tabulator
// var table = new Tabulator("#tCount", {
//     height: 300, // Dipertinggi sedikit agar muat menampung lebih banyak produk
//     data: tabledata,
//     layout: "fitColumns",
//     columns: [
//         {title: "Name", field: "name", width: 180},
//         {title: "Kategori", field: "kategori", hozAlign: "left"},
//         {title: "Terjual", field: "terjual", hozAlign: "center"},
//         {title: "Omzet", field: "omzet", sorter: "date", hozAlign: "center"},
//         {title: "Harga", field: "harga", hozAlign: "right"},
//         {
//             title: "Aksi", 
//             hozAlign: "center", 
//             formatter: function(cell, formatterParams, onRendered){
//                 return "<button class='btn-delete' style='background:#ff4d4f; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;'>Hapus</button>";
//             },
//             cellClick: function(e, cell){
//                 var rowData = cell.getRow().getData();
                
//                 // SweetAlert2 diletakkan di dalam tombol aksi agar variabel rowData dan cell terbaca dengan benar
//                 Swal.fire({
//                     title: 'Hapus Produk?',
//                     text: `Apakah Anda yakin ingin menghapus "${rowData.name}"?`,
//                     icon: 'warning',
//                     showCancelButton: true,
//                     confirmButtonColor: '#d33',
//                     cancelButtonColor: '#3085d6',
//                     confirmButtonText: 'Ya, Hapus!',
//                     cancelButtonText: 'Batal'
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         // Hapus baris dari tabel Tabulator
//                         cell.getRow().delete();
                        
//                         // Notifikasi sukses
//                         Swal.fire(
//                             'Terhapus!',
//                             'Produk berhasil dihapus dari tabel.',
//                             'success'
//                         );
//                     }
//                 });
//             }
//         }
//     ],
// });

document.addEventListener('DOMContentLoaded', () => {
   
    const categories = [
        { id: 'makanan', text: 'Makanan Berat' },
        { id: 'minuman', text: 'Minuman' },
        { id: 'snack', text: 'Snack' }
    ];

    const products = [
        { id: 1, name: 'Nasi Goreng Spesial', category: 'makanan', price: 15000, stock: 25 },
        { id: 2, name: 'Ayam Geprek Madu', category: 'makanan', price: 18000, stock: 15 },
        { id: 3, name: 'Es Teh Manis Jumbo', category: 'minuman', price: 4000, stock: 50 },
        { id: 4, name: 'Jus Alpukat', category: 'minuman', price: 10000, stock: 20 },
        { id: 5, name: 'Roti Bakar Coklat Keju', category: 'snack', price: 12000, stock: 30 },
        { id: 6, name: 'Pisang Goreng Krispi', category: 'snack', price: 5000, stock: 40 }
    ];

    const promos = [
        { emoji: '🍛', name: 'Paket Santri Hemat', desc: 'Nasi Goreng + Es Teh Manis', price: 'Rp 17.000', lozenge: 'yellow', lozText: 'Diskon 15%' },
        { emoji: '🥤', name: 'Jumat Berkah Minuman', desc: 'Semua varian jus diskon', price: 'Rp 8.000', lozenge: 'teal', lozText: 'Promo' },
        { emoji: '🍞', name: 'Cemilan Malam', desc: 'Roti Bakar + Susu Hangat', price: 'Rp 15.000', lozenge: 'red', lozText: 'Terbatas' }
    ];

  
    const btnTheme = document.getElementById('btnTheme');
    const updateThemeButton = (mode) => {
        btnTheme.querySelector('span').textContent = mode === 'dark' ? 'Mode terang' : 'Mode gelap';
    };
    
    const currentMode = document.documentElement.getAttribute('data-color-mode') || 'light';
    updateThemeButton(currentMode);

    btnTheme.addEventListener('click', () => {
        let mode = document.documentElement.getAttribute('data-color-mode');
        mode = mode === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-color-mode', mode);
        try { localStorage.setItem('kantin-color-mode', mode); } catch(e){}
        updateThemeButton(mode);
        
        initCharts();
    });

    // --- Flatpickr---
    const today = new Date();
    const pastWeek = new Date();
    pastWeek.setDate(today.getDate() - 7);

    flatpickr('#fDate', {
        mode: 'range',
        dateFormat: 'Y-m-d',
        locale: 'id',
        defaultDate: [pastWeek, today],
        onChange: (selectedDates) => {
            if (selectedDates.length === 2) {
                const options = { day: 'numeric', month: 'short', year: 'numeric' };
                const start = selectedDates[0].toLocaleDateString('id-ID', options);
                const end = selectedDates[1].toLocaleDateString('id-ID', options);
                document.getElementById('dRange').textContent = `${start} – ${end}`;
                updateDashboardData();
            }
        }
    });
    document.getElementById('dRange').textContent = `${pastWeek.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })} – ${today.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}`;

    // --- Tom Select ---
    const selectKat = document.getElementById('fKat');
    categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat.id;
        opt.textContent = cat.text;
        selectKat.appendChild(opt);
    });

    const ts = new TomSelect('#fKat', {
        plugins: ['remove_button'],
        placeholder: 'Pilih kategori...',
        onChange: () => updateDashboardData()
    });
 
    ts.setValue(categories.map(c => c.id));

    // --- Floating UI ---
    const tooltip = document.getElementById('tooltip');
    let activeBtn = null;

    document.querySelectorAll('.icon-btn[data-tip]').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            activeBtn = btn;
            tooltip.textContent = btn.getAttribute('data-tip');
            tooltip.style.opacity = '1';
            
            FloatingUIDOM.computePosition(btn, tooltip, {
                placement: 'top',
                middleware: [FloatingUIDOM.offset(6), FloatingUIDOM.shift(), FloatingUIDOM.flip()]
            }).then(({x, y}) => {
                Object.assign(tooltip.style, {
                    left: `${x}px`,
                    top: `${y}px`
                });
            });
        });

        btn.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            activeBtn = null;
        });
    });

    // --- Chart.js ---
    let barChart, dnChart;
    function initCharts() {
        const isDark = document.documentElement.getAttribute('data-color-mode') === 'dark';
        const textColor = isDark ? '#CECFD2' : '#292A2E';
        const gridColor = isDark ? 'rgba(227, 228, 242, 0.1)' : 'rgba(11, 18, 14, 0.1)';

        if (barChart) barChart.destroy();
        if (dnChart) dnChart.destroy();

        const ctxBar = document.getElementById('cBar').getContext('2d');
        barChart = new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Ahad'],
                datasets: [{
                    label: 'Omzet (Rp)',
                    data: [450000, 520000, 480000, 610000, 750000, 890000, 420000],
                    backgroundColor: isDark ? '#4688EC' : '#357DE8',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false }, ticks: { color: textColor } },
                    y: { grid: { color: gridColor }, ticks: { color: textColor } }
                }
            }
        });

        // Doughnut Chart 
        const ctxDn = document.getElementById('cDn').getContext('2d');
        dnChart = new Chart(ctxDn, {
            type: 'doughnut',
            data: {
                labels: categories.map(c => c.text),
                datasets: [{
                    data: [120, 200, 95],
                    backgroundColor: ['#357DE8', '#82B536', '#BF63F3']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { color: textColor, boxWidth: 12 } }
                }
            }
        });
    }
    initCharts();

    // --- Tabulator  ---
    const table = new Tabulator('#tProd', {
        data: products,
        layout: 'fitColumns',
        pagination: 'local',
        paginationSize: 5,
        columns: [
            { title: 'Nama Produk', field: 'name', widthGrow: 2, headerFilter: 'input' },
            { 
                title: 'Kategori', 
                field: 'category', 
                formatter: (cell) => {
                    const val = cell.getValue();
                    const match = categories.find(c => c.id === val);
                    return match ? match.text : val;
                }
            },
            { title: 'Harga', field: 'price', formatter: (cell) => `Rp ${cell.getValue().toLocaleString('id-ID')}`, hozAlign: 'right' },
            { title: 'Stok', field: 'stock', hozAlign: 'center', width: 80 },
            {
                title: 'Aksi',
                formatter: () => `<button class="icon-btn del" type="button" aria-label="Hapus Produk"><svg class="ic" viewBox="0 0 24 24"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>`,
                width: 70,
                hozAlign: 'center',
                cellClick: (e, cell) => {
                    const rowData = cell.getRow().getData();
                    Swal.fire({
                        title: 'Hapus Produk?',
                        text: `Apakah Anda yakin ingin menghapus "${rowData.name}"?`,
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Hapus',
                        cancelButtonText: 'Batal',
                        customClass: { popup: 'ads-modal' }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            cell.getRow().delete();
                            document.getElementById('tCount').textContent = `Total: ${table.getDataCount()} produk`;
                            Swal.fire({
    title: "هل تريد الاستمرار؟",
    text: "Apakah Anda yakin untuk melanjutkan?",
    icon: "question",
    iconHtml: "؟",
    confirmButtonText: "نعم",
    cancelButtonText: "لا",
    showCancelButton: true,
    showCloseButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Saved!", "Data berhasil di hapus", "success");
    }
  });
                        }
                    });
                }
            }
        ],
        placeholder: 'Tidak ada data produk'
    });

    document.getElementById('tCount').textContent = `Total: ${products.length} produk`;

    const promoList = document.getElementById('promo');
    promos.forEach(p => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="p-emoji">${p.emoji}</div>
            <div class="p-body">
                <b>${p.name}</b>
                <small>${p.desc} • <b>${p.price}</b></small>
            </div>
            <span class="lozenge ${p.lozenge}">${p.lozText}</span>
        `;
        promoList.appendChild(li);
    });
    document.getElementById('pCount').textContent = `${promos.length} aktif`;

  
    function updateDashboardData() {

        document.getElementById('kOmzet').textContent = 'Rp 4.120.000';
        document.getElementById('cOmzet').textContent = '+12% dari minggu lalu';
        document.getElementById('kItem').textContent = '415 porsi';
        document.getElementById('cItem').textContent = 'Rata-rata 59/hari';
        document.getElementById('kTrx').textContent = '280 trx';
        document.getElementById('cTrx').textContent = '98% sukses';
    }
    updateDashboardData();
});