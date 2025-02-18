import React from 'react'

interface CardProps {
  value: string;
  title: string;
}


const Card: React.FC<CardProps> = (props) => {
  return <div className='text-wrap'>
    <h1 className='pb-[10px] text-white font-bold text-center text-2xl md:text-5xl'>{props.value}</h1>
    <p className='text-white font-normal text-[10px] md:text-lg text-nowrap'>{props.title}</p>
  </div>;
};


export default Card;