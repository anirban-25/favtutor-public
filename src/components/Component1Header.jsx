import React from "react";
import {
  MenuAlt1Icon,
  XIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";
function Component1Header() {
  return (
    <div className="bg-white p-6 w-full">
      <div className="flex items-center justify-between">
        <div className="w-10 text-black">
          <MenuAlt1Icon />
        </div>
        <div className="flex  justify-center items-center gap-x-5">
          <div className=" cursor-pointer bg-black rounded-lg text-sm md:text-base  text-white py-2 px-4 font-semibold flex justify-center items-center">
            <span className="w-4 mx-2">
              <ArrowLeftIcon />
            </span>
            <span>Previous</span>
          </div>
          <div className=" cursor-pointer bg-black text-sm md:text-base rounded-lg text-white py-2 px-4 font-semibold flex justify-center items-center">
            <span>Next</span>
            <span className="w-4 mx-2">
              <ArrowRightIcon />
            </span>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Component1Header;
