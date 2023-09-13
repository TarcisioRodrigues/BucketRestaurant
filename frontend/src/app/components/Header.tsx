"use strict";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
export const Header = () => {
  return (
    <div className="w-full flex items-center justify-between p-3">
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
        <Link rel="stylesheet" href="" className="text-red-600">
          Home
        </Link>
        <Link rel="stylesheet" href="" className="text-red-600">
          Menu
        </Link>
        <Link rel="stylesheet" href="" className="text-red-600">
          Reservas
        </Link>
        <AiOutlineShoppingCart size={20} className="text-red-600" />
        <button className="w-[250px] h-10 px-6 pt-2.5 pb-[11px] bg-red-600 rounded-[25px] justify-center items-center  inline-flex text-white">
          FAZER PEDIDO
        </button>
      </div>
    </div>
  );
};
