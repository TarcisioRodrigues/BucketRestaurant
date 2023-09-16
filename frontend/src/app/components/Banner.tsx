import Image from "next/image";
interface IBanner {
  inverted: boolean;
}
export const Banner = ({ inverted }: IBanner) => {
  if (inverted === false) {
    return (
      <div className="flex items-center justify-center">
        <div>
          <p className="w-[544px] h-[110px] text-green-950 text-8xl font-normal font-['Meow Script'] mb-10 leading-[74px] p-4">
            Viva o sabor!
          </p>
          <p className="w-[574px] h-24 text-green-950 text-4xl font-normal font-['Gabriola'] leading-[58px] p-4">
            Tempo de aproveitar os nossos pratos.
          </p>
        </div>
        <div>
          <Image
            src="/bannerPri.png"
            alt="Banner"
            width={665}
            height={500}
            className="mr-[6rem]"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center">
        <div>
          <Image
            src="/bannerPri.png"
            alt="Banner"
            width={665}
            height={500}
            className="mr-[6rem]"
          />
        </div>
        <div>
          <p className="w-[544px] h-[110px] text-green-950 text-8xl font-normal font-['Meow Script'] mb-10 leading-[74px] p-4">
            Faça sua reserva
          </p>
          <p className="w-[574px] h-24 text-green-950 text-4xl font-normal font-['Gabriola'] leading-[58px] p-4">
            E viva a melhor experiência gastronômica!
          </p>
        </div>
      </div>
    );
  }
};
