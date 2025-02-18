import { FaArrowRight } from "react-icons/fa6";
import CharityCard from "./top_charity.comp.card";
import education from "../../../assets/images/education_icon.png";
import socials from "../../../assets/images/socials_icons.png";
import health from "../../../assets/images/health_care_icon.png";
import children from "../../../assets/images/children_icon.png";
import environment from "../../../assets/images/environment_icon.png";
import hunger from "../../../assets/images/end_hunger_icon.png";
import { NavLink } from "react-router-dom";

export default function TopCharity() {
  const cardContent = [
    {
      title: "Education",
      description: "Donate now to provide a better access to",
      imageSrc: education,
      descriptioncontinued: "quality education for all children",
      donateButtonText: "Donate Now",
      viewCoursesButtonText: "View Course",
    },
    {
      title: "Social Services",
      description: "Support social services charity to help",
      imageSrc: socials,
      descriptioncontinued: "those in need, today",
      donateButtonText: "Donate Now",
      viewCoursesButtonText: "View Course",
    },
    {
      title: "Health Care",
      description: "Donate now to provide a better healthcare",
      imageSrc: health,
      descriptioncontinued: "service to those in need",
      donateButtonText: "Donate Now",
      viewCoursesButtonText: "View Course",
    },
    {
      title: "Children and Elderlies",
      description: "Support children and elderlies' charity for a",
      imageSrc: children,
      descriptioncontinued: "better tomorrow",
      donateButtonText: "Donate Now",
      viewCoursesButtonText: "View course",
    },
    {
      title: "Environment",
      description: "Support the save the planet campaign to",
      imageSrc: environment,
      descriptioncontinued: "create a sustainable future",
      donateButtonText: "Donate Now",
      viewCoursesButtonText: "View Course",
    },
    {
      title: "End Hunger",
      description: "End hunger and provide nutritious meals to",
      imageSrc: hunger,
      descriptioncontinued: "those in need, today",
      donateButtonText: "Donate Now",
      viewCoursesButtonText: "View Course",
    },
  ];

  return (
    <div className="bg-[#061220] pb-[80px]">
      <div className="max-w-[1400px] px-4 mx-auto">
        <h1 className="font-poppins text-3xl text-white pt-[80px] font-semibold pb-[10px]">
          Top Charity Categories
        </h1>
        <div className="text-white lg:flex justify-between mb-[70px]">
          <div>
            <h1 className="pb-[5px] text-[19px] text-wrap">
              We provide a variety of chariy courses in other to address a range
              <br className="lg:block hidden" />
              of important issues and people in need.
            </h1>
          </div>
          <div className="flex sm:justify-between md:justify-normal lg:justify-between space-x-8 mt-4">
            <div>
              <NavLink to="/donate">
                <button className="rounded text-nowrap flex items-center  px-[10px] py-[12px] lg:px-[30px] bg-blue-700 hover:bg-blue-900 hover:duration-700">
                  Make a Donation
                  <span>
                    <FaArrowRight size={20} className="pl-2" />
                  </span>
                </button>
              </NavLink>
            </div>
            <div>
              <NavLink to="/causes">
                <button className=" h-[48px] rounded flex text-nowrap justify-center items-center px-[45px] py-[12px] w-40 lg:px-[30px] bg-blue-200 text-blue-600 hover:bg-[#061220] hover:border-blue-600 hover:border hover:duration-700">
                  See All
                  <span>
                    <FaArrowRight size={20} className="pl-2" />
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:justify-around lg:grid lg:grid-cols-3 gap-x-4 gap-8 items-center space-x-auto ">
          {cardContent.map((content) => (
            <CharityCard key={content.title} {...content} />
          ))}
        </div>
      </div>
    </div>
  );
}
