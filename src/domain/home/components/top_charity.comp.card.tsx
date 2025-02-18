import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

interface CharityCardProps {
  imageSrc: any;
  title: string;
  description: string;
  descriptioncontinued: string;
  donateButtonText: string;
  viewCoursesButtonText: string;
}


const CharityCard: React.FC<CharityCardProps> = (props) => {
  return (
    <div className="bg-[#121D29] p-[50px] rounded-xl sm:w-full sm:h-[300px] md:h-[360px] overflow-hidden">
      <img
        src={props.imageSrc}
        alt="/"
        className="bg-[#1A2632] p-2 mb-6 rounded-lg w-14 h-14"
      />
      <div className="font-poppins">
        <div className="text-white">
          <h1 className="text-xl font-medium mb-[8px]">{props.title}</h1>
          <h1>{props.description}</h1>
          <h1>{props.descriptioncontinued}</h1>
        </div>
        <div className="mt-[15px] flex space-x-2">
          <div className="w-30">
            <NavLink to="/donate">
              <button className="flex lg:py-[5px] w-[140px] h-[40px] text-nowrap px-1 py-2 lg:px-[10px] items-center text-blue-700 bg-blue-200 rounded hover:bg-[#061220] hover:border-blue-600 hover:border hover:duration-700">
                {props.donateButtonText}
                <span>
                  <FaArrowRight size={20} className="pl-2" />
                </span>
              </button>
            </NavLink>
          </div>
          <div className="w-30">
            <button className="flex text-blue-700 py-2 items-center text-nowrap px-1 lg:px-[10px]">
              {props.viewCoursesButtonText}
              <span>
                <FaArrowRight size={20} className="pl-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharityCard;