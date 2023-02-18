import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstnce";

export const QuizeContext = createContext();

export function QuizeProvider(props) {
  const [quizeList, setQuizeList] = useState([]);
  const [ansList, setAnsList] = useState([]);
  const [currentQuizeIndex, setCurrentQuizeIndex] = useState(0);

  console.log(ansList);

  const loadQuize = useCallback(async () => {
    const res = await axiosInstance.get("questions");
    setQuizeList(res.data);
  }, []);

  const nextQuize = useCallback(() => {
    setCurrentQuizeIndex((val) => val + 1);
  }, []);

  const addAns = useCallback(async (data) => {
    setAnsList((val) => [...val, data]);
  }, []);

  const getResult = useCallback(
    async (setResult) => {
      const res = await axiosInstance.post("questions/checkAns", ansList);
      setResult(res.data);
    },
    [ansList]
  );

  useEffect(() => {
    loadQuize();
  }, []);

  const value = useMemo(
    () => ({
      loadQuize,
      nextQuize,
      addAns,
      getResult,
      quize: quizeList[currentQuizeIndex],
      ansList,
      isLast: quizeList.length <= currentQuizeIndex + 1,
      currentQuizeIndex,
    }),
    [quizeList, currentQuizeIndex, ansList]
  );

  return (
    <QuizeContext.Provider value={value}>
      {props.children}
    </QuizeContext.Provider>
  );
}

export const useQuize = () => useContext(QuizeContext);
