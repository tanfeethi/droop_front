export interface CourseDescription {
  day: string;
  topics: string[];
}

export interface Course {
  id: number;
  coursePlace: string;
  Accreditation_number: string;
  image: string;
  title: string;
  description: CourseDescription[];
  price: string;
  oldPrice: string;
  duration: string;
  level: string;
}

// Arabic data
const coursesDataAr: Course[] = [
  {
    id: 1,
    coursePlace: "Online",
    Accreditation_number: "1733662",
    image: "/assets/images/coop1.webp",
    title: "التدريب على التحليل وعرض البيانات باستخدام Power BI",
    description: [
      {
        day: "اليوم 1",
        topics: [
          "مقدمة في تحليل البيانات وPower BI",
          "مفاهيم تحليل البيانات وأهميته",
          "التعرف على واجهة Power BI",
          "استيراد البيانات من مصادر مختلفة",
        ],
      },
      {
        day: "اليوم 2",
        topics: [
          "تنظيف وتحويل البيانات باستخدام Power Query",
          "أدوات التنظيف والتحويل",
          "إنشاء الجداول والعلاقات",
          "التعامل مع البيانات المفقودة والمكررة",
        ],
      },
      {
        day: "اليوم 3",
        topics: [
          "بناء النماذج وإنشاء المقاييس باستخدام DAX",
          "أساسيات لغة DAX",
          "إنشاء المقاييس (Measures) والحسابات (Calculated Columns)",
          "استخدام الجداول الزمنية",
        ],
      },
      {
        day: "اليوم 4",
        topics: [
          "تصميم التقارير ولوحات المعلومات",
          "عناصر التصميم الفعّال",
          "استخدام المرشحات والتفاعلية",
          "تخصيص التصاميم حسب الجمهور المستهدف",
        ],
      },
      {
        day: "اليوم 5",
        topics: [
          "النشر والمشاركة والتحسين",
          "مشاركة التقارير عبر Power BI Service",
          "إعداد التحديث التلقائي للبيانات",
          "مراجعة مشروع تطبيقي شامل",
        ],
      },
    ],
    price: "1199",
    oldPrice: "1699",
    duration: "5 أيام",
    level: "30 ساعة",
  },
  {
    id: 2,
    coursePlace: "Online",
    Accreditation_number: "17339474",
    image: "/assets/images/coop1.webp",
    title:
      "التدريب على تطبيقات الذكاء الاصطناعي في الإدارة المكتبية والسكرتارية التنفيذية",
    description: [
      {
        day: "اليوم 1",
        topics: [
          "مقدمة في الذكاء الاصطناعي والإدارة المكتبية",
          "مفاهيم الذكاء الاصطناعي",
          "التحول الرقمي في السكرتارية",
          "أدوات الذكاء الاصطناعي الشائعة",
        ],
      },
      {
        day: "اليوم 2",
        topics: [
          "تطبيقات الذكاء الاصطناعي في تنظيم المهام",
          "استخدام أدوات مثل Microsoft Copilot وChatGPT",
          "جدولة الاجتماعات وإدارة الوقت",
          "أتمتة الردود والمراسلات",
        ],
      },
      {
        day: "اليوم 3",
        topics: [
          "إدارة الوثائق والمعلومات باستخدام الذكاء الاصطناعي",
          "تصنيف وأرشفة الوثائق",
          "البحث الذكي واسترجاع المعلومات",
          "حماية البيانات والخصوصية",
        ],
      },
      {
        day: "اليوم 4",
        topics: [
          "دعم اتخاذ القرار والتقارير الذكية",
          "تحليل البيانات المكتبية",
          "إنشاء تقارير تلقائية",
          "أدوات التنبؤ والتوصية",
        ],
      },
      {
        day: "اليوم 5",
        topics: [
          "مشروع تطبيقي وتقييم الأداء",
          "تنفيذ سيناريو عملي باستخدام أدوات AI",
          "تقييم الأداء والتحسين",
          "مناقشة التحديات المستقبلية",
        ],
      },
    ],
    price: "1199",
    oldPrice: "1699",
    duration: "5 أيام",
    level: "30 ساعة",
  },
  {
    id: 3,
    coursePlace: "Online",
    Accreditation_number: "17336343",
    image: "/assets/images/coop1.webp",
    title: "التدريب على التسويق الرقمي Digital Marketing",
    description: [
      {
        day: "اليوم 1",
        topics: [
          "مقدمة في التسويق الرقمي",
          "مفاهيم واستراتيجيات التسويق الإلكتروني",
          "التعرف على القنوات الرقمية",
          "تحديد الجمهور المستهدف",
        ],
      },
      {
        day: "اليوم 2",
        topics: [
          "تحسين محركات البحث (SEO)",
          "الكلمات المفتاحية وتحليل المنافسين",
          "إنشاء محتوى متوافق مع SEO",
          "تحسين تجربة المستخدم في المواقع",
        ],
      },
      {
        day: "اليوم 3",
        topics: [
          "التسويق عبر وسائل التواصل الاجتماعي",
          "إعلانات فيسبوك وإنستجرام",
          "بناء العلامة التجارية على المنصات الاجتماعية",
          "قياس أداء الحملات",
        ],
      },
      {
        day: "اليوم 4",
        topics: [
          "التسويق عبر البريد الإلكتروني والإعلانات الممولة",
          "تصميم حملات بريدية فعّالة",
          "إدارة الميزانية الإعلانية",
          "تحليل النتائج باستخدام Google Analytics",
        ],
      },
      {
        day: "اليوم 5",
        topics: [
          "مشروع تطبيقي في التسويق الرقمي",
          "تطبيق عملي على إنشاء حملة متكاملة",
          "تحليل الأداء وتقديم التقارير",
          "نصائح للاستمرار في تطوير المهارات",
        ],
      },
    ],
    price: "1199",
    oldPrice: "1699",
    duration: "5 أيام",
    level: "30 ساعة",
  },
  {
    id: 4,
    coursePlace: "Online",
    Accreditation_number: "17334351",
    image: "/assets/images/coop1.webp",
    title: "التدريب على إدارة المشاريع الإحترافية PMP",
    description: [
      {
        day: "اليوم 1",
        topics: [
          "مقدمة في إدارة المشاريع ومجالات المعرفة",
          "تعريف المشروع ودورة حياته",
          "نظرة عامة على دليل PMBOK",
          "أدوار ومسؤوليات مدير المشروع",
        ],
      },
      {
        day: "اليوم 2",
        topics: [
          "بدء وتخطيط المشروع",
          "إعداد ميثاق المشروع",
          "تحديد نطاق المشروع",
          "إعداد خطة إدارة المشروع",
        ],
      },
      {
        day: "اليوم 3",
        topics: [
          "تنفيذ المشروع وإدارته",
          "إدارة فرق العمل",
          "التواصل الفعّال",
          "إدارة الجودة والمشتريات",
        ],
      },
      {
        day: "اليوم 4",
        topics: [
          "مراقبة وضبط المشروع",
          "تتبع الأداء باستخدام مؤشرات KPI",
          "إدارة المخاطر والتغييرات",
          "تقارير الحالة والتقدم",
        ],
      },
      {
        day: "اليوم 5",
        topics: [
          "إغلاق المشروع والاستعداد للاختبار",
          "خطوات إغلاق المشروع",
          "مراجعة شاملة للمفاهيم",
          "نصائح لاجتياز اختبار PMP",
        ],
      },
    ],
    price: "1199",
    oldPrice: "1699",
    duration: "5 أيام",
    level: "30 ساعة",
  },
];

// English data
const coursesDataEn: Course[] = [
  {
    id: 1,
    coursePlace: "Online",
    Accreditation_number: "1733662",
    image: "/assets/images/coop1.webp",
    title: "Power BI Data Analysis and Visualization Training",
    description: [
      {
        day: "Day 1",
        topics: [
          "Introduction to data analysis and Power BI",
          "Data analysis concepts and importance",
          "Getting familiar with the Power BI interface",
          "Importing data from various sources",
        ],
      },
      {
        day: "Day 2",
        topics: [
          "Data cleaning and transformation using Power Query",
          "Cleaning and transformation tools",
          "Creating tables and relationships",
          "Handling missing and duplicate data",
        ],
      },
      {
        day: "Day 3",
        topics: [
          "Building models and creating measures with DAX",
          "DAX language fundamentals",
          "Creating measures and calculated columns",
          "Using time intelligence",
        ],
      },
      {
        day: "Day 4",
        topics: [
          "Designing reports and dashboards",
          "Principles of effective design",
          "Using filters and interactivity",
          "Tailoring designs to target audiences",
        ],
      },
      {
        day: "Day 5",
        topics: [
          "Publishing, sharing, and optimization",
          "Sharing reports via Power BI Service",
          "Setting up data refresh",
          "Review of a comprehensive practical project",
        ],
      },
    ],
    price: "1199",
    oldPrice: "1699",
    duration: "5 days",
    level: "30 hours",
  },
  {
    id: 2,
    coursePlace: "Online",
    Accreditation_number: "17339474",
    image: "/assets/images/coop1.webp",
    title:
      "AI Applications in Office Management and Executive Secretarial Work",
    description: [
      {
        day: "Day 1",
        topics: [
          "Introduction to AI and office management",
          "AI concepts",
          "Digital transformation in secretarial work",
          "Popular AI tools",
        ],
      },
      {
        day: "Day 2",
        topics: [
          "AI applications in task organization",
          "Using tools like Microsoft Copilot and ChatGPT",
          "Scheduling meetings and time management",
          "Automating replies and correspondence",
        ],
      },
      {
        day: "Day 3",
        topics: [
          "Document and information management using AI",
          "Document classification and archiving",
          "Smart search and information retrieval",
          "Data protection and privacy",
        ],
      },
      {
        day: "Day 4",
        topics: [
          "Decision support and smart reporting",
          "Office data analysis",
          "Creating automated reports",
          "Forecasting and recommendation tools",
        ],
      },
      {
        day: "Day 5",
        topics: [
          "Practical project and performance evaluation",
          "Implementing a practical scenario using AI tools",
          "Performance evaluation and improvement",
          "Discussing future challenges",
        ],
      },
    ],
    price: "1199",
    oldPrice: "1699",
    duration: "5 days",
    level: "30 hours",
  },
  {
    id: 3,
    coursePlace: "Online",
    Accreditation_number: "17336343",
    image: "/assets/images/coop1.webp",
    title: "Digital Marketing Training",
    description: [
      {
        day: "Day 1",
        topics: [
          "Introduction to digital marketing",
          "Concepts and strategies of online marketing",
          "Overview of digital channels",
          "Identifying the target audience",
        ],
      },
      {
        day: "Day 2",
        topics: [
          "Search Engine Optimization (SEO)",
          "Keywords and competitor analysis",
          "Creating SEO-friendly content",
          "Improving website user experience",
        ],
      },
      {
        day: "Day 3",
        topics: [
          "Social media marketing",
          "Facebook and Instagram ads",
          "Building brand presence on social platforms",
          "Measuring campaign performance",
        ],
      },
      {
        day: "Day 4",
        topics: [
          "Email marketing and paid advertising",
          "Designing effective email campaigns",
          "Managing ad budgets",
          "Analyzing results with Google Analytics",
        ],
      },
      {
        day: "Day 5",
        topics: [
          "Hands-on digital marketing project",
          "Building an integrated campaign",
          "Analyzing performance and reporting",
          "Tips for continuous skills development",
        ],
      },
    ],
    price: "1199",
    oldPrice: "1699",
    duration: "5 days",
    level: "30 hours",
  },
  {
    id: 4,
    coursePlace: "Online",
    Accreditation_number: "17334351",
    image: "/assets/images/coop1.webp",
    title: "Professional Project Management (PMP) Training",
    description: [
      {
        day: "Day 1",
        topics: [
          "Introduction to project management and knowledge areas",
          "Project definition and lifecycle",
          "Overview of the PMBOK Guide",
          "Roles and responsibilities of the project manager",
        ],
      },
      {
        day: "Day 2",
        topics: [
          "Project initiation and planning",
          "Preparing the project charter",
          "Defining project scope",
          "Developing the project management plan",
        ],
      },
      {
        day: "Day 3",
        topics: [
          "Executing and managing the project",
          "Team management",
          "Effective communication",
          "Quality and procurement management",
        ],
      },
      {
        day: "Day 4",
        topics: [
          "Monitoring and controlling the project",
          "Tracking performance using KPIs",
          "Risk and change management",
          "Status and progress reporting",
        ],
      },
      {
        day: "Day 5",
        topics: [
          "Project closure and exam readiness",
          "Project closing steps",
          "Comprehensive review of concepts",
          "Tips to pass the PMP exam",
        ],
      },
    ],
    price: "1199",
    oldPrice: "1699",
    duration: "5 days",
    level: "30 hours",
  },
];

export const getCoursesData = (lang?: "ar" | "en"): Course[] => {
  const current = lang || (localStorage.getItem("lang") as "ar" | "en") || "ar";
  return current === "en" ? coursesDataEn : coursesDataAr;
};

// Backward compatible default export bound to current language
export const coursesData: Course[] = getCoursesData();
