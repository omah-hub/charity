import { FaArrowRight } from "react-icons/fa6";
import logo from "../assets/images/C4HLogo.png";
import contact from "../assets/images/contact.png";
import mail from "../assets/images/mail.png";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { TbBrandInstagram } from "react-icons/tb";
import { IoIosArrowRoundUp } from "react-icons/io";
import image from "../assets/images/information1.png";
import imageNews from "../assets/images/information2.png";
import { Link, NavLink } from "react-router-dom";




export default function Information() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="px-4 mx-auto max-w-[1400px]">
      <div className="lg:flex justify-between bg-[#061220] pb-4 px-4 mx-auto max-w-[1400px] -mb-[100px] relative bg-gradient-to-r from-[#040d17] via-[#1c150f] to-[#040d17]">
        <div>
          <h1 className="font-poppins text-white text-2xl md:text-4xl font-bold leading-[30px] md:leading-[50px] pt-[40px] mb-6 ">
            Give your change to <br /> make a change
          </h1>
          <p className="text-white lg:mt-8 md:leading-7">
            Give your change to make a change Lorem ipsum dolor sit amet
            consectetur
            <br /> adipisicing elit. Alias doloremque, eius labore ipsum iure
            reiciendis.
          </p>
        </div>
        <NavLink to="/donate">
          <button className="flex w-full lg:w-auto text-white bg-blue-600 items-center justify-center my-4 text-nowrap lg:mt-[40px] px-6 lg:px-[80px] py-4 rounded-lg hover:bg-blue-900 hover:duration-700">
            Make a donation
            <FaArrowRight className="ml-4" />
          </button>
        </NavLink>
      </div>
      <div className="bg-[#F2F8FF] pb-[40px]">
        <div className="flex flex-col items-center lg:flex-row px-4 mx-auto max-w-[1400px] pt-[120px] flex-row-1 justify-between">
          <div className="bg-white px-[100px] ">
            <img
              src={logo}
              alt="/"
              className="w-[600px] md:w-[300px] h-[90px] lg:w-auto lg:h-auto"
            />
          </div>
          <div className="flex space-x-2 px-[100px] mt-8 lg:mt-4">
            <img src={contact} className=" h-[70px] lg:h-12 lg:w-12 " alt="/" />
            <div className="text-nowrap md:text-2xl">
              <p className="font-bold">contact number</p>
              <p>(+234)8130-000-00 </p>
            </div>
          </div>
          <div className="flex space-x-2 px-[100px] mt-8 lg:mt-4">
            <img
              src={mail}
              className=" h-[70px] mr-2 lg:h-12 lg:w-12"
              alt="/"
            />
            <div className="text-nowrap md:text-2xl">
              <p className="font-bold">Email address</p>
              emailinquiry@c4h
            </div>
          </div>
        </div>
        <div className="flex flex-col  mt-5 lg:mt-0 lg:flex-row px-4 mx-auto max-w-[1400px] justify-evenly pt-[30px]">
          <div className="first">
            <h1 className="font-poppins font-bold">About Us</h1>
            <p className="lg:w-[300px] leading-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              harum ducimus repellat fuga sunt nulla quasi soluta nihil, magnam
              aliquid!
            </p>
            <div className="flex mt-4 space-x-6">
              <TiSocialFacebook className="rounded bg-blue-600 text-white lg:w-6 lg:h-6 w-10 h-10 mr-4" />
              <TiSocialTwitter className="rounded bg-blue-600 text-white lg:w-6 lg:h-6 w-10 h-10 mr-4" />
              <TbBrandInstagram className="rounded bg-blue-600 text-white lg:w-6 lg:h-6 w-10 h-10 mr-4" />
            </div>
          </div>
          <div className="font-poppins space-y-3 mt-8 lg:mt-0">
            <h1 className="font-bold">Useful Links</h1>
            <div className="md:flex lg:grid md:space-x-8 lg:space-x-0 justify-around">
              <p>Home</p>
              <p>About Us</p>
              <p>Causes</p>
              <p>Donate</p>
              <p>Beneficiaries</p>
            </div>
          </div>
          <div className="font-poppins mt-8 lg:mt-0">
            <h1 className="font-bold pb-3">Recent News</h1>
            <div className="md:flex lg:grid justify-between">
              <div className="flex pb-3 space-x-2">
                <img src={image} alt="/" />
                <div>
                  <h1 className="text-l">The standard titile of the news</h1>
                  <h1 className="text-sm">April18,2024</h1>
                </div>
              </div>
              <div className="flex space-x-2">
                <img src={imageNews} alt="/" />
                <div>
                  <h1 className="text-l">The standard titile of the news</h1>
                  <h1 className="text-sm">April18,2024</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="font-poppins w-full lg:w-[300px] mt-8 lg:mt-0">
            <h1 className="font-bold">Newsletter</h1>
            <p>
              Sign up to our newsletter and never miss out an important
              information
            </p>
            <div className="mt-2 relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-3 w-full relative pl-2"
              />
              <button className="rounded bg-blue-600 text-white px-2 py-2 ml-[-90px] mt-1 absolute">
                Subscribe
              </button>
            </div>
            <button
              className="hidden lg:flex rounded bg-blue-600 justify-end ml-auto mt-6 px-3 py-3 text-white"
              onClick={scrollToTop}
            >
              <IoIosArrowRoundUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
