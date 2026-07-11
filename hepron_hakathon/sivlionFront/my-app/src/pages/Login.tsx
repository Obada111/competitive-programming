import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import { toast } from "sonner";
import { useApp } from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const { t } = useApp();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!email.trim()) e.email = t("login.error.email");
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = t("login.error.email.invalid");
    if (!password) e.password = t("login.error.password");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const success = login(email, password, remember);
    if (success) {
      toast.success(t("login.toast.success"));
      navigate("/");
    }
  };

  const inputClass =
    "w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition";

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5 rounded-xl border bg-card p-6 shadow-sm sm:p-8">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
            <LogIn className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-xl font-bold text-foreground">{t("login.title")}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{t("login.subtitle")}</p>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">{t("login.email")}</label>
          <input
            type="email"
            className={inputClass}
            placeholder={t("login.email.placeholder")}
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors({ ...errors, email: "" }); }}
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">{t("login.password")}</label>
          <input
            type="password"
            className={inputClass}
            placeholder={t("login.password.placeholder")}
            value={password}
            onChange={(e) => { setPassword(e.target.value); if (errors.password) setErrors({ ...errors, password: "" }); }}
          />
          {errors.password && <p className="mt-1 text-xs text-destructive">{errors.password}</p>}
        </div>

        <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-4 w-4 rounded border-border text-primary focus:ring-ring"
          />
          {t("login.remember")}
        </label>

        <button type="submit" className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          {t("login.submit")}
        </button>
      </form>
    </div>
  );
};

export default Login;
