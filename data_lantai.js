const DATA_LANTAI = [
            {
                id: 'lt1',
                singkat: 'Lt. 1',
                lencana: 'Lantai 1',
                subSingkat: 'Pintu Masuk & Dunia',
                judul: 'Halaman Utama, Galeri Musik Dunia & Drum Set Terry Bozzio',
                deskripsi: 'Mulai dari gerbang utama Museum Musik Dunia (GS__2316.JPG), melintasi galeri gamelan Nusantara, koleksi Asia, dinding Musical Instruments, zona Eropa, Timur Tengah, India, instalasi Drum Set Terry Bozzio, hingga pohon gitar.',
                warnaFallback: '#2c2219',
                thumbnail: 'img/GP__2315.JPG',
                fallbackThumbnail: 'img/GS__2316.JPG',
                utama: true,
                titik: [
                    {
                        file: 'GS__2316.JPG',
                        nama: 'Pintu Masuk Utama Lantai 1',
                        desk: 'Halaman utama Museum Musik Dunia dengan loket dan akses masuk langsung ke galeri Lantai 1.',
                        hadap: 180, gMaju: 180, eMaju: -6, gMundur: null, eMundur: -6,
                        info: [
                            {
                                g: 148, e: 8,
                                judul: 'History of Recording (1857-1991)',
                                isi: "Linimasa evolusi media perekaman suara di area masuk museum:\n- 1857, Phonautograph: perangkat paling awal perekam gelombang suara di kertas berasap.\n- 1870, Cylinder Phonograph: silinder fonograf untuk merekam dan memutar ulang suara.\n- 1900, Gramophone: piringan hitam datar yang memopulerkan distribusi rekaman massal.\n- 1963, Cassette: pita magnetik ringkas untuk pemutar portabel.\n- 1980, Compact Disc (CD): audio digital optik dengan kejernihan tinggi hingga era 1990-an.",
                                foto: 'img/GP__2317.JPG'
                            }
                        ]
                    },
                    {
                        file: 'GS__2312.JPG',
                        nama: 'Galeri Gamelan & Perkusi Nusantara',
                        desk: 'Deretan instrumen gamelan Indonesia dan panggung perkusi bundar di awal galeri Lantai 1.',
                        hadap: 245, gMaju: 255, eMaju: -6, gMundur: 20, eMundur: -6
                    },
                    {
                        file: 'GS__2311.JPG',
                        nama: 'Koridor Instrumen Tradisional Indonesia',
                        desk: 'Lorong lantai kayu yang memamerkan keragaman alat musik daerah Indonesia.',
                        hadap: 255, gMaju: 262, eMaju: -6, gMundur: 95, eMundur: -7
                    },
                    {
                        file: 'GS__2310.JPG',
                        nama: 'Zona Instrumen Asia & Nusantara',
                        desk: 'Pertemuan koleksi alat musik China di sisi kiri dan panggung instrumen Nusantara.',
                        hadap: 280, gMaju: 308, eMaju: -6, gMundur: 200, eMundur: -6
                    },
                    {
                        file: 'GS__2309.JPG',
                        nama: 'Dinding Musical Instruments & Akses Lantai',
                        desk: 'Dinding pameran ragam alat musik petik dan tiup dunia di dekat papan penunjuk lantai.',
                        hadap: 185, gMaju: 145, eMaju: -6, gMundur: 350, eMundur: -6
                    },
                    {
                        file: 'GS__2308.JPG',
                        nama: 'Koridor Tengah Grand Piano & Asia',
                        desk: 'Lorong penghubung melintasi etalase Grand Piano dan koleksi musik Asia menuju aula utama.',
                        hadap: 250, gMaju: 268, eMaju: -6, gMundur: 115, eMundur: -6
                    },
                    {
                        file: 'GS__2307.JPG',
                        nama: 'Aula Utama Galeri Musik Dunia',
                        desk: 'Aula terbuka Lantai 1 yang menghubungkan area tengah dengan zona Eropa dan Terry Bozzio.',
                        hadap: 280, gMaju: 298, eMaju: -6, gMundur: 38, eMundur: -6
                    },
                    {
                        file: 'GS__2304.JPG',
                        nama: 'Zona Eropa, Timur Tengah, India & Drum Set Terry Bozzio',
                        desk: 'Titik pameran utama Lantai 1: instrumen Eropa di kiri, Drum Set Terry Bozzio di tengah, serta Timur Tengah dan India di kanan.',
                        hadap: 180, gMaju: 258, eMaju: -6, gMundur: 42, eMundur: -6,
                        info: [
                            {
                                g: 168, e: 4,
                                judul: 'Drum Set Terry Bozzio (Satu-satunya di Indonesia)',
                                isi: 'Set drum raksasa dengan puluhan tom, pedal, dan simbal yang disetel secara melodis dan kromatis milik drummer Terry Bozzio. Instalasi ini merupakan koleksi pertama dan satu-satunya di Indonesia.'
                            },
                            {
                                g: 222, e: 8,
                                judul: 'Koleksi Eropa, Timur Tengah & India',
                                isi: 'Menghimpun alat musik tradisional dan klasik lintas wilayah: instrumen dawai dan tiup Eropa di sisi kiri, instrumen petik serta perkusi Timur Tengah seperti Oud dan Darbuka, hingga Sitar dan Tabla dari India di sisi kanan.'
                            }
                        ]
                    },
                    {
                        file: 'GS__2303.JPG',
                        nama: 'Podium Harpa & Aula Tengah',
                        desk: 'Etalase Harpa di pusat aula putih menuju serambi dalam Museum Musik Dunia.',
                        hadap: 335, gMaju: 335, eMaju: -6, gMundur: 142, eMundur: -6
                    },
                    {
                        file: 'GS__2302.JPG',
                        nama: 'Serambi Utama Museum Musik Dunia',
                        desk: 'Area serambi dengan papan nama Museum Musik Dunia dan pajangan kostum panggung.',
                        hadap: 245, gMaju: 262, eMaju: -6, gMundur: 155, eMundur: -6
                    },
                    {
                        file: 'GS__2301.JPG',
                        nama: 'Instalasi Pohon Gitar & Simbal',
                        desk: 'Pilar tengah berhiaskan puluhan gitar dan simbal di bawah langit-langit berbintang.',
                        hadap: 195, gMaju: 235, eMaju: -6, gMundur: 72, eMundur: -6
                    },
                    {
                        file: 'GS__2300.JPG',
                        nama: 'Ujung Galeri Lantai 1 Menuju Lantai 2',
                        desk: 'Titik akhir eksplorasi Lantai 1. Gunakan panah emas maju untuk melanjutkan ke Lantai 2.',
                        hadap: 240, gMaju: 275, eMaju: -6, gMundur: 90, eMundur: -6
                    }
                ]
            },
            {
                id: 'lt2',
                singkat: 'Lt. 2',
                lencana: 'Lantai 2',
                subSingkat: 'Keroncong, Rock & Jazz',
                judul: "Zona Sejarah Keroncong, Musisi Indonesia, Rock 'n' Roll & The Beatles",
                deskripsi: "Melanjutkan langkah dari mural Sejarah Keroncong Kampung Tugu, melewati ruang lantai catur, koridor merah musisi Indonesia, dinding Gold Award, lorong Eric Clapton dan Queen, mural Abbey Road, Jazz New Orleans, hingga panggung Jazz Stage.",
                warnaFallback: '#1a273b',
                thumbnail: 'img/GP__2291.JPG',
                fallbackThumbnail: 'img/GS__2272.JPG',
                utama: false,
                titik: [
                    {
                        file: 'GS__2288.JPG',
                        nama: 'Panel Sejarah Keroncong Kampung Tugu, Jakarta Utara',
                        desk: 'Titik awal Lantai 2 dengan mural besar Sejarah Keroncong dan koleksi instrumen ansambel keroncong.',
                        hadap: 295, gMaju: 10, eMaju: -6, gMundur: 212, eMundur: -6,
                        info: [
                            {
                                g: 278, e: 12,
                                judul: 'Sejarah Keroncong Kampung Tugu, Jakarta Utara',
                                isi: 'Musik Keroncong tumbuh dari akulturasi budaya Portugis sejak abad ke-16 dengan masyarakat Nusantara, lalu berkembang khas di Kampung Tugu, Jakarta Utara. Ansambelnya memadukan cak, cuk, ukulele, gitar, biola, fluit, selo petik, dan kontrabas.'
                            }
                        ]
                    },
                    {
                        file: 'GS__2287.JPG',
                        nama: 'Ruang Lantai Catur, Piano Raksasa & BTS',
                        desk: 'Ruang pamer berlantai papan catur dengan instalasi tuts piano lantai dan gerbang neon biru.',
                        hadap: 95, gMaju: 50, eMaju: -5, gMundur: 252, eMundur: -6
                    },
                    {
                        file: 'GS__2286.JPG',
                        nama: 'Serambi Potret Musisi & Lorong Neon',
                        desk: 'Serambi berdinding kayu penuh potret musisi tepat di depan terowongan neon biru.',
                        hadap: 45, gMaju: 15, eMaju: -6, gMundur: 188, eMundur: -6
                    },
                    {
                        file: 'GS__2284.JPG',
                        nama: 'Aula Galeri Musik Populer & Diva',
                        desk: 'Aula lantai merah dengan panggung diva internasional dan grup musik menuju lorong koridor merah.',
                        hadap: 65, gMaju: 48, eMaju: -7, gMundur: 185, eMundur: -7
                    },
                    {
                        file: 'GS__2281.JPG',
                        nama: 'Koridor Merah Arsip Musisi Indonesia',
                        desk: 'Lorong koleksi foto berbingkai, gitar pamer, dan figur musisi Tanah Air menuju ruang Gold Award.',
                        hadap: 12, gMaju: 12, eMaju: -6, gMundur: 182, eMundur: -7
                    },
                    {
                        file: 'GS__2280.JPG',
                        nama: 'Galeri Gold Award 500.000 Albums & Musisi Indonesia',
                        desk: 'Dinding lengkung penghargaan piringan emas album Indonesia berdampingan dengan deretan figur musisi nasional.',
                        hadap: 60, gMaju: 50, eMaju: -6, gMundur: 190, eMundur: -7
                    },
                    {
                        file: 'GS__2277.JPG',
                        nama: 'Lorong Legenda Rock: Eric Clapton, Queen & Freddie Mercury',
                        desk: 'Lorong beratap neon dengan koleksi Eric Clapton, Queen, Deep Purple, God Bless, Freddie Mercury, dan Tony Q.',
                        hadap: 12, gMaju: 8, eMaju: -6, gMundur: 205, eMundur: -6
                    },
                    {
                        file: 'GS__2273.JPG',
                        nama: 'Galeri Peta Silsilah Genre, Elvis & Abbey Road',
                        desk: "Sudut King of Rock 'n' Roll (Elvis Presley), dinding gitar bertanda tangan asli, dan mural Abbey Road.",
                        hadap: 135, gMaju: 12, eMaju: -6, gMundur: 228, eMundur: -6,
                        info: [
                            {
                                g: 165, e: 8,
                                judul: 'Peta Silsilah Genre Musik Dunia',
                                isi: "Peta visual yang menghubungkan akar Blues, Jazz, Gospel, Rhythm & Blues, Reggae, Ska, Soul, Funk, Punk, Rock 'n' Roll, hingga Heavy Metal dan musik populer modern.",
                                foto: 'img/GP__2293.JPG'
                            }
                        ]
                    },
                    {
                        file: 'GS__2272.JPG',
                        nama: "Zona Jazz New Orleans, Rock 'n' Roll & The Beatles",
                        desk: "Papan sejarah Jazz New Orleans dan diagram Rock 'n' Roll di dinding tengah, serta memorabilia The Beatles di sisi kanan.",
                        hadap: 185, gMaju: 75, eMaju: -6, gMundur: 282, eMundur: -6,
                        info: [
                            {
                                g: 180, e: 8,
                                judul: "Jazz New Orleans & Rock 'n' Roll",
                                isi: "Mengulas lahirnya musik Jazz di New Orleans pada awal abad ke-20 yang berpadu dengan Blues dan Swing, lalu mendorong kemunculan budaya Rock 'n' Roll di pertengahan abad ke-20."
                            },
                            {
                                g: 340, e: 10,
                                judul: 'Memorabilia The Beatles',
                                isi: 'Koleksi piringan, foto, dan dokumentasi perjalanan kuartet Liverpool (John Lennon, Paul McCartney, George Harrison, dan Ringo Starr) dalam sejarah rekaman studio dan musik pop.',
                                foto: 'img/GP__2292.JPG'
                            }
                        ]
                    },
                    {
                        file: 'GS__2271.JPG',
                        nama: 'Panggung World Festival Jazz Stage (Menuju Lantai 3)',
                        desk: 'Berada di depan panggung biru World Festival Jazz Stage dan Jazz Bar. Klik panah maju untuk naik ke Lantai 3.',
                        hadap: 180, gMaju: 112, eMaju: -6, gMundur: 268, eMundur: -6
                    }
                ]
            },
            {
                id: 'lt3',
                singkat: 'Lt. 3',
                lencana: 'Lantai 3',
                subSingkat: 'Piano Klasik & Konser',
                judul: 'Galeri Piano Klasik, Ruang Konser Grand Piano & Selasar Akhir',
                deskripsi: 'Menyusuri 4 titik terakhir di Lantai 3: deretan piano klasik dan lemari pemutar audio antik, aula karpet merah bergaya Eropa, ruang konser Grand Piano, hingga selasar keluar.',
                warnaFallback: '#2f191d',
                thumbnail: 'img/GS__2227.JPG',
                fallbackThumbnail: 'img/GP__2317.JPG',
                utama: false,
                titik: [
                    {
                        file: 'GS__2230.JPG',
                        nama: 'Galeri Piano Klasik & Koleksi Audio',
                        desk: 'Titik awal Lantai 3 dengan deretan piano klasik tegak dan rak perangkat pemutar audio antik.',
                        hadap: 120, gMaju: 45, eMaju: -6, gMundur: 305, eMundur: -6
                    },
                    {
                        file: 'GS__2229.JPG',
                        nama: 'Aula Karpet Merah & Organ Pipa Klasik',
                        desk: 'Aula pameran karpet merah dengan pajangan organ klasik dan lorong menuju ruang Grand Piano.',
                        hadap: 120, gMaju: 75, eMaju: -6, gMundur: 268, eMundur: -6
                    },
                    {
                        file: 'GS__2227.JPG',
                        nama: 'Ruang Konser Grand Piano Klasik',
                        desk: 'Ruang konser marmer dengan Grand Piano, panggung tirai merah, dan gerbang lengkung emas.',
                        hadap: 190, gMaju: 35, eMaju: -5, gMundur: 185, eMundur: -5
                    },
                    {
                        file: 'GS__2225.JPG',
                        nama: 'Selasar Terbuka Lantai 3 (Titik Akhir Tur)',
                        desk: 'Titik terakhir seluruh rute tur 3 lantai. Tekan Selesai atau pilih lantai lain di bilah bawah.',
                        hadap: 185, gMaju: null, eMaju: -6, gMundur: 25, eMundur: -6
                    }
                ]
            }
        ];

        // Daftar datar berurutan seluruh 37 langkah agar navigasi Maju/Mundur menyambung otomatis lintas lantai.
        const URUTAN_GLOBAL = [];
        DATA_LANTAI.forEach(lantai => {
            lantai.titik.forEach((_, idx) => {
                URUTAN_GLOBAL.push({ lantaiId: lantai.id, idx });
            });
        });

        const JARAK_HOTSPOT = 5.2;
        const JARAK_PANEL_VR = 2.75;
        const CACHE_GAMBAR_360 = {};
        const CACHE_FOTO_DETAIL = {};
        let modeKalibrasi = false;
        let animasiDijeda = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let elemenFokusSebelumModal = null;

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

        // Selaras dengan SphereGeometry scale="-1 1 1" pada <a-sky rotation="0 0 0"> di A-Frame 1.6.0.
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

        // Font MSDF roboto bawaan A-Frame tidak memuat beberapa karakter non-ASCII.
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

            // Hanya file GS__*.JPG (equirectangular) yang boleh dipakai sebagai tekstur <a-sky>.
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

        function sembunyikanSemuaLayar() {
            document.getElementById('layar-pembuka').classList.add('sembunyi');
            document.getElementById('layar-zona').classList.add('sembunyi');
            document.getElementById('layar-selesai').classList.add('sembunyi');
        }

        function aturTampilHud(tampil) {
            document.body.classList.toggle('mode-360-aktif', Boolean(tampil));
            ['hud-lokasi', 'hud-kanan', 'hud-navigasi'].forEach(id => {
                document.getElementById(id).classList.toggle('sembunyi', !tampil);
            });
            if (!tampil) {
                document.getElementById('hud-kalibrasi').classList.add('sembunyi');
            } else if (modeKalibrasi) {
                document.getElementById('hud-kalibrasi').classList.remove('sembunyi');
            }
        }

        function aturIndikatorMuat(tampil, pesan) {
            const el = document.getElementById('indikator-muat');
            if (pesan) document.getElementById('teks-muat').textContent = pesan;
            el.classList.toggle('sembunyi', !tampil);
        }

        function bukaMenuZona() {
            tutupPanelInfo();
            sembunyikanSemuaLayar();
            aturTampilHud(false);
            document.getElementById('layar-zona').classList.remove('sembunyi');
        }

        function selesaikanTur() {
            tutupPanelInfo();
            sembunyikanSemuaLayar();
            aturTampilHud(false);
            document.getElementById('layar-selesai').classList.remove('sembunyi');
        }

        function kembaliKeAwal() {
            tutupPanelInfo();
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

        function tutupPanelInfo() {
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

                const badge = document.createElement('span');
                badge.className = 'badge-jumlah';
                badge.textContent = `${lantai.titik.length} Titik 360°`;

                pratinjau.appendChild(img);
                pratinjau.appendChild(fallbackBox);
                pratinjau.appendChild(badge);

                const urutanLabel = i === 0
                    ? 'Titik awal: Pintu Masuk Utama'
                    : (i === 1 ? 'Lanjutan langkah 13 sampai 22' : 'Lanjutan langkah 23 sampai 26');

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

                        const lc = this.kamera.components && this.kamera.components['look-controls'];
                        if (lc && lc.yawObject && lc.pitchObject && !this.el.is('vr-mode')) {
                            lc.yawObject.rotation.y = 0;
                            lc.pitchObject.rotation.x = 0;
                        }
                        const arahHadap = typeof titik.hadap === 'number' ? titik.hadap : 180;
                        this.rig.object3D.rotation.y = THREE.MathUtils.degToRad(yawUntuk(arahHadap));

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
                        captionFoto.textContent = `Foto detail koleksi (${h.foto})`;

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

                    const teksJudulVR = keTeksAsciiVR(h.judul.toUpperCase());
                    const teksIsiVR = keTeksAsciiVR(h.isi);
                    judul.setAttribute('value', teksJudulVR);
                    isi.setAttribute('value', teksIsiVR);

                    const refFoto = h.foto ? await cekFotoDetail(h.foto) : null;
                    const adaFoto = Boolean(refFoto);
                    const jumlahBaris = hitungBarisTeks(teksIsiVR, 40);
                    const tinggiTeks = 0.56 + jumlahBaris * 0.125;
                    const tinggiFoto = adaFoto ? 1.28 : 0;
                    const tinggiTotal = tinggiTeks + tinggiFoto + (adaFoto ? 0.14 : 0.08);
                    const atas = tinggiTotal / 2;

                    latar.setAttribute('height', tinggiTotal.toFixed(2));
                    garis.object3D.position.set(0, atas - 0.022, 0.002);
                    tutup.object3D.position.set(1.24, atas - 0.17, 0.025);
                    judul.object3D.position.set(-1.24, atas - 0.14, 0.015);

                    if (adaFoto) {
                        fotoEl.setAttribute('src', refFoto);
                        fotoEl.setAttribute('visible', true);
                        fotoEl.object3D.position.set(0, atas - 0.44 - 0.62, 0.015);
                        isi.object3D.position.set(-1.24, atas - 0.44 - 1.32, 0.015);
                    } else {
                        fotoEl.setAttribute('visible', false);
                        isi.object3D.position.set(-1.24, atas - 0.44, 0.015);
                    }

                    const elevasi = THREE.MathUtils.clamp(h.e, -10, 18);
                    const pos = arahDari(h.g, elevasi, JARAK_PANEL_VR).add(new THREE.Vector3(0, 1.6, 0));
                    p.object3D.position.copy(pos);
                    p.object3D.lookAt(0, 1.6, 0);
                    p.setAttribute('visible', true);
                    tutup.classList.add('clickable');
                    this.segarkanRaycaster();
                },

                tutupPanelVR() {
                    this.panelVR.setAttribute('visible', false);
                    this.panelVR.querySelector('#vr-panel-tutup').classList.remove('clickable');
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
                        btnMundur.textContent = lMundur.id !== lantai.id ? `◀ ${lMundur.singkat}` : '◀ Mundur';
                        btnMundur.title = `Mundur ke ${lMundur.lencana}: ${lMundur.titik[targetMundur.idx].nama}`;
                    } else {
                        btnMundur.textContent = '◀ Mundur';
                        btnMundur.title = 'Titik awal tur (Pintu Masuk Lantai 1)';
                    }

                    if (targetMaju) {
                        const lMaju = cariLantai(targetMaju.lantaiId);
                        btnMaju.textContent = lMaju.id !== lantai.id ? `Naik ${lMaju.singkat} ▶` : 'Maju ▶';
                        btnMaju.title = `Maju ke ${lMaju.lencana}: ${lMaju.titik[targetMaju.idx].nama}`;
                    } else {
                        btnMaju.textContent = 'Selesai di Sini';
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

        document.addEventListener('keydown', ev => {
            const modalTerbuka = !document.getElementById('modal-info-overlay').classList.contains('sembunyi');
            if (ev.key === 'Escape' && modalTerbuka) {
                tutupPanelInfo();
                return;
            }

            const sedangDi360 = !document.getElementById('hud-lokasi').classList.contains('sembunyi');
            if (!sedangDi360 || modalTerbuka) return;

            if (ev.key === 'ArrowRight') {
                navigasiLangkah(1);
            } else if (ev.key === 'ArrowLeft') {
                navigasiLangkah(-1);
            } else if (ev.key === 'k' || ev.key === 'K') {
                modeKalibrasi = !modeKalibrasi;
                document.getElementById('hud-kalibrasi').classList.toggle('sembunyi', !modeKalibrasi);
            }
        });