import React from "react";
import StackIcon from "tech-stack-icons";

const TechStackIcons = ({ techStackList, iconStyle, iconMargin }) => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {techStackList.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col text-white font-[500] items-center m-5 lg:m-8 ${iconMargin}`}
          >
            <StackIcon className={`${iconStyle}`} name={item.name} />
            <p className="mt-5">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default TechStackIcons;
