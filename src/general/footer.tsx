import { IoIosArrowRoundUp } from "react-icons/io";
import { MdOutlineCopyright } from "react-icons/md";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="lg:flex flex-col-2 text-center justify-between lg:px-[300px]">
      <h2 className="flex justify-center">
        Copyrights
        <span className="pt-[3px] mx-[2px]">
          <MdOutlineCopyright />
        </span>
        2024 <span className="text-blue-600 mx-[2px]">C4H</span> | All Rights
        Reserved
      </h2>
      <h2 className="mt-2 pb-2">
        Terms and Condition | Privacy Policy | Donate
      </h2>
      <button
        className="lg:hidden flex rounded bg-blue-600 justify-end ml-auto mt-6 px-3 py-3 text-white"
        onClick={scrollToTop}
      >
        <IoIosArrowRoundUp />
      </button>
    </div>
  );
}