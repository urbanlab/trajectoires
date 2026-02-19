import { loginUser } from '@Domains/users/api';
import { UserData } from '@Domains/users/type';

import { ReactNode, createContext, useEffect, useState } from 'react';

type AuthContextType = {
  user: UserData | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) {
      setUser(JSON.parse(saved));
    }
    setIsLoading(false);
  }, []);

  async function login(email: string, password: string): Promise<boolean> {
    try {
      console.log('on est là ?')
      const found = await loginUser(email, password);
      setUser(found);
      localStorage.setItem('user', JSON.stringify(found));
      return true;
    } catch {
      return false;
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
