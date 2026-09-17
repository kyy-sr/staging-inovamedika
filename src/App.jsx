import React, { useState } from 'react';

// ============================================================
// DATA CASE STUDIES
// ============================================================

const CASE_STUDIES = [
  {
    id: 1,
    tag: "DINAS KESEHATAN",
    title: "Smart Hospital Dashboard untuk Monitoring Operasional",

    description:
      "Implementasi Smart Hospital Dashboard untuk membantu manajemen rumah sakit memantau operasional, pelayanan, kapasitas, dan indikator kinerja melalui satu dashboard terintegrasi.",

    author: "TIM EDITORIAL INOVAMEDIKA",
    date: "JULY 22, 2026",

    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",

    client: "Dinas Kesehatan & RSU Daerah",
    industry: "Rumah Sakit Umum",
    location: "Indonesia (Dummy Project)",
    duration: "4 Bulan",
    status: "Completed",

    solutions: [
      "SIMRS iHospital",
      "Executive Dashboard",
      "Business Intelligence",
      "Data Analytics",
      "Real-time Monitoring",
    ],

    content:
      "Sebuah rumah sakit menghadapi tantangan dalam memantau operasional secara menyeluruh karena informasi berasal dari berbagai sistem dan laporan manual. Kondisi tersebut menyebabkan proses pengambilan keputusan menjadi lebih lambat, terutama ketika manajemen membutuhkan data terkini mengenai pelayanan, kapasitas, maupun kinerja operasional.",

    summary:
      "Melalui implementasi Smart Hospital Dashboard, data dari berbagai modul SIMRS diintegrasikan ke dalam satu dashboard yang menampilkan informasi secara real-time. Dashboard ini membantu pimpinan rumah sakit memonitor indikator utama pelayanan dan operasional melalui visualisasi yang lebih mudah dipahami.",

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
        title: "Operasional",
        items: [
          "Bed Occupancy Rate (BOR) dan ketersediaan tempat tidur.",
          "Average Length of Stay (ALOS).",
          "Turn Over Interval (TOI).",
          "Bed Turn Over (BTO).",
        ],
      },
      {
        title: "Pelayanan",
        items: [
          "Kunjungan pasien rawat jalan dan rawat inap.",
          "Status pelayanan Instalasi Gawat Darurat (IGD).",
          "Aktivitas kamar operasi.",
          "Pemeriksaan laboratorium dan radiologi.",
          "Monitoring antrean pelayanan.",
        ],
      },
      {
        title: "Manajemen",
        items: [
          "Pendapatan dan indikator operasional harian.",
          "Tren kunjungan pasien.",
          "Utilisasi tempat tidur.",
          "Dashboard KPI rumah sakit.",
          "Executive Dashboard untuk pimpinan rumah sakit.",
        ],
      },
    ],

    results: [
      "Monitoring operasional menjadi lebih cepat melalui satu dashboard terintegrasi.",
      "Manajemen memperoleh informasi yang lebih mudah dipahami melalui visualisasi data.",
      "Proses penyusunan laporan menjadi lebih efisien.",
      "Koordinasi antar unit meningkat karena menggunakan sumber data yang sama.",
      "Pengambilan keputusan dapat dilakukan berdasarkan informasi yang lebih aktual.",
    ],

    dashboardCategories: [
      {
        title: "Operasional",
        items: [
          "Bed Occupancy Rate (BOR)",
          "Average Length of Stay (ALOS)",
          "Turn Over Interval (TOI)",
          "Bed Turn Over (BTO)",
        ],
      },
      {
        title: "Pelayanan",
        items: [
          "Kunjungan Rawat Jalan",
          "Rawat Inap",
          "IGD",
          "Kamar Operasi",
          "Laboratorium",
          "Radiologi",
        ],
      },
      {
        title: "Manajemen",
        items: [
          "Pendapatan Harian",
          "Tren Kunjungan",
          "Utilisasi Tempat Tidur",
          "Dashboard KPI Rumah Sakit",
        ],
      },
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

    note:
      "Hasil di atas merupakan ilustrasi untuk kebutuhan desain dan bukan hasil implementasi pada rumah sakit tertentu.",

    impacts: [
      "Peningkatan efisiensi pemantauan operasional hingga 40%",
      "Pengambilan keputusan manajemen berbasis data real-time",
      "Integrasi laporan berkala langsung ke Dinas Kesehatan",
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
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",

    client: "Jaringan Laboratorium Klinik",
    industry: "Laboratorium Klinik",
    location: "Indonesia (Dummy Project)",
    duration: "3 Bulan",
    status: "Completed",

    solutions: [
      "iLab",
      "Laboratory Information System",
      "Barcode Specimen",
      "Digital Result Management",
    ],

    content:
      "Dengan menerapkan sistem iLab, seluruh alur kerja laboratorium mulai dari pencetakan barcode sampel, pemeriksaan pada alat LIS (Laboratory Information System), hingga penerbitan hasil analisis dilakukan secara terotomatisasi.",

    impacts: [
      "Meminimalkan kesalahan human error pada pencatatan sampel",
      "Waktu tunggu hasil laboratorium (Turnaround Time) berkurang 50%",
      "Pasien dapat mengunduh hasil laboratorium langsung dari ponsel",
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
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",

    client: "Klinik Utama Medika Prima",
    industry: "Klinik",
    location: "Indonesia (Dummy Project)",
    duration: "2 Bulan",
    status: "Completed",

    solutions: [
      "Cloud Clinic Management",
      "Online Registration",
      "Electronic Medical Record",
      "Inventory Management",
    ],

    content:
      "Transformasi digital klinik dilakukan dengan menerapkan pendaftaran online, rekam medis elektronik berbasis web, dan modul inventaris obat otomatis.",

    impacts: [
      "Mengurangi antrean pendaftaran fisik hingga 60%",
      "Rekam medis pasien tersimpan aman dan mudah diakses dokter",
      "Stok obat terpantau secara akurat dan transparan",
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
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",

    client: "Departemen Radiologi RS Pusat",
    industry: "Radiologi",
    location: "Indonesia (Dummy Project)",
    duration: "5 Bulan",
    status: "Completed",

    solutions: [
      "PACS",
      "RIS",
      "Digital Imaging Workflow",
      "SIMRS Integration",
    ],

    content:
      "Integrasi sistem PACS (Picture Archiving and Communication System) dan RIS memungkinkan dokter spesialis radiologi mengakses citra medis (X-Ray, CT-Scan, MRI) secara digital dari mana saja tanpa perlu mencetak film.",

    impacts: [
      "Penghematan biaya cetak film radiologi secara signifikan",
      "Hasil ekspertise radiologi selesai lebih cepat",
      "Dokter DPJP dapat langsung melihat hasil gambar melalui SIMRS",
    ],
  },
];

// ============================================================
// DATA LIBRARY RESOURCES
// ============================================================

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
    keyPoints: [
      "Mengatur penyelenggaraan Rekam Medis Elektronik di fasilitas pelayanan kesehatan.",
      "Menetapkan standar keamanan, kerahasiaan, dan interoperabilitas data.",
      "Mendorong integrasi sistem informasi kesehatan nasional.",
    ],
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
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
    keyPoints: [
      "Alur integrasi API SIMRS dengan BPJS Kesehatan.",
      "Otomatisasi klaim dan verifikasi data peserta.",
      "Manajemen penanganan kendala integrasi.",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 3,
    tag: "HL7 FHIR",
    title: "HL7 FHIR & Rekam Medis Elektronik: Pengantar Interoperabilitas",
    desc:
      "Mengenal konsep HL7 FHIR, resource utama (Patient, Encounter, Observation, dll), dan pemetaan data untuk RME.",
    publisher: "HL7 Indonesia Workgroup",
    year: "2026",
    type: "Standar Teknis",
    fileType: "PDF",
    pages: "30 Halaman",
    size: "4.2 MB",
    uploadedDate: "18 Februari 2026",
    keyPoints: [
      "Prinsip utama arsitektur HL7 FHIR.",
      "Pemetaan data RME lokal ke format FHIR Resource.",
      "Keamanan transmisi data kesehatan.",
    ],
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
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
    keyPoints: [
      "Penilaian tingkat kematangan keamanan informasi fasyankes.",
      "Prosedur pencegahan kebocoran data rekam medis.",
      "Rencana pemulihan bencana (Disaster Recovery Plan).",
    ],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  },
];

// ============================================================
// CASE STUDY DETAIL COMPONENT
// ============================================================

function RichCaseStudyDetail({ caseStudy }) {
  return (
    <div className="space-y-8">

      {/* PROJECT INFORMATION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <span className="text-xs text-slate-400 font-semibold block mb-1">
            Industri
          </span>
          <span className="text-sm font-bold text-slate-800">
            {caseStudy.industry}
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <span className="text-xs text-slate-400 font-semibold block mb-1">
            Lokasi
          </span>
          <span className="text-sm font-bold text-slate-800">
            {caseStudy.location}
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <span className="text-xs text-slate-400 font-semibold block mb-1">
            Durasi Implementasi
          </span>
          <span className="text-sm font-bold text-slate-800">
            {caseStudy.duration}
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <span className="text-xs text-slate-400 font-semibold block mb-1">
            Status
          </span>
          <span className="inline-flex bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-extrabold">
            {caseStudy.status}
          </span>
        </div>
      </div>

      {/* SOLUTIONS */}
      <section className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Solusi yang Digunakan
        </h3>

        <ul className="space-y-2 text-sm text-slate-700">
          {caseStudy.solutions.map((solution, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="text-emerald-700 font-bold">•</span>
              <span>{solution}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* RINGKASAN */}
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900">
          Ringkasan
        </h2>

        <p className="text-slate-600 leading-8 text-sm md:text-base">
          {caseStudy.content}
        </p>

        <p className="text-slate-600 leading-8 text-sm md:text-base">
          {caseStudy.summary}
        </p>
      </section>

      {/* TANTANGAN */}
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900">
          Tantangan
        </h2>

        <p className="text-slate-600 leading-7 text-sm">
          Sebelum implementasi, rumah sakit menghadapi beberapa kendala,
          antara lain:
        </p>

        <ul className="space-y-3 text-sm text-slate-600">
          {caseStudy.challenges.map((challenge, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
              <span className="leading-7">{challenge}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SOLUSI */}
      <section className="space-y-5">
        <h2 className="text-2xl font-black text-slate-900">
          Solusi
        </h2>

        <p className="text-slate-600 leading-8 text-sm md:text-base">
          {caseStudy.solutionDescription}
        </p>

        <div className="space-y-6">
          {caseStudy.solutionAreas.map((area, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-xl p-5"
            >
              <h3 className="font-extrabold text-slate-800 mb-3">
                {area.title}
              </h3>

              <ul className="space-y-2 text-sm text-slate-600">
                {area.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex gap-3 items-start"
                  >
                    <span className="text-emerald-700 font-bold">
                      •
                    </span>
                    <span className="leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* HASIL IMPLEMENTASI */}
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900">
          Hasil Implementasi
        </h2>

        <p className="text-slate-600 leading-7 text-sm">
          Setelah dashboard digunakan, rumah sakit memperoleh beberapa
          manfaat, antara lain:
        </p>

        <ul className="space-y-3 text-sm text-slate-600">
          {caseStudy.results.map((result, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="text-emerald-700 font-bold">✓</span>
              <span className="leading-7">{result}</span>
            </li>
          ))}
        </ul>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900 leading-7">
          <strong>Catatan:</strong> {caseStudy.note}
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="space-y-5">
        <h2 className="text-2xl font-black text-slate-900">
          Dashboard yang Ditampilkan
        </h2>

        <p className="text-slate-600 leading-7 text-sm">
          Dashboard menyediakan berbagai indikator operasional yang
          dikelompokkan ke dalam beberapa area utama.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {caseStudy.dashboardCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-5"
            >
              <h3 className="font-extrabold text-emerald-800 mb-4">
                {category.title}
              </h3>

              <ul className="space-y-2 text-xs text-slate-600">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex gap-2 items-start"
                  >
                    <span className="text-emerald-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAKTOR KEBERHASILAN */}
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900">
          Faktor Keberhasilan
        </h2>

        <ul className="space-y-3 text-sm text-slate-600">
          {caseStudy.successFactors.map((factor, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="text-emerald-700 font-bold">
                {index + 1}.
              </span>
              <span className="leading-7">{factor}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* LESSONS LEARNED */}
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900">
          Lessons Learned
        </h2>

        <div className="bg-slate-50 border-l-4 border-emerald-600 rounded-r-xl p-6">
          <p className="text-sm md:text-base text-slate-600 leading-8">
            {caseStudy.lessonsLearned}
          </p>
        </div>
      </section>

      {/* KEY OUTCOMES */}
      <section className="space-y-5">
        <h2 className="text-2xl font-black text-slate-900">
          Key Outcomes
        </h2>

        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left px-5 py-4 font-extrabold text-slate-700">
                  Area
                </th>
                <th className="text-left px-5 py-4 font-extrabold text-slate-700">
                  Dampak
                </th>
              </tr>
            </thead>

            <tbody>
              {caseStudy.keyOutcomes.map((outcome, index) => (
                <tr
                  key={index}
                  className="border-t border-slate-100"
                >
                  <td className="px-5 py-4 font-bold text-slate-800 whitespace-nowrap">
                    {outcome.area}
                  </td>

                  <td className="px-5 py-4 text-slate-600">
                    {outcome.impact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TEKNOLOGI */}
      <section className="space-y-5">
        <h2 className="text-2xl font-black text-slate-900">
          Teknologi yang Digunakan
        </h2>

        <div className="flex flex-wrap gap-2">
          {caseStudy.technologies.map((technology, index) => (
            <span
              key={index}
              className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2 rounded-full text-xs font-bold"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================================
// APP
// ============================================================

export default function App() {
  const [activeTab, setActiveTab] = useState("library");

  const [selectedTopic, setSelectedTopic] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  // State untuk Mobile Menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State untuk Detail Views
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const [detailActiveTab, setDetailActiveTab] =
    useState("deskripsi");

  const filteredLibrary = LIBRARY_ITEMS.filter((item) => {
    const matchesTopic = selectedTopic
      ? item.tag === selectedTopic
      : true;

    const matchesSearch =
      item.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      item.desc
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchesTopic && matchesSearch;
  });

  const clearDetailView = () => {
    setSelectedDocument(null);
    setSelectedCaseStudy(null);
    setIsMobileMenuOpen(false);
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    clearDetailView();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans text-base leading-relaxed overflow-x-hidden">

      {/* ======================================================
          CUSTOM STYLES
      ====================================================== */}

      <style>{`
        @keyframes customFadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .anim-fade {
          animation:
            customFadeInUp
            0.4s
            cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
        }

        .anim-menu {
          animation:
            slideDown
            0.25s
            ease-out
            forwards;
        }
      `}</style>

      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <header className="bg-white sticky top-0 z-50 border-b border-slate-100 shadow-xs">

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

          {/* LOGO */}

          <div
            onClick={() => handleTabChange("library")}
            className="cursor-pointer flex items-center z-10"
          >
            <img
              src="/logo.png"
              alt="Inova Medika Solusindo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/160x40?text=INOVA+MEDIKA";
              }}
            />
          </div>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3 text-sm font-bold text-teal-900 absolute left-1/2 -translate-x-1/2">

            <button
              onClick={() => handleTabChange("library")}
              className="px-3 py-2 hover:text-emerald-600 transition"
            >
              Home
            </button>

            <a
              href="#"
              className="px-3 py-2 hover:text-emerald-600 transition"
            >
              News
            </a>

            <a
              href="#"
              className="px-3 py-2 hover:text-emerald-600 transition"
            >
              Insights
            </a>

            <a
              href="#"
              className="px-3 py-2 hover:text-emerald-600 transition"
            >
              Research
            </a>

            <button
              onClick={() => handleTabChange("case-studies")}
              className={`px-3.5 py-1.5 rounded-lg transition-all duration-200 ${
                activeTab === "case-studies"
                  ? "bg-emerald-100/90 text-teal-950 font-extrabold shadow-2xs"
                  : "hover:text-emerald-600"
              }`}
            >
              Case Studies
            </button>

            <button
              onClick={() => handleTabChange("library")}
              className={`px-3.5 py-1.5 rounded-lg transition-all duration-200 ${
                activeTab === "library"
                  ? "bg-emerald-100/90 text-teal-950 font-extrabold shadow-2xs"
                  : "hover:text-emerald-600"
              }`}
            >
              Library
            </button>

            <a
              href="#"
              className="px-3 py-2 hover:text-emerald-600 transition"
            >
              Events
            </a>

            <a
              href="#"
              className="px-3 py-2 hover:text-emerald-600 transition"
            >
              Community
            </a>

          </nav>

          {/* SPACER */}

          <div className="hidden md:block w-32"></div>

          {/* MOBILE BURGER */}

          <button
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition focus:outline-none"
            aria-label="Toggle Navigation Menu"
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
                  strokeWidth={2}
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
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 shadow-xl anim-menu">

            <button
              onClick={() => handleTabChange("library")}
              className="block w-full text-left font-bold text-slate-700 py-2 hover:text-emerald-700 border-b border-slate-50"
            >
              Home
            </button>

            <button
              onClick={() =>
                handleTabChange("case-studies")
              }
              className={`block w-full text-left font-bold py-2.5 px-3 rounded-lg transition ${
                activeTab === "case-studies"
                  ? "bg-emerald-100 text-teal-950 font-black"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Case Studies
            </button>

            <button
              onClick={() => handleTabChange("library")}
              className={`block w-full text-left font-bold py-2.5 px-3 rounded-lg transition ${
                activeTab === "library"
                  ? "bg-emerald-100 text-teal-950 font-black"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Library
            </button>

            <a
              href="#"
              className="block font-bold text-slate-700 py-2 hover:text-emerald-700 border-b border-slate-50"
            >
              News
            </a>

            <a
              href="#"
              className="block font-bold text-slate-700 py-2 hover:text-emerald-700 border-b border-slate-50"
            >
              Insights
            </a>

            <a
              href="#"
              className="block font-bold text-slate-700 py-2 hover:text-emerald-700 border-b border-slate-50"
            >
              Research
            </a>

            <a
              href="#"
              className="block font-bold text-slate-700 py-2 hover:text-emerald-700 border-b border-slate-50"
            >
              Events
            </a>

            <a
              href="#"
              className="block font-bold text-slate-700 py-2 hover:text-emerald-700"
            >
              Community
            </a>

          </div>
        )}
      </header>

      {/* ======================================================
          MAIN WRAPPER
      ====================================================== */}

      <div className="transform scale-100 md:scale-95 lg:scale-90 origin-top transition-transform duration-300">

        {/* ====================================================
            CASE STUDY DETAIL
        ==================================================== */}

        {selectedCaseStudy ? (

          <div
            key={`cs-${selectedCaseStudy.id}`}
            className="anim-fade"
          >

            {/* HERO */}

            <section className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white py-14 px-6 rounded-b-3xl">

              <div className="max-w-[1400px] mx-auto space-y-4">

                <nav className="flex items-center text-xs text-slate-300 gap-2 font-medium flex-wrap">

                  <button
                    onClick={clearDetailView}
                    className="hover:text-emerald-400 transition"
                  >
                    🏠 Home
                  </button>

                  <span>›</span>

                  <button
                    onClick={clearDetailView}
                    className="hover:text-emerald-400 transition"
                  >
                    Case Studies
                  </button>

                  <span>›</span>

                  <span className="text-emerald-300 font-bold line-clamp-1">
                    {selectedCaseStudy.title}
                  </span>

                </nav>

                <span className="inline-block text-[10px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-800/60 px-3 py-1 rounded-md border border-emerald-500/40">
                  {selectedCaseStudy.tag}
                </span>

                <h1 className="text-2xl md:text-4xl font-black leading-tight max-w-4xl">
                  {selectedCaseStudy.title}
                </h1>

                <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-7">
                  {selectedCaseStudy.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-300 pt-2 font-medium flex-wrap">

                  <span>
                    ✍️ {selectedCaseStudy.author}
                  </span>

                  <span>•</span>

                  <span>
                    📅 {selectedCaseStudy.date}
                  </span>

                </div>

              </div>

            </section>

            {/* DETAIL CONTENT */}

            <main className="max-w-[1400px] mx-auto px-6 py-12">

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* LEFT */}

                <div className="lg:col-span-8 space-y-8">

                  {/* IMAGE */}

                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">

                    <img
                      src={selectedCaseStudy.image}
                      alt={selectedCaseStudy.title}
                      className="w-full h-80 object-cover"
                    />

                  </div>

                  {/* RICH CONTENT */}

                  {selectedCaseStudy.id === 1 ? (

                    <RichCaseStudyDetail
                      caseStudy={selectedCaseStudy}
                    />

                  ) : (

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">

                      <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                        Ringkasan Studi Kasus
                      </h3>

                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        {selectedCaseStudy.content}
                      </p>

                      <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-6 space-y-3">

                        <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                          🚀 Dampak & Hasil Utama:
                        </h4>

                        <ul className="space-y-2 text-xs md:text-sm text-slate-700 list-disc list-inside">

                          {selectedCaseStudy.impacts?.map(
                            (item, idx) => (
                              <li key={idx}>
                                {item}
                              </li>
                            )
                          )}

                        </ul>

                      </div>

                    </div>

                  )}

                </div>

                {/* RIGHT SIDEBAR */}

                <div className="lg:col-span-4 space-y-6">

                  {/* DETAIL PROYEK */}

                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">

                    <h4 className="font-bold text-slate-800 text-sm border-b border-slate-100 pb-3">
                      Detail Proyek
                    </h4>

                    <div className="space-y-4 text-xs">

                      <div>
                        <span className="text-slate-400 block font-medium">
                          Klien / Fasyankes
                        </span>

                        <span className="font-bold text-slate-800 text-sm">
                          {selectedCaseStudy.client}
                        </span>
                      </div>

                      <div>
                        <span className="text-slate-400 block font-medium">
                          Industri
                        </span>

                        <span className="font-bold text-slate-800 text-sm">
                          {selectedCaseStudy.industry}
                        </span>
                      </div>

                      <div>
                        <span className="text-slate-400 block font-medium">
                          Lokasi
                        </span>

                        <span className="font-bold text-slate-800 text-sm">
                          {selectedCaseStudy.location}
                        </span>
                      </div>

                      <div>
                        <span className="text-slate-400 block font-medium">
                          Durasi Pengerjaan
                        </span>

                        <span className="font-bold text-slate-800 text-sm">
                          {selectedCaseStudy.duration}
                        </span>
                      </div>

                      <div>
                        <span className="text-slate-400 block font-medium">
                          Status
                        </span>

                        <span className="inline-block bg-emerald-100 text-emerald-800 font-extrabold px-2.5 py-0.5 rounded text-[10px] mt-1">
                          {selectedCaseStudy.status}
                        </span>
                      </div>

                    </div>

                  </div>

                  {/* SOLUTIONS SIDEBAR */}

                  <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl space-y-4">

                    <h4 className="font-bold text-emerald-950 text-sm">
                      Solusi yang Digunakan
                    </h4>

                    <ul className="space-y-2">

                      {selectedCaseStudy.solutions?.map(
                        (solution, index) => (
                          <li
                            key={index}
                            className="text-xs text-slate-700 flex gap-2"
                          >
                            <span className="text-emerald-700 font-bold">
                              •
                            </span>

                            <span>
                              {solution}
                            </span>
                          </li>
                        )
                      )}

                    </ul>

                  </div>

                  {/* BACK */}

                  <button
                    onClick={clearDetailView}
                    className="w-full text-xs font-bold text-slate-500 hover:text-emerald-800 py-3 flex items-center justify-center gap-1 transition-all hover:-translate-x-1"
                  >
                    ← Kembali ke Case Studies
                  </button>

                </div>

              </div>

            </main>

          </div>

        ) : selectedDocument ? (

          /* ==================================================
             VIEW DETAIL DOKUMEN LIBRARY
          ================================================== */

          <div
            key={`doc-${selectedDocument.id}`}
            className="anim-fade"
          >

            <section className="bg-gradient-to-r from-emerald-50/90 via-teal-50/60 to-emerald-50/90 border-b border-emerald-100/70 py-12 px-6 relative overflow-hidden rounded-b-3xl shadow-xs">

              <div className="max-w-[1400px] mx-auto space-y-6 relative z-10">

                <nav className="flex items-center text-xs text-slate-500 gap-2 font-medium flex-wrap">

                  <button
                    onClick={clearDetailView}
                    className="hover:text-emerald-700 transition"
                  >
                    🏠 Home
                  </button>

                  <span>›</span>

                  <button
                    onClick={clearDetailView}
                    className="hover:text-emerald-700 transition"
                  >
                    Library
                  </button>

                  <span>›</span>

                  <span className="capitalize">
                    {selectedDocument.tag.toLowerCase()}
                  </span>

                  <span>›</span>

                  <span className="text-slate-800 font-bold line-clamp-1">
                    {selectedDocument.title}
                  </span>

                </nav>

                <div>

                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-3.5 py-1.5 rounded-lg shadow-2xs">
                    {selectedDocument.tag}
                  </span>

                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl">
                  {selectedDocument.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium pt-2">

                  <div className="flex items-center gap-2">
                    <span>🏛️</span>
                    {selectedDocument.publisher}
                  </div>

                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    Tahun: {selectedDocument.year}
                  </div>

                  <div className="flex items-center gap-2">
                    <span>📄</span>
                    Jenis: {selectedDocument.type}
                  </div>

                </div>

              </div>

            </section>

            <main className="max-w-[1400px] mx-auto px-6 py-12">

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                <div className="lg:col-span-8 space-y-8">

                  <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-md space-y-6">

                    <div className="flex space-x-8 border-b border-slate-200 pb-4">

                      <button
                        onClick={() =>
                          setDetailActiveTab("deskripsi")
                        }
                        className={`text-sm font-bold pb-2 relative transition ${
                          detailActiveTab === "deskripsi"
                            ? "text-emerald-800"
                            : "text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        Deskripsi

                        {detailActiveTab === "deskripsi" && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full" />
                        )}

                      </button>

                      <button
                        onClick={() =>
                          setDetailActiveTab("informasi")
                        }
                        className={`text-sm font-bold pb-2 relative transition ${
                          detailActiveTab === "informasi"
                            ? "text-emerald-800"
                            : "text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        Informasi Dokumen

                        {detailActiveTab === "informasi" && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full" />
                        )}

                      </button>

                    </div>

                    {detailActiveTab === "deskripsi" && (

                      <div className="space-y-6 anim-fade">

                        <div className="space-y-3">

                          <h3 className="text-lg font-bold text-slate-800">
                            Tentang Dokumen
                          </h3>

                          <p className="text-slate-600 text-sm leading-relaxed">
                            {selectedDocument.desc}
                          </p>

                        </div>

                        <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6 space-y-3">

                          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                            <span className="text-lg">💡</span>
                            Poin Penting
                          </div>

                          <ul className="space-y-2 text-xs text-slate-700 list-disc list-inside leading-relaxed pl-1">

                            {selectedDocument.keyPoints?.map(
                              (pt, idx) => (
                                <li key={idx}>
                                  {pt}
                                </li>
                              )
                            )}

                          </ul>

                        </div>

                      </div>

                    )}

                    {detailActiveTab === "informasi" && (

                      <div className="space-y-4 anim-fade text-xs text-slate-700">

                        <div className="grid grid-cols-2 py-2.5 border-b border-slate-100">
                          <span className="font-semibold text-slate-500">
                            Penerbit
                          </span>

                          <span className="font-bold">
                            {selectedDocument.publisher}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 py-2.5 border-b border-slate-100">
                          <span className="font-semibold text-slate-500">
                            Jenis Dokumen
                          </span>

                          <span className="font-bold">
                            {selectedDocument.type}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 py-2.5 border-b border-slate-100">
                          <span className="font-semibold text-slate-500">
                            Tahun Terbit
                          </span>

                          <span className="font-bold">
                            {selectedDocument.year}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 py-2.5 border-b border-slate-100">
                          <span className="font-semibold text-slate-500">
                            Format File
                          </span>

                          <span className="font-bold">
                            {selectedDocument.fileType}
                          </span>
                        </div>

                      </div>

                    )}

                  </div>

                </div>

                <div className="lg:col-span-4 space-y-6">

                  <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-md space-y-6">

                    <div className="bg-emerald-50/60 border border-emerald-100/80 rounded-2xl p-6 flex items-center gap-4">

                      <div className="w-20 h-28 bg-white rounded-lg shadow-sm border border-emerald-200 p-2 flex flex-col justify-between items-center text-center shrink-0">

                        <div className="text-[8px] font-black uppercase text-emerald-800 leading-tight">
                          {selectedDocument.publisher}
                        </div>

                        <div className="text-[20px]">
                          📄
                        </div>

                        <span className="bg-emerald-800 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
                          PDF
                        </span>

                      </div>

                      <div className="space-y-1">

                        <span className="text-[10px] font-extrabold text-slate-400 uppercase">
                          Dokumen {selectedDocument.fileType}
                        </span>

                        <h4 className="text-xs font-extrabold text-slate-800 line-clamp-2">
                          {selectedDocument.title}
                        </h4>

                        <div className="text-[10px] text-slate-500 space-y-0.5 pt-1">
                          <p>
                            💾 {selectedDocument.size} • 📄{" "}
                            {selectedDocument.pages}
                          </p>
                        </div>

                      </div>

                    </div>

                    <div className="space-y-3">

                      <button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2">
                        <span>📥</span>
                        Unduh PDF
                      </button>

                      <button className="w-full bg-white hover:bg-slate-50 text-emerald-900 font-bold text-xs py-3 px-4 rounded-xl border border-slate-200 transition-all duration-200 flex items-center justify-center gap-2">
                        <span>🔗</span>
                        Bagikan Dokumen
                      </button>

                    </div>

                  </div>

                  <button
                    onClick={clearDetailView}
                    className="w-full text-xs font-bold text-slate-500 hover:text-emerald-800 py-2 flex items-center justify-center gap-1 transition-all duration-200 hover:-translate-x-1"
                  >
                    ← Kembali ke Daftar Library
                  </button>

                </div>

              </div>

            </main>

          </div>

        ) : activeTab === "case-studies" ? (

          /* ==================================================
             CASE STUDIES LIST PAGE
          ================================================== */

          <div
            key="case-studies"
            className="anim-fade"
          >

            <section className="relative text-white py-20 px-8 overflow-hidden min-h-[340px] flex items-center rounded-2xl">

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80')",
                }}
              />

              <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />

              <div className="max-w-6xl mx-auto space-y-4 text-left relative z-10 w-full">

                <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400 border border-emerald-500/60 px-3 py-1 rounded-md bg-emerald-950/50">
                  SUCCESS STORIES
                </span>

                <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                  Healthcare Transformation
                  <br />

                  <span className="text-emerald-400">
                    Case Studies
                  </span>
                </h1>

                <p className="text-slate-300 text-sm md:text-base max-w-2xl font-light">
                  Pelajari bagaimana berbagai fasilitas kesehatan di
                  Indonesia berhasil melakukan digitalisasi
                  operasional dan integrasi layanan medis bersama
                  solusi kami.
                </p>

              </div>

            </section>

            <main className="max-w-[1400px] mx-auto px-6 py-12 space-y-8">

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {CASE_STUDIES.map((item) => (

                  <div
                    key={item.id}
                    onClick={() =>
                      setSelectedCaseStudy(item)
                    }
                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between group cursor-pointer"
                  >

                    <div>

                      <div className="relative h-44 overflow-hidden bg-slate-100">

                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />

                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-emerald-900 text-[10px] font-extrabold px-3 py-1 rounded-full shadow-xs">
                          {item.tag}
                        </span>

                      </div>

                      <div className="p-5 space-y-2">

                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-emerald-800 transition line-clamp-2">
                          {item.title}
                        </h3>

                        <p className="text-xs text-slate-500 line-clamp-3">
                          {item.description}
                        </p>

                      </div>

                    </div>

                    <div className="p-5 pt-0 border-t border-slate-100 mt-2">

                      <button className="text-emerald-800 text-xs font-bold hover:underline flex items-center justify-between w-full pt-3">

                        <span>
                          Read Story
                        </span>

                        <span>
                          ➔
                        </span>

                      </button>

                    </div>

                  </div>

                ))}

              </div>

            </main>

          </div>

        ) : (

          /* ==================================================
             LIBRARY LIST PAGE
          ================================================== */

          <div
            key="library"
            className="anim-fade"
          >

            <section className="relative text-white py-20 px-8 overflow-hidden min-h-[360px] flex items-center rounded-2xl">

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80')",
                }}
              />

              <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />

              <div className="max-w-5xl mx-auto space-y-6 text-left relative z-10 w-full">

                <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-4 py-1.5 rounded-md border border-emerald-600">
                  LIBRARY RESOURCES
                </span>

                <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">

                  Digital Healthcare Resources
                  <br />

                  <span className="text-emerald-400">
                    for a Better Tomorrow
                  </span>

                </h1>

                <div className="pt-2 max-w-2xl">

                  <div className="bg-white rounded-xl p-2 shadow-xl flex items-center">

                    <span className="pl-3 text-slate-400 text-base">
                      🔍
                    </span>

                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) =>
                        setSearchQuery(e.target.value)
                      }
                      placeholder="Cari judul, topik, atau kata kunci..."
                      className="w-full bg-transparent px-3 py-2 text-slate-800 text-sm focus:outline-none placeholder:text-slate-400 font-medium"
                    />

                    <button className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-6 py-2.5 rounded-lg transition shadow-md">
                      Cari
                    </button>

                  </div>

                </div>

              </div>

            </section>

            <main className="max-w-[1400px] mx-auto px-6 py-12 space-y-12">

              {/* TOPICS */}

              <section className="space-y-4">

                <div className="flex justify-between items-end">

                  <div>

                    <h2 className="text-xl font-bold text-slate-900">
                      Browse by Topic
                    </h2>

                    <p className="text-xs text-slate-500">
                      Klik topik di bawah untuk menyaring dokumen.
                    </p>

                  </div>

                  {selectedTopic && (
                    <button
                      onClick={() =>
                        setSelectedTopic(null)
                      }
                      className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full hover:bg-emerald-100 transition"
                    >
                      ✕ Tampilkan Semua
                    </button>
                  )}

                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">

                  {TOPICS.map((topic) => {

                    const isSelected =
                      selectedTopic === topic.id;

                    return (
                      <button
                        key={topic.id}
                        onClick={() =>
                          setSelectedTopic(
                            isSelected
                              ? null
                              : topic.id
                          )
                        }
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border transition duration-200 ${
                          isSelected
                            ? "bg-emerald-800 text-white border-emerald-800 shadow-md"
                            : "bg-white border-slate-200 text-slate-700 hover:border-emerald-500"
                        }`}
                      >

                        <span className="text-2xl mb-1">
                          {topic.icon}
                        </span>

                        <span className="text-xs font-bold">
                          {topic.label}
                        </span>

                      </button>
                    );
                  })}

                </div>

              </section>

              {/* LIBRARY LIST */}

              <section className="space-y-6">

                <div className="flex justify-between items-center border-b border-slate-200 pb-3">

                  <h3 className="text-lg font-bold text-slate-800">

                    {selectedTopic
                      ? `Topik: "${selectedTopic}"`
                      : "Semua Sumber Daya"}

                  </h3>

                  <span className="text-xs font-bold text-slate-400">
                    {filteredLibrary.length} Dokumen Ditemukan
                  </span>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                  {filteredLibrary.map((item) => (

                    <div
                      key={item.id}
                      onClick={() =>
                        setSelectedDocument(item)
                      }
                      className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 active:scale-98 transition duration-300 flex flex-col justify-between group cursor-pointer"
                    >

                      <div>

                        <div className="relative h-44 overflow-hidden bg-slate-100">

                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />

                          <span className="absolute top-3 left-3 bg-white/95 backdrop-blur text-emerald-800 text-[10px] font-black px-3 py-1 rounded-full shadow-xs uppercase">
                            {item.tag}
                          </span>

                        </div>

                        <div className="p-5 space-y-2">

                          <h4 className="text-sm font-extrabold text-slate-800 group-hover:text-emerald-800 transition line-clamp-2">
                            {item.title}
                          </h4>

                          <p className="text-xs text-slate-500 line-clamp-3">
                            {item.desc}
                          </p>

                        </div>

                      </div>

                      <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2 text-[11px] font-bold text-slate-400">

                        <span>
                          {item.fileType} • {item.pages}
                        </span>

                        <span className="text-emerald-800 font-extrabold group-hover:translate-x-1 transition">
                          Buka Detail ➔
                        </span>

                      </div>

                    </div>

                  ))}

                </div>

              </section>

            </main>

          </div>

        )}

        {/* ====================================================
            FOOTER
        ==================================================== */}

        <footer className="bg-[#EAF7F0] text-emerald-950 pt-16 pb-12 border-t border-emerald-200 text-xs mt-20 rounded-t-3xl">

          <div className="max-w-[1400px] mx-auto px-6 space-y-12">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

              {/* ABOUT */}

              <div className="space-y-3">

                <h4 className="font-bold text-sm text-emerald-900">
                  About Us
                </h4>

                <p className="text-slate-600 leading-relaxed text-[11px]">
                  PT. Inova Medika Solusindo adalah penyedia solusi
                  teknologi informasi kesehatan terintegrasi di
                  Indonesia, berfokus pada e-Health, SIMRS, dan
                  interoperabilitas data.
                </p>

              </div>

              {/* EXPLORE */}

              <div className="space-y-2">

                <h4 className="font-bold text-sm text-emerald-900 mb-3">
                  Explore
                </h4>

                <ul className="space-y-2 text-slate-600">

                  <li>
                    <button
                      onClick={() =>
                        handleTabChange("case-studies")
                      }
                      className="hover:text-emerald-800 transition"
                    >
                      Case Studies
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() =>
                        handleTabChange("library")
                      }
                      className="hover:text-emerald-800 transition"
                    >
                      Library Resources
                    </button>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-emerald-800 transition"
                    >
                      News & Articles
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-emerald-800 transition"
                    >
                      Events & Webinar
                    </a>
                  </li>

                </ul>

              </div>

              {/* CONTACT */}

              <div className="space-y-2">

                <h4 className="font-bold text-sm text-emerald-900 mb-3">
                  Contact
                </h4>

                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Email: info@inovamedika.com
                  <br />
                  Website: www.inovamedika.com
                </p>

              </div>

              {/* COPYRIGHT */}

              <div className="space-y-3">

                <h4 className="font-bold text-sm text-emerald-900">
                  Inova Medika
                </h4>

                <p className="text-slate-500 text-[11px]">
                  © {new Date().getFullYear()} PT. Inova Medika
                  Solusindo. All rights reserved.
                </p>

              </div>

            </div>

          </div>

        </footer>

      </div>

    </div>
  );
}