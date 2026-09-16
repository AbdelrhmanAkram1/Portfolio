const translations = {
  en: {
    brand_name: "Abdelrahman Akram",

    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_certifications: "Certifications",
    nav_contact: "Contact",

    hero_role: "Data Analyst",
    hero_roles: ["Data Analyst", "Power BI Developer", "SQL & Python", "Dashboard Builder"],
    hero_title: "Your data already knows what's slowing your business down. It just hasn't told you yet.",
    hero_sub: "I build the dashboards that make it talk — clear numbers, and a clear next step, every time.",
    hero_download: "Download Resume",
    hero_preview: "Preview Resume",
    stat_tools: "tools & platforms",
    stat_projects: "projects",

    about_h2: "About",
    about_status: "Open to freelance & internship opportunities",
    about_p1: "I'm a Computer & Data Science student at Alexandria University, focused on data analytics. I like taking messy spreadsheets and turning them into dashboards that a business owner can actually use to make a decision — not just a pretty chart.",
    about_p2: "My work sits at the intersection of analysis and automation: cleaning and modeling data, building reports in Power BI, and writing the SQL and Python behind them. I'm also building a growing interest in cybersecurity alongside my data work.",
    about_focus1: "Dashboards & reporting for small and mid-sized businesses",
    about_focus2: "Data cleaning, modeling & DAX",
    about_focus3: "Security-aware data handling",

    skills_h2: "Skills",
    skills_cat_analysis: "Analysis & Querying",
    skills_cat_viz: "Visualization",
    skills_cat_prep: "Data Prep & Automation",
    skills_cat_ml: "Machine Learning & Data Mining",

    projects_h2: "Projects",
    proj_car_title: "Car Price Prediction (ML)",
    proj_car_stat: "Regression + KNN classification, from raw data to a tuned model",
    proj_car_desc: "End-to-end ML assignment predicting car prices: cleaned and encoded the raw data, removed price outliers with IQR, then compared a Linear Regression price predictor against a KNN classifier that sorts cars into cheap / moderate / expensive tiers, tuned with grid search and k-fold cross-validation.",
    proj_car_takeaway: "What I learned: how reframing a problem as classification instead of regression can outperform it, and why a proper train/test split and cross-validation matter more than the choice of model itself.",
    proj_fifa_title: "FIFA Player Value & Rating (ML)",
    proj_fifa_stat: "5 models compared: regression, classification & an ensemble",
    proj_fifa_desc: "A larger ML project on FIFA player data: predicted market value with Polynomial / Ridge / Lasso regression, then classified players into four performance tiers using Logistic Regression, three Naïve Bayes variants, KNN, Random Forest, SVM, and a voting ensemble — each tuned with GridSearchCV and evaluated with stratified k-fold cross-validation.",
    proj_fifa_takeaway: "What I learned: how Ridge and Lasso behave differently once you have hundreds of one-hot encoded columns, and how to read a learning curve to diagnose overfitting instead of trusting a single accuracy number.",
    proj_dm_title: "Student Performance Analysis (Data Mining)",
    proj_dm_stat: "Clustering + Fuzzy Logic + Genetic Algorithm in one system",
    proj_dm_desc: "A full data mining pipeline on 6,600+ student records: K-Medoids and Hierarchical clustering to find natural student groups, a Fuzzy Logic inference system to predict performance from attendance and study hours, and a Genetic Algorithm for feature selection — combined into one prediction system.",
    proj_dm_takeaway: "What I learned: how to combine several data mining techniques (clustering, fuzzy logic, evolutionary algorithms) into a single pipeline instead of treating each as a standalone exercise, and how a silhouette score actually guides a clustering decision.",
    proj_shiny_title: "Retail Data Analysis App (R Shiny)",
    proj_shiny_stat: "Interactive Shiny dashboard: clustering + association rules",
    proj_shiny_desc: "An interactive R Shiny app that lets a user upload their own retail transactions CSV, cleans it automatically, then runs k-means clustering (by age and spending) and Apriori association rule mining to surface market-basket patterns — all through adjustable sliders, no code required from the user.",
    proj_shiny_takeaway: "What I learned: how to package an analysis into a tool a non-technical user can actually operate, and how sensitive Apriori's results are to the support and confidence thresholds you pick.",
    proj1_title: "Superstore Dashboard (Excel)",
    proj1_stat: "Excel Superstore Performance Dashboard",
    proj1_desc: "Built an interactive Excel dashboard from the Sample Superstore dataset — pivot tables and slicers let you break down sales, profit and regional performance without touching a single formula manually.",
    proj1_takeaway: "What I learned: how far native Excel tools (PivotTables, slicers, conditional formatting) can go before a project actually needs Power BI — and how to structure raw transactional data so a pivot table can make sense of it.",
    proj2_title: "Central Region Dashboard (Power BI)",
    proj2_stat: "Interactive Power BI dashboard — Central Region",
    proj2_desc: "Focused on the Central Region slice of the Superstore data — an interactive Power BI report with drill-through pages for sales trends, category breakdown and state-level performance.",
    proj2_takeaway: "What I learned: how to model relationships between multiple tables in Power BI, and how a DAX measure's result changes depending on filter context — especially once slicers and drill-throughs are involved.",
    proj3_title: "Sales Performance Dashboard (Power BI)",
    proj3_stat: "3-page Power BI report across products, sales & customers",
    proj3_desc: "Built a multi-table Power BI dashboard from raw sales data — a 3-page report that moves from a high-level overview down to product performance, monthly trends and customer behavior.",
    proj3_takeaway: "What I learned: how to design a report that tells a story page by page instead of dumping every chart on one screen, and why a clean data model (proper relationships, no duplicated tables) matters more than any single DAX formula.",
    view_project: "View project",
    download_file: "Download file",
    view_dashboard: "View Dashboard",
    view_code: "View",
    status_completed: "Completed",
    status_inprogress: "In progress",
    status_pending: "Pending",

    certs_h2: "Certifications",
    cert1_name: "Data Fundamentals",
    cert2_name: "Intermediate SQL",
    cert3_name: "Intro to Python",
    cert4_name: "Introduction to SQL",
    cert5_name: "DEPI — Junior Data Analysis",
    cert5_duration: "2026/7 – 2026/12",
    cert6_name: "Python Programming Basics",
    view_cert: "View certificate",

    contact_h2: "Contact",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Send message",
    form_sent: "Thanks — your message has been noted. I'll get back to you soon.",
    contact_links_label: "Or find me here",
    tt_email: "Email",

    footer_text: "© 2026 Abdelrahman Akram. All rights reserved."
  },
  ar: {
    brand_name: "عبدالرحمن اكرم",

    nav_about: "نبذة",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_certifications: "الشهادات",
    nav_contact: "تواصل",

    hero_role: "محلل بيانات",
    hero_roles: ["محلل بيانات", "مطوّر Power BI", "SQL و Python", "صانع الداشبوردات"],
    hero_title: "بياناتك عارفة إيه اللي واقف قدام نمو شركتك... بس لسه ما قالتلكش.",
    hero_sub: "أنا بحوّل البيانات دي لداشبورد بيتكلم بوضوح: أرقام واضحة، وخطوة تالية واضحة، في كل مرة.",
    hero_download: "تحميل السيرة الذاتية",
    hero_preview: "معاينة السيرة الذاتية",
    stat_tools: "أدوات ومنصات",
    stat_projects: "مشاريع",

    about_h2: "نبذة عني",
    about_status: "متاح لفرص فريلانس وتدريب",
    about_p1: "طالب في تخصص علوم الحاسب والبيانات بجامعة الإسكندرية، ومهتم بمجال تحليل البيانات. بحب آخد بيانات فوضوية وأحولها لـ dashboard صاحب العمل يقدر يستخدمه فعلاً في اتخاذ قرار، مش مجرد شكل شيك.",
    about_p2: "شغلي بين التحليل والأتمتة: تنظيف وبناء نماذج البيانات، بناء تقارير Power BI، وكتابة SQL و Python وراهم. وكمان بطوّر اهتمام متزايد بالأمن السيبراني جنب شغلي في البيانات.",
    about_focus1: "Dashboards وتقارير للشركات الصغيرة والمتوسطة",
    about_focus2: "تنظيف وبناء نماذج البيانات و DAX",
    about_focus3: "التعامل مع البيانات بوعي أمني",

    skills_h2: "المهارات",
    skills_cat_analysis: "التحليل والاستعلام",
    skills_cat_viz: "التصور المرئي",
    skills_cat_prep: "تجهيز البيانات والأتمتة",
    skills_cat_ml: "تعلم الآلة وتنقيب البيانات",

    projects_h2: "المشاريع",
    proj_car_title: "التنبؤ بسعر السيارة (تعلم آلة)",
    proj_car_stat: "انحدار + تصنيف KNN، من البيانات الخام لموديل مضبوط",
    proj_car_desc: "مشروع تعلم آلة متكامل للتنبؤ بأسعار السيارات: نظّفت البيانات وشفّرتها، شلت القيم الشاذة في السعر بطريقة IQR، وبعدين قارنت بين موديل Linear Regression للتنبؤ بالسعر وموديل KNN بيصنّف العربيات لفئات (رخيصة/متوسطة/غالية)، وظبطتهم بـ grid search وk-fold cross-validation.",
    proj_car_takeaway: "ايه اللي استفدته: إزاي إعادة صياغة المشكلة كـ classification بدل regression ممكن تدي نتيجة أحسن، وإن الـ train/test split وcross-validation الصح أهم من اختيار الموديل نفسه.",
    proj_fifa_title: "تقييم لاعبي FIFA وقيمتهم (تعلم آلة)",
    proj_fifa_stat: "مقارنة 5 موديلات: انحدار، تصنيف، وensemble",
    proj_fifa_desc: "مشروع تعلم آلة أكبر على بيانات لاعبي FIFA: توقعت القيمة السوقية بـ Polynomial/Ridge/Lasso Regression، وبعدين صنّفت اللاعبين لـ 4 مستويات أداء باستخدام Logistic Regression وتلات أنواع Naïve Bayes وKNN وRandom Forest وSVM وensemble بالتصويت — كل واحد اتظبط بـ GridSearchCV واتقيّم بـ stratified k-fold cross-validation.",
    proj_fifa_takeaway: "ايه اللي استفدته: إزاي Ridge وLasso بيتصرفوا مختلف لما يكون عندك مئات الأعمدة من one-hot encoding، وإزاي تقرا الـ learning curve عشان تشخّص الـ overfitting بدل ما تعتمد على رقم accuracy واحد بس.",
    proj_dm_title: "تحليل أداء الطلاب (تنقيب بيانات)",
    proj_dm_stat: "Clustering + Fuzzy Logic + خوارزمية جينية في نظام واحد",
    proj_dm_desc: "خط إنتاج كامل لتنقيب البيانات على أكتر من 6600 سجل طالب: K-Medoids وHierarchical Clustering عشان ألاقي مجموعات طبيعية من الطلاب، ونظام Fuzzy Logic بيتوقع الأداء من نسبة الحضور وساعات المذاكرة، وخوارزمية جينية لاختيار أهم الـ features — كل ده اتجمع في نظام تنبؤ واحد.",
    proj_dm_takeaway: "ايه اللي استفدته: إزاي تجمع أكتر من تقنية تنقيب بيانات (clustering, fuzzy logic, evolutionary algorithms) في pipeline واحد بدل ما تتعامل مع كل واحدة لوحدها، وإزاي الـ silhouette score فعليًا بيوجّه قرار الـ clustering.",
    proj_shiny_title: "تطبيق تحليل بيانات تجزئة (R Shiny)",
    proj_shiny_stat: "داشبورد Shiny تفاعلي: clustering + association rules",
    proj_shiny_desc: "تطبيق R Shiny تفاعلي بيخلي المستخدم يرفع ملف مبيعاته الخاص (CSV) وينضف تلقائي، وبعدين يشغّل k-means clustering (حسب العمر والإنفاق) وApriori association rules عشان يطلع أنماط شراء — كل ده من خلال sliders قابلة للتعديل من غير ما المستخدم يكتب أي كود.",
    proj_shiny_takeaway: "ايه اللي استفدته: إزاي تحوّل تحليل كامل لأداة أي حد غير تقني يقدر يستخدمها، وإزاي نتايج Apriori حساسة جدًا لقيم الـ support والـ confidence اللي بتختارها.",
    proj1_title: "داشبورد Superstore (Excel)",
    proj1_stat: "داشبورد Excel لأداء Superstore",
    proj1_desc: "بنيت داشبورد Excel تفاعلي من بيانات Sample Superstore — Pivot Tables وslicers بتخليك تقلّب في المبيعات والأرباح والأداء حسب المنطقة من غير ما تكتب أي معادلة يدويًا.",
    proj1_takeaway: "ايه اللي استفدته: لحد فين أدوات Excel الأساسية (PivotTables, slicers, conditional formatting) ممكن توصلك قبل ما تحتاج فعلاً Power BI، وإزاي تنظّم بيانات خام عشان الـ pivot table تفهمها صح.",
    proj2_title: "داشبورد Central Region (Power BI)",
    proj2_stat: "داشبورد Power BI تفاعلي — Central Region",
    proj2_desc: "ركّزت على جزء الـ Central Region من بيانات Superstore — تقرير Power BI تفاعلي بصفحات drill-through لاتجاه المبيعات وتوزيع الفئات والأداء حسب الولاية.",
    proj2_takeaway: "ايه اللي استفدته: إزاي تبني علاقات بين أكتر من جدول جوه Power BI، وإزاي نتيجة مقياس DAX بتتغير حسب الـ filter context — خصوصًا لما يكون فيه slicers ودrill-through.",
    proj3_title: "داشبورد أداء المبيعات (Power BI)",
    proj3_stat: "تقرير Power BI من 3 صفحات للمنتجات والمبيعات والعملاء",
    proj3_desc: "بنيت داشبورد Power BI متعدد الجداول من بيانات مبيعات خام — تقرير من 3 صفحات بيبدأ بنظرة عامة وينزل لأداء المنتجات والاتجاهات الشهرية وسلوك العملاء.",
    proj3_takeaway: "ايه اللي استفدته: إزاي تصمم تقرير يحكي قصة صفحة ورا صفحة بدل ما تحط كل الشارتس في شاشة واحدة، وإن نموذج البيانات النضيف (علاقات صح، من غير جداول متكررة) أهم من أي معادلة DAX لوحدها.",
    view_project: "عرض المشروع",
    download_file: "تحميل الملف",
    view_dashboard:  "عرض الداشبورد",
    view_code: "عرض",
    status_completed: "مكتمل",
    status_inprogress: "قيد التنفيذ",
    status_pending: "قيد الانتظار",

    certs_h2: "الشهادات",
    cert1_name: "Data Fundamentals",
    cert2_name: "Intermediate SQL",
    cert3_name: "Intro to Python",
    cert4_name: "Introduction to SQL",
    cert5_name: "DEPI — Junior Data Analysis",
    cert5_duration: "2026/7 – 2026/12",
    cert6_name: "Python Programming Basics",
    view_cert: "عرض الشهادة",

    contact_h2: "تواصل",
    contact_name: "الاسم",
    contact_email: "البريد الإلكتروني",
    contact_message: "الرسالة",
    contact_send: "إرسال الرسالة",
    form_sent: "تم استلام رسالتك، هتوصلك رد قريبًا.",
    contact_links_label: "أو تقدر توصلني هنا",
    tt_email: "البريد الإلكتروني",

    footer_text: "© 2026 عبدالرحمن اكرم. جميع الحقوق محفوظة."
  }
};

const root = document.documentElement;

function applyLanguage(lang){
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    if (dict[key]) el.setAttribute("title", dict[key]);
  });
  root.setAttribute("lang", lang);
  root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  localStorage.setItem("lang", lang);
  startHeroTypewriter(lang);
}

// Hero role — cycling typewriter effect (falls back to a static label if reduced motion is on)
let heroTypewriterTimer = null;
function startHeroTypewriter(lang){
  const el = document.getElementById("heroRoleText");
  if (!el) return;
  if (heroTypewriterTimer) clearTimeout(heroTypewriterTimer);

  const roles = (translations[lang] && translations[lang].hero_roles) || [translations[lang].hero_role];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion){ el.textContent = roles[0]; return; }

  let roleIndex = 0, charIndex = 0, deleting = false;
  function tick(){
    const current = roles[roleIndex];
    if (!deleting){
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length){
        deleting = true;
        heroTypewriterTimer = setTimeout(tick, 1700);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0){
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    heroTypewriterTimer = setTimeout(tick, deleting ? 35 : 70);
  }
  tick();
}

function applyTheme(theme){
  root.setAttribute("data-theme", theme);
  document.getElementById("iconSun").style.display = theme === "dark" ? "none" : "block";
  document.getElementById("iconMoon").style.display = theme === "dark" ? "block" : "none";
  localStorage.setItem("theme", theme);
}

// Init from saved prefs (fallback to defaults)
applyLanguage(localStorage.getItem("lang") || "en");
applyTheme(localStorage.getItem("theme") || "dark");

// Count-up animation for the hero stat numbers
(function animateStats(){
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll(".stat-num[data-count]").forEach(el => {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion){
      el.textContent = target + suffix;
      return;
    }
    const duration = 1200;
    let start = null;
    function step(timestamp){
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  });
})();

document.getElementById("langToggle").addEventListener("click", () => {
  const next = root.getAttribute("lang") === "ar" ? "en" : "ar";
  applyLanguage(next);
});

document.getElementById("themeToggle").addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
});

document.getElementById("navToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => document.getElementById("mainNav").classList.remove("open"));
});

// Contact form — replace this with a real endpoint (e.g. Formspree, EmailJS) when ready
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const form = e.target;
  const status = document.getElementById("formStatus");
  const lang = root.getAttribute("lang");
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.textContent = translations[lang].form_sent;
      form.reset();
    } else {
      status.textContent = "Error sending message.";
    }
  } catch (error) {
    status.textContent = "Network error.";
  }
});

// Project image carousels — arrows cycle through each project's photo set.
// Falls back to the decorative SVG behind if a photo hasn't been added yet.
document.querySelectorAll(".project-visual[data-images]").forEach(visual => {
  const images = JSON.parse(visual.getAttribute("data-images"));
  const img = visual.querySelector(".project-img");
  const fallback = visual.querySelector(".project-visual-fallback");
  let index = 0;

  function show(i){
    index = (i + images.length) % images.length;
    img.style.display = "block";
    img.src = images[index];
  }

  img.addEventListener("error", () => { img.style.display = "none"; fallback.style.display = ""; });
  img.addEventListener("load", () => { img.style.display = "block"; fallback.style.display = "none"; });

  visual.querySelector(".prev").addEventListener("click", () => show(index - 1));
  visual.querySelector(".next").addEventListener("click", () => show(index + 1));

  show(0);
});

// About photo — entrance animation when it scrolls into view
(function aboutPhotoEntrance(){
  const el = document.getElementById("aboutPhotoAnim");
  if (!el) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) { el.classList.add("in-view"); return; }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        el.classList.add("in-view");
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  observer.observe(el);
})();

// Photo tilt — mouse-following 3D tilt with a shadow that shifts with it
// (falls back to the static CSS tilt otherwise). Shared by the About photo and the Hero photo.
function initPhotoTilt(wrapSelector, defaultTransform){
  const wrap = document.querySelector(wrapSelector);
  if (!wrap) return;
  const photo = wrap.querySelector(".about-photo, .hero-photo");
  if (!photo) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = window.matchMedia("(hover: hover)").matches;
  if (reduceMotion || !canHover) return;

  const maxTilt = 14;
  const defaultShadow = "18px 22px 40px rgba(0,0,0,.35), 0 0 0 1px var(--border)";

  wrap.addEventListener("mousemove", (e) => {
    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const px = x / (rect.width / 2);
    const py = y / (rect.height / 2);
    const rotateY = px * maxTilt;
    const rotateX = -py * maxTilt;
    photo.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

    // Shadow falls away from the tilt direction, like a light source overhead
    const shadowX = -px * 26;
    const shadowY = 18 - py * 10;
    photo.style.boxShadow = `${shadowX}px ${shadowY}px 40px rgba(0,0,0,.35), 0 0 0 1px var(--border)`;
  });

  wrap.addEventListener("mouseleave", () => {
    photo.style.transform = defaultTransform;
    photo.style.boxShadow = defaultShadow;
  });
}
initPhotoTilt(".about-photo-wrap", "rotateY(-10deg) rotateX(5deg)");
initPhotoTilt(".hero-photo-wrap", "rotateY(8deg) rotateX(4deg)");
