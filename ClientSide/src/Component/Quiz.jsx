import React, { useCallback, useContext, useEffect, useState } from "react";

import Title from "./Title";
import A from "../assets/icons/A.svg";
import B from "../assets/icons/B.svg";
import C from "../assets/icons/C.svg";
import Correct from "../assets/icons/correct.svg";
import { useQuize } from "../Context/QuizeContext";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center bg-[ #E5E5E5] h-screen sticky">
      <Title />
      <Box navigate={navigate} />
    </div>
  );
}

const Box = ({ navigate }) => {
  const { quize, addAns, nextQuize, isLast, getResult, currentQuizeIndex } =
    useQuize();
  const [ans, setAns] = useState();

  console.log("quize", quize);

  const continueHandler = useCallback(() => {
    addAns({ ...quize, ans });
    nextQuize();
    setAns();
  }, [ans, addAns, nextQuize, quize]);

  if (!quize) return null;

  function onFinalResult() {
    navigate("/result");
    getResult();
  }

  return (
    <div className="boxx ">
      <div className="flex flex-col flex-1 justify-center items-center flex-wrap max-w-screen-md mx-auto">
        <div className="h-20 w-full mt-[50px] ">
          <h1 className="text-[#191D63] text-[28px] font-bold text-center  font-sans">
            {quize.question}
          </h1>
        </div>

        <div className="flex flex-col mt-7">
          {quize.options.map((option, index) => {
            const imageIcon =
              option.id === ans
                ? Correct
                : option.id === 1
                ? A
                : option.id === 2
                ? B
                : C;
            return (
              <div
                key={option.id}
                onClick={() => {
                  setAns((prev) => (prev = option.id));
                }}
                className={`h-20 w-[510px] flex ${
                  option.id === ans ? "bg-[#31CD63]" : "bg-[#F4F3F6]"
                }  justify-around items-center mt-[25px] rounded-[6.36px] cursor-pointer focus:outline-none hover:bg-[#31CD63]`}
              >
                <div>
                  <img src={imageIcon} alt="" />
                </div>
                {/* <input
                  type="radio"
                  name="options"
                  // className="sr-only"
                  checked={option.id === ans}
                  onChange={() => {
                    setAns(option.id);
                  }}
                /> */}
                <div className="flex items-center gap-5">
                  <p className="font- text-[24px]">{option.text}</p>
                  <p className="font-semibold text-[20px]">{option.text2}</p>
                  <p>{option.text3}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-20 w-full mt-14 flex justify-around items-center bg-[#F4F3F6] ">
        <div className="rounded-full md:block hidden">
          <progress
            className="rounded-2xl"
            value={currentQuizeIndex}
            max={5}
          ></progress>
        </div>
        <button
          type="button"
          onClick={isLast ? onFinalResult : continueHandler}
          className="h-14 w-64 rounded-[8px] text-gray bg-[#747475] hover:bg-[#31CD63]"
        >
          {isLast ? "Finish" : "Continue"}
        </button>
      </div>
    </div>
  );
};
