import { createPortal } from "react-dom";
import ModalConfirmation from "../../../../../general/modal_confirmation";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import PaymentModal from "../../../../home/components/paymentModal";


interface PaymentModalProps {
  isOpen: any;
  onClose: () => void;
}

export default function ConfirmModal({ isOpen, onClose }: PaymentModalProps) {
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  if (!isOpen) return null;
  
  return createPortal(
    <ModalConfirmation isOpen={isOpen}>
      <div className="bg-white w-full h-[700px] md:w-[650px] md:h-[1000px] overflow-y-scroll overflow-x-hidden px-8 ml-auto pb-[20px] mt-6 pt-4">
        <div className="flex justify-between">
          <h1 className="font-bold text-poppins text-2xl">
            Donation Confirmation
          </h1>
          <p
            className="font-semibold text-xl cursor-pointer w-fit p-2"
            onClick={onClose}
          >
            x
          </p>
        </div>
        <p className="font-medium">
          You are about to make a donation of 1000o to the
          <br />
          "No more hunger" cause
        </p>
        <div className="mt-[50px]">
          <h1 className="font-bold text-xl">Details</h1>
          <div className="flex justify-between mt-[30px]">
            <p className="text-[#8A98AD] ">Payment method</p>
            <p>Online payment</p>
          </div>
          <div className="flex justify-between mt-[30px]">
            <p className="text-[#8A98AD] ">Card type</p>
            <p>Master card</p>
          </div>
          <div className="flex justify-between mt-[30px]">
            <p className="text-[#8A98AD] ">Full name</p>
            <p>Otor John</p>
          </div>
          <div className="flex justify-between mt-[30px]">
            <p className="text-[#8A98AD] ">email address</p>
            <p>otorjohn@gmail.com</p>
          </div>
          <div className="flex justify-between mt-[30px]">
            <p className="text-[#8A98AD] ">Course</p>
            <p>Girl Child Education</p>
          </div>
          <div className="flex justify-between mt-[80px]">
            <p className="text-[#8A98AD] ">Amount donated</p>
            <p>₦20000000.00</p>
          </div>
        </div>
        <button
          className="w-full rounded-lg bg-blue-600 py-3 mt-[100px] flex justify-center text-white"
          onClick={() => setPaymentModalOpen(true)}
        >
          Confirm Payment
          <span className="items-center ml-4 mt-1">
            <FaArrowRight />
          </span>
        </button>
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setPaymentModalOpen(false)}
        />
      </div>
    </ModalConfirmation>,
    document.body
  );
}
