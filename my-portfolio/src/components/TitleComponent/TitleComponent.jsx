import Divider from "../Divider/Divider";
const TitleComponent = ({ title, subtitle, text }) => {
  return (
    <>
      <div className="flex flex-col text-center">
        <h2 className="font-[700] text-[18px] uppercase text-[#3EBA86]">
          {subtitle}
        </h2>
        <h1 className="text-[28px] text-white font-[600] px-5 mt-[-10px]">
          {title}
        </h1>
        <p className="text-white/[.6] font-[500] mt-3 px-5 whitespace-pre-line max-w-[80%] sm:max-w-[60%] mx-auto">
          {text}
        </p>
      </div>
      <Divider />
    </>
  );
};
export default TitleComponent;
