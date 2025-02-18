import image from "../../../../../assets/images/Rectangle 293.png";

export default function Detail() {
  return (
    <div className="px-4 mx-auto max-w-[1400px] mt-[150px] mb-[100px]">
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="bg-blue-100 text-blue-600 inline px-6 py-2 rounded-lg">
          Education
        </h1>
        <h1 className="font-extrabold text-[32px] w-[310px] md:w-[700px] md:text-6xl wrap leading-[50px] md:leading-[80px] mt-[20px]">
          Lorem Ipsum Dolor Sit
          
          <span className="text-blue-600"> Amet</span> Consectetur
        </h1>
      </div>
      <img src={image} alt="/" className="w-full" />
      <p className="md:text-center text-left mt-8 leading-[40px] font-medium">
        Lorem ipsum dolor sit amet consectetur. Scelerisque dignissim eget in
        faucibus velit risus at. Adipiscing id in viverra faucibus morbi et. Sed
        suspendisse est mauris tincidunt turpis tempor praesent est felis. Lacus
        donec pharetra in interdum dictum nec dolor. Elementum in nibh non et
        donec quis ullamcorper pellentesque. Quisque urna curabitur nulla at
        vitae vitae. A ultrices ullamcorper vestibulum ipsum elit tortor iaculis
        pulvinar. Quis eu feugiat pellentesque non leo dolor velit feugiat.
        Mauris tempor faucibus penatibus mauris nunc facilisi nunc.
      </p>
    </div>
  );
}
