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
                    }
                ]
            }
        ];


        