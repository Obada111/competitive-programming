import { Link, useLocation, useNavigate } from "react-router-dom";
import { Building2, Menu, X, Moon, Sun, Languages, LogIn, LogOut } from "lucide-react";
import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, lang, theme, toggleLang, toggleTheme } = useApp();
  const { user, logout } = useAuth();

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/submit", label: t("nav.submit") },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Building2 className="h-6 w-6" />
          <span>{t("nav.brand")}</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}

          <div className="mx-2 h-6 w-px bg-border" />

          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            title={lang === "en" ? "التبديل إلى العربية" : "Switch to English"}
          >
            <Languages className="h-4 w-4" />
            {lang === "en" ? "العربية" : "English"}
          </button>

          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            title={theme === "light" ? "Dark mode" : "Light mode"}
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>

          <div className="mx-1 h-6 w-px bg-border" />

          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground truncate max-w-[140px]">{user.email}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                {t("nav.logout")}
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <LogIn className="h-4 w-4" />
              {t("nav.login")}
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-1">
          <button onClick={toggleLang} className="rounded-lg p-2 text-muted-foreground hover:bg-accent">
            <Languages className="h-5 w-5" />
          </button>
          <button onClick={toggleTheme} className="rounded-lg p-2 text-muted-foreground hover:bg-accent">
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <button className="rounded-lg p-2 text-muted-foreground hover:bg-accent" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-card px-4 pb-4 pt-2 space-y-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="my-2 h-px bg-border" />
          {user ? (
            <>
              <div className="px-4 py-2 text-sm text-muted-foreground truncate">{user.email}</div>
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                {t("nav.logout")}
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent"
            >
              <LogIn className="h-4 w-4" />
              {t("nav.login")}
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
