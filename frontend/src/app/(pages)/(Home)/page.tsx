import { Banner } from "@/app/components/Banner";
import { ItemBanner } from "@/app/components/ItemBanner";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <Banner inverted={false} />
      <div className="mt-4 text-center">
        <p className="text-green-950 text-4xl font-semibold font-'Fira Sans' leading-[74px]">
          Pratos do dia
        </p>
      </div>
      <div className="mt-4 space-x-5">
        <ItemBanner />
        <ItemBanner />
        <ItemBanner />
      </div>
    </div>
  );
}
