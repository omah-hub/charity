import firstCol from "../../../assets/images/first_col.png";
import secondRow from "../../../assets/images/first_col_two.png";
import secondCol from "../../../assets/images/second_col.png";
import rectangle from "../../../assets/images/Rectangle.png";
import { FaArrowRight, FaCheckSquare } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa6";

export default function About() {
  return (
    <div className="px-4 mx-auto max-w-[1400px] pt-8 lg:pt-[150px] pb-[80px] lg:pb-[150px]">
      <h1 className="font-papyrus text-blue-600 font-semibold text-2xl">
        About Us
      </h1>
      <h1 className="font-poppins text-wrap font-bold text-4xl mt-3 leading-[50px]">
        Bringing <span className="text-blue-600 mx-2">change</span> To Humanity
        <br /> One Roundup At a Time
      </h1>
      <div className="lg:flex mt-10">
        <div className="grid md:ml-6 grid-cols-2 gap-y-4 lg:gap-y-6 gap-x-4 lg:gap-x-7">
          <img src={firstCol} alt="/" className="" />
          <img src={secondCol} alt="/" className="row-span-2" />
          <img
            src={secondRow}
            alt="/"
            className=" h-[120px] lg:h-[220px] md:w-full md:h-[230px]"
          />
        </div>
        <div className="max-w-full lg:w-1/2">
          <div className="flex mt-8 md:mt-10 lg:mt-0">
            <img
              src={rectangle}
              alt="/"
              className="h-[auto] md:h-8 lg:h-auto"
            />

            <h1 className="ml-4 font-semibold font-poppins text-xl">
              Lorem ipsum dolor sit amet <br className="hidden lg:block" />
              consectetur. Sit tellus nulla eget diam.
            </h1>
          </div>
          <p className="font-medium text-[20px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            laudantium beatae eveniet voluptatem aspernatur numquam mollitia
            obcaecati illum eaque magni sit porro quo quam quisquam, ab corporis
            est blanditiis voluptates, facilis aliquam pariatur quasi autem,
            temporibus debitis. Quibusdam sapiente ullam exercitationem nemo,
            incidunt commodi, labore tenetur eveniet architecto magni soluta.
          </p>
          <p className="lg:mt-10 font-medium text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius at
            commodi eveniet distinctio, aliquam nesciunt cupiditate in
            consectetur mollitia iste. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Porro, magnam!
          </p>
          <div className="lg:flex mt-[30px] lg:mt-3">
            <p className="flex font-semibold text-[19px]">
              <span className="text-blue-600 mt-1">
                <FaCheckSquare className="rounded-lg text-2xl mr-3" />{" "}
              </span>
              Diam pulvinar dictum hab itant ipsum nec mi sed
            </p>
            <img
              src={rectangle}
              alt="/"
              className="w-[2px] mx-4 hidden lg:block"
            />
            <p className="flex font-semibold text-[19px] pt-4 lg:pt-0">
              <span className="text-blue-600 mt-1">
                <FaCheckSquare className="rounded-lg text-2xl mr-3" />{" "}
              </span>
              Diam pulvinar dictum hab itant ipsum nec mi sed
            </p>
          </div>
          <div className="flex justify-between md:justify-start md:space-x-16 lg:justify-between mt-10 lg:mt-2 space-x-2">
            <button className="flex rounded-lg lg:px-[20px] bg-blue-600 md:text-xl text-white items-center py-2 lg:py-4 hover:bg-blue-900 hover:duration-700 px-3 w-[170px] h-[60px] md:w-[200px] lg:w-[250px] justify-center">
              Learn More
              <span>
                <FaArrowRight size={20} className="pl-2" />
              </span>
            </button>
            <button className="flex rounded-lg md:text-xl bg-blue-200  text-blue-600 items-center hover:border-blue-200 hover:border hover:bg-white hover:duration-700 w-[160px] h-[60px] pl-1 text-nowrap md:w-[210px] md:pl-4 justify-center lg:px-[20px] lg:w-[250px]">
              Make a Donation
              <span className="ml-1">
                <FaArrowRight size={15} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
