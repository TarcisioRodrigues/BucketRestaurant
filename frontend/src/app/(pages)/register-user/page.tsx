import { Banner } from "@/app/components/Banner";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
export default function RegisterUser() {
  return (
    <div className="items-center justify-center w-full">
      <Banner inverted={true} />

      <h1 className="w-full text-center text-indigo-950 text-[112px] font-normal font-['Playfair Display'] flex items-center justify-center">
        Garanta sua vaga
      </h1>
      <div className="grid grid-cols-2 gap-14">
        <form className="p-5">
          <div className="mb-4">
            <label htmlFor="username" className="block font-semibold mb-1">
              Nome de usuário:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-1">
              Email:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-1">
              Senha:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-300 items-center justify-center"
          >
            Entrar
          </button>
        </form>
        <div className="flex flex-col justify-center ml-20 ">
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
          <div className="flex gap-3 items-center text-center">
            <FaWhatsapp size={40} />
            <FaInstagram size={40} />
            <FaTwitter size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
