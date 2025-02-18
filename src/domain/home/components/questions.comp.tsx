import { FaPhone, FaArrowRight } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi";
import { useState } from "react";



export default function Questions() {
   const [selectedSections, setSelectedSections] = useState([
     true,
     true,
     true,
     true,
     true,
     true,
   ]);

   const toggle = (index:number) => {
     const updatedSections = [...selectedSections];
     updatedSections[index] = !updatedSections[index];
     setSelectedSections(updatedSections);
   };
  return (
    <div className="px-4 mx-auto max-w-[1400px] bg-[#F2F8FF]">
      <div className="lg:flex pt-[50px] justify-between">
        <div>
          <h1 className="font-papyrus text-blue-600 text-2xl md:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="font-poppins md:text-6xl text-3xl leading-normal font-bold md:leading-[80px] mb-8">
            We've been giving <br />
            change and changing <br />
            lives around the world
          </p>
          <p className="text-xl font-semibold">
            we are here to answer your questions and throw more light to any
            grey <br />
            area you might have.
          </p>
          <h1 className="text-xl font-bold my-8">
            Have more questions? Don't hesitate to reach out to us.
          </h1>
          <div className="flex space-x-10 text-xl font-semibold">
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              08130000000
            </div>
            <div className="flex items-center">
              <IoMdMailUnread className="mr-2" />
              08130000000
            </div>
          </div>
          <h1 className="text-center my-4">OR</h1>
          <form>
            <div className="flex space-x-4 mb-6">
              <input
                type="text"
                placeholder="Enter your full name"
                className=" h-8 border w-full pl-1 md:pl-2 py-6 rounded-lg"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="h-8 border w-full pl-2 py-6 rounded-lg"
              />
            </div>
            <textarea
              style={{ resize: "none" }}
              placeholder="Enter your message.."
              className="w-full pl-2 h-[100px] mb-6 rounded-lg"
            />
            <br />
            <button className="rounded bg-blue-600 flex w-full justify-center py-4 items-center text-white hover:bg-blue-900 hover:duration-700">
              Submit
              <FaArrowRight className="ml-2" />
            </button>
          </form>
        </div>
        <div>
          {selectedSections.map((selected, index) => (
            <div
              key={index}
              className={` ${
                selected
                  ? "bg-[#F2F8FF] duration-1000 px-4 mt-[40px]"
                  : "bg-white pt-2 px-4 duration-1000 mt-[40px]"
              }`}
            >
              <div
                className="flex font-poppins text-xl   lg:my-[55px] font-semibold"
                onClick={() => toggle(index)}
              >
                <h1 className="text-wrap mr-auto lg:mr-[100px] md:text-[25px]">
                  Possible question that can be asked - {index + 1}
                </h1>
                <span>
                  {selected ? (
                    <GoPlus className="w-8 h-8" />
                  ) : (
                    <HiOutlineMinus className="w-8 h-8" />
                  )}
                </span>
              </div>
              <p
                className={` ${
                  selected ? "hidden" : "md:w-[600px] md:h-[200px]"
                }`}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique voluptas iusto ab officiis. Perspiciatis itaque
                exercitationem asperiores, aliquid cum porro! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Qui, nostrum quidem?
                Error numquam ab neque in eos quos, ducimus eius. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Nemo aut molestias
                corrupti veniam accusantium modi quasi tenetur. Rerum, quas
                perferendis. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Quisquam, quis voluptates. Ratione esse voluptates maiores
                dicta soluta qui doloribus totam, ex quia odio maxime vitae rem
                illum nam eius impedit.
              </p>
            </div>
          ))}
        </div>
        {/* <div className="main-right">
          <div className={` ${selected ? "bg-[#F2F8FF]" : "bg-white pt-2"}`}>
            <div
              className="flex font-poppins text-xl my-8 font-semibold space-x-14"
              onClick={() => toggle()}
            >
              <h1 className="text-nowrap mr-[200px]">
                Possible question that can be asked - One
              </h1>
              <span>{selected ? <GoPlus /> : <HiOutlineMinus />}</span>
            </div>
            <p className={` ${selected ? "hidden" : "w-[750px] h-[200px]"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique voluptas iusto ab officiis. Perspiciatis itaque
              exercitationem asperiores, aliquid cum porro! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Qui, nostrum quidem? Error
              numquam ab neque in eos quos, ducimus eius. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nemo aut molestias corrupti
              veniam accusantium modi quasi tenetur. Rerum, quas perferendis.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, quis voluptates. Ratione esse voluptates maiores dicta
              soluta qui doloribus totam, ex quia odio maxime vitae rem illum
              nam eius impedit.
            </p>
          </div>
          <div className={` ${selected ? "bg-[#F2F8FF]" : "bg-white pt-2"}`}>
            <div
              className="flex font-poppins text-xl my-8 font-semibold space-x-14"
              onClick={() => toggle()}
            >
              <h1 className="text-nowrap mr-[200px]">
                Possible question that can be asked - One
              </h1>
              <span>{selected ? <GoPlus /> : <HiOutlineMinus />}</span>
            </div>
            <p className={` ${selected ? "hidden" : "w-[750px] h-[200px]"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique voluptas iusto ab officiis. Perspiciatis itaque
              exercitationem asperiores, aliquid cum porro! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Qui, nostrum quidem? Error
              numquam ab neque in eos quos, ducimus eius. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nemo aut molestias corrupti
              veniam accusantium modi quasi tenetur. Rerum, quas perferendis.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, quis voluptates. Ratione esse voluptates maiores dicta
              soluta qui doloribus totam, ex quia odio maxime vitae rem illum
              nam eius impedit.
            </p>
          </div>
          <div className={` ${selected ? "bg-[#F2F8FF]" : "bg-white pt-2"}`}>
            <div
              className="flex font-poppins text-xl my-8 font-semibold space-x-14"
              onClick={() => toggle()}
            >
              <h1 className="text-nowrap mr-[200px]">
                Possible question that can be asked - One
              </h1>
              <span>{selected ? <GoPlus /> : <HiOutlineMinus />}</span>
            </div>
            <p className={` ${selected ? "hidden" : "w-[750px] h-[200px]"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique voluptas iusto ab officiis. Perspiciatis itaque
              exercitationem asperiores, aliquid cum porro! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Qui, nostrum quidem? Error
              numquam ab neque in eos quos, ducimus eius. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nemo aut molestias corrupti
              veniam accusantium modi quasi tenetur. Rerum, quas perferendis.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, quis voluptates. Ratione esse voluptates maiores dicta
              soluta qui doloribus totam, ex quia odio maxime vitae rem illum
              nam eius impedit.
            </p>
          </div>
          <div className={` ${selected ? "bg-[#F2F8FF]" : "bg-white pt-2"}`}>
            <div
              className="flex font-poppins text-xl my-8 font-semibold space-x-14"
              onClick={() => toggle()}
            >
              <h1 className="text-nowrap mr-[200px]">
                Possible question that can be asked - One
              </h1>
              <span>{selected ? <GoPlus /> : <HiOutlineMinus />}</span>
            </div>
            <p className={` ${selected ? "hidden" : "w-[750px] h-[200px]"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique voluptas iusto ab officiis. Perspiciatis itaque
              exercitationem asperiores, aliquid cum porro! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Qui, nostrum quidem? Error
              numquam ab neque in eos quos, ducimus eius. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nemo aut molestias corrupti
              veniam accusantium modi quasi tenetur. Rerum, quas perferendis.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, quis voluptates. Ratione esse voluptates maiores dicta
              soluta qui doloribus totam, ex quia odio maxime vitae rem illum
              nam eius impedit.
            </p>
          </div>
          <div className={` ${selected ? "bg-[#F2F8FF]" : "bg-white pt-2"}`}>
            <div
              className="flex font-poppins text-xl my-8 font-semibold space-x-14"
              onClick={() => toggle()}
            >
              <h1 className="text-nowrap mr-[200px]">
                Possible question that can be asked - One
              </h1>
              <span>{selected ? <GoPlus /> : <HiOutlineMinus />}</span>
            </div>
            <p className={` ${selected ? "hidden" : "w-[750px] h-[200px]"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique voluptas iusto ab officiis. Perspiciatis itaque
              exercitationem asperiores, aliquid cum porro! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Qui, nostrum quidem? Error
              numquam ab neque in eos quos, ducimus eius. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nemo aut molestias corrupti
              veniam accusantium modi quasi tenetur. Rerum, quas perferendis.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, quis voluptates. Ratione esse voluptates maiores dicta
              soluta qui doloribus totam, ex quia odio maxime vitae rem illum
              nam eius impedit.
            </p>
          </div>
          <div className={` ${selected ? "bg-[#F2F8FF]" : "bg-white pt-2"}`}>
            <div
              className="flex font-poppins text-xl my-8 font-semibold space-x-14"
              onClick={() => toggle()}
            >
              <h1 className="text-nowrap mr-[200px]">
                Possible question that can be asked - One
              </h1>
              <span>{selected ? <GoPlus /> : <HiOutlineMinus />}</span>
            </div>
            <p className={` ${selected ? "hidden" : "w-[750px] h-[200px]"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique voluptas iusto ab officiis. Perspiciatis itaque
              exercitationem asperiores, aliquid cum porro! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Qui, nostrum quidem? Error
              numquam ab neque in eos quos, ducimus eius. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nemo aut molestias corrupti
              veniam accusantium modi quasi tenetur. Rerum, quas perferendis.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, quis voluptates. Ratione esse voluptates maiores dicta
              soluta qui doloribus totam, ex quia odio maxime vitae rem illum
              nam eius impedit.
            </p>
          </div>
          <div className={` ${selected ? "bg-[#F2F8FF]" : "bg-white pt-2"}`}>
            <div
              className="flex font-poppins text-xl my-8 font-semibold space-x-14"
              onClick={() => toggle()}
            >
              <h1 className="text-nowrap mr-[200px]">
                Possible question that can be asked - One
              </h1>
              <span>{selected ? <GoPlus /> : <HiOutlineMinus />}</span>
            </div>
            <p className={` ${selected ? "hidden" : "w-[750px] h-[200px]"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique voluptas iusto ab officiis. Perspiciatis itaque
              exercitationem asperiores, aliquid cum porro! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Qui, nostrum quidem? Error
              numquam ab neque in eos quos, ducimus eius. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nemo aut molestias corrupti
              veniam accusantium modi quasi tenetur. Rerum, quas perferendis.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, quis voluptates. Ratione esse voluptates maiores dicta
              soluta qui doloribus totam, ex quia odio maxime vitae rem illum
              nam eius impedit.
            </p>
          </div> */}

        {/* <div className="bg-white pt-[1px]">
            <div className="flex font-poppins text-xl my-3 font-semibold space-x-14">
              <h1 className="text-nowrap mr-[200px]">
                Possible question that can be asked - One
              </h1>
              <HiOutlineMinus />
            </div>
            <p className="w-[750px] h-[200px] hidden">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique voluptas iusto ab officiis. Perspiciatis itaque
              exercitationem asperiores, aliquid cum porro! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Qui, nostrum quidem? Error
              numquam ab neque in eos quos, ducimus eius. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nemo aut molestias corrupti
              veniam accusantium modi quasi tenetur. Rerum, quas perferendis.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, quis voluptates. Ratione esse voluptates maiores dicta
              soluta qui doloribus totam, ex quia odio maxime vitae rem illum
              nam eius impedit.
            </p>
          </div>
          <div>
            <div className="flex font-poppins text-xl my-8 font-semibold space-x-14">
              <h1 className="text-nowrap mr-[200px]">
                Possible question that can be asked - One
              </h1>
              <GoPlus />
            </div>
          </div>

          <div>
            <div className="flex font-poppins text-xl my-8 font-semibold space-x-14">
              <h1 className="text-nowrap mr-[200px]">
                Possible question that can be asked - One
              </h1>
              <GoPlus />
            </div>
          </div>
          <div>
            <div className="flex font-poppins text-xl my-8 font-semibold space-x-14">
              <h1 className="text-nowrap mr-[200px]">
                Possible question that can be asked - One
              </h1>
              <GoPlus />
            </div>
          </div>
          <div>
            <div className="flex font-poppins text-xl my-8 font-semibold space-x-14">
              <h1 className="text-nowrap mr-[200px]">
                Possible question that can be asked - One
              </h1>
              <GoPlus />
            </div>
          </div>
          <div>
            <div className="flex font-poppins text-xl my-8 font-semibold space-x-14">
              <h1 className="text-nowrap mr-[200px]">
                Possible question that can be asked - One
              </h1>
              <GoPlus />
            </div>
          </div> */}
      </div>
    </div>
    // </div>
  );
}
