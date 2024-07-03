import React from "react";

const Main = () => {
  return (
    <div className=" bg-bl w-full ] ">
      <div className="w-[80%] sm:py-[7em] py-[4em] sm:flex sm:gap-4 mx-auto max-w-[1200px]">
        <div className=" w-[100%] sm:w-[50%] sm:pt-0   pb-4">
          <h1 className="text-[30px] leading-none sm:text-[90px] text-white  font-bold font-osw">
            Responsive layouts{" "}
            <span className="text-br ]"> don't have to be a struggle </span>
          </h1>
        </div>
        <div className="sm:w-[50%]  flex flex-col justify-end ">
          <p className="font-mon text-white  text-[24px] pb-[1em]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div>
            <button className="bg-br sm:text-[34px] uppercase font-osw font-bold text-white rounded-full px-[1.5em] py-[12px]">
              i want to learn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
