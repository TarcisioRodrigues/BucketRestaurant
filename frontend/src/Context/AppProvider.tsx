"use client";
import { AppContextData } from "@/interfaces/IAppContextData";
import { IProps } from "@/interfaces/IProps";
import { ReactNode, createContext, useContext, useState } from "react";

const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [cartItems, setCartItems] = useState<IProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hide, setHide] = useState<boolean>(false);
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

  const contextValue: AppContextData = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
