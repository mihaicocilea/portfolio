import Memoji from "./Memoji/Memoji";

const Home = () => {
  return (
    <>
      <Memoji />
      <h1 className="text-[32px] text-center text-white font-[600] my-5 px-5">
        Welcome to my <br />
        digital humble abode
      </h1>
      <p className="container mx-auto text-center text-white/[.5] font-[500] my-5 px-10 sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[35%] xl:max-w-[25%]">
        I’m a junior Frontend Developer. <br />
        My interest lies in brand experience, and user experience.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-4 my-10 font-[600]">
        <a
          href="/somefile.txt"
          className="text-black bg-white rounded-full px-10 py-2"
          download
        >
          Download CV
        </a>
        <a
          href="#"
          className="text-white border border-white rounded-full px-[60px] py-2"
        >
          Let's talk
        </a>
      </div>
    </>
  );
};
export default Home;
