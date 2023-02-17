import React, { useEffect, useState } from "react";
import { useQuize } from "../Context/QuizeContext";
import Present from "../assets/icons/Present.svg";
import Score from "../assets/img/m.png";
import Correct from "../assets/img/correct.png";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();

  const { getResult } = useQuize();
  const [result, setResult] = useState({});
  useEffect(() => {
    getResult(setResult);
    return () => {};
  }, []);
  function onFirstQuize() {
    navigate("/");
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-[75px]">
          <img src={Present} alt="/" />
        </div>
        <h2 className="text-[#191D63] font-semibold text-[22px] mt-[35px]">
          Result Of Fantesy Quiz
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <div className="h-[81px] w-[510px] bg-gray flex justify-evenly items-center mt-[25px] rounded-[6.36px]">
          <img src={Score} alt="" />
          <h1 className="font-normal text-[16px]">SCORE GAINED</h1>
          <h1 className="font-semibold text-[16px]">{`${
            result.result * 30
          }`}</h1>
        </div>
        <div className="h-[81px] w-[510px] bg-gray flex justify-evenly items-center rounded-[6.36px]">
          <img src={Correct} alt="" />
          <h1 className="font-normal text-[16px]">CORRECT ANS</h1>
          <h1 className="font-semibold text-[16px]">{`${result.result}`}</h1>
        </div>
        <div className="h-[88px] w-[1440px] mt-[120px] flex justify-center items-center bg-[#F4F3F6]">
          <button
            onClick={onFirstQuize}
            type="button"
            className="h-[60px] w-[260px] rounded-[8px] bg-[#31CD63]"
          >
            okay
          </button>
        </div>
      </div>
    </>
  );
}
