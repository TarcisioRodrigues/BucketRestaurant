"use strict";
import Image from "next/image";
export const ItemBanner = () => {
  return (
    <div className="w-[290px] h-[530px] px-4 py-6 bg-white rounded-[10px] border border-stone-300 flex-col justify-center items-center gap-[21px] inline-flex">
      <div className="w-[205.90px] h-[209px] relative">
        <Image width={366} height={229} src="/frita.png" alt="frita" />
      </div>
      <div className="w-[258px] flex-col justify-start items-center gap-1 flex">
        <div className="w-[258px] h-[46px] text-center text-black text-2xl font-semibold font-['Fira Sans'] leading-loose">
          Filé com fritas
        </div>
        <div className="w-[243px] h-[45px] text-center text-zinc-800 text-sm font-light font-['Fira Sans'] leading-[18px]">
          Combinação de batatas-fritas com 200g de filé, molho da casa e
          condimentos.
        </div>
      </div>
      <div className="w-[258px] h-[38px] text-center text-green-600 text-2xl font-semibold font-['Fira Sans'] leading-loose">
        R$43.50
      </div>
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="w-[273px] h-10 px-6 pt-2.5 pb-[11px] bg-red-600 rounded-[25px] justify-center items-center gap-2.5 inline-flex">
          <button className="text-center text-white text-base font-medium font-['Fira Sans'] uppercase">
            aDICIONAR AO CARRINHO
          </button>
        </div>
      </div>
    </div>
  );
};
