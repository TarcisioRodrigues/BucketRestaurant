import { useAppContext } from "@/Context";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlinePoweroff,
  AiOutlineSearch,
} from "react-icons/ai";

export const Header = () => {
  const { signout } = useAppContext();
  const signoutBack = () => {
    signout();
  };
  const user = localStorage.getItem("user_name");

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
        <Link
          href="/cart-buy"
          className="relative flex items-center justify-center p-2  "
        >
          <AiOutlineShoppingCart size={25} className="text-red-600" />
          <span className="bg-red-600 w-[16px] h-[16px] absolute top-0 right-0 text-white flex items-center justify-center rounded-full">
            1
          </span>
        </Link>
        {user}
        <button
          onClick={signoutBack}
          className="w-[60px] h-10 px-6pb-[11px] bg-red-600 rounded-[25px] justify-center items-center inline-flex text-white"
        >
          <AiOutlinePoweroff size={25} />
        </button>
      </div>
    </div>
  );
};
