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
  { id: "news", label: "News" },
  { id: "insights", label: "Insights" },
  { id: "research", label: "Research" },
  { id: "case-studies", label: "Case Studies" },
  { id: "library", label: "Library" },
  { id: "events", label: "Events" },
  { id: "community", label: "Community" },
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
  {
    id: 1,
    tag: "REGULASI",
    title:
      "Peraturan Menteri Kesehatan tentang Rekam Medis Elektronik",
    desc:
      "Regulasi nasional yang mengatur penyelenggaraan Rekam Medis Elektronik pada fasilitas pelayanan kesehatan.",
    publisher: "Kementerian Kesehatan RI",
    year: "2026",
    type: "Regulasi",
    fileType: "PDF",
    pages: "24 Halaman",
    size: "2.4 MB",
    uploadedDate: "12 Januari 2026",
    language: "Indonesia",
    authors: "Kementerian Kesehatan Republik Indonesia",
    source: "Kementerian Kesehatan Republik Indonesia",
    documentType: "Regulasi Kesehatan",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    description:
      "Dokumen regulasi yang membahas penyelenggaraan Rekam Medis Elektronik pada fasilitas pelayanan kesehatan, termasuk aspek tata kelola, keamanan, kerahasiaan, dan interoperabilitas data kesehatan.",
    editorialNote:
      "Konten halaman ini merupakan ringkasan untuk kebutuhan Library. Dokumen PDF yang dirujuk tetap merupakan publikasi asli dari penerbitnya.",
    summary: [
      "Mengatur penyelenggaraan Rekam Medis Elektronik di fasilitas pelayanan kesehatan.",
      "Menetapkan prinsip keamanan dan kerahasiaan informasi kesehatan.",
      "Mendukung interoperabilitas dan pertukaran data kesehatan.",
      "Menjelaskan tanggung jawab fasilitas pelayanan kesehatan dalam pengelolaan rekam medis.",
    ],
    scope: [
      {
        title: "Penyelenggaraan Rekam Medis Elektronik",
        items: [
          "Kebijakan penyelenggaraan RME",
          "Pengelolaan data pasien",
          "Hak akses pengguna",
          "Pengelolaan informasi kesehatan",
        ],
      },
      {
        title: "Keamanan dan Kerahasiaan",
        items: [
          "Perlindungan informasi pasien",
          "Pengendalian akses",
          "Kerahasiaan data",
          "Audit dan pengawasan sistem",
        ],
      },
      {
        title: "Interoperabilitas Data",
        items: [
          "Pertukaran data antar sistem",
          "Standar data kesehatan",
          "Integrasi dengan platform kesehatan nasional",
        ],
      },
    ],
    healthcareRelevance: [
      "Rekam Medis Elektronik",
      "SIMRS",
      "SATUSEHAT",
      "Healthcare Interoperability",
      "Patient Data Management",
    ],
    suitableFor: [
      "Hospital CIO",
      "IT Manager",
      "Medical Record Team",
      "System Analyst",
      "Healthcare IT Team",
      "Digital Health Consultant",
    ],
    reference:
      "Kementerian Kesehatan Republik Indonesia. Peraturan Menteri Kesehatan tentang Rekam Medis Elektronik.",
    pdfUrl: "#",
  },

  {
    id: 2,
    tag: "SATUSEHAT",
    title: "SATUSEHAT Platform Implementation Guide",
    desc:
      "Panduan implementasi integrasi sistem informasi kesehatan dengan platform SATUSEHAT.",
    publisher: "Kementerian Kesehatan RI",
    year: "2025",
    type: "Implementation Guide",
    fileType: "PDF",
    pages: "68 Halaman",
    size: "5.8 MB",
    uploadedDate: "20 November 2025",
    language: "Indonesia",
    authors: "Kementerian Kesehatan Republik Indonesia",
    source: "SATUSEHAT Platform",
    documentType: "Implementation Guide",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Panduan teknis untuk membantu fasilitas pelayanan kesehatan memahami proses integrasi sistem informasi dengan ekosistem SATUSEHAT.",
    editorialNote:
      "Ringkasan disusun untuk membantu pembaca memahami konteks dokumen sebelum membuka dokumen sumber.",
    summary: [
      "Konsep integrasi SATUSEHAT.",
      "Alur pertukaran data kesehatan.",
      "Pemanfaatan API dan standar interoperabilitas.",
      "Persiapan sistem fasilitas kesehatan.",
    ],
    scope: [
      {
        title: "SATUSEHAT Architecture",
        items: [
          "Komponen platform",
          "Integration flow",
          "Healthcare data exchange",
        ],
      },
      {
        title: "API Integration",
        items: [
          "Authentication",
          "Request dan response",
          "Resource management",
          "Error handling",
        ],
      },
    ],
    healthcareRelevance: [
      "SATUSEHAT",
      "FHIR",
      "Healthcare API",
      "SIMRS",
      "RME",
    ],
    suitableFor: [
      "System Architect",
      "Software Engineer",
      "Integration Specialist",
      "IT Manager",
      "Healthcare IT Team",
    ],
    reference:
      "Kementerian Kesehatan Republik Indonesia. SATUSEHAT Platform Implementation Guide.",
    pdfUrl: "#",
  },

  {
    id: 3,
    tag: "HL7 FHIR",
    title: "HL7 FHIR Interoperability Overview",
    desc:
      "Pengantar standar HL7 FHIR untuk pertukaran informasi kesehatan secara interoperabel.",
    publisher: "HL7 International",
    year: "2025",
    type: "Technical Standard",
    fileType: "PDF",
    pages: "42 Halaman",
    size: "4.1 MB",
    uploadedDate: "7 Oktober 2025",
    language: "English",
    authors: "HL7 International",
    source: "HL7 International",
    documentType: "Technical Standard",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Dokumen pengantar mengenai HL7 FHIR dan penggunaannya untuk interoperabilitas sistem informasi kesehatan.",
    editorialNote:
      "Halaman Library menyajikan ringkasan dan konteks penggunaan dokumen. Dokumen sumber tetap mengacu pada publikasi penerbit.",
    summary: [
      "Konsep dasar HL7 FHIR.",
      "FHIR resources.",
      "RESTful API.",
      "Pertukaran informasi kesehatan.",
    ],
    scope: [
      {
        title: "FHIR Fundamentals",
        items: [
          "FHIR Resources",
          "Profiles",
          "Extensions",
          "Implementation Guides",
        ],
      },
      {
        title: "Healthcare Interoperability",
        items: [
          "Data exchange",
          "API-based integration",
          "System interoperability",
        ],
      },
    ],
    healthcareRelevance: [
      "HL7 FHIR",
      "Healthcare API",
      "Interoperability",
      "RME",
      "Health Information Exchange",
    ],
    suitableFor: [
      "Software Engineer",
      "System Architect",
      "Integration Specialist",
      "System Analyst",
      "Digital Health Consultant",
    ],
    reference:
      "HL7 International. HL7 FHIR Interoperability Overview.",
    pdfUrl: "#",
  },

  {
    id: 4,
    tag: "DICOM",
    title: "DICOM Overview and Medical Imaging Interoperability",
    desc:
      "Dokumen pengantar mengenai standar DICOM untuk pertukaran dan pengelolaan medical imaging.",
    publisher: "DICOM Standards Committee",
    year: "2018",
    type: "Technical Standard",
    fileType: "PDF",
    pages: "36 Halaman",
    size: "3.7 MB",
    uploadedDate: "18 September 2025",
    language: "English",
    authors: "DICOM Standards Committee",
    source: "DICOM Standard",
    documentType: "Medical Imaging Standard",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80",
    description:
      "Dokumen yang menjelaskan konsep dasar DICOM dan perannya dalam pertukaran informasi medical imaging.",
    editorialNote:
      "Ringkasan ini disediakan untuk kebutuhan Library dan tidak menggantikan dokumen standar asli.",
    summary: [
      "Konsep DICOM.",
      "Medical imaging workflow.",
      "Interoperability.",
      "Pertukaran image dan metadata.",
    ],
    scope: [
      {
        title: "DICOM Fundamentals",
        items: [
          "Images",
          "Metadata",
          "Information objects",
          "DICOM services",
        ],
      },
      {
        title: "Imaging Workflow",
        items: [
          "Modality",
          "PACS",
          "RIS",
          "Hospital Information System",
        ],
      },
    ],
    healthcareRelevance: [
      "Radiology",
      "PACS",
      "RIS",
      "DICOM",
      "Medical Imaging",
    ],
    suitableFor: [
      "Radiology IT Team",
      "System Architect",
      "Healthcare IT Team",
      "Integration Specialist",
    ],
    reference:
      "DICOM Standards Committee. DICOM Overview and Medical Imaging Interoperability.",
    pdfUrl: "#",
  },

  {
    id: 5,
    tag: "BPJS",
    title: "Digital Healthcare Integration and BPJS Workflow",
    desc:
      "Materi referensi mengenai integrasi sistem informasi fasilitas kesehatan dengan workflow layanan BPJS.",
    publisher: "Healthcare Technology Reference",
    year: "2025",
    type: "Healthcare Integration",
    fileType: "PDF",
    pages: "31 Halaman",
    size: "3.2 MB",
    uploadedDate: "8 Agustus 2025",
    language: "Indonesia",
    authors: "Healthcare Technology Editorial Team",
    source: "Healthcare Technology Reference",
    documentType: "Integration Guide",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
    description:
      "Referensi mengenai digitalisasi workflow administrasi dan integrasi data dalam pelayanan kesehatan.",
    editorialNote:
      "Materi dirangkum sebagai referensi awal untuk pembaca Library.",
    summary: [
      "Digitalisasi administrasi pasien.",
      "Integrasi workflow pelayanan.",
      "Pertukaran data.",
      "Pengurangan proses manual.",
    ],
    scope: [
      {
        title: "Healthcare Administration",
        items: [
          "Patient registration",
          "Eligibility",
          "Referral workflow",
          "Service documentation",
        ],
      },
    ],
    healthcareRelevance: [
      "BPJS",
      "SIMRS",
      "Patient Registration",
      "Healthcare Integration",
    ],
    suitableFor: [
      "Hospital IT Team",
      "Hospital Operations",
      "System Analyst",
      "Digital Health Consultant",
    ],
    reference:
      "Healthcare Technology Reference. Digital Healthcare Integration and BPJS Workflow.",
    pdfUrl: "#",
  },

  {
    id: 6,
    tag: "CYBERSECURITY",
    title: "Healthcare Cybersecurity Fundamentals",
    desc:
      "Panduan dasar keamanan siber untuk sistem informasi dan data kesehatan.",
    publisher: "Healthcare Security Reference",
    year: "2025",
    type: "Cybersecurity",
    fileType: "PDF",
    pages: "55 Halaman",
    size: "4.6 MB",
    uploadedDate: "16 Juli 2025",
    language: "English",
    authors: "Healthcare Security Editorial Team",
    source: "Healthcare Security Reference",
    documentType: "Cybersecurity Guide",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Referensi dasar mengenai cybersecurity dalam lingkungan sistem informasi kesehatan.",
    editorialNote:
      "Ringkasan digunakan sebagai informasi pendukung dan tidak menggantikan dokumen sumber.",
    summary: [
      "Healthcare cybersecurity fundamentals.",
      "Access control.",
      "Data protection.",
      "Security monitoring.",
    ],
    scope: [
      {
        title: "Healthcare Security",
        items: [
          "Identity management",
          "Access control",
          "Data protection",
          "Security monitoring",
        ],
      },
    ],
    healthcareRelevance: [
      "Cybersecurity",
      "RME",
      "Patient Data",
      "Hospital Information System",
    ],
    suitableFor: [
      "CISO",
      "IT Security Team",
      "Hospital CIO",
      "System Architect",
      "Risk & Compliance Team",
    ],
    reference:
      "Healthcare Security Reference. Healthcare Cybersecurity Fundamentals.",
    pdfUrl: "#",
  },

  {
    id: 7,
    tag: "CYBERSECURITY",
    title:
      "Securely Connecting the World with Cyber Security Standards",
    desc:
      "Securely Connecting the World with Cyber Security Standards merupakan publikasi dari National Institute of Standards and Technology (NIST) yang membahas peran standar cybersecurity dalam membangun konektivitas digital yang aman.",
    publisher:
      "National Institute of Standards and Technology (NIST)",
    year: "2005",
    type: "Cybersecurity Standard",
    fileType: "PDF",
    pages: "18 Halaman",
    size: "PDF",
    uploadedDate: "2005",
    language: "English",
    authors: "Alicia Clay & Michael D. Hogan",
    source: "NIST",
    documentType: "Cybersecurity Standards Publication",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80",
    description:
      "Securely Connecting the World with Cyber Security Standards merupakan publikasi dari National Institute of Standards and Technology (NIST) yang membahas peran standar cybersecurity dalam membangun konektivitas digital yang aman. Dokumen ini menjelaskan bagaimana standar keamanan dapat membantu organisasi menjaga kerahasiaan, integritas, dan ketersediaan sistem serta informasi. Pembahasan juga mencakup kategori standar cybersecurity, identity management, security testing, interoperability, serta pengelolaan keamanan sistem informasi.",
    editorialNote:
      "Konten halaman ini merupakan ringkasan untuk kebutuhan Library. Dokumen PDF yang dirujuk tetap merupakan publikasi asli dari NIST.",
    summary: [
      "Pentingnya standar dalam mengamankan sistem yang saling terhubung.",
      "Confidentiality — menjaga kerahasiaan informasi.",
      "Integrity — menjaga keutuhan dan keakuratan informasi.",
      "Availability — memastikan sistem dan informasi tersedia saat dibutuhkan.",
      "Assurance — memberikan keyakinan bahwa sistem telah memenuhi kebutuhan keamanan.",
      "Kategori standar mencakup technical standards, management standards, dan testing standards.",
    ],
    scope: [
      {
        number: "01",
        title: "Cyber Security Standards",
        items: [
          "Confidentiality",
          "Integrity",
          "Availability",
          "Security assurance",
          "Interoperability",
          "Secure connectivity",
        ],
      },
      {
        number: "02",
        title: "Categories of Cyber Security Standards",
        items: [
          "Technical Standards — menetapkan kebutuhan teknis untuk hardware, software, firmware, access, encryption, dan interoperability.",
          "Management Standards — mendukung pengelolaan keamanan organisasi dan risk management.",
          "Testing Standards — menyediakan metode pengujian untuk memverifikasi sistem dan komponen.",
        ],
      },
      {
        number: "03",
        title: "Identity Management",
        items: [
          "User identity",
          "Identifier management",
          "Authentication",
          "Identity theft protection",
          "Biometric identification",
          "Smart card technologies",
        ],
      },
      {
        number: "04",
        title: "Cyber Security Testing",
        items: [
          "Conformance testing",
          "Interoperability testing",
          "Security testing",
          "Test methodology",
          "Test scenarios",
          "Laboratory testing",
          "Validation and certification",
        ],
      },
      {
        number: "05",
        title: "Secure Management of Information Systems",
        items: [
          "Identify security needs",
          "Determine appropriate controls",
          "Test security implementation",
          "Improve interoperability",
          "Support risk management",
        ],
      },
    ],
    healthcareRelevance: [
      "EMR / RME",
      "Hospital Information System",
      "Healthcare APIs",
      "Health Information Exchange",
      "Patient Identity Management",
      "Interoperability Platform",
      "Connected Medical Systems",
    ],
    suitableFor: [
      "Hospital CIO",
      "IT Manager",
      "Cybersecurity Team",
      "Information Security Officer",
      "System Architect",
      "Software Engineer",
      "System Analyst",
      "Healthcare IT Team",
      "Healthcare Integration Specialist",
      "Digital Health Consultant",
      "IT Governance Team",
      "Risk & Compliance Team",
    ],
    reference:
      "National Institute of Standards and Technology (NIST). Securely Connecting the World with Cyber Security Standards. Alicia Clay & Michael D. Hogan.",
    pdfUrl:
      "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=150423",
  },
];

/* =========================================================
   CASE STUDIES
========================================================= */

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
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });
  const navRef = useRef(null);
  const itemRefs = useRef({});

  const navigate = (id) => {
    onNavigate(id);
    setMobileOpen(false);
    setMoreOpen(false);
  };

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const nav = navRef.current;
      const active = itemRefs.current[activeTab];
      if (!nav || !active) {
        setIndicator((prev) => ({ ...prev, visible: false }));
        return;
      }

      const navBox = nav.getBoundingClientRect();
      const activeBox = active.getBoundingClientRect();

      setIndicator({
        left: activeBox.left - navBox.left,
        width: activeBox.width,
        visible: true,
      });
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeTab]);

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
          <nav
            ref={navRef}
            className="hidden lg:flex relative items-center gap-1"
          >
            {/* GREEN ACTIVE PILL: bergerak mengikuti menu yang dipilih */}
            <div
              className="absolute top-0 bottom-0 rounded-full bg-emerald-100 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.visible ? 1 : 0,
              }}
            />

            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                ref={(node) => {
                  itemRefs.current[item.id] = node;
                }}
                onClick={() => navigate(item.id)}
                className={`relative z-10 px-3.5 py-2.5 rounded-full text-[10px] font-semibold whitespace-nowrap transition-colors duration-300 ${
                  activeTab === item.id
                    ? 'text-emerald-900'
                    : 'text-slate-700 hover:text-emerald-800'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* MORE */}
            <div className="relative ml-1">
              <button
                onClick={() => setMoreOpen((value) => !value)}
                className={`relative z-10 inline-flex items-center gap-1 px-3.5 py-2.5 rounded-full text-[10px] font-semibold whitespace-nowrap transition-colors duration-300 ${
                  moreOpen
                    ? 'bg-emerald-100 text-emerald-900'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-800'
                }`}
              >
                More
                <span className={`text-[9px] transition-transform duration-300 ${moreOpen ? 'rotate-180' : ''}`}>
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
                className={`text-left px-4 py-2.5 rounded-lg text-xs transition ${
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
  const isLibrary = type === "library";

  return (
    <section className="relative min-h-[300px] lg:min-h-[350px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${
            isLibrary
              ? "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=80"
              : "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80"
          }')`,
        }}
      />

      <div className="absolute inset-0 bg-slate-950/80" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20 flex items-center min-h-[300px] lg:min-h-[350px]">
        <div className="max-w-3xl text-white">
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-emerald-300 mb-4">
            {isLibrary ? "KNOWLEDGE CENTER" : "SUCCESS STORIES"}
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
            {isLibrary ? (
              <>
                Healthcare
                <br />
                <span className="text-emerald-300">
                  Library Resources
                </span>
              </>
            ) : (
              <>
                Healthcare Transformation
                <br />
                <span className="text-emerald-300">
                  Case Studies
                </span>
              </>
            )}
          </h1>

          <p className="mt-5 text-sm lg:text-base text-slate-200 leading-relaxed max-w-2xl">
            {isLibrary
              ? "Kumpulan referensi, standar, regulasi, dan publikasi yang relevan dengan transformasi digital healthcare."
              : "Pelajari bagaimana berbagai fasilitas kesehatan di Indonesia berhasil melakukan digitalisasi operasional dan integrasi layanan medis bersama solusi kami."}
          </p>

          {onBack && (
            <button
              onClick={onBack}
              className="mt-7 inline-flex items-center gap-2 text-sm text-white hover:text-emerald-300 transition"
            >
              <ArrowLeft size={16} />
              Kembali
            </button>
          )}
        </div>
      </div>
    </section>
  );
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

              <button
                onClick={() => onNavigate("research")}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-800 px-5 py-3 text-[11px] font-bold text-white shadow-sm transition hover:bg-emerald-900"
              >
                Explore Research
                <ArrowRight size={13} />
              </button>

              <div className="mt-4 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
                <span className="h-1.5 w-3.5 rounded-full bg-emerald-700" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
              </div>
            </div>

            {/* INLINE HEALTHCARE ILLUSTRATION — NO EXTERNAL IMAGE */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="absolute right-[5%] top-[8%] h-[330px] w-[330px] rounded-[55px] bg-[#D8F7E9]" />
              <div className="absolute right-[10%] top-[18%] h-[270px] w-[270px] rounded-full bg-[#EEF7FF]" />

              <svg
                viewBox="0 0 620 430"
                className="relative z-10 w-full max-w-[610px] drop-shadow-sm"
                aria-label="Digital healthcare illustration"
              >
                {/* decorative leaves */}
                <g opacity="0.35" fill="none" stroke="#8BCDB5" strokeWidth="3">
                  <path d="M90 55 C145 28, 178 38, 205 77 C153 68, 121 65, 90 55Z" />
                  <path d="M92 55 C115 91, 140 106, 179 107" />
                  <path d="M500 60 C545 40, 568 54, 580 92 C540 82, 519 73, 500 60Z" />
                  <path d="M500 60 C520 98, 545 112, 577 117" />
                  <path d="M65 335 C104 311, 133 317, 150 350 C115 348, 89 344, 65 335Z" />
                  <path d="M65 335 C85 365, 109 378, 142 381" />
                </g>

                {/* hospital monitor */}
                <rect x="315" y="92" width="172" height="116" rx="13" fill="#FFFFFF" stroke="#B9D5EF" strokeWidth="4" />
                <rect x="333" y="108" width="136" height="82" rx="8" fill="#DDEBFF" />
                <path d="M350 164 L371 150 L390 158 L413 132 L433 145 L452 124" fill="none" stroke="#5B79D8" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="350" cy="164" r="5" fill="#5B79D8" />
                <rect x="388" y="208" width="25" height="12" rx="4" fill="#9CB6D6" />
                <rect x="362" y="220" width="78" height="9" rx="4.5" fill="#AFC6DD" />

                {/* bed */}
                <rect x="182" y="287" width="315" height="72" rx="18" fill="#D6E8F8" />
                <rect x="164" y="300" width="48" height="75" rx="16" fill="#D1E3F2" />
                <rect x="215" y="267" width="120" height="57" rx="22" fill="#FFFFFF" />
                <rect x="330" y="283" width="164" height="18" rx="9" fill="#B9D6ED" />
                <line x1="206" y1="359" x2="206" y2="390" stroke="#7B99B4" strokeWidth="7" />
                <line x1="477" y1="359" x2="477" y2="390" stroke="#7B99B4" strokeWidth="7" />
                <circle cx="206" cy="395" r="8" fill="#64859E" />
                <circle cx="477" cy="395" r="8" fill="#64859E" />

                {/* patient head */}
                <circle cx="250" cy="239" r="24" fill="#F1B08C" />
                <path d="M226 238 C227 212, 260 202, 275 226 C264 221, 247 225, 226 238Z" fill="#26364B" />
                <path d="M249 263 C285 254, 318 260, 345 282 L319 313 L250 302Z" fill="#5B79D8" />
                <path d="M303 276 L350 303" stroke="#F1B08C" strokeWidth="14" strokeLinecap="round" />
                <path d="M267 292 L305 320" stroke="#F1B08C" strokeWidth="14" strokeLinecap="round" />

                {/* doctor */}
                <circle cx="516" cy="142" r="25" fill="#F1B08C" />
                <path d="M493 141 C496 113, 531 106, 544 132 C534 127, 514 127, 493 141Z" fill="#26364B" />
                <path d="M483 178 C500 157, 532 157, 548 179 L560 259 L492 259Z" fill="#FFFFFF" stroke="#D5E2EC" strokeWidth="3" />
                <path d="M493 182 L463 235" stroke="#FFFFFF" strokeWidth="17" strokeLinecap="round" />
                <path d="M545 183 L570 225" stroke="#FFFFFF" strokeWidth="17" strokeLinecap="round" />
                <rect x="476" y="206" width="45" height="34" rx="5" fill="#DDEBFF" stroke="#9CB8D3" strokeWidth="2" />
                <path d="M483 222 L491 218 L498 225 L508 211" fill="none" stroke="#5B79D8" strokeWidth="3" />

                {/* small tablet */}
                <rect x="423" y="242" width="55" height="76" rx="8" fill="#32445D" transform="rotate(-8 423 242)" />
                <rect x="431" y="250" width="39" height="56" rx="4" fill="#DDEBFF" transform="rotate(-8 431 250)" />

                {/* shoes */}
                <path d="M479 259 L501 257 L511 280 L484 283Z" fill="#E85B63" />
                <path d="M540 258 L558 258 L569 279 L541 283Z" fill="#E85B63" />

                {/* floor shadow */}
                <ellipse cx="352" cy="399" rx="190" ry="12" fill="#B8E5D2" opacity="0.55" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* HOME TOPIC ICONS */}
      <section className="bg-white">
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
      <section className="bg-[#F8FCFA] py-14">
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

          <div className="mt-7 grid md:grid-cols-3 gap-5">
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
      <section className="bg-white py-14">
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

          <div className="mt-7 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
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

function KnowledgeCenterPage({ onNavigate }) {
  const [selectedType, setSelectedType] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const types = ["ALL", "CHECKLIST", "EBOOK", "INFOGRAPHIC", "TEMPLATE", "WHITEPAPER"];
  const visibleItems = LIBRARY_ITEMS.filter((item) => {
    const matchesType = selectedType === "ALL" || item.tag.toUpperCase() === selectedType || item.type.toUpperCase() === selectedType;
    const haystack = `${item.title} ${item.desc} ${item.tag} ${item.type}`.toLowerCase();
    return matchesType && haystack.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#F7FCFA] text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 text-white">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1280px] px-6 py-14 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-emerald-100">
              <BookOpen size={14} /> Knowledge Center
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Knowledge for a<br/><span className="text-emerald-300">Smarter Healthcare Future</span></h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-emerald-50/85 lg:text-base">Temukan panduan, checklist, ebook, infografik, template, dan referensi untuk mendukung transformasi digital fasilitas kesehatan.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => onNavigate('library')} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-emerald-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50">Jelajahi Library <ArrowRight size={15}/></button>
              <button onClick={() => onNavigate('case-studies')} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/10">Lihat Case Studies</button>
            </div>
          </div>
        </div>
      </section>

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
              <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600">{item.desc}</p>
              <div className="mt-auto flex items-center justify-between gap-2 border-t border-emerald-900/10 pt-5 mt-5">
                <span className="text-xs text-slate-600"><FileText size={13} className="mr-1 inline"/>{item.fileType}</span>
                <button onClick={() => onNavigate('library')} className="inline-flex items-center gap-1.5 rounded-full bg-emerald-800 px-3.5 py-2 text-[10px] font-bold text-white transition hover:bg-emerald-950">Read More <ArrowRight size={13}/></button>
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

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-[65vh] bg-slate-50 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
          <BookOpen size={24} />
        </div>
        <h1 className="mt-5 text-2xl font-bold text-slate-900">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">
          Halaman ini sedang dalam pengembangan.
        </p>
      </div>
    </div>
  );
}

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
        margin: 0;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system,
          BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #ffffff;
      }

      * {
        box-sizing: border-box;
      }

      ::selection {
        background: rgba(16, 185, 129, 0.18);
      }

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

      /* ================================================
         REDUCE MOTION
      ================================================= */

      @media (prefers-reduced-motion: reduce) {

        html {
          scroll-behavior: auto;
        }

        .page-transition {
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
  const [activeTab, setActiveTab] = useState("knowledge-center");

  const [selectedLibraryItem, setSelectedLibraryItem] =
    useState(null);

  const [selectedCaseStudy, setSelectedCaseStudy] =
    useState(null);

  const [pageTransitionKey, setPageTransitionKey] =
    useState(0);

  const handleTabChange = (tab) => {
    setSelectedLibraryItem(null);
    setSelectedCaseStudy(null);
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

  let content = null;

  if (selectedLibraryItem) {

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

  } else if (activeTab === "library") {

    content = (
      <LibraryPage
        onReadMore={openLibraryDetail}
      />
    );

  } else if (activeTab === "case-studies") {

    content = (
      <CaseStudiesPage
        onReadMore={openCaseStudyDetail}
      />
    );

  } else if (activeTab === "contact") {

    content = (
      <PlaceholderPage title="Contact Us" />
    );

  } else if (activeTab === "news") {

    content = (
      <PlaceholderPage title="News & Articles" />
    );

  } else if (activeTab === "research") {

    content = (
      <PlaceholderPage title="Research" />
    );

  } else if (activeTab === "insights") {

    content = (
      <PlaceholderPage title="Insights" />
    );

  } else if (activeTab === "knowledge-center") {

    content = (
      <KnowledgeCenterPage
        onNavigate={handleTabChange}
      />
    );

  } else if (activeTab === "digital-health-talk") {

    content = (
      <PlaceholderPage title="Digital Health Talk" />
    );

  } else if (activeTab === "about") {

    content = (
      <PlaceholderPage title="About" />
    );

  } else if (activeTab === "events") {

    content = (
      <PlaceholderPage title="Events" />
    );

  } else if (activeTab === "community") {

    content = (
      <PlaceholderPage title="Community" />
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

      {!selectedLibraryItem &&
        !selectedCaseStudy && (
          <Footer
            onNavigate={handleTabChange}
          />
        )}

    </div>
  );
}