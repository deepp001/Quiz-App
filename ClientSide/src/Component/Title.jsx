import React from "react";
import headerImg from "../assets/img/headerImg.png";
import Cross from "../assets/icons/cross.svg";

const Title = () => {
  return (
    <>
      <div className="flex justify-around items-center my-12">
        <div className="flex p-2 rounded-md bg-slate-200 justify-around items-center">
          <img src={headerImg} alt="/" />
          <h1 className="text-titleColor font-semibold text-xl pl-2">200</h1>
        </div>
        <h1 className="font-semibold text-2xl">Fantacy Quiz #156</h1>
        <div className="">
          <button type="button" className="rounded-full bg-[#F4F3F6]">
            <img src={Cross} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Title;
