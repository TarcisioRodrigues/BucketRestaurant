import React from "react";
import {
  AiOutlineCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";

export const CardBuy = () => {
  return (
    <div className="w-[402px] h-[179px] bg-slate-100 rounded-[5px] shadow flex justify-between items-center p-4 mb-4">
      <div>
        <div className="w-[247px] h-[41px] text-black text-2xl font-medium font-poppins">
          Filé com fritas
        </div>
        <div className="flex gap-2">
          <div className="mt-1">
            <AiFillMinusCircle size={20} />
          </div>
          <p className="text-1xl mt-0.5">10</p>
          <div className="mt-1">
            <AiFillPlusCircle size={20} />
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col gap-20">
        <div className="ml-24">
          <AiOutlineCloseCircle size={30} />
        </div>
        <div className="w-[116px] h-[37px] text-right text-black text-2xl font-medium font-poppins">
          R$43,50
        </div>
      </div>
    </div>
  );
};
