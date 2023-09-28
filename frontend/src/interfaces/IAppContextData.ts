import { IProps } from "./IProps";

export interface AppContextData {
  products: IProps[];
  setProducts: (products: any[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  cartItems: any[];
  setCartItems: (cartItems: IProps[]) => void;
  isCartVisible: boolean;
  setIsCartVisible: (isVisible: boolean) => void;
  signin: (email: string, password: string) => string | void;
  signup: (email: string, password: string) => string | void;
  navigate: (path: string) => string | void;
  signout: () => void;
}
