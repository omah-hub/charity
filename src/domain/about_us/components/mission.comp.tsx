// import mission from "../../../assets/images/mission.png";

export default function Mission() {
  return (
    <div className="bg-[#061220] mb-[80px] lg:mb-[150px]">
      <div className="lg:px-0 ml-auto max-w-[1440px]">
        <div className="w-full lg:flex">
          <div className="px-5 pt-6 lg:pt-0 lg:mt-[100px] lg:w-[50%]">
            <h1 className="font-papyrus text-[#4EE5AE] text-3xl pb-4">
              Our Mission
            </h1>
            <p className="font-poppins text-[28px] md:text-[40px] w-[500px] text-white leading-[55px] font-bold">
              Bringing <span className="text-[#4EE5AE]">Change </span>To <br />
              Humanity One Roundup <br />
              At A Time
            </p>
            <p className="text-white text-lg pb-16 lg:pb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              excepturi a reprehenderit porro non soluta vitae deleniti tempore
              itaque ullam? Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="lg:w-[50%] w-full">
            <img className="" src="/src/assets/images/mission.png" alt="/" />
          </div>
        </div>
        {/* <img src={mission} /> */}
      </div>
    </div>
  );
}
