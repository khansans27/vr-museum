const URUTAN_GLOBAL = [];
DATA_LANTAI.forEach(lantai => {
    lantai.titik.forEach((_, idx) => {
        URUTAN_GLOBAL.push({ lantaiId: lantai.id, idx });
    });
});

const JARAK_HOTSPOT = 5.2;
const JARAK_PANEL_VR = 2.75;
const FOV_DEFAULT = 80;
const FOV_MIN = 40;
const FOV_MAX = 85;
const CACHE_GAMBAR_360 = {};
const CACHE_FOTO_DETAIL = {};
let modeKalibrasi = false;
let fovAktif = FOV_DEFAULT;
let hudDisembunyikan = false;
let lokasiRingkas = false;
let petunjukTerbuka = false;
let animasiDijeda = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let elemenFokusSebelumModal = null;
let elemenFokusSebelumRute = null;

function cariLantai(lantaiId) {
    return DATA_LANTAI.find(l => l.id === lantaiId) || DATA_LANTAI[0];
}

function indeksGlobal(lantaiId, idx) {
    return URUTAN_GLOBAL.findIndex(item => item.lantaiId === lantaiId && item.idx === idx);
}

function targetLangkahGlobal(lantaiId, idx, arah) {
    const pos = indeksGlobal(lantaiId, idx);
    if (pos === -1) return null;
    const tujuan = pos + arah;
    if (tujuan < 0 || tujuan >= URUTAN_GLOBAL.length) return null;
    return URUTAN_GLOBAL[tujuan];
}

// Sesuai orientasi SphereGeometry scale="-1 1 1" pada <a-sky rotation="0 0 0"> di A-Frame 1.6.0.
function arahDari(g, e, r) {
    const gr = THREE.MathUtils.degToRad(g);
    const er = THREE.MathUtils.degToRad(e);
    return new THREE.Vector3(
        r * Math.cos(gr) * Math.cos(er),
        r * Math.sin(er),
        r * Math.sin(gr) * Math.cos(er)
    );
}

function yawUntuk(g) {
    const gr = THREE.MathUtils.degToRad(g);
    return THREE.MathUtils.radToDeg(Math.atan2(-Math.cos(gr), -Math.sin(gr)));
}

// Font MSDF roboto bawaan A-Frame tidak memiliki glif untuk sebagian tanda baca Unicode.
function keTeksAsciiVR(teks) {
    return String(teks || '')
        .replace(/[\u2013\u2014]/g, '-')
        .replace(/\u2022/g, '-')
        .replace(/\u2026/g, '...')
        .replace(/\u00B0/g, ' deg')
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201C\u201D]/g, '"');
}

function buatTeksturPlaceholder360(lantai, titik, idx) {
    const canvas = document.createElement('canvas');
    const W = 2048;
    const H = 1024;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#0d0c0b');
    grad.addColorStop(0.3, lantai.warnaFallback);
    grad.addColorStop(0.55, lantai.warnaFallback);
    grad.addColorStop(0.8, '#141210');
    grad.addColorStop(1, '#090807');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    for (let deg = 0; deg <= 360; deg += 15) {
        const x = (deg / 360) * W;
        const utama = deg % 90 === 0;
        ctx.strokeStyle = utama ? 'rgba(226, 177, 68, 0.55)' : 'rgba(226, 177, 68, 0.16)';
        ctx.lineWidth = utama ? 3 : 1.5;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
    }

    for (let lat = -75; lat <= 75; lat += 15) {
        const y = (0.5 - lat / 180) * H;
        const horizon = lat === 0;
        ctx.strokeStyle = horizon ? 'rgba(226, 177, 68, 0.7)' : 'rgba(245, 240, 230, 0.12)';
        ctx.lineWidth = horizon ? 3 : 1.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
    }

    ctx.font = 'bold 20px monospace';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#e2b144';
    for (let deg = 30; deg < 360; deg += 30) {
        if (deg % 90 === 0) continue;
        ctx.fillText(`${deg}°`, (deg / 360) * W, H / 2 - 12);
    }

    const penandaArah = [
        { label: 'DEPAN 0°', g: 0 },
        { label: 'KANAN 90°', g: 90 },
        { label: 'BELAKANG 180°', g: 180 },
        { label: 'KIRI 270°', g: 270 }
    ];
    const filePath = `img/${titik.file}`;
    const teksUrutan = `${lantai.lencana} | Titik ${idx + 1} / ${lantai.titik.length}`;

    const gambarKartu = (cx, labelArah) => {
        const cy = H / 2;
        ctx.save();
        ctx.fillStyle = 'rgba(18, 17, 16, 0.86)';
        ctx.strokeStyle = '#e2b144';
        ctx.lineWidth = 2;
        ctx.fillRect(cx - 215, cy - 110, 430, 220);
        ctx.strokeRect(cx - 215, cy - 110, 430, 220);

        ctx.textAlign = 'center';
        ctx.fillStyle = '#e2b144';
        ctx.font = 'bold 34px Georgia, serif';
        ctx.fillText(labelArah, cx, cy - 56);

        ctx.fillStyle = '#93c5fd';
        ctx.font = 'bold 20px monospace';
        ctx.fillText(`FILE: ${filePath}`, cx, cy - 18);

        ctx.fillStyle = '#f5f0e6';
        ctx.font = 'bold 23px sans-serif';
        const namaPendek = titik.nama.length > 34 ? titik.nama.slice(0, 33) + '...' : titik.nama;
        ctx.fillText(namaPendek, cx, cy + 24);

        ctx.fillStyle = '#c9c0b1';
        ctx.font = '18px sans-serif';
        ctx.fillText(teksUrutan, cx, cy + 58);

        ctx.fillStyle = '#c9c0b1';
        ctx.font = '15px sans-serif';
        ctx.fillText('Salin foto equirectangular GS__*.JPG ke folder img/', cx, cy + 88);
        ctx.restore();
    };

    penandaArah.forEach(item => {
        if (item.g === 0) {
            gambarKartu(0, item.label);
            gambarKartu(W, item.label);
        } else {
            gambarKartu((item.g / 360) * W, item.label);
        }
    });

    return canvas.toDataURL('image/jpeg', 0.86);
}

function daftarAsetGambar(idAset, imgEl) {
    const wadah = document.getElementById('wadah-aset');
    const lama = document.getElementById(idAset);
    if (lama) lama.remove();
    imgEl.id = idAset;
    wadah.appendChild(imgEl);
    return `#${idAset}`;
}

function buatElemenPlaceholderImg(lantai, titik, idx) {
    const dataUrl = buatTeksturPlaceholder360(lantai, titik, idx);
    return new Promise(resolve => {
        const imgPh = new Image();
        imgPh.onload = () => resolve(imgPh);
        imgPh.onerror = () => resolve(imgPh);
        imgPh.src = dataUrl;
    });
}

function muatGambarTitik(lantaiId, idx) {
    const kunci = `${lantaiId}:${idx}`;
    if (CACHE_GAMBAR_360[kunci]) return Promise.resolve(CACHE_GAMBAR_360[kunci]);

    const lantai = cariLantai(lantaiId);
    const titik = lantai.titik[idx];
    const idAset = `sky-${lantaiId}-${idx}`;
    const filePath = `img/${titik.file}`;

    if (!/^GS__.*\.jpg$/i.test(titik.file)) {
        return buatElemenPlaceholderImg(lantai, titik, idx).then(imgPh => {
            const hasil = { src: daftarAsetGambar(idAset, imgPh), asli: false, filePath };
            CACHE_GAMBAR_360[kunci] = hasil;
            return hasil;
        });
    }

    return new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
            const hasil = { src: daftarAsetGambar(idAset, img), asli: true, filePath };
            CACHE_GAMBAR_360[kunci] = hasil;
            resolve(hasil);
        };
        img.onerror = async () => {
            const imgPh = await buatElemenPlaceholderImg(lantai, titik, idx);
            const hasil = { src: daftarAsetGambar(idAset, imgPh), asli: false, filePath };
            CACHE_GAMBAR_360[kunci] = hasil;
            resolve(hasil);
        };
        img.src = filePath;
    });
}

function cekFotoDetail(pathFoto) {
    if (!pathFoto) return Promise.resolve(null);
    if (Object.prototype.hasOwnProperty.call(CACHE_FOTO_DETAIL, pathFoto)) {
        return Promise.resolve(CACHE_FOTO_DETAIL[pathFoto]);
    }
    const idAset = 'detail-' + pathFoto.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    return new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
            const ref = daftarAsetGambar(idAset, img);
            CACHE_FOTO_DETAIL[pathFoto] = ref;
            resolve(ref);
        };
        img.onerror = () => {
            CACHE_FOTO_DETAIL[pathFoto] = null;
            resolve(null);
        };
        img.src = pathFoto;
    });
}

function hitungBarisTeks(teks, maxKarakter) {
    let total = 0;
    String(teks).split('\n').forEach(paragraf => {
        let baris = 1;
        let panjang = 0;
        paragraf.split(' ').forEach(kata => {
            if (panjang + kata.length > maxKarakter) {
                baris++;
                panjang = kata.length + 1;
            } else {
                panjang += kata.length + 1;
            }
        });
        total += baris;
    });
    return Math.max(1, total);
}

function ambilKomponenTur() {
    const scene = document.querySelector('#adegan-vr');
    return scene && scene.components ? scene.components['tur-museum'] : null;
}

function terapkanFovKamera(fovBaru) {
    fovAktif = Math.max(FOV_MIN, Math.min(FOV_MAX, Math.round(fovBaru)));
    const kamera = document.getElementById('kamera');
    if (kamera) {
        kamera.setAttribute('camera', 'fov', fovAktif);
    }
    const rasio = (FOV_DEFAULT / fovAktif).toFixed(1) + 'x';
    const btnReset = document.getElementById('btn-zoom-reset');
    const btnIn = document.getElementById('btn-zoom-in');
    const btnOut = document.getElementById('btn-zoom-out');
    if (btnReset) {
        btnReset.textContent = rasio;
        btnReset.setAttribute('aria-label', `Perbesaran saat ini ${rasio}, klik untuk atur ulang ke 1.0x`);
    }
    if (btnIn) btnIn.disabled = fovAktif <= FOV_MIN;
    if (btnOut) btnOut.disabled = fovAktif >= FOV_MAX;
}

function ubahZoom(deltaFov) {
    terapkanFovKamera(fovAktif + deltaFov);
}

function resetZoom() {
    terapkanFovKamera(FOV_DEFAULT);
}

function sembunyikanSemuaLayar() {
    document.getElementById('layar-pembuka').classList.add('sembunyi');
    document.getElementById('layar-zona').classList.add('sembunyi');
    document.getElementById('layar-selesai').classList.add('sembunyi');
}

function aturTampilHud(tampil) {
    const aktif = Boolean(tampil);
    document.body.classList.toggle('mode-360-aktif', aktif);
    if (!aktif) {
        hudDisembunyikan = false;
        document.body.classList.remove('hud-tersembunyi');
        document.getElementById('hud-pulihkan').classList.add('sembunyi');
    }
    ['hud-lokasi', 'hud-kanan', 'hud-navigasi'].forEach(id => {
        document.getElementById(id).classList.toggle('sembunyi', !aktif);
    });
    if (aktif && hudDisembunyikan) {
        document.getElementById('hud-pulihkan').classList.remove('sembunyi');
    }
    if (!aktif) {
        document.getElementById('hud-kalibrasi').classList.add('sembunyi');
    } else if (modeKalibrasi) {
        document.getElementById('hud-kalibrasi').classList.remove('sembunyi');
    }
}

function aturSembunyiHud(sembunyi) {
    if (!document.body.classList.contains('mode-360-aktif')) return;
    hudDisembunyikan = Boolean(sembunyi);
    document.body.classList.toggle('hud-tersembunyi', hudDisembunyikan);
    document.getElementById('hud-pulihkan').classList.toggle('sembunyi', !hudDisembunyikan);
    const targetFokus = hudDisembunyikan
        ? document.getElementById('btn-pulihkan-hud')
        : document.getElementById('btn-sembunyi-hud');
    if (targetFokus && typeof targetFokus.focus === 'function') {
        targetFokus.focus();
    }
}

function toggleRingkasLokasi() {
    lokasiRingkas = !lokasiRingkas;
    const panel = document.getElementById('hud-lokasi');
    const btn = document.getElementById('btn-lipat-lokasi');
    panel.classList.toggle('ringkas', lokasiRingkas);
    btn.setAttribute('aria-expanded', String(!lokasiRingkas));
    btn.textContent = lokasiRingkas ? 'Detail' : 'Ringkas';
    btn.setAttribute('aria-label', lokasiRingkas
        ? 'Tampilkan detail deskripsi dan daftar koleksi ruang ini'
        : 'Ringkas panel informasi lokasi');
}

function togglePetunjuk() {
    petunjukTerbuka = !petunjukTerbuka;
    document.getElementById('hud-petunjuk').classList.toggle('sembunyi', !petunjukTerbuka);
    document.getElementById('btn-petunjuk').setAttribute('aria-expanded', String(petunjukTerbuka));
}

function perbaruiTombolLayarPenuh() {
    const btn = document.getElementById('btn-layar-penuh');
    if (!btn) return;
    if (!document.fullscreenEnabled) {
        btn.classList.add('sembunyi');
        return;
    }
    const aktif = Boolean(document.fullscreenElement);
    btn.setAttribute('aria-pressed', String(aktif));
    btn.textContent = aktif ? 'Keluar Penuh' : 'Layar Penuh';
}

function toggleLayarPenuh() {
    if (!document.fullscreenEnabled) return;
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
    } else if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
    }
}

function aturIndikatorMuat(tampil, pesan) {
    const el = document.getElementById('indikator-muat');
    if (pesan) document.getElementById('teks-muat').textContent = pesan;
    el.classList.toggle('sembunyi', !tampil);
}

function bukaMenuZona() {
    tutupPanelInfo();
    tutupModalRute();
    sembunyikanSemuaLayar();
    aturTampilHud(false);
    document.getElementById('layar-zona').classList.remove('sembunyi');
}

function selesaikanTur() {
    tutupPanelInfo();
    tutupModalRute();
    sembunyikanSemuaLayar();
    aturTampilHud(false);
    document.getElementById('layar-selesai').classList.remove('sembunyi');
}

function kembaliKeAwal() {
    tutupPanelInfo();
    tutupModalRute();
    sembunyikanSemuaLayar();
    aturTampilHud(false);
    document.getElementById('layar-pembuka').classList.remove('sembunyi');
}

function mulaiDariLantai(lantaiId, idx = 0) {
    const lantai = cariLantai(lantaiId);
    if (!lantai || lantai.titik.length === 0) {
        bukaMenuZona();
        return;
    }
    const tur = ambilKomponenTur();
    if (!tur) {
        document.getElementById('layar-galat').classList.remove('sembunyi');
        return;
    }
    tutupPanelInfo();
    tutupModalRute();
    sembunyikanSemuaLayar();
    aturTampilHud(true);
    tur.kunjungiTitik(lantai.id, idx, tur.sudahTampil);
}

function navigasiLangkah(arah) {
    const tur = ambilKomponenTur();
    if (!tur || !tur.lantaiAktif) return;
    const target = targetLangkahGlobal(tur.lantaiAktif, tur.indeksAktif, arah);
    if (target) {
        tur.kunjungiTitik(target.lantaiId, target.idx, true);
    }
}

function perbaruiTombolAnimasi() {
    const btn = document.getElementById('btn-animasi');
    if (!btn) return;
    btn.setAttribute('aria-pressed', String(animasiDijeda));
    btn.textContent = animasiDijeda ? 'Aktifkan Animasi' : 'Jeda Animasi';
}

function toggleAnimasiHotspot() {
    animasiDijeda = !animasiDijeda;
    perbaruiTombolAnimasi();
    const tur = ambilKomponenTur();
    if (tur) tur.terapkanStatusAnimasi();
}

function formatDetikAudio(detik) {
    if (!Number.isFinite(detik) || detik < 0) return '0:00';
    const bulatkan = Math.floor(detik);
    const menit = Math.floor(bulatkan / 60);
    const sisa = bulatkan % 60;
    return `${menit}:${sisa < 10 ? '0' : ''}${sisa}`;
}

function perbaruiTampilanAudio() {
    const audio = document.getElementById('audio-koleksi');
    const btnPutar = document.getElementById('btn-audio-putar');
    const ikonPutar = document.getElementById('ikon-audio-putar');
    const teksPutar = document.getElementById('teks-audio-putar');
    const slider = document.getElementById('slider-audio');
    const teksWaktu = document.getElementById('teks-waktu-audio');
    const vrTeks = document.getElementById('vr-audio-teks');
    if (!audio || !btnPutar) return;

    const sedangMain = !audio.paused && !audio.ended;
    btnPutar.setAttribute('aria-pressed', String(sedangMain));
    ikonPutar.textContent = sedangMain ? '❚❚' : '▶';
    teksPutar.textContent = sedangMain ? 'Jeda Suara' : 'Putar Suara';
    if (vrTeks) {
        vrTeks.setAttribute('value', sedangMain ? 'Jeda Suara' : 'Putar Suara');
    }

    const durasi = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 0;
    const posisi = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
    if (durasi > 0) {
        slider.disabled = false;
        slider.value = String(Math.min(100, (posisi / durasi) * 100));
        teksWaktu.textContent = `${formatDetikAudio(posisi)} / ${formatDetikAudio(durasi)}`;
    } else {
        slider.value = '0';
        teksWaktu.textContent = posisi > 0 ? `${formatDetikAudio(posisi)}` : '0:00';
    }
}

function hentikanAudioKoleksi() {
    const audio = document.getElementById('audio-koleksi');
    if (!audio) return;
    audio.pause();
    try {
        audio.currentTime = 0;
    } catch (_) {}
    perbaruiTampilanAudio();
}

function siapkanAudioKoleksi(itemInfo) {
    const wadah = document.getElementById('modal-audio-wadah');
    const audio = document.getElementById('audio-koleksi');
    const label = document.getElementById('modal-audio-label');
    const status = document.getElementById('modal-audio-status');
    const galat = document.getElementById('modal-audio-galat');
    const btnPutar = document.getElementById('btn-audio-putar');
    const btnUlang = document.getElementById('btn-audio-ulang');
    const slider = document.getElementById('slider-audio');
    if (!wadah || !audio) return;

    hentikanAudioKoleksi();
    galat.classList.add('sembunyi');
    galat.textContent = '';

    if (!itemInfo || !itemInfo.audio) {
        wadah.classList.add('sembunyi');
        audio.removeAttribute('src');
        audio.load();
        return;
    }

    wadah.classList.remove('sembunyi');
    label.textContent = itemInfo.labelAudio
        ? `Sampel Suara: ${itemInfo.labelAudio}`
        : `Sampel Suara: ${itemInfo.judul}`;
    status.textContent = 'Siap diputar';
    btnPutar.disabled = false;
    btnUlang.disabled = false;
    slider.disabled = false;
    audio.src = itemInfo.audio;
    audio.load();
    perbaruiTampilanAudio();
}

function togglePutarAudio() {
    const audio = document.getElementById('audio-koleksi');
    const status = document.getElementById('modal-audio-status');
    const galat = document.getElementById('modal-audio-galat');
    if (!audio || !audio.getAttribute('src')) return;

    if (audio.paused || audio.ended) {
        status.textContent = 'Memuat suara...';
        galat.classList.add('sembunyi');
        audio.play().then(() => {
            status.textContent = 'Sedang memutar';
            perbaruiTampilanAudio();
        }).catch(() => {
            status.textContent = 'Gagal memutar';
            galat.textContent = 'Suara instrumen belum dapat diputar pada peramban ini.';
            galat.classList.remove('sembunyi');
            perbaruiTampilanAudio();
        });
    } else {
        audio.pause();
        status.textContent = 'Dijeda';
        perbaruiTampilanAudio();
    }
}

function ulangiAudioDariAwal() {
    const audio = document.getElementById('audio-koleksi');
    if (!audio || !audio.getAttribute('src')) return;
    try {
        audio.currentTime = 0;
    } catch (_) {}
    if (audio.paused) {
        togglePutarAudio();
    } else {
        perbaruiTampilanAudio();
    }
}

function geserWaktuAudio(persen) {
    const audio = document.getElementById('audio-koleksi');
    if (!audio || !Number.isFinite(audio.duration) || audio.duration <= 0) return;
    audio.currentTime = (Number(persen) / 100) * audio.duration;
    perbaruiTampilanAudio();
}

function inisialisasiEventAudio() {
    const audio = document.getElementById('audio-koleksi');
    if (!audio) return;
    const status = document.getElementById('modal-audio-status');
    const galat = document.getElementById('modal-audio-galat');
    const btnPutar = document.getElementById('btn-audio-putar');
    const btnUlang = document.getElementById('btn-audio-ulang');
    const slider = document.getElementById('slider-audio');

    audio.addEventListener('loadedmetadata', () => {
        if (audio.paused) status.textContent = 'Siap diputar';
        perbaruiTampilanAudio();
    });
    audio.addEventListener('timeupdate', perbaruiTampilanAudio);
    audio.addEventListener('play', () => {
        status.textContent = 'Sedang memutar';
        perbaruiTampilanAudio();
    });
    audio.addEventListener('pause', () => {
        if (!audio.ended && audio.currentTime > 0) status.textContent = 'Dijeda';
        perbaruiTampilanAudio();
    });
    audio.addEventListener('ended', () => {
        status.textContent = 'Selesai diputar';
        perbaruiTampilanAudio();
    });
    audio.addEventListener('error', () => {
        if (!audio.getAttribute('src')) return;
        status.textContent = 'Berkas tidak tersedia';
        btnPutar.disabled = true;
        btnUlang.disabled = true;
        slider.disabled = true;
        galat.textContent = `Berkas audio (${audio.getAttribute('src')}) belum ditemukan di folder audio/.`;
        galat.classList.remove('sembunyi');
        perbaruiTampilanAudio();
    });
}

function tutupPanelInfo() {
    hentikanAudioKoleksi();
    const overlay = document.getElementById('modal-info-overlay');
    const sedangBuka = !overlay.classList.contains('sembunyi');
    overlay.classList.add('sembunyi');
    const tur = ambilKomponenTur();
    if (tur) tur.tutupPanelVR();
    if (sedangBuka && elemenFokusSebelumModal && typeof elemenFokusSebelumModal.focus === 'function') {
        elemenFokusSebelumModal.focus();
        elemenFokusSebelumModal = null;
    }
}

function jikaKlikLatarModal(event) {
    if (event.target && event.target.id === 'modal-info-overlay') {
        tutupPanelInfo();
    }
}

function bukaModalRute() {
    tutupPanelInfo();
    elemenFokusSebelumRute = document.activeElement;
    bangunIsiDaftarRute();
    document.getElementById('modal-rute-overlay').classList.remove('sembunyi');
    document.getElementById('btn-tutup-rute').focus();
}

function tutupModalRute() {
    const overlay = document.getElementById('modal-rute-overlay');
    const sedangBuka = !overlay.classList.contains('sembunyi');
    overlay.classList.add('sembunyi');
    if (sedangBuka && elemenFokusSebelumRute && typeof elemenFokusSebelumRute.focus === 'function') {
        elemenFokusSebelumRute.focus();
        elemenFokusSebelumRute = null;
    }
}

function jikaKlikLatarRute(event) {
    if (event.target && event.target.id === 'modal-rute-overlay') {
        tutupModalRute();
    }
}

function bangunIsiDaftarRute() {
    const wadah = document.getElementById('isi-daftar-rute');
    wadah.innerHTML = '';
    const tur = ambilKomponenTur();

    DATA_LANTAI.forEach(lantai => {
        const blok = document.createElement('div');
        blok.className = 'kelompok-rute-lantai';

        const h3 = document.createElement('h3');
        h3.className = 'judul-kelompok-rute';
        h3.textContent = `${lantai.lencana}: ${lantai.subSingkat} (${lantai.titik.length} Titik)`;
        blok.appendChild(h3);

        const grid = document.createElement('div');
        grid.className = 'daftar-tombol-ruang';

        lantai.titik.forEach((titik, idx) => {
            const sedangAktif = Boolean(tur && tur.lantaiAktif === lantai.id && tur.indeksAktif === idx);
            const jmlKoleksi = Array.isArray(titik.info) ? titik.info.length : 0;

            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'item-ruangan' + (sedangAktif ? ' aktif' : '');
            if (sedangAktif) btn.setAttribute('aria-current', 'location');

            const kiri = document.createElement('div');
            kiri.className = 'item-ruangan-kiri';
            const nomor = document.createElement('span');
            nomor.className = 'nomor-ruangan';
            nomor.textContent = `${idx + 1}.`;
            const nama = document.createElement('span');
            nama.className = 'nama-ruangan';
            nama.textContent = titik.nama;
            kiri.appendChild(nomor);
            kiri.appendChild(nama);
            btn.appendChild(kiri);

            if (jmlKoleksi > 0) {
                const lencana = document.createElement('span');
                lencana.className = 'lencana-koleksi-ruang';
                lencana.textContent = `${jmlKoleksi} info`;
                btn.appendChild(lencana);
            }

            btn.onclick = () => {
                elemenFokusSebelumRute = null;
                tutupModalRute();
                if (tur && !(tur.lantaiAktif === lantai.id && tur.indeksAktif === idx)) {
                    tur.kunjungiTitik(lantai.id, idx, true);
                }
            };
            grid.appendChild(btn);
        });

        blok.appendChild(grid);
        wadah.appendChild(blok);
    });
}

function bangunMenuLantai() {
    const wadah = document.getElementById('daftar-zona');
    wadah.innerHTML = '';

    if (!DATA_LANTAI.length) {
        wadah.innerHTML = '<div class="status-kosong"><p>Belum ada daftar lantai yang dikonfigurasi.</p></div>';
        return;
    }

    DATA_LANTAI.forEach((lantai, i) => {
        const kartu = document.createElement('button');
        kartu.type = 'button';
        kartu.className = 'kartu-lantai' + (lantai.utama ? ' kartu-utama' : '');
        kartu.onclick = () => mulaiDariLantai(lantai.id, 0);

        const pratinjau = document.createElement('div');
        pratinjau.className = 'pratinjau-lantai';

        const img = document.createElement('img');
        img.width = 800;
        img.height = 450;
        img.alt = `Pratinjau ${lantai.lencana}: ${lantai.judul}`;
        img.src = lantai.thumbnail;

        const fallbackBox = document.createElement('div');
        fallbackBox.className = 'pratinjau-fallback sembunyi';
        fallbackBox.innerHTML = `<strong>${lantai.lencana}: ${lantai.subSingkat}</strong><span>Pratinjau belum ditemukan (${lantai.thumbnail})</span>`;

        let sudahCobaFallback = false;
        img.onerror = () => {
            if (!sudahCobaFallback && lantai.fallbackThumbnail) {
                sudahCobaFallback = true;
                img.src = lantai.fallbackThumbnail;
            } else {
                img.classList.add('sembunyi');
                fallbackBox.classList.remove('sembunyi');
            }
        };

        const totalKoleksi = lantai.titik.reduce((acc, t) => acc + (Array.isArray(t.info) ? t.info.length : 0), 0);
        const badge = document.createElement('span');
        badge.className = 'badge-jumlah';
        badge.textContent = `${lantai.titik.length} Titik | ${totalKoleksi} Koleksi`;

        pratinjau.appendChild(img);
        pratinjau.appendChild(fallbackBox);
        pratinjau.appendChild(badge);

        const urutanLabel = i === 0
            ? 'Langkah 1 sampai 12 (Mulai dari Pintu Utama)'
            : (i === 1 ? 'Langkah 13 sampai 22 (Lanjutan Lantai 2)' : 'Langkah 23 sampai 25 (Penutup Lantai 3)');

        const isi = document.createElement('div');
        isi.className = 'isi-kartu';
        isi.innerHTML = `
            <div class="baris-label-lantai">
                <span class="lencana-lantai">${lantai.lencana}</span>
                <span class="status-urutan">${urutanLabel}</span>
            </div>
            <h3>${lantai.judul}</h3>
            <p>${lantai.deskripsi}</p>
            <span class="aksi-kartu">Buka ${lantai.lencana}</span>
        `;

        kartu.appendChild(pratinjau);
        kartu.appendChild(isi);
        wadah.appendChild(kartu);
    });
}

function bangunShortcutLantai() {
    const nav = document.getElementById('hud-navigasi');
    nav.innerHTML = '';
    DATA_LANTAI.forEach(lantai => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.dataset.lantai = lantai.id;
        btn.innerHTML = `<span>${lantai.singkat}</span><span class="label-sub">${lantai.subSingkat}</span>`;
        btn.onclick = () => {
            const tur = ambilKomponenTur();
            if (!tur) return;
            if (tur.lantaiAktif === lantai.id && tur.indeksAktif === 0) return;
            tur.kunjungiTitik(lantai.id, 0, true);
        };
        nav.appendChild(btn);
    });
}

function inisialisasiAFrame() {
    bangunMenuLantai();
    bangunShortcutLantai();
    perbaruiTombolAnimasi();
    perbaruiTombolLayarPenuh();
    inisialisasiEventAudio();
    terapkanFovKamera(FOV_DEFAULT);

    if (typeof window.AFRAME === 'undefined') {
        document.getElementById('layar-galat').classList.remove('sembunyi');
        return;
    }

    AFRAME.registerComponent('tur-museum', {
        init() {
            this.langit = document.querySelector('#langit');
            this.wadah = document.querySelector('#wadah-hotspot');
            this.panelVR = document.querySelector('#panel-info-vr');
            this.kamera = document.querySelector('#kamera');
            this.rig = document.querySelector('#rig');

            this.sedangPindah = false;
            this.sudahTampil = false;
            this.lantaiAktif = null;
            this.indeksAktif = 0;

            document.querySelector('#vr-panel-tutup').addEventListener('click', () => this.tutupPanelVR());
            document.querySelector('#vr-audio-latar').addEventListener('click', () => togglePutarAudio());
            this.el.addEventListener('enter-vr', () => this.aturModeVR(true));
            this.el.addEventListener('exit-vr', () => this.aturModeVR(false));
        },

        tick() {
            if (!modeKalibrasi || !this.sudahTampil) return;
            const camObj = this.kamera && (this.kamera.getObject3D('camera') || this.kamera.object3D);
            if (!camObj) return;
            const q = new THREE.Quaternion();
            camObj.getWorldQuaternion(q);
            const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(q);
            const g = ((THREE.MathUtils.radToDeg(Math.atan2(dir.z, dir.x)) % 360) + 360) % 360;
            const e = THREE.MathUtils.radToDeg(Math.asin(THREE.MathUtils.clamp(dir.y, -1, 1)));
            document.getElementById('hud-kalibrasi').textContent =
                `Kalibrasi | Azimuth g: ${Math.round(g)}° | Elevasi e: ${Math.round(e)}° (Tekan K untuk tutup)`;
        },

        aturModeVR(aktifVR) {
            const kursor = document.querySelector('#kursor-tatap');
            kursor.setAttribute('visible', aktifVR);
            kursor.setAttribute('raycaster', 'enabled', aktifVR);
            if (aktifVR) {
                document.getElementById('modal-info-overlay').classList.add('sembunyi');
                document.getElementById('modal-rute-overlay').classList.add('sembunyi');
            }
            document.querySelectorAll('.hud').forEach(el => {
                el.style.display = aktifVR ? 'none' : '';
            });
            this.segarkanRaycaster();
        },

        segarkanRaycaster() {
            [
                this.el,
                document.querySelector('#kursor-tatap'),
                document.querySelector('#laser-kanan'),
                document.querySelector('#laser-kiri')
            ].forEach(el => {
                if (el && el.components && el.components.raycaster) {
                    el.components.raycaster.refreshObjects();
                }
            });
        },

        terapkanStatusAnimasi() {
            this.wadah.querySelectorAll('.ring-denyut').forEach(ring => {
                if (animasiDijeda) {
                    ring.pause();
                } else {
                    ring.play();
                }
            });
        },

        arahkanKameraKe(g, e) {
            if (this.el.is('vr-mode')) return;
            const lc = this.kamera.components && this.kamera.components['look-controls'];
            if (lc && lc.yawObject && lc.pitchObject) {
                lc.yawObject.rotation.y = 0;
                lc.pitchObject.rotation.x = THREE.MathUtils.degToRad(THREE.MathUtils.clamp(e, -45, 45));
            }
            this.rig.object3D.rotation.y = THREE.MathUtils.degToRad(yawUntuk(g));
        },

        pudarLangit(warnaTujuan, durasi = 240) {
            if (animasiDijeda) {
                this.langit.setAttribute('material', 'color', warnaTujuan);
                return Promise.resolve();
            }
            return new Promise(resolve => {
                const langit = this.langit;
                let selesai = false;
                const akhiri = () => {
                    if (selesai) return;
                    selesai = true;
                    langit.removeEventListener('animationcomplete__pudar', akhiri);
                    clearTimeout(timerAman);
                    resolve();
                };
                const timerAman = setTimeout(akhiri, durasi + 150);
                langit.removeAttribute('animation__pudar');
                langit.addEventListener('animationcomplete__pudar', akhiri);
                langit.setAttribute('animation__pudar', {
                    property: 'material.color',
                    to: warnaTujuan,
                    dur: durasi,
                    easing: 'easeInOutQuad'
                });
            });
        },

        terapkanTeksturLangit(src) {
            return new Promise(resolve => {
                const langit = this.langit;
                let selesai = false;
                const akhiri = () => {
                    if (selesai) return;
                    selesai = true;
                    langit.removeEventListener('materialtextureloaded', akhiri);
                    clearTimeout(timerAman);
                    resolve();
                };
                const timerAman = setTimeout(akhiri, 360);
                langit.addEventListener('materialtextureloaded', akhiri);
                langit.setAttribute('material', 'src', src);
            });
        },

        async kunjungiTitik(lantaiId, idx, pakaiTransisi = true) {
            if (!this.el.hasLoaded) {
                await new Promise(resolve => this.el.addEventListener('loaded', resolve, { once: true }));
            }
            if (this.sedangPindah) return;
            const lantai = cariLantai(lantaiId);
            if (!lantai || !lantai.titik[idx]) return;
            if (this.sudahTampil && this.lantaiAktif === lantaiId && this.indeksAktif === idx) return;

            this.sedangPindah = true;
            tutupPanelInfo();

            const titik = lantai.titik[idx];
            const kunci = `${lantaiId}:${idx}`;
            if (!CACHE_GAMBAR_360[kunci] && !this.el.is('vr-mode')) {
                aturIndikatorMuat(true, `Memuat ${lantai.singkat}: ${titik.nama} (${titik.file})...`);
            }

            try {
                this.wadah.setAttribute('visible', false);
                const tugasMuat = muatGambarTitik(lantaiId, idx);
                const tugasPudar = pakaiTransisi ? this.pudarLangit('#000000', 240) : Promise.resolve();
                const [hasilGambar] = await Promise.all([tugasMuat, tugasPudar]);

                this.lantaiAktif = lantaiId;
                this.indeksAktif = idx;
                this.sudahTampil = true;

                await this.terapkanTeksturLangit(hasilGambar.src);

                const arahHadap = typeof titik.hadap === 'number' ? titik.hadap : 180;
                this.arahkanKameraKe(arahHadap, 0);

                this.bangunHotspotTitik(lantai, idx);
                this.perbaruiHud(lantai, idx, hasilGambar);
                aturIndikatorMuat(false);

                if (pakaiTransisi) {
                    await this.pudarLangit('#ffffff', 250);
                } else {
                    this.langit.setAttribute('material', 'color', '#ffffff');
                }

                this.wadah.setAttribute('visible', true);
                this.terapkanStatusAnimasi();
                this.segarkanRaycaster();
            } finally {
                aturIndikatorMuat(false);
                this.sedangPindah = false;
            }
        },

        bangunHotspotTitik(lantai, idx) {
            while (this.wadah.firstChild) {
                this.wadah.removeChild(this.wadah.firstChild);
            }

            const titik = lantai.titik[idx];

            const targetMaju = targetLangkahGlobal(lantai.id, idx, 1);
            if (targetMaju && typeof titik.gMaju === 'number') {
                const lantaiTujuan = cariLantai(targetMaju.lantaiId);
                const titikTujuan = lantaiTujuan.titik[targetMaju.idx];
                const pindahLantai = lantaiTujuan.id !== lantai.id;
                const labelMaju = pindahLantai
                    ? `Naik ke ${lantaiTujuan.lencana}: ${titikTujuan.nama}`
                    : `Maju (${targetMaju.idx + 1}/${lantai.titik.length}): ${titikTujuan.nama}`;

                this.wadah.appendChild(this.buatHotspotPanah({
                    g: titik.gMaju,
                    e: titik.eMaju ?? -6,
                    label: labelMaju,
                    warna: '#e2b144',
                    aksi: () => this.kunjungiTitik(targetMaju.lantaiId, targetMaju.idx, true)
                }));
            }

            const targetMundur = targetLangkahGlobal(lantai.id, idx, -1);
            if (targetMundur && typeof titik.gMundur === 'number') {
                const lantaiTujuan = cariLantai(targetMundur.lantaiId);
                const titikTujuan = lantaiTujuan.titik[targetMundur.idx];
                const pindahLantai = lantaiTujuan.id !== lantai.id;
                const labelMundur = pindahLantai
                    ? `Kembali ke ${lantaiTujuan.lencana}: ${titikTujuan.nama}`
                    : `Mundur (${targetMundur.idx + 1}/${lantai.titik.length}): ${titikTujuan.nama}`;

                this.wadah.appendChild(this.buatHotspotPanah({
                    g: titik.gMundur,
                    e: titik.eMundur ?? -6,
                    label: labelMundur,
                    warna: '#d4a030',
                    aksi: () => this.kunjungiTitik(targetMundur.lantaiId, targetMundur.idx, true)
                }));
            }

            if (Array.isArray(titik.info)) {
                titik.info.forEach(itemInfo => {
                    this.wadah.appendChild(this.buatHotspotInfo(itemInfo, lantai, titik));
                });
            }
        },

        buatDasarHotspot(g, e) {
            const el = document.createElement('a-entity');
            el.object3D.position.copy(arahDari(g, e, JARAK_HOTSPOT));
            el.object3D.lookAt(0, 0, 0);
            el.addEventListener('mouseenter', () => el.object3D.scale.setScalar(1.15));
            el.addEventListener('mouseleave', () => el.object3D.scale.setScalar(1.0));
            return el;
        },

        buatHotspotPanah(opsi) {
            const el = this.buatDasarHotspot(opsi.g, opsi.e);
            const labelRingkas = opsi.label.length > 36 ? opsi.label.slice(0, 33) + '...' : opsi.label;
            const lebarLabel = Math.max(1.5, 0.42 + labelRingkas.length * 0.082);

            const lingkaran = document.createElement('a-circle');
            lingkaran.classList.add('clickable');
            lingkaran.setAttribute('radius', '0.44');
            lingkaran.setAttribute('position', '0 0 0');
            lingkaran.setAttribute('material', 'color: #181613; shader: flat');
            lingkaran.addEventListener('click', opsi.aksi);

            const ringTepi = document.createElement('a-ring');
            ringTepi.setAttribute('radius-inner', '0.38');
            ringTepi.setAttribute('radius-outer', '0.44');
            ringTepi.setAttribute('position', '0 0 0.015');
            ringTepi.setAttribute('material', `color: ${opsi.warna}; shader: flat`);

            const ringDenyut = document.createElement('a-ring');
            ringDenyut.classList.add('ring-denyut');
            ringDenyut.setAttribute('radius-inner', '0.44');
            ringDenyut.setAttribute('radius-outer', '0.51');
            ringDenyut.setAttribute('position', '0 0 -0.01');
            ringDenyut.setAttribute('material', `color: ${opsi.warna}; opacity: 0.72; shader: flat; transparent: true; depthWrite: false`);
            ringDenyut.setAttribute('animation', 'property: scale; from: 1 1 1; to: 1.4 1.4 1.4; loop: true; dur: 1250; easing: easeOutQuad');
            ringDenyut.setAttribute('animation__op', 'property: material.opacity; from: 0.72; to: 0; loop: true; dur: 1250; easing: easeOutQuad');

            const kepalaPanah = document.createElement('a-triangle');
            kepalaPanah.setAttribute('vertex-a', '0 0.24 0.03');
            kepalaPanah.setAttribute('vertex-b', '-0.21 -0.04 0.03');
            kepalaPanah.setAttribute('vertex-c', '0.21 -0.04 0.03');
            kepalaPanah.setAttribute('material', `color: ${opsi.warna}; shader: flat`);

            const batangPanah = document.createElement('a-plane');
            batangPanah.setAttribute('width', '0.11');
            batangPanah.setAttribute('height', '0.16');
            batangPanah.setAttribute('position', '0 -0.13 0.03');
            batangPanah.setAttribute('material', `color: ${opsi.warna}; shader: flat`);

            const latarLabel = document.createElement('a-plane');
            latarLabel.setAttribute('width', lebarLabel.toFixed(2));
            latarLabel.setAttribute('height', '0.34');
            latarLabel.setAttribute('position', '0 -0.74 0');
            latarLabel.setAttribute('material', 'color: #121110; shader: flat');

            const teksLabel = document.createElement('a-text');
            teksLabel.setAttribute('value', keTeksAsciiVR(labelRingkas));
            teksLabel.setAttribute('align', 'center');
            teksLabel.setAttribute('color', opsi.warna);
            teksLabel.setAttribute('width', '3.35');
            teksLabel.setAttribute('position', '0 -0.74 0.04');
            teksLabel.setAttribute('alpha-test', '0.5');

            el.appendChild(lingkaran);
            el.appendChild(ringTepi);
            el.appendChild(ringDenyut);
            el.appendChild(kepalaPanah);
            el.appendChild(batangPanah);
            el.appendChild(latarLabel);
            el.appendChild(teksLabel);
            return el;
        },

        buatHotspotInfo(h, lantai, titik) {
            const el = this.buatDasarHotspot(h.g, h.e);
            const judulPendek = h.judul.length > 34 ? h.judul.slice(0, 31) + '...' : h.judul;
            const lebarLabel = Math.max(1.4, 0.38 + judulPendek.length * 0.078);

            const lingkaran = document.createElement('a-circle');
            lingkaran.classList.add('clickable');
            lingkaran.setAttribute('radius', '0.31');
            lingkaran.setAttribute('position', '0 0 0');
            lingkaran.setAttribute('material', 'color: #1d4ed8; shader: flat');
            lingkaran.addEventListener('click', () => this.bukaPanelInfo(h, lantai, titik));

            const ringDenyut = document.createElement('a-ring');
            ringDenyut.classList.add('ring-denyut');
            ringDenyut.setAttribute('radius-inner', '0.31');
            ringDenyut.setAttribute('radius-outer', '0.38');
            ringDenyut.setAttribute('position', '0 0 -0.01');
            ringDenyut.setAttribute('material', 'color: #60a5fa; opacity: 0.88; shader: flat; transparent: true; depthWrite: false');
            ringDenyut.setAttribute('animation', 'property: scale; from: 1 1 1; to: 1.32 1.32 1.32; dir: alternate; loop: true; dur: 950; easing: easeInOutSine');

            const hurufI = document.createElement('a-text');
            hurufI.setAttribute('value', 'i');
            hurufI.setAttribute('align', 'center');
            hurufI.setAttribute('color', '#ffffff');
            hurufI.setAttribute('width', '6.2');
            hurufI.setAttribute('position', '0 0.03 0.04');
            hurufI.setAttribute('alpha-test', '0.5');

            const latarLabel = document.createElement('a-plane');
            latarLabel.setAttribute('width', lebarLabel.toFixed(2));
            latarLabel.setAttribute('height', '0.32');
            latarLabel.setAttribute('position', '0 -0.62 0');
            latarLabel.setAttribute('material', 'color: #102042; shader: flat');

            const teksLabel = document.createElement('a-text');
            teksLabel.setAttribute('value', keTeksAsciiVR(judulPendek));
            teksLabel.setAttribute('align', 'center');
            teksLabel.setAttribute('color', '#ffffff');
            teksLabel.setAttribute('width', '3.25');
            teksLabel.setAttribute('position', '0 -0.62 0.04');
            teksLabel.setAttribute('alpha-test', '0.5');

            el.appendChild(lingkaran);
            el.appendChild(ringDenyut);
            el.appendChild(hurufI);
            el.appendChild(latarLabel);
            el.appendChild(teksLabel);
            return el;
        },

        async bukaPanelInfo(h, lantai, titik) {
            if (this.el.is('vr-mode')) {
                await this.bukaPanelVR(h);
                return;
            }

            tutupModalRute();
            elemenFokusSebelumModal = document.activeElement;
            document.getElementById('modal-info-judul').textContent = h.judul;
            document.getElementById('modal-info-lokasi').textContent = `${lantai.lencana}: ${titik.nama}`;
            document.getElementById('modal-info-deskripsi').textContent = h.isi;

            const wadahFoto = document.getElementById('modal-foto-wadah');
            const imgFoto = document.getElementById('modal-info-foto');
            const fallbackFoto = document.getElementById('modal-foto-fallback');
            const captionFoto = document.getElementById('modal-foto-caption');

            if (h.foto) {
                wadahFoto.classList.remove('sembunyi');
                imgFoto.classList.remove('sembunyi');
                fallbackFoto.classList.add('sembunyi');
                imgFoto.alt = `Foto detail ${h.judul}`;
                captionFoto.textContent = `Foto detail koleksi: ${h.judul}`;

                imgFoto.onload = () => {
                    imgFoto.classList.remove('sembunyi');
                    fallbackFoto.classList.add('sembunyi');
                };
                imgFoto.onerror = () => {
                    imgFoto.classList.add('sembunyi');
                    fallbackFoto.classList.remove('sembunyi');
                    fallbackFoto.textContent = `Foto detail belum ditemukan (${h.foto}). Salin file foto ke folder img/.`;
                };
                imgFoto.src = h.foto;
            } else {
                wadahFoto.classList.add('sembunyi');
                imgFoto.removeAttribute('src');
            }

            siapkanAudioKoleksi(h);

            document.getElementById('modal-info-overlay').classList.remove('sembunyi');
            document.getElementById('btn-tutup-modal').focus();
        },

        async bukaPanelVR(h) {
            const p = this.panelVR;
            const judul = p.querySelector('#vr-panel-judul');
            const isi = p.querySelector('#vr-panel-isi');
            const fotoEl = p.querySelector('#vr-panel-foto');
            const latar = p.querySelector('#vr-panel-latar');
            const garis = p.querySelector('#vr-panel-garis');
            const tutup = p.querySelector('#vr-panel-tutup');
            const vrAudio = p.querySelector('#vr-panel-audio');
            const vrAudioLatar = p.querySelector('#vr-audio-latar');

            siapkanAudioKoleksi(h);

            const teksJudulVR = keTeksAsciiVR(h.judul.toUpperCase());
            const teksIsiVR = keTeksAsciiVR(h.isi);
            judul.setAttribute('value', teksJudulVR);
            isi.setAttribute('value', teksIsiVR);

            const refFoto = h.foto ? await cekFotoDetail(h.foto) : null;
            const adaFoto = Boolean(refFoto);
            const adaAudio = Boolean(h.audio);
            const jumlahBaris = hitungBarisTeks(teksIsiVR, 40);
            const tinggiTeks = 0.56 + jumlahBaris * 0.125;
            const tinggiFoto = adaFoto ? 1.28 : 0;
            const tinggiAudio = adaAudio ? 0.34 : 0;
            const tinggiTotal = tinggiTeks + tinggiFoto + tinggiAudio + (adaFoto ? 0.14 : 0.08);
            const atas = tinggiTotal / 2;

            latar.setAttribute('height', tinggiTotal.toFixed(2));
            garis.object3D.position.set(0, atas - 0.022, 0.002);
            tutup.object3D.position.set(1.24, atas - 0.17, 0.025);
            judul.object3D.position.set(-1.24, atas - 0.14, 0.015);

            let yKursor = atas - 0.44;
            if (adaFoto) {
                fotoEl.setAttribute('src', refFoto);
                fotoEl.setAttribute('visible', true);
                fotoEl.object3D.position.set(0, yKursor - 0.62, 0.015);
                yKursor -= 1.32;
            } else {
                fotoEl.setAttribute('visible', false);
            }

            if (adaAudio) {
                vrAudio.setAttribute('visible', true);
                vrAudio.object3D.position.set(-0.65, yKursor - 0.12, 0.018);
                vrAudioLatar.classList.add('clickable');
                yKursor -= 0.34;
            } else {
                vrAudio.setAttribute('visible', false);
                vrAudioLatar.classList.remove('clickable');
            }

            isi.object3D.position.set(-1.24, yKursor, 0.015);

            const elevasi = THREE.MathUtils.clamp(h.e, -10, 18);
            const pos = arahDari(h.g, elevasi, JARAK_PANEL_VR).add(new THREE.Vector3(0, 1.6, 0));
            p.object3D.position.copy(pos);
            p.object3D.lookAt(0, 1.6, 0);
            p.setAttribute('visible', true);
            tutup.classList.add('clickable');
            this.segarkanRaycaster();
        },

        tutupPanelVR() {
            hentikanAudioKoleksi();
            this.panelVR.setAttribute('visible', false);
            this.panelVR.querySelector('#vr-panel-tutup').classList.remove('clickable');
            this.panelVR.querySelector('#vr-audio-latar').classList.remove('clickable');
            this.segarkanRaycaster();
        },

        perbaruiHud(lantai, idx, hasilGambar) {
            const titik = lantai.titik[idx];
            const totalLantai = lantai.titik.length;
            const nomorGlobal = indeksGlobal(lantai.id, idx) + 1;

            document.getElementById('hud-lantai').textContent = `${lantai.lencana}: ${lantai.subSingkat}`;
            document.getElementById('hud-nama').textContent = titik.nama;
            document.getElementById('hud-deskripsi').textContent = titik.desk;
            document.getElementById('hud-urutan').innerHTML =
                `Titik <strong>${idx + 1}</strong> / <strong>${totalLantai}</strong>`;
            document.getElementById('hud-langkah-total').textContent =
                `Langkah ${nomorGlobal} / ${URUTAN_GLOBAL.length}`;

            const wadahKoleksi = document.getElementById('hud-koleksi-wadah');
            const daftarKoleksi = document.getElementById('hud-koleksi-daftar');
            const labelKoleksi = document.getElementById('hud-koleksi-label');
            daftarKoleksi.innerHTML = '';

            if (Array.isArray(titik.info) && titik.info.length > 0) {
                wadahKoleksi.classList.remove('sembunyi');
                labelKoleksi.textContent = `Koleksi di ruang ini (${titik.info.length}):`;
                titik.info.forEach(itemInfo => {
                    const btnChip = document.createElement('button');
                    btnChip.type = 'button';
                    btnChip.className = 'chip-koleksi';

                    const lencanaI = document.createElement('span');
                    lencanaI.className = 'lencana-i-kecil';
                    lencanaI.setAttribute('aria-hidden', 'true');
                    lencanaI.textContent = 'i';

                    const teksChip = document.createElement('span');
                    const pendek = itemInfo.judul.length > 28 ? itemInfo.judul.slice(0, 26) + '...' : itemInfo.judul;
                    teksChip.textContent = pendek;

                    btnChip.appendChild(lencanaI);
                    btnChip.appendChild(teksChip);
                    if (itemInfo.audio) {
                        const svgNs = 'http://www.w3.org/2000/svg';
                        const ikonSuara = document.createElementNS(svgNs, 'svg');
                        ikonSuara.setAttribute('viewBox', '0 0 24 24');
                        ikonSuara.setAttribute('class', 'ikon-chip-suara');
                        ikonSuara.setAttribute('aria-hidden', 'true');
                        ikonSuara.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>';
                        btnChip.appendChild(ikonSuara);
                        btnChip.setAttribute('aria-label', `${itemInfo.judul} (dilengkapi sampel suara instrumen)`);
                    }
                    btnChip.onclick = () => {
                        this.arahkanKameraKe(itemInfo.g, itemInfo.e);
                        this.bukaPanelInfo(itemInfo, lantai, titik);
                    };
                    daftarKoleksi.appendChild(btnChip);
                });
            } else {
                wadahKoleksi.classList.add('sembunyi');
            }

            const badgePlaceholder = document.getElementById('hud-mode-placeholder');
            if (hasilGambar && !hasilGambar.asli) {
                badgePlaceholder.textContent = `Placeholder: ${titik.file}`;
                badgePlaceholder.classList.remove('sembunyi');
            } else {
                badgePlaceholder.classList.add('sembunyi');
            }

            const targetMundur = targetLangkahGlobal(lantai.id, idx, -1);
            const targetMaju = targetLangkahGlobal(lantai.id, idx, 1);
            const btnMundur = document.getElementById('btn-mundur');
            const btnMaju = document.getElementById('btn-maju');

            btnMundur.disabled = targetMundur === null;
            btnMaju.disabled = targetMaju === null;

            if (targetMundur) {
                const lMundur = cariLantai(targetMundur.lantaiId);
                btnMundur.innerHTML = lMundur.id !== lantai.id
                    ? `<span aria-hidden="true">◀</span> <span>${lMundur.singkat}</span>`
                    : `<span aria-hidden="true">◀</span> <span>Mundur</span>`;
                btnMundur.title = `Mundur ke ${lMundur.lencana}: ${lMundur.titik[targetMundur.idx].nama}`;
            } else {
                btnMundur.innerHTML = `<span aria-hidden="true">◀</span> <span>Mundur</span>`;
                btnMundur.title = 'Titik awal tur (Pintu Masuk Lantai 1)';
            }

            if (targetMaju) {
                const lMaju = cariLantai(targetMaju.lantaiId);
                btnMaju.innerHTML = lMaju.id !== lantai.id
                    ? `<span>Naik ${lMaju.singkat}</span> <span aria-hidden="true">▶</span>`
                    : `<span>Maju</span> <span aria-hidden="true">▶</span>`;
                btnMaju.title = `Maju ke ${lMaju.lencana}: ${lMaju.titik[targetMaju.idx].nama}`;
            } else {
                btnMaju.innerHTML = `<span>Akhir Tur</span>`;
                btnMaju.title = 'Titik akhir seluruh rute tur';
            }

            document.querySelectorAll('#hud-navigasi button').forEach(btn => {
                const aktif = btn.dataset.lantai === lantai.id;
                btn.classList.toggle('aktif', aktif);
                btn.setAttribute('aria-current', aktif ? 'page' : 'false');
            });
        }
    });

    document.querySelector('#adegan-vr').setAttribute('tur-museum', '');
}

document.addEventListener('DOMContentLoaded', inisialisasiAFrame);
document.addEventListener('fullscreenchange', perbaruiTombolLayarPenuh);

window.addEventListener('wheel', ev => {
    const sedangDi360 = document.body.classList.contains('mode-360-aktif');
    const modalInfoBuka = !document.getElementById('modal-info-overlay').classList.contains('sembunyi');
    const modalRuteBuka = !document.getElementById('modal-rute-overlay').classList.contains('sembunyi');
    if (!sedangDi360 || modalInfoBuka || modalRuteBuka) return;
    if (ev.target && ev.target.closest && ev.target.closest('.hud')) return;
    ubahZoom(ev.deltaY > 0 ? 5 : -5);
}, { passive: true });

document.addEventListener('keydown', ev => {
    const modalInfoBuka = !document.getElementById('modal-info-overlay').classList.contains('sembunyi');
    if (ev.key === 'Escape' && modalInfoBuka) {
        tutupPanelInfo();
        return;
    }
    const modalRuteBuka = !document.getElementById('modal-rute-overlay').classList.contains('sembunyi');
    if (ev.key === 'Escape' && modalRuteBuka) {
        tutupModalRute();
        return;
    }

    const sedangDi360 = document.body.classList.contains('mode-360-aktif');
    if (!sedangDi360 || modalInfoBuka || modalRuteBuka) return;

    if (ev.key === 'ArrowRight') {
        navigasiLangkah(1);
    } else if (ev.key === 'ArrowLeft') {
        navigasiLangkah(-1);
    } else if (ev.key === '+' || ev.key === '=') {
        ubahZoom(-8);
    } else if (ev.key === '-' || ev.key === '_') {
        ubahZoom(8);
    } else if (ev.key === '0') {
        resetZoom();
    } else if (ev.key === 'h' || ev.key === 'H') {
        aturSembunyiHud(!hudDisembunyikan);
    } else if (ev.key === 'f' || ev.key === 'F') {
        toggleLayarPenuh();
    } else if (ev.key === 'k' || ev.key === 'K') {
        modeKalibrasi = !modeKalibrasi;
        document.getElementById('hud-kalibrasi').classList.toggle('sembunyi', !modeKalibrasi);
    }
});
