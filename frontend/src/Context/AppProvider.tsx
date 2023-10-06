import { api } from "@/infra/api/api";
import { AppContextData } from "@/interfaces/IAppContextData";
import { IProps } from "@/interfaces/IProps";
import { useRouter } from "next/navigation";

import { ReactNode, createContext, useContext, useState } from "react";

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextData>({} as AppContextData);
interface Idata {
  userData: string | null;
}
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [cartItems, setCartItems] = useState<IProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

  const signin = async (
    email: string,
    password: string
  ): Promise<string | null> => {
    try {
      const response = await api.post("/auth", {
        email,
        password,
      });
      console.log(response);

      if (response.status === 200) {
        const userData = response.data.token;
        const user = response.data.user;

        localStorage.setItem("user_token", userData);
        localStorage.setItem("user_name", user.name);
        localStorage.setItem("user_id", user.id);
        return null;
      } else {
        return "E-mail ou senha incorretos";
      }
    } catch (error) {
      return "Erro ao autenticar usuário";
    }
  };

  const signup = async (
    name: string,
    email: string,
    password: string
  ): Promise<string | null> => {
    try {
      const createUserResponse = await api.post("/users", {
        name,
        email,
        password,
      });
      console.log("usuario criado!", createUserResponse);
      if (createUserResponse.status === 201) {
        alert("Usuario Criado!");
        return null;
      } else {
        return "Erro ao criar a conta";
      }
    } catch (error) {
      return "Requisição 500";
    }
  };

  const signout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_token");

    navigate("/login");
  };
  const router = useRouter();
  const navigate = async (path: string): Promise<void> => {
    router.push(path);
  };

  const contextValue: AppContextData = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    signin,
    signup,
    signout,
    navigate,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = (): AppContextData => useContext(AppContext);
