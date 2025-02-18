import { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdArrowForward } from "react-icons/md";
import ConfirmModal from "./comfirm";




export default function DonateCard() {
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  return (
    <div className="text-[#232B35] mb-[200px]  border rounded-[50px] md:rounded-[100px] pt-6 lg:mx-[30px] mx-10">
      <h1 className="lg:text-[30px] text-[20px] text-[#232B35] text-center mb-[50px] font-bold">
        Select Amount
      </h1>
      <div className="grid grid-cols-2 gap-4 md:flex justify-evenly lg:px-[300px] mb-[50px] px-4">
        <button className="md:rounded-[20px] rounded-[10px] lg:text-2xl border border-[#104D8E] text-blue-600 px-6 py-3">
          ₦1,000
        </button>
        <button className="md:rounded-[20px] rounded-[10px] lg:text-2xl border border-[#104D8E] text-blue-600 px-6 py-3">
          ₦2,000
        </button>
        <button className="md:rounded-[20px] rounded-[10px] lg:text-2xl border border-[#104D8E] text-blue-600 px-6 py-3">
          ₦10,000
        </button>
        <button className="md:rounded-[20px] rounded-[10px] lg:text-2xl border border-[#104D8E] text-blue-600 px-6 py-3">
          ₦50,000
        </button>
        <input
          type="amount"
          placeholder="₦ Enter amount"
          className="md:rounded-[20px]w-auto rounded-[10px] pl-3 col-span-2 h-[50px] md:h-auto border-[2px] border-[#104D8E]"
        />
      </div>
      <h1 className="text-[25px] text-[#232B35] font-bold text-center mb-[20px]">
        Select Payment Method
      </h1>
      <div className="grid gap-y-8 mb-[30px] text-xl font-semibold md:flex justify-between md:px-10 px-6 lg:px-[300px]">
        <div className="flex text-nowrap items-center space-x-3">
          <input type="checkbox" className="w-5 h-5" />
          <p>Online payment</p>
        </div>
        <div className="flex text-nowrap space-x-2 md:space-x-7 lg:space-x-20">
          <div className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5" />
            <p>Bank transfer</p>
          </div>
          <div className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5" />
            <p>POS</p>
          </div>
        </div>
        <div className="flex text-nowrap items-center space-x-3">
          <input type="checkbox" className="w-5 h-5" />
          <p>Bank branch</p>
        </div>
      </div>
      <div className="lg:mt-[80px]">
        <h1 className="text-[25px] font-bold text-center">
          Payment Information
        </h1>
        <form className="font-semibold px-5 md:px-[100px] lg:px-[400px] pb-[60px]">
          <div className="justify-center">
            <h1 className="mt-2 md:mt-0">Card number</h1>
            <input
              type=""
              placeholder="**** **** **** ****"
              className="border px-2 w-full py-[12px] border-[#B8C4D4] bg-[#E2E8F0] rounded-[10px]"
            />
            <div className="md:flex md:space-x-3 justify-between mt-2 md:mt-6">
              <div>
                <h1>Expiration date</h1>
                <input
                  type="text"
                  className="border
                   border-[#B8C4D4] bg-[#E2E8F0] w-full rounded-[10px] py-[12px] px-[30px]"
                  placeholder="MM/YY"
                />
              </div>
              <div className="mt-2 md:mt-0">
                <h1>cvv</h1>
                <input
                  type=""
                  placeholder="enter CVV"
                  className="border border-[#B8C4D4] w-full bg-[#E2E8F0] rounded-[10px] py-[12px] px-[30px]"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="lg:mt-[80px]">
        <h1 className="text-[25px] font-bold text-center">
          Personal Information
        </h1>
        <form className="font-semibold px-5 md:px-[100px] lg:px-[400px] pb-5 md:pb-[60px]">
          <div className="justify-center">
            <div className="md:flex justify-between md:space-x-3 mt-2 md:mt-6">
              <div>
                <h1>Full name</h1>
                <input
                  type="text"
                  className="border border-[#B8C4D4] bg-[#E2E8F0] w-full rounded-[10px] py-[12px] px-[30px]"
                  placeholder="Enter full name"
                />
              </div>
              <div className="mt-2 md:mt-0">
                <h1>Email address</h1>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="border border-[#B8C4D4] bg-[#E2E8F0] w-full rounded-[10px] py-[12px] px-[30px]"
                />
              </div>
            </div>
            <div className="relative mt-2 md:mt-4">
              <h1>Cause</h1>
              <input
                type="select"
                placeholder="Select cause"
                className="border px-2 w-full py-[12px] border-[#B8C4D4] bg-[#E2E8F0] rounded-[10px] pl-8"
              />
              <div className="absolute inset-y-0 right-0 flex items-center mt-[15px] px-2">
                <MdOutlineKeyboardArrowDown className="text-gray-400" />
              </div>
            </div>
          </div>
        </form>
        <div className="px-5 md:px-[100px] lg:px-[400px]">
          <button
            className="flex items-center border mb-[30px] hover:bg-blue-900 w-full  hover:duration-700  py-3  rounded-lg justify-center bg-blue-600 text-white"
            onClick={() => setConfirmModalOpen(true)}
          >
            Make payment
            <span className="ml-3">
              <MdArrowForward />
            </span>
          </button>
        </div>
      </div>
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
      />
    </div>
  );
}
