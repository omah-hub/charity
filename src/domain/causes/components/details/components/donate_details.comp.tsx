
import DonateCard from './donate_card.comp';

export default function DonateDetails() {
  return (
    <div className="px-4 mx-auto max-w-[1400px] pt-[150px]">
      <h1 className="text-5xl text-center text-[#232B35] pb-[40px]  font-bold">
        Donate to this cause
      </h1>
      <DonateCard />
    </div>
  );
}
