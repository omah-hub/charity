import { createPortal } from "react-dom";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Modal from "../../../general/modal";
import Tab from "./payment_tab_selector";

interface CsrModalProps {
  isOpen: any;
  onClose: () => void;
}

export default function CsrModal({ isOpen, onClose }: CsrModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <Modal isOpen={isOpen}>
      <div className="md:h-[1000px] h-[700px] overflow-x-hidden overflow-y-scroll bg-white md:w-[650px] w-full px-8 ml-auto p-2">
        <div className="flex justify-between pt-8">
          <h1 className="text-2xl font-semibold">CSR</h1>
          <p
            className="font-semibold text-xl cursor-pointer w-fit p-2"
            onClick={onClose}
          >
            x
          </p>
        </div>
        <div
          className="overflow-y-auto overflow-x-hidden"
          style={{ maxHeight: "80vh" }}
        >
          <p className="pb-3 text-lg mt-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            odio corrupti, eius officiis tempora provident!
          </p>

          <form action="" className="pt-8 text-lg">
            <h1 className="font-semibold text-xl pb-4">
              Enter Your information
            </h1>
            <div className="grid md:flex md:space-x-4 md:justify-between pb-2">
              <div>
                <p>TIN number</p>
                <input
                  type="text"
                  placeholder="Enter TIN number"
                  className="border px-10 w-full py-[8px] border-[#B8C4D4] bg-[#E2E8F0] rounded-[10px] pl-8"
                />
              </div>
              <div className="relative">
                <h1>Name of organization</h1>
                <input
                  type="select"
                  placeholder="Pre-filled from TIN"
                  className="border px-10 w-full py-[8px] border-[#B8C4D4] bg-[#E2E8F0] rounded-[10px] pl-8"
                />
                <div className="absolute inset-y-0 right-0 flex items-center mt-[15px] px-2">
                  <MdOutlineKeyboardArrowDown className="text-gray-400" />
                </div>
              </div>
            </div>
            <div className="grid md:flex md:space-x-4 md:justify-between pb-2 mt-2">
              <div className="relative">
                <h1>CAC number</h1>
                <input
                  type="select"
                  placeholder="Enter CAC number"
                  className="border px-10 w-full py-[8px] border-[#B8C4D4] bg-[#E2E8F0] rounded-[10px] pl-8"
                />
                <div className="absolute inset-y-0 right-0 flex items-center mt-[15px] px-2">
                  <MdOutlineKeyboardArrowDown className="text-gray-400" />
                </div>
              </div>
              <div className="relative">
                <h1>Cause</h1>
                <input
                  type="select"
                  placeholder="Select cause"
                  className="border px-10 w-full py-[8px] border-[#B8C4D4] bg-[#E2E8F0] rounded-[10px] pl-8"
                />
                <div className="absolute inset-y-0 right-0 flex items-center mt-[15px] px-2">
                  <MdOutlineKeyboardArrowDown className="text-gray-400" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <p>Amount</p>
              <input
                type="text"
                placeholder="Enter amount"
                className="w-full border md:px-10 py-[8px] border-[#B8C4D4] bg-[#E2E8F0] rounded-[10px] pl-8"
              />
            </div>
            <h1 className="mt-8 font-semibold">
              Select your preferred payment method
            </h1>
          </form>
          <div>
            <Tab />
          </div>
        </div>
      </div>
    </Modal>,
    document.body
  );
}
