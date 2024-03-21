"use client";
import React, { useState } from "react";
import courseimg from "../../public/python.png";
import {
  ArrowCircleUpIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronUpIcon,
  LockOpenIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import { CheckCircleIcon, ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
const MyCourses = () => {
  const [arrowClicked, setArrowClicked] = useState(false);
  const [locked, setLocked] = useState(false);
  const contents = [
    "Introduction",
    "What is Python",
    "Introduction",
    "What is Python",
    "Introduction",
    "What is Python",
    "Introduction",
    "What is Python",
  ];
  return (
    <div className="p-2 md:mx-20 text-black">
      <div className="p-5 rounded-2xl bg-white transition-all  transform ease-in ">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-5 items-center">
            <div>
              <Image
                src={courseimg}
                alt="Image description"
                className="w-10 md:w-20"
              />
            </div>
            <div className="flex flex-col justify-start">
              <div className="font-bold text-base md:text-lg">
                Introduction to Python 3
              </div>
              <div className="text-sm md:text-base ">12 Lessons(1hr 5mins)</div>
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <div className="bg-[#FB8800] items-center gap-x-2 rounded-2xl font-bold  text-white p-4 flex px-6">
              <div className="text-lg">
                <Link href="/buycourse">Buy Now</Link>
              </div>
              <div className="w-5">
                <ArrowRightIcon />
              </div>
            </div>
            {arrowClicked ? (
              <div
                className="w-5 text-black font-bold cursor-pointer"
                onClick={() => setArrowClicked(false)}
              >
                <ChevronUpIcon />
              </div>
            ) : (
              <div
                className="w-5 text-black font-bold cursor-pointer"
                onClick={() => setArrowClicked(true)}
              >
                <ChevronDownIcon />
              </div>
            )}
          </div>
        </div>
        {arrowClicked && (
          <div className="mt-10 transition-all transform ease-in">
            {contents.map((content, i) => (
              <div className="" key={i}>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className="text-black w-7 rounded-full border-2 border-gray-500 p-1 ">
                      <div className="">
                        <LockClosedIcon />
                      </div>
                    </div>
                    <div className="text-base px-2">{content}</div>
                  </div>
                  <div className="block">
                    <div className="text-gray-400 text-base font-medium w-6">
                      <CheckCircleIcon />
                    </div>
                  </div>
                </div>
                <div className="h-2 mx-3 bg-black border-none w-1"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
