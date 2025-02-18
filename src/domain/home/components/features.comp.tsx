import FeatureCard from "./feature.comp.card";
import feature1 from "../../../assets/images/feature 1.png";
import feature2 from "../../../assets/images/feature2.png";
import feature3 from "../../../assets/images/feature3.png";
import line from "../../../assets/images/Vector 24.png";
import rectangle from "../../../assets/images/Rectangle 273.png";

export default function Features() {
    const cardContent = [
      {
        title: "Giving Information",
        description:"People who are passionate about a course are the ones who made the most difference. We ensure that all information about our charity activities are made known to the general public.",
        imageSrc: feature1,
        rectangle: rectangle,
        line: line,
      },
      {
        title: "Direct Help",
        description:"Charity empowers people to make a difference, even if it is just in a small way. We provide the platform to help you help someone and make a difference.",
        imageSrc: feature2,
        rectangle: rectangle,
        line: line,
      },
      {
        title: "raising Awareness",
        description:"you act better when you are well informed with the right information. We create the awareness so you know what is going on.",
        imageSrc: feature3,
        rectangle: rectangle,
        line: line
      },
    ];

  return (
    <div className="bg-[#061220] bg-gradient-to-r from-[#040d17] via-[#1c150f] to-[#040d17] ">
      <div className="px-4 mx-auto max-w-[1400px] pt-[80px]">
        <h1 className="font-papyrus text-[#57f1b6] text-3xl font-bold">
          Our Features
        </h1>
        <p className="font-poppins font-semibold text-white text-2xl lg:text-3xl mt-4 leading-10">
          Community Engagement and <br className="hidden lg:block" />
          Awareness
        </p>
        <p className="text-white mt-6 leading-7">
          You can make a difference by supporting a charity that you can about
          your donation can <br />
          help change lives
        </p>
        <div className="grid grid-col-1 justify-center lg:flex lg:space-x-3 pb-14">
          {cardContent.map((content) => (
            <FeatureCard key={content.title} {...content} />
          ))}
        </div>
      </div>
    </div>
  );
}
