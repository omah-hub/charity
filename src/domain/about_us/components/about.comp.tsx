import firstRow from "../../../assets/images/Rectangle 277.png";
import firstRow2 from "../../../assets/images/Rectangle 279.png";
import firstRow3 from "../../../assets/images/Rectangle 278.png";
import secondRow from "../../../assets/images/Rectangle 280.png";
import Card from "../../home/components/hero.comp.card";

export default function AboutUs() {
  return (
    <div className="px-4 mx-auto max-w-[1400px]">
      <h1 className="font-papyrus font-bold text-4xl pb-4 text-blue-600 text-center">
        About Us
      </h1>
      <p className="md:text-6xl text-2xl font-bold text-center">
        The Mission Behind Our <br />
        <span className="text-blue-600 font-bold">Change</span> Quest
      </p>
      <div className="mt-20  mb-10 grid grid-cols-3 max-w-full space-x-1 gap-x-3  md:gap-x-6 md:space-x-1">
        <img
          src={firstRow}
          alt="/"
          className="row-span-2 md:w-[600px] md:h-[500px] h-[350px]"
        />
        <img
          src={firstRow2}
          alt="/"
          className="w-[450px] md:h-[240px] h-[160px]"
        />
        <img
          src={firstRow3}
          alt="/"
          className="row-span-2 md:w-[450px] h-[350px] md:h-[500px] "
        />
        <img
          src={secondRow}
          alt="/"
          className="md:w-[300px] lg:w-[450px] h-[190px] md:h-[259px] pt-5"
        />
      </div>
      <div className="grid md:grid-cols-2 mt-[100px] lg:flex rounded-2xl border-blue-100 border mb-[150px] ">
        <Card value="650M" title="Donations received" />
        <Card value="500" title="NGOs supported" />
        <Card value="56.2" title="Total onors" />
        <Card value="500+" title="Happy beneficiaries" />
      </div>
    </div>
  );
}
