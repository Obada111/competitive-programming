import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "ar";
type Theme = "light" | "dark";

interface AppContextType {
  lang: Lang;
  theme: Theme;
  toggleLang: () => void;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.submit": { en: "Submit Complaint", ar: "تقديم شكوى" },
  "nav.brand": { en: "Hebron City", ar: "مدينة الخليل" },
  "hero.title1": { en: "Help Improve", ar: "ساهم في تحسين" },
  "hero.title2": { en: "Hebron", ar: "الخليل" },
  "hero.desc": {
    en: "Your voice matters. Report city issues and help local authorities make better, data-driven decisions for our community.",
    ar: "صوتك مهم. أبلغ عن مشاكل المدينة وساعد السلطات المحلية في اتخاذ قرارات أفضل مبنية على البيانات لمجتمعنا.",
  },
  "hero.cta": { en: "Submit a Complaint", ar: "تقديم شكوى" },
  "categories.title": { en: "What can you report?", ar: "ما الذي يمكنك الإبلاغ عنه؟" },
  "cat.water": { en: "Water", ar: "المياه" },
  "cat.water.desc": { en: "Report water supply issues", ar: "الإبلاغ عن مشاكل المياه" },
  "cat.electricity": { en: "Electricity", ar: "الكهرباء" },
  "cat.electricity.desc": { en: "Power outages & problems", ar: "انقطاع وأعطال الكهرباء" },
  "cat.roads": { en: "Roads", ar: "الطرق" },
  "cat.roads.desc": { en: "Potholes & road damage", ar: "الحفر وأضرار الطرق" },
  "cat.waste": { en: "Waste", ar: "النفايات" },
  "cat.waste.desc": { en: "Waste collection issues", ar: "مشاكل جمع النفايات" },
  "how.title": { en: "How it works", ar: "كيف يعمل" },
  "how.1.title": { en: "Report", ar: "أبلغ" },
  "how.1.desc": { en: "Describe the issue you've encountered", ar: "صف المشكلة التي واجهتها" },
  "how.2.title": { en: "Review", ar: "مراجعة" },
  "how.2.desc": { en: "City authorities review your complaint", ar: "تراجع سلطات المدينة شكواك" },
  "how.3.title": { en: "Resolve", ar: "حل" },
  "how.3.desc": { en: "Action is taken to fix the problem", ar: "يتم اتخاذ إجراء لحل المشكلة" },
  "form.title": { en: "Submit a Complaint", ar: "تقديم شكوى" },
  "form.subtitle": { en: "Help us identify and fix city issues. Fill out the form below.", ar: "ساعدنا في تحديد وإصلاح مشاكل المدينة. املأ النموذج أدناه." },
  "form.name": { en: "Full Name", ar: "الاسم الكامل" },
  "form.optional": { en: "(optional)", ar: "(اختياري)" },
  "form.name.placeholder": { en: "Your name", ar: "اسمك" },
  "form.phone": { en: "Phone Number", ar: "رقم الهاتف" },
  "form.phone.placeholder": { en: "+970 XXX XXXX", ar: "+970 XXX XXXX" },
  "form.type": { en: "Complaint Type", ar: "نوع الشكوى" },
  "form.type.water": { en: "Water", ar: "المياه" },
  "form.type.electricity": { en: "Electricity", ar: "الكهرباء" },
  "form.type.roads": { en: "Roads", ar: "الطرق" },
  "form.type.waste": { en: "Waste", ar: "النفايات" },
  "form.type.other": { en: "Other", ar: "أخرى" },
  "form.description": { en: "Description", ar: "الوصف" },
  "form.description.placeholder": { en: "Describe the issue in detail...", ar: "صف المشكلة بالتفصيل..." },
  "form.location": { en: "Location", ar: "الموقع" },
  "form.location.placeholder": { en: "e.g. Ein Sara, Old City...", ar: "مثال: عين سارة, البلدة القديمة..." },
  "form.submit": { en: "Submit Complaint", ar: "إرسال الشكوى" },
  "form.error.type": { en: "Please select a complaint type", ar: "يرجى اختيار نوع الشكوى" },
  "form.error.description": { en: "Description is required", ar: "الوصف مطلوب" },
  "form.error.description.short": { en: "Please provide more details (at least 10 characters)", ar: "يرجى تقديم مزيد من التفاصيل (10 أحرف على الأقل)" },
  "form.success.title": { en: "Thank You!", ar: "شكراً لك!" },
  "form.success.desc": {
    en: "Your complaint has been submitted successfully. We appreciate your feedback in helping improve Hebron's city services.",
    ar: "تم تقديم شكواك بنجاح. نقدر ملاحظاتك في المساعدة على تحسين خدمات مدينة الخليل.",
  },
  "form.success.another": { en: "Submit Another", ar: "تقديم شكوى أخرى" },
  "toast.success": { en: "Complaint submitted successfully!", ar: "تم تقديم الشكوى بنجاح!" },
  "nav.login": { en: "Login", ar: "تسجيل الدخول" },
  "nav.logout": { en: "Logout", ar: "تسجيل الخروج" },
  "login.title": { en: "Welcome Back", ar: "مرحباً بعودتك" },
  "login.subtitle": { en: "Sign in to your account", ar: "سجّل الدخول إلى حسابك" },
  "login.email": { en: "Email", ar: "البريد الإلكتروني" },
  "login.email.placeholder": { en: "you@example.com", ar: "you@example.com" },
  "login.password": { en: "Password", ar: "كلمة المرور" },
  "login.password.placeholder": { en: "••••••••", ar: "••••••••" },
  "login.remember": { en: "Remember me", ar: "تذكرني" },
  "login.submit": { en: "Sign In", ar: "تسجيل الدخول" },
  "login.error.email": { en: "Email is required", ar: "البريد الإلكتروني مطلوب" },
  "login.error.email.invalid": { en: "Invalid email address", ar: "بريد إلكتروني غير صالح" },
  "login.error.password": { en: "Password is required", ar: "كلمة المرور مطلوبة" },
  "login.toast.success": { en: "Logged in successfully!", ar: "تم تسجيل الدخول بنجاح!" },
};

const AppContext = createContext<AppContextType | null>(null);

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "en");
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem("theme") as Theme) || "light");

  useEffect(() => {
    const root = document.documentElement;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    root.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <AppContext.Provider value={{ lang, theme, toggleLang, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
};
