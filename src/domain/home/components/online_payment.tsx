import { MdArrowForward } from 'react-icons/md';

export default function Online() {
  return (
    <div>
      <div className="md:text-xl text-lg">
        <p className="mt-6">Card number</p>
        <input
          placeholder=" **** **** **** ****"
          className="w-full border py-2 mb-4 mt-1 bg-[#E2E8F0] rounded-lg"
        />
        <div className="grid md:flex md:justify-between">
          <div>
            <p>Expiration date</p>
            <input
              type="text"
              placeholder="MM/YY"
              className="border w-full py-2 mb-4 mt-1 md:px-2"
            />
          </div>
          <div>
            <p>CVV</p>
            <input
              type="text"
              placeholder="***"
              className="border w-full py-2 mb-4 mt-1 px-2"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <input type="checkbox" />
        <label>I agree to make a payment of £2000 to Name of cause</label>
      </div>
      <button className="flex items-center border w-full py-4 mt-8 rounded-lg justify-center bg-blue-600 text-white">
        Make payment
        <span className="ml-3">
          <MdArrowForward />
        </span>
      </button>
    </div>
  );
}
