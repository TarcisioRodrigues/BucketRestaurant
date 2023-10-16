import { useAppContext } from "@/Context";
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePoweroff, AiOutlineShoppingCart } from "react-icons/ai";

export const Header = () => {
  const { signout, cartItems } = useAppContext();
  const signoutBack = () => {
    signout();
    window.location.reload();
  };
  const user = localStorage.getItem("user_name");
  const isAuthenticated = !!user;
  const allItems = cartItems.length;
  return (
    <div className={`w-full flex items-center justify-between p-3 `}>
      <div>
        <nav className=" ">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="mr-[6rem]"
          />
        </nav>
      </div>

      <div className="gap-3 flex items-center space-x-4">
        <Link href="/" className="text-red-600">
          Home
        </Link>

        <Link href="/make-request" className="text-red-600">
          Menu
        </Link>
        {!isAuthenticated && (
          <Link href="/login" className="text-red-600">
            Entrar
          </Link>
        )}
        <Link
          href="/cart-buy"
          className="relative flex items-center justify-center p-2  "
        >
          <AiOutlineShoppingCart size={25} className="text-red-600" />
          <span className="bg-red-600 w-[16px] h-[16px] absolute top-0 right-0 text-white flex items-center justify-center rounded-full">
            {allItems}
          </span>
        </Link>
        {user}
        {isAuthenticated && (
          <button
            onClick={signoutBack}
            className="w-[60px] h-10 px-6pb-[11px] bg-red-600 rounded-[25px] justify-center items-center inline-flex text-white"
          >
            <AiOutlinePoweroff size={25} />
          </button>
        )}
      </div>
    </div>
  );
};
