import React from "react";
import s from "../assets/s.png"
import m from "../assets/m.png";
import c from "../assets/c.png";
import { useState } from "react";


const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)

const handleClick = () => {

  setIsOpen(!isOpen)
}

  return (
    <div className="bg-b">
      <nav className="w-[80%] relative sm:justify-between sm:items-centr sm:flex  py-[1em] font-osw max-w-[1200px] mx-auto">
        <a href="">
          <img className=" w-[4em] h-[3em]" src={s} alt="" />
        </a>

        <div className=" sm:flex sm:gap-[4em] hidden sm:items-center ">
          <div>
            <ul className="text-white text-[18px] sm:flex sm:items-center sm:gap-[3em] uppercase ">
              <a href="">
                <li className="mb-[5px] ">home</li>
              </a>
              <a href="">
                <li className="mb-[5px] ">about</li>
              </a>
              <a href="">
                <li className="mb-[5px] ">contact</li>
              </a>
              <a href="">
                <li className="mb-[5px] ">sign in</li>
              </a>
            </ul>
          </div>
          <div className="">
            <button className="text-white transition   hover:text-black transform hover:scale-125  bg-br rounded-full px-[2em] py-[0.5em] uppercase">
              sign-up
            </button>
          </div>
        </div>

        <div
          onClick={handleClick}
          className="absolute  right-2 top-2 sm:hidden "
        >
          {isOpen ? (
            <img className="w-[2.5em]" src={c} alt="" />
          ) : (
            <img className="w-[2.5em] " src={m} alt="" />
          )}
        </div>
        {isOpen ? (
          <div className="sm:hidden">
            <ul className="text-white mb-[15px] text-[18px]  uppercase ">
              <a href="">
                <li className="mb-[5px] ">home</li>
              </a>
              <a href="">
                <li className="mb-[5px] ">about</li>
              </a>
              <a href="">
                <li className="mb-[5px] ">contact</li>
              </a>
              <a href="">
                <li className="mb-[5px] ">sign in</li>
              </a>
            </ul>

            <button className="text-white bg-br  rounded-full px-[1em] uppercase">
              sign-up
            </button>
          </div>
        ) : null}
      </nav>
    </div>
  );
};
export default Navbar;
