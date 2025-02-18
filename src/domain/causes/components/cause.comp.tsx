import Sidebar from "../../../general/sidebar";
import image from "../../../assets/images/Rectangle 290.png";
import Card from "./cause.comp.card";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdArrowForwardIos,
  MdArrowBackIos,
} from "react-icons/md";
import { useState } from "react";




export default function Cause() {
  // for small screens
  const tabs = [
    { name: "Education", count: 12 },
    { name: "Social Services", count: 6 },
    { name: "Children and Elderlies", count: 20 },
    { name: "End Hunger", count: 16 },
    { name: "Health Care", count: 21 },
    { name: "Environment", count: 5 },
  ];
   const [filterOpen, setFilterOpen] = useState(false);
   const [activeTab, setActiveTab] = useState("All Causes");
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 4;

   const toggleFilter = () => {
     setFilterOpen(!filterOpen);
   };

    const cardContent = [
      {
        image: image,
        title: "Education",
        heading: "lorem ipsum dolor sit amet consectetur",
        description:
          "Lorem ipsum dolor sit amet consectetur. Aliquet ridiculus ut nunc magna venenatis felis morbi. Risus senectus morbi venenatis dui porttitor. Felis id nisi rutrum maecenas egestas tincidunt congue aenean.",
        donation: "₦600k",
      },
      {
        image: image,
        title: "Health Care",
        heading: "lorem ipsum dolor sit amet consectetur",
        description:
          "Lorem ipsum dolor sit amet consectetur. Aliquet ridiculus ut nunc magna venenatis felis morbi. Risus senectus morbi venenatis dui porttitor. Felis id nisi rutrum maecenas egestas tincidunt congue aenean.",
        donation: "₦600k",
      },
      {
        image: image,
        title: "End Hunger",
        heading: "lorem ipsum dolor sit amet consectetur",
        description:
          "Lorem ipsum dolor sit amet consectetur. Aliquet ridiculus ut nunc magna venenatis felis morbi. Risus senectus morbi venenatis dui porttitor. Felis id nisi rutrum maecenas egestas tincidunt congue aenean.",
        donation: "₦600k",
      },
      {
        image: image,
        title: "Education",
        heading: "lorem ipsum dolor sit amet consectetur",
        description:
          "Lorem ipsum dolor sit amet consectetur. Aliquet ridiculus ut nunc magna venenatis felis morbi. Risus senectus morbi venenatis dui porttitor. Felis id nisi rutrum maecenas egestas tincidunt congue aenean.",
        donation: "₦600k",
      },
      {
        image: image,
        title: "Education",
        heading: "lorem ipsum dolor sit amet consectetur",
        description:
          "Lorem ipsum dolor sit amet consectetur. Aliquet ridiculus ut nunc magna venenatis felis morbi. Risus senectus morbi venenatis dui porttitor. Felis id nisi rutrum maecenas egestas tincidunt congue aenean.",
        donation: "₦600k",
      },
      {
        image: image,
        title: "Education",
        heading: "lorem ipsum dolor sit amet consectetur",
        description:
          "Lorem ipsum dolor sit amet consectetur. Aliquet ridiculus ut nunc magna venenatis felis morbi. Risus senectus morbi venenatis dui porttitor. Felis id nisi rutrum maecenas egestas tincidunt congue aenean.",
        donation: "₦600k",
      },
      {
        image: image,
        title: "Education",
        heading: "lorem ipsum dolor sit amet consectetur",
        description:
          "Lorem ipsum dolor sit amet consectetur. Aliquet ridiculus ut nunc magna venenatis felis morbi. Risus senectus morbi venenatis dui porttitor. Felis id nisi rutrum maecenas egestas tincidunt congue aenean.",
        donation: "₦600k",
      },
      {
        image: image,
        title: "Education",
        heading: "lorem ipsum dolor sit amet consectetur",
        description:
          "Lorem ipsum dolor sit amet consectetur. Aliquet ridiculus ut nunc magna venenatis felis morbi. Risus senectus morbi venenatis dui porttitor. Felis id nisi rutrum maecenas egestas tincidunt congue aenean.",
        donation: "₦600k",
      },
    ];

     const filteredContent =
       activeTab === "All Causes"
         ? cardContent
         : cardContent.filter((content) => content.title === activeTab);

    const totalPages = Math.ceil(filteredContent.length / itemsPerPage);

    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    const paginatedContent = filteredContent.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

  return (
    <div className="mx-auto max-w-[1400px] relative">
      <div className="pb-[100px]">
        <h1 className="text-center pb-8 font-papyrus text-2xl md:text-4xl text-blue-600 font-bold">
          Causes
        </h1>
        <p className="text-4xl md:text-6xl font-poppins text-center font-extrabold leading-[45px] md:leading-[75px]">
          How We Bring <span className="text-blue-600">change</span> To
          <br />
          Humanity
        </p>
      </div>
      {/* for small screens */}
      <button
        className="flex justify-between px-4 items-center w-screen bg-blue-500 text-white lg:hidden py-2 md:py-3 md:px-8 rounded"
        onClick={toggleFilter}
      >
        All Causes (80)
        <span className="lg:hidden " onClick={toggleFilter}>
          {filterOpen ? (
            <MdOutlineKeyboardArrowUp className="h-10 w-10" />
          ) : (
            <MdOutlineKeyboardArrowDown className="h-10 w-10" />
          )}
        </span>
      </button>
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          filterOpen ? "max-h-[1000px] px-3 mt-5 md:px-8" : "max-h-0"
        }`}
      >
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`flex mb-10 font-semibold duration-700 ease-in-out ${
              activeTab === tab.name
                ? "text-blue-600 hover:text-gray-500 cursor-pointer"
                : "hover:text-gray-500 cursor-pointer"
            }`}
            onClick={() => {
              setActiveTab(tab.name);
              setCurrentPage(1);
              if (window.innerWidth < 1024) {
                setFilterOpen(false); // Close the filter on small screens
              }
            }}
          >
            <p className="mr-auto">{tab.name}</p>
            <p>({tab.count})</p>
          </div>
        ))}
      </div>
      <div className="lg:flex lg:space-x-12">
        <div className="hidden lg:block w-1/4 relative">
          <Sidebar activeTabs={activeTab} setActiveTabs={setActiveTab} />
        </div>
        <div className="lg:w-3/4 lg:space-y-4 pb-6 lg:max-h-full lg:overflow-auto duration-700 ease-in-out">
          {paginatedContent.map((content, index) => (
            <Card key={index} {...content} />
          ))}
          <div className="flex justify-center lg:justify-start mx-8 mb-[20px] space-x-5 mt-6 lg:mt-0">
            <button
              className="border-[#E5F0FF] flex justify-center items-center rounded-full border w-10 h-10 active:bg-blue-600"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <MdArrowBackIos />
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`border-[#E5F0FF] rounded-full border w-10 h-10 active:bg-blue-600 ${
                  currentPage === index + 1 ? "bg-blue-600 text-white" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="border-[#E5F0FF] flex justify-center items-center rounded-full border w-10 h-10 active:bg-blue-600"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <MdArrowForwardIos className="items-center " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
