import Image from "next/image";

export const SecondaryItemBanner = () => {
  return (
    <div className="w-full md:w-[80.19rem] h-[auto] bg-stone-50 flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-[50%] flex flex-col items-center p-4">
        <Image src="/lanche.png" alt="lanche" width={509} height={317} />
        <div className="w-[258px] h-[38px] text-center text-green-600 text-3xl font-semibold font-['Fira Sans'] leading-loose">
          R$25.00
        </div>
      </div>
      <div className="p-4 w-full md:w-[50%] flex flex-col justify-center items-center">
        <p className="w-full md:w-[600px] h-[33px] text-center text-black text-3xl font-medium font-['Fira Sans'] leading-[25px]">
          Frango à Milanesa com Batata Frita, Ovos e Molho Especial
        </p>
        <p className="w-full md:w-[650px] h-[auto] text-center text-zinc-800 text-3xl font-normal font-['Fira Sans'] leading-[30px] mt-5">
          Um prato clássico e saboroso, com pedaços de frango crocante, batata
          frita dourada, ovos fritos e um molho especial para dar aquele toque
          extra de sabor. Uma refeição simples e deliciosa para todos os gostos.
        </p>
        <button className="w-full md:w-[401px] h-10 bg-red-600 rounded-[25px] flex justify-center items-center mt-4">
          <div className="text-center text-white text-base font-medium font-['Fira Sans'] uppercase">
            ADICIONAR AO CARRINHO
          </div>
        </button>
      </div>
    </div>
  );
};
