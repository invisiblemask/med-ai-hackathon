"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { authPost, post } from "../../../backend_services/api_services";
import React from "react";

type authContextType = {
  user: { [key: string]: any } | null;
  login: (data: { email: string; password: string }) => any;
  updateName: (data: { name: string;}) => any;
  walletLogin: (data: { address: string;}) => any;
  register: (data: { email: string; password: string, name: string }) => any;
  logout: () => void;
  isLoading: boolean | undefined;
};

const authContextDefaultValues: authContextType = {
  user: null,
  login: () => { },
  updateName: () => { },
  walletLogin: () => { },
  register: () => { },
  logout: () => { },
  isLoading: false,
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};


export function AuthProvider({ children }: Props) {
  const router = useRouter();
  const [user, setUser] = useState<{ [key: string]: any } | null>(null);
  const [isLoading, setisLoading] = useState<boolean | undefined>(false);

  // useEffect(() => {
  //   const checkIfUserExists = () => {
  //     const res = localStorage.getItem("user");
  //     console.log(res)

  //     if (res !== null && res.length > 0) {

  //       const val = JSON.parse(res)
  //       setUser(val.user)
  //     } else {
  //       setUser(null);
  //     }

  //   };

  //   return checkIfUserExists();
  // }, []);

  const register = async (data: { email: string; password: string, name: string }) => {
    setisLoading(true);
    try {
      const res: any = await post({
        url: "auth/user/register",
        req: { ...data },
      });
      saveLocally(res.data)
      return {
        message: res.data.message,
        status: res.status,
      };

    } catch (error: any) {
      return {
        message: error.response?.data.message,
        res: null,
        status: error.response?.status,
      };
    } finally {
      setisLoading(false)
    }
  };

  const login = async (data: { email: string; password: string }) => {
    setisLoading(true);
    try {
      const res: any = await post({
        url: "auth/user/login",
        req: { ...data },
      });
      saveLocally(res.data)
      return {
        message: res.data.message,
        status: res.status,
      };

    } catch (error: any) {
      console.log(error)
      return {
        message: error.response?.data.message,
        res: null,
        status: error.response?.status,
      };
    } finally {
      setisLoading(false)
    }
  };

  const walletLogin = async (data: { address: string;}) => {
    // setisLoading(true);
    try {
      const res: any = await post({
        url: "auth/user/wallet-login",
        req: { ...data },
      });
      saveLocally(res.data)
      return {
        user: res.data.user,
        message: res.data.message,
        status: res.status,
      };

      
    } catch (error: any) {
      return {
        message: error.response?.data.message,
        res: null,
        status: error.response?.status,
      };
    } finally {
      // setisLoading(false)
    }
  };

  const updateName = async (data: { name: string;}) => {
    setisLoading(true);
    try {
      const res: any = await authPost({
        url: "auth/user/wallet-update",
        req: { ...data },
      });
      saveLocally(res.data)
      return {
        message: res.data.message,
        status: res.status,
      };
      
    } catch (error: any) {
      return {
        message: error.response?.data.message,
        res: null,
        status: error.response?.status,
      };
    } finally {
      setisLoading(false)
    }
  };

  const saveLocally = (data: any) => {
    if(data.user){
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
    }
      localStorage.setItem("token", JSON.stringify(data.token));
      
  }

  const logout = () => {
    router.push("/");
    setUser(null);
    localStorage.clear()
  };

  const value = {
    user,
    login,
    updateName,
    walletLogin,
    register,
    logout,
    isLoading,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
