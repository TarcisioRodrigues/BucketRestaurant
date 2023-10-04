import { useAppContext } from "@/Context";
import { IProps } from "@/interfaces/IProps";
import formatCurrency from "@/utils/formatCurrency";
import Image from "next/image";
import { useState } from "react";

export const SecondaryItemBanner = (data: IProps) => {
  const { cartItems, setCartItems } = useAppContext();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const handleAddToCart = () => {
    setCartItems([...cartItems, data]);
    setIsAddedToCart((prevState) => !prevState);
  };
  return (
    <div className="w-full md:w-[80.19rem] h-[auto] bg-stone-50 flex flex-col md:flex-row items-center justify-center mb-3">
      <div className="md:w-[50%] flex flex-col items-center p-4">
        <Image src={data.image} alt="lanche" width={509} height={317} />
        <div className="w-[258px] h-[38px] text-center text-green-600 text-3xl font-semibold font-['Fira Sans'] leading-loose">
          {formatCurrency(data.price, "BRL")}
        </div>
      </div>
      <div className="p-4 w-full md:w-[50%] flex flex-col justify-center items-center">
        <p className="w-full md:w-[600px] h-[33px] text-center text-black text-3xl font-medium font-['Fira Sans'] leading-[25px]">
          {data.name}
        </p>
        <p className="w-full md:w-[650px] h-[auto] text-center text-zinc-800 text-3xl font-normal font-['Fira Sans'] leading-[30px] mt-5">
          {data.description}
        </p>
        <button
          onClick={handleAddToCart}
          className={`w-full md:w-[401px] h-10 rounded-[25px] flex justify-center items-center mt-4
          ${isAddedToCart ? "bg-gray-400" : "bg-red-600"}`}
        >
          <div className="text-center text-white text-base font-medium font-['Fira Sans'] uppercase">
            {isAddedToCart ? "ADICIONADO!" : "ADICIONAR AO CARRINHO"}
          </div>
        </button>
      </div>
    </div>
  );
};
