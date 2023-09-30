
// Simpan data karyawan dalam bentuk array objek
const dataGajiKaryawan = [
    {
        no: 1,
        nama: "Budi Santoso",
        status: "Tetap",
        jabatan: "DIRUT",
        divisi: "HEAD",
        golongan: "VII-A",
        noID: "TDH07A",
        gajiPokok: 20000000,
        uangLembur: 3500000,
        tunjanganJabatan: 7500000,
        tunjanganBPJS: 1925000,
        iuranBPJS: 1220000,
        pinjaman: 3500000,
    },
    {
        no: 2,
        nama: "Jamal Alatas",
        status: "Kontrak",
        jabatan: "W. DIRUT",
        divisi: "HEAD",
        golongan: "VII-B",
        noID: "KWDH07B",
        gajiPokok: 18500000,
        uangLembur: 3000000,
        tunjanganJabatan: 6000000,
        tunjanganBPJS: 1600000,
        iuranBPJS: 1095000,
        pinjaman: 5000000,
    },
    {
        no: 3,
        nama: "Farah Adira",
        status: "Tetap",
        jabatan: "MNG",
        divisi: "HEAD",
        golongan: "VI-A",
        noID: "TMH06A",
        gajiPokok: 17500000,
        uangLembur: 2500000,
        tunjanganJabatan: 5500000,
        tunjanganBPJS: 1375000,
        iuranBPJS: 1025000,
        pinjaman: 4250000,
    },
    {
        no: 4,
        nama: "Sharika Ananta",
        status: "Kontrak",
        jabatan: "W. MNG",
        divisi: "HEAD",
        golongan: "VI-B",
        noID: "KWMH06B",
        gajiPokok: 16000000,
        uangLembur: 2000000,
        tunjanganJabatan: 5000000,
        tunjanganBPJS: 1250000,
        iuranBPJS: 950000,
        pinjaman: 3000000,
    },
    {
        no: 5,
        nama: "Keisya Zlynn",
        status: "Tetap",
        jabatan: "MNG. MKT",
        divisi: "MKT",
        golongan: "V-A",
        noID: "TMMM05A",
        gajiPokok: 14500000,
        uangLembur: 2250000,
        tunjanganJabatan: 4750000,
        tunjanganBPJS: 1150000,
        iuranBPJS: 865000,
        pinjaman: 2000000,
    },
    {
        no: 6,
        nama: "Margaretha",
        status: "Tetap",
        jabatan: "HD. MKT",
        divisi: "MKT",
        golongan: "V-A",
        noID: "THMH05A",
        gajiPokok: 14500000,
        uangLembur: 2250000,
        tunjanganJabatan: 4750000,
        tunjanganBPJS: 1150000,
        iuranBPJS: 865000,
        pinjaman: 2500000,
    },
    {
        no: 7,
        nama: "Gracia Polin",
        status: "Kontrak",
        jabatan: "ST. MKT",
        divisi: "MKT",
        golongan: "V-B",
        noID: "KSMM05B1",
        gajiPokok: 10000000,
        uangLembur: 2000000,
        tunjanganJabatan: 3500000,
        tunjanganBPJS: 1100000,
        iuranBPJS: 835000,
        pinjaman: 1000000,
    },
    {
        no: 8,
        nama: "Kim Yuri",
        status: "Kontrak",
        jabatan: "ST. MKT",
        divisi: "MKT",
        golongan: "V-B",
        noID: "KSMM05B2",
        gajiPokok: 10000000,
        uangLembur: 2000000,
        tunjanganJabatan: 3500000,
        tunjanganBPJS: 1100000,
        iuranBPJS: 835000,
        pinjaman: 1250000,
    },
    {
        no: 9,
        nama: "Joko Suseno",
        status: "Tetap",
        jabatan: "HD. HR",
        divisi: "HR",
        golongan: "IV-A",
        noID: "THHH04A",
        gajiPokok: 9000000,
        uangLembur: 1800000,
        tunjanganJabatan: 3500000,
        tunjanganBPJS: 1025000,
        iuranBPJS: 775000,
        pinjaman: 500000,
    },
    {
        no: 10,
        nama: "Fachri Habibie",
        status: "Tetap",
        jabatan: "HR",
        divisi: "HR",
        golongan: "IV-B",
        noID: "THHH04B",
        gajiPokok: 8000000,
        uangLembur: 1600000,
        tunjanganJabatan: 3000000,
        tunjanganBPJS: 1000000,
        iuranBPJS: 750000,
        pinjaman: 1000000,
    },
    {
        no: 11,
        nama: "John Lennon",
        status: "Tetap",
        jabatan: "SR. DEV",
        divisi: "TCH",
        golongan: "III-A",
        noID: "TSDT03A1",
        gajiPokok: 13000000,
        uangLembur: 1500000,
        tunjanganJabatan: 5500000,
        tunjanganBPJS: 1000000,
        iuranBPJS: 700000,
        pinjaman: 2000000,
    },
    {
        no: 12,
        nama: "David Abraham",
        status: "Tetap",
        jabatan: "SR. DEV",
        divisi: "TCH",
        golongan: "III-A",
        noID: "TSDT03A2",
        gajiPokok: 13000000,
        uangLembur: 1500000,
        tunjanganJabatan: 5500000,
        tunjanganBPJS: 1000000,
        iuranBPJS: 700000,
        pinjaman: 2250000,
    },
    {
        no: 13,
        nama: "Fitriawati",
        status: "Kontrak",
        jabatan: "JR. DEV",
        divisi: "TCH",
        golongan: "III-B",
        noID: "KJDT03B1",
        gajiPokok: 8000000,
        uangLembur: 1250000,
        tunjanganJabatan: 4000000,
        tunjanganBPJS: 950000,
        iuranBPJS: 650000,
        pinjaman: 1000000,
    },
    {
        no: 14,
        nama: "Susi Susanti",
        status: "Kontrak",
        jabatan: "JR. DEV",
        divisi: "TCH",
        golongan: "III-B",
        noID: "KJDT03B2",
        gajiPokok: 8000000,
        uangLembur: 1250000,
        tunjanganJabatan: 4000000,
        tunjanganBPJS: 950000,
        iuranBPJS: 650000,
        pinjaman: 500000,
    },
    {
        no: 15,
        nama: "William Jaya",
        status: "Tetap",
        jabatan: "ST. ACC",
        divisi: "PRCHS",
        golongan: "II-A",
        noID: "TSAP02A1",
        gajiPokok: 7000000,
        uangLembur: 1000000,
        tunjanganJabatan: 2500000,
        tunjanganBPJS: 800000,
        iuranBPJS: 550000,
        pinjaman: 1200000,
    },
    {
        no: 16,
        nama: "Ghea Magda",
        status: "Tetap",
        jabatan: "ST. ADT",
        divisi: "PRCHS",
        golongan: "II-A",
        noID: "TSAP02A2",
        gajiPokok: 7000000,
        uangLembur: 1000000,
        tunjanganJabatan: 2500000,
        tunjanganBPJS: 800000,
        iuranBPJS: 550000,
        pinjaman: 750000,
    },
    {
        no: 17,
        nama: "Ahmad Farhan",
        status: "Kontrak",
        jabatan: "ST. OP",
        divisi: "PRCHS",
        golongan: "II-B",
        noID: "KSOP02B",
        gajiPokok: 6000000,
        uangLembur: 900000,
        tunjanganJabatan: 2000000,
        tunjanganBPJS: 750000,
        iuranBPJS: 525000,
        pinjaman: 1000000,
    },
    {
        no: 18,
        nama: "Suryanto",
        status: "Tetap",
        jabatan: "HD. OB",
        divisi: "GNRL",
        golongan: "I-A",
        noID: "THOG01A",
        gajiPokok: 5250000,
        uangLembur: 800000,
        tunjanganJabatan: 1000000,
        tunjanganBPJS: 650000,
        iuranBPJS: 475000,
        pinjaman: 250000,
    },
    {
        no: 19,
        nama: "Theodorus Axe",
        status: "Kontrak",
        jabatan: "OB",
        divisi: "GRNL",
        golongan: "I-B",
        noID: "KOG01B",
        gajiPokok: 5000000,
        uangLembur: 700000,
        tunjanganJabatan: 750000,
        tunjanganBPJS: 550000,
        iuranBPJS: 400000,
        pinjaman: 750000,
    },
    {
        no: 20,
        nama: "Bobby Giovani",
        status: "Kontrak",
        jabatan: "SCRTY",
        divisi: "GRNL",
        golongan: "I-B",
        noID: "KSG01B",
        gajiPokok: 5000000,
        uangLembur: 700000,
        tunjanganJabatan: 750000,
        tunjanganBPJS: 550000,
        iuranBPJS: 400000,
        pinjaman: 650000,
    }
];

// Fungsi untuk mengisi tabel dengan data karyawan
function populateTable() {
    let tableBody = document.querySelector("#gajiTable tbody");

    for (let i = 0; i < dataGajiKaryawan.length; i++) {
        const karyawan = dataGajiKaryawan[i];
        const totalGajiKotor = karyawan.gajiPokok + karyawan.uangLembur + karyawan.tunjanganJabatan + karyawan.tunjanganBPJS;
        const pajakPenghasilan = karyawan.gajiPokok * (15 / 100);
        const totalPotongan = karyawan.iuranBPJS + karyawan.pinjaman + pajakPenghasilan;
        const totalGajiBersih = totalGajiKotor - totalPotongan;

        var row = `
            <tr>
                <td>${karyawan.no}</td>
                <td>${karyawan.nama}</td>
                <td>${karyawan.status}</td>
                <td>${karyawan.jabatan}</td>
                <td>${karyawan.divisi}</td>
                <td>${karyawan.golongan}</td>
                <td>${karyawan.noID}</td>
                <td>${karyawan.gajiPokok.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
                <td>${karyawan.uangLembur.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
                <td>${karyawan.tunjanganJabatan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
                <td>${karyawan.tunjanganBPJS.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
                <td>${totalGajiKotor.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
                <td>${karyawan.iuranBPJS.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
                <td>${karyawan.pinjaman.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
                <td>${pajakPenghasilan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
                <td>${totalPotongan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
                <td>${totalGajiBersih.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    }
}

function subtotalTableDanTotal() {
    let tableFoot = document.querySelector("#gajiTable tfoot");
    let totalPenggajianKaryawan = document.getElementById("totalPenggajianKaryawan");
    
    const totalGajiPokok = dataGajiKaryawan.reduce((acc, karyawan) => acc + karyawan.gajiPokok, 0);
    const totalUangLembur = dataGajiKaryawan.reduce((acc, karyawan) => acc + karyawan.uangLembur, 0);
    const totalTunjanganJabatan = dataGajiKaryawan.reduce((acc, karyawan) => acc + karyawan.tunjanganJabatan, 0);
    const totalTunjanganBPJS = dataGajiKaryawan.reduce((acc, karyawan) => acc + karyawan.tunjanganBPJS, 0);
    const totalTotalGajiKotor = dataGajiKaryawan.reduce((acc, karyawan) => acc + (karyawan.gajiPokok + karyawan.uangLembur + karyawan.tunjanganJabatan + karyawan.tunjanganBPJS), 0);
    const totalPajakPenghasilan = dataGajiKaryawan.reduce((acc, karyawan) => acc + (karyawan.gajiPokok * 0.15), 0);
    const totalIuranBPJS = dataGajiKaryawan.reduce((acc, karyawan) => acc + karyawan.iuranBPJS, 0);
    const totalPinjaman = dataGajiKaryawan.reduce((acc, karyawan) => acc + karyawan.pinjaman, 0);
    const totalPotongan = dataGajiKaryawan.reduce((acc, karyawan) => acc + karyawan.iuranBPJS + (karyawan.gajiPokok * 0.15) + karyawan.pinjaman, 0);
    const totalGajiBersih = totalTotalGajiKotor - totalPotongan;
    
    tableFoot.innerHTML = `
        <tr>
            <td colspan="7">SUBTOTAL</td>
            <td>${totalGajiPokok.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
            <td>${totalUangLembur.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
            <td>${totalTunjanganJabatan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
            <td>${totalTunjanganBPJS.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
            <td>${totalTotalGajiKotor.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
            <td>${totalPajakPenghasilan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
            <td>${totalIuranBPJS.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
            <td>${totalPinjaman.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
            <td>${totalPotongan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
            <td>${totalGajiBersih.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
        </tr>
    `;

    totalPenggajianKaryawan.innerHTML = `
        <div><strong>Total Gaji Bersih: ${totalGajiBersih.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</strong></div>
    `;
}

const dataReferensi = [
    {
        golongan: "VII-A",
        gajiPokok: 20000000,
        uangLembur: 3500000,
        tunjanganJabatan: 7500000,
        tunjanganBPJS: 1925000,
        iuranBPJS: 1220000,
    },
    {
        golongan: "VII-B",
        gajiPokok: 18500000,
        uangLembur: 3000000,
        tunjanganJabatan: 6000000,
        tunjanganBPJS: 1600000,
        iuranBPJS: 1095000,
    },
    {
        golongan: "VI-A",
        gajiPokok: 17500000,
        uangLembur: 2500000,
        tunjanganJabatan: 5500000,
        tunjanganBPJS: 1375000,
        iuranBPJS: 1025000,
    },
    {
        golongan: "VI-B",
        gajiPokok: 16000000,
        uangLembur: 2000000,
        tunjanganJabatan: 5000000,
        tunjanganBPJS: 1250000,
        iuranBPJS: 950000,
    },
    {
        golongan: "V-A",
        gajiPokok: 14500000,
        uangLembur: 2250000,
        tunjanganJabatan: 4750000,
        tunjanganBPJS: 1150000,
        iuranBPJS: 865000,
    },
    {
        golongan: "V-B",
        gajiPokok: 10000000,
        uangLembur: 2000000,
        tunjanganJabatan: 3500000,
        tunjanganBPJS: 1100000,
        iuranBPJS: 835000,
    },
    {
        golongan: "IV-A",
        gajiPokok: 9000000,
        uangLembur: 1800000,
        tunjanganJabatan: 3500000,
        tunjanganBPJS: 1025000,
        iuranBPJS: 775000,
    },
    {
        golongan: "IV-B",
        gajiPokok: 8000000,
        uangLembur: 1600000,
        tunjanganJabatan: 3000000,
        tunjanganBPJS: 1000000,
        iuranBPJS: 750000,
    },
    {
        golongan: "III-A",
        gajiPokok: 13000000,
        uangLembur: 1500000,
        tunjanganJabatan: 5500000,
        tunjanganBPJS: 1000000,
        iuranBPJS: 700000,
    },
    {
        golongan: "III-B",
        gajiPokok: 8000000,
        uangLembur: 1250000,
        tunjanganJabatan: 4000000,
        tunjanganBPJS: 950000,
        iuranBPJS: 650000,
    },
    {
        golongan: "II-A",
        gajiPokok: 7000000,
        uangLembur: 1000000,
        tunjanganJabatan: 2500000,
        tunjanganBPJS: 800000,
        iuranBPJS: 550000,
    },
    {
        golongan: "II-B",
        gajiPokok: 6000000,
        uangLembur: 900000,
        tunjanganJabatan: 2000000,
        tunjanganBPJS: 750000,
        iuranBPJS: 525000,
    },
    {
        golongan: "I-A",
        gajiPokok: 5250000,
        uangLembur: 800000,
        tunjanganJabatan: 1000000,
        tunjanganBPJS: 650000,
        iuranBPJS: 475000,
    },
    {
        golongan: "I-B",
        gajiPokok: 5000000,
        uangLembur: 700000,
        tunjanganJabatan: 750000,
        tunjanganBPJS: 550000,
        iuranBPJS: 400000,
    },
];


function tableReference() {
    let tabelRef = document.querySelector("#reftable tbody");

    for (let i = 0; i < dataReferensi.length; i++) {
        const reference = dataReferensi[i];
        const pajakPendapatan = reference.gajiPokok * (15 / 100);
        
        var ref = `
        <tr>
            <td>${reference.golongan}</td>
            <td>${reference.gajiPokok.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
            <td>${reference.uangLembur.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
            <td>${reference.tunjanganJabatan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
            <td>${reference.tunjanganBPJS.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
            <td>${reference.iuranBPJS.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
            <td>${pajakPendapatan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</td>
        </tr>
    `;
    tabelRef.innerHTML += ref;        
}

}
// Panggil fungsi untuk mengisi tabel saat halaman dimuat
window.addEventListener("load", () => {
    populateTable();
    subtotalTableDanTotal();
    tableReference();
});

function printTabel() {
    window.print();
}