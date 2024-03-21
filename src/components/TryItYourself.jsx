"use client";
import React, { useEffect, useState } from "react";
import CodeEditor2 from "./CodeEditor2";
import { useAppContext } from "../contexts/AppContext";
import { ChevronDownIcon, ChevronDoubleRightIcon, ChevronUpIcon} from "@heroicons/react/outline";

const TryItYourself = () => {
  const { toggleContent, setContent, setTryItYourself } = useAppContext();
  const [pythonCode, setPythonCode] = useState(`x = 10\nif x > 5:\n    print('x is greater than 5')\nelse:\n    print('x is not greater than 5')`);
  const [expanded, setExpanded] = useState(true);

  const handleCodeChange = (newCode) => {
    setPythonCode(newCode);
  };

  useEffect(() => {
    setContent(pythonCode);
  }, [pythonCode]);

  const copyPasteCode = () => {
    toggleContent();
    setContent(pythonCode);
    setTryItYourself(pythonCode);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative">
      <button className="absolute top-2 right-2 text-gray-500" onClick={toggleExpand}>
        {!expanded? (<ChevronDownIcon className="w-6 h-6" />):(<ChevronUpIcon className="w-6 h-6" />)}
      </button>
      <div className="mb-4">
        <div className="text-black font-bold text-2xl ">Python Elif</div>
        <div className="text-gray-800 font-light max-w-2xl">
          The elif keyword is Python&apos;s way of saying &quot;if the previous conditions were not true, then try this condition&quot;.
        </div>
      </div>
      {expanded && (
        <div className="border-2 border-gray-300 rounded-xl p-2">
          <div className="font-bold text-xl text-black ">
            Example
            <div className="p-2 mt-4 border-2 border-gray-300 rounded-xl">
              <div className="font-medium text-base">
                <div>
                  <CodeEditor2 code={pythonCode} onChange={handleCodeChange} />
                </div>
              </div>
              <div className="flex">
                <button className="m-4 p-3 bg-[#00B448] rounded-2xl" onClick={copyPasteCode}>
                  <div className="flex items-center gap-x-2 ">
                    <div className="text-lg text-white font-semibold">Try it Yourself</div>
                    <div className="w-5 text-white">
                      <ChevronDoubleRightIcon />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TryItYourself;