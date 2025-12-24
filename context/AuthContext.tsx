
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserProfile } from '../types';
import { loginUser, registerUser, deleteUserAccount } from '../services/auth';

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  login: (identifier: string, pass: string) => Promise<void>;
  register: (profile: Partial<UserProfile>, pass: string) => Promise<void>;
  logout: () => void;
  deleteAccount: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('farm_user_session');
    if (savedUser) {
        setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (identifier: string, pass: string) => {
    setLoading(true);
    try {
        const userProfile = await loginUser(identifier, pass);
        setUser(userProfile);
        localStorage.setItem('farm_user_session', JSON.stringify(userProfile));
    } catch (e) {
        throw e;
    } finally {
        setLoading(false);
    }
  };

  const register = async (profile: Partial<UserProfile>, pass: string) => {
    setLoading(true);
    try {
        const userProfile = await registerUser(profile, pass);
        setUser(userProfile);
        localStorage.setItem('farm_user_session', JSON.stringify(userProfile));
    } catch (e) {
        throw e;
    } finally {
        setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('farm_user_session');
  };

  const deleteAccount = async () => {
    if (!user) return;
    setLoading(true);
    try {
        await deleteUserAccount(user.id);
        logout();
        // Clear all farm data too
        localStorage.removeItem('farm_animals');
        localStorage.removeItem('farm_breeding');
        localStorage.removeItem('farm_health');
        localStorage.removeItem('farm_reminders');
    } catch (e) {
        throw e;
    } finally {
        setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
