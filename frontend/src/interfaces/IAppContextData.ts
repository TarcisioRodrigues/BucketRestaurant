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
}
