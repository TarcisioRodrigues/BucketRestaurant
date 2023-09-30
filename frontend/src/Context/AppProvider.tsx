import { api } from "@/infra/api/api";
import { AppContextData } from "@/interfaces/IAppContextData";
import { IProps } from "@/interfaces/IProps";
import { useRouter } from "next/navigation";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [cartItems, setCartItems] = useState<IProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user: any) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

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
        const userData = response.data;
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser(true);
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

      if (createUserResponse.status === 201) {
        return null; // Sucesso, retorna null
      } else {
        return "Erro ao criar a conta";
      }
    } catch (error) {
      return "Requisição 500";
    }
  };

  const signout = () => {
    setUser(false);
    localStorage.removeItem("user_token");
    navigate("/");
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
    user,
    setUser(cartItems) {},
    signed: !!user,
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
