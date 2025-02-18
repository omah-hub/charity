import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


interface CardProps {
  image: any
  title: string;
  heading: string;
  description: string;
  donation: string;
  
}

const Card: React.FC<CardProps> = (props) => {



  return (
    <div className="border p-8 mt-8 mx-4 md:mx-[90px] lg:mx-0 rounded-[54px] border-blue-200">
      <div className="flex lg:flex-row flex-col-reverse">
        <img src={props.image} alt="/" />
        <div className="lg:ml-8">
          <h1 className="text-blue-600 rounded w-[130px] px-8 py-3 bg-[#E5F0FF] mb-4 text-nowrap">
            {props.title}
          </h1>
          <h1 className="text-2xl lg:text-3xl md:w-[350px] font-semibold md:font-bold leading-[40px]">
            {props.heading}
          </h1>
          <p className="font-semibold lg:w-[350px] leading-8">
            {props.description}
          </p>
          <div className="md:flex justify-between mt-5">
            <div>
              <p className="text-2xl font-bold">{props.donation}</p>
              <p className="font-semibold">Donation recieved</p>
            </div>
            <Link to="/causes/detail">
              <button className="flex text-white w-full justify-center rounded-lg bg-blue-600 py-[10px] px-8 items-center mb-6 lg:mb-0">
                View Details
                <FaArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
