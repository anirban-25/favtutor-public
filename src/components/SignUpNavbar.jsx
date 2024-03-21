import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
const SignUpNavbar = () => {
  return (
    <div
      className={cn(
        "fixed top-10 border-3  border-gray-100 rounded-3xl inset-x-0 max-w-5xl  mx-5 md:mx-auto  z-50"
      )}
    >
      <div className="w-full">
        <div className="flex bg-[#202123] justify-between items-center w-full rounded-3xl">
          <div className="bgtext-white text-lg md:text-2xl font-bold pl-4 md:pl-10 p-5">
            <div className="block md:flex ">Welcome&nbsp;</div>
            <div className="hidden md:flex text-[#D6D6D6]  text-base font-semibold py-5">
              Hi, we are pleased to welcome you on our platform. Check your
              courses here.
            </div>
          </div>
          <div className="items-center md:px-4  ">
            <Link href="/sign-up">
              <div className="mb-1  bg-[#FB8800] flex items-center md:gap-x-2 p-2 md:py-4 md:px-7 mr-10 text-white  md:font-bold rounded-2xl text-sm md:text-base">
                Register<span className="flex md:hidden">/Login</span>
                <div className="w-5">
                  <ArrowRightIcon />
                </div>
              </div>
            </Link>
            <div className=" text-center text-xs md:text-sm font-thin hidden md:flex ">
              <span className="">Already Registered?</span>
              <Link href="/sign-in">
                <span className=" underline">Login</span>
              </Link>
              &nbsp;here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpNavbar;
