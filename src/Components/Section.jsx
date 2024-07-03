import React from "react";
import h from "../assets/h.jpg";

const Section = () => {
  return (
    <div>
      <div className="w-[80%] mb-5 mx-auto max-w-[1200px] text-center lg:gap-[3em] lg:flex lg:justify-between hidden  lg:py-[5em]">
        <div className="mb-[2em] ">
          <h1 className="text-br font-bold text-[30px] font-osw">
            Mobile-first
          </h1>
          <p className="self-center font-mon text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="mb-[2em] ">
          <h1 className="text-br font-bold text-[30px] font-osw  ">
            Efficient
          </h1>
          <p className="self-center font-mon text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="mb-[2em]">
          <h1 className="text-br font-bold text-[30px] font-osw">Done right</h1>
          <p className="self-center font-mon text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
      <div className="w-[80%] sm:block lg:flex lg:gap-[5em]  mt-[3em] mb-5 mx-auto max-w-[1200px]">
        <div className="lg:w-[65%] sm:w-[100%]">
          <h1 className="pb-[1em] text-[36px]  text-br font-osw">
            It doesn’t have to be so hard
          </h1>
          <p className="pb-[2em] text-[21px] font-mon">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>

          <img className="pb-[2em] w-[100%]" src={h} alt="" />

          <p className="text-[21px] font-mon">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <div className="text-center mt-[2em] lg:block  lg:w-[35%]  sm:gap-8 sm:flex sm:w-[100%]  text-white">
          <div className="bg-bl py-[2em]   px-[2.5em] sm:mb-0 lg:mb-5 mb-5">
            <h1 className="text-[30px] pb-4  font-osw">Break it down</h1>
            <p className="font-mon text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-bl py-[2em] px-[2.5em] sm:mb-0 lg:mb-5 mb-5">
            <h1 className="text-[30px] pb-4  font-osw">Work your way up</h1>
            <p className="font-mon text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-bl px-[2.5em] py-[2em] ">
            <h1 className="text-[30px] pb-4  font-osw">Break it down</h1>
            <p className="font-mon text-[18px]">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section;
