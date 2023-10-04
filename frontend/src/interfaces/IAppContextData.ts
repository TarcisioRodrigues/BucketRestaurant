import { IProps } from "./IProps";
export interface Idata {
  userData?: string | null;
}
export interface AppContextData {
  products: IProps[];
  setProducts: (products: any[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  cartItems: any[];
  setCartItems: (cartItems: IProps[]) => void;
  isCartVisible: boolean;
  setIsCartVisible: (isVisible: boolean) => void;
  signin: (email: string, password: string) => Promise<string | null>;
  signup: (
    name: string,
    email: string,
    password: string
  ) => Promise<string | null>;
  navigate: (path: string) => Promise<void>;
  signout: () => void;
}
