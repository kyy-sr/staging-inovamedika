import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import {
  Search,
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  Clock3,
  FileText,
  Download,
  BookOpen,
  Building2,
  Activity,
  ShieldCheck,
  Users,
  Database,
  Globe2,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import logoDefault from "./assets/logo-default.png";


/* =========================================================
   DATA
========================================================= */

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "news", label: "News" },
  { id: "insights", label: "Insights" },
  { id: "research", label: "Research" },
  { id: "case-studies", label: "Case Studies" },
  { id: "library", label: "Library" },
  { id: "events", label: "Events" },
  { id: "community", label: "Community" },
];

const RESEARCH_ITEMS = [
  { id: 1, category: "AI & Teknologi", tag: "AI READINESS INDEX", title: "AI Readiness Index 2026: Kesiapan Organisasi dalam Mengadopsi dan Mengembangkan Artificial Intelligence", desc: "Gambaran kesiapan organisasi dalam mengadopsi, mengembangkan, dan meningkatkan pemanfaatan AI untuk operasional, inovasi, produktivitas, dan pengambilan keputusan.", date: "18 September 2026", author: "Tim Editorial Inovamedika", design: "Quantitative benchmarking dan capability maturity assessment.", collection: ["Survei organisasi", "Assessment kesiapan teknologi", "Evaluasi strategi AI dan data infrastructure", "Evaluasi governance dan kesiapan tenaga kerja", "Benchmarking organisasi"], framework: ["AI Strategy", "Infrastructure", "Data", "Governance", "Talent", "Organizational Culture"], scope: ["Rumah sakit", "Klinik", "Laboratorium", "Perusahaan teknologi kesehatan", "Institusi pemerintahan dan organisasi pelayanan kesehatan"], outputs: ["AI Readiness Score", "AI Maturity Profile", "Organizational Readiness Assessment", "AI Implementation Gap Analysis", "AI Transformation Roadmap"], note: "Seluruh skor, assessment, dan hasil merupakan dummy content untuk kebutuhan desain website, bukan hasil penelitian aktual.", reference: "Cisco AI Readiness Index 2025 – Realizing the Value of AI", publisher: "Cisco · 2025", url: "https://www.cisco.com/c/dam/m/en_us/solutions/ai/readiness-index/2025-m10/documents/cisco-ai-readiness-index-2025-realizing-the-value-of-ai.pdf" },
  { id: 2, category: "Cybersecurity", tag: "CYBERSECURITY REPORT", title: "Cybersecurity Report 2026: Tren Ancaman Siber dan Kesiapan Keamanan Digital Indonesia", desc: "Gambaran perkembangan ancaman keamanan siber serta kesiapan organisasi dan masyarakat menghadapi risiko digital, termasuk ransomware, phishing, DDoS, dan ancaman berbasis AI.", date: "18 September 2026", author: "Tim Editorial Inovamedika", design: "Descriptive analysis menggunakan data sekunder dari laporan dan sumber keamanan siber.", collection: ["Laporan keamanan siber nasional dan internasional", "Threat intelligence", "Studi literatur dan laporan industri", "Statistik insiden", "Publikasi lembaga keamanan dan teknologi"], framework: ["Threat Landscape", "Cybersecurity Awareness", "Data Protection", "Identity & Access Management", "Network Security", "Incident Response", "Organizational Resilience", "Security Governance"], scope: ["Kondisi global, Asia Tenggara, dan Indonesia", "Ransomware, phishing, DDoS, malware, social engineering", "AI-enabled cyber threats", "Proyeksi tren ancaman 2026"], outputs: ["Cybersecurity Threat Landscape", "Threat Trend Analysis", "Risk Area Mapping", "Security Awareness Profile", "Cybersecurity Outlook 2026"], note: "Data, statistik, dan analisis merupakan dummy content untuk kebutuhan desain website dan bukan hasil penelitian Inovamedika.", reference: "Your Data Your Security: Laporan Keamanan Siber 2025 & Proyeksi 2026", publisher: "BLSDM Komdigi Yogyakarta · 2026", url: "https://bpsdm.komdigi.go.id/upt/yogyakarta/downloads/5/20260909113731-Buklet-Cyber-Security-2026.pdf" },
  { id: 3, category: "Digital Health", tag: "DIGITAL HEALTH REPORT", title: "Digital Health Transformation in Indonesia: Workforce Readiness, Education, and Digital Health Literacy", desc: "Membahas kesiapan SDM untuk transformasi kesehatan digital di Indonesia, dengan fokus pada kompetensi digital health dalam pendidikan tenaga kesehatan.", date: "18 September 2026", author: "Tim Editorial Inovamedika", design: "Studi kasus kualitatif mengenai pengembangan, implementasi, dan adopsi kurikulum digital health.", collection: ["Wawancara stakeholder", "Focus group discussion", "Studi dokumen dan analisis kebijakan", "Review kurikulum", "Data pilot implementation dan studi literatur"], framework: ["Digital Health Literacy", "Health Data Management", "Data Privacy", "Electronic Health Records", "Interoperability", "Digital Health Technology", "Digital Health Policy", "Workforce Readiness"], scope: ["Institusi pendidikan kesehatan", "Mahasiswa dan tenaga kesehatan", "Pemerintah dan organisasi profesi", "Institusi akademik dan stakeholder digital health"], outputs: ["Digital Health Workforce Profile", "Digital Health Literacy Assessment", "Curriculum Readiness Analysis", "Workforce Capability Gap", "Digital Health Education Roadmap"], note: "Artikel merupakan dummy content untuk desain website. Data dari sumber asli tetap menjadi hak dan tanggung jawab penerbitnya.", reference: "Digital Health Curriculum Reform in Indonesia", publisher: "Transform Health · 2025", url: "https://transformhealthcoalition.org/wp-content/uploads/2025/04/Digital-Health-Curriculum-Reform-in-Indonesia.pdf" },
  { id: 4, category: "Digital Health", tag: "REGIONAL DIGITALIZATION", title: "Regional Health Digitalization Report 2026: Digital Transformation and Health Innovation in Indonesia", desc: "Pemetaan inisiatif transformasi digital untuk sektor kesehatan dan pembangunan berkelanjutan di Indonesia, termasuk kolaborasi Indonesia–Australia.", date: "18 September 2026", author: "Tim Editorial Inovamedika", design: "Research project mapping dan thematic analysis berdasarkan sektor, lokasi, teknologi, dan tujuan implementasi.", collection: ["Profil dan proposal proyek penelitian", "Dokumentasi program", "Data lokasi dan deskripsi teknologi", "Informasi mitra penelitian", "Dokumentasi program KONEKSI"], framework: ["Digital Health", "Digital Infrastructure", "Data & Analytics", "Artificial Intelligence", "Digital Inclusion", "Healthcare Innovation", "Community Empowerment", "Policy & Governance"], scope: ["Digital healthcare, primary care, mental health", "Maternal health, nutrition, medical AI", "Health data dan community health technology", "Jawa, Bali, Sumatera, Kalimantan, Sulawesi, dan wilayah lain"], outputs: ["Regional Digital Health Map", "Research Project Landscape", "Technology Adoption Profile", "Regional Innovation Profile", "Digital Transformation Opportunity Map"], note: "Konten dan pemetaan merupakan dummy content untuk desain website. Informasi proyek asli merujuk pada publikasi sumber.", reference: "Digital Transformation in Health, Energy, and Food Security, including Blue Economy", publisher: "KONEKSI · Program Digital Transformation 2023–24", url: "https://koneksi-kpp.id/cdn/koneksi/file/1/7/0/digital-transformations-booklet-2026-version.pdf?1581166962" },
  { id: 5, category: "Smart Hospital", tag: "SMART HOSPITAL INDEX", title: "Smart Hospital Index 2026: Kesiapan dan Pengembangan Konsep Smart Hospital di Indonesia", desc: "Framework untuk memahami kesiapan rumah sakit dalam teknologi informasi, pengelolaan data, proses pelayanan, dan pengembangan kompetensi organisasi.", date: "18 September 2026", author: "Tim Editorial Inovamedika", design: "Assessment dan knowledge development melalui identifikasi kebutuhan, strategi pendampingan, dan evaluasi pemahaman stakeholder.", collection: ["Survei kebutuhan rumah sakit", "Wawancara manajemen", "Assessment teknologi dan digital maturity", "Pre-test/post-test", "Observasi proses dan review SIMRS"], framework: ["Digital Governance", "Hospital Information System", "Clinical Digitalization", "Smart Infrastructure", "Data Management", "Analytics & Decision Support", "Patient Experience", "Human Resources", "Innovation"], scope: ["Rumah sakit umum, khusus, pendidikan", "Rumah sakit swasta dan pemerintah", "Teknologi informasi, layanan, infrastruktur, data, SDM, manajemen, dan patient experience"], outputs: ["Smart Hospital Readiness Score", "Digital Maturity Profile", "Technology Gap Analysis", "Hospital Transformation Roadmap", "Smart Hospital Capability Map"], note: "Smart Hospital Index ini merupakan framework dummy untuk kebutuhan desain website, bukan indeks resmi institusi penelitian.", reference: "Seminar Smart Hospital sebagai Upaya Pendampingan Pengembangan RSK Mojowarno, Kabupaten Jombang", publisher: "Universitas Ciputra Surabaya · 2023", url: "https://jurnal.unimed.ac.id/2012/index.php/jpkm/article/download/40896/pdf" }
];

const TOPICS = [
  { id: "SATUSEHAT", label: "SATUSEHAT", icon: "➕" },
  { id: "BPJS", label: "BPJS", icon: "🌀" },
  { id: "RME", label: "RME", icon: "📋" },
  { id: "HL7 FHIR", label: "HL7 FHIR", icon: "🔥" },
  { id: "DICOM", label: "DICOM", icon: "🏥" },
  { id: "Cybersecurity", label: "Cybersecurity", icon: "🛡️" },
  { id: "REGULASI", label: "Regulasi", icon: "📜" },
  { id: "Akreditasi", label: "Akreditasi", icon: "🏅" },
];

const LIBRARY_ITEMS = [
  { id: 1, tag: "CHECKLIST", title: "Checklist Kesiapan Digitalisasi Rekam Medis dan Pelaporan Fasilitas Kesehatan", desc: "Alat bantu evaluasi awal kesiapan prosedur, SDM, infrastruktur, kualitas data, pelaporan, dan sistem informasi kesehatan.", publisher: "Inovamedika Knowledge Center", year: "2026", type: "Checklist", fileType: "PDF", pages: "32 halaman sumber", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80", description: "Checklist untuk assessment awal, audit internal, evaluasi SOP, dan persiapan transformasi dari proses manual menuju rekam medis elektronik.", summary: ["Tata kelola dan SOP", "Proses rekam medis dan pelaporan", "Infrastruktur digital dan kesiapan SDM", "Assessment, identifikasi gap, prioritas perbaikan, dan monitoring"] },
  { id: 2, tag: "EBOOK", title: "Panduan Memahami Kualitas Rumah Sakit: Dari Patient Experience hingga Digital Maturity", desc: "Pengantar dimensi kualitas rumah sakit, pengalaman pasien, PROMs, indikator mutu, benchmarking, dan kematangan digital.", publisher: "Inovamedika Knowledge Center", year: "2026", type: "Ebook", fileType: "PDF", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80", description: "Materi membahas bagaimana data dan indikator dapat membantu organisasi memahami kualitas layanan serta continuous improvement.", summary: ["Patient experience dan Patient-Reported Outcome Measures (PROMs)", "Clinical quality, operational quality, patient experience, digital capability", "Membaca benchmarking secara kontekstual", "Alur data hingga insight dan keputusan"] },
  { id: 3, tag: "INFOGRAPHIC", title: "Smart Hospital: 5 Pilar Transformasi Digital Rumah Sakit", desc: "Ringkasan visual pilar Smart Clinical, Smart Operations, Smart Patient, Smart Data, dan Smart Governance.", publisher: "Inovamedika Knowledge Center", year: "2026", type: "Infographic", fileType: "PDF", image: "https://images.unsplash.com/photo-151117auto=format&fit=crop&w=1200&q=80", description: "Infografis sebagai referensi singkat untuk memahami hubungan teknologi, SDM, tata kelola, proses, dan data dalam transformasi digital.", summary: ["Smart Clinical: SIMRS, RME, dan sistem klinis", "Smart Operations: otomatisasi dan dashboard", "Smart Patient: layanan digital dan pengalaman pasien", "Smart Data serta Smart Governance"] },
  { id: 4, tag: "TEMPLATE", title: "Template Assessment Kualitas dan Kesiapan SIMRS", desc: "Template evaluasi infrastruktur, aplikasi, SDM, proses bisnis, kualitas informasi, integrasi, dan dukungan manajemen.", publisher: "Inovamedika Knowledge Center", year: "2026", type: "Template", fileType: "PDF / DOCX", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80", description: "Dapat digunakan sebagai dasar evaluasi internal sebelum menyusun rencana pengembangan atau peningkatan SIMRS.", summary: ["Assessment infrastruktur dan modul SIMRS", "Penilaian kualitas informasi dan kesiapan SDM", "Integrasi/interoperabilitas dan assessment manajemen", "Identifikasi gap, action plan, dan executive summary"] },
  { id: 5, tag: "WHITEPAPER", title: "Smart Hospital 2026: Framework Kematangan Digital dan Teknologi Rumah Sakit", desc: "Framework konseptual kematangan Smart Hospital meliputi governance, teknologi klinis, data, operasi, pasien, keamanan, dan inovasi.", publisher: "Inovamedika Knowledge Center", year: "2026", type: "Whitepaper", fileType: "PDF", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80", description: "Framework dummy untuk Knowledge Center Inovamedika Digital Health, bukan metodologi resmi Newsweek atau Statista.", summary: ["Tujuh pilar dan domain assessment Smart Hospital", "Lima level maturity: Basic hingga Smart & Adaptive", "Roadmap: Foundation, Integration, Data, Intelligence, Continuous Improvement", "Teknologi + People + Process + Data + Governance"] },
];

const CASE_STUDIES = [
  {
    id: 1,
    tag: "KLINIK",
    title: "Digitalisasi Sistem Informasi Klinik",
    desc:
      "Transformasi proses pendaftaran, rekam medis, antrean, farmasi, dan administrasi melalui sistem informasi klinik yang terintegrasi.",

    author: "TIM EDITORIAL INOVAMEDIKA",
    date: "SEPTEMBER 18, 2026",

    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",

    industry: "Klinik Pratama",
    location: "Indonesia (Dummy Project)",
    client: "Klinik Pratama",
    duration: "3 Bulan",
    status: "Completed",

    solutions: [
      "SIM Klinik",
      "Electronic Medical Record (EMR)",
      "Appointment & Queue Management",
      "Pharmacy Management",
      "BPJS Integration",
      "Operational Dashboard",
    ],

    summary:
      "Sebuah klinik menghadapi kebutuhan untuk meningkatkan efisiensi pelayanan pasien karena proses pendaftaran, pemeriksaan, farmasi, dan administrasi masih menggunakan beberapa sistem yang belum terintegrasi.\n\nMelalui implementasi Integrated Clinic Information System, seluruh proses pelayanan pasien diintegrasikan dalam satu platform. Sistem membantu tenaga medis dan staf administrasi mengakses informasi pasien secara lebih cepat sekaligus meningkatkan visibilitas terhadap aktivitas operasional klinik.",

    challenges: [
      "Proses pendaftaran pasien masih membutuhkan input data berulang.",
      "Data rekam medis belum terintegrasi dengan proses pelayanan lainnya.",
      "Pengelolaan antrean pasien belum terpusat.",
      "Informasi ketersediaan obat sulit dipantau secara real-time.",
      "Proses administrasi dan pelaporan membutuhkan waktu cukup lama.",
      "Integrasi dengan layanan eksternal membutuhkan proses manual.",
    ],

    solutionDescription:
      "Klinik mengimplementasikan sistem informasi terintegrasi yang menghubungkan proses pelayanan pasien mulai dari pendaftaran hingga farmasi.\n\nSistem mencakup beberapa area utama, seperti:\n\n• Pendaftaran pasien baru dan pasien lama.\n• Manajemen antrean dan jadwal dokter.\n• Electronic Medical Record (EMR).\n• Pemeriksaan dan pencatatan hasil pelayanan.\n• Electronic prescription dan pelayanan farmasi.\n• Pengelolaan stok obat.\n• Integrasi layanan BPJS.\n• Laporan operasional dan manajemen.\n• Dashboard aktivitas pelayanan klinik.\n\nData pelayanan dapat digunakan oleh unit terkait sehingga proses administrasi dan pelayanan berjalan melalui sumber data yang lebih terintegrasi.",

    dashboard: {
      pelayanan: [
        "Jumlah Kunjungan Pasien",
        "Kunjungan Berdasarkan Poli",
        "Kunjungan Dokter",
        "Status Antrean",
        "Tren Kunjungan Pasien",
      ],
      farmasi: [
        "Resep Hari Ini",
        "Obat Terjual",
        "Stok Obat",
        "Obat dengan Stok Minimum",
        "Aktivitas Farmasi",
      ],
      manajemen: [
        "Pendapatan Harian",
        "Tren Kunjungan",
        "Produktivitas Dokter",
        "KPI Klinik",
      ],
    },

    implementationResults: [
      "Proses pendaftaran dan pelayanan menjadi lebih terstruktur.",
      "Informasi pasien dapat diakses melalui rekam medis elektronik.",
      "Monitoring antrean menjadi lebih mudah.",
      "Pengelolaan obat dan transaksi farmasi lebih terintegrasi.",
      "Pelaporan operasional menjadi lebih efisien.",
      "Informasi pelayanan dapat dipantau melalui dashboard.",
    ],

    successFactors: [
      "Pemetaan proses bisnis klinik.",
      "Integrasi antar unit pelayanan.",
      "Standarisasi data pasien dan pelayanan.",
      "Pelatihan pengguna.",
      "Keterlibatan dokter dan staf dalam proses implementasi.",
      "Evaluasi sistem secara berkala.",
    ],

    lessonsLearned:
      "Digitalisasi klinik perlu dilakukan dengan mempertimbangkan alur pelayanan secara menyeluruh. Sistem yang baik tidak hanya menggantikan proses manual, tetapi juga memastikan informasi pasien, pelayanan, farmasi, dan administrasi dapat terhubung sehingga setiap unit bekerja menggunakan data yang konsisten.",

    keyOutcomes: [
      {
        area: "Pelayanan",
        impact: "Proses pelayanan pasien lebih terstruktur",
      },
      {
        area: "Rekam Medis",
        impact: "Informasi pasien tersimpan dalam EMR",
      },
      {
        area: "Antrean",
        impact: "Monitoring antrean lebih mudah",
      },
      {
        area: "Farmasi",
        impact: "Data resep dan stok lebih terintegrasi",
      },
      {
        area: "Pelaporan",
        impact: "Laporan operasional lebih efisien",
      },
    ],

    technologies: [
      "SIM Klinik",
      "Electronic Medical Record (EMR)",
      "BPJS Integration",
      "Pharmacy Management",
      "Queue Management",
      "Operational Dashboard",
    ],
  },

  {
    id: 2,
    tag: "LABORATORIUM",
    title: "Laboratory Information System",
    desc:
      "Digitalisasi alur pemeriksaan laboratorium mulai dari pendaftaran dan pengambilan sampel hingga validasi dan distribusi hasil.",

    author: "TIM EDITORIAL INOVAMEDIKA",
    date: "SEPTEMBER 18, 2026",

    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",

    industry: "Laboratorium Klinik",
    location: "Indonesia (Dummy Project)",
    client: "Laboratorium Klinik",
    duration: "4 Bulan",
    status: "Completed",

    solutions: [
      "Laboratory Information System (LIS)",
      "Laboratory Workflow Management",
      "Electronic Medical Record",
      "Result Management",
      "Inventory Management",
      "Business Intelligence",
    ],

    summary:
      "Sebuah laboratorium klinik membutuhkan sistem yang dapat mengintegrasikan proses pemeriksaan mulai dari pendaftaran pasien, pengambilan sampel, pemeriksaan laboratorium, validasi hasil, hingga penyampaian hasil kepada pasien.\n\nImplementasi Laboratory Information System (LIS) membantu menghubungkan setiap tahapan proses laboratorium dalam satu sistem sehingga informasi pemeriksaan dapat dikelola secara lebih terstruktur dan mudah dipantau.",

    challenges: [
      "Data pasien dan pemeriksaan berasal dari beberapa sumber.",
      "Pencatatan sampel masih membutuhkan proses manual.",
      "Status pemeriksaan sulit dipantau oleh petugas.",
      "Validasi hasil membutuhkan koordinasi antar petugas.",
      "Pengelolaan stok reagen belum terintegrasi.",
      "Penyusunan laporan pemeriksaan membutuhkan waktu.",
    ],

    solutionDescription:
      "Laboratorium mengimplementasikan Laboratory Information System (LIS) untuk mengintegrasikan seluruh alur pemeriksaan laboratorium.\n\nSistem mencakup beberapa area utama, seperti:\n\n• Pendaftaran dan order pemeriksaan.\n• Pengelolaan data pasien.\n• Barcode dan identifikasi sampel.\n• Monitoring status pemeriksaan.\n• Input dan validasi hasil laboratorium.\n• Pencetakan dan distribusi hasil pemeriksaan.\n• Pengelolaan stok reagen dan bahan laboratorium.\n• Laporan pemeriksaan.\n• Dashboard operasional laboratorium.\n\nSistem juga dapat dirancang untuk mendukung integrasi dengan sistem informasi fasilitas kesehatan lainnya.",

    dashboard: {
      pemeriksaan: [
        "Total Pemeriksaan",
        "Pemeriksaan Hari Ini",
        "Pemeriksaan Berdasarkan Jenis",
        "Status Sampel",
        "Turnaround Time (TAT)",
      ],
      laboratorium: [
        "Sampel Masuk",
        "Sampel Selesai",
        "Sampel Pending",
        "Pemeriksaan per Unit",
        "Produktivitas Petugas",
      ],
      manajemen: [
        "Tren Pemeriksaan",
        "Volume Pemeriksaan",
        "Utilisasi Laboratorium",
        "Penggunaan Reagen",
        "KPI Laboratorium",
      ],
    },

    implementationResults: [
      "Alur pemeriksaan lebih terstruktur.",
      "Status sampel lebih mudah dipantau.",
      "Proses input dan validasi hasil lebih efisien.",
      "Risiko duplikasi pencatatan dapat dikurangi.",
      "Monitoring penggunaan reagen menjadi lebih mudah.",
      "Manajemen memperoleh informasi operasional melalui dashboard.",
    ],

    successFactors: [
      "Standardisasi alur pemeriksaan laboratorium.",
      "Identifikasi sampel yang konsisten.",
      "Integrasi antara order dan hasil pemeriksaan.",
      "Pengelolaan data yang terstruktur.",
      "Pelatihan petugas laboratorium.",
      "Monitoring kualitas data secara berkala.",
    ],

    lessonsLearned:
      "Sistem laboratorium yang efektif membutuhkan integrasi antara proses administratif dan proses teknis pemeriksaan. Selain mempercepat pengelolaan hasil, sistem harus mampu menjaga konsistensi identitas pasien, sampel, pemeriksaan, dan hasil agar informasi yang dihasilkan dapat digunakan dengan baik oleh tenaga kesehatan maupun manajemen.",

    keyOutcomes: [
      {
        area: "Workflow",
        impact: "Proses pemeriksaan lebih terstruktur",
      },
      {
        area: "Sampel",
        impact: "Monitoring status sampel lebih mudah",
      },
      {
        area: "Hasil",
        impact: "Input dan validasi hasil lebih efisien",
      },
      {
        area: "Inventory",
        impact: "Pengelolaan reagen lebih terkontrol",
      },
      {
        area: "Reporting",
        impact: "Laporan pemeriksaan lebih mudah dibuat",
      },
    ],

    technologies: [
      "Laboratory Information System (LIS)",
      "Electronic Medical Record",
      "Barcode Integration",
      "Result Management",
      "Inventory Management",
      "Business Intelligence Dashboard",
    ],
  },

  {
    id: 3,
    tag: "RADIOLOGI",
    title: "Digital Radiology & PACS Integration",
    desc:
      "Integrasi workflow radiologi, medical imaging, PACS, dan rekam medis untuk mendukung pengelolaan pemeriksaan secara digital.",

    author: "TIM EDITORIAL INOVAMEDIKA",
    date: "SEPTEMBER 18, 2026",

    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80",

    industry: "Layanan Radiologi",
    location: "Indonesia (Dummy Project)",
    client: "Layanan Radiologi",
    duration: "5 Bulan",
    status: "Completed",

    solutions: [
      "Radiology Information System (RIS)",
      "Picture Archiving and Communication System (PACS)",
      "DICOM Integration",
      "Electronic Medical Record",
      "Reporting System",
      "Radiology Dashboard",
    ],

    summary:
      "Sebuah unit radiologi membutuhkan sistem yang mampu mengelola pemeriksaan pencitraan medis secara lebih terintegrasi. Data pemeriksaan berasal dari berbagai modalitas seperti X-Ray, CT Scan, dan USG sehingga diperlukan mekanisme untuk menghubungkan hasil pemeriksaan dengan informasi pasien dan laporan radiologi.\n\nMelalui implementasi Digital Radiology & PACS Integration, informasi pemeriksaan radiologi dapat dikelola secara digital dan dihubungkan dengan sistem informasi kesehatan yang digunakan oleh fasilitas pelayanan kesehatan.",

    challenges: [
      "Data pemeriksaan berasal dari berbagai perangkat.",
      "Hasil pencitraan belum terpusat.",
      "Pencarian pemeriksaan sebelumnya membutuhkan waktu.",
      "Informasi pasien dan hasil radiologi belum sepenuhnya terintegrasi.",
      "Proses distribusi hasil masih membutuhkan langkah manual.",
      "Monitoring beban kerja radiologi belum optimal.",
    ],

    solutionDescription:
      "Implementasi dilakukan dengan mengintegrasikan RIS dan PACS untuk mengelola workflow pemeriksaan radiologi dan penyimpanan citra medis.\n\nSistem mencakup beberapa area utama, seperti:\n\n• Registrasi dan order pemeriksaan radiologi.\n• Integrasi perangkat menggunakan standar DICOM.\n• Penyimpanan dan pengelolaan citra medis melalui PACS.\n• Monitoring status pemeriksaan.\n• Pelaporan hasil radiologi.\n• Integrasi hasil pemeriksaan dengan rekam medis elektronik.\n• Pencarian riwayat pemeriksaan pasien.\n• Dashboard operasional radiologi.\n\nDengan integrasi tersebut, dokter dan petugas dapat mengakses informasi pemeriksaan dari sistem yang terhubung tanpa harus bergantung pada proses pencatatan manual.",

    dashboard: {
      pemeriksaan: [
        "Jumlah Pemeriksaan Radiologi",
        "Pemeriksaan X-Ray",
        "Pemeriksaan CT Scan",
        "Pemeriksaan USG",
        "Pemeriksaan MRI",
        "Status Pemeriksaan",
      ],
      workflow: [
        "Order Masuk",
        "Pemeriksaan Berlangsung",
        "Pemeriksaan Selesai",
        "Reporting Pending",
        "Turnaround Time (TAT)",
      ],
      manajemen: [
        "Volume Pemeriksaan",
        "Tren Pemeriksaan",
        "Produktivitas Radiolog",
        "Utilisasi Modalitas",
        "KPI Radiologi",
      ],
    },

    implementationResults: [
      "Akses terhadap citra medis menjadi lebih terstruktur.",
      "Riwayat pemeriksaan pasien lebih mudah ditelusuri.",
      "Workflow pemeriksaan radiologi lebih terorganisasi.",
      "Distribusi hasil pemeriksaan menjadi lebih efisien.",
      "Integrasi perangkat radiologi menjadi lebih terstandarisasi.",
      "Manajemen memperoleh informasi operasional melalui dashboard.",
    ],

    successFactors: [
      "Standardisasi komunikasi menggunakan DICOM.",
      "Integrasi RIS dan PACS.",
      "Pemetaan workflow radiologi.",
      "Integrasi dengan sistem informasi rumah sakit.",
      "Ketersediaan infrastruktur penyimpanan.",
      "Pelatihan radiolog dan petugas terkait.",
    ],

    lessonsLearned:
      "Digitalisasi radiologi membutuhkan integrasi antara perangkat medis, sistem informasi, dan workflow tenaga kesehatan. Penggunaan standar seperti DICOM menjadi bagian penting dalam memastikan informasi pencitraan dapat dipertukarkan antara berbagai perangkat dan sistem secara konsisten.",

    keyOutcomes: [
      {
        area: "Imaging",
        impact: "Citra medis dikelola secara digital",
      },
      {
        area: "Workflow",
        impact: "Proses pemeriksaan lebih terstruktur",
      },
      {
        area: "Interoperability",
        impact: "Perangkat mendukung komunikasi berbasis DICOM",
      },
      {
        area: "Reporting",
        impact: "Pelaporan hasil lebih terintegrasi",
      },
      {
        area: "Monitoring",
        impact: "Aktivitas radiologi dapat dipantau melalui dashboard",
      },
    ],

    technologies: [
      "Radiology Information System (RIS)",
      "Picture Archiving and Communication System (PACS)",
      "DICOM",
      "Electronic Medical Record",
      "Digital Imaging",
      "Radiology Dashboard",
    ],
  },

  {
    id: 4,
    tag: "RUMAH SAKIT",
    title: "Smart Hospital Dashboard & Business Intelligence",
    desc:
      "Dashboard rumah sakit terintegrasi untuk membantu manajemen memantau indikator pelayanan, kapasitas, dan operasional melalui data yang terpusat.",

    author: "TIM EDITORIAL INOVAMEDIKA",
    date: "SEPTEMBER 18, 2026",

    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",

    industry: "Rumah Sakit Umum",
    location: "Indonesia (Dummy Project)",
    client: "Rumah Sakit Umum",
    duration: "4 Bulan",
    status: "Completed",

    solutions: [
      "SIMRS iHospital",
      "Executive Dashboard",
      "Business Intelligence",
      "Data Analytics",
      "Real-time Monitoring",
    ],

    summary:
      "Sebuah rumah sakit menghadapi tantangan dalam memantau operasional secara menyeluruh karena informasi berasal dari berbagai sistem dan laporan manual. Kondisi tersebut menyebabkan proses pengambilan keputusan menjadi lebih lambat, terutama ketika manajemen membutuhkan data terkini mengenai pelayanan, kapasitas, maupun kinerja operasional.\n\nMelalui implementasi Smart Hospital Dashboard, data dari berbagai modul SIMRS diintegrasikan ke dalam satu dashboard yang menampilkan informasi secara real-time. Dashboard ini membantu pimpinan rumah sakit memonitor indikator utama pelayanan dan operasional melalui visualisasi yang lebih mudah dipahami.",

    challenges: [
      "Data operasional tersebar di berbagai modul dan sulit dikonsolidasikan.",
      "Penyusunan laporan manajemen masih dilakukan secara manual.",
      "Monitoring indikator pelayanan membutuhkan waktu yang lama.",
      "Informasi yang diterima manajemen tidak selalu mencerminkan kondisi terkini.",
      "Pengambilan keputusan sering bergantung pada laporan periodik.",
    ],

    solutionDescription:
      "Rumah sakit mengembangkan dashboard operasional yang mengintegrasikan data dari berbagai layanan, sehingga informasi dapat dipantau melalui satu tampilan yang terpusat.\n\nDashboard mencakup beberapa area utama, seperti:\n\n• Bed Occupancy Rate (BOR) dan ketersediaan tempat tidur.\n• Jumlah kunjungan pasien rawat jalan dan rawat inap.\n• Status pelayanan Instalasi Gawat Darurat (IGD).\n• Aktivitas kamar operasi.\n• Pemeriksaan laboratorium dan radiologi.\n• Monitoring antrean pelayanan.\n• Pendapatan dan indikator operasional harian.\n• Dashboard eksekutif untuk pimpinan rumah sakit.\n\nSeluruh data diperbarui secara berkala sehingga memberikan gambaran kondisi operasional yang lebih aktual.",

    dashboard: {
      operasional: [
        "Bed Occupancy Rate (BOR)",
        "Average Length of Stay (ALOS)",
        "Turn Over Interval (TOI)",
        "Bed Turn Over (BTO)",
      ],
      pelayanan: [
        "Kunjungan Rawat Jalan",
        "Rawat Inap",
        "IGD",
        "Kamar Operasi",
        "Laboratorium",
        "Radiologi",
      ],
      manajemen: [
        "Pendapatan Harian",
        "Tren Kunjungan",
        "Utilisasi Tempat Tidur",
        "Dashboard KPI Rumah Sakit",
      ],
    },

    implementationResults: [
      "Monitoring operasional menjadi lebih cepat melalui satu dashboard terintegrasi.",
      "Manajemen memperoleh informasi yang lebih mudah dipahami melalui visualisasi data.",
      "Proses penyusunan laporan menjadi lebih efisien.",
      "Koordinasi antar unit meningkat karena menggunakan sumber data yang sama.",
      "Pengambilan keputusan dapat dilakukan berdasarkan informasi yang lebih aktual.",
    ],

    successFactors: [
      "Integrasi data dari berbagai modul SIMRS.",
      "Standarisasi indikator operasional.",
      "Kualitas data yang konsisten.",
      "Keterlibatan manajemen dalam penyusunan kebutuhan dashboard.",
      "Evaluasi berkala terhadap indikator yang ditampilkan.",
    ],

    lessonsLearned:
      "Implementasi dashboard bukan hanya mengenai visualisasi data, tetapi juga memastikan bahwa data yang digunakan memiliki kualitas yang baik dan dapat dipercaya. Dashboard yang efektif harus menyajikan informasi yang relevan, mudah dipahami, dan mendukung proses pengambilan keputusan di berbagai tingkat manajemen.",

    keyOutcomes: [
      {
        area: "Monitoring Operasional",
        impact: "Informasi lebih mudah dipantau melalui dashboard terintegrasi",
      },
      {
        area: "Pelaporan",
        impact: "Penyusunan laporan menjadi lebih efisien",
      },
      {
        area: "Pengambilan Keputusan",
        impact: "Didukung oleh data operasional yang lebih aktual",
      },
      {
        area: "Koordinasi",
        impact: "Antar unit menggunakan sumber data yang sama",
      },
      {
        area: "Transparansi",
        impact: "KPI operasional lebih mudah dimonitor oleh manajemen",
      },
    ],

    technologies: [
      "Role-based Access Control (RBAC)",
      "SIMRS",
      "Business Intelligence Dashboard",
      "Data Warehouse",
      "Real-time Analytics",
      "Executive Dashboard",
    ],
  },
];
const CASE_STUDY_CATEGORIES = [
  { id: "ALL", label: "Semua" },
  { id: "RUMAH SAKIT", label: "Rumah Sakit" },
  { id: "KLINIK", label: "Klinik" },
  { id: "LABORATORIUM", label: "Laboratorium" },
  { id: "RADIOLOGI", label: "Radiologi" },
];


/* =========================================================
   REVEAL
========================================================= */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

/* =========================================================
   NAVBAR
========================================================= */

function Navbar({ activeTab, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const navigate = (id) => {
    onNavigate(id);
    setMobileOpen(false);
    setMoreOpen(false);
  };



  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-7">
        <div className="relative h-[68px] flex items-center justify-center">

          {/* LOGO - tetap di kiri */}
          <button
            onClick={() => navigate('home')}
            className="absolute left-0 top-1/2 -translate-y-1/2 shrink-0 flex items-center"
            aria-label="Go to Home"
          >
            <img
              src={logoDefault}
              alt="Inova Medika"
              className="h-[40px] w-auto object-contain"
            />
          </button>

          {/* DESKTOP NAV - CENTER */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`px-3.5 py-2.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors duration-200 ${activeTab === item.id ? 'bg-emerald-100 text-emerald-900' : 'bg-transparent text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'}`}
              >
                {item.label}
              </button>
            ))}

            {/* MORE */}
            <div className="relative ml-1">
              <button
                onClick={() => setMoreOpen((value) => !value)}
                className={`relative z-10 inline-flex items-center gap-1 px-3.5 py-2.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors duration-300 ${
                  moreOpen
                    ? 'bg-emerald-100 text-emerald-900'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-800'
                }`}
              >
                More
                <span className={`text-[11px] transition-transform duration-300 ${moreOpen ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>

              {moreOpen && (
                <div className="absolute right-0 top-[46px] w-[170px] overflow-hidden rounded-xl border border-emerald-100 bg-emerald-950 shadow-xl animate-[fadeIn_.2s_ease-out]">
                  <button
                    onClick={() => navigate('knowledge-center')}
                    className="block w-full px-4 py-3 text-left text-[10px] font-semibold text-white hover:bg-emerald-900 transition"
                  >
                    Knowledge Center
                  </button>
                  <button
                    onClick={() => navigate('digital-health-talk')}
                    className="block w-full px-4 py-3 text-left text-[10px] font-semibold text-white hover:bg-emerald-900 transition"
                  >
                    Digital Health Talk
                  </button>
                  <button
                    onClick={() => navigate('about')}
                    className="block w-full px-4 py-3 text-left text-[10px] font-semibold text-white hover:bg-emerald-900 transition"
                  >
                    About
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* MOBILE */}
          <button
            className="absolute right-0 lg:hidden p-2 text-slate-700"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* MOBILE NAV */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-[760px] opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-3 border-t border-slate-100 grid gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`text-left px-4 py-3 rounded-lg text-sm transition ${
                  activeTab === item.id
                    ? 'bg-emerald-100 text-emerald-900 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-2">
              <button
                onClick={() => setMoreOpen((value) => !value)}
                className="w-full flex items-center justify-between text-left px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50"
              >
                <span>More</span>
                <span className={moreOpen ? 'rotate-180' : ''}>▾</span>
              </button>

              {moreOpen && (
                <div className="ml-3 mt-1 border-l-2 border-emerald-100 pl-2 grid gap-1">
                  <button
                    onClick={() => navigate('knowledge-center')}
                    className="text-left px-3 py-2 rounded-lg text-xs text-slate-500 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    Knowledge Center
                  </button>
                  <button
                    onClick={() => navigate('digital-health-talk')}
                    className="text-left px-3 py-2 rounded-lg text-xs text-slate-500 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    Digital Health Talk
                  </button>
                  <button
                    onClick={() => navigate('about')}
                    className="text-left px-3 py-2 rounded-lg text-xs text-slate-500 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    About
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   HERO
========================================================= */

function ImageHero({ type, onBack }) {
  const configs = {
    library: { image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=80", eyebrow:"KNOWLEDGE CENTER", title:<>Healthcare<br/><span className="text-emerald-300">Library Resources</span></>, desc:"Kumpulan referensi, standar, regulasi, dan publikasi yang relevan dengan transformasi digital healthcare." },
    "case-studies": { image:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80", eyebrow:"SUCCESS STORIES", title:<>Healthcare Transformation<br/><span className="text-emerald-300">Case Studies</span></>, desc:"Pelajari bagaimana berbagai fasilitas kesehatan di Indonesia berhasil melakukan digitalisasi operasional dan integrasi layanan medis bersama solusi kami." },
    research: { image:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=80", eyebrow:"INOVAMEDIKA · RESEARCH", title:<>Riset & insight untuk<br/><span className="text-emerald-300">transformasi kesehatan</span></>, desc:"Jelajahi ringkasan kajian, framework, dan referensi seputar AI, keamanan siber, digital health, serta smart hospital." },
    "knowledge-center": { image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=80", eyebrow:"KNOWLEDGE CENTER", title:<>Knowledge for a<br/><span className="text-emerald-300">Smarter Healthcare Future</span></>, desc:"Temukan panduan, checklist, ebook, infografik, template, dan referensi untuk mendukung transformasi digital fasilitas kesehatan." },
    news: { image:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1800&q=80", eyebrow:"INOVAMEDIKA · NEWS", title:<>Latest Updates &<br/><span className="text-emerald-300">Digital Health Stories</span></>, desc:"Ikuti kabar terbaru, aktivitas, dan perkembangan seputar Inovamedika serta ekosistem digital healthcare." },
    insights: { image:"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80", eyebrow:"INOVAMEDIKA · INSIGHTS", title:<>Perspectives for a<br/><span className="text-emerald-300">Smarter Healthcare Future</span></>, desc:"Temukan perspektif, analisis, dan gagasan mengenai teknologi, data, serta transformasi layanan kesehatan digital." },
    events: { image:"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1800&q=80", eyebrow:"INOVAMEDIKA · EVENTS", title:<>Event<br/><span className="text-emerald-300">Learn, Connect, and Transform Healthcare Together</span></>, desc:"Temukan berbagai webinar atau training yang dirancang untuk mendukung transformasi digital dan peningkatan kompetensi di sektor kesehatan" },
    community: { image:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80", eyebrow:"INOVAMEDIKA · COMMUNITY", title:<>Tempat Digital Health Indonesia<br/><span className="text-emerald-300">Terhubung</span></>, desc:"Diskusi, berbagi wawasan, dan solusi transformasi dengan komunitas digital health." },
    "digital-health-talk": { image:"https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1800&q=80", eyebrow:"INOVAMEDIKA · DIGITAL HEALTH TALK", title:<>Archives <span className="text-emerald-300">Digital Health Talk</span></>, desc:"Kumpulan episode Digital Health Talk yang membahas transformasi digital, interoperabilitas, data, keamanan informasi, dan kesiapan rumah sakit." },
    about: { image:"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=80", eyebrow:"INOVAMEDIKA DIGITAL HEALTH", title:<>Technology, Knowledge &<br/><span className="text-emerald-300">Healthcare Transformation</span></>, desc:"Mengenal Inovamedika Digital Health dan ruang informasi, pengetahuan, serta kolaborasi untuk transformasi kesehatan." },
  };
  const config=configs[type]||configs.library;
  return <section className="relative min-h-[300px] lg:min-h-[350px] overflow-hidden"><div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms]" style={{backgroundImage:`url('${config.image}')`}}/><div className="absolute inset-0 bg-slate-950/80"/><div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-slate-950/30"/><div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20 flex items-center min-h-[300px] lg:min-h-[350px]"><div className="mx-auto flex max-w-5xl flex-col items-center text-center text-white"><div className="mb-4 text-[11px] font-bold tracking-[0.22em] uppercase text-emerald-300">{config.eyebrow}</div><h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">{config.title}</h1><p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-200 lg:text-base">{config.desc}</p>{onBack&&<button onClick={onBack} className="mt-7 inline-flex items-center gap-2 text-sm text-white transition hover:text-emerald-300"><ArrowLeft size={16}/>Kembali</button>}</div></div></section>;
}

/* =========================================================
   TOPIC FILTER
========================================================= */

function TopicFilter({ selected, onSelect }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onSelect("ALL")}
        className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold border transition ${
          selected === "ALL"
            ? "bg-emerald-700 text-white border-emerald-700"
            : "bg-white text-slate-600 border-slate-200 hover:border-emerald-300"
        }`}
      >
        Semua
      </button>

      {TOPICS.map((topic) => (
        <button
          key={topic.id}
          onClick={() => onSelect(topic.id)}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold border transition ${
            selected === topic.id
              ? "bg-emerald-700 text-white border-emerald-700"
              : "bg-white text-slate-600 border-slate-200 hover:border-emerald-300"
          }`}
        >
          {topic.label}
        </button>
      ))}
    </div>
  );
}

/* =========================================================
   LIBRARY CARD
========================================================= */

function LibraryCard({ item, onReadMore }) {
  const [ref, visible] = useReveal();

  return (
    <article
      ref={ref}
      className={`group bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5"
      }`}
    >
      <div className="h-44 overflow-hidden relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />

        <div className="absolute left-4 bottom-4">
          <span className="px-2.5 py-1 rounded-full bg-white/95 text-emerald-700 text-[10px] font-bold tracking-wide">
            {item.tag}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-3">
          <span>{item.publisher}</span>
          <span>•</span>
          <span>{item.year}</span>
        </div>

        <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 min-h-[46px]">
          {item.title}
        </h3>

        <p className="mt-3 text-xs text-slate-500 leading-relaxed line-clamp-3 min-h-[54px]">
          {item.desc}
        </p>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <FileText size={13} />
            {item.fileType} · {item.pages}
          </div>

          <button
            onClick={() => onReadMore(item)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition"
          >
            Read More
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   CASE STUDY CARD
========================================================= */

function CaseStudyCard({ item, onReadMore }) {
  const [ref, visible] = useReveal();

  return (
    <article
      ref={ref}
      className={`group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-xl ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
    >
      <div className="h-52 overflow-hidden relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1.5 bg-white/95 text-emerald-700 rounded-full text-[10px] font-bold tracking-wide">
            {item.tag}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-[10px] text-slate-400 uppercase tracking-wide">
          <span>{item.author}</span>
          <span>•</span>
          <span>{item.date}</span>
        </div>

        <h3 className="mt-3 text-lg font-bold text-slate-900 leading-snug">
          {item.title}
        </h3>

        <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-3">
          {item.desc}
        </p>

        <button
          onClick={() => onReadMore(item)}
          className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition"
        >
          Read Case Study
          <ArrowRight size={14} />
        </button>
      </div>
    </article>
  );
}

/* =========================================================
   FILTER BAR
========================================================= */

function FilterBar({ search, setSearch, total }) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
      <div>
        <p className="text-xs text-slate-400">
          Menampilkan{" "}
          <span className="font-bold text-slate-700">
            {total}
          </span>{" "}
          resources
        </p>
      </div>

      <div className="relative w-full lg:w-[300px]">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search resources..."
          className="w-full h-10 pl-10 pr-4 rounded-xl border border-slate-200 outline-none text-xs text-slate-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
        />
      </div>
    </div>
  );
}

/* =========================================================
   LIBRARY PAGE
========================================================= */

function LibraryPage({ onReadMore }) {
  const [topic, setTopic] = useState("ALL");
  const [search, setSearch] = useState("");

  const filtered = LIBRARY_ITEMS.filter((item) => {
    const matchTopic =
      topic === "ALL" ||
      item.tag === topic ||
      item.title.toLowerCase().includes(topic.toLowerCase());

    const keyword = search.toLowerCase();

    const matchSearch =
      !keyword ||
      item.title.toLowerCase().includes(keyword) ||
      item.desc.toLowerCase().includes(keyword) ||
      item.publisher.toLowerCase().includes(keyword);

    return matchTopic && matchSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <ImageHero type="library" />

      <main className="max-w-[1440px] mx-auto px-5 lg:px-8 py-10 lg:py-12">
        <div className="mb-7">
          <TopicFilter
            selected={topic}
            onSelect={setTopic}
          />
        </div>

        <FilterBar
          search={search}
          setSearch={setSearch}
          total={filtered.length}
        />

        <div className="mt-7 grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <LibraryCard
              key={item.id}
              item={item}
              onReadMore={onReadMore}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <EmptyState text="Tidak ada resource yang sesuai dengan pencarian." />
        )}
      </main>
    </div>
  );
}

/* =========================================================
   LIBRARY DETAIL
========================================================= */

function LibraryDetail({ item, onBack }) {
  if (!item) return null;

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8 py-5">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-emerald-700 transition"
          >
            <ArrowLeft size={15} />
            Back to Library
          </button>
        </div>
      </div>

      <main className="max-w-[1440px] mx-auto px-5 lg:px-8 py-7 lg:py-9">
        <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr]">
            <div className="relative min-h-[230px] lg:min-h-[280px]">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-slate-950/35" />

              <div className="absolute left-5 top-5">
                <span className="px-3 py-1.5 rounded-full bg-white text-emerald-700 text-[10px] font-bold tracking-wide">
                  {item.tag}
                </span>
              </div>
            </div>

            <div className="p-6 lg:p-7 xl:p-8">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-400 mb-3">
                <span>{item.publisher}</span>
                <span>•</span>
                <span>{item.year}</span>
              </div>

              <h1 className="text-2xl lg:text-3xl xl:text-[34px] font-bold tracking-tight leading-[1.12] text-slate-900 max-w-4xl">
                {item.title}
              </h1>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-4xl">
                {item.desc}
              </p>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5">
                <InfoCard
                  icon={<BookOpen size={14} />}
                  label="Kategori"
                  value={item.type}
                />

                <InfoCard
                  icon={<Building2 size={14} />}
                  label="Penerbit"
                  value={item.publisher}
                />

                <InfoCard
                  icon={<Clock3 size={14} />}
                  label="Tahun"
                  value={item.year}
                />

                <InfoCard
                  icon={<FileText size={14} />}
                  label="Format"
                  value={item.fileType}
                />

                <InfoCard
                  icon={<Globe2 size={14} />}
                  label="Bahasa"
                  value={item.language}
                />

                <InfoCard
                  icon={<FileText size={14} />}
                  label="Halaman"
                  value={item.pages}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-7 grid lg:grid-cols-[minmax(0,1fr)_290px] xl:grid-cols-[minmax(0,1fr)_320px] gap-6 items-start">
          <article className="space-y-5">

            <DetailSection title="Deskripsi">
              <p className="text-sm text-slate-600 leading-7">
                {item.description}
              </p>

              <EditorialNote text={item.editorialNote} />
            </DetailSection>

            <DetailSection
              title="Ringkasan Dokumen"
              subtitle="Poin-poin utama yang dibahas dalam publikasi."
            >
              <div className="grid md:grid-cols-2 gap-2.5">
                {item.summary.map((point, index) => (
                  <div
                    key={index}
                    className="flex gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-emerald-600 shrink-0 mt-0.5"
                    />

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </DetailSection>

            <DetailSection
              title="Cakupan Pembahasan"
              subtitle="Struktur utama dan area pembahasan dalam dokumen."
            >
              <div className="space-y-2.5">
                {item.scope.map((section, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-xl overflow-hidden"
                  >
                    <div className="px-4 py-3 bg-slate-50 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                        {section.number ||
                          String(index + 1).padStart(2, "0")}
                      </div>

                      <h3 className="font-bold text-sm text-slate-800">
                        {section.title}
                      </h3>
                    </div>

                    <div className="p-4 grid md:grid-cols-2 gap-x-6 gap-y-2">
                      {section.items.map((point, pointIndex) => (
                        <div
                          key={pointIndex}
                          className="flex gap-2 items-start text-xs text-slate-600 leading-relaxed"
                        >
                          <ChevronRight
                            size={13}
                            className="text-emerald-600 shrink-0 mt-0.5"
                          />

                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </DetailSection>

            <DetailSection
              title="Relevansi untuk Digital Healthcare"
              subtitle="Hubungan konsep dokumen dengan ekosistem teknologi kesehatan."
            >
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-5">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {[
                    "Secure Connectivity",
                    "Identity Management",
                    "Data Protection",
                    "Interoperability",
                    "Testing",
                  ].map((step, index) => (
                    <React.Fragment key={step}>
                      <span className="px-3 py-1.5 bg-white rounded-full text-[10px] font-bold text-emerald-700 border border-emerald-100">
                        {step}
                      </span>

                      {index < 4 && (
                        <ArrowRight
                          size={13}
                          className="text-emerald-400 hidden sm:block"
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {item.healthcareRelevance.map((topic, index) => (
                    <div
                      key={index}
                      className="bg-white border border-emerald-100 rounded-lg px-3 py-2.5 text-xs font-medium text-slate-700"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </DetailSection>

            <DetailSection
              title="Dokumen Ini Cocok Untuk"
              subtitle="Profil profesional yang dapat menggunakan dokumen sebagai referensi."
            >
              <div className="flex flex-wrap gap-2">
                {item.suitableFor.map((role, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-medium"
                  >
                    <Users size={13} />
                    {role}
                  </span>
                ))}
              </div>
            </DetailSection>

            <DetailSection title="Metadata Dokumen">
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <table className="w-full text-left">
                  <tbody>
                    <MetadataRow
                      label="Title"
                      value={item.title}
                    />
                    <MetadataRow
                      label="Category"
                      value={item.type}
                    />
                    <MetadataRow
                      label="Publisher"
                      value={item.publisher}
                    />
                    <MetadataRow
                      label="Authors"
                      value={item.authors}
                    />
                    <MetadataRow
                      label="Year"
                      value={item.year}
                    />
                    <MetadataRow
                      label="Format"
                      value={item.fileType}
                    />
                    <MetadataRow
                      label="Language"
                      value={item.language}
                    />
                    <MetadataRow
                      label="Pages"
                      value={item.pages}
                    />
                    <MetadataRow
                      label="Document Type"
                      value={item.documentType}
                    />
                    <MetadataRow
                      label="Source"
                      value={item.source}
                    />
                  </tbody>
                </table>
              </div>
            </DetailSection>

            <DetailSection title="Referensi">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.reference}
                </p>

                <p className="mt-3 text-[11px] text-slate-400">
                  Dokumen sumber tersedia melalui publikasi resmi penerbit.
                </p>
              </div>
            </DetailSection>

            <DetailSection title="Catatan Editorial">
              <div className="flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100">
                <ShieldCheck
                  size={17}
                  className="text-amber-600 shrink-0 mt-0.5"
                />

                <p className="text-xs text-amber-900/75 leading-relaxed">
                  Halaman Library ini berfungsi sebagai informasi dan
                  ringkasan dokumen. Metadata seperti publisher, judul,
                  author, dan tahun mengacu pada dokumen sumber. PDF yang
                  ditampilkan atau diunduh dari halaman ini tetap menggunakan
                  dokumen asli dari penerbitnya.
                </p>
              </div>
            </DetailSection>
          </article>

          <aside className="lg:sticky lg:top-[95px] space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <FileText size={17} />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-800">
                    Document
                  </p>

                  <p className="text-[10px] text-slate-400">
                    Original publication
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <InfoRow label="Format" value={item.fileType} />
                <InfoRow label="Pages" value={item.pages} />
                <InfoRow label="Language" value={item.language} />
                <InfoRow label="Publisher" value={item.publisher} />
                <InfoRow label="Year" value={item.year} />
              </div>

              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition"
              >
                <Download size={15} />
                Download Original Document
              </a>

              <p className="mt-3 text-[10px] text-slate-400 text-center leading-relaxed">
                Anda akan diarahkan ke dokumen sumber/publikasi asli.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-5 text-white">
              <div className="flex items-center gap-2">
                <Database
                  size={17}
                  className="text-emerald-300"
                />

                <span className="text-xs font-bold">
                  Library Resource
                </span>
              </div>

              <p className="mt-3 text-[11px] text-slate-300 leading-relaxed">
                Gunakan dokumen ini sebagai referensi untuk memahami konsep,
                standar, regulasi, dan teknologi dalam transformasi digital
                healthcare.
              </p>

              <button
                onClick={onBack}
                className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold text-emerald-300"
              >
                Explore More Resources
                <ArrowRight size={13} />
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

/* =========================================================
   CASE STUDIES PAGE
========================================================= */

function CaseStudiesPage({ onReadMore }) {
  const [category, setCategory] = useState("ALL");
  const [search, setSearch] = useState("");

  const filtered = CASE_STUDIES.filter((item) => {
    const keyword = search.trim().toLowerCase();

    const matchCategory =
      category === "ALL" || item.tag === category;

    const matchSearch =
      !keyword ||
      item.title.toLowerCase().includes(keyword) ||
      item.desc.toLowerCase().includes(keyword) ||
      item.tag.toLowerCase().includes(keyword) ||
      item.industry.toLowerCase().includes(keyword) ||
      item.solutions.some((solution) =>
        solution.toLowerCase().includes(keyword)
      );

    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <ImageHero type="case-studies" />

      <main className="max-w-[1440px] mx-auto px-5 lg:px-8 py-10 lg:py-12">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-emerald-700">
              OUR WORK
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Healthcare Transformation Stories
            </h2>

            <p className="mt-2 text-xs text-slate-500">
              Pilih kategori untuk melihat studi kasus berdasarkan jenis layanan dan solusi healthcare.
            </p>
          </div>

          <div className="relative w-full lg:w-[300px]">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search case studies..."
              className="w-full h-10 pl-10 pr-4 rounded-xl border border-slate-200 bg-white outline-none text-xs text-slate-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CASE_STUDY_CATEGORIES.map((item) => (
            <button
              key={item.id}
              onClick={() => setCategory(item.id)}
              className={`shrink-0 px-4 py-2.5 rounded-full text-xs font-semibold border transition ${
                category === item.id
                  ? "bg-emerald-700 text-white border-emerald-700 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-emerald-300 hover:text-emerald-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            Menampilkan{" "}
            <span className="font-bold text-slate-700">
              {filtered.length}
            </span>{" "}
            case studies
          </p>
        </div>

        <div className="mt-5 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <CaseStudyCard
              key={item.id}
              item={item}
              onReadMore={onReadMore}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <EmptyState text="Tidak ada case study yang sesuai dengan kategori atau pencarian." />
        )}
      </main>
    </div>
  );
}

/* =========================================================
   CASE STUDY DETAIL
========================================================= */

function CaseStudyDetail({ item, onBack }) {
  if (!item) return null;

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* HEADER */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-5">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-emerald-700 transition"
          >
            <ArrowLeft size={15} />
            Back to Case Studies
          </button>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-5 lg:px-8 py-8 lg:py-10">

        {/* =================================================
            HERO / COVER
        ================================================== */}
        <section className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">

          <div className="h-[300px] md:h-[400px] relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

            <div className="absolute left-6 md:left-8 bottom-7 text-white max-w-4xl">

              <span className="inline-flex px-3 py-1.5 bg-white text-emerald-700 rounded-full text-[10px] font-black tracking-wide mb-4">
                {item.tag}
              </span>

              <h1 className="text-3xl md:text-5xl font-black leading-tight">
                {item.title}
              </h1>

              <p className="mt-4 text-sm md:text-base text-slate-200 leading-relaxed max-w-3xl">
                {item.desc}
              </p>

            </div>
          </div>

          {/* PROJECT INFO */}
          <div className="p-6 md:p-8">

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">

              <ProjectInfo
                label="Industri"
                value={item.industry}
              />

              <ProjectInfo
                label="Lokasi"
                value={item.location}
              />

              <ProjectInfo
                label="Durasi Implementasi"
                value={item.duration}
              />

              <ProjectInfo
                label="Status"
                value={item.status}
                status
              />

            </div>

          </div>
        </section>

        {/* =================================================
            SOLUTIONS
        ================================================== */}
        <section className="mt-6 bg-white rounded-2xl border border-slate-200 p-6 md:p-8">

          <h2 className="text-xl md:text-2xl font-black text-slate-900">
            Solusi yang Digunakan
          </h2>

          <div className="mt-5 flex flex-wrap gap-2.5">

            {item.solutions.map((solution, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-bold"
              >
                <CheckCircle2 size={14} />
                {solution}
              </div>
            ))}

          </div>

        </section>

        {/* =================================================
            CONTENT
        ================================================== */}
        <div className="mt-6 grid lg:grid-cols-[minmax(0,1fr)_300px] gap-6 items-start">

          {/* MAIN */}
          <article className="space-y-6">

            {/* RINGKASAN */}
            <CaseSection title="Ringkasan">
              <div className="text-sm md:text-[15px] text-slate-600 leading-8 whitespace-pre-line">
                {item.summary}
              </div>
            </CaseSection>

            {/* TANTANGAN */}
            <CaseSection title="Tantangan">

              <p className="text-sm text-slate-500 leading-7 mb-5">
                Sebelum implementasi, rumah sakit menghadapi beberapa kendala,
                antara lain:
              </p>

              <BulletList items={item.challenges} />

            </CaseSection>

            {/* SOLUSI */}
            <CaseSection title="Solusi">

              <div className="text-sm md:text-[15px] text-slate-600 leading-8 whitespace-pre-line">
                {item.solutionDescription}
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">

                {item.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Activity size={15} />
                    </div>

                    <h3 className="mt-3 text-sm font-bold text-slate-800">
                      {solution}
                    </h3>

                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                      Komponen solusi yang digunakan dalam mendukung proses
                      transformasi digital pada project ini.
                    </p>
                  </div>
                ))}

              </div>

            </CaseSection>

            {/* HASIL */}
            <CaseSection title="Hasil Implementasi">

              <p className="text-sm text-slate-500 leading-7 mb-5">
                Setelah dashboard digunakan, rumah sakit memperoleh beberapa
                manfaat, antara lain:
              </p>

              <BulletList items={item.implementationResults} />

              <div className="mt-6 rounded-xl bg-amber-50 border border-amber-100 p-4 flex gap-3">
                <ShieldCheck
                  size={17}
                  className="text-amber-600 shrink-0 mt-0.5"
                />

                <p className="text-xs text-amber-900/75 leading-relaxed">
                  <strong className="text-amber-900">
                    Catatan:
                  </strong>{" "}
                  Hasil di atas merupakan ilustrasi untuk kebutuhan desain dan
                  bukan hasil implementasi pada rumah sakit tertentu.
                </p>
              </div>

            </CaseSection>

            {/* DASHBOARD */}
            <CaseSection title="Dashboard yang Ditampilkan">

              <p className="text-sm text-slate-500 leading-7 mb-6">
                Dashboard menyediakan berbagai indikator operasional yang dapat
                digunakan untuk memonitor kondisi pelayanan dan kinerja rumah
                sakit.
              </p>

              <div className="space-y-5">

                <DashboardGroup
                  title="Operasional"
                  items={item.dashboard.operasional}
                  icon={<Activity size={17} />}
                />

                <DashboardGroup
                  title="Pelayanan"
                  items={item.dashboard.pelayanan}
                  icon={<Building2 size={17} />}
                />

                <DashboardGroup
                  title="Manajemen"
                  items={item.dashboard.manajemen}
                  icon={<Database size={17} />}
                />

              </div>

            </CaseSection>

            {/* FAKTOR KEBERHASILAN */}
            <CaseSection title="Faktor Keberhasilan">

              <p className="text-sm text-slate-500 leading-7 mb-5">
                Keberhasilan implementasi didukung oleh beberapa faktor:
              </p>

              <BulletList items={item.successFactors} />

            </CaseSection>

            {/* LESSONS LEARNED */}
            <CaseSection title="Lessons Learned">

              <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
                <p className="text-sm md:text-[15px] text-slate-600 leading-8 whitespace-pre-line">
                  {item.lessonsLearned}
                </p>
              </div>

            </CaseSection>

            {/* KEY OUTCOMES */}
            <CaseSection title="Key Outcomes">

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[620px] text-left">

                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-5 py-4 text-xs font-black text-slate-700">
                        Area / Dampak
                      </th>

                      <th className="px-5 py-4 text-xs font-black text-slate-700">
                        Impact
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                    {item.keyOutcomes.map((outcome, index) => (
                      <tr
                        key={index}
                        className="border-b last:border-b-0 border-slate-100"
                      >
                        <td className="px-5 py-4 text-xs font-bold text-slate-700 align-top">
                          {outcome.area}
                        </td>

                        <td className="px-5 py-4 text-xs text-slate-500 leading-relaxed">
                          {outcome.impact}
                        </td>
                      </tr>
                    ))}

                  </tbody>

                </table>
              </div>

            </CaseSection>

            {/* TEKNOLOGI */}
            <CaseSection title="Teknologi yang Digunakan">

              <div className="grid sm:grid-cols-2 gap-3">

                {item.technologies.map((technology, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={16} />
                    </div>

                    <span className="text-xs font-bold text-slate-700">
                      {technology}
                    </span>
                  </div>
                ))}

              </div>

            </CaseSection>

          </article>

          {/* =================================================
              SIDEBAR
          ================================================== */}
          <aside className="lg:sticky lg:top-[95px] space-y-4">

            <div className="bg-slate-900 rounded-2xl p-5 text-white">

              <div className="flex items-center gap-2">

                <Activity
                  size={18}
                  className="text-emerald-300"
                />

                <span className="text-xs font-bold">
                  Project Overview
                </span>

              </div>

              <div className="mt-5 space-y-4">

                <SidebarInfo
                  label="Industri"
                  value={item.industry}
                />

                <SidebarInfo
                  label="Lokasi"
                  value={item.location}
                />

                <SidebarInfo
                  label="Durasi"
                  value={item.duration}
                />

                <SidebarInfo
                  label="Status"
                  value={item.status}
                />

              </div>

            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">

              <div className="w-9 h-9 rounded-xl bg-white text-emerald-700 flex items-center justify-center">
                <Database size={17} />
              </div>

              <h3 className="mt-4 text-sm font-bold text-emerald-950">
                Healthcare Transformation
              </h3>

              <p className="mt-2 text-xs text-emerald-900/70 leading-relaxed">
                Studi kasus ini merupakan ilustrasi bagaimana teknologi dapat
                digunakan untuk mendukung digitalisasi, integrasi data, dan
                peningkatan visibilitas operasional fasilitas kesehatan.
              </p>

            </div>

            <button
              onClick={onBack}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:border-emerald-300 hover:text-emerald-700 transition"
            >
              <ArrowLeft size={14} />
              Back to Case Studies
            </button>

          </aside>

        </div>

      </main>
    </div>
  );
}

/* =========================================================
   CASE STUDY SMALL COMPONENTS
========================================================= */

function ProjectInfo({ label, value, status = false }) {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
      <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
        {label}
      </p>

      <p
        className={`mt-2 text-xs font-bold leading-relaxed ${
          status
            ? "text-emerald-700"
            : "text-slate-700"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function CaseSection({ title, children }) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">

      <div className="flex items-center gap-3 mb-6">

        <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
          <ChevronRight size={17} />
        </div>

        <h2 className="text-xl md:text-2xl font-black text-slate-900">
          {title}
        </h2>

      </div>

      {children}

    </section>
  );
}

function BulletList({ items }) {
  return (
    <div className="space-y-3">

      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-3 items-start"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 size={14} />
          </div>

          <p className="text-sm text-slate-600 leading-7">
            {item}
          </p>
        </div>
      ))}

    </div>
  );
}

function DashboardGroup({ title, items = [], icon }) {
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden">

      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex items-center gap-3">

        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
          {icon}
        </div>

        <h3 className="text-sm font-bold text-slate-800">
          {title}
        </h3>

      </div>

      <div className="p-5 grid sm:grid-cols-2 gap-2.5">

        {safeItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-100"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />

            <span className="text-xs text-slate-600">
              {item}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}

function SidebarInfo({ label, value }) {
  return (
    <div className="border-b border-white/10 last:border-0 pb-3 last:pb-0">

      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
        {label}
      </p>

      <p className="mt-1 text-xs text-white font-semibold leading-relaxed">
        {value}
      </p>

    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

function HomePage({ onNavigate }) {
  const [activeExplore, setActiveExplore] = useState(1);
  const exploreItems = NAV_ITEMS.filter((item) => item.id !== "home");
  const activeExploreItem = exploreItems[activeExplore % exploreItems.length];

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F3FCF8]">
        <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
          <div className="min-h-[430px] lg:min-h-[470px] grid lg:grid-cols-[0.9fr_1.1fr] items-center gap-8 lg:gap-12 py-10 lg:py-12">

            {/* LEFT CONTENT */}
            <div className="relative z-10">
              <p className="text-[10px] font-bold tracking-[0.18em] text-emerald-700 uppercase">
                INNOVAMEDIKA
              </p>

              <h1 className="mt-4 text-[38px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.08] tracking-tight text-emerald-950">
                Inovamedika
                <br />
                Digital Health
                <br />
                Intelligence
              </h1>

              <p className="mt-5 max-w-[470px] text-[13px] leading-6 text-slate-600">
                Wadah informasi untuk mendukung transformasi digital rumah
                sakit dan fasilitas pelayanan kesehatan.
              </p>

              <div className="mt-8">
                <div className="relative inline-flex overflow-hidden rounded-full">
                  <button
                    key={activeExploreItem.id}
                    onClick={() => onNavigate(activeExploreItem.id)}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-6 py-3.5 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-emerald-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                    style={{ animation: "exploreSlideIn 320ms cubic-bezier(.2,.75,.25,1) both" }}
                  >
                    Explore {activeExploreItem.label}<ArrowRight size={15} />
                  </button>
                </div>

                <div className="mt-5 flex items-center justify-center gap-2" aria-label="Pilih halaman Explore">
                  {exploreItems.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveExplore(index)}
                      aria-label={`Explore ${item.label}`}
                      aria-current={activeExplore === index ? "true" : undefined}
                      className={`h-2 rounded-full transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${activeExplore === index ? "w-6 bg-emerald-700" : "w-2 bg-emerald-200 hover:bg-emerald-400"}`}
                    />
                  ))}
                </div>
              </div>

              <style>{`@keyframes exploreSlideIn { from { opacity: 0; transform: translateX(22px); } to { opacity: 1; transform: translateX(0); } }`}</style>
            </div>

            {/* HERO IMAGE */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <img src="/assets/about-main.png" alt="Inovamedika digital health" className="relative z-10 w-full max-w-[610px] rounded-[28px] object-cover drop-shadow-sm" />
            </div>

          </div>
        </div>
      </section>

      {/* HOME TOPIC ICONS */}
      <section className="bg-white scroll-reveal">
        <div className="max-w-[1180px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid grid-cols-5 items-center gap-5 max-w-[820px] mx-auto">
            {/*
              GANTI PATH GAMBAR DI BAWAH SESUAI FILE KAMU.
              Contoh: /assets/home-icon-1.png
              File diletakkan di folder public/assets/
            */}
            {[
              '/assets/home-icon-1.png',
              '/assets/home-icon-2.png',
              '/assets/home-icon-3.png',
              '/assets/home-icon-4.png',
              '/assets/home-icon-5.png',
            ].map((src, index) => (
              <div key={src} className="flex justify-center">
                <div className="w-[58px] h-[58px] rounded-full flex items-center justify-center transition-transform duration-300 hover:-translate-y-1">
                  <img
                    src={src}
                    alt={`Healthcare topic ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT PREVIEW */}
      <section className="bg-[#F8FCFA] py-14 scroll-reveal">
        <div className="max-w-[1180px] mx-auto px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-700">
                EXPLORE
              </p>
              <h2 className="mt-2 text-2xl lg:text-3xl font-bold text-emerald-950">
                Digital Healthcare Knowledge
              </h2>
              <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-500">
                Jelajahi research, case studies, dan library mengenai
                transformasi digital healthcare.
              </p>
            </div>

            <button
              onClick={() => onNavigate("library")}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700"
            >
              Open Library
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="mt-7 grid md:grid-cols-3 gap-5 scroll-reveal-stagger">
            <FeatureCard
              icon={<Activity />}
              title="Digital Healthcare"
              text="Solusi teknologi untuk mendukung transformasi proses pelayanan kesehatan."
            />
            <FeatureCard
              icon={<Globe2 />}
              title="Interoperability"
              text="Integrasi sistem dan pertukaran data menggunakan standar teknologi kesehatan."
            />
            <FeatureCard
              icon={<ShieldCheck />}
              title="Secure & Reliable"
              text="Pendekatan teknologi dengan perhatian pada keamanan dan keandalan sistem."
            />
          </div>
        </div>
      </section>

      {/* CASE STUDIES PREVIEW */}
      <section className="bg-white py-14 scroll-reveal">
        <div className="max-w-[1180px] mx-auto px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-700">
                CASE STUDIES
              </p>
              <h2 className="mt-2 text-2xl lg:text-3xl font-bold text-emerald-950">
                Healthcare Transformation Stories
              </h2>
              <p className="mt-2 text-xs text-slate-500 max-w-2xl">
                Pelajari contoh implementasi teknologi digital healthcare
                melalui berbagai studi kasus.
              </p>
            </div>

            <button
              onClick={() => onNavigate("case-studies")}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700"
            >
              View All
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="mt-7 grid md:grid-cols-2 xl:grid-cols-3 gap-5 scroll-reveal-stagger">
            {CASE_STUDIES.slice(0, 3).map((item) => (
              <CaseStudyCard
                key={item.id}
                item={item}
                onReadMore={() => onNavigate("case-studies")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING TOPICS */}
      <section className="bg-[#F8FCFA] py-16 scroll-reveal">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-emerald-700">TOPICS TO EXPLORE</p>
            <h2 className="mt-2 text-2xl font-black text-emerald-950 lg:text-3xl">Topik Digital Health yang Sedang Dibahas</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">Jelajahi berbagai topik yang menjadi bagian penting dari transformasi digital layanan kesehatan.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 scroll-reveal-stagger">
            {[['Smart Hospital',Activity,'insights'],['SATUSEHAT',Database,'news'],['RME',FileText,'insights'],['AI Healthcare',Globe2,'insights'],['Cybersecurity',ShieldCheck,'insights'],['SIMRS',Building2,'case-studies']].map(([name,Icon,target])=><button key={name} onClick={()=>onNavigate(target)} className="group rounded-2xl border border-emerald-100 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white"><Icon size={21}/></div><p className="mt-4 text-xs font-extrabold text-emerald-950">{name}</p></button>)}
          </div>
        </div>
      </section>

      {/* PLATFORM SNAPSHOT */}
      <section className="bg-emerald-950 py-16 text-white scroll-reveal">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-emerald-300">DIGITAL HEALTH INTELLIGENCE</p>
              <h2 className="mt-3 text-3xl font-black leading-tight">Satu ruang untuk memahami transformasi kesehatan digital.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-100">Dari berita dan insight hingga research, case studies, events, dan knowledge resources — temukan informasi yang relevan untuk kebutuhan digital healthcare.</p>
              <button onClick={()=>onNavigate('about')} className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-emerald-900 transition hover:bg-emerald-50">Tentang Inovamedika <ArrowRight size={16}/></button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[['News','Update'],['Insights','Perspektif'],['Research','Data'],['Library','Resources']].map(([a,b])=><div key={a} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"><p className="text-2xl font-black text-white">{a}</p><p className="mt-2 text-xs text-emerald-200">{b}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-[#EAF8F2] px-7 py-10 lg:px-12 lg:py-12">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-emerald-500/10"/>
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-emerald-700">COMMUNITY</p><h2 className="mt-2 text-2xl font-black text-emerald-950 lg:text-3xl">Terhubung dengan ekosistem Digital Health Indonesia.</h2><p className="mt-3 text-sm leading-6 text-slate-600">Ikuti diskusi, event, dan berbagai wawasan bersama komunitas yang bergerak di bidang kesehatan digital.</p></div>
              <button onClick={()=>onNavigate('community')} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-800 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-emerald-900">Join Community <ArrowRight size={16}/></button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition">

      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
        {React.cloneElement(icon, { size: 19 })}
      </div>

      <h3 className="mt-5 font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-xs text-slate-500 leading-relaxed">
        {text}
      </p>

    </div>
  );
}

function DetailSection({ title, subtitle, children }) {
  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 lg:p-6">

      <div className="mb-5">

        <h2 className="text-lg lg:text-xl font-bold text-slate-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-xs text-slate-400">
            {subtitle}
          </p>
        )}

      </div>

      {children}

    </section>
  );
}

function EditorialNote({ text }) {
  return (
    <div className="mt-5 flex gap-3 rounded-xl bg-emerald-50 border border-emerald-100 p-4">

      <ShieldCheck
        size={16}
        className="text-emerald-700 shrink-0 mt-0.5"
      />

      <p className="text-xs text-emerald-900/75 leading-relaxed">

        <strong className="text-emerald-900">
          Catatan:
        </strong>{" "}

        {text}

      </p>

    </div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 min-w-0">

      <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
        {icon}
        <span>{label}</span>
      </div>

      <p className="mt-1.5 text-[11px] font-bold text-slate-700 leading-snug break-words">
        {value}
      </p>

    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4 py-2 border-b border-slate-100 last:border-0">

      <span className="text-slate-400">
        {label}
      </span>

      <span className="text-right font-semibold text-slate-700">
        {value}
      </span>

    </div>
  );
}

function MetadataRow({ label, value }) {
  return (
    <tr className="border-b last:border-b-0 border-slate-100">

      <td className="w-[150px] lg:w-[180px] px-4 py-3 bg-slate-50 text-[11px] font-semibold text-slate-500">
        {label}
      </td>

      <td className="px-4 py-3 text-xs text-slate-700 leading-relaxed">
        {value}
      </td>

    </tr>
  );
}

function EmptyState({ text }) {
  return (
    <div className="py-20 text-center">

      <div className="mx-auto w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
        <Search size={20} />
      </div>

      <p className="mt-4 text-sm font-semibold text-slate-600">
        {text}
      </p>

    </div>
  );
}

function KnowledgeCenterPage({ onNavigate, onReadMore }) {
  const [selectedType, setSelectedType] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const types = ["ALL", "CHECKLIST", "EBOOK", "INFOGRAPHIC", "TEMPLATE", "WHITEPAPER"];
  const visibleItems = LIBRARY_ITEMS.filter((item) => {
    const matchesType = selectedType === "ALL" || item.tag.toUpperCase() === selectedType || item.type.toUpperCase() === selectedType;
    const haystack = `${item.title} ${item.desc} ${item.tag} ${item.type}`.toLowerCase();
    return matchesType && haystack.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="knowledge-center min-h-screen bg-[#F7FCFA] text-emerald-900">
      <ImageHero type="knowledge-center" />

      <main className="mx-auto max-w-[1280px] px-5 py-10 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-emerald-700">Explore resources</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-emerald-950 lg:text-3xl">Knowledge, siap digunakan.</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Pilih kategori atau cari materi yang kamu butuhkan.</p>
          </div>
          <div className="relative w-full lg:max-w-sm">
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-700" />
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Cari resource..." className="h-12 w-full rounded-2xl border border-emerald-100 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" />
          </div>
        </div>

        <div className="mt-7 flex gap-2 overflow-x-auto pb-2">
          {types.map((type) => <button key={type} onClick={() => setSelectedType(type)} className={`shrink-0 rounded-lg px-4 py-3 text-[10px] font-extrabold tracking-wide transition ${selectedType === type ? 'bg-emerald-800 text-white shadow-md shadow-emerald-900/15' : 'border border-emerald-100 bg-white text-emerald-900 hover:border-emerald-300 hover:bg-emerald-50'}`}>{type === 'ALL' ? `ALL (${LIBRARY_ITEMS.length})` : type}</button>)}
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {visibleItems.map((item) => <article key={item.id} className="group flex min-h-[370px] flex-col overflow-hidden rounded-2xl border border-emerald-100/80 bg-[#DDF7EE] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-[#D5F4E9] hover:shadow-xl hover:shadow-emerald-950/10">
            <div className="relative h-40 overflow-hidden bg-emerald-100">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/65 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 rounded-md bg-white/95 px-2.5 py-1.5 text-[9px] font-extrabold tracking-wider text-emerald-800">{item.tag}</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800/70">{item.publisher} <span className="px-1">·</span> {item.year}</div>
              <h3 className="mt-3 line-clamp-3 text-lg font-extrabold leading-6 text-emerald-950">{item.title}</h3>
              <p className="mt-3 line-clamp-4 text-sm leading-6 text-emerald-800">{item.desc}</p>
              <div className="mt-auto flex items-center justify-between gap-2 border-t border-emerald-900/10 pt-5 mt-5">
                <span className="text-xs text-emerald-800"><FileText size={13} className="mr-1 inline"/>{item.fileType}</span>
                <button onClick={() => onReadMore(item)} className="inline-flex items-center gap-1.5 rounded-full bg-emerald-800 px-3.5 py-2 text-[10px] font-bold text-white transition hover:bg-emerald-950 disabled:cursor-wait disabled:opacity-70">Read More <ArrowRight size={13}/></button>
              </div>
            </div>
          </article>)}
        </div>
        {visibleItems.length === 0 && <div className="mt-8 rounded-2xl border border-dashed border-emerald-200 bg-white p-12 text-center text-sm text-slate-500">Tidak ada resource yang cocok. Coba kata kunci atau kategori lain.</div>}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl bg-emerald-950 p-7 text-white sm:flex-row sm:items-center lg:p-9">
          <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-emerald-300">Inovamedika Knowledge Hub</p><h2 className="mt-2 text-xl font-extrabold lg:text-2xl">Satu ruang untuk terus berkembang.</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-emerald-50/75">Akses materi dan referensi untuk mendukung langkah transformasi digital layanan kesehatan.</p></div>
          <button onClick={() => onNavigate('library')} className="shrink-0 rounded-full bg-emerald-300 px-5 py-3 text-xs font-extrabold text-emerald-950 transition hover:bg-white">Buka Library <ArrowRight size={14} className="ml-1 inline"/></button>
        </div>
      </main>
    </div>
  );
}

function KnowledgeCenterDetail({ item, onBack }) {
  return (
    <main className="min-h-[70vh] bg-[#F7FCFA] px-5 py-12 text-emerald-900 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <button onClick={onBack} className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2.5 text-sm font-bold text-emerald-800 transition hover:bg-emerald-50"><ArrowLeft size={16}/> Kembali ke Knowledge Center</button>
        <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl shadow-emerald-950/5">
          <div className="grid md:grid-cols-[.9fr_1.1fr]">
            <div className="min-h-[260px] bg-emerald-50"><img src={item.image} alt={item.title} className="h-full min-h-[260px] w-full object-cover"/></div>
            <div className="p-7 lg:p-10">
              <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-extrabold tracking-wide text-emerald-800">{item.tag} · {item.fileType}</span>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight text-emerald-950 lg:text-4xl">{item.title}</h1>
              <p className="mt-4 text-sm leading-7 text-emerald-800">{item.desc}</p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-emerald-100 pt-5 text-xs text-emerald-700"><span>{item.publisher}</span><span>{item.year}</span><span>{item.pages || 'Materi digital'}</span></div>
            </div>
          </div>
          <section className="border-t border-emerald-100 p-7 lg:p-10"><h2 className="text-xl font-extrabold text-emerald-950">Tentang materi</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-emerald-800">{item.description || item.desc}</p>{item.summary?.length > 0 && <><h3 className="mt-7 text-base font-extrabold text-emerald-950">Ringkasan utama</h3><ul className="mt-3 space-y-3">{item.summary.map((point, index) => <li key={index} className="flex gap-3 text-sm leading-6 text-emerald-800"><CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald-600"/>{point}</li>)}</ul></>}</section>
        </div>
      </div>
    </main>
  );
}

function ResearchPage({ onReadMore }) {
  const [category, setCategory] = useState("Semua");
  const categories = ["Semua", ...new Set(RESEARCH_ITEMS.map((item) => item.category))];
  const items = RESEARCH_ITEMS.filter((item) => category === "Semua" || item.category === category);
  return <main className="research-page min-h-screen bg-[#F7FCFA] px-6 py-14 text-emerald-950 lg:px-14 lg:py-20">
    <div className="mx-auto max-w-[1480px]">
      <div className="-mx-6 -mt-14 mb-12 lg:-mx-14 lg:-mt-20"><ImageHero type="research" /></div>
      <div className="mb-10 flex flex-wrap gap-3">{categories.map((cat) => <button key={cat} onClick={() => setCategory(cat)} className={`rounded-full px-6 py-3.5 text-base font-extrabold transition duration-300 ${category === cat ? "bg-emerald-800 text-white shadow-lg" : "border border-emerald-200 bg-white text-emerald-800 hover:-translate-y-0.5 hover:bg-emerald-50"}`}>{cat}</button>)}</div>
      <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">{items.map((item, index) => <article key={item.id} style={{animationDelay: `${index * 70}ms`}} className="research-card group flex flex-col rounded-[1.8rem] border border-[#c5e7da] bg-white p-7 shadow-[0_12px_34px_rgba(6,95,70,.10)] transition duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-[0_22px_48px_rgba(6,95,70,.14)] lg:p-8">
        <div className="flex items-center justify-between gap-3"><span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-extrabold tracking-wider text-[#075b49]">{item.tag}</span><span className="text-sm font-bold text-[#326b5c]">{item.date}</span></div>
        <div className="my-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-50 text-emerald-800"><FileText size={27}/></div>
        <p className="text-sm font-extrabold uppercase tracking-wider text-[#14745d]">{item.category}</p><h2 className="mt-3 text-2xl font-black leading-8 text-[#063f35]">{item.title}</h2><p className="mt-4 flex-1 text-base leading-7 text-[#244f45]">{item.desc}</p>
        <div className="mt-6 flex items-center justify-between border-t border-emerald-100 pt-5"><span className="text-sm font-semibold text-[#326b5c]">{item.author}</span><button onClick={() => onReadMore(item)} className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-emerald-950">Read More <ArrowRight size={14}/></button></div>
      </article>)}</div>
    </div>
  </main>;
}

function ResearchDetail({ item, onBack, onSelect }) {
  const index = RESEARCH_ITEMS.findIndex((entry) => entry.id === item.id);
  const previous = index > 0 ? RESEARCH_ITEMS[index - 1] : null;
  const next = index < RESEARCH_ITEMS.length - 1 ? RESEARCH_ITEMS[index + 1] : null;
  const section = (title, values) => <section className="mt-8"><h2 className="text-xl font-extrabold text-emerald-950">{title}</h2><ul className="mt-3 grid gap-2 sm:grid-cols-2">{values.map((value, i) => <li key={i} className="rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-sm leading-6 text-emerald-800">{value}</li>)}</ul></section>;
  return <main className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_#d8f5e9_0%,_#f7fcfa_44%,_#edf8f4_100%)] px-5 py-12 text-emerald-900 lg:px-10"><article className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-2xl shadow-emerald-950/10">
    <div className="relative overflow-hidden bg-gradient-to-br from-[#052e27] via-[#08634f] to-[#10a080] px-7 py-10 text-white lg:px-14 lg:py-14"><div className="absolute -right-12 -top-16 h-64 w-64 rounded-full border-[28px] border-white/10"/><div className="relative z-10 flex flex-col items-center text-center">
    <button onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-bold text-white backdrop-blur hover:bg-white/20"><ArrowLeft size={16}/> Kembali ke Research</button>
    <div className="mt-8 flex flex-wrap justify-center gap-2"><span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-extrabold text-white">{item.tag}</span><span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold text-white">{item.date}</span></div>
    <h1 className="mx-auto mt-5 max-w-5xl text-3xl font-black leading-tight text-white sm:text-5xl">{item.title}</h1><p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-emerald-50">{item.desc}</p><p className="mt-4 text-sm font-semibold text-emerald-100">{item.author}</p></div></div>
    <div className="mx-7 -mt-5 relative z-20 mb-7 flex flex-col gap-3 rounded-2xl border border-emerald-100 bg-white p-5 shadow-lg shadow-emerald-950/10 sm:mx-10 sm:flex-row sm:items-center sm:justify-between lg:mx-14"><div><p className="text-sm font-extrabold text-emerald-950">Dokumen lengkap tersedia</p><p className="mt-1 text-sm text-emerald-700">Baca ringkasan di halaman ini, atau buka PDF sumber kapan saja.</p></div><a href={item.url} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"><Download size={16}/> Buka / Download PDF</a></div>
    <div className="px-7 py-8 lg:px-14 lg:py-12"><div className="mb-8 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl bg-emerald-50 p-5"><p className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">Kategori</p><p className="mt-2 text-lg font-black text-emerald-950">{item.category}</p></div><div className="rounded-2xl bg-teal-50 p-5"><p className="text-xs font-extrabold uppercase tracking-widest text-teal-700">Format</p><p className="mt-2 text-lg font-black text-teal-950">Research brief</p></div><div className="rounded-2xl bg-lime-50 p-5"><p className="text-xs font-extrabold uppercase tracking-widest text-lime-700">Terbit</p><p className="mt-2 text-lg font-black text-lime-950">{item.date}</p></div></div>
    <section className="mt-8 rounded-2xl bg-emerald-50 p-5"><h2 className="text-lg font-extrabold text-emerald-950">Research Design</h2><p className="mt-2 text-sm leading-7 text-emerald-800">{item.design}</p></section>
    {section("Data Collection", item.collection)}{section("Assessment Framework", item.framework)}{section("Scope", item.scope)}{section("Research Output", item.outputs)}
    <aside className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900"><strong>Catatan:</strong> {item.note}</aside>
    <section className="mt-8 rounded-2xl border border-emerald-100 p-5"><h2 className="font-extrabold text-emerald-950">Research Reference</h2><p className="mt-2 text-sm font-bold text-emerald-800">{item.reference}</p><p className="mt-1 text-xs text-emerald-700">{item.publisher} · Format: PDF</p><p className="mt-3 text-xs text-emerald-700">Dokumen sumber dapat dibuka melalui tombol PDF di bagian atas halaman.</p></section>
    <nav className="mt-10 grid gap-3 border-t border-emerald-100 pt-6 sm:grid-cols-2"><button disabled={!previous} onClick={() => previous && onSelect(previous)} className="rounded-2xl border border-emerald-200 px-5 py-4 text-left transition hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-40"><span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600"><ArrowLeft size={14}/> Previous</span><span className="mt-2 block text-sm font-extrabold text-emerald-900">{previous?.title || "Tidak ada research sebelumnya"}</span></button><button disabled={!next} onClick={() => next && onSelect(next)} className="rounded-2xl border border-emerald-200 px-5 py-4 text-right transition hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-40"><span className="flex items-center justify-end gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">Next <ArrowRight size={14}/></span><span className="mt-2 block text-sm font-extrabold text-emerald-900">{next?.title || "Tidak ada research berikutnya"}</span></button></nav>
    </div>
  </article></main>;
}

function EditorialDetail({ item, type, title, onBack }) {
  const isInsight = type === "insights";
  return (
    <main className="min-h-screen bg-[#F7FCFA] text-emerald-950">
      <section className="relative overflow-hidden bg-emerald-950 px-6 py-10 text-white lg:px-10 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(52,211,153,.22),transparent_35%),linear-gradient(135deg,#022c22,#064e3b,#0f766e)]" />
        <div className="relative mx-auto max-w-6xl">
          <button onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"><ArrowLeft size={16}/> Kembali ke {title}</button>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px] lg:items-end">
            <div>
              <div className="flex flex-wrap gap-2"><span className="rounded-full bg-emerald-300/15 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.18em] text-emerald-200">{item.category}</span><span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold text-emerald-50">{item.meta || "2026"}</span></div>
              <h1 className="mt-5 max-w-5xl text-3xl font-black leading-tight sm:text-5xl">{item.title}</h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-emerald-50">{item.summary}</p>
            </div>
            <div className="hidden rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur lg:block"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-emerald-200">{isInsight ? "Insight" : "News"}</p><p className="mt-3 text-2xl font-black">Digital Health</p><p className="mt-2 text-xs leading-5 text-emerald-100/75">Informasi dan perspektif seputar transformasi digital layanan kesehatan.</p></div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="-mt-16 relative z-10 rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-2xl shadow-emerald-950/10 lg:p-10">
          <div className="grid gap-4 sm:grid-cols-3"><div className="rounded-2xl bg-emerald-50 p-5"><p className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600">Kategori</p><p className="mt-2 text-base font-black text-emerald-950">{item.category}</p></div><div className="rounded-2xl bg-teal-50 p-5"><p className="text-[10px] font-extrabold uppercase tracking-widest text-teal-700">Tipe</p><p className="mt-2 text-base font-black text-teal-950">{isInsight ? "Insight" : "News"}</p></div><div className="rounded-2xl bg-slate-50 p-5"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Publisher</p><p className="mt-2 text-base font-black text-slate-900">Inovamedika</p></div></div>
          <div className="mt-9 border-t border-emerald-100 pt-8"><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-emerald-600">Narasi</p><h2 className="mt-2 text-2xl font-black text-emerald-950">{item.title}</h2><p className="mt-5 text-base leading-8 text-slate-700">{item.summary} Konten ini merupakan bagian dari halaman editorial Inovamedika Digital Health Intelligence Platform yang membahas perkembangan, implementasi, dan perspektif teknologi kesehatan digital.</p><p className="mt-4 text-base leading-8 text-slate-700">Pembahasan dapat digunakan sebagai bahan awal untuk memahami konteks teknologi, proses, dan isu yang terkait dengan topik tersebut. Detail dan sumber dapat dikembangkan lebih lanjut sesuai kebutuhan artikel.</p></div>
          <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-emerald-100 pt-6"><div><p className="text-xs font-bold text-emerald-700">Tim Editorial Inovamedika</p><p className="mt-1 text-xs text-slate-500">Inovamedika Digital Health Intelligence Platform</p></div><button onClick={onBack} className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-emerald-950">Kembali ke {title} <ArrowLeft size={15}/></button></div>
        </div>
      </section>
    </main>
  );
}

function EditorialPage({ title, eyebrow, description, accent = "emerald", items = [], heroType, onReadMore }) {
  const [query,setQuery]=useState("");
  const [category,setCategory]=useState("Semua");
  const [selectedItem,setSelectedItem]=useState(null);
  const categories=["Semua",...new Set(items.map(x=>x.category))];
  const filtered=items.filter(x=>(category==="Semua"||x.category===category)&&`${x.title} ${x.summary}`.toLowerCase().includes(query.toLowerCase()));

  return <main className="bg-white text-emerald-950"><ImageHero type={heroType||"news"}/><section id="content" className="mx-auto max-w-[1200px] px-6 py-12 lg:px-10 lg:py-16"><div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-emerald-600">Explore</p><h2 className="mt-2 text-2xl font-black">Jelajahi {title}</h2><p className="mt-2 text-sm text-slate-600">Pilih topik atau cari konten yang ingin kamu baca.</p></div><div className="relative w-full md:max-w-xs"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cari konten..." className="w-full rounded-full border border-emerald-100 bg-white py-3 pl-11 pr-5 text-sm outline-none focus:border-emerald-500"/></div></div><div className="mt-6 flex flex-wrap gap-2">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${category===c?'bg-emerald-800 text-white':'border border-emerald-100 bg-white text-emerald-800 hover:bg-emerald-50'}`}>{c}</button>)}</div>{filtered.length?<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((item,i)=><article key={item.title} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><div className={`relative flex h-44 items-end overflow-hidden bg-gradient-to-br ${['from-emerald-800 to-teal-500','from-cyan-800 to-emerald-500','from-teal-900 to-lime-500'][i%3]} p-6 text-white`}><div className="absolute -right-5 -top-10 h-40 w-40 rounded-full border-[22px] border-white/10 transition-transform duration-500 group-hover:scale-110"/><span className="relative rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur">{item.category}</span></div><div className="flex flex-1 flex-col p-6"><p className="text-[11px] font-semibold text-emerald-600">{item.meta||"Inovamedika Digital Health"}</p><h3 className="mt-3 text-lg font-extrabold leading-snug text-emerald-950">{item.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{item.summary}</p><div className="mt-auto pt-6"><button onClick={()=>onReadMore ? onReadMore(item) : setSelectedItem(item)} className="group/read inline-flex w-full items-center justify-between rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-extrabold text-emerald-800 transition duration-300 hover:bg-emerald-800 hover:text-white"><span className="flex items-center gap-2">Read more <ArrowRight size={15} className="transition-transform duration-300 group-hover/read:translate-x-1"/></span><span className="h-2 w-2 rounded-full bg-emerald-500 transition group-hover/read:bg-white"/></button></div></div></article>)}</div>:<div className="mt-8 rounded-2xl bg-emerald-50 p-8 text-center text-sm text-emerald-800">Belum ada konten yang cocok dengan pencarian ini.</div>}</section></main>;
}

const pageContent={
 news:[
  {category:"BPJS",title:"Perkembangan Integrasi Digital dalam Layanan BPJS",summary:"Ringkasan informasi mengenai alur layanan, data, dan integrasi digital yang berkaitan dengan ekosistem JKN."},{category:"BPJS",title:"Transformasi Data dan Layanan Kesehatan Berbasis JKN",summary:"Sorotan mengenai pemanfaatan teknologi untuk mendukung proses layanan kesehatan yang terhubung."},{category:"Digital Health",title:"Tren Transformasi Digital Healthcare Indonesia",summary:"Kabar dan perkembangan teknologi yang mendorong perubahan layanan kesehatan digital."},{category:"Digital Health",title:"Interoperabilitas dan Ekosistem Kesehatan Digital",summary:"Perkembangan integrasi sistem, pertukaran data, dan kolaborasi antar pemangku kepentingan."},{category:"Regulasi",title:"Perkembangan Regulasi Teknologi Kesehatan Digital",summary:"Informasi dan ringkasan regulasi yang relevan dengan implementasi teknologi di sektor kesehatan."},{category:"SATUSEHAT",title:"Update Ekosistem dan Integrasi SATUSEHAT",summary:"Informasi seputar interoperabilitas dan implementasi platform kesehatan digital nasional."}
 ],
 insights:[
  {category:"AI Healthcare Insight",title:"AI untuk Mendukung Pengambilan Keputusan Klinis",summary:"Perspektif mengenai pemanfaatan artificial intelligence dalam layanan dan operasional kesehatan."},{category:"Cybersecurity Insight",title:"Membangun Cybersecurity Rumah Sakit yang Resilien",summary:"Insight tentang keamanan data, identitas, akses, dan kesiapan menghadapi risiko siber."},{category:"Data Center Rumah Sakit",title:"Fondasi Data Center untuk Rumah Sakit Modern",summary:"Membahas infrastruktur, availability, dan kebutuhan data center dalam ekosistem rumah sakit."},{category:"RME",title:"RME sebagai Fondasi Data Kesehatan Terintegrasi",summary:"Insight mengenai peran rekam medis elektronik dalam membangun alur data yang lebih terhubung."},{category:"SATUSEHAT Insight",title:"Menyiapkan Organisasi untuk Integrasi SATUSEHAT",summary:"Perspektif implementasi interoperabilitas dan kesiapan proses di fasilitas pelayanan kesehatan."},{category:"SIMRS",title:"SIMRS dan Evolusi Operasional Rumah Sakit",summary:"Membahas integrasi modul, data operasional, dan pemanfaatan sistem informasi untuk pengelolaan rumah sakit."},{category:"Smart Hospital Insight",title:"Menuju Smart Hospital yang Terukur",summary:"Insight mengenai konektivitas, data, automation, dan monitoring sebagai bagian dari transformasi smart hospital."}
 ],
 "digital-health-talk":[{category:"Talks",title:"Percakapan tentang masa depan digital health",summary:"Diskusi bersama praktisi dan narasumber tentang teknologi dan layanan kesehatan."},{category:"Podcast",title:"Cerita di balik inovasi produk",summary:"Dengarkan pengalaman, proses, dan pembelajaran dari para pelaku ekosistem."}],
 about:[{category:"Profil",title:"Tentang Inovamedika Digital Health",summary:"Mengenal ruang informasi dan pembelajaran seputar transformasi digital kesehatan."},{category:"Kolaborasi",title:"Bersama membangun ekosistem kesehatan digital",summary:"Menghubungkan pengetahuan, teknologi, dan kolaborasi untuk mendukung layanan kesehatan."}]
};

function EventsPage(){
 const [query,setQuery]=useState(""); const [category,setCategory]=useState("Semua"); const [month,setMonth]=useState(new Date(2026,8,1));
 const events=[{id:1,category:"Webinar",title:"Digital Health Transformation Webinar",date:"2026-09-18",time:"13:30 WIB",summary:"Webinar mengenai strategi dan praktik transformasi digital layanan kesehatan."},{id:2,category:"Webinar",title:"SATUSEHAT & Interoperability Forum",date:"2026-10-07",time:"10:00 WIB",summary:"Sesi berbagi mengenai interoperabilitas, integrasi data, dan kesiapan fasilitas kesehatan."},{id:3,category:"Training",title:"Healthcare Data & Analytics Training",date:"2026-10-22",time:"09:00 WIB",summary:"Training untuk memahami pengelolaan data dan analytics dalam operasional healthcare."}];
 const categories=["Semua","Webinar","Training"]; const filtered=events.filter(x=>(category==="Semua"||x.category===category)&&`${x.title} ${x.summary}`.toLowerCase().includes(query.toLowerCase())); const y=month.getFullYear(),m=month.getMonth(),first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate(); const cells=Array.from({length:first+days},(_,i)=>i<first?null:i-first+1); const names=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]; const byDay=Object.fromEntries(events.filter(x=>new Date(x.date).getFullYear()===y&&new Date(x.date).getMonth()===m).map(x=>[Number(x.date.slice(-2)),x]));
 return <main className="bg-white text-emerald-950"><ImageHero type="events"/><section className="mx-auto max-w-[1200px] px-6 py-12 lg:px-10 lg:py-16"><div className="mb-8"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-emerald-600">Event Categories</p><h2 className="mt-2 text-2xl font-black">Event</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Learn, connect, dan transform healthcare bersama melalui webinar dan training pilihan.</p></div><div className="grid gap-8 lg:grid-cols-[1fr_390px]"><div><div className="flex flex-col gap-4 md:flex-row"><div className="relative flex-1"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cari event..." className="w-full rounded-2xl border border-emerald-100 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-emerald-500"/></div><div className="flex flex-wrap gap-2">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${category===c?'bg-emerald-800 text-white':'border border-emerald-100 text-emerald-800 hover:bg-emerald-50'}`}>{c}</button>)}</div></div><div className="mt-7 space-y-4">{filtered.map(e=><article key={e.id} className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"><div className="flex flex-col gap-5 sm:flex-row sm:items-start"><div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800"><span className="text-[10px] font-extrabold uppercase">{new Date(e.date).toLocaleDateString('id-ID',{month:'short'})}</span><span className="text-2xl font-black">{e.date.slice(-2)}</span></div><div className="flex-1"><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-800">{e.category}</span><span className="text-xs font-semibold text-slate-500">{e.time}</span></div><h3 className="mt-2 text-lg font-extrabold text-emerald-950">{e.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{e.summary}</p></div></div></article>)}</div></div><aside className="h-fit rounded-3xl border border-emerald-100 bg-emerald-50/50 p-5 lg:sticky lg:top-24"><div className="flex items-center justify-between"><div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-emerald-600">Calendar</p><h3 className="mt-1 text-xl font-black">{names[m]} {y}</h3></div><div className="flex gap-2"><button onClick={()=>setMonth(new Date(y,m-1,1))} className="rounded-full border border-emerald-100 bg-white p-2 text-emerald-800 hover:bg-emerald-100"><ArrowLeft size={15}/></button><button onClick={()=>setMonth(new Date(y,m+1,1))} className="rounded-full border border-emerald-100 bg-white p-2 text-emerald-800 hover:bg-emerald-100"><ArrowRight size={15}/></button></div></div><div className="mt-5 grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-500">{['Min','Sen','Sel','Rab','Kam','Jum','Sab'].map(d=><div key={d} className="py-2">{d}</div>)}{cells.map((day,i)=><div key={i} className={`min-h-10 rounded-xl p-1 text-xs ${day?'bg-white text-emerald-900':''}`}>{day&&<div className="flex h-full flex-col items-center justify-center"><span className={byDay[day]?'font-black':''}>{day}</span>{byDay[day]&&<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600"/>}</div>}</div>)}</div><div className="mt-5 border-t border-emerald-100 pt-4"><p className="text-xs font-bold text-slate-500">Tanda event</p>{Object.values(byDay).length?Object.values(byDay).map(e=><div key={e.id} className="mt-2 flex items-start gap-2 text-xs text-emerald-800"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600"/><span><strong>{e.date.slice(-2)} {names[m]}</strong> — {e.title}</span></div>):<p className="mt-2 text-xs text-slate-500">Belum ada event pada bulan ini.</p>}</div></aside></div></section></main>;
}

function CommunityPage(){
 const cards=[["Digital Health Forum","Forum diskusi terbuka untuk membahas seputar digital health dan topik kesehatan lainnya di Indonesia",BookOpen],["Hospital CIO Community","Komunitas Chief Information Officer untuk berbagi strategi dan best practice",Building2],["Healthcare IT Community","Wadah kolaborasi tim IT kesehatan dalam teknologi, integrasi, keamanan, dan infrastruktur",Database],["Partner Contributor","Berbagi informasi dan pengalaman sebagai bagian dari Contributor dalam Inovamedika Digital Health Intelligence Platform",Users],["Submit Article","Bagikan wawasan, pengalaman, atau penelitian mengenai transformasi digital layanan kesehatan kepada komunitas Inovamedika Digital Health Intelligence Platform",FileText]];
 return <main className="bg-white text-emerald-950"><ImageHero type="community"/><section className="mx-auto max-w-[1200px] px-6 py-12 lg:px-10 lg:py-16"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{cards.map(([title,desc,Icon])=><article key={title} className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700"><Icon size={22}/></div><h2 className="mt-5 text-xl font-black text-emerald-950">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p></article>)}</div><section className="mt-10 rounded-[2rem] bg-emerald-900 px-7 py-10 text-white lg:px-12 lg:py-12"><h2 className="text-3xl font-black">Bergabung Sekarang</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-50">Jadilah bagian dari komunitas Digital Health dan dapatkan akses ke diskusi khusus, event, dan insight yang menarik</p><button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-emerald-900 transition hover:bg-emerald-50">Bergabung Sekarang <ArrowRight size={16}/></button></section></section></main>;
}

function AboutPage({ onNavigate }) {
  const contentCards = [
    ["News", "Berita terbaru dunia kesehatan digital", "news", FileText],
    ["Insights", "Analisis dan perspektif berdasarkan data", "insights", Activity],
    ["Research", "Riset, survei, dan laporan detail", "research", BookOpen],
    ["Case Studies", "Pembelajaran dari implementasi nyata", "case-studies", Building2],
    ["Knowledge Center", "Materi edukasi dan panduan", "knowledge-center", BookOpen],
    ["Library", "Dokumen referensi, regulasi, dan standar", "library", FileText],
  ];
  const focusCards = [
    ["Smart Hospital", "smart-hospital", Activity],
    ["SATUSEHAT", "satusehat", Database],
    ["Regulasi", "regulasi", FileText],
    ["Digital Health", "digital-health", Globe2],
    ["AI Healthcare", "smart-hospital", Activity],
    ["Cybersecurity", "cybersecurity", ShieldCheck],
  ];

  return (
    <main className="bg-white text-emerald-950">
      {/* About hero intentionally uses a different composition from the global ImageHero. */}
      <section className="relative overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(52,211,153,.28),transparent_35%),linear-gradient(115deg,#022c22_0%,#064e3b_48%,#0f766e_100%)]" />
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border-[55px] border-white/5" />
        <div className="absolute bottom-[-150px] right-[20%] h-96 w-96 rounded-full border-[70px] border-emerald-300/10" />
        <div className="relative mx-auto grid min-h-[430px] max-w-[1240px] items-center gap-10 px-6 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-20">
          <div className="max-w-2xl text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.2em] text-emerald-200 backdrop-blur">
              Inovamedika Digital Health
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Tentang Kami</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-emerald-50 lg:text-lg">
              Platform yang menghadirkan berita, wawasan, riset, dan sumber daya untuk mendorong transformasi digital layanan kesehatan di Indonesia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => document.getElementById("about-platform")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-emerald-900 transition hover:-translate-y-0.5 hover:bg-emerald-50">
                Learn more About us <ArrowRight size={16}/>
              </button>
              <button onClick={() => onNavigate?.("knowledge-center")} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15">
                Lihat Knowledge Center <ArrowRight size={16}/>
              </button>
            </div>
          </div>
          <div className="relative hidden min-h-[320px] lg:block">
            <div className="absolute right-4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-[3rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md rotate-3" />
            <div className="absolute right-12 top-1/2 flex h-64 w-80 -translate-y-1/2 -rotate-3 flex-col justify-between rounded-[2.5rem] border border-white/20 bg-slate-950/20 p-7 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-widest text-emerald-200">Digital Health Intelligence</span><Activity size={22} className="text-emerald-300"/></div>
              <div><p className="text-3xl font-black text-white">Knowledge</p><p className="mt-1 text-sm text-emerald-100">News · Insights · Research · Resources</p></div>
              <div className="grid grid-cols-3 gap-2"><span className="h-2 rounded-full bg-emerald-300"/><span className="h-2 rounded-full bg-teal-300"/><span className="h-2 rounded-full bg-white/30"/></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-platform" className="mx-auto max-w-[1200px] px-6 py-14 text-center lg:px-10 lg:py-18 scroll-reveal">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-emerald-600">About Inovamedika</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-emerald-950 lg:text-4xl">Inovamedika Digital Health Intelligence Platform</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Inovamedika Digital Health Intelligence Platform dikembangkan untuk menjadi pusat informasi dan pengetahuan bagi ekosistem layanan kesehatan yang ingin memahami, mengevaluasi, dan mengadopsi teknologi digital secara lebih efektif.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl overflow-hidden scroll-reveal rounded-[2rem] border border-emerald-100 bg-slate-950 shadow-xl">
          <div className="aspect-video w-full">
            <iframe className="h-full w-full" src="https://www.youtube.com/embed/0UAKW7cb5wY" title="Inovamedika Digital Health" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>

        <section className="mt-16 scroll-reveal">
          <div className="mb-7"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-emerald-600">Explore Platform</p><h2 className="mt-2 text-3xl font-black">Konten Inovamedika</h2></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 scroll-reveal-stagger">
            {contentCards.map(([title, desc, key, Icon]) => (
              <button key={title} onClick={() => onNavigate?.(key)} className="group rounded-3xl border border-emerald-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white"><Icon size={21}/></div>
                <h3 className="mt-5 text-xl font-black text-emerald-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-emerald-700">Explore <ArrowRight size={14}/></span>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-16 scroll-reveal">
          <div className="mb-7"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-emerald-600">Focus Areas</p><h2 className="mt-2 text-3xl font-black">Fokus Kami</h2></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 scroll-reveal-stagger">
            {focusCards.map(([title, key, Icon]) => (
              <button key={title} onClick={() => onNavigate?.("news")} className="group flex flex-col items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 text-center transition hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md">
                <div className="flex flex-col items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm"><Icon size={20}/></div><h3 className="text-base font-extrabold text-emerald-950">{title}</h3></div><ChevronRight size={18} className="mt-2 text-emerald-600 transition group-hover:translate-x-1"/>
              </button>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function DigitalHealthTalkPage({ onReadMore }) {
  const talks = [
    { title:"Digital Health Readiness – Peran Strategis Keuangan dalam Transformasi Digital Rumah Sakit", date:"September 14, 2026", summary:"Transformasi digital memerlukan investasi yang tidak sedikit. Namun keberhasilan implementasi tidak hanya diukur dari teknologi yang digunakan, melainkan juga dari manfaat yang dihasilkan bagi organisasi. Pada episode ini dibahas bagaimana fungsi keuangan berperan dalam menyusun strategi investasi, mengukur…", url:"https://inovamedika.com/digitalhealth/digital-health-talks/digital-health-readiness-peran-strategis-keuangan-dalam-transformasi-digital-rumah-sakit/" },
    { title:"Digital Health Readiness – Sinergi Digital SATUSEHAT & Clinical Pathway", date:"September 14, 2026", summary:"Standarisasi pelayanan dan interoperabilitas merupakan dua komponen penting dalam transformasi digital rumah sakit. Pada episode ini dibahas bagaimana integrasi SATUSEHAT dapat berjalan selaras dengan implementasi Clinical Pathway untuk mendukung pelayanan yang lebih terukur dan berbasis data. Pembahasan juga…", url:"https://inovamedika.com/digitalhealth/digital-health-talks/digital-health-readiness-sinergi-digital-satusehat-clinical-pathway/" },
    { title:"Digital Health Readiness – Rahasia Data Hygiene untuk Integrasi Lancar & Lolos Audit", date:"September 14, 2026", summary:"Kualitas data menjadi fondasi utama dalam transformasi digital layanan kesehatan. Integrasi antar sistem, pelaporan ke SATUSEHAT, hingga proses audit sangat bergantung pada konsistensi dan akurasi data yang dikelola rumah sakit. Pada episode Digital Health Talk ini, dibahas mengapa…", url:"https://inovamedika.com/digitalhealth/digital-health-talks/digital-health-readiness-rahasia-data-hygiene-untuk-integrasi-lancar-lolos-audit/" },
    { title:"Digital Health Readiness – Manajemen Proyek Migrasi Rekam Medis dan Data Quality", date:"September 14, 2026", summary:"Transformasi digital memerlukan investasi yang tidak sedikit. Namun keberhasilan implementasi tidak hanya diukur dari teknologi yang digunakan, melainkan juga dari manfaat yang dihasilkan bagi organisasi. Pada episode ini dibahas bagaimana fungsi keuangan berperan dalam menyusun strategi investasi, mengukur…", url:"https://inovamedika.com/digitalhealth/digital-health-talks/digital-health-readiness-manajemen-proyek-migrasi-rekam-medis-dan-data-quality/" },
    { title:"Digital Health Readiness – Kupas Tuntas Integrasi SATUSEHAT: Solusi Praktis untuk SIMRS Rumah Sakit", date:"September 14, 2026", summary:"Transformasi digital memerlukan investasi yang tidak sedikit. Namun keberhasilan implementasi tidak hanya diukur dari teknologi yang digunakan, melainkan juga dari manfaat yang dihasilkan bagi organisasi. Pada episode ini dibahas bagaimana fungsi keuangan berperan dalam menyusun strategi investasi, mengukur…", url:"https://inovamedika.com/digitalhealth/digital-health-talks/digital-health-readiness-kupas-tuntas-integrasi-satusehat-solusi-praktis-untuk-simrs-rumah-sakit/" },
    { title:"Digital Health Readiness – Strategi Keamanan Informasi di Era Transformasi Digital", date:"September 14, 2026", summary:"Transformasi digital memerlukan investasi yang tidak sedikit. Namun keberhasilan implementasi tidak hanya diukur dari teknologi yang digunakan, melainkan juga dari manfaat yang dihasilkan bagi organisasi. Pada episode ini dibahas bagaimana fungsi keuangan berperan dalam menyusun strategi investasi, mengukur…", url:"https://inovamedika.com/digitalhealth/digital-health-talks/digital-health-readiness-strategi-keamanan-informasi-di-era-transformasi-digital/" },
  ];
  return (
    <main className="bg-white text-emerald-950">
      <ImageHero type="digital-health-talk" />
      <section className="mx-auto max-w-[1200px] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mb-8 max-w-2xl"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-emerald-600">Digital Health Talk</p><h2 className="mt-2 text-3xl font-black">Archives Digital Health Talk</h2><p className="mt-3 text-sm leading-7 text-slate-600">Kumpulan episode dan pembahasan mengenai kesiapan digital, integrasi, data, dan keamanan informasi di layanan kesehatan.</p></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {talks.map((item, i) => (
            <article key={item.url} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className={`relative h-40 bg-gradient-to-br ${['from-emerald-900 to-teal-500','from-cyan-900 to-emerald-500','from-teal-900 to-lime-500'][i%3]} p-6 text-white`}><div className="absolute -right-8 -top-10 h-36 w-36 rounded-full border-[20px] border-white/10"/><div className="relative flex h-full items-end"><span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur">Digital Health Talk</span></div></div>
              <div className="flex flex-1 flex-col p-6"><h3 className="text-lg font-black leading-snug text-emerald-950">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p><div className="mt-auto pt-5"><div className="text-[11px] font-semibold text-emerald-600">Tim Editorial Inovamedika</div><div className="mt-1 text-xs text-slate-500">{item.date}</div><button onClick={() => onReadMore ? onReadMore(item) : window.open(item.url, "_blank", "noopener,noreferrer")} className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 px-4 py-2 text-sm font-extrabold text-emerald-800 transition hover:border-emerald-400 hover:bg-emerald-50">Read more <ArrowRight size={15}/></button></div></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function PlaceholderPage({ title, onReadMore }) { const key=({"News":"news","News & Articles":"news","Insights":"insights"})[title]||"news"; return <EditorialPage title={title} heroType={key} description={`Temukan ${title.toLowerCase()} seputar inovasi, pengetahuan, dan perkembangan kesehatan digital bersama Inovamedika.`} items={pageContent[key]||pageContent.news} onReadMore={onReadMore}/>; }

/* =========================================================
   FOOTER
========================================================= */

function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#E5F7F1] text-emerald-950">
      <div className="mx-auto max-w-[1240px] px-6 pb-8 pt-12 lg:px-10 lg:pt-16">
        <div className="grid gap-10 border-b border-emerald-900/10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div><h4 className="text-sm font-extrabold">About</h4><p className="mt-4 max-w-xs text-xs leading-6 text-slate-600">PT. Inova Medika Solusindo — mendukung transformasi digital kesehatan Indonesia.</p></div>
          <div><h4 className="text-sm font-extrabold">Explore</h4><ul className="mt-4 space-y-3 text-xs text-slate-600">
            <li><button onClick={() => onNavigate('news')} className="transition hover:text-emerald-800">News</button></li><li><button onClick={() => onNavigate('insights')} className="transition hover:text-emerald-800">Insights</button></li><li><button onClick={() => onNavigate('research')} className="transition hover:text-emerald-800">Research</button></li><li><button onClick={() => onNavigate('case-studies')} className="transition hover:text-emerald-800">Case Studies</button></li><li><button onClick={() => onNavigate('library')} className="transition hover:text-emerald-800">Knowledge Center</button></li></ul></div>
          <div><h4 className="text-sm font-extrabold">Topic</h4><ul className="mt-4 space-y-3 text-xs text-slate-600"><li>SATUSEHAT</li><li>Rekam Medis Elektronik</li><li>SIMRS</li><li>Interoperabilitas</li><li>Cybersecurity</li></ul></div>
          <div><h4 className="text-sm font-extrabold">Dapatkan Berita Terbaru</h4><p className="mt-4 text-xs leading-5 text-slate-600">Masukan email Anda dan bergabung dengan newsletter kami.</p><form className="mt-4" onSubmit={(e) => e.preventDefault()}><input type="email" placeholder="Your Email Address" className="h-10 w-full rounded-md border border-emerald-900/5 bg-white/50 px-3 text-xs outline-none focus:border-emerald-600"/><button type="submit" className="mt-3 rounded-full bg-emerald-800 px-4 py-2 text-[10px] font-bold text-white transition hover:bg-emerald-950">Subscribe To Newsletter</button></form></div>
        </div>
        <div className="grid gap-9 py-9 md:grid-cols-[1fr_1.2fr_1fr] md:items-center">
          <div><h4 className="text-xs font-extrabold">Waktu Pelayanan</h4><p className="mt-3 flex gap-2 text-[11px] leading-5 text-slate-600"><Clock3 size={14} className="mt-0.5 shrink-0"/><span>Senin - Jumat<br/>08:00 WIB - 17:00 WIB</span></p><h4 className="mt-5 text-xs font-extrabold">Social Media</h4><div className="mt-3 flex gap-2"><a href="https://www.facebook.com/" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-900/10 text-[10px] hover:bg-white">f</a><a href="https://www.instagram.com/" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-900/10 text-[10px] hover:bg-white">◎</a><a href="https://www.linkedin.com/" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-900/10 text-[10px] hover:bg-white">in</a></div></div>
          <div className="text-center"><p className="text-base font-extrabold leading-6 text-emerald-950">“Transformasi Digital Kesehatan<br className="hidden lg:block"/> Indonesia, Dimulai dari Sini”</p></div>
          <div className="md:justify-self-end"><h4 className="text-xs font-extrabold">Contact Info</h4><div className="mt-3 space-y-2 text-[11px] leading-5 text-slate-600"><p><span className="mr-2">☎</span>(022) 87505214</p><p><span className="mr-2">▯</span>+62 812-2418-4753</p><p><span className="mr-2">＠</span>info@inovamedika.com</p><p><span className="mr-2">⌖</span>Metro Indah Mall (MIM) Blok I3<br/>Jl. Soekarno Hatta, Bandung,<br/>Jawa Barat</p></div></div>
        </div>
        <div className="flex flex-col gap-3 border-t border-emerald-900/10 pt-6 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>Copyright © {new Date().getFullYear()} - PT. Inova Medika Solusindo</span><div className="flex gap-4"><a href="#cookie-policy" className="underline underline-offset-2 hover:text-emerald-800">Cookie Policy</a><span>|</span><a href="#privacy-policy" className="underline underline-offset-2 hover:text-emerald-800">Privacy Policy</a></div></div>
      </div>
    </footer>
  );
}

function HcmWhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(28);

  useEffect(() => {
    const updatePosition = () => {
      const footer = document.querySelector("footer");
      if (!footer) {
        setBottomOffset(28);
        return;
      }

      const footerTop = footer.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      const gap = 16;
      const isFooterVisible = footerTop < viewportHeight;

      setBottomOffset(
        isFooterVisible
          ? Math.max(28, viewportHeight - footerTop + gap)
          : 28
      );
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <a
      href="https://wa.me/+6285862171877"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi HCM melalui WhatsApp"
      className="hcm-whatsapp"
      style={{ bottom: `${bottomOffset}px` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="hcm-whatsapp-label">hubungi HCM</span>
      <span className="hcm-whatsapp-icon" aria-hidden="true">
        {hovered ? (
          <span className="hcm-whatsapp-icon-alt">↗</span>
        ) : (
          <span className="hcm-whatsapp-icon-main">☏</span>
        )}
      </span>
    </a>
  );
}

/* =========================================================
   GLOBAL STYLES
========================================================= */

function GlobalStyles() {
  return (
    <style>{`

      html {
        scroll-behavior: smooth;
      }

      body {
        zoom: 1.18;
        margin: 0;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system,
          BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #ffffff;
      }

      .hcm-whatsapp {
        position: fixed;
        right: 28px;
        bottom: 28px;
        z-index: 120;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        transition: transform 220ms ease, bottom 180ms ease;
      }

      .hcm-whatsapp-icon {
        display: flex;
        width: 58px;
        height: 58px;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        border: 3px solid #ffffff;
        background: #0b8f72;
        color: #ffffff;
        box-shadow: 0 10px 28px rgba(6, 95, 70, 0.28);
        transition: transform 220ms ease, background 220ms ease, box-shadow 220ms ease;
      }

      .hcm-whatsapp:hover .hcm-whatsapp-icon {
        transform: scale(1.08);
        background: #063f35;
        box-shadow: 0 14px 34px rgba(6, 95, 70, 0.34);
      }

      .hcm-whatsapp-icon-main,
      .hcm-whatsapp-icon-alt {
        font-size: 29px;
        font-weight: 800;
        line-height: 1;
      }

      .hcm-whatsapp-icon-alt {
        font-size: 25px;
      }

      .hcm-whatsapp-label {
        max-width: 0;
        overflow: hidden;
        white-space: nowrap;
        border-radius: 9999px;
        background: #063f35;
        padding: 0;
        color: #ffffff;
        font-size: 12px;
        font-weight: 800;
        opacity: 0;
        transform: translateX(8px);
        transition: max-width 220ms ease, padding 220ms ease, opacity 180ms ease, transform 220ms ease;
      }

      .hcm-whatsapp:hover .hcm-whatsapp-label {
        max-width: 120px;
        padding: 9px 14px;
        opacity: 1;
        transform: translateX(0);
      }

      @media (max-width: 768px) {
        .hcm-whatsapp {
          right: 16px;
        }

        .hcm-whatsapp-icon {
          width: 52px;
          height: 52px;
        }

        .hcm-whatsapp-label {
          display: none;
        }
      }

      * {
        box-sizing: border-box;
      }

      @media (max-width: 768px) { body { zoom: 1.08; } }
      .research-card { animation: researchCardIn 520ms cubic-bezier(.22,1,.36,1) both; }
      @keyframes researchCardIn { from { opacity: 0; transform: translateY(18px) scale(.985); } to { opacity: 1; transform: translateY(0) scale(1); } }

      ::selection {
        background: rgba(16, 185, 129, 0.18);
      }

      /* Unified readable Inovamedika green typography across every page */
      .text-slate-950, .text-slate-900 { color: #075e49 !important; }
      .text-slate-800, .text-slate-700 { color: #176b55 !important; }
      .text-slate-600, .text-slate-500 { color: #397765 !important; }
      .text-slate-400 { color: #5d8a7c !important; }
      .text-gray-900, .text-gray-800 { color: #075e49 !important; }
      .text-gray-700, .text-gray-600 { color: #176b55 !important; }
      .text-gray-500, .text-gray-400 { color: #397765 !important; }
      .resource-card, .case-study-card { transition: transform 320ms cubic-bezier(.22,1,.36,1), box-shadow 320ms ease; }
      .resource-card:hover, .case-study-card:hover { transform: translateY(-7px); box-shadow: 0 20px 42px rgba(6,95,70,.14); }

      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }

      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      button,
      a,
      input {
        font-family: inherit;
      }

      /* ================================================
         PAGE ENTER ANIMATION
      ================================================= */

      .page-transition {
        animation: pageEnter 520ms cubic-bezier(0.22, 1, 0.36, 1)
          both;
        transform-origin: top center;
      }

      @keyframes pageEnter {
        0% {
          opacity: 0;
          transform: translateY(18px) scale(0.992);
          filter: blur(3px);
        }

        55% {
          opacity: 0.8;
          filter: blur(0);
        }

        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }
      }

      /* Knowledge Center cards: gentle entrance + interactive lift */
      .knowledge-center article {
        animation: cardRise 620ms cubic-bezier(0.22, 1, 0.36, 1) both;
        transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 320ms ease, border-color 320ms ease, background 320ms ease;
      }
      .knowledge-center article:hover {
        transform: translateY(-8px) scale(1.012);
        box-shadow: 0 22px 48px rgba(6, 95, 70, .14);
      }
      .knowledge-center main h2, .knowledge-center main h3 { color: #075e49; }
      .knowledge-center main p { color: #286b5a; }
      .knowledge-center main { color: #17634f; }
      .knowledge-center h1, .knowledge-center section { text-wrap: pretty; }
      @keyframes cardRise {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .logo-loader-wrap { position: relative; width: 92px; height: 92px; display: grid; place-items: center; }
      .logo-loader-ring { position: absolute; inset: 0; border: 3px solid #d9f3e9; border-top-color: #087f5b; border-right-color: #31b58a; border-radius: 9999px; animation: logoSpin 1.05s linear infinite; }
      .logo-loader-image { width: 62px; height: 62px; object-fit: contain; animation: logoPulse 1.5s ease-in-out infinite; }
      .loading-progress { display: block; width: 40%; height: 100%; border-radius: 9999px; background: linear-gradient(90deg,#087f5b,#53c7a0); animation: progressSweep 950ms ease-in-out infinite; }
      @keyframes logoSpin { to { transform: rotate(360deg); } }
      @keyframes logoPulse { 0%,100% { transform: scale(.94); opacity: .82; } 50% { transform: scale(1.04); opacity: 1; } }
      @keyframes progressSweep { from { transform: translateX(-110%); } to { transform: translateX(260%); } }

      .scroll-reveal { opacity: 0; transform: translateY(28px); transition: opacity 700ms cubic-bezier(.22,1,.36,1), transform 700ms cubic-bezier(.22,1,.36,1); }
      .scroll-reveal.is-visible { opacity: 1; transform: translateY(0); }
      .scroll-reveal-stagger > * { opacity: 0; transform: translateY(22px); transition: opacity 650ms cubic-bezier(.22,1,.36,1), transform 650ms cubic-bezier(.22,1,.36,1); }
      .scroll-reveal-stagger.is-visible > * { opacity: 1; transform: translateY(0); }
      .scroll-reveal-stagger.is-visible > *:nth-child(1) { transition-delay: 60ms; }
      .scroll-reveal-stagger.is-visible > *:nth-child(2) { transition-delay: 120ms; }
      .scroll-reveal-stagger.is-visible > *:nth-child(3) { transition-delay: 180ms; }
      .scroll-reveal-stagger.is-visible > *:nth-child(4) { transition-delay: 240ms; }
      .scroll-reveal-stagger.is-visible > *:nth-child(5) { transition-delay: 300ms; }
      .scroll-reveal-stagger.is-visible > *:nth-child(6) { transition-delay: 360ms; }
      .scroll-reveal-stagger.is-visible > *:nth-child(7) { transition-delay: 420ms; }

      /* ================================================
         REDUCE MOTION
      ================================================= */

      @media (prefers-reduced-motion: reduce) {

        html {
          scroll-behavior: auto;
        }

        .page-transition, .knowledge-center article, .logo-loader-ring, .logo-loader-image, .loading-progress, .scroll-reveal, .scroll-reveal-stagger > * {
          animation: none;
        }

      }

    `}</style>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const [selectedLibraryItem, setSelectedLibraryItem] =
    useState(null);

  const [selectedCaseStudy, setSelectedCaseStudy] =
    useState(null);
  const [selectedKnowledgeItem, setSelectedKnowledgeItem] = useState(null);
  const [selectedResearch, setSelectedResearch] = useState(null);
  const [selectedEditorial, setSelectedEditorial] = useState(null);
  const [selectedEditorialType, setSelectedEditorialType] = useState("news");
  const [loadingMessage, setLoadingMessage] = useState("");

  const [pageTransitionKey, setPageTransitionKey] =
    useState(0);

  const handleTabChange = (tab) => {
    setSelectedLibraryItem(null);
    setSelectedCaseStudy(null);
    setSelectedKnowledgeItem(null);
    setSelectedResearch(null);
    setSelectedEditorial(null);
    setActiveTab(tab);

    setPageTransitionKey((prev) => prev + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openLibraryDetail = (item) => {
    setSelectedLibraryItem(item);
    setSelectedCaseStudy(null);
    setActiveTab("library");

    setPageTransitionKey((prev) => prev + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openCaseStudyDetail = (item) => {
    setSelectedCaseStudy(item);
    setSelectedLibraryItem(null);
    setActiveTab("case-studies");

    setPageTransitionKey((prev) => prev + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const backFromLibraryDetail = () => {
    setSelectedLibraryItem(null);
    setActiveTab("library");

    setPageTransitionKey((prev) => prev + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const backFromCaseDetail = () => {
    setSelectedCaseStudy(null);
    setActiveTab("case-studies");

    setPageTransitionKey((prev) => prev + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openResearchDetail = (item) => { setSelectedResearch(item); setActiveTab("research"); setPageTransitionKey((prev) => prev + 1); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const backFromResearch = () => { setSelectedResearch(null); setActiveTab("research"); setPageTransitionKey((prev) => prev + 1); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const openEditorialDetail = (item, type) => {
    setSelectedEditorial(item);
    setSelectedEditorialType(type || "news");
    setActiveTab(type || "news");
    setPageTransitionKey((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const backFromEditorial = () => {
    setSelectedEditorial(null);
    setPageTransitionKey((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showLoadingThen = (message, callback, item) => {
    setLoadingMessage(message);
    window.setTimeout(() => {
      setLoadingMessage("");
      callback(item);
    }, 1100);
  };
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".scroll-reveal, .scroll-reveal-stagger"));
    if (!nodes.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pageTransitionKey, activeTab, selectedEditorial, selectedLibraryItem, selectedKnowledgeItem, selectedCaseStudy, selectedResearch]);

  const openKnowledgeDetail = (item) => {
    setSelectedKnowledgeItem(item);
    setSelectedLibraryItem(null);
    setSelectedCaseStudy(null);
    setActiveTab("knowledge-center");
    setPageTransitionKey((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const backFromKnowledgeDetail = () => {
    setSelectedKnowledgeItem(null);
    setActiveTab("knowledge-center");
    setPageTransitionKey((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let content = null;

  if (selectedEditorial) {
    const editorialTitle = selectedEditorialType === "insights" ? "Insights" : "News & Articles";
    content = <EditorialDetail item={selectedEditorial} type={selectedEditorialType} title={editorialTitle} onBack={backFromEditorial} />;
  } else if (selectedKnowledgeItem) {
    content = <KnowledgeCenterDetail item={selectedKnowledgeItem} onBack={backFromKnowledgeDetail} />;
  } else if (selectedLibraryItem) {

    content = (
      <LibraryDetail
        item={selectedLibraryItem}
        onBack={backFromLibraryDetail}
      />
    );

  } else if (selectedCaseStudy) {

    content = (
      <CaseStudyDetail
        item={selectedCaseStudy}
        onBack={backFromCaseDetail}
      />
    );

  } else if (activeTab === "home") {
    content = <HomePage onNavigate={handleTabChange} />;

  } else if (activeTab === "library") {

    content = (
      <LibraryPage
        onReadMore={(item) => showLoadingThen("Membuka detail Library...", openLibraryDetail, item)}
      />
    );

  } else if (activeTab === "case-studies") {

    content = (
      <CaseStudiesPage
        onReadMore={(item) => showLoadingThen("Menyiapkan Case Study...", openCaseStudyDetail, item)}
      />
    );

  } else if (activeTab === "contact") {

    content = (
      <PlaceholderPage title="Contact Us" />
    );

  } else if (activeTab === "news") {

    content = (
      <PlaceholderPage title="News & Articles" onReadMore={(item) => showLoadingThen("Membuka artikel News...", (entry) => openEditorialDetail(entry, "news"), item)} />
    );

  } else if (selectedResearch) {
    content = <ResearchDetail item={selectedResearch} onBack={backFromResearch} onSelect={(item) => showLoadingThen("Memuat research berikutnya...", openResearchDetail, item)} />;

  } else if (activeTab === "research") {
    content = <ResearchPage onReadMore={(item) => showLoadingThen("Memuat materi Research...", openResearchDetail, item)} />;

  } else if (activeTab === "insights") {

    content = (
      <PlaceholderPage title="Insights" onReadMore={(item) => showLoadingThen("Membuka Insight...", (entry) => openEditorialDetail(entry, "insights"), item)} />
    );

  } else if (activeTab === "knowledge-center") {

    content = (
      <KnowledgeCenterPage
        onNavigate={handleTabChange}
        onReadMore={(item) => showLoadingThen("Menyiapkan materi Knowledge Center...", openKnowledgeDetail, item)}
      />
    );

  } else if (activeTab === "digital-health-talk") {

    content = (
      <DigitalHealthTalkPage onReadMore={(item) => showLoadingThen("Membuka Digital Health Talk...", (entry) => window.open(entry.url, "_blank", "noopener,noreferrer"), item)} />
    );

  } else if (activeTab === "about") {

    content = (
      <AboutPage onNavigate={handleTabChange} />
    );

  } else if (activeTab === "events") {

    content = (
      <EventsPage />
    );

  } else if (activeTab === "community") {

    content = (
      <CommunityPage />
    );

  } else {
    content = <KnowledgeCenterPage onNavigate={handleTabChange} />;
  }

  return (
    <div className="min-h-screen bg-white">

      <GlobalStyles />

      <Navbar
        activeTab={activeTab}
        onNavigate={handleTabChange}
      />

      <div
        key={pageTransitionKey}
        className="page-transition"
      >
        {content}
      </div>

      {loadingMessage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-white/85 px-5 backdrop-blur-sm" role="status" aria-live="polite">
          <div className="flex min-w-[260px] flex-col items-center rounded-3xl border border-emerald-100 bg-white px-10 py-9 shadow-2xl shadow-emerald-900/10">
            <div className="logo-loader-wrap"><span className="logo-loader-ring"/><img src="/inovamedika.png" alt="Inovamedika" className="logo-loader-image" onError={(e) => { e.currentTarget.style.display = "none"; }}/></div>
            <p className="mt-6 text-sm font-extrabold text-emerald-800">{loadingMessage}</p><p className="mt-2 text-xs text-emerald-700/70">Mohon tunggu sebentar</p><div className="mt-5 h-1.5 w-40 overflow-hidden rounded-full bg-emerald-100"><span className="loading-progress"/></div>
          </div>
        </div>
      )}

      <HcmWhatsAppButton />

      {!selectedLibraryItem && !selectedCaseStudy && !selectedKnowledgeItem && !selectedResearch && (
          <Footer
            onNavigate={handleTabChange}
          />
        )}

    </div>
  );
}