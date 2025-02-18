import { createPortal } from "react-dom";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Modal from "../../../general/modal";
import Tab from "./payment_tab_selector";

interface paymentModalProps {
  isOpen: any;
  onClose: () => void;
}

export default function BasketModal({ isOpen, onClose }: paymentModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <Modal isOpen={isOpen}>
      <div
        className={`bg-white w-full h-screen md:w-[650px] overflow-hidden px-8 ml-auto pb-[20px] transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between pt-8">
          <h1 className="text-2xl font-semibold">Basket of Funds</h1>
          <p
            className="font-semibold text-xl cursor-pointer w-fit p-2 -mt-4"
            onClick={onClose}
          >
            X
          </p>
        </div>
        <div
          className="overflow-y-auto overflow-x-hidden"
          style={{ maxHeight: "80vh" }}
        >
          <p className="pb-3 md:text-xl mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            odio corrupti, eius officiis tempora provident!
          </p>

          <form action="" className="pt-8 md:text-xl lg:text-[18px]">
            <h1 className="font-semibold text-xl pb-4 -mt-2 ">
              Enter Your Information
            </h1>
            <div className="mt-3 flex flex-col gap-1">
              <form className="">
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-sm font-medium mb-2 -mt-4"
                    >
                      Name of organization/individual
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter name"
                      className="shadow appearance-none bg-[#E2E8F0] border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="country"
                      className="block text-gray-700 text-sm font-medium mb-2 -mt-4"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      placeholder="Select country"
                      className="shadow appearance-none bg-[#E2E8F0] border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="role"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Currency
                    </label>
                    <select
                      id="currency"
                      className="shadow appearance-none bg-[#E2E8F0] border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="" disabled selected hidden>
                        Select currency
                      </option>
                      <option value="frontend">Naira</option>
                      <option value="backend">Dollars</option>
                      <option value="business">Pounds</option>
                      <option value="uiux">Yen</option>
                      <option value="product">Cedis</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="role"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Cause
                    </label>
                    <select
                      id="cause"
                      className="shadow appearance-none bg-[#E2E8F0] border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option className="" value="">
                        Select cause
                      </option>
                      <option value="">Cause 1</option>
                      <option value="">Cause 2</option>
                      <option value="">Cause 3</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="country"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      id="country"
                      placeholder="Enter Amount"
                      className="shadow bg-[#E2E8F0] border rounded-xl w-full py-4 px-3 "
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="grid md:flex md:text-nowrap md:justify-between md:space-x-4 pb-2"></div>
            {/* ... rest of your form elements ... */}
            <h1 className="mt-4 font-semibold">
              Select your preferred payment method
            </h1>
          </form>
          <div className="mt-6">
            <Tab />
          </div>
        </div>
      </div>
    </Modal>,
    document.body
  );
}
