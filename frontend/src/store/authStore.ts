import { create } from "zustand";

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  mobile: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;

  login: (user: User) => void;
  logout: () => void;
}

const getStoredUser = (): User | null => {
  if (typeof window === "undefined") return null;

  const user = localStorage.getItem("viralgen-user");

  return user ? JSON.parse(user) : null;
};

const storedUser = getStoredUser();

export const useAuthStore = create<AuthState>((set) => ({
  user: storedUser,

  isLoggedIn: !!storedUser,

  login: (user) => {
    localStorage.setItem("viralgen-user", JSON.stringify(user));

    set({
      user,
      isLoggedIn: true,
    });
  },

  logout: () => {
    localStorage.removeItem("viralgen-user");

    set({
      user: null,
      isLoggedIn: false,
    });
  },
}));