import React, { useEffect, useRef, useState } from "react";
import logoDefault from "./assets/logo-default.png";

/* =========================================================
   NAVIGATION
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

/* =========================================================
   LIBRARY TOPICS
========================================================= */

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

/* =========================================================
   CASE STUDIES
========================================================= */

const CASE_STUDIES = [
  {
    id: 1,
    tag: "SMART HOSPITAL",
    title: "Smart Hospital Dashboard untuk Monitoring Operasional",
    description:
      "Implementasi dashboard eksekutif untuk membantu rumah sakit memonitor operasional, pelayanan, kapasitas, dan indikator kinerja secara terintegrasi.",
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
    summary: [
      "Sebuah rumah sakit menghadapi tantangan dalam memantau operasional secara menyeluruh karena informasi berasal dari berbagai sistem dan laporan manual.",
      "Kondisi tersebut menyebabkan proses pengambilan keputusan menjadi lebih lambat, terutama ketika manajemen membutuhkan data terkini mengenai pelayanan, kapasitas, maupun kinerja operasional.",
      "Melalui implementasi Smart Hospital Dashboard, data dari berbagai modul SIMRS diintegrasikan ke dalam satu dashboard yang menampilkan informasi secara real-time.",
      "Dashboard ini membantu pimpinan rumah sakit memonitor indikator utama pelayanan dan operasional melalui visualisasi yang lebih mudah dipahami.",
    ],
    challenges: [
      "Data operasional tersebar di berbagai modul dan sulit dikonsolidasikan.",
      "Penyusunan laporan manajemen masih dilakukan secara manual.",
      "Monitoring indikator pelayanan membutuhkan waktu yang lama.",
      "Informasi yang diterima manajemen tidak selalu mencerminkan kondisi terkini.",
      "Pengambilan keputusan sering bergantung pada laporan periodik.",
    ],
    solutionDescription:
      "Rumah sakit mengembangkan dashboard operasional yang mengintegrasikan data dari berbagai layanan, sehingga informasi dapat dipantau melalui satu tampilan yang terpusat.",
    solutionAreas: [
      {
        title: "Monitoring Kapasitas",
        items: [
          "Bed Occupancy Rate (BOR)",
          "Ketersediaan tempat tidur",
          "Average Length of Stay (ALOS)",
          "Turn Over Interval (TOI)",
          "Bed Turn Over (BTO)",
        ],
      },
      {
        title: "Pelayanan",
        items: [
          "Kunjungan pasien rawat jalan",
          "Kunjungan rawat inap",
          "Status pelayanan IGD",
          "Aktivitas kamar operasi",
          "Pemeriksaan laboratorium",
          "Pemeriksaan radiologi",
          "Monitoring antrean pelayanan",
        ],
      },
      {
        title: "Manajemen",
        items: [
          "Pendapatan harian",
          "Tren kunjungan",
          "Utilisasi tempat tidur",
          "Dashboard KPI rumah sakit",
          "Executive Dashboard untuk pimpinan",
        ],
      },
    ],
    outcomes: [
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
    lessons:
      "Implementasi dashboard bukan hanya mengenai visualisasi data, tetapi juga memastikan bahwa data yang digunakan memiliki kualitas yang baik dan dapat dipercaya. Dashboard yang efektif harus menyajikan informasi yang relevan, mudah dipahami, dan mendukung proses pengambilan keputusan di berbagai tingkat manajemen.",
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
    content:
      "Implementasi Smart Hospital Dashboard ini bertujuan untuk mengintegrasikan seluruh data operasional rumah sakit secara terstruktur dan mudah dipantau.",
    impacts: [
      "Monitoring operasional melalui dashboard terintegrasi",
      "Pengambilan keputusan berbasis data operasional",
      "Visualisasi indikator pelayanan secara lebih mudah dipahami",
    ],
  },

  {
    id: 2,
    tag: "LABORATORIUM",
    title: "Modernisasi Laboratorium dengan iLab",
    description:
      "Laboratorium berhasil mengintegrasikan proses registrasi, barcode specimen, hasil pemeriksaan, dan distribusi laporan secara digital.",
    author: "TIM EDITORIAL INOVAMEDIKA",
    date: "JULY 22, 2026",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    industry: "Laboratorium Klinik",
    location: "Indonesia (Dummy Project)",
    client: "Jaringan Laboratorium Klinik",
    duration: "3 Bulan",
    status: "Completed",
    solutions: [
      "Laboratory Information System",
      "Barcode Specimen",
      "Digital Result",
      "Workflow Automation",
    ],
    summary: [
      "Laboratorium menghadapi kebutuhan untuk meningkatkan efisiensi proses pemeriksaan dan distribusi hasil.",
      "Implementasi sistem iLab membantu menghubungkan proses registrasi, specimen, pemeriksaan, hingga penerbitan hasil.",
    ],
    challenges: [
      "Pencatatan specimen masih membutuhkan proses manual.",
      "Distribusi hasil pemeriksaan membutuhkan waktu.",
      "Risiko kesalahan input masih cukup tinggi.",
    ],
    solutionDescription:
      "Sistem iLab digunakan untuk mengotomatisasi workflow laboratorium mulai dari registrasi hingga distribusi hasil pemeriksaan.",
    solutionAreas: [
      {
        title: "Laboratory Workflow",
        items: [
          "Registrasi pasien",
          "Barcode specimen",
          "Tracking specimen",
          "Hasil pemeriksaan",
          "Distribusi laporan",
        ],
      },
    ],
    outcomes: [
      "Meminimalkan kesalahan pencatatan sampel.",
      "Workflow laboratorium menjadi lebih terstruktur.",
      "Distribusi hasil pemeriksaan menjadi lebih cepat.",
    ],
    successFactors: [
      "Standarisasi workflow laboratorium.",
      "Integrasi sistem dengan perangkat pemeriksaan.",
      "Konsistensi data pasien dan specimen.",
    ],
    lessons:
      "Digitalisasi laboratorium perlu memperhatikan keseluruhan alur specimen dan hasil pemeriksaan, bukan hanya proses pencatatan.",
    keyOutcomes: [
      {
        area: "Workflow",
        impact: "Proses laboratorium lebih terstruktur",
      },
      {
        area: "Specimen",
        impact: "Tracking specimen lebih mudah",
      },
      {
        area: "Reporting",
        impact: "Distribusi hasil menjadi lebih cepat",
      },
    ],
    technologies: [
      "Laboratory Information System",
      "Barcode",
      "Workflow Automation",
      "Digital Reporting",
    ],
    content:
      "Dengan menerapkan sistem iLab, seluruh alur kerja laboratorium mulai dari pencetakan barcode sampel, pemeriksaan hingga penerbitan hasil analisis dilakukan secara digital.",
    impacts: [
      "Meminimalkan kesalahan human error pada pencatatan sampel",
      "Workflow laboratorium lebih efisien",
      "Distribusi hasil pemeriksaan lebih cepat",
    ],
  },

  {
    id: 3,
    tag: "KLINIK",
    title: "Digitalisasi Pelayanan Klinik Medika Prima",
    description:
      "Implementasi sistem manajemen klinik berbasis cloud untuk meningkatkan efisiensi registrasi pasien dan penjadwalan.",
    author: "TIM EDITORIAL INOVAMEDIKA",
    date: "JULY 22, 2026",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    industry: "Klinik",
    location: "Indonesia (Dummy Project)",
    client: "Klinik Utama Medika Prima",
    duration: "2 Bulan",
    status: "Completed",
    solutions: [
      "Clinic Management System",
      "Online Registration",
      "Electronic Medical Record",
      "Inventory Management",
    ],
    summary: [
      "Klinik membutuhkan sistem terintegrasi untuk meningkatkan efisiensi pelayanan dan administrasi pasien.",
      "Transformasi dilakukan melalui digitalisasi registrasi, rekam medis, dan pengelolaan inventaris.",
    ],
    challenges: [
      "Antrean pendaftaran fisik.",
      "Dokumentasi rekam medis yang belum terintegrasi.",
      "Monitoring stok obat masih dilakukan secara manual.",
    ],
    solutionDescription:
      "Implementasi sistem manajemen klinik berbasis web mengintegrasikan proses pendaftaran, rekam medis, pelayanan, dan inventaris.",
    solutionAreas: [
      {
        title: "Pelayanan Klinik",
        items: [
          "Pendaftaran online",
          "Rekam medis elektronik",
          "Jadwal dokter",
          "Monitoring pelayanan",
        ],
      },
      {
        title: "Farmasi",
        items: [
          "Inventory obat",
          "Monitoring stok",
          "Riwayat penggunaan",
        ],
      },
    ],
    outcomes: [
      "Mengurangi antrean pendaftaran fisik.",
      "Rekam medis lebih mudah diakses.",
      "Stok obat dapat dipantau secara lebih akurat.",
    ],
    successFactors: [
      "Adopsi sistem oleh tenaga medis.",
      "Standardisasi proses pelayanan.",
      "Konsistensi pengelolaan data.",
    ],
    lessons:
      "Digitalisasi klinik memberikan manfaat terbesar ketika proses administratif dan klinis dirancang sebagai satu workflow yang terintegrasi.",
    keyOutcomes: [
      {
        area: "Registration",
        impact: "Antrean pendaftaran dapat dikurangi",
      },
      {
        area: "Medical Record",
        impact: "Data pasien lebih mudah diakses",
      },
      {
        area: "Inventory",
        impact: "Stok obat lebih transparan",
      },
    ],
    technologies: [
      "Clinic Management System",
      "Electronic Medical Record",
      "Cloud Application",
      "Inventory Management",
    ],
    content:
      "Transformasi digital klinik dilakukan dengan menerapkan pendaftaran online, rekam medis elektronik berbasis web, dan modul inventaris obat otomatis.",
    impacts: [
      "Mengurangi antrean pendaftaran fisik",
      "Rekam medis pasien tersimpan aman",
      "Stok obat terpantau secara transparan",
    ],
  },

  {
    id: 4,
    tag: "RADIOLOGI",
    title: "Digital Imaging Workflow Menggunakan iRad",
    description:
      "Implementasi PACS dan RIS untuk mempercepat distribusi hasil radiologi dan integrasi dengan sistem rumah sakit.",
    author: "TIM EDITORIAL INOVAMEDIKA",
    date: "JULY 22, 2026",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    industry: "Radiologi Rumah Sakit",
    location: "Indonesia (Dummy Project)",
    client: "Departemen Radiologi RS Pusat",
    duration: "5 Bulan",
    status: "Completed",
    solutions: [
      "PACS",
      "RIS",
      "DICOM",
      "Digital Imaging Workflow",
      "SIMRS Integration",
    ],
    summary: [
      "Departemen radiologi membutuhkan workflow digital yang mampu mempercepat distribusi citra dan hasil ekspertise.",
      "Implementasi iRad menghubungkan PACS, RIS, dan sistem rumah sakit sehingga dokter dapat mengakses citra secara digital.",
    ],
    challenges: [
      "Distribusi citra masih bergantung pada media fisik.",
      "Proses pencarian pemeriksaan membutuhkan waktu.",
      "Integrasi radiologi dengan SIMRS perlu ditingkatkan.",
    ],
    solutionDescription:
      "Integrasi PACS dan RIS memungkinkan pengelolaan citra serta informasi radiologi melalui workflow digital yang terhubung dengan sistem rumah sakit.",
    solutionAreas: [
      {
        title: "Imaging",
        items: [
          "X-Ray",
          "CT Scan",
          "MRI",
          "Digital image archive",
        ],
      },
      {
        title: "Workflow",
        items: [
          "RIS",
          "PACS",
          "DICOM",
          "SIMRS integration",
        ],
      },
    ],
    outcomes: [
      "Penghematan biaya cetak film radiologi.",
      "Hasil ekspertise radiologi selesai lebih cepat.",
      "Dokter DPJP dapat melihat hasil gambar melalui SIMRS.",
    ],
    successFactors: [
      "Implementasi DICOM.",
      "Integrasi PACS dan RIS.",
      "Standardisasi workflow radiologi.",
    ],
    lessons:
      "Digital imaging membutuhkan integrasi antara perangkat, standar komunikasi, workflow klinis, dan sistem informasi rumah sakit.",
    keyOutcomes: [
      {
        area: "Imaging",
        impact: "Citra medis dapat diakses secara digital",
      },
      {
        area: "Workflow",
        impact: "Distribusi hasil menjadi lebih cepat",
      },
      {
        area: "Integration",
        impact: "Radiologi terhubung dengan SIMRS",
      },
    ],
    technologies: [
      "PACS",
      "RIS",
      "DICOM",
      "SIMRS",
      "Digital Imaging",
    ],
    content:
      "Integrasi sistem PACS dan RIS memungkinkan dokter spesialis radiologi mengakses citra medis seperti X-Ray, CT-Scan, dan MRI secara digital.",
    impacts: [
      "Penghematan biaya cetak film radiologi secara signifikan",
      "Hasil ekspertise radiologi selesai lebih cepat",
      "Dokter DPJP dapat langsung melihat hasil gambar melalui SIMRS",
    ],
  },
];

/* =========================================================
   LIBRARY
========================================================= */

const LIBRARY_ITEMS = [
  {
    id: 1,
    tag: "REGULASI",
    title: "Peraturan Menteri Kesehatan tentang Rekam Medis Elektronik",
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
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80",
    keyPoints: [
      "Mengatur penyelenggaraan Rekam Medis Elektronik di fasilitas pelayanan kesehatan.",
      "Menetapkan standar keamanan, kerahasiaan, dan interoperabilitas data.",
      "Mendorong integrasi sistem informasi kesehatan nasional.",
    ],
  },
  {
    id: 2,
    tag: "BPJS",
    title: "Memahami Bridging BPJS Kesehatan dalam SIMRS",
    desc:
      "Panduan implementasi bridging BPJS, meliputi alur administrasi, verifikasi pelayanan, billing, hingga klaim.",
    publisher: "BPJS Kesehatan / Inova Medika",
    year: "2025",
    type: "Panduan",
    fileType: "PDF",
    pages: "18 Halaman",
    size: "3.1 MB",
    uploadedDate: "05 Februari 2026",
    language: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    keyPoints: [
      "Alur integrasi API SIMRS dengan BPJS Kesehatan.",
      "Otomatisasi klaim dan verifikasi data peserta.",
      "Manajemen penanganan kendala integrasi.",
    ],
  },
  {
    id: 3,
    tag: "HL7 FHIR",
    title: "HL7 FHIR & Rekam Medis Elektronik: Pengantar Interoperabilitas",
    desc:
      "Mengenal konsep HL7 FHIR, resource utama, dan pemetaan data untuk RME.",
    publisher: "HL7 Indonesia Workgroup",
    year: "2026",
    type: "Standar Teknis",
    fileType: "PDF",
    pages: "30 Halaman",
    size: "4.2 MB",
    uploadedDate: "18 Februari 2026",
    language: "English / Indonesia",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80",
    keyPoints: [
      "Prinsip utama arsitektur HL7 FHIR.",
      "Pemetaan data RME lokal ke format FHIR Resource.",
      "Keamanan transmisi data kesehatan.",
    ],
  },
  {
    id: 4,
    tag: "Cybersecurity",
    title: "Cybersecurity Readiness Checklist untuk Rumah Sakit",
    desc:
      "Daftar periksa kesiapan keamanan siber meliputi akses, backup, audit log, dan respons insiden.",
    publisher: "Tim Cyber Security Health",
    year: "2026",
    type: "Checklist",
    fileType: "PDF",
    pages: "12 Halaman",
    size: "3.8 MB",
    uploadedDate: "01 Maret 2026",
    language: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    keyPoints: [
      "Penilaian tingkat kematangan keamanan informasi fasyankes.",
      "Prosedur pencegahan kebocoran data rekam medis.",
      "Rencana pemulihan bencana.",
    ],
  },
];

/* =========================================================
   HOME CONTENT
========================================================= */

const HOME_FEATURED = [
  {
    category: "NEWS",
    title:
      "Workshop SATUSEHAT Klaim Non-JKN: Menuju Integrasi Klaim Rumah Sakit yang Lebih Cepat dan Akurat",
    date: "September 9, 2026",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "INSIGHTS",
    title:
      "Ketika Sistem Informasi Rumah Sakit Bisa Membantu Berpikir, Bukan Sekadar Mencatat",
    date: "September 2, 2026",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "RESEARCH",
    title:
      "Survey & Benchmark SIMRS 2026: Tren Implementasi, Kematangan Digital, dan Interoperabilitas",
    date: "July 22, 2026",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=80",
  },
];

const HOME_TOPICS = [
  "Smart Hospital",
  "SATUSEHAT",
  "Digital Health",
  "RME",
  "SIMRS",
  "Cybersecurity",
];

const HOME_INSIGHTS = [
  {
    category: "SMART HOSPITAL",
    title:
      "Smart Hospital di Indonesia: Dari Rekomendasi Teknologi Menuju Standar Nasional",
    description:
      "Melihat perkembangan konsep smart hospital dan bagaimana teknologi mulai menjadi bagian dari strategi transformasi fasilitas kesehatan.",
    date: "July 27, 2026",
  },
  {
    category: "DIGITAL HEALTH",
    title:
      "Ketika SIMRS Tidak Lagi Sekadar Sistem Pencatatan",
    description:
      "Perkembangan SIMRS bergerak menuju platform yang mampu mendukung analisis dan pengambilan keputusan.",
    date: "September 2, 2026",
  },
  {
    category: "CYBERSECURITY",
    title:
      "Cybersecurity Readiness untuk Infrastruktur Rumah Sakit",
    description:
      "Prinsip dasar yang perlu diperhatikan ketika rumah sakit meningkatkan konektivitas dan integrasi sistem.",
    date: "July 22, 2026",
  },
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionTitle({ eyebrow, title, description, dark = false }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div
          className={`text-[11px] font-black uppercase tracking-[0.18em] mb-3 ${
            dark ? "text-emerald-300" : "text-emerald-700"
          }`}
        >
          {eyebrow}
        </div>
      )}

      <h2
        className={`text-2xl md:text-4xl font-black tracking-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-sm md:text-base leading-relaxed ${
            dark ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function ArrowButton({ children = "Explore" }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 group-hover:text-emerald-800">
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1.5">
        →
      </span>
    </span>
  );
}

function HomeCard({ item }) {
  return (
    <article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />

        <span className="absolute bottom-4 left-4 bg-white/95 text-emerald-800 text-[10px] font-black uppercase tracking-wide px-3 py-1 rounded-full">
          {item.category}
        </span>
      </div>

      <div className="p-5 space-y-3">
        <div className="text-[10px] text-slate-400 font-bold">
          {item.date}
        </div>

        <h3 className="font-extrabold text-slate-800 leading-snug line-clamp-3 group-hover:text-emerald-800 transition-colors">
          {item.title}
        </h3>

        <ArrowButton />
      </div>
    </article>
  );
}

function CaseStudyCard({ item, onClick }) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-[0_25px_55px_-20px_rgba(15,118,110,.3)] hover:-translate-y-1 transition-all duration-500"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

        <span className="absolute top-4 left-4 bg-white/95 text-emerald-800 text-[10px] font-black uppercase tracking-wide px-3 py-1 rounded-full">
          {item.tag}
        </span>

        <span className="absolute bottom-4 left-4 text-white text-xs font-bold">
          {item.industry}
        </span>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-base font-black text-slate-800 leading-snug group-hover:text-emerald-800 transition-colors">
          {item.title}
        </h3>

        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
          {item.description}
        </p>

        <div className="pt-2">
          <ArrowButton>Read More</ArrowButton>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   HOME
========================================================= */

function HomePage({ onCaseStudy }) {
  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061c19] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031512]/95 via-[#06221e]/85 to-[#06221e]/60" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/10 rounded-full px-4 py-2 text-[10px] font-black tracking-[0.18em] uppercase text-emerald-300">
              Inovamedika Digital Health Intelligence
            </div>

            <h1 className="mt-7 text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02]">
              Transformasi Digital
              <br />
              <span className="text-emerald-400">
                Kesehatan Indonesia.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">
              Wadah informasi, insight, research, case studies, dan knowledge
              untuk mendukung transformasi digital rumah sakit dan fasilitas
              pelayanan kesehatan.
            </p>

            <div className="flex flex-wrap gap-3 mt-9">
              <button className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-950/30">
                Explore Latest Content
              </button>

              <button className="px-6 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold text-sm transition-all">
                Explore Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <SectionTitle
            eyebrow="Featured"
            title="Latest from Inovamedika"
            description="Berita, insight, dan research terbaru seputar transformasi digital kesehatan."
          />

          <button className="text-sm font-bold text-emerald-700 hover:text-emerald-900">
            View All →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {HOME_FEATURED.map((item) => (
            <HomeCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* TOPICS */}
      <section className="bg-[#F0F8F5] border-y border-emerald-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <SectionTitle
            eyebrow="Explore Topics"
            title="Explore Digital Healthcare Topics"
            description="Temukan berbagai topik yang berkaitan dengan teknologi, data, sistem informasi, dan transformasi layanan kesehatan."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {HOME_TOPICS.map((topic, index) => (
              <div
                key={topic}
                className="group bg-white border border-emerald-100 rounded-2xl p-5 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-black mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="font-extrabold text-sm text-slate-800 group-hover:text-emerald-800 transition-colors">
                  {topic}
                </h3>

                <div className="text-[11px] text-slate-400 mt-2">
                  Explore →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <SectionTitle
            eyebrow="Research & Insights"
            title="Data, Insight & Research"
            description="Konten yang membantu healthcare leaders memahami perkembangan teknologi dan digitalisasi fasilitas kesehatan."
          />

          <button className="text-sm font-bold text-emerald-700 hover:text-emerald-900">
            Explore Research →
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {HOME_INSIGHTS.map((item) => (
            <article
              key={item.title}
              className="group border border-slate-200 rounded-2xl p-6 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <span className="text-[10px] font-black tracking-widest text-emerald-700 uppercase">
                {item.category}
              </span>

              <h3 className="mt-4 text-lg font-black text-slate-800 leading-snug group-hover:text-emerald-800">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-bold">{item.date}</span>
                <span className="text-emerald-700 font-black">
                  Read More →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-9">
            <SectionTitle
              dark
              eyebrow="Case Studies"
              title="Healthcare Transformation"
              description="Pelajari bagaimana berbagai fasilitas kesehatan dapat memanfaatkan teknologi untuk meningkatkan proses, data, dan pengambilan keputusan."
            />

            <button className="text-sm font-bold text-emerald-400 hover:text-emerald-300">
              View All Case Studies →
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CASE_STUDIES.map((item) => (
              <CaseStudyCard
                key={item.id}
                item={item}
                onClick={() => onCaseStudy(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* KNOWLEDGE CENTER */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              eyebrow="Knowledge Center"
              title="Resources untuk Mendukung Transformasi Digital"
              description="Akses checklist, eBook, infographic, template, whitepaper, dan berbagai sumber pengetahuan lainnya."
            />

            <div className="flex flex-wrap gap-3 mt-7">
              {[
                "Checklist",
                "eBook",
                "Infographic",
                "Template",
                "Whitepaper",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2.5 rounded-full border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:border-emerald-300 hover:text-emerald-700 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900 to-teal-950 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-emerald-400/10" />
            <div className="absolute -bottom-24 -left-10 w-64 h-64 rounded-full bg-teal-400/10" />

            <div className="relative">
              <span className="text-emerald-300 text-[10px] font-black uppercase tracking-widest">
                Library
              </span>

              <h3 className="text-2xl md:text-3xl font-black mt-3">
                Digital Healthcare Library
              </h3>

              <p className="text-sm text-emerald-50/70 mt-4 leading-relaxed">
                Referensi regulasi, standar teknis, interoperabilitas,
                cybersecurity, SATUSEHAT, BPJS, RME, DICOM, dan berbagai
                kebutuhan teknologi kesehatan.
              </p>

              <button className="mt-7 bg-white text-emerald-900 px-5 py-3 rounded-xl text-sm font-black hover:bg-emerald-50 transition">
                Explore Library →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-16">
        <div className="rounded-3xl bg-[#EAF7F0] border border-emerald-100 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-[10px] font-black uppercase tracking-widest text-emerald-700">
              Digital Health Transformation
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-3">
              Siap melangkah menuju transformasi digital kesehatan?
            </h2>

            <p className="text-sm text-slate-500 mt-3 leading-relaxed">
              Eksplorasi insight, research, case studies, dan resources untuk
              membantu memahami ekosistem digital healthcare.
            </p>
          </div>

          <button className="shrink-0 bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-3.5 rounded-xl font-black text-sm transition">
            Request Demo →
          </button>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   CASE STUDY DETAIL
========================================================= */

function CaseStudyDetail({ item, onBack }) {
  return (
    <div className="anim-page">
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={item.image}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-emerald-950/80" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <div className="text-xs text-slate-400 mb-7">
            <button onClick={onBack} className="hover:text-emerald-300">
              Home
            </button>
            <span className="mx-2">›</span>
            <button onClick={onBack} className="hover:text-emerald-300">
              Case Studies
            </button>
            <span className="mx-2">›</span>
            <span className="text-slate-300">{item.tag}</span>
          </div>

          <span className="inline-flex text-[10px] font-black uppercase tracking-widest text-emerald-300 bg-emerald-500/10 border border-emerald-400/30 px-3 py-1.5 rounded-full">
            {item.tag}
          </span>

          <h1 className="max-w-4xl text-3xl md:text-5xl font-black leading-tight mt-5">
            {item.title}
          </h1>

          <p className="max-w-3xl text-slate-300 text-sm md:text-base leading-relaxed mt-5">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 text-xs text-slate-400">
            <span>✍ {item.author}</span>
            <span>•</span>
            <span>📅 {item.date}</span>
          </div>
        </div>
      </section>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 space-y-8">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] md:h-[420px] object-cover"
              />
            </div>

            {/* PROJECT META */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                ["Industri", item.industry],
                ["Lokasi", item.location],
                ["Durasi Implementasi", item.duration],
                ["Status", item.status],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="bg-white border border-slate-200 rounded-xl p-4"
                >
                  <div className="text-[10px] uppercase tracking-wide font-black text-slate-400">
                    {label}
                  </div>

                  <div className="text-xs md:text-sm font-extrabold text-slate-800 mt-2 leading-snug">
                    {value}
                  </div>
                </div>
              ))}
            </section>

            {/* SOLUTIONS */}
            <section className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-black text-emerald-950">
                Solusi yang Digunakan
              </h2>

              <div className="grid sm:grid-cols-2 gap-3 mt-5">
                {item.solutions.map((solution) => (
                  <div
                    key={solution}
                    className="bg-white border border-emerald-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-700"
                  >
                    <span className="text-emerald-600 mr-2">✓</span>
                    {solution}
                  </div>
                ))}
              </div>
            </section>

            {/* RINGKASAN */}
            <section className="space-y-5">
              <h2 className="text-2xl font-black text-slate-900">
                Ringkasan
              </h2>

              {item.summary.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm md:text-base text-slate-600 leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </section>

            {/* TANTANGAN */}
            <section className="space-y-5">
              <h2 className="text-2xl font-black text-slate-900">
                Tantangan
              </h2>

              <p className="text-sm text-slate-500">
                Sebelum implementasi, rumah sakit menghadapi beberapa kendala,
                antara lain:
              </p>

              <ul className="space-y-3">
                {item.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="flex gap-3 text-sm text-slate-600 leading-relaxed"
                  >
                    <span className="mt-1 text-emerald-600 font-black">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* SOLUSI */}
            <section className="space-y-5">
              <h2 className="text-2xl font-black text-slate-900">Solusi</h2>

              <p className="text-sm md:text-base text-slate-600 leading-8">
                {item.solutionDescription}
              </p>

              <div className="space-y-5">
                {item.solutionAreas.map((area) => (
                  <div
                    key={area.title}
                    className="border border-slate-200 rounded-2xl p-5 md:p-6"
                  >
                    <h3 className="font-black text-slate-800">
                      {area.title}
                    </h3>

                    <ul className="grid sm:grid-cols-2 gap-2 mt-4">
                      {area.items.map((point) => (
                        <li
                          key={point}
                          className="text-sm text-slate-600 bg-slate-50 rounded-lg px-3 py-2"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* HASIL */}
            <section className="space-y-5">
              <h2 className="text-2xl font-black text-slate-900">
                Hasil Implementasi
              </h2>

              <p className="text-sm text-slate-500">
                Setelah dashboard digunakan, rumah sakit memperoleh beberapa
                manfaat, antara lain:
              </p>

              <ul className="space-y-3">
                {item.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex gap-3 text-sm text-slate-600 leading-relaxed"
                  >
                    <span className="text-emerald-600 font-black">✓</span>
                    {outcome}
                  </li>
                ))}
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-xs text-amber-900 leading-relaxed">
                <strong>Catatan:</strong> Hasil di atas merupakan ilustrasi
                untuk kebutuhan desain dan bukan hasil implementasi pada rumah
                sakit tertentu.
              </div>
            </section>

            {/* DASHBOARD */}
            <section className="space-y-6">
              <h2 className="text-2xl font-black text-slate-900">
                Dashboard yang Ditampilkan
              </h2>

              {item.solutionAreas.map((area) => (
                <div
                  key={`dashboard-${area.title}`}
                  className="bg-white border border-slate-200 rounded-2xl p-6"
                >
                  <h3 className="font-black text-slate-800">
                    {area.title}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-2 mt-4">
                    {area.items.map((point) => (
                      <div
                        key={point}
                        className="text-xs text-slate-600 border border-slate-100 rounded-lg px-3 py-2"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* FACTORS */}
            <section className="space-y-5">
              <h2 className="text-2xl font-black text-slate-900">
                Faktor Keberhasilan
              </h2>

              <ul className="space-y-3">
                {item.successFactors.map((factor) => (
                  <li
                    key={factor}
                    className="flex gap-3 text-sm text-slate-600 leading-relaxed"
                  >
                    <span className="text-emerald-600 font-black">✓</span>
                    {factor}
                  </li>
                ))}
              </ul>
            </section>

            {/* LESSONS */}
            <section className="space-y-5">
              <h2 className="text-2xl font-black text-slate-900">
                Lessons Learned
              </h2>

              <div className="border-l-4 border-emerald-500 bg-emerald-50/70 rounded-r-xl p-6">
                <p className="text-sm md:text-base text-slate-600 leading-8">
                  {item.lessons}
                </p>
              </div>
            </section>

            {/* KEY OUTCOMES */}
            <section className="space-y-5">
              <h2 className="text-2xl font-black text-slate-900">
                Key Outcomes
              </h2>

              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 text-left">
                      <th className="px-5 py-4 font-black text-slate-700">
                        Area Dampak
                      </th>
                      <th className="px-5 py-4 font-black text-slate-700">
                        Dampak
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {item.keyOutcomes.map((row) => (
                      <tr
                        key={row.area}
                        className="border-t border-slate-100"
                      >
                        <td className="px-5 py-4 font-bold text-slate-700">
                          {row.area}
                        </td>

                        <td className="px-5 py-4 text-slate-600">
                          {row.impact}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* TECHNOLOGY */}
            <section className="space-y-5">
              <h2 className="text-2xl font-black text-slate-900">
                Teknologi yang Digunakan
              </h2>

              <div className="flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="bg-slate-100 text-slate-700 border border-slate-200 px-4 py-2 rounded-full text-xs font-bold"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-black text-slate-900">
                Detail Proyek
              </h3>

              <div className="mt-5 space-y-5">
                <div>
                  <div className="text-[10px] uppercase tracking-wide text-slate-400 font-black">
                    Industri
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-1">
                    {item.industry}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-wide text-slate-400 font-black">
                    Lokasi
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-1">
                    {item.location}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-wide text-slate-400 font-black">
                    Durasi Implementasi
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-1">
                    {item.duration}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-wide text-slate-400 font-black">
                    Status
                  </div>
                  <span className="inline-flex mt-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-[10px] font-black">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
              <h3 className="font-black text-emerald-950">
                Solusi yang Digunakan
              </h3>

              <ul className="mt-4 space-y-2">
                {item.solutions.map((solution) => (
                  <li
                    key={solution}
                    className="text-xs text-slate-700 flex gap-2"
                  >
                    <span className="text-emerald-600">✓</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onBack}
              className="w-full py-3 text-sm font-bold text-slate-500 hover:text-emerald-800 transition"
            >
              ← Kembali ke Case Studies
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}

/* =========================================================
   CASE STUDIES LIST
========================================================= */

function CaseStudiesPage({ onOpen }) {
  return (
    <div className="anim-page">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=85"
            alt=""
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-slate-950/85" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-400">
            Success Stories
          </span>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-4">
            Healthcare Transformation
            <br />
            <span className="text-emerald-400">Case Studies</span>
          </h1>

          <p className="max-w-2xl text-slate-300 mt-5 text-sm md:text-base leading-relaxed">
            Pelajari bagaimana fasilitas kesehatan dapat memanfaatkan solusi
            digital untuk meningkatkan operasional, pelayanan, data, dan
            pengambilan keputusan.
          </p>
        </div>
      </section>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CASE_STUDIES.map((item) => (
            <CaseStudyCard
              key={item.id}
              item={item}
              onClick={() => onOpen(item)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

/* =========================================================
   LIBRARY DETAIL
========================================================= */

function LibraryDetail({ item, onBack }) {
  return (
    <div className="anim-page">
      <section className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14">
          <div className="text-xs text-slate-500 mb-7">
            <button onClick={onBack} className="hover:text-emerald-700">
              Home
            </button>
            <span className="mx-2">›</span>
            <button onClick={onBack} className="hover:text-emerald-700">
              Library
            </button>
            <span className="mx-2">›</span>
            <span>{item.tag}</span>
          </div>

          <span className="inline-flex bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wide">
            {item.tag}
          </span>

          <h1 className="max-w-4xl text-3xl md:text-5xl font-black text-slate-900 mt-5 leading-tight">
            {item.title}
          </h1>

          <p className="max-w-3xl text-slate-600 mt-5 leading-relaxed">
            {item.desc}
          </p>

          <div className="flex flex-wrap gap-4 mt-6 text-xs text-slate-500">
            <span>
              <strong>Penerbit:</strong> {item.publisher}
            </span>
            <span>
              <strong>Tahun:</strong> {item.year}
            </span>
            <span>
              <strong>Format:</strong> {item.fileType}
            </span>
          </div>
        </div>
      </section>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            <section>
              <h2 className="text-2xl font-black text-slate-900">
                Deskripsi
              </h2>

              <p className="text-sm md:text-base text-slate-600 leading-8 mt-4">
                {item.desc}
              </p>

              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5 text-xs text-amber-900 leading-relaxed">
                <strong>Catatan:</strong> Konten halaman ini merupakan
                ringkasan untuk kebutuhan Library. Dokumen PDF yang dirujuk
                tetap merupakan publikasi asli dari penerbitnya.
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                Ringkasan Dokumen
              </h2>

              <ul className="mt-5 space-y-3">
                {item.keyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm text-slate-600"
                  >
                    <span className="text-emerald-600 font-black">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                Cakupan Pembahasan
              </h2>

              <div className="mt-5 space-y-4">
                {item.keyPoints.map((point, index) => (
                  <div
                    key={point}
                    className="border border-slate-200 rounded-xl p-5"
                  >
                    <div className="text-[10px] font-black text-emerald-700 uppercase">
                      Section {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="font-black text-slate-800 mt-2">
                      {point}
                    </h3>

                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Pembahasan ini menjadi bagian dari konteks teknologi dan
                      transformasi digital healthcare yang relevan dengan
                      dokumen.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                Relevansi untuk Digital Healthcare
              </h2>

              <p className="text-sm text-slate-600 leading-8 mt-4">
                Dokumen dapat digunakan sebagai referensi untuk memahami
                kebutuhan teknologi, proses digitalisasi, interoperabilitas,
                keamanan informasi, serta tata kelola data dalam lingkungan
                fasilitas pelayanan kesehatan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                Dokumen Ini Cocok Untuk
              </h2>

              <div className="grid sm:grid-cols-2 gap-3 mt-5">
                {[
                  "Hospital CIO",
                  "IT Manager",
                  "Healthcare IT Team",
                  "System Architect",
                  "Software Engineer",
                  "System Analyst",
                  "Digital Health Consultant",
                  "IT Governance Team",
                  "Risk & Compliance Team",
                ].map((role) => (
                  <div
                    key={role}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-700"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                Metadata Dokumen
              </h2>

              <div className="overflow-x-auto border border-slate-200 rounded-2xl mt-5">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Title", item.title],
                      ["Category", item.type],
                      ["Publisher", item.publisher],
                      ["Year", item.year],
                      ["Format", item.fileType],
                      ["Language", item.language],
                      ["Pages", item.pages],
                      ["File Size", item.size],
                    ].map(([key, value]) => (
                      <tr key={key} className="border-b last:border-b-0">
                        <td className="px-5 py-4 bg-slate-50 font-black text-slate-600 w-1/3">
                          {key}
                        </td>
                        <td className="px-5 py-4 text-slate-600">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                Referensi
              </h2>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mt-5 text-sm text-slate-600 leading-relaxed">
                {item.publisher}
                <br />
                <em>{item.title}</em>
                <br />
                Tahun {item.year}.
                <br />
                Dokumen sumber tersedia melalui publikasi resmi penerbit.
              </div>
            </section>

            <section className="bg-emerald-50 border border-emerald-100 rounded-2xl p-7">
              <h2 className="text-xl font-black text-emerald-950">
                Request Download
              </h2>

              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Untuk kebutuhan desain prototype, tombol berikut dapat
                digunakan sebagai placeholder proses request dokumen asli.
              </p>

              <a
                href="mailto:info@inovamedika.com?subject=Request%20Original%20Document"
                className="inline-flex mt-5 bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-3 rounded-xl text-sm font-black transition"
              >
                Download / Request Original Document
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">
                Catatan Editorial
              </h2>

              <p className="text-sm text-slate-600 leading-8 mt-4">
                Halaman Library ini berfungsi sebagai informasi dan ringkasan
                dokumen. Metadata seperti publisher, judul, author, dan tahun
                mengacu pada dokumen sumber. PDF yang ditampilkan atau diunduh
                dari halaman ini tetap menggunakan dokumen asli dari penerbitnya.
              </p>
            </section>
          </div>

          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="w-24 h-32 mx-auto bg-slate-50 border border-emerald-200 rounded-xl flex flex-col items-center justify-center">
                <div className="text-[9px] font-black text-emerald-800 uppercase text-center px-2">
                  {item.publisher}
                </div>

                <div className="text-3xl mt-3">📄</div>

                <span className="mt-3 bg-emerald-800 text-white px-2 py-1 rounded text-[9px] font-black">
                  PDF
                </span>
              </div>

              <h3 className="font-black text-slate-800 text-sm mt-6">
                {item.title}
              </h3>

              <div className="text-xs text-slate-500 mt-3">
                {item.fileType} • {item.pages}
              </div>

              <button className="w-full mt-6 bg-emerald-800 hover:bg-emerald-900 text-white py-3 rounded-xl text-xs font-black transition">
                📥 Download PDF
              </button>

              <button className="w-full mt-3 border border-slate-200 text-slate-700 hover:bg-slate-50 py-3 rounded-xl text-xs font-bold transition">
                🔗 Bagikan Dokumen
              </button>
            </div>

            <button
              onClick={onBack}
              className="w-full mt-5 text-xs font-bold text-slate-500 hover:text-emerald-800"
            >
              ← Kembali ke Library
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}

/* =========================================================
   LIBRARY LIST
========================================================= */

function LibraryPage({
  searchQuery,
  setSearchQuery,
  selectedTopic,
  setSelectedTopic,
  onOpen,
}) {
  const filteredLibrary = LIBRARY_ITEMS.filter((item) => {
    const matchesTopic = selectedTopic
      ? item.tag === selectedTopic
      : true;

    const query = searchQuery.toLowerCase();

    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query);

    return matchesTopic && matchesSearch;
  });

  return (
    <div className="anim-page">
      <section className="relative text-white overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-slate-950/85" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
            Library Resources
          </span>

          <h1 className="text-4xl md:text-6xl font-black mt-4">
            Digital Healthcare
            <br />
            <span className="text-emerald-400">
              Resources
            </span>
          </h1>

          <div className="max-w-2xl mt-7 bg-white rounded-xl p-2 flex shadow-2xl">
            <span className="px-3 flex items-center text-slate-400">
              🔍
            </span>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari judul, topik, atau kata kunci..."
              className="flex-1 text-sm text-slate-800 outline-none px-2"
            />

            <button className="bg-emerald-800 text-white px-5 py-2.5 rounded-lg text-xs font-black">
              Cari
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 space-y-12">
        <section>
          <div className="flex items-end justify-between gap-4 mb-5">
            <div>
              <h2 className="text-xl font-black text-slate-900">
                Browse by Topic
              </h2>

              <p className="text-xs text-slate-500 mt-1">
                Klik topik untuk menyaring dokumen.
              </p>
            </div>

            {selectedTopic && (
              <button
                onClick={() => setSelectedTopic(null)}
                className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-2 rounded-full"
              >
                ✕ Tampilkan Semua
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {TOPICS.map((topic) => {
              const active = selectedTopic === topic.id;

              return (
                <button
                  key={topic.id}
                  onClick={() =>
                    setSelectedTopic(active ? null : topic.id)
                  }
                  className={`rounded-xl border p-4 transition-all ${
                    active
                      ? "bg-emerald-800 text-white border-emerald-800 shadow-md"
                      : "bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:-translate-y-1"
                  }`}
                >
                  <div className="text-2xl">{topic.icon}</div>

                  <div className="text-xs font-bold mt-2">
                    {topic.label}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
            <h2 className="text-lg font-black text-slate-800">
              {selectedTopic
                ? `Topik: "${selectedTopic}"`
                : "Semua Sumber Daya"}
            </h2>

            <span className="text-xs font-bold text-slate-400">
              {filteredLibrary.length} Dokumen
            </span>
          </div>

          {filteredLibrary.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
              <div className="text-4xl">🔎</div>
              <h3 className="font-black text-slate-800 mt-4">
                Dokumen tidak ditemukan
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                Coba gunakan kata kunci lain.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredLibrary.map((item) => (
                <article
                  key={item.id}
                  onClick={() => onOpen(item)}
                  className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />

                    <span className="absolute top-3 left-3 bg-white/95 text-emerald-800 text-[10px] font-black px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-black text-sm text-slate-800 leading-snug line-clamp-2 group-hover:text-emerald-800">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mt-3">
                      {item.desc}
                    </p>

                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold">
                        {item.fileType} • {item.pages}
                      </span>

                      <span className="text-[10px] font-black text-emerald-700 group-hover:translate-x-1 transition-transform">
                        Buka Detail →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

/* =========================================================
   PLACEHOLDER PAGES
========================================================= */

function PlaceholderPage({ title, eyebrow, description }) {
  return (
    <div className="anim-page">
      <section className="min-h-[620px] flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-6">
        <div className="max-w-2xl text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-emerald-700">
            {eyebrow}
          </span>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4">
            {title}
          </h1>

          <p className="text-slate-500 mt-5 leading-relaxed">
            {description}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 bg-white border border-emerald-100 rounded-full px-5 py-3 text-xs font-bold text-slate-600 shadow-sm">
            Content placeholder untuk prototype
            <span className="text-emerald-600">→</span>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#EAF7F0] text-emerald-950 border-t border-emerald-200 mt-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <img
              src={logoDefault}
              alt="Inova Medika"
              className="h-9 w-auto object-contain mb-5"
            />

            <p className="text-xs text-slate-600 leading-relaxed">
              PT. Inova Medika Solusindo adalah penyedia solusi teknologi
              informasi kesehatan terintegrasi di Indonesia, berfokus pada
              e-Health, SIMRS, dan interoperabilitas data.
            </p>
          </div>

          <div>
            <h4 className="font-black text-sm text-emerald-900 mb-4">
              Explore
            </h4>

            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-emerald-800"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate("case-studies")}
                  className="hover:text-emerald-800"
                >
                  Case Studies
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate("library")}
                  className="hover:text-emerald-800"
                >
                  Library Resources
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate("research")}
                  className="hover:text-emerald-800"
                >
                  Research
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-sm text-emerald-900 mb-4">
              Contact
            </h4>

            <p className="text-xs text-slate-600 leading-relaxed">
              Email: info@inovamedika.com
              <br />
              Website: www.inovamedika.com
              <br />
              Bandung, Jawa Barat
            </p>
          </div>

          <div>
            <h4 className="font-black text-sm text-emerald-900 mb-4">
              Inova Medika
            </h4>

            <p className="text-xs text-slate-500 leading-relaxed">
              Transformasi Digital Kesehatan Indonesia, Dimulai dari Sini.
            </p>

            <p className="text-[11px] text-slate-400 mt-6">
              © {new Date().getFullYear()} PT. Inova Medika Solusindo. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [navigationVersion, setNavigationVersion] = useState(0);

  /* Navbar indicator */
  const navRef = useRef(null);
  const navItemRefs = useRef({});

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  });

  const [indicatorReady, setIndicatorReady] = useState(false);

  useEffect(() => {
    const updateIndicator = () => {
      const container = navRef.current;
      const activeItem = navItemRefs.current[activeTab];

      if (!container || !activeItem) return;

      const containerRect = container.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      setIndicator({
        left: itemRect.left - containerRect.left,
        width: itemRect.width,
      });

      setIndicatorReady(true);
    };

    updateIndicator();

    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeTab]);

  const clearDetails = () => {
    setSelectedDocument(null);
    setSelectedCaseStudy(null);
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    clearDetails();
    setSelectedTopic(null);
    setSearchQuery("");

    setNavigationVersion((value) => value + 1);

    setIsMobileMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openLibrary = (item) => {
    setSelectedDocument(item);
    setSelectedCaseStudy(null);
    setNavigationVersion((value) => value + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openCaseStudy = (item) => {
    setSelectedCaseStudy(item);
    setSelectedDocument(null);
    setNavigationVersion((value) => value + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const backToCurrentSection = () => {
    clearDetails();

    setNavigationVersion((value) => value + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pageKey = [
    activeTab,
    selectedDocument?.id || "",
    selectedCaseStudy?.id || "",
    navigationVersion,
  ].join("-");

  const renderContent = () => {
    if (selectedCaseStudy) {
      return (
        <CaseStudyDetail
          key={pageKey}
          item={selectedCaseStudy}
          onBack={backToCurrentSection}
        />
      );
    }

    if (selectedDocument) {
      return (
        <LibraryDetail
          key={pageKey}
          item={selectedDocument}
          onBack={backToCurrentSection}
        />
      );
    }

    switch (activeTab) {
      case "home":
        return (
          <HomePage
            key={pageKey}
            onCaseStudy={openCaseStudy}
          />
        );

      case "case-studies":
        return (
          <CaseStudiesPage
            key={pageKey}
            onOpen={openCaseStudy}
          />
        );

      case "library":
        return (
          <LibraryPage
            key={pageKey}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
            onOpen={openLibrary}
          />
        );

      case "news":
        return (
          <PlaceholderPage
            key={pageKey}
            eyebrow="News"
            title="Latest News"
            description="Berita dan perkembangan terbaru seputar digital healthcare, rumah sakit, teknologi kesehatan, dan ekosistem kesehatan Indonesia."
          />
        );

      case "insights":
        return (
          <PlaceholderPage
            key={pageKey}
            eyebrow="Insights"
            title="Healthcare Insights"
            description="Insight dan analisis mengenai perkembangan teknologi, data, sistem informasi, dan transformasi digital healthcare."
          />
        );

      case "research":
        return (
          <PlaceholderPage
            key={pageKey}
            eyebrow="Research"
            title="Research & Reports"
            description="Research, benchmark, report, dan kajian yang membantu memahami perkembangan digitalisasi fasilitas kesehatan."
          />
        );

      case "events":
        return (
          <PlaceholderPage
            key={pageKey}
            eyebrow="Events"
            title="Events & Webinar"
            description="Conference, training, webinar, workshop, dan berbagai kegiatan seputar digital healthcare."
          />
        );

      case "community":
        return (
          <PlaceholderPage
            key={pageKey}
            eyebrow="Community"
            title="Digital Health Community"
            description="Ruang untuk healthcare IT professionals, hospital CIO, digital health practitioners, dan komunitas teknologi kesehatan."
          />
        );

      default:
        return (
          <HomePage
            key={pageKey}
            onCaseStudy={openCaseStudy}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans overflow-x-hidden">
      {/* =====================================================
          GLOBAL ANIMATION
      ===================================================== */}

      <style>{`
        @keyframes pageEnter {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.992);
            filter: blur(3px);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes mobileMenu {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatSoft {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        .anim-page {
          animation:
            pageEnter
            0.62s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .mobile-menu-animation {
          animation:
            mobileMenu
            0.28s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .floating-soft {
          animation:
            floatSoft
            4s
            ease-in-out
            infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-[1500px] mx-auto px-5 lg:px-8 h-[76px] flex items-center justify-between">
          {/* LOGO */}
          <button
            onClick={() => handleTabChange("home")}
            className="shrink-0 flex items-center"
          >
            <img
              src={logoDefault}
              alt="Inova Medika"
              className="h-9 md:h-10 w-auto object-contain"
            />
          </button>

          {/* DESKTOP NAV */}
          <nav
            ref={navRef}
            className="hidden lg:flex relative items-center gap-1"
          >
            {/* SLIDING GREEN INDICATOR */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-10 rounded-full bg-emerald-700 shadow-[0_8px_25px_rgba(5,150,105,.20)] pointer-events-none transition-[left,width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicatorReady ? 1 : 0,
              }}
            />

            {NAV_ITEMS.map((item) => {
              const active = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  ref={(element) => {
                    navItemRefs.current[item.id] = element;
                  }}
                  onClick={() => handleTabChange(item.id)}
                  className={`relative z-10 px-3.5 py-2.5 rounded-full text-xs xl:text-sm font-bold transition-colors duration-300 ${
                    active
                      ? "text-white"
                      : "text-slate-700 hover:text-emerald-700"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-2.5 rounded-xl text-xs font-black transition">
              Request Demo
            </button>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-slate-100 transition"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mobile-menu-animation border-t border-slate-100 bg-white px-5 py-5 shadow-xl">
            <div className="grid gap-1">
              {NAV_ITEMS.map((item) => {
                const active = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition ${
                      active
                        ? "bg-emerald-700 text-white"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <button className="w-full mt-4 bg-emerald-800 text-white py-3 rounded-xl text-sm font-black">
              Request Demo
            </button>
          </div>
        )}
      </header>

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <div key={pageKey}>{renderContent()}</div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer onNavigate={handleTabChange} />
    </div>
  );
}