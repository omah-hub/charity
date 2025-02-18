import map from "../../../assets/images/map.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";
import Card from "./hero.comp.card";
import { useState } from "react";
import CsrModal from "./crsModal";
import BasketModal from "./basketModal";

// 104d8e
// cdfbff to c4e0fd
export default function Hero() {
  const [isBasketModalOpen, setBasketModalOpen] = useState(false);
  const [isCsrModalOpen, setCsrModalOpen] = useState(false);

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="grid lg:flex items-center justify-between">
        <div className="lg:w-1/2">
          <h5 className="font-papyrus font-extrabold text-xl lg:text-2xl text-blue-600 tracking-widest">
            Change4Humanity
          </h5>
          <h5 className="font-poppins font-extrabold text-4xl text-nowrap lg:text-5xl mt-4 lg:mt-[30px] flex text-gray-800">
            Give Your Cha
            {/* <FaNairaSign style={{ color: "blue" }} /> */}
            <span className="font-bold text-blue-600">₦</span>
            ge
          </h5>
          <h5 className="font-poppins font-extrabold text-4xl lg:text-5xl mt-2 lg:mt-[30px] leading-[50px] lg:text-nowrap text-wrap text-gray-800">
            To Create A Change
          </h5>

          <h3 className="font-poppins w-full  md:text-justify overflow-x-hidden leading-9 mt-[30px] tracking-wide font-medium">
            Lorem ipsum dolor sit amet consectetur. Aliquet ridiculus ut nunc
            magna venenatis felis morbi. Risus senectus morbi venenatis dui
            porttitor. Felis id nisi rutrum maecenas egestas tincidunt congue
            aenean.
          </h3>
          <div className="flex justify-between space-x-5 mt-[25px]">
            <div>
              <button
                onClick={() => setBasketModalOpen(true)}
                className="bg-blue-600 text-sm md:px-[90px] hover:bg-[#104d8e] duration-700 md:py-4 items-center md:text-2xl justify-center text-center text-white flex lg:text-lg text-nowrap  px-[20px] lg:px-[70px] py-3 lg:py-4 rounded-lg"
              >
                Basket Of Funds
                <span>
                  <FaArrowRight className="lg:pl-2 w-3 ml-2 h-3 lg:size-6" />
                </span>
              </button>

              <h1 className="flex items-center md:text-[20px] justify-center lg:text-base mt-3 text-[12px] font-medium">
                Philanthropy
                <span className="pl-[4px]">
                  <CiCircleInfo  />
                </span>
              </h1>
            </div>

            <div>
              <button
                onClick={() => setCsrModalOpen(true)}
                className="bg-[#C0E0FC] hover:bg-white duration-700 hover:border-blue-200 hover:border md:w-[350px] w-[155px] h-[45px]  lg:w-[320px] md:h-[65px] justify-center  text-[#0B7FE2] rounded-lg text-sm md:px-[90px]  flex lg:text-lg text-nowrap  px-[20px] lg:px-[70px] py-3 md:py-4 items-center md:text-2xl"
              >
                CSR
                <span>
                  <FaArrowRight className="lg:pl-2 w-3 h-3 lg:size-6 ml-2" />
                </span>
              </button>

              <h1 className="flex items-center md:text-[20px] justify-center text-[12px] lg:text-base mt-3 font-medium">
                For Corporate Organization
                <span className="pl-[4px]">
                  <CiCircleInfo />
                </span>
              </h1>
            </div>
          </div>
        </div>
        <img src={map} alt="/" className="mt-5 scale-90 lg:w-1/2" />
      </div>
      <div className="grid md:grid-cols-2 mt-[80px] lg:flex rounded border-blue-100 border mb-[150px] ">
        <Card value="650M" title="Donations made" />
        <Card value="500" title="NGOs supported" />
        <Card value="56.2" title="Total Donors" />
        <Card value="500+" title="Happy beneficiaries" />
      </div>
      
      <BasketModal
        isOpen={isBasketModalOpen}
        onClose={() => setBasketModalOpen(false)}
      />
      <CsrModal
        isOpen={isCsrModalOpen}
        onClose={() => setCsrModalOpen(false)}
      />
    </div>
  );
}
