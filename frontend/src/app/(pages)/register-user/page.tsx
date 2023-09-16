import { Banner } from "@/app/components/Banner";

export default function RegisterUser() {
  return (
    <div className="items-center justify-center w-full">
      <Banner inverted={true} />

      <h1 className="w-full text-center text-indigo-950 text-[112px] font-normal font-['Playfair Display'] flex items-center justify-center">
        Garanta sua vaga
      </h1>
      <div className="grid grid-cols-2">
        <div className="flex flex-col p-4 gap-3">
          <input
            type="text"
            placeholder="Nome"
            className="border-b-4 border-red-600 p-4"
          />
          <input
            type="text"
            placeholder="E-mail"
            className="border-b-4 border-red-600 p-4"
          />
          <input
            type="text"
            placeholder="Mensagem"
            className="border-b-4 border-red-600 p-4"
          />
          <div className="w-[317px] h-[77px] px-[120px] py-6 bg-red-600 rounded-[48px] justify-center items-center gap-2.5 inline-flex">
            <button className="text-white text-2xl font-medium font-['Montserrat'] leading-[28.80px]">
              Enviar
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[191.15px] h-[31.94px] text-black text-[32px] font-bold font-['Montserrat'] leading-[38.40px]">
            Contact
          </div>
          <div className="w-[339.18px] h-[31.94px] text-black text-[32px] font-normal font-['Montserrat'] leading-[38.40px]">
            bucket@gmail.com
          </div>
          <div className="w-[208.40px] h-[31.94px] text-black text-[32px] font-bold font-['Montserrat'] leading-[38.40px]">
            Based in
          </div>
          <div className="w-[350.68px] h-[63.88px] text-black text-[32px] font-normal font-['Montserrat'] leading-[38.40px]">
            São Luís, Maranhão, Brasil
          </div>
        </div>
      </div>
    </div>
  );
}
