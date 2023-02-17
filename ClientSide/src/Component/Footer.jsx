import React from "react";
import { useCallback, useContext, useEffect, useState } from "react";
import { useQuize } from "../Context/QuizeContext";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { quize, addAns, nextQuize, isLast, getResult, currentQuizeIndex } =
    useQuize();
  const [ans, setAns] = useState();
  const navigate = useNavigate();
  function onFinalResult() {
    navigate("/result");
    getResult();
  }
  const continueHandler = useCallback(() => {
    addAns({ ...quize, ans });
    nextQuize();
    setAns();
  }, [ans, addAns, nextQuize, quize]);
  return (
    <div className="h-20 w-screen mt-14 p-3 flex justify-around items-center bg-[#F4F3F6]">
      <div className="md:block hidden">
        <progress
          className="rounded-3xl"
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
  );
};

export default Footer;
