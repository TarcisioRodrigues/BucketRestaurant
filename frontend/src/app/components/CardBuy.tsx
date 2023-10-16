"use client";
import { useAppContext } from "@/Context";
import formatCurrency from "@/utils/formatCurrency";
import React, { useState } from "react";
import {
  AiOutlineCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
interface IProps {
  id: string;
  name: string;
  price: number;
}
export const CardBuy = (data: IProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [unitPrice] = useState<number>(data.price);
  const { cartItems, setCartItems } = useAppContext();
  const deleteCard = (id: string) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === data.id) {
        return {
          ...item,
          price: unitPrice * (quantity + 1),
        };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);

      const updatedCartItems = cartItems.map((item) => {
        if (item.id === data.id) {
          return {
            ...item,
            price: unitPrice * (quantity - 1),
          };
        }
        return item;
      });

      setCartItems(updatedCartItems);
    }
  };
  return (
    <div className="w-[402px] h-[179px] bg-slate-100 rounded-[5px] shadow flex justify-between items-center p-4 mb-4">
      <div>
        <div className="w-[247px] h-[41px] text-black text-2xl font-medium font-poppins">
          {data.name}
        </div>
        <div className="flex gap-2">
          <button
            className="mt-1"
            onClick={handleDecrement}
            disabled={quantity <= 1}
          >
            <AiFillMinusCircle size={20} />
          </button>
          <p className="text-1xl mt-0.5">{quantity}</p>
          <button className="mt-1" onClick={handleIncrement}>
            <AiFillPlusCircle size={20} />
          </button>
        </div>
      </div>
      <div className="flex items-center flex-col gap-20">
        <button className="ml-24" onClick={() => deleteCard(data.id)}>
          <AiOutlineCloseCircle size={30} />
        </button>
        <div className="w-[116px] h-[37px] text-right text-black text-2xl font-medium font-poppins">
          {formatCurrency(data.price, "BRL")}
        </div>
      </div>
    </div>
  );
};
