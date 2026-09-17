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
    tag: "SMART HOSPITAL",
    title:
      "Smart Hospital Dashboard untuk Monitoring Operasional",

    desc:
      "Implementasi dashboard rumah sakit terintegrasi untuk membantu manajemen memantau indikator pelayanan, kapasitas, dan operasional secara lebih cepat melalui data yang terpusat.",

    author: "TIM EDITORIAL INOVAMEDIKA",
    date: "JULY 22, 2026",

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
      "Rumah sakit mengembangkan dashboard operasional yang mengintegrasikan data dari berbagai layanan, sehingga informasi dapat dipantau melalui satu tampilan yang terpusat.\n\nDashboard mencakup beberapa area utama dan menyajikan informasi operasional secara terstruktur sehingga pimpinan rumah sakit dapat melihat kondisi pelayanan tanpa harus membuka berbagai sistem secara terpisah.\n\nSeluruh data diperbarui secara berkala sehingga memberikan gambaran kondisi operasional yang lebih aktual.",

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
      "Implementasi dashboard bukan hanya mengenai visualisasi data, tetapi juga memastikan bahwa data yang digunakan memiliki kualitas yang baik dan dapat dipercaya.\n\nDashboard yang efektif harus menyajikan informasi yang relevan, mudah dipahami, dan mendukung proses pengambilan keputusan di berbagai tingkat manajemen.",

    keyOutcomes: [
      {
        area: "Monitoring Operasional",
        impact:
          "Informasi lebih mudah dipantau melalui dashboard terintegrasi",
      },
      {
        area: "Pelaporan",
        impact: "Penyusunan laporan menjadi lebih efisien",
      },
      {
        area: "Pengambilan Keputusan",
        impact:
          "Didukung oleh data operasional yang lebih aktual",
      },
      {
        area: "Koordinasi",
        impact:
          "Antar unit menggunakan sumber data yang sama",
      },
      {
        area: "Transparansi",
        impact:
          "KPI operasional lebih mudah dimonitor oleh manajemen",
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

  {
    id: 2,
    tag: "KLINIK",
    title: "Digitalisasi Operasional Klinik Terpadu",

    desc:
      "Transformasi proses pendaftaran, rekam medis, farmasi, dan pelaporan melalui sistem terintegrasi.",

    author: "TIM EDITORIAL INOVAMEDIKA",
    date: "JUNE 12, 2026",

    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",

    industry: "Klinik Utama",
    location: "Indonesia (Dummy Project)",
    client: "Jaringan Klinik Mitra",
    duration: "4 Bulan",
    status: "Completed",

    solutions: [
      "Clinic Management System",
      "Online Registration",
      "Electronic Medical Record",
      "Appointment Management",
      "Pharmacy Inventory",
    ],

    summary:
      "Sebuah jaringan klinik membutuhkan sistem yang mampu mengintegrasikan proses pelayanan mulai dari registrasi pasien hingga distribusi hasil pelayanan. Proses yang sebelumnya tersebar pada beberapa bagian membuat monitoring operasional dan pelaporan membutuhkan waktu lebih panjang.\n\nImplementasi sistem manajemen klinik terintegrasi membantu menghubungkan proses pendaftaran, pelayanan dokter, rekam medis, appointment, hingga pengelolaan persediaan obat dalam satu workflow digital.",

    challenges: [
      "Antrean pendaftaran pasien masih cukup tinggi.",
      "Penjadwalan dokter belum terintegrasi.",
      "Dokumentasi rekam medis masih membutuhkan proses manual.",
      "Monitoring persediaan obat belum optimal.",
      "Laporan operasional membutuhkan konsolidasi dari beberapa bagian.",
    ],

    solutionDescription:
      "Klinik menerapkan sistem digital yang mencakup online registration, appointment management, rekam medis elektronik, serta modul inventaris obat.\n\nSeluruh workflow pelayanan dirancang agar data dapat digunakan kembali oleh modul lain tanpa perlu melakukan input berulang. Dengan pendekatan ini, proses administrasi dan pelayanan menjadi lebih terstruktur.",

    dashboard: {
      operasional: [
        "Jumlah Pasien",
        "Jadwal Dokter",
        "Waktu Tunggu",
        "Utilisasi Ruang Pelayanan",
      ],

      pelayanan: [
        "Registrasi Online",
        "Pemeriksaan Dokter",
        "Rekam Medis Elektronik",
        "Farmasi",
      ],

      manajemen: [
        "Tren Kunjungan",
        "Produktivitas Dokter",
        "Persediaan Obat",
        "KPI Klinik",
      ],
    },

    implementationResults: [
      "Mengurangi antrean pendaftaran fisik.",
      "Rekam medis pasien lebih mudah diakses oleh tenaga medis.",
      "Penjadwalan pelayanan menjadi lebih terstruktur.",
      "Stok obat dapat dipantau secara lebih akurat.",
    ],

    successFactors: [
      "Adopsi pengguna yang konsisten.",
      "Standardisasi proses pelayanan.",
      "Integrasi modul pelayanan dan farmasi.",
      "Pelatihan tenaga medis dan administrasi.",
    ],

    lessonsLearned:
      "Digitalisasi klinik perlu memperhatikan alur kerja pengguna secara keseluruhan. Sistem yang sederhana dan terintegrasi akan membantu meningkatkan adopsi teknologi oleh tenaga kesehatan maupun staf administrasi.",

    keyOutcomes: [
      {
        area: "Registrasi",
        impact:
          "Proses pendaftaran menjadi lebih cepat dan terstruktur",
      },
      {
        area: "Rekam Medis",
        impact:
          "Informasi pasien dapat diakses secara digital",
      },
      {
        area: "Farmasi",
        impact:
          "Stok obat lebih mudah dipantau",
      },
      {
        area: "Manajemen",
        impact:
          "Informasi operasional tersedia secara lebih terpusat",
      },
    ],

    technologies: [
      "Clinic Management System",
      "Electronic Medical Record",
      "Cloud Application",
      "Appointment Management",
      "Inventory Management",
    ],
  },

  {
    id: 3,
    tag: "SIMRS",
    title: "Integrasi SIMRS dan Sistem Layanan Terpadu",

    desc:
      "Pengembangan integrasi sistem untuk menyatukan data pelayanan rumah sakit dan mendukung workflow digital.",

    author: "TIM EDITORIAL INOVAMEDIKA",
    date: "MAY 04, 2026",

    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",

    industry: "Rumah Sakit Umum",
    location: "Indonesia (Dummy Project)",
    client: "Rumah Sakit Regional",
    duration: "7 Bulan",
    status: "Completed",

    solutions: [
      "SIMRS",
      "System Integration",
      "Centralized Data",
      "Operational Dashboard",
      "API Integration",
    ],

    summary:
      "Rumah sakit memiliki berbagai modul sistem informasi yang digunakan oleh unit pelayanan dan administrasi. Seiring bertambahnya kebutuhan digital, diperlukan pendekatan integrasi agar data dari berbagai modul dapat digunakan secara konsisten.\n\nImplementasi integrasi SIMRS dilakukan untuk menyatukan informasi pelayanan sehingga proses monitoring dan pelaporan dapat dilakukan dari sumber data yang lebih terpusat.",

    challenges: [
      "Data pelayanan tersebar di berbagai modul.",
      "Input data berulang masih ditemukan pada beberapa workflow.",
      "Pelaporan membutuhkan konsolidasi manual.",
      "Informasi antar unit belum selalu tersedia secara konsisten.",
    ],

    solutionDescription:
      "Platform integrasi digunakan untuk menghubungkan berbagai modul SIMRS. Data pelayanan dikonsolidasikan melalui mekanisme integrasi sehingga unit terkait dapat memperoleh informasi yang dibutuhkan tanpa melakukan input ulang.\n\nDashboard operasional kemudian digunakan untuk memberikan gambaran mengenai kondisi pelayanan rumah sakit.",

    dashboard: {
      operasional: [
        "Jumlah Kunjungan",
        "Status Pelayanan",
        "Kapasitas Tempat Tidur",
        "Aktivitas Unit",
      ],

      pelayanan: [
        "Rawat Jalan",
        "Rawat Inap",
        "IGD",
        "Farmasi",
        "Laboratorium",
        "Radiologi",
      ],

      manajemen: [
        "Tren Kunjungan",
        "Kinerja Unit",
        "Utilisasi Layanan",
        "KPI Rumah Sakit",
      ],
    },

    implementationResults: [
      "Data pelayanan menjadi lebih terintegrasi.",
      "Mengurangi input data berulang.",
      "Meningkatkan visibilitas operasional rumah sakit.",
      "Pelaporan menjadi lebih terstruktur.",
    ],

    successFactors: [
      "Pemahaman workflow masing-masing unit.",
      "Standarisasi data.",
      "Integrasi antar modul SIMRS.",
      "Keterlibatan tim IT dan pengguna.",
    ],

    lessonsLearned:
      "Integrasi SIMRS membutuhkan pemahaman menyeluruh terhadap workflow pelayanan. Integrasi tidak hanya berfokus pada pertukaran data, tetapi juga memastikan bahwa data yang diterima setiap modul memiliki struktur dan konteks yang konsisten.",

    keyOutcomes: [
      {
        area: "Integrasi Data",
        impact:
          "Data pelayanan tersedia secara lebih terpusat",
      },
      {
        area: "Workflow",
        impact:
          "Proses antar unit menjadi lebih terhubung",
      },
      {
        area: "Pelaporan",
        impact:
          "Konsolidasi informasi menjadi lebih terstruktur",
      },
      {
        area: "Monitoring",
        impact:
          "Manajemen memperoleh visibilitas operasional yang lebih baik",
      },
    ],

    technologies: [
      "SIMRS",
      "API Integration",
      "System Integration",
      "Centralized Database",
      "Operational Dashboard",
    ],
  },

  {
    id: 4,
    tag: "INTEROPERABILITY",
    title: "Healthcare Interoperability Platform",

    desc:
      "Implementasi platform integrasi untuk mendukung pertukaran data kesehatan melalui API dan standar interoperabilitas.",

    author: "TIM EDITORIAL INOVAMEDIKA",
    date: "APRIL 18, 2026",

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",

    industry: "Healthcare Network",
    location: "Indonesia (Dummy Project)",
    client: "Healthcare Network",
    duration: "8 Bulan",
    status: "Completed",

    solutions: [
      "Healthcare Integration Platform",
      "API Gateway",
      "HL7 FHIR",
      "Data Interoperability",
      "Integration Monitoring",
    ],

    summary:
      "Sebuah jaringan fasilitas kesehatan membutuhkan platform yang dapat menghubungkan beberapa sistem informasi kesehatan dengan pendekatan interoperabilitas.\n\nPlatform integrasi digunakan sebagai lapisan penghubung untuk mengelola pertukaran data antar sistem melalui API dan standar data kesehatan.",

    challenges: [
      "Sistem menggunakan struktur data yang berbeda.",
      "Integrasi point-to-point sulit dikelola ketika jumlah sistem bertambah.",
      "Monitoring transaksi integrasi belum terpusat.",
      "Pengelolaan error membutuhkan proses manual.",
    ],

    solutionDescription:
      "Platform interoperabilitas digunakan sebagai lapisan integrasi antar sistem informasi kesehatan. Setiap transaksi dapat dikelola melalui API sehingga pertukaran data menjadi lebih terstruktur.\n\nPlatform juga menyediakan monitoring terhadap transaksi, status request, serta proses penanganan error sehingga tim IT dapat melakukan troubleshooting dengan lebih mudah.",

    dashboard: {
      operasional: [
        "Transaction Volume",
        "API Request",
        "Success Rate",
        "Error Monitoring",
      ],

      pelayanan: [
        "Patient Data Exchange",
        "Clinical Data Exchange",
        "Healthcare API",
        "FHIR Resources",
      ],

      manajemen: [
        "Integration KPI",
        "Transaction Trends",
        "System Availability",
        "Integration Performance",
      ],
    },

    implementationResults: [
      "Integrasi sistem menjadi lebih terstruktur.",
      "Pertukaran data lebih mudah dimonitor.",
      "Pengelolaan transaksi API menjadi lebih terpusat.",
      "Mendukung implementasi standar interoperabilitas.",
    ],

    successFactors: [
      "Standarisasi format data.",
      "Penggunaan API yang konsisten.",
      "Penerapan standar interoperabilitas.",
      "Monitoring transaksi secara berkala.",
    ],

    lessonsLearned:
      "Interoperabilitas membutuhkan lebih dari sekadar koneksi antar sistem. Struktur data, standar pertukaran informasi, monitoring transaksi, keamanan, serta pengelolaan error perlu dirancang sebagai satu kesatuan.",

    keyOutcomes: [
      {
        area: "Interoperability",
        impact:
          "Pertukaran data antar sistem menjadi lebih terstruktur",
      },
      {
        area: "API Management",
        impact:
          "Transaksi API dapat dipantau melalui satu platform",
      },
      {
        area: "Monitoring",
        impact:
          "Status integrasi lebih mudah dipantau oleh tim IT",
      },
      {
        area: "Scalability",
        impact:
          "Penambahan sistem baru dapat dikelola melalui layer integrasi",
      },
    ],

    technologies: [
      "HL7 FHIR",
      "REST API",
      "API Gateway",
      "Integration Platform",
      "Transaction Monitoring",
      "Healthcare Interoperability",
    ],
  },
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

  const navRef = useRef(null);
  const buttonRefs = useRef({});

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navigate = (id) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  const updateIndicator = () => {
    const nav = navRef.current;
    const activeButton = buttonRefs.current[activeTab];

    if (!nav || !activeButton) return;

    const navRect = nav.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();

    setIndicator({
      left: buttonRect.left - navRect.left,
      width: buttonRect.width,
      opacity: 1,
    });
  };

  useLayoutEffect(() => {
    updateIndicator();
  }, [activeTab]);

  useEffect(() => {
    const handleResize = () => {
      updateIndicator();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeTab]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
        <div className="h-[74px] flex items-center justify-between">

          <button
            onClick={() => navigate("home")}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src={logoDefault}
              alt="Inova Medika"
              className="h-10 w-auto object-contain"
            />
          </button>

          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-1 relative"
          >
            <span
              aria-hidden="true"
              className="absolute top-1/2 -translate-y-1/2 rounded-full bg-emerald-50 pointer-events-none"
              style={{
                left: indicator.left,
                width: indicator.width,
                height: "42px",
                opacity: indicator.opacity,
                transition:
                  "left 420ms cubic-bezier(0.22, 1, 0.36, 1), width 420ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease",
              }}
            />

            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                ref={(element) => {
                  buttonRefs.current[item.id] = element;
                }}
                onClick={() => navigate(item.id)}
                className={`relative z-10 px-4 py-2.5 rounded-full text-[13px] font-medium transition-colors duration-300 ${
                  activeTab === item.id
                    ? "text-emerald-700"
                    : "text-slate-600 hover:text-emerald-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button className="p-2.5 rounded-full hover:bg-slate-100 text-slate-600 transition">
              <Search size={18} />
            </button>

            <button
              onClick={() => navigate("contact")}
              className="px-5 py-2.5 rounded-full bg-emerald-700 text-white text-[13px] font-semibold hover:bg-emerald-800 transition"
            >
              Contact Us
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen
              ? "max-h-[600px] opacity-100 pb-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-3 border-t border-slate-100 grid gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
                  activeTab === item.id
                    ? "bg-emerald-50 text-emerald-700 font-semibold translate-x-1"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => navigate("news")}
              className="text-left px-4 py-3 rounded-xl text-sm text-slate-600 hover:bg-slate-50"
            >
              News
            </button>

            <button
              onClick={() => navigate("contact")}
              className="mt-2 px-4 py-3 rounded-xl bg-emerald-700 text-white text-sm font-semibold"
            >
              Contact Us
            </button>
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
  const [search, setSearch] = useState("");

  const filtered = CASE_STUDIES.filter((item) => {
    const keyword = search.toLowerCase();

    return (
      !keyword ||
      item.title.toLowerCase().includes(keyword) ||
      item.desc.toLowerCase().includes(keyword) ||
      item.tag.toLowerCase().includes(keyword)
    );
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <ImageHero type="case-studies" />

      <main className="max-w-[1440px] mx-auto px-5 lg:px-8 py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-emerald-700">
              OUR WORK
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Healthcare Transformation Stories
            </h2>
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
              className="w-full h-10 pl-10 pr-4 rounded-xl border border-slate-200 outline-none text-xs focus:border-emerald-400"
            />
          </div>
        </div>

        <div className="mt-7 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <CaseStudyCard
              key={item.id}
              item={item}
              onReadMore={onReadMore}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <EmptyState text="Tidak ada case study yang sesuai dengan pencarian." />
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

function DashboardGroup({ title, items, icon }) {
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

        {items.map((item, index) => (
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

      <section className="relative min-h-[620px] overflow-hidden flex items-center">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=80')",
          }}
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative max-w-[1440px] mx-auto w-full px-6 lg:px-10 py-24">

          <div className="max-w-3xl text-white">

            <p className="text-xs font-bold tracking-[0.22em] text-emerald-300">
              INNOVATING HEALTHCARE
            </p>

            <h1 className="mt-5 text-5xl lg:text-7xl font-bold tracking-tight leading-[0.98]">
              Digital Healthcare
              <br />
              <span className="text-emerald-300">
                Transformation
              </span>
            </h1>

            <p className="mt-6 text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Membangun ekosistem teknologi kesehatan yang terintegrasi,
              interoperabel, aman, dan berorientasi pada kebutuhan fasilitas
              kesehatan di Indonesia.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <button
                onClick={() => onNavigate("library")}
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition"
              >
                Explore Library
              </button>

              <button
                onClick={() => onNavigate("case-studies")}
                className="px-6 py-3 rounded-full border border-white/30 bg-white/10 hover:bg-white/15 text-white text-sm font-bold transition"
              >
                View Case Studies
              </button>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-14">

        <div className="grid md:grid-cols-3 gap-5">

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

      </section>

      <section className="bg-slate-50 py-16">

        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">

          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-5">

            <div>

              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-emerald-700">
                CASE STUDIES
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Healthcare Transformation Case Studies
              </h2>

              <p className="mt-3 text-sm text-slate-500 max-w-2xl">
                Pelajari implementasi teknologi digital healthcare melalui
                berbagai studi kasus transformasi.
              </p>

            </div>

            <button
              onClick={() => onNavigate("case-studies")}
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700"
            >
              View All
              <ArrowRight size={15} />
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

      <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16">

        <div className="rounded-3xl bg-emerald-900 px-7 lg:px-12 py-12 text-white flex flex-col lg:flex-row justify-between lg:items-center gap-8">

          <div>

            <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-300 font-bold">
              KNOWLEDGE CENTER
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Explore Healthcare Resources
            </h2>

            <p className="mt-3 text-sm text-emerald-100/75 max-w-xl">
              Temukan referensi mengenai SATUSEHAT, BPJS, RME, HL7 FHIR,
              DICOM, cybersecurity, regulasi, dan teknologi healthcare.
            </p>

          </div>

          <button
            onClick={() => onNavigate("library")}
            className="shrink-0 px-6 py-3 rounded-full bg-white text-emerald-900 text-sm font-bold"
          >
            Open Library
          </button>

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

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-[65vh] bg-slate-50 flex items-center justify-center px-6">

      <div className="text-center">

        <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
          <BookOpen size={24} />
        </div>

        <h1 className="mt-5 text-2xl font-bold text-slate-900">
          {title}
        </h1>

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
    <footer className="bg-[#EAF7F0] text-emerald-950 pt-14 pb-10 border-t border-emerald-200 text-xs">

      <div className="max-w-[1400px] mx-auto px-6 space-y-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="space-y-3">

            <h4 className="font-bold text-sm text-emerald-900">
              About Us
            </h4>

            <p className="text-slate-600 leading-relaxed text-[11px]">
              PT. Inova Medika Solusindo adalah penyedia solusi teknologi
              informasi kesehatan terintegrasi di Indonesia, berfokus pada
              e-Health, SIMRS, dan interoperabilitas data.
            </p>

          </div>

          <div className="space-y-2">

            <h4 className="font-bold text-sm text-emerald-900">
              Explore
            </h4>

            <ul className="space-y-2 text-slate-600 text-[11px]">

              <li>
                <button
                  onClick={() => onNavigate("case-studies")}
                  className="hover:text-emerald-700 transition"
                >
                  Case Studies
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate("library")}
                  className="hover:text-emerald-700 transition"
                >
                  Library Resources
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate("news")}
                  className="hover:text-emerald-700 transition"
                >
                  News & Articles
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate("events")}
                  className="hover:text-emerald-700 transition"
                >
                  Events & Webinar
                </button>
              </li>

            </ul>

          </div>

          <div className="space-y-2">

            <h4 className="font-bold text-sm text-emerald-900">
              Contact
            </h4>

            <p className="text-slate-600 leading-relaxed text-[11px]">
              Email: info@inovamedika.com
              <br />
              Website: www.inovamedika.com
            </p>

          </div>

          <div className="space-y-3">

            <h4 className="font-bold text-sm text-emerald-900">
              Inova Medika
            </h4>

            <p className="text-slate-600 leading-relaxed text-[11px]">
              © {new Date().getFullYear()} PT. Inova Medika Solusindo.
              All rights reserved.
            </p>

          </div>

        </div>

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
  const [activeTab, setActiveTab] = useState("home");

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

  } else if (activeTab === "home") {

    content = (
      <HomePage
        onNavigate={handleTabChange}
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

  } else if (activeTab === "events") {

    content = (
      <PlaceholderPage title="Events" />
    );

  } else if (activeTab === "community") {

    content = (
      <PlaceholderPage title="Community" />
    );

  } else {

    content = (
      <HomePage
        onNavigate={handleTabChange}
      />
    );

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