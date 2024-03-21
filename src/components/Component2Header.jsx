import React from "react";
import { DocumentDuplicateIcon, RefreshIcon } from "@heroicons/react/outline";
const Component2Header = () => {
  return (
    <div>
      <div className="md:flex block justify-between p-4 py-8 items-center">
        <div className="text-white font-bold mb-5 md:mb-0 text-3xl md:text-3xl pl-10 md:block flex justify-center">
          Online Compiler
        </div>
        <div className="flex gap-x-4 justify-between md:justify-center">
          <div className="cursor-pointer justify-between bg-white px-6 items-center py-3 rounded-lg font-bold text-base w-32  flex">
            <div className="text-black">Copy</div>
            <div className="w-6 text-black">
              <DocumentDuplicateIcon />
            </div>
          </div>
          <div className="cursor-pointer justify-between bg-white px-6 items-center py-3 rounded-lg font-bold text-base w-32  flex">
            <div className="text-black">Reset</div>
            <div className="w-6 text-black">
              <RefreshIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component2Header;
