import { SecondaryItemBanner } from "@/app/components/SecondaryItemBanner";

export default function MakeRequest() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="max-w-screen-xl mx-auto">
        <SecondaryItemBanner />
        <SecondaryItemBanner />
        <SecondaryItemBanner />
      </div>
    </div>
  );
}
