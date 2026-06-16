export const mockData = {
  toggleBar: {
    darkModeText: {
      en: { light: "DARK MODE", dark: "LIGHT MODE" },
      tr: { light: "KARANLIK TEMA", dark: "AYDINLIK TEMA" },
    },
    langSelectorText: {
      en: {
        purple: "TÜRKÇE",
        gray: "'YE GEÇ",
      },
      tr: {
        purple: " ENGLISH",
        gray: "SWITCH TO",
      },
    },
  },
  header: {
    skillText: {
      en: "Skills",
      tr: "Teknik Beceriler",
    },
    projectText: {
      en: "Projects",
      tr: "Projeler",
    },
    hireText: {
      en: "Hire me",
      tr: "Beni işe al",
    },
  },
  hero: {
    name: "Çağatay Özkan",
    summaryText: {
      en: ["Creative thinker", " Minimalism lover"],
      tr: ["Yaratıcı düşünür", " Minimalizm sever"],
    },
    descText: {
      en: "Hi, I’m Çağatay. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
      tr: "Merhaba, ben Çağatay. Ben bir full-stack geliştiriciyim. Eğer güçlü, ölçeklenebilir ve harika kullanıcı deneyimleri sunan frontend ürünleri geliştirebilecek bir geliştirici arıyorsanız, tanışalım ve birlikte çalışalım.",
    },
  },
  skills: [
    {
      id: 1,
      title: {
        en: "JavaScript",
        tr: "JavaScript",
      },
      text: {
        en: "JavaScript is the core language I use to build dynamic and interactive web applications. I focus on writing clean, maintainable code and creating responsive interfaces that improve user experience",
        tr: "JavaScript, dinamik ve etkileşimli web uygulamaları geliştirmek için kullandığım temel dildir. Temiz ve sürdürülebilir kod yazmaya, kullanıcı deneyimini geliştiren responsive arayüzler oluşturmaya odaklanıyorum.",
      },
    },
    {
      id: 2,
      title: {
        en: "React",
        tr: "React",
      },
      text: {
        en: "I use React to build scalable and component-based user interfaces. It helps me create fast, modern web applications while keeping the code structure organized and easy to maintain.",
        tr: "React'i ölçeklenebilir ve bileşen tabanlı kullanıcı arayüzleri geliştirmek için kullanıyorum. Modern ve hızlı web uygulamaları oluştururken kod yapısının düzenli ve sürdürülebilir kalmasını sağlar.",
      },
    },
    {
      id: 3,
      title: {
        en: "Node.js",
        tr: "Node.js",
      },
      text: {
        en: "With Node.js, I develop backend services and APIs that support modern web applications. I focus on building efficient and scalable server-side solutions.",
        tr: "Node.js ile modern web uygulamalarını destekleyen backend servisleri ve API’ler geliştiriyorum. Verimli ve ölçeklenebilir sunucu tarafı çözümleri oluşturmaya odaklanıyorum.",
      },
    },
  ],
  profile: {
    headerText: {
      en: "Profile",
      tr: "Bilgiler",
    },
    info: [
      {
        id: 1,
        label: { en: "Birth Date", tr: "Doğum Tarihi" },
        value: { en: "08.18.2001", tr: "18.08.2001" },
      },
      {
        id: 2,
        label: { en: "City Of Residence", tr: "İkamet Şehri" },
        value: { en: "Bursa", tr: "Bursa" },
      },
      {
        id: 3,
        label: {
          en: "Education",
          tr: "Eğitim Durumu",
        },
        value: {
          en: "Uludag Uni. Electrical Electronics Engineering Bachelor's Degree, 2025",
          tr: "Hacettepe Ünv. Elektrik Elektronik Mühendisliği Lisans, 2025",
        },
      },
      {
        id: 4,
        label: {
          en: "Preferred Role",
          tr: "Tercih Ettiği Rol",
        },
        value: { en: "Frontend, UI", tr: "Frontend, UI" },
      },
    ],
    aboutTitle: {
      en: "About Me",
      tr: "Hakkımda",
    },
    aboutText: {
      en: "I like working on projects that challenge me and help me grow as a developer. Solving real problems and turning ideas into functional products motivates me to keep learning and improving every day.",
      tr: "Beni zorlayan ve geliştirici olarak büyümemi sağlayan projeler üzerinde çalışmayı seviyorum. Gerçek problemlere çözüm üretmek ve fikirleri çalışan ürünlere dönüştürmek her gün daha iyi olmam için bana motivasyon veriyor.",
    },
  },
  projects: [
    {
      id: 1,
      title: {
        en: "Portfolio",
        tr: "Kişisel Web Sitesi",
      },
      text: {
        en: "A modern and responsive personal portfolio website. Designed to showcase my projects, technical skills, and contact information through a clean and user-friendly interface. Built with React with a focus on performance and simplicity.",
        tr: "Modern ve responsive bir kişisel portfolyo web sitesi. Projelerimi, teknik yetkinliklerimi ve iletişim bilgilerimi kullanıcı dostu bir arayüz ile sunuyorum. React kullanılarak geliştirildi ve performans ile sade tasarım odaklı oluşturuldu.",
      },
      viewSite: { en: "View Site", tr: "Siteye Git" },
    },
    {
      id: 2,
      title: {
        en: "Food Ordering Website",
        tr: "Yemek Sipariş Sitesi",
      },
      text: {
        en: "Food ordering application that allows users to place orders. Built with React, featuring form handling, order creation, and an interactive user experience. Designed with a responsive interface for seamless use across devices.",
        tr: "Kullanıcıların sipariş verebildiği modern bir yemek sipariş uygulaması. Form yönetimi, sipariş oluşturma ve kullanıcı etkileşimleri React ile geliştirilmiştir. Responsive tasarım sayesinde farklı cihazlarda sorunsuz bir deneyim sunar.",
      },
      viewSite: { en: "View Site", tr: "Siteye Git" },
    },
    {
      id: 3,
      title: {
        en: "E-Commerce Web Application",
        tr: "E-Ticaret Web Sitesi",
      },
      text: {
        en: "A full-featured e-commerce web application. Includes product listing, product details, shopping cart management, and global state management. Developed with React, Redux, and Tailwind CSS.",
        tr: "Tam özellikli bir e-ticaret uygulaması. Ürün listeleme, detay sayfaları, sepet yönetimi ve durum yönetimi gibi temel e-ticaret işlevlerini içermektedir. React, Redux ve Tailwind CSS kullanılarak geliştirilmiştir.",
      },
      viewSite: { en: "View Site", tr: "Siteye Git" },
    },
  ],
  footer: {
    text: {
      en: "Let's work together on your next product.",
      tr: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
    },
    blog: {
      en: "Personal Blog",
      tr: "Kişisel Blog",
    },
  },
  toastText: {
    en: {
      skills: "Navigated to my skills",
      projects: "Navigated to my projects",
      hire: "Navigated to my contact information",
    },
    tr: {
      skills: "Becerilerime gidildi.",
      projects: "Projelerime gidildi.",
      hire: "İletişim bilgime gidildi.",
    },
  },
};
