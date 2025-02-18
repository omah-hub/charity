import { MdArrowForward } from "react-icons/md";
import ModalPayment from "../../../general/modalpayment";
import { createPortal } from "react-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface PaymentModalProps {
  isOpen: any;
  onClose: () => void;
}

export default function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleFinishClick = () => {
    onClose(); // Call the onClose function if it does something important
    navigate("/"); // Navigate to the home page
  };

  return createPortal(
    <ModalPayment isOpen={isOpen}>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center items-center bg-white p-[80px]">
          <span>
            <FaRegCheckCircle className="w-14 h-14 mb-[30px] ml-[120px] text-green-500" />
          </span>
          <h1 className="text-2xl font-bold mb-6">
            Payment of $2000 Confirmed
          </h1>
          <button
            className="flex items-center ml-[100px] px-6 py-2 bg-blue-600 text-white rounded-md"
            onClick={handleFinishClick}
          >
            Finish
            <MdArrowForward className="ml-2" />
          </button>
        </div>
      </div>
    </ModalPayment>,
    document.body
  );
}
