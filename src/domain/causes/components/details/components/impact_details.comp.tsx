import image from "../../../../../assets/images/Rectangle 294.png";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Card from "./impact_detail_card.comp";


export default function Impact() {
  const cardContent = [
    {
      value: " ₦250M",
      title: "Donations made",
    },
    {
      value: "200k",
      title: "Lives impacted",
    },
    {
      value: "150+",
      title: "supporting NGO",
    },
  ];


  return (
    <div className="bg-[#061220] pb-[70px]">
      <div className="px-4 mx-auto max-w-[1400px]">
        <h1 className="text-white font-extrabold text-4xl text-center mb-[30px] pt-[50px]">
          Key Impacts
        </h1>
        <div className="flex justify-center lg:space-x-10 items-center pb-[60px]">
          <MdKeyboardArrowLeft className="w-10 h-10 text-green-600 rounded-full border border-white hidden lg:block" />
          <div className="lg:flex lg:space-x-8 border p-4">
            <img src={image} alt="/" className="w-full lg:w-auto" />
            <div className="text-white lg:w-[300px]">
              <h1 className="text-lg md:text-2xl font-bold leading-[30px] md:leading-[35px] mt-6 lg:mt-0 lg:leading-[50px]">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt deserunt magni magnam voluptatem voluptates at, tempore
                facilis, enim, deleniti dolorum veniam aliquid ratione sint ex
                doloribus nemo vero non eaque?
              </p>
            </div>
          </div>
          <MdKeyboardArrowRight className="w-10 h-10 text-green-600 rounded-full border border-white hidden lg:block" />
        </div>
        <div className="lg:hidden flex justify-between mb-8">
          <MdKeyboardArrowLeft className="w-10 h-10 text-green-600 rounded-full border border-white" />
          <MdKeyboardArrowRight className="w-10 h-10 text-green-600 rounded-full border border-white" />
        </div>
        <div className="flex justify-center space-x-10">
          {cardContent.map((content) => (
            <Card key={content.title} {...content} />
          ))}
        </div>
      </div>
    </div>
  );
}
