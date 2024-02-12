import Button from "../Button/Button";

const ConnectWithMe = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-gradient-to-r from-[#c0f7a9] to-[#83c5b7] rounded-2xl shadow-[rgba(0,0,15,0.5)_10px_10px_5px_0px] mx-5 my-10">
          <div className="flex flex-col px-7 py-2 text-[#151e28] basis-3/5">
            <h1 className="text-[28px] font-[600]">
              Let's Connect and Create Something Amazing!
            </h1>
            <p className="">
              Thank you for visiting, and I look forward to discussing how my
              passion for frontend development can contribute to your team's
              success.
            </p>
          </div>
          <div className="flex justify-end my-7 font-[500] px-5 py-5 basis-2/5">
            <Button
              text={"Connect with me"}
              primary
              buttonStyle={"!bg-[#081822] text-white rounded-lg !p-5"}
              link={"https://www.linkedin.com/in/mihai-cocilea/"}
              target
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ConnectWithMe;
