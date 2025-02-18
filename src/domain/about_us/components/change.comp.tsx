import { FaArrowRight, FaCheckSquare } from "react-icons/fa";
import rectangle from "../../../assets/images/background.png";
import loading from "../../../assets/images/loading.png";
import { NavLink } from "react-router-dom";

export default function Change() {
  return (
    <div className="px-4 mx-auto max-w-[1400px] flex-col-reverse lg:flex-row flex space-x-4 pb-[40px]">
      <div className="relative flex justify-center pb-[100px] lg:pb-0">
        <img src={rectangle} className="h-[600px] lg:w-[1000px] w-full" />
        <div className="absolute bg-white lg:hidden top-[450px] w-[200px] justify-center flex">
          <img src={loading} alt="/" className="w-[200px]" />
          <div className="absolute text-center top-10">
            <p className="mt-2 font-bold text-xl">650M</p>
            <p className="mt-4 font-semibold">Donations received</p>
          </div>
        </div>
      </div>
      <div className="lg:mt-10">
        <h1 className="mb-4 font-semibold font-papyrus text-3xl md:text-4xl text-blue-600">
          We Bring Change
        </h1>
        <p className="text-3xl md:text-5xl leading-[40px] md:leading-[60px] font-bold">
          Our Mission is to Bring
          <br /> <span className="text-blue-600">change</span> To Humanity{" "}
          <br />
          One Roundup At a Time
        </p>
        <p className="md:mt-8 mt-4 text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, nihil
          itaque. Rerum corrupti aperiam in pariatur quibusdam quam dolorem quo!
        </p>
        <p className="flex mt-6 items-center font-semibold">
          <FaCheckSquare className="mr-4 text-blue-600" />
          500m liters of water provided to 30 communities
        </p>
        <p className="flex mt-4 items-center font-semibold">
          <FaCheckSquare className="mr-4 text-blue-600" />
          4000+ houses built for the poor
        </p>
        <p className="flex mt-4 items-center font-semibold">
          <FaCheckSquare className="mr-4 text-blue-600" />
          700+ schools built across 100 communities
        </p>
        <p className="flex mt-4 items-center font-semibold">
          <FaCheckSquare className="mr-4 text-blue-600" />
          2000 girl child sponsored through school
        </p>
        <NavLink to="/donate">
          <button className="flex bg-blue-600 mb-6 lg:mb-0 py-3 mt-5 text-white rounded px-16 items-center font-semibold hover:bg-blue-900 hover:duration-700">
            Donate Now <FaArrowRight className="ml-2" />
          </button>
        </NavLink>
      </div>
    </div>
  );
}
