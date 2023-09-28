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
  const [user, setUser] = useState("");
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

  const signin = async (email: string, password: string) => {
    try {
      // Faz uma chamada à API para autenticar o usuário usando o Axios
      const response = await api.post("auth", {
        email,
        password,
      });

      if (response.status === 200) {
        const userData = response.data;
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser(userData);
      } else {
        throw new Error("E-mail ou senha incorretos");
      }
    } catch (error) {
      throw new Error("Erro ao autenticar usuário");
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      // Verifica se o usuário já existe na API
      const response = await api.get(`/users?email=${email}`);

      if (response.status === 200 && response.data.length > 0) {
        throw new Error("Já existe uma conta com este e-mail");
      }

      // Se o usuário não existe, cria uma nova conta na API
      const createUserResponse = await api.post("/users", {
        email,
        password,
      });

      if (createUserResponse.status === 201) {
        // Usuário registrado com sucesso
      } else {
        throw new Error("Erro ao criar a conta");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };
  const navigate = (path: string) => {
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
