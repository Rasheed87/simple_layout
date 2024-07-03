import React from 'react'

const Footer = () => {
  return (
    <div className="bg-bl">
      <div className="w-[80%] mt-[10em] text-white max-w-[1200px] py-[3em]  mx-auto">
        <div className="sm:flex mb-[1em] text-[21px] flex justify-center sm:text-[70px] font-bold font-osw sm:justify-center">
          just scratching the surface
        </div>
        <div className="w-[100%] sm:gap-[4em] sm:flex  sm:text-start text-center  gap-[2em]">
          <div className="  pb-9  lg:w-[35%]">
            <h1 className="text-[21px] pb-4 font-osw font-bold text-br">
              About our company
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="sm:flex gap-8 sm:justify-between   w-[100%] lg:w-[65%] ">
            <div>
              <a href="">
                <h1 className="mb-5 font-osw text-[21px] text-br font-bold">
                  Getting around
                </h1>
              </a>
              <a href="">
                {" "}
                <p className="pb-5 font-mon text-[16px]">home</p>
              </a>
              <a href="">
                <p className="pb-5 font-mon text-[16px]">About</p>
              </a>
              <a href="">
                <p className="pb-5 font-mon text-[16px]">contact</p>
              </a>
            </div>
            <div>
              <a href="">
                <h1 className="pb-5 font-osw text-[21px] text-br font-bold">
                  Other things
                </h1>
              </a>
              <a href="">
                <p className="pb-5 font-mon text-[16px] ">Lorem ipsum </p>
              </a>
              <a href="">
                <p className="pb-5 font-mon text-[16px]">dolor </p>
              </a>
              <a href="">
                <p className="pb-5 font-mon text-[16px]">sit amet </p>
              </a>
              <a href="">
                <p className="pb-5 font-mon text-[16px]">consectetur</p>
              </a>
            </div>
            <div>
              <a href="">
                <h1 className="pb-5 font-osw text-[21px] text-br font-bold">
                  And more
                </h1>
              </a>
              <a href="">
                <p className="pb-5 font-mon text-[16px]">Lorem ipsum </p>
              </a>
              <a href="">
                <p className="pb-5 font-mon text-[16px]">dolor </p>
              </a>
              <a href="">
                <p className="mb-5 font-mon text-[16px]">sit amet </p>
              </a>
              <a href="">
                {" "}
                <p className="pb-5 font-mon text-[16px]">consectetur</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer