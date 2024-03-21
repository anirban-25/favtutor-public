"use client";
import { useMemo } from "react";
import {  ChevronDoubleRightIcon } from "@heroicons/react/solid";
const SumFrame = ({ exercise1, writeAProgramThatPrintsTh, propAlignSelf }) => {
  const sumFrameStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[16px_0px] text-left text-gray-600 "
      style={sumFrameStyle}
    >
      <div className="relative leading-[144%] z-[3]">
        <span className="text-black font-extrabold">{exercise1}</span>
        <span className="font-gilroy-regular ">{writeAProgramThatPrintsTh}</span>
      </div>
      <button className="cursor-pointer [border:none]  rounded-2xl overflow-hidden flex flex-row items-start justify-start gap-[0px_8px] z-[3]">
        <div className="flex flex-col items-start justify-start p-3 rounded-2xl bg-green-600">
          <div className="relative text-lg font-semibold text-white text-left">
            <div className="flex items-center gap-x-2 text-base">
              Try it yourself
              <div className="w-6">
                <ChevronDoubleRightIcon />
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default SumFrame;
