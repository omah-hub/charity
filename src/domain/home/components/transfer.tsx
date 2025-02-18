import { useState } from 'react'
import { MdArrowForward } from 'react-icons/md';
import PaymentModal from './paymentModal';

export default function Transfer() {
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  return (
    <div className='md:text-xl text-lg'>
      <div>
        <h1 className="mt-8 font-semibold">
          Kindly follow these instructions to make payment using bank transfer.
        </h1>
        <span className="text-red-700">
          Please note that you will be required to enter your transaction ID to
          complete
        </span>
        <p className="mt-5">1. Go to your bank app and select make transfer</p>
        <p className="mt-3">
          2. select the bank "GT bank" and input this account number -
          0119023811
        </p>
        <p className="mt-3 mb-8">3. Complete the transaction</p>
        <p className="font-medium mb-[40px]">
          After completing the transfer, click on the "I Have Made The payment"
          button below to complete payment
        </p>
      </div>
      
      <button
        onClick={() => setPaymentModalOpen(true)}
        className="flex items-center border w-full py-4 mt-8 rounded-lg justify-center bg-blue-600 text-white"
      >
        I Have Made The Payment
        <span className="ml-3">
          <MdArrowForward />
        </span>
      </button>
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
      />
    </div>
  );
}
