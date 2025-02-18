
import firstStar from "../../../assets/images/Star 1.png";
import secondStar from "../../../assets/images/Star 2.png";
import thirdStar from "../../../assets/images/Star 3.png";
import fourthStar from "../../../assets/images/Star 4.png";
import fifthStar from "../../../assets/images/Star 5.png";

import DonateCard from '../../causes/components/details/components/donate_card.comp';

export default function Donate() {
  
  return (
      <div className="relative mt-[150px] lg:mt-[200px]px-4 mx-auto max-w-[1400px]">
        <div className="">
          <h1 className="lg:text-7xl text-4xl md:text-6xl lg:leading-[80px] lg:mb-[70px] font-extrabold text-center">
            Donate Your <span className="text-blue-600">change </span>
            <br className="hidden lg:block"/>
            to Make a change
          </h1>
          <div className="hidden lg:absolute top-0">
            <img src={thirdStar} alt="/" className="ml-[700px] mt-[-50px]" />
            <img src={secondStar} alt="/" className="ml-[150px] top-[-40px]" />
            <img src={firstStar} alt="/" className="ml-[1100px]" />
            <img src={fifthStar} alt="/" className="ml-[900px]" />
            <img src={fourthStar} alt="/" className="ml-[500px]" />
          </div>
        </div>
        <div className="pt-8">
          <DonateCard />
        </div>
       
      </div>
  );
}
