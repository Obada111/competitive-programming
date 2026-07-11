import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, remember: boolean) => boolean;
  logout: () => void;
  isLoading: boolean;
}

const AUTH_KEY = "hebron_user";

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_KEY) || sessionStorage.getItem(AUTH_KEY);
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch { /* ignore */ }
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, _password: string, remember: boolean): boolean => {
    // Frontend-only: accept any non-empty credentials
    if (!email || !_password) return false;
    const userData: User = { email };
    setUser(userData);
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem(AUTH_KEY, JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_KEY);
    sessionStorage.removeItem(AUTH_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
