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
      const response = await api.post("auth", {
        email,
        password,
      });

      if (response.status === 200) {
        const userData = response.data;
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser(userData);
        return null; // Sucesso, retorna null
      } else {
        return "E-mail ou senha incorretos"; // Erro, retorna a mensagem de erro
      }
    } catch (error) {
      return "Erro ao autenticar usuário"; // Erro, retorna a mensagem de erro
    }
  };

  const signup = async (
    email: string,
    password: string
  ): Promise<string | null> => {
    try {
      const response = await api.get(`/users?email=${email}`);

      if (response.status === 200 && response.data.length > 0) {
        return "Já existe uma conta com este e-mail"; // Erro, retorna a mensagem de erro
      }

      // Se o usuário não existe, cria uma nova conta na API
      const createUserResponse = await api.post("/users", {
        email,
        password,
      });

      if (createUserResponse.status === 201) {
        return null; // Sucesso, retorna null
      } else {
        return "Erro ao criar a conta"; // Erro, retorna a mensagem de erro
      }
    } catch (error) {
      return "Requisição 500"; // Erro, retorna a mensagem de erro
    }
  };

  const signout = () => {
    setUser(false);
    localStorage.removeItem("user_token");
  };
  const navigate = async (path: string) => {
    const router = useRouter();
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
