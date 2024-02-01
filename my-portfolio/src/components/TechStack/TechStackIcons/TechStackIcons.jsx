import React from "react";
import StackIcon from "tech-stack-icons";
import techStackList from "./techStackList";

const TechStackIcons = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center lg:max-w-[800px] bg-white/[.04] rounded-2xl mx-5">
        {techStackList.map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-white font-[500] items-center m-5"
          >
            <StackIcon name={item.name} />
            <p className="mt-5">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default TechStackIcons;
