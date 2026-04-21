export const portfolioData = {
  name: "Md Marufur Rahman",
  title: "Flutter & Mobile Developer",
  bio: "Innovative Flutter Developer with 3 years of experience building cross-platform mobile applications using modern state management and robust backend integration.",
  email: "mdmarufur5682@gmail.com",
  phone: "+8801757474700",
  location: "Tejgaon, Dhaka, Bangladesh",
  profileImage: "/maruf_p_image.jpg", // Replace with your profile image
  
  social: [
    { name: "GitHub", url: "https://github.com/devmarufurrahman", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/dev-marufur-rahman", icon: "linkedin" },
    { name: "WhatsApp", url: "https://wa.me/8801757474700", icon: "whatsapp" },
    { name: "Email", url: "mailto:mdmarufur5682@gmail.com", icon: "mail" }
  ],

  skills: [
    {
      category: "Flutter Development",
      items: ["Riverpod", "GetX", "JSON Serialization (Freezed)", "Dio & Http Packages", "Shorebird OTA Updates", "RPS (Dart Script Manager)", "Upgrader Package"]
    },
    {
      category: "Native Android",
      items: ["Kotlin", "Java", "Android Studio", "High-Performance Apps", "Firebase Integration"]
    },
    {
      category: "Tools & Services",
      items: ["Git & GitHub", "Android Studio", "VS Code", "Figma", "Firebase", "Google Play Store", "Apple App Store"]
    }
  ],

  experience: [
    {
      role: "Mobile App Developer",
      company: "Bini",
      location: "Dhaka, Bangladesh",
      duration: "Sep 2025 - Jan 2026",
      description: "Leading a team of Flutter developers, handling app development with GetX architecture. Planning sprint goals, assigning tasks, and resolving technical blockers instantly."
    },
    {
      role: "Mobile App Developer",
      company: "Shetab Tech.",
      location: "Dhaka, Bangladesh",
      duration: "June 2024 - Aug 2025",
      description: "Led the development of a cross-platform mobile application using Flutter with Riverpod state management. Enhanced user engagement and improved app performance significantly."
    },
    {
      role: "Junior Android Developer",
      company: "Winky Tech Ltd.",
      location: "Dhaka, Bangladesh",
      duration: "March 2023 - May 2024",
      description: "Developed and maintained robust Android applications using Kotlin and Java. Built and connected applications to Laravel-based backend services with MySQL databases."
    }
  ],

  education: [
    {
      degree: "Bachelor of Science",
      school: "Canadian University of Bangladesh",
      field: "Computer Science and Engineering",
      year: "Ongoing",
      location: "Dhaka"
    },
    {
      degree: "Diploma",
      school: "Magura Polytechnic Institute",
      field: "Computer Technology",
      year: "2022",
      location: "Magura",
      grade: "3.59/4.00"
    }
  ],

  projects: [
    {
      id: 1,
      title: "Bini - Investment & Portfolio Management App",
      description: "A modern investment platform for tracking portfolios and managing mutual funds with real-time insights.",
      longDescription: "Bini is a comprehensive investment platform where users can track their portfolios, view real-time insights, compare mutual funds, and manage SIP/Lump-sum calculations. The app offers a smooth and clean UI with accurate financial calculations, secure data handling, and a user-friendly experience for everyday investors.",
      tech: ["Flutter", "Riverpod", "GetX", "REST APIs", "Firebase"],
      link: "https://apps.apple.com/app/bini",
      demo: "https://apps.apple.com/app/bini",
      image: "url-to-image"
    },
    {
      id: 2,
      title: "Quikle - Grocery Delivery App",
      description: "A fast and modern grocery delivery platform with multi-vendor ecosystem for customers, vendors, and riders.",
      longDescription: "Quikle is a fast and modern grocery delivery platform inspired by Blinkit, built with a multi-vendor ecosystem. It includes dedicated apps for customers, vendors, and riders—enabling quick grocery ordering, efficient vendor product management, and real-time rider delivery operations for a seamless hyperlocal shopping experience.",
      tech: ["Flutter", "GetX", "Firebase", "Google Maps", "REST APIs"],
      link: "https://github.com/marufur",
      demo: "https://github.com/marufur",
      image: "url-to-image"
    },
    {
      id: 3,
      title: "Reparo - Vehicle Service App",
      description: "An on-demand vehicle service platform for bike, car, and general vehicle servicing with doorstep delivery.",
      longDescription: "Reparo is an on-demand vehicle service platform developed for international clients, allowing users to book bike, car, moto, and general vehicle servicing anytime. It provides fast and reliable doorstep service from trusted experts, ensuring convenient and high-quality maintenance with a smooth, user-friendly experience.",
      tech: ["Flutter", "Riverpod", "Google Maps API", "Firebase", "Push Notifications"],
      link: "https://play.google.com/store/apps/details?id=com.reparo",
      demo: "https://play.google.com/store/apps/details?id=com.reparo",
      image: "url-to-image"
    },
    {
      id: 4,
      title: "BD Clean - Community & Complaint Management",
      description: "A community-focused platform with event creation, social engagement, and structured complaint systems.",
      longDescription: "Developed a community-focused platform with event creation using Google Maps, social engagement features, and a structured complaint system. Implemented evaluation, migration, member tracking, and role-based access modules. Added secure profile management, real-time chat, and a robust PHP/MySQL backend with Firebase for fast, synchronized data and notifications.",
      tech: ["Flutter", "Firebase", "PHP", "MySQL", "Google Maps", "Real-time Chat"],
      link: "https://play.google.com/store/apps/details?id=com.bdclean",
      demo: "https://play.google.com/store/apps/details?id=com.bdclean",
      image: "url-to-image"
    },
    {
      id: 5,
      title: "Sohoj Pora - Educational Learning Platform",
      description: "An all-in-one educational platform with interactive study books and community-driven learning features.",
      longDescription: "Sohoj Pora is an all-in-one educational platform designed to make learning simple and interactive. It features a rich book system where students can download or access study books enhanced with video explanations, powered by a PHP backend and native Android components. The app supports seamless video playback and includes community-driven features like likes, comments, and shared notes to boost engagement.",
      tech: ["Flutter", "Native Android", "Kotlin", "ExoPlayer", "Firebase", "PHP/MySQL"],
      link: "https://play.google.com/store/apps/details?id=com.sohojpora",
      demo: "https://play.google.com/store/apps/details?id=com.sohojpora",
      image: "url-to-image"
    }
  ],

  languages: [
    {
      name: "English",
      proficiency: "Fluent",
      details: "Written and Spoken"
    },
    {
      name: "Bengali",
      proficiency: "Native",
      details: "Written and Spoken"
    }
  ]
};
