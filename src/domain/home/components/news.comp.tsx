import {
  FaCircleArrowRight,
  FaCircleArrowLeft,
} from "react-icons/fa6";
import image from "../../../assets/images/Image.png";
import secondImage from "../../../assets/images/Image_news2.png";
import firstImage from "../../../assets/images/image_news.png";
import { FaCalendarAlt } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { RiEyeLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

export default function News() {
  return (
    <div className="pb-[200px]">
      <div className="px-4 mx-auto max-w-[1400px]">
        <div className="lg:flex justify-between pt-[100px]">
          <div>
            <h1 className="text-blue-500 font-semibold font-papyrus text-3xl">
              Latest News
            </h1>
            <p className="font-bold text-2xl lg:text-3xl font-poppins">
              Stay in the know. <br className="hidden lg:block" />
              Checkout Our Latest News
            </p>
          </div>
          <div className="flex flex-col lg:px-0 mt-4 lg:mt-0">
            <div className="flex space-x-3 lg:ml-auto mt-[20px]">
              <FaCircleArrowLeft className="lg:w-8 lg:h-8 h-12 w-12 text-blue-200 " />
              <FaCircleArrowRight className="lg:w-8 lg:h-8 h-12 w-12 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-col md:items-center lg:flex-row lg:flex mt-[50px] space-y-4 lg:space-y-0 lg:space-x-14">
          <div className="relative group pb-[60px] lg:pb-0">
            <img
              src={firstImage}
              alt="/"
              className="transition-transform duration-700 ease-in-out transform hover:scale-110"
            />
            <div className="absolute inset-x-0 top-[200px] flex flex-col justify-center items-center">
              <div className="text-white space-x-3 items-center shadow-glow-blue flex  z-10 justify-center w-[200px]  h-[50px] opacity-0 bg-blue-600 duration-700 transition-all  ease-in-out transform  translate-y-[-50%] group-hover:translate-y-[-0%] group-hover:opacity-100">
                <FaCalendarAlt />
                <p className="text-white">April 15,2025</p>
              </div>
              <div className="border-t-8 shadow-glow-blue  border-t-blue-600   mt-[40px] justify-center text-black w-[300px]  md:w-[350px] py-8 opacity-0 bg-white duration-700 transition-all  ease-in-out transform  translate-y-[0%] group-hover:translate-y-[-40%] group-hover:opacity-100">
                <div className="flex space-x-8 ml-4">
                  <div className="flex space-x-3 items-center">
                    <MdPersonOutline />
                    <h1>By Admin</h1>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <RiEyeLine />
                    <h1>231 views</h1>
                  </div>
                </div>
                <p className="text-xl font-semibold ml-4">
                  Sponsored a "feed a child for a week" initiative
                </p>
                <button className="bg-blue-600 text-white px-[30px] ml-3 rounded-md flex items-center py-2">
                  Read More
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="relative lg:pt-0 group pb-[60px] lg:pb-0">
            <img
              src={secondImage}
              alt="/"
              className="transition-transform duration-700 ease-in-out transform hover:scale-110"
            />
            <div className="absolute inset-x-0 top-[200px] flex flex-col justify-center items-center">
              <div className="text-white space-x-3 items-center shadow-glow-blue flex  z-10 justify-center w-[200px]  h-[50px] opacity-0 bg-blue-600 duration-700 transition-all  ease-in-out transform  translate-y-[-50%] group-hover:translate-y-[-0%] group-hover:opacity-100">
                <FaCalendarAlt />
                <p className="text-white">April 15,2025</p>
              </div>
              <div className="border-t-8 shadow-glow-blue  border-t-blue-600   mt-[40px] justify-center text-black w-[300px]  md:w-[350px] py-8 opacity-0 bg-white duration-700 transition-all  ease-in-out transform  translate-y-[0%] group-hover:translate-y-[-40%] group-hover:opacity-100">
                <div className="flex space-x-8 ml-4">
                  <div className="flex space-x-3 items-center">
                    <MdPersonOutline />
                    <h1>By Admin</h1>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <RiEyeLine />
                    <h1>231 views</h1>
                  </div>
                </div>
                <p className="text-xl font-semibold ml-4">
                  Sponsored a "feed a child for a week" initiative
                </p>
                <button className="bg-blue-600 text-white px-[30px] ml-3 rounded-md flex items-center py-2">
                  Read More
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="relative group pb-[60px] lg:pb-0">
            <img
              src={image}
              alt="/"
              className="transition-transform duration-700 ease-in-out transform hover:scale-110"
            />
             <div className="absolute inset-x-0 top-[200px] flex flex-col justify-center items-center">
              <div className="text-white space-x-3 items-center shadow-glow-blue flex  z-10 justify-center w-[200px]  h-[50px] opacity-0 bg-blue-600 duration-700 transition-all  ease-in-out transform  translate-y-[-50%] group-hover:translate-y-[-0%] group-hover:opacity-100">
                <FaCalendarAlt />
                <p className="text-white">April 15,2025</p>
              </div>
              <div className="border-t-8 shadow-glow-blue  border-t-blue-600   mt-[40px] justify-center text-black w-[300px]  md:w-[350px] py-8 opacity-0 bg-white duration-700 transition-all  ease-in-out transform  translate-y-[0%] group-hover:translate-y-[-40%] group-hover:opacity-100">
                <div className="flex space-x-8 ml-4">
                  <div className="flex space-x-3 items-center">
                    <MdPersonOutline />
                    <h1>By Admin</h1>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <RiEyeLine />
                    <h1>231 views</h1>
                  </div>
                </div>
                <p className="text-xl font-semibold ml-4">
                  Sponsored a "feed a child for a week" initiative
                </p>
                <button className="bg-blue-600 text-white px-[30px] ml-3 rounded-md flex items-center py-2">
                  Read More
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          
          </div>
          {/* <img src={secondImage} alt="/" />
          <img src={image} alt="/" /> */}
        </div>
      </div>
    </div>
  );
}

// absolute top-1/2 left-1/2 bg-gray-800 text-white flex flex-col justify-center items-center transition-all duration-300 ease-in-out transform translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:translate-y-[-40%] group-hover:opacity-100