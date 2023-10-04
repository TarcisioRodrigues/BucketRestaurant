"use client";
import { useAppContext } from "@/Context";
import { CardBuy } from "@/app/components/CardBuy";
import PrivateRoute from "@/app/components/PrivateRouter";
import formatCurrency from "@/utils/formatCurrency";

export default function CartBuy() {
  const { cartItems } = useAppContext();
  const calculateTotalPrice = () => {
    let total = 0;
    for (const itemId in cartItems) {
      if (cartItems.hasOwnProperty(itemId)) {
        const item = cartItems[itemId];
        total = item.price;
      }
    }
    return total;
  };
  console.log("dasd", cartItems);
  return (
    <PrivateRoute>
      <div className="flex flex-col justify-center items-center ">
        <div className="text-green-950 text-8xl font-normal font-meow-script mb-10">
          Conclua seu pedido
        </div>
        <div className="grid grid-cols-2">
          <div>
            {cartItems.map((cart) => (
              <CardBuy id={cart.id} name={cart.name} price={cart.price} />
            ))}
          </div>

          <div className="w-[509px] h-[250px] rounded-[3px] shadow bg-slate-100  p-6 flex flex-col gap-20">
            <div className="w-[260.82px] h-[50.20px] text-black text-[40px] font-normal font-['Mulish'] ">
              Valor Total
            </div>
            <div className="w-[135.58px] h-[38.15px] text-black text-opacity-80 text-3xl font-normal font-['Mulish'] mt-10 ">
              Total:{formatCurrency(calculateTotalPrice(), "BRL")}
            </div>
          </div>
        </div>
        <div className="w-[456px] h-[77px] px-[120px] py-6 bg-red-600 rounded-[48px] justify-center items-center gap-2.5 inline-flex mb-10">
          <div className="text-white text-2xl font-medium font-['Montserrat'] leading-[28.80px]">
            Confirmar Pedido
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}
