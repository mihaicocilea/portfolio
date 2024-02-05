import React from "react";
import Typed from "typed.js";
import MemojiImage from "../../../assets/images/memoji.png";

const Memoji = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hi, I'm Mihai",
        "Jr. Frontend Developer",
        "Available for opportunities",
      ],
      typeSpeed: 100,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {/* Memoji Icon */}
        <img src={MemojiImage} className="w-[140px] h-[140px]" alt=""></img>
        <div className="flex items-center justify-between bg-[#3f4055] text-white font-[500] rounded-3xl px-5 py-2">
          {/* Green point on Typed Text */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#61ffb8] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#61ffb8]"></span>
          </span>
          {/* Typed Text */}
          <p className="ml-3 font-[500]">
            <span ref={el} />
          </p>
        </div>
      </div>
    </>
  );
};
export default Memoji;
