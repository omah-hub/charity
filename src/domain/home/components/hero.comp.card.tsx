import React from "react";

interface CardProps {
  value: string;
  title: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="group relative border-y border-x font-poppins w-full pl-[30px] py-[30px]">
      <div className="absolute inset-0 bg-gradient-to-br from-custom-start to-custom-end opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      <div className="relative z-10">
        <p className="text-4xl font-semibold">{props.value}</p>
        <p className="text-xl text-gray-600 font-medium">{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
