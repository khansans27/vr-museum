// Hanya file GS__*.JPG (equirectangular) yang dipasang ke <a-sky>; GP__*.JPG dan detail_*.jpg khusus thumbnail/modal.
const DATA_LANTAI = [
    {
        id: 'lt1',
        singkat: 'Lt. 1',
        lencana: 'Lantai 1',
        subSingkat: '5 Benua & Nusantara',
        judul: 'Pintu Masuk Utama, Instrumen 5 Benua, Terry Bozzio & Gamelan Nusantara',
        deskripsi: 'Berjalan memutar searah jarum jam dari gerbang depan (GS__2316.JPG), serambi diva nasional, pohon gitar, Pipe Organ 1899, harpa konser, Drum Set Terry Bozzio, Timur Tengah dan India, Didgeridoo, zona Tiongkok, Gamelan Nusantara, hingga tangga naik ke Lantai 2.',
        warnaFallback: '#2c2219',
        thumbnail: 'img/GP__2317.JPG',
        fallbackThumbnail: 'img/detail_bozzio.jpg',
        utama: true,
        titik: [
            {
                file: 'GS__2316.JPG',
                nama: 'Pintu Masuk Utama Museum Musik Dunia',
                desk: 'Plaza depan Museum Musik Dunia di Jawa Timur Park 3 dengan loket tiket dan gerbang masuk Lantai 1.',
                hadap: 180, gMaju: 180, eMaju: -6, gMundur: null, eMundur: -6,
                info: [
                    {
                        g: 215, e: 6,
                        judul: 'Gerbang Utama & Panggung Sambutan',
                        isi: 'Fasad utama Museum Musik Dunia di kawasan Jawa Timur Park 3, Kota Batu. Museum tiga lantai ini menghimpun ribuan instrumen tradisional dan modern dari lima benua (Asia, Afrika, Amerika, Eropa, dan Australia) beserta memorabilia musisi Indonesia dan dunia.',
                        foto: 'img/detail_fasad_museum.jpg'
                    }
                ]
            },
            {
                file: 'GS__2302.JPG',
                nama: 'Serambi Utama & Zona Diva Nasional',
                desk: 'Ruang penyambutan tepat di balik pintu utama yang memajang kostum panggung diva Indonesia dan peta pengantar zona.',
                hadap: 205, gMaju: 255, eMaju: -6, gMundur: 22, eMundur: -6,
                info: [
                    {
                        g: 172, e: 4,
                        judul: 'Busana Panggung Diva Musik Indonesia',
                        isi: 'Etalase penghormatan bagi penyanyi pop Indonesia asal Jawa Timur, Krisdayanti dan Yuni Shara. Menampilkan gaun pertunjukan asli bertabur payet, dokumentasi konser, serta rekaman album yang menandai perkembangan industri musik pop nasional era 1990-an hingga 2000-an.',
                        foto: 'img/detail_diva_nasional.jpg'
                    },
                    {
                        g: 108, e: 6,
                        judul: 'Papan Pengantar Zona Museum Musik Dunia',
                        isi: 'Dinding orientasi pengunjung di serambi masuk yang merangkum pembagian koleksi museum ke dalam zona alat musik mancanegara lima benua di Lantai 1, sejarah genre populer dan musisi legendaris di Lantai 2, serta instrumen mekanik dan klasik di Lantai 3.',
                        foto: 'img/detail_dinding_pembuka.jpg'
                    }
                ]
            },
            {
                file: 'GS__2301.JPG',
                nama: 'Instalasi Pohon Gitar, Simbal & Pipe Organ 1899',
                desk: 'Aula depan dengan instalasi pilar puluhan gitar dan simbal di tengah ruangan serta Pipe Organ antik di sisi kanan.',
                hadap: 155, gMaju: 175, eMaju: -6, gMundur: 72, eMundur: -6,
                info: [
                    {
                        g: 128, e: 10,
                        judul: 'Instalasi Pohon Gitar & Mahkota Simbal',
                        isi: 'Instalasi seni vertikal di pusat serambi Lantai 1 yang tersusun dari puluhan gitar akustik, gitar elektrik, instrumen petik di bagian batang, serta susunan simbal perunggu di bagian tajuk langit-langit berbintang.',
                        foto: 'img/detail_pohon_gitar.jpg',
                        audio: 'audio/pohon_gitar.mp3',
                        labelAudio: 'Petikan Gitar Akustik'
                    },
                    {
                        g: 318, e: 6,
                        judul: 'Pipe Organ Gereja Kuno Polandia (1899)',
                        isi: 'Organ pipa (pipe organ) bersejarah buatan Polandia tahun 1899 yang menjadi salah satu koleksi berusia lebih dari satu abad di Lantai 1. Suaranya dihasilkan oleh hembusan udara bertekanan melalui deretan pipa kayu dan logam dengan panjang berbeda sesuai tinggi nada.',
                        foto: 'img/detail_pipe_organ.jpg',
                        audio: 'audio/pipe_organ.mp3',
                        labelAudio: 'Pipe Organ Gereja Klasik'
                    }
                ]
            },
            {
                file: 'GS__2303.JPG',
                nama: 'Podium Harpa Konser & Instrumen Dawai',
                desk: 'Podium bundar Harpa di tengah aula putih yang menghubungkan zona Eropa dengan koleksi dawai klasik.',
                hadap: 165, gMaju: 142, eMaju: -6, gMundur: 335, eMundur: -6,
                info: [
                    {
                        g: 185, e: 2,
                        judul: 'Koleksi Harpa Konser (Concert Harp)',
                        isi: 'Harpa konser merupakan instrumen kordofon berdawai puluhan yang dipetik dengan kedua tangan. Pada harpa pedal modern, pemain menggunakan tujuh pedal kaki untuk mengubah ketegangan senar secara setengah nada (semitone) sehingga dapat memainkan seluruh tangga nada kromatis.',
                        foto: 'img/detail_harpa.jpg',
                        audio: 'audio/harp_sound.mp3',
                        labelAudio: 'Petikan Harpa'
                    },
                    {
                        g: 248, e: 4,
                        judul: 'Galeri Instrumen Dawai & Xilofon Tradisional',
                        isi: 'Deretan alat musik petik, gesek, dan perkusi bilah kayu lintas budaya yang memperlihatkan bagaimana bentuk kotak resonansi memengaruhi warna suara setiap instrumen.',
                        foto: 'img/detail_dawai_klasik.jpg',
                        audio: 'audio/xilofon_kayu.mp3',
                        labelAudio: 'Xilofon & Marimba Kayu'
                    }
                ]
            },
            {
                file: 'GS__2304.JPG',
                nama: 'Zona Eropa, Drum Set Terry Bozzio, Timur Tengah & India',
                desk: 'Persimpangan utama koleksi mancanegara: alat musik Eropa di kiri, Drum Set Terry Bozzio di tengah, serta Timur Tengah dan India di kanan.',
                hadap: 175, gMaju: 248, eMaju: -6, gMundur: 38, eMundur: -6,
                info: [
                    {
                        g: 168, e: 4,
                        judul: 'Drum Set Terry Bozzio (Satu-satunya di Indonesia)',
                        isi: 'Set drum kustom raksasa milik drummer virtuoso Amerika Serikat Terry Bozzio (mantan drummer Frank Zappa dan grup Missing Persons). Konfigurasinya menggabungkan 6 bass drum, puluhan tom-tom yang disetel secara kromatis-melodis, belasan pedal kaki, dan deretan simbal efek. Koleksi ini merupakan satu-satunya di Indonesia dan salah satu dari sedikit unit yang dipamerkan di Asia.',
                        foto: 'img/detail_bozzio.jpg',
                        audio: 'audio/drum_bozzio.mp3',
                        labelAudio: 'Permainan Drum Set Akustik'
                    },
                    {
                        g: 108, e: 8,
                        judul: 'Koleksi Alat Musik Tradisional Eropa',
                        isi: 'Etalase benua Eropa yang menampilkan ragam instrumen dawai dan mekanik, mulai dari keluarga biola, mandolin, balalaika, zither, akordeon, hingga Hurdy-Gurdy (alat musik dawai abad pertengahan yang digesek oleh roda kayu berputar melalui engkol tangan).',
                        foto: 'img/detail_eropa.jpg',
                        audio: 'audio/hurdy_gurdy_eropa.mp3',
                        labelAudio: 'Hurdy-Gurdy (Dawai Engkol Eropa)'
                    },
                    {
                        g: 215, e: 8,
                        judul: 'Koleksi Timur Tengah & India (Oud, Darbuka, Sitar & Tabla)',
                        isi: 'Pameran berdampingan dua tradisi musikal bersejarah: instrumen Timur Tengah seperti Oud (lute tanpa fret yang menjadi leluhur lute Eropa), Qanun, Rebana, dan Darbuka untuk tangga nada maqam; serta instrumen klasik India seperti Sitar berdawai simpatetik, Sarod, Tambura, dan sepasang kendang Tabla untuk komposisi raga.',
                        foto: 'img/detail_timur_tengah.jpg',
                        audio: 'audio/sitar_india.mp3',
                        labelAudio: 'Sitar Klasik India (Raga Yaman)'
                    }
                ]
            },
            {
                file: 'GS__2307.JPG',
                nama: 'Aula Tengah & Panggung Perkusi Tradisional',
                desk: 'Ruang terbuka di depan zona India dengan panggung bundar instrumen perkusi bilah dan gong menuju area lantai kayu.',
                hadap: 135, gMaju: 148, eMaju: -6, gMundur: 305, eMundur: -6,
                info: [
                    {
                        g: 102, e: 0,
                        judul: 'Ansambel Perkusi Bilah & Gong Tradisional',
                        isi: 'Panggung terbuka di tengah aula Lantai 1 yang memamerkan perpaduan xilofon kayu, metallofon perunggu, kendang, dan gong gantung dari tradisi musik Asia Tenggara dan Afrika.',
                        foto: 'img/detail_panggung_tengah.jpg',
                        audio: 'audio/balafon_audio.mp3',
                        labelAudio: 'Perkusi Bilah Kayu (Balafon)'
                    }
                ]
            },
            {
                file: 'GS__2300.JPG',
                nama: 'Galeri Lantai Kayu & Didgeridoo Australia',
                desk: 'Peralihan menuju galeri lantai kayu yang menampilkan deretan instrumen tiup panjang Didgeridoo asal suku Aborigin Australia.',
                hadap: 245, gMaju: 238, eMaju: -6, gMundur: 128, eMundur: -6,
                info: [
                    {
                        g: 282, e: -6,
                        judul: 'Didgeridoo Suku Aborigin Australia',
                        isi: 'Didgeridoo adalah instrumen tiup kayu (aerofon) tradisional masyarakat pribumi Aborigin di Australia bagian utara yang telah dimainkan selama ribuan tahun. Batangnya berasal dari kayu eukaliptus yang berongga secara alami oleh rayap, dimainkan dengan getaran bibir dan teknik pernapasan melingkar (circular breathing) sehingga menghasilkan dengung ritmis tanpa putus.',
                        foto: 'img/detail_didgeridoo.jpg',
                        audio: 'audio/didgeridoo.mp3',
                        labelAudio: 'Didgeridoo Aborigin Australia'
                    }
                ]
            },
            {
                file: 'GS__2308.JPG',
                nama: 'Koridor Evolusi Grand Piano & Instrumen Petik Asia',
                desk: 'Koridor lantai kayu dengan panel Evolusi Grand Piano, rak lonceng tabung, dan etalase alat musik petik Asia.',
                hadap: 145, gMaju: 158, eMaju: -6, gMundur: 325, eMundur: -6,
                info: [
                    {
                        g: 82, e: 6,
                        judul: 'Evolusi Grand Piano & Lonceng Nada',
                        isi: 'Menjelaskan perkembangan instrumen tuts berdawai sejak penemuan gravicembalo col piano e forte oleh Bartolomeo Cristofori di Italia sekitar tahun 1700 hingga konstruksi rangka besi cor pada Grand Piano konser modern, didampingi perangkat lonceng logam bernada di depannya.',
                        foto: 'img/detail_grand_piano_lt1.jpg',
                        audio: 'audio/fortepiano_evolusi.mp3',
                        labelAudio: 'Fortepiano Klasik'
                    },
                    {
                        g: 205, e: 4,
                        judul: 'Etalase Instrumen Petik & Kecapi Asia',
                        isi: 'Pajangan melengkung yang menghimpun variasi kecapi kotak, siter kayu, dan lute berleher panjang dari berbagai wilayah Asia Timur dan Asia Tenggara.',
                        foto: 'img/detail_petik_asia.jpg',
                        audio: 'audio/kecapi_asia.mp3',
                        labelAudio: 'Kecapi Petik Asia (Koto)'
                    }
                ]
            },
            {
                file: 'GS__2310.JPG',
                nama: 'Zona Musik Tradisional Tiongkok & Nusantara',
                desk: 'Titik temu koleksi instrumen Tiongkok (Guzheng, Erhu, Gong) di sisi kiri dan ansambel Gamelan Jawa di sisi depan.',
                hadap: 135, gMaju: 198, eMaju: -6, gMundur: 335, eMundur: -6,
                info: [
                    {
                        g: 62, e: 6,
                        judul: 'Koleksi Musik Tradisional Tiongkok (Guzheng, Erhu & Pipa)',
                        isi: 'Zona Tiongkok memamerkan keluarga instrumen klasik berusia ribuan tahun: Guzheng (kecapi petik horizontal bersenar banyak dengan penyangga nada geser), Pipa (lute pir empat senar), Ruan, Erhu (rebab gesek dua senar), seruling bambu Dizi, Sheng (organ mulut), serta gong perunggu.',
                        foto: 'img/detail_china.jpg',
                        audio: 'audio/guzheng_solo.mp3',
                        labelAudio: 'Guzheng Tradisional Tiongkok'
                    },
                    {
                        g: 145, e: 6,
                        judul: 'Ansambel Gamelan Jawa & Wayang',
                        isi: 'Panggung gamelan berlatar siluet gunungan dan wayang kulit yang menampilkan bonang, saron, gender, kenong, dan gong ageng dalam sistem laras slendro serta pelog.',
                        foto: 'img/detail_ansambel_nusantara.jpg',
                        audio: 'audio/gamelan_jawa.mp3',
                        labelAudio: 'Gender & Gamelan Jawa'
                    }
                ]
            },
            {
                file: 'GS__2312.JPG',
                nama: 'Galeri Gamelan Indonesia & Sudut Perkusi',
                desk: 'Bentangan panggung besar instrumen tradisional Indonesia berlatar Merah Putih dan podium Sudut Perkusi di seberangnya.',
                hadap: 145, gMaju: 232, eMaju: -6, gMundur: 18, eMundur: -6,
                info: [
                    {
                        g: 135, e: 6,
                        judul: 'Panggung Besar Gamelan & Karawitan Nusantara',
                        isi: 'Menampilkan perangkat lengkap karawitan dari Jawa, Sunda, dan Bali. Setiap bilah dan pencon perunggu ditempa secara khusus agar menghasilkan perpaduan tabuhan melodis, ritmis, dan penanda struktur gending.',
                        foto: 'img/detail_gamelan_nusantara.jpg',
                        audio: 'audio/gamelan_nusantara.mp3',
                        labelAudio: 'Bonang Gamelan Degung Nusantara'
                    },
                    {
                        g: 295, e: 2,
                        judul: 'Sudut Perkusi Tradisional (Kendang, Bedug & Rebana)',
                        isi: 'Podium bundar bertajuk Sudut Perkusi yang menghimpun alat musik membranofon Nusantara, mulai dari kendang pengatur tempo tari dan gamelan, tifa dari Indonesia Timur, hingga ragam rebana dan bedug.',
                        foto: 'img/detail_perkusi_bundar.jpg',
                        audio: 'audio/kendang_nusantara.mp3',
                        labelAudio: 'Tabuhan Kendang Tradisional'
                    }
                ]
            },
            {
                file: 'GS__2311.JPG',
                nama: 'Koridor Alat Musik Daerah Nusantara',
                desk: 'Lorong lanjutan koleksi Nusantara yang memajang instrumen bambu, kayu, dan dawai daerah menuju dinding Musical Instruments.',
                hadap: 245, gMaju: 258, eMaju: -6, gMundur: 42, eMundur: -6,
                info: [
                    {
                        g: 102, e: 4,
                        judul: 'Ragam Instrumen Daerah: Angklung, Kolintang & Sasando',
                        isi: 'Memperkenalkan kekayaan organologi daerah Indonesia: Angklung bambu Jawa Barat yang telah diakui UNESCO sebagai Warisan Budaya Takbenda (2010), Kolintang kayu resonansi dari Minahasa Sulawesi Utara, serta instrumen petik dan tabuh dari berbagai kepulauan Nusantara.',
                        foto: 'img/detail_alat_musik_daerah.jpg',
                        audio: 'audio/angklung_daerah.mp3',
                        labelAudio: 'Ansambel Angklung Bambu'
                    }
                ]
            },
            {
                file: 'GS__2309.JPG',
                nama: 'Dinding Musical Instruments & Tangga Naik Lantai 2',
                desk: 'Dinding lengkung raksasa Musical Instruments tepat di depan petunjuk arah tangga menuju Lantai 2. Klik panah maju untuk naik ke Lantai 2.',
                hadap: 225, gMaju: 185, eMaju: -6, gMundur: 82, eMundur: -6,
                info: [
                    {
                        g: 270, e: 8,
                        judul: 'Dinding Ensiklopedia Musical Instruments',
                        isi: 'Instalasi dinding lengkung setinggi ruangan yang menyusun puluhan instrumen petik, gesek, tiup, dan perkusi dari berbagai negara secara berdampingan sehingga pengunjung dapat membandingkan ukuran serta anatomi akustiknya dalam satu pandangan.',
                        foto: 'img/detail_musical_wall.jpg',
                        audio: 'audio/akordeon_dunia.mp3',
                        labelAudio: 'Akordeon & Instrumen Rakyat'
                    }
                ]
            }
        ]
    },
    {
        id: 'lt2',
        singkat: 'Lt. 2',
        lencana: 'Lantai 2',
        subSingkat: 'Genre & Memorabilia',
        judul: "Sejarah Keroncong, K-Pop, Musisi Indonesia, Rock 'n' Roll, Beatles & Jazz",
        deskripsi: "Melanjutkan langkah di Lantai 2 dari ruang Sejarah Keroncong Kampung Tugu, lantai catur K-Pop dan piano lantai raksasa, lorong potret musisi, panggung diva dunia, koridor memorabilia Indonesia, Gold Award, legenda Rock, Elvis Presley, Abbey Road, hingga World Festival Jazz Stage.",
        warnaFallback: '#1a273b',
        thumbnail: 'img/detail_jazz_stage.jpg',
        fallbackThumbnail: 'img/detail_beatles.jpg',
        utama: false,
        titik: [
            {
                file: 'GS__2288.JPG',
                nama: 'Galeri Sejarah Keroncong Kampung Tugu, Jakarta Utara',
                desk: 'Titik awal Lantai 2 dengan panel sejarah Keroncong sejak 1661, instrumen orkes keroncong, dan potret maestro nasional.',
                hadap: 260, gMaju: 10, eMaju: -6, gMundur: 212, eMundur: -6,
                info: [
                    {
                        g: 278, e: 10,
                        judul: 'Sejarah Keroncong Kampung Tugu & Ansambel Cak-Cuk-Selo',
                        isi: 'Musik keroncong berakar sejak 1661 di Kampung Tugu (Cilincing, Jakarta Utara) melalui komunitas keturunan Portugis-Nusantara (Mardijkers) yang mengembangkan tradisi musik Moresco dan Cafrinho. Ciri khas utamanya terletak pada jalinan ritmis Cuk (berdawai 3 nilon turunan cavaquinho yang berbunyi crong-crong), Cak (berdawai 4 baja pengisi ketukan balik), serta Selo (cello yang dipetik/dibetot menyerupai kendang), berpadu dengan biola, fluit, gitar, dan kontrabas.',
                        foto: 'img/detail_keroncong.jpg',
                        audio: 'audio/cuk_keroncong.mp3',
                        labelAudio: 'Petikan Ukulele / Cuk Keroncong'
                    },
                    {
                        g: 172, e: 6,
                        judul: 'Sudut Maestro Keroncong Indonesia (Gesang & Waljinah)',
                        isi: 'Ruang penghormatan bagi tokoh besar pelestari keroncong Indonesia, termasuk maestro Gesang Martohartono pencipta lagu Bengawan Solo (1940) yang diterjemahkan ke berbagai bahasa dunia, serta Ratu Keroncong Waljinah asal Surakarta yang memopulerkan langgam keroncong dan karya Walang Kekek.',
                        foto: 'img/detail_maestro_keroncong.jpg',
                        audio: 'audio/orkes_keroncong_1927.mp3',
                        labelAudio: 'Arsip Orkes Keroncong Klasik'
                    }
                ]
            },
            {
                file: 'GS__2287.JPG',
                nama: 'Ruang Lantai Catur: Zona K-Pop & Piano Lantai Raksasa',
                desk: 'Ruang tematik berlantai papan catur dengan panggung figur BTS di tengah dan instalasi tuts piano lantai bercahaya.',
                hadap: 135, gMaju: 52, eMaju: -5, gMundur: 252, eMundur: -6,
                info: [
                    {
                        g: 185, e: 4,
                        judul: 'Zona Gelombang Musik K-Pop & Figur BTS',
                        isi: 'Menampilkan fenomena global musik pop Korea Selatan (Korean Wave / Hallyu) melalui panggung figur grup vokal BTS dan dokumentasi musisi K-Pop seperti PSY yang memadukan produksi musik elektronik, hip-hop, koreografi panggung, serta komunitas penggemar lintas negara.',
                        foto: 'img/detail_bts.jpg'
                    },
                    {
                        g: 102, e: 2,
                        judul: 'Instalasi Giant Floor Piano Interaktif',
                        isi: 'Tuts piano ukuran besar di atas lantai yang menyala dan berbunyi saat diinjak oleh pengunjung, dirancang sebagai wahana edukasi pengenalan tangga nada diatonis secara kinestetik.',
                        foto: 'img/detail_floor_piano.jpg',
                        audio: 'audio/floor_piano.mp3',
                        labelAudio: 'Rangkaian Nada Tuts Piano'
                    }
                ]
            },
            {
                file: 'GS__2286.JPG',
                nama: 'Serambi Potret Musisi & Lorong Train to Genre',
                desk: 'Dinding kayu melengkung berisi puluhan bingkai foto musisi dunia di samping terowongan neon biru.',
                hadap: 65, gMaju: 15, eMaju: -6, gMundur: 188, eMundur: -6,
                info: [
                    {
                        g: 96, e: 8,
                        judul: 'Dinding Potret Musisi & Gitaris Dunia',
                        isi: 'Deretan foto berbingkai musisi rock, blues, dan pop internasional yang mengiringi transisi pengunjung dari zona pop Asia menuju aula diva internasional dan musik populer Indonesia.',
                        foto: 'img/detail_potret_musisi.jpg'
                    }
                ]
            },
            {
                file: 'GS__2284.JPG',
                nama: 'Aula Musik Populer & Panggung Diva Internasional',
                desk: 'Aula berlantai merah dengan panggung figur diva vokal dunia Celine Dion dan instalasi pilar gitar Manhattan.',
                hadap: 320, gMaju: 48, eMaju: -7, gMundur: 158, eMundur: -7,
                info: [
                    {
                        g: 298, e: 6,
                        judul: 'Zona Diva Vokal & Musik Pop Internasional (Celine Dion)',
                        isi: 'Panggung apresiasi penyanyi pop balada internasional yang menampilkan figur Celine Dion beserta potret vokalis dunia yang menandai era keemasan album fisik dan soundtrack film dekade 1990-an.',
                        foto: 'img/detail_celine_dion.jpg'
                    }
                ]
            },
            {
                file: 'GS__2281.JPG',
                nama: 'Koridor Merah Memorabilia Musisi Indonesia',
                desk: 'Lorong arsip musik nasional yang memajang gitar asli, sampul album, dan kliping perjalanan musisi Tanah Air.',
                hadap: 300, gMaju: 12, eMaju: -6, gMundur: 182, eMundur: -7,
                info: [
                    {
                        g: 268, e: 8,
                        judul: 'Arsip Gitar Pribadi & Memorabilia Band Indonesia',
                        isi: 'Dinding koleksi artefak asli musisi dan grup band Indonesia, meliputi gitar elektrik yang pernah dipakai dalam proses rekaman maupun tur panggung, kaset rilisan awal, serta dokumentasi sejarah industri rekaman nasional.',
                        foto: 'img/detail_memorabilia_indonesia.jpg',
                        audio: 'audio/gitar_elektrik_clean.mp3',
                        labelAudio: 'Gitar Elektrik Clean Chord'
                    }
                ]
            },
            {
                file: 'GS__2280.JPG',
                nama: 'Galeri Gold Award 500.000 Albums & Tokoh Pop Nasional',
                desk: 'Dinding lengkung piringan emas penjualan album di atas 500.000 kopi berhadapan dengan figur musisi legendaris Indonesia.',
                hadap: 95, gMaju: 50, eMaju: -6, gMundur: 190, eMundur: -7,
                info: [
                    {
                        g: 108, e: 10,
                        judul: 'Dinding Penghargaan Gold Award Over 500.000 Albums',
                        isi: 'Mengabadikan deretan plakat piringan emas dan multi-platinum dari album-album musik Indonesia yang menembus angka penjualan lebih dari 500.000 kopi pada era keemasan kaset pita dan CD.',
                        foto: 'img/detail_gold_award.jpg'
                    },
                    {
                        g: 275, e: 4,
                        judul: 'Figur Tokoh Musik Pop Indonesia (Chrisye, Melly Goeslaw, Ari Lasso & Koes Plus)',
                        isi: 'Menampilkan patung figur dan potret para pelopor musik populer Indonesia: grup Koes Plus sebagai tonggak pop Nusantara sejak akhir 1960-an, vokalis legendaris Chrisye dengan karakter suara khas lintas dekade, hingga penulis lagu dan solois era modern seperti Melly Goeslaw dan Ari Lasso.',
                        foto: 'img/detail_chrisye_koesplus.jpg'
                    }
                ]
            },
            {
                file: 'GS__2277.JPG',
                nama: 'Lorong Legenda Rock: Eric Clapton, Queen & Freddie Mercury',
                desk: 'Lorong beratap neon warna-warni yang memamerkan gitar rock, kostum panggung Freddie Mercury, KISS, God Bless, dan Tony Q.',
                hadap: 45, gMaju: 8, eMaju: -6, gMundur: 185, eMundur: -6,
                info: [
                    {
                        g: 98, e: 8,
                        judul: 'Dinding Legenda Gitar & Rock: Eric Clapton, Queen & Deep Purple',
                        isi: 'Menghimpun gitar elektrik, piringan emas, dan dokumentasi konser ikon blues-rock dunia Eric Clapton, kuartet rock progresif-teatrikal Inggris Queen, serta pelopor hard rock Deep Purple, berdampingan dengan sejarah grup rock Indonesia God Bless.',
                        foto: 'img/GP__2275.JPG',
                        audio: 'audio/gitar_distorsi_rock.mp3',
                        labelAudio: 'Gitar Elektrik Distorsi Rock'
                    },
                    {
                        g: 252, e: 4,
                        judul: 'Figur Panggung Freddie Mercury, KISS & Tony Q Rastafara',
                        isi: 'Panggung figur musisi berkarakter visual kuat: Freddie Mercury dengan jubah mahkota ikonik tur Magic (1986), kostum zirah berduri khas grup glam-hard rock KISS, serta dokumentasi musisi reggae Indonesia Tony Q Rastafara.',
                        foto: 'img/detail_freddie_kiss.jpg',
                        audio: 'audio/ritme_reggae_rock.mp3',
                        labelAudio: 'Ritme Bass & Gitar Reggae'
                    }
                ]
            },
            {
                file: 'GS__2273.JPG',
                nama: 'Galeri Elvis Presley, Gitar Bertanda Tangan & Abbey Road',
                desk: "Ruang ikonik yang mempertemukan panggung Elvis Presley, etalase gitar bertanda tangan asli, dan diorama zebra cross Abbey Road.",
                hadap: 150, gMaju: 12, eMaju: -6, gMundur: 228, eMundur: -6,
                info: [
                    {
                        g: 78, e: 6,
                        judul: "King of Rock 'n' Roll: Elvis Presley",
                        isi: "Panggung merah berlampu sorot yang menampilkan figur Elvis Presley dalam balutan jumpsuit putih berhias permata era konser Las Vegas 1970-an. Sejak pertengahan 1950-an, Elvis memadukan rhythm and blues Afrika-Amerika dengan musik country dan gospel hingga melambungkan budaya Rock 'n' Roll ke seluruh dunia.",
                        foto: 'img/detail_elvis.jpg',
                        audio: 'audio/gitar_rock_n_roll.mp3',
                        labelAudio: "Riff Gitar Rock 'n' Roll"
                    },
                    {
                        g: 162, e: 6,
                        judul: 'Etalase Gitar Bertanda Tangan Asli (With Authentic Signature)',
                        isi: 'Deretan gitar elektrik dan akustik koleksi khusus yang membubuhkan tanda tangan asli para musisi dalam dan luar negeri, dilengkapi sertifikat keaslian serta potret Bob Marley di sisi kiri etalase.',
                        foto: 'img/detail_signed_guitars.jpg',
                        audio: 'audio/gitar_blues_akustik.mp3',
                        labelAudio: 'Gitar Akustik Blues'
                    },
                    {
                        g: 298, e: 4,
                        judul: 'Diorama Zebra Cross Abbey Road (The Beatles, 1969)',
                        isi: 'Rekonstruksi penyeberangan jalan di depan EMI Studios (kini Abbey Road Studios), London Utara, yang diabadikan fotografer Iain Macmillan pada 8 Agustus 1969 sebagai sampul album kesebelas The Beatles, Abbey Road.',
                        foto: 'img/detail_abbey_road.jpg'
                    }
                ]
            },
            {
                file: 'GS__2272.JPG',
                nama: "Zona Jazz New Orleans, Pohon Silsilah Rock & The Beatles",
                desk: "Panel edukasi akar Jazz New Orleans dan diagram pohon genre Rock 'n' Roll di dinding tengah, serta dinding memorabilia The Beatles.",
                hadap: 195, gMaju: 75, eMaju: -6, gMundur: 282, eMundur: -6,
                info: [
                    {
                        g: 188, e: 8,
                        judul: "Sejarah Jazz New Orleans & Silsilah Rock 'n' Roll",
                        isi: "Dua panel infografis besar yang memetakan kelahiran musik Jazz di New Orleans pada awal abad ke-20 dari pertemuan tradisi Afrika-Amerika, Ragtime, Blues, dan brass band menjadi era Swing, Bebop, Cool Jazz, hingga Fusion; serta bagan cabang evolusi Rock 'n' Roll sejak 1950-an.",
                        foto: 'img/detail_jazz_board.jpg',
                        audio: 'audio/jazz_new_orleans.mp3',
                        labelAudio: 'Ansambel Brass Jazz New Orleans'
                    },
                    {
                        g: 335, e: 10,
                        judul: 'Dinding Memorabilia & Piringan Emas The Beatles',
                        isi: 'Koleksi piringan hitam, piringan emas berbingkai, sampul album bersejarah, dan foto kuartet asal Liverpool (John Lennon, Paul McCartney, George Harrison, dan Ringo Starr) yang merevolusi teknik komposisi dan rekaman studio musik populer abad ke-20.',
                        foto: 'img/detail_beatles.jpg'
                    }
                ]
            },
            {
                file: 'GS__2271.JPG',
                nama: 'World Festival Jazz Stage & Jazz Bar (Menuju Lantai 3)',
                desk: 'Panggung biru World Festival Jazz Stage dan sudut klasik Jazz Bar di ujung Lantai 2. Klik panah maju untuk naik ke Lantai 3.',
                hadap: 165, gMaju: 112, eMaju: -6, gMundur: 268, eMundur: -6,
                info: [
                    {
                        g: 190, e: 6,
                        judul: 'Panggung World Festival Jazz Stage',
                        isi: 'Replika panggung festival jazz internasional lengkap dengan penataan instrumen band, saksofon, gitar hollow-body, piano, dan pencahayaan panggung biru.',
                        foto: 'img/detail_jazz_stage.jpg',
                        audio: 'audio/saksofon_jazz.mp3',
                        labelAudio: 'Saksofon Panggung Jazz'
                    },
                    {
                        g: 58, e: 6,
                        judul: 'Sudut Klasik Jazz Bar & Arsip Musik Blues',
                        isi: 'Ruang bertema klub jazz klasik yang memamerkan pemutar piringan hitam, radio tabung, foto legenda blues dan jazz seperti B.B. King dan Louis Armstrong, serta koleksi vinyl era 1940-an hingga 1960-an.',
                        foto: 'img/GP__2289.JPG',
                        audio: 'audio/blues_jazz_bar.mp3',
                        labelAudio: 'Harmonika & Musik Blues Klasik'
                    }
                ]
            }
        ]
    },
    {
        id: 'lt3',
        singkat: 'Lt. 3',
        lencana: 'Lantai 3',
        subSingkat: 'Klasik & Kotak Musik',
        judul: 'Galeri Piano Klasik, Gramofon, Kotak Musik Mekanik & Ruang Konser',
        deskripsi: 'Menjelajahi lantai tertinggi Museum Musik Dunia yang dikhususkan bagi instrumen klasik dan mekanik antik: piano tegak bersejarah, radio dan gramofon abad ke-20, kotak musik Polyphone 1857, hingga Ruang Konser Grand Piano Klasik.',
        warnaFallback: '#2f191d',
        thumbnail: 'img/detail_konser_klasik.jpg',
        fallbackThumbnail: 'img/GS__2227.JPG',
        utama: false,
        titik: [
            {
                file: 'GS__2230.JPG',
                nama: 'Galeri Piano Klasik Tegak & Lemari Audio Antik',
                desk: 'Titik awal Lantai 3 dengan barisan upright piano klasik di sepanjang dinding lengkung dan rak koleksi gramofon serta radio vintage.',
                hadap: 165, gMaju: 45, eMaju: -6, gMundur: 230, eMundur: -6,
                info: [
                    {
                        g: 172, e: 4,
                        judul: 'Deretan Piano Tegak Klasik (Upright Piano Antik)',
                        isi: 'Menampilkan koleksi baby piano dan upright piano klasik dengan ukiran kayu Eropa dari berbagai dekade. Berbeda dari grand piano yang merentangkan senar secara horizontal, upright piano menyusun rangka senar dan mekanik pemukul (action) secara vertikal agar hemat ruang namun tetap kaya resonansi.',
                        foto: 'img/detail_piano_klasik.jpg',
                        audio: 'audio/piano_tegak_antik.mp3',
                        labelAudio: 'Upright Piano Klasik (Ragtime 1908)'
                    },
                    {
                        g: 275, e: 4,
                        judul: 'Koleksi Gramofon & Radio Tabung Vintage (1920-1990)',
                        isi: 'Lemari arsip teknologi audio rumah tangga lintas generasi dari Eropa dan Amerika Serikat, mulai dari gramofon engkol berjarum baja, radio tabung vakum berbingkai kayu era 1920-an hingga 1950-an, hingga perangkat pemutar pita magnetik.',
                        foto: 'img/detail_gramofon_lt3.jpg',
                        audio: 'audio/gramofon_antik.mp3',
                        labelAudio: 'Rekaman Silinder Fonograf & Gramofon Kuno'
                    }
                ]
            },
            {
                file: 'GS__2229.JPG',
                nama: 'Aula Karpet Merah: Kotak Musik Mekanik & Organ Antik',
                desk: 'Aula pameran berkarpet merah yang menyimpan koleksi kotak musik mekanik (music box), Polyphone piringan logam, dan organ putar.',
                hadap: 115, gMaju: 75, eMaju: -6, gMundur: 248, eMundur: -6,
                info: [
                    {
                        g: 308, e: -2,
                        judul: 'Kotak Musik Mekanik (Polyphone 1857 & Orgue de Barbarie)',
                        isi: 'Lantai 3 menyimpan koleksi instrumen musik mekanik otomatis berumur lebih dari seabad. Setelah mekanisme sisir logam bernada dirintis pembuat jam Jenewa Antoine Favre-Salomon (1796), lahirlah Polyphone piringan logam berlubang tahun 1857 asal Prancis (cikal bakal jukebox) serta organ jalanan berpengkol seperti Orgue de Barbarie dan Le Ludion.',
                        foto: 'img/detail_music_box.jpg',
                        audio: 'audio/kotak_musik_polyphone.mp3',
                        labelAudio: 'Kotak Musik Piringan Polyphon Antik'
                    }
                ]
            },
            {
                file: 'GS__2227.JPG',
                nama: 'Ruang Konser Grand Piano Klasik (Titik Akhir Tur)',
                desk: 'Aula konser berlantai marmer dengan Grand Piano klasik dan panggung konduktor orkestra sebagai penutup seluruh rangkaian tur 3 lantai.',
                hadap: 235, gMaju: null, eMaju: -5, gMundur: 185, eMundur: -5,
                info: [
                    {
                        g: 252, e: 6,
                        judul: 'Mini Concert Hall & Grand Piano Klasik',
                        isi: 'Ruang konser puncak di Lantai 3 yang memadukan Grand Piano klasik hitam mengilap, figur konduktor di depan latar orkestra simfoni bertirai beludru merah, serta arsitektur klasik Eropa sebagai penutup perjalanan edukasi Museum Musik Dunia.',
                        foto: 'img/detail_konser_klasik.jpg',
                        audio: 'audio/konser_grand_piano.mp3',
                        labelAudio: 'Grand Piano Konser (Chopin Nocturne)'
                    }
                ]
            }
        ]
    }
];
