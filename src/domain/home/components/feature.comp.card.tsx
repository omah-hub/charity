interface FeatureCardProps {
  imageSrc: any;
  title: string;
  description: string;
  rectangle: any;
  line: any;
}


const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  return (
    <div className="rounded-2xl p-8 mt-6 bg-[#071627] md:w-[400px] lg:w-full">
      <div>
        <div className="w-[30px] h-[30px] mb-5 flex">
          <img src={props.imageSrc} alt="/" className="h-12 w-12" />
          <h1 className="font-poppins text-nowrap pl-5 font-semibold text-white">
            {props.title}
          </h1>
        </div>
        <div className="flex py-4">
          <img src={props.rectangle} className="h-[1px]" alt="/" />
          <img src={props.line} alt="/"/>
        </div>
      </div>
      <p className="lg:w-[400px] text-white">{props.description}</p>
    </div>
  );
}

export default FeatureCard;