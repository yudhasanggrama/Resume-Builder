"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { IAuthContextType } from "../../types/types";
import { getCurrentUser } from "../../actions/auth-action";
const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isUser, setIsUser] = useState<string>("");

  const getUser = async () => {
    try {
      const user = await getCurrentUser();

      if (user && user.user_metadata && user.user_metadata.display_name) {
        setIsUser(user.user_metadata.display_name);
      } else {
        setIsUser("");
      }
      console.log("getUser >>>", user);
    } catch (error) {
      console.log("getUser error >>>", error);
      setIsUser("");
    }
  };

  const refreshAuth = async () => {
    try {
      const user = await getCurrentUser();
      setIsLogin(!!user);
    } catch (err) {
      console.log("getCurrentUser error >>>", err);
      setIsLogin(false);
    }
  };

  useEffect(() => {
    refreshAuth();
    getUser();
  }, [getUser, refreshAuth]);

  return (
    <AuthContext.Provider
      value={{ isLogin, setIsLogin, refreshAuth, isUser, setIsUser, getUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
