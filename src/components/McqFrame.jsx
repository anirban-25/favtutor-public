"use client";
import { useMemo, useState } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
const McqFrame = ({
  exercise1,
  writeAProgramThatPrintsTh,
  propAlignSelf,
  options,
}) => {
  const sumFrameStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[16px_0px] text-left text-lg text-gray-600 font-gilroy-bold"
      style={sumFrameStyle}
    >
      <div className="relative leading-[144%] z-[3]">
        <span className="text-black font-extrabold ">{exercise1}</span>
        <span className="font-gilroy-regular ">
          {writeAProgramThatPrintsTh}
        </span>
        <div className="mt-2 flex flex-col space-y-1 text-gray-500">
          {options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center cursor-pointer ${
                selectedOption === option && "font-extrabold text-gray-600"
              }`}
            >
              <input
                type="radio"
                name="fruits"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className="mr-2 cursor-pointer"
              />
              <span
                className={`text-sm block-dot mr-2 ${
                  selectedOption === option ? "bg-black" : "bg-transparent"
                }`}
              ></span>
              {option}
            </label>
          ))}
          <p className="text-base pt-2">
            Selected Option: <span className="text-gray-700">{selectedOption}</span>
          </p>
        </div>
      </div>
      <div className="text-black text-lg"></div>
    </div>
  );
};

export default McqFrame;
