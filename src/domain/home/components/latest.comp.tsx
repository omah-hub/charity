import { FaCircleArrowRight, FaCircleArrowLeft, FaArrowRight } from "react-icons/fa6";
import firstImage from "../../../assets/images/Project1.png";
import secondImage from "../../../assets/images/project2.png";
import thirdImage from "../../../assets/images/Project 3.png";

export default function Latest() {
  return (
    <div className="bg-[#F2F8FF] pb-[100px]">
      <div className="px-4 mx-auto max-w-[1400px]">
        <div className="lg:flex justify-between pt-[100px]">
          <div>
            <h1 className="text-blue-500 font-semibold font-papyrus text-3xl">
              Latest Projects
            </h1>
            <p className="font-bold text-2xl lg:text-3xl font-poppins">
              Community Engagement and <br className="hidden lg:block" />
              Awareness
            </p>
          </div>
          <div className="flex flex-col lg:px-0 mt-4 lg:mt-0">
            <button className="rounded-lg text-white items-center justify-center mr-16 lg:mx-0 flex bg-blue-600 lg:px-[25px] py-4 lg:py-3 hover:bg-blue-900 hover:duration-700 md:w-[250px]">
              See All Projects
              <span>
                <FaArrowRight size={20} className="pl-2" />
              </span>
            </button>
            <div className="flex space-x-3 lg:ml-auto mt-[20px]">
              <FaCircleArrowLeft className="lg:w-8 lg:h-8 h-12 w-12 text-blue-200 " />
              <FaCircleArrowRight className="lg:w-8 lg:h-8 h-12 w-12 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="grid grid-col-1 justify-around lg:flex mt-[50px] space-y-4 lg:space-y-0 lg:space-x-14">
          <div className="relative group">
            <img src={firstImage} alt="/" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-1000 ease-in-out group-hover:opacity-100">
              <div className="bottom-0 mt-auto shadow-glow-blue flex opacity-0 md:px-4 px-2 items-center border rounded-[30px] bg-white py-3 duration-1000 transition-all  ease-in-out transform translate-x-[-0%] translate-y-[50%] group-hover:translate-y-[-80%] group-hover:opacity-100">
                <div className="">
                  <h1 className="font-semibold text-xl">Name of the project</h1>
                  <div className="flex space-x-10">
                    <p>Arike Foundations</p>
                    <p>4th April 2024</p>
                  </div>
                </div>
                <FaCircleArrowRight className="bg-white text-blue-600 w-8 h-8 ml-auto " />
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src={secondImage} alt="/" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-1000 ease-in-out group-hover:opacity-100">
              <div className="bottom-0 mt-auto shadow-glow-blue flex opacity-0 md:px-4 px-2 items-center border rounded-[30px] bg-white py-3 duration-1000 transition-all  ease-in-out transform translate-x-[-0%] translate-y-[50%] group-hover:translate-y-[-80%] group-hover:opacity-100">
                <div className="">
                  <h1 className="font-semibold text-xl">Name of the project</h1>
                  <div className="flex space-x-10">
                    <p>Arike Foundations</p>
                    <p>4th April 2024</p>
                  </div>
                </div>
                <FaCircleArrowRight className="bg-white text-blue-600 w-8 h-8 ml-auto " />
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src={thirdImage} alt="/" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-1000 ease-in-out group-hover:opacity-100">
              <div className="bottom-0 mt-auto shadow-glow-blue flex opacity-0 md:px-4 px-2 items-center border rounded-[30px] bg-white py-3 duration-1000 transition-all  ease-in-out transform translate-x-[-0%] translate-y-[50%] group-hover:translate-y-[-80%] group-hover:opacity-100">
                <div className="">
                  <h1 className="font-semibold text-xl">Name of the project</h1>
                  <div className="flex space-x-10">
                    <p>Arike Foundations</p>
                    <p>4th April 2024</p>
                  </div>
                </div>
                <FaCircleArrowRight className="bg-white text-blue-600 w-8 h-8 ml-auto " />
              </div>
            </div>
          </div>
          {/* <img src={secondImage} alt="/" />
          <img src={thirdImage} alt="/" /> */}
        </div>
      </div>
    </div>
  );
}
