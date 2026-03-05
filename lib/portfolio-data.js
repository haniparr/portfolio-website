// Temporary data dengan gambar dari Unsplash
// Nanti kamu replace dengan fetch dari API database

export const portfolioData = [
  // ===== WORDPRESS ITEMS =====
  {
    id: 1,
    title: "Sajian Premium Kamu",
    subtitle: "Sajian Vitatus Premium Kanou",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    category: "Food & Beverage",
    platform: "wordpress",
    type: "desktop",
    url: "https://example.com",
    description: "Platform catering premium dengan menu berkualitas tinggi",
    marqueeText: "sajianpremium.com",
    showcaseDescription:
      "Website catering premium yang menampilkan menu berkualitas tinggi dengan desain elegan dan modern.",
    frameworks: [
      { name: "WordPress", icon: "W", color: "bg-blue-700" },
      { name: "Elementor", icon: "E", color: "bg-pink-500" },
      { name: "WooCommerce", icon: "🛒", color: "bg-purple-600" },
    ],
  },
  {
    id: 2,
    title: "Haji & Umrah",
    subtitle: "Bersama Kami Semua Lebih Mudah",
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
    category: "Travel",
    platform: "wordpress",
    type: "desktop",
    url: "https://example.com",
    description: "Layanan travel haji dan umrah terpercaya",
    marqueeText: "hajiumrah.com",
    showcaseDescription:
      "Website layanan travel haji dan umrah dengan fitur booking online dan informasi paket lengkap.",
    frameworks: [
      { name: "WordPress", icon: "W", color: "bg-blue-700" },
      { name: "Elementor", icon: "E", color: "bg-pink-500" },
    ],
  },
  {
    id: 3,
    title: "Pelopor Korean Street Food",
    subtitle: "Taste di Indonesia",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    category: "Food & Beverage",
    platform: "wordpress",
    type: "mobile",
    url: "https://example.com",
    description: "Authentic Korean street food experience",
    marqueeText: "koreanstreetfood.id",
    showcaseDescription:
      "Mobile-first website untuk Korean street food dengan menu interaktif dan sistem order online.",
    frameworks: [
      { name: "WordPress", icon: "W", color: "bg-blue-700" },
      { name: "Flavor Theme", icon: "🍜", color: "bg-orange-500" },
    ],
  },
  {
    id: 4,
    title: "Internet Handal & Solusi IT",
    subtitle: "Untuk Bisnis Anda",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    category: "Technology",
    platform: "wordpress",
    type: "desktop",
    url: "https://example.com",
    description: "Provider internet dan solusi IT untuk bisnis",
    marqueeText: "soluisiit.com",
    showcaseDescription:
      "Website provider internet dan IT solutions dengan fitur cek coverage area dan paket berlangganan.",
    frameworks: [
      { name: "WordPress", icon: "W", color: "bg-blue-700" },
      { name: "Divi", icon: "D", color: "bg-purple-500" },
    ],
  },
  {
    id: 5,
    title: "E-Commerce Fashion",
    subtitle: "Belanja Online Mudah & Aman",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    category: "E-Commerce",
    platform: "wordpress",
    type: "mobile",
    url: "https://example.com",
    description: "Platform belanja online fashion terlengkap",
    marqueeText: "fashionstore.id",
    showcaseDescription:
      "Platform e-commerce fashion mobile-friendly dengan katalog produk lengkap dan checkout aman.",
    frameworks: [
      { name: "WordPress", icon: "W", color: "bg-blue-700" },
      { name: "WooCommerce", icon: "🛒", color: "bg-purple-600" },
      { name: "Elementor", icon: "E", color: "bg-pink-500" },
    ],
  },
  {
    id: 6,
    title: "Aplikasi Fitness Tracker",
    subtitle: "Pantau Kesehatan Anda",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    category: "Health & Fitness",
    platform: "wordpress",
    type: "mobile",
    url: "https://example.com",
    description: "Aplikasi tracking workout dan kesehatan",
    marqueeText: "fitnesstracker.id",
    showcaseDescription:
      "Website fitness tracker mobile-first dengan dashboard workout dan tracking progress kesehatan.",
    frameworks: [
      { name: "WordPress", icon: "W", color: "bg-blue-700" },
      { name: "BuddyBoss", icon: "B", color: "bg-green-600" },
    ],
  },
  {
    id: 7,
    title: "Real Estate Portal",
    subtitle: "Temukan Properti Impian",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    category: "Real Estate",
    platform: "wordpress",
    type: "desktop",
    url: "https://example.com",
    description: "Portal properti dengan listing terlengkap",
    marqueeText: "realestate.co.id",
    showcaseDescription:
      "Portal properti dengan listing lengkap, fitur pencarian canggih, dan virtual tour.",
    frameworks: [
      { name: "WordPress", icon: "W", color: "bg-blue-700" },
      { name: "Flavor Theme", icon: "🏠", color: "bg-teal-500" },
      { name: "IDX Plugin", icon: "📋", color: "bg-indigo-500" },
    ],
  },
  {
    id: 8,
    title: "Learning Management System",
    subtitle: "Belajar Kapan Saja, Dimana Saja",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    category: "Education",
    platform: "wordpress",
    type: "desktop",
    url: "https://example.com",
    description: "Platform pembelajaran online interaktif",
    marqueeText: "learningms.com",
    showcaseDescription:
      "Platform LMS interaktif dengan fitur kelas online, quiz, dan sertifikat digital.",
    frameworks: [
      { name: "WordPress", icon: "W", color: "bg-blue-700" },
      { name: "LearnDash", icon: "📚", color: "bg-blue-500" },
      { name: "Elementor", icon: "E", color: "bg-pink-500" },
    ],
  },

  // ===== REACT ITEMS =====
  {
    id: 9,
    title: "VIT Catering",
    subtitle: "Premium Catering Service",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
    category: "Food & Beverage",
    platform: "react",
    type: "desktop",
    url: "https://vidicatering.com",
    description: "Website catering modern dengan Next.js dan React",
    marqueeText: "vidicatering.com",
    showcaseDescription:
      "Website catering premium dibangun dengan Next.js, menampilkan animasi modern dan performa tinggi.",
    frameworks: [
      { name: "Next.js", icon: "⚡", color: "bg-black" },
      { name: "React", icon: "⚛️", color: "bg-blue-500" },
      { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-500" },
    ],
  },
  {
    id: 10,
    title: "Portfolio Website",
    subtitle: "Personal Developer Portfolio",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    category: "Portfolio",
    platform: "react",
    type: "desktop",
    url: "https://example.com",
    description: "Portfolio website interaktif dengan animasi 3D",
    marqueeText: "myportfolio.dev",
    showcaseDescription:
      "Portfolio website dengan 3D marquee effects, smooth scrolling, dan animasi Framer Motion.",
    frameworks: [
      { name: "Next.js", icon: "⚡", color: "bg-black" },
      { name: "React", icon: "⚛️", color: "bg-blue-500" },
      { name: "Framer Motion", icon: "🎬", color: "bg-purple-500" },
    ],
  },
  {
    id: 11,
    title: "Dashboard Analytics",
    subtitle: "Real-time Business Intelligence",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "Technology",
    platform: "react",
    type: "desktop",
    url: "https://example.com",
    description: "Dashboard analytics real-time untuk monitoring bisnis",
    marqueeText: "analytics.app",
    showcaseDescription:
      "Dashboard analytics real-time dengan chart interaktif, data visualization, dan reporting otomatis.",
    frameworks: [
      { name: "React", icon: "⚛️", color: "bg-blue-500" },
      { name: "TypeScript", icon: "TS", color: "bg-blue-600" },
      { name: "Chart.js", icon: "📊", color: "bg-orange-500" },
    ],
  },
];
