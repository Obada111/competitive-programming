import { useState } from "react";
import { Droplets, Zap, Route, Trash2, HelpCircle, CheckCircle2, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useApp } from "@/context/AppContext";

const ComplaintForm = () => {
  const { t } = useApp();

  const complaintTypes = [
    { value: "water", label: t("form.type.water"), icon: Droplets },
    { value: "electricity", label: t("form.type.electricity"), icon: Zap },
    { value: "roads", label: t("form.type.roads"), icon: Route },
    { value: "waste", label: t("form.type.waste"), icon: Trash2 },
    { value: "other", label: t("form.type.other"), icon: HelpCircle },
  ];

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", type: "", description: "", location: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.type) e.type = t("form.error.type");
    if (!form.description.trim()) e.description = t("form.error.description");
    else if (form.description.trim().length < 10) e.description = t("form.error.description.short");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    toast.success(t("toast.success"));
  };

  const reset = () => {
    setForm({ name: "", phone: "", type: "", description: "", location: "" });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg rounded-xl border bg-card p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h2 className="mb-2 text-xl font-semibold text-foreground">{t("form.success.title")}</h2>
        <p className="mb-6 text-muted-foreground">{t("form.success.desc")}</p>
        <button
          onClick={reset}
          className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {t("form.success.another")}
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition";

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-5 rounded-xl border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          {t("form.name")} <span className="text-muted-foreground">{t("form.optional")}</span>
        </label>
        <input className={inputClass} placeholder={t("form.name.placeholder")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          {t("form.phone")} <span className="text-muted-foreground">{t("form.optional")}</span>
        </label>
        <input className={inputClass} placeholder={t("form.phone.placeholder")} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          {t("form.type")} <span className="text-destructive">*</span>
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {complaintTypes.map((ct) => {
            const Icon = ct.icon;
            const selected = form.type === ct.value;
            return (
              <button
                type="button"
                key={ct.value}
                onClick={() => { setForm({ ...form, type: ct.value }); if (errors.type) setErrors({ ...errors, type: "" }); }}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                  selected ? "border-primary bg-accent text-primary" : "border-border text-muted-foreground hover:bg-accent/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {ct.label}
              </button>
            );
          })}
        </div>
        {errors.type && <p className="mt-1 text-xs text-destructive">{errors.type}</p>}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          {t("form.description")} <span className="text-destructive">*</span>
        </label>
        <textarea
          className={`${inputClass} min-h-[100px] resize-y`}
          placeholder={t("form.description.placeholder")}
          value={form.description}
          onChange={(e) => { setForm({ ...form, description: e.target.value }); if (errors.description) setErrors({ ...errors, description: "" }); }}
        />
        {errors.description && <p className="mt-1 text-xs text-destructive">{errors.description}</p>}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          {t("form.location")} <span className="text-muted-foreground">{t("form.optional")}</span>
        </label>
        <div className="relative">
          <MapPin className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input className={`${inputClass} ps-10`} placeholder={t("form.location.placeholder")} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
        </div>
      </div>

      <button type="submit" className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
        {t("form.submit")}
      </button>
    </form>
  );
};

export default ComplaintForm;
