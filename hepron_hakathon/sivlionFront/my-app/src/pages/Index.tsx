import { Link } from "react-router-dom";
import { Droplets, Zap, Route, Trash2, ArrowRight, ArrowLeft } from "lucide-react";
import { useApp } from "@/context/AppContext";

const Index = () => {
  const { t, lang } = useApp();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  const categories = [
    { icon: Droplets, label: t("cat.water"), desc: t("cat.water.desc") },
    { icon: Zap, label: t("cat.electricity"), desc: t("cat.electricity.desc") },
    { icon: Route, label: t("cat.roads"), desc: t("cat.roads.desc") },
    { icon: Trash2, label: t("cat.waste"), desc: t("cat.waste.desc") },
  ];

  const steps = [
    { step: "1", title: t("how.1.title"), desc: t("how.1.desc") },
    { step: "2", title: t("how.2.title"), desc: t("how.2.desc") },
    { step: "3", title: t("how.3.title"), desc: t("how.3.desc") },
  ];

  return (
    <div>
      <section className="py-16 sm:py-24 text-center px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("hero.title1")} <span className="text-primary">{t("hero.title2")}</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
            {t("hero.desc")}
          </p>
          <Link
            to="/submit"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("hero.cta")}
            <Arrow className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-t bg-muted/30 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-xl font-semibold text-foreground">
            {t("categories.title")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.label} className="rounded-xl border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground">{cat.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-xl font-semibold text-foreground">{t("how.title")}</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {s.step}
                </div>
                <h3 className="font-medium text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
