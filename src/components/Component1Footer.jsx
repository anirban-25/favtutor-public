"use client";
import { useAppContext } from "@/contexts/AppContext";
import {
  ArrowsExpandIcon,
  ChevronDoubleRightIcon,
  PaperAirplaneIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";

function Component1Footer() {
  const { content, setDebug, debug } = useAppContext();
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");
  const [loader, setLoader] = useState(false);
  const [click, setClick] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const debugCode = async () => {
    if (debug == true) {
      setClick(true);
      setLoader(true);
      const debugMe = `explain me the error if there is any , the code is, ${content}`;
      setDebug(false);
      setInputValue("Debugging the code");
      try {
        const response = await fetch("http://localhost:7000/chatme", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: debugMe }), // Assuming inputValue is the value from an input field
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data.result);
        setLoader(false);

        // Update the response state to include the new response along with the previous ones
        setResponse((prev) => [...prev, `Debugging is on...\n`]);
        setResponse((prev) => [...prev, `${data.result}\n`]);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  var count = 0;
  var topic = "if-else";
  var language = "python";
  const prompt = `provide me more examples about ${topic} in ${language}`;
  const explain = `explain me the code ${content}`;

  const provideExample = async () => {
    setClick(true);
    setLoader(true);
    setInputValue("Providing more examples..");
    try {
      const response = await fetch("http://localhost:7000/chatme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }), // Assuming inputValue is the value from an input field
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data.result);
      setLoader(false);

      // Update the response state to include the new response along with the previous ones
      setResponse((prev) => [...prev, `Examples are here..\n`]);
      setResponse((prev) => [...prev, `${data.result}\n`]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const provideExplaination = async () => {
    setLoader(true);
    console.log(content);
    setClick(true);

    setInputValue("Providing explanation..");
    try {
      const response = await fetch("http://localhost:7000/chatme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: explain }), // Assuming inputValue is the value from an input field
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data.result);
      setLoader(false);

      // Update the response state to include the new response along with the previous ones

      setResponse((prev) => [...prev, `Explanation down below..\n`]);
      setResponse((prev) => [...prev, `${data.result}\n`]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    debugCode();
  }, [debug]);

  const getResponse = async () => {
    setClick(true); // Assuming setClick is a state setter function for a state variable used to track if the button is clicked
    setLoader(true);
    try {
      const response = await fetch("http://localhost:7000/chatme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: inputValue }), // Assuming inputValue is the value from an input field
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data.result);
      0;

      // Update the response state to include the new response along with the previous ones
      setLoader(false);
      setResponse((prev) => [...prev, `${data.result}\n`]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  function LoaderImg() {
    return (
      <div>
        <div className="flex flex-col items-center justify-center min-h-[10vh]">
          <div className="flex justify-center items-center py-3">
            <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-green-800 border-dotted" />
          </div>
        </div>
      </div>
    );
  }
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
  return (
    <div className="mb-2 self-stretch bg-white flex flex-col items-start justify-start p-4 md:p-8 box-border gap-[17px_0px] max-w-full text-left text-xl text-gray-900 font-gilroy-medium">
      <div className="w-full">
        {click && (
          <div className="self-stretch flex flex-col items-start justify-start pt-4 pb-10 pr-0 pl-px box-border relative gap-[15px_0px] max-w-full bg-[#4dc17b4f] rounded-md">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[1px] bottom-[0px] left-[0px] rounded-lg bg-forestgreen-200 box-border z-[2] border-[1px] border-solid border-gainsboro" />
            <div className="flex flex-row items-start justify-start py-0 px-[15px] box-border w-full">
              <div className="flex flex-row items-start justify-start gap-[0px_8px] w-full">
                <div className="flex w-full relative leading-[144%] z-[3] justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-8 mx-2">
                      <UserCircleIcon />
                    </div>
                    {inputValue}
                  </div>

                  <div className="text-black w-6 cursor-pointer transition ease-in">
                    {!isFullScreen ? (
                      <ArrowsExpandIcon onClick={() => toggleFullScreen()} className="transition transform ease-in"/>
                    ) : (
                      <div className="text-black w-12 transition ease-out">
                        <ArrowsExpandIcon
                          onClick={() => toggleFullScreen()}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-gray-400 border-1" />
            <div className="w-full flex flex-row items-start justify-start py-0 px-[18px] box-border max-w-full text-base font-gilroy-regular">
              <div className="w-full relative leading-[152%] z-[3]">
                <div className={`${isFullScreen ? "h-screen z-10" : ""}`}>
                  <div
                    className={`overflow-x-auto w-full m-0 font-serif text-base font-light ${
                      isFullScreen ? "max-h-screen" : "max-h-36"
                    } overflow-y-auto`}
                  >
                    {loader ? (
                      LoaderImg()
                    ) : (
                      <pre className="whitespace-pre-wrap">
                        {response} <br />
                      </pre>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full  md:gap-[20px] ">
        <div className="hidden md:flex justify-start pt-[9px] px-0 pb-0 items-center">
          <div className="relative leading-[144%] z-[1] font-bold justify-centerflex font-gilroy-medium">
            Write your message below
          </div>
        </div>
        <div className=" flex flex-row items-center justify-between gap-[0px_16px] max-w-full ">
          <div>
            <button className="cursor-pointer py-2 px-[31px] bg-gray-600 rounded-xl flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-gray-600 hover:bg-gray-700 transform transition ease-in hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
              <div
                className="relative  text-sm md:text-base font-gilroy-bold text-white text-left "
                onClick={provideExplaination}
              >
                Explain again
              </div>
            </button>
          </div>
          <div>
            <button className="cursor-pointer [border:none] py-2 px-5 bg-darkorange flex-1 rounded-xl flex flex-row items-start justify-start box-border  whitespace-nowrap z-[1] transform transition ease-in bg-[#FB8800] hover:bg-chocolate-100">
              <div
                className="relative text-sm md:text-base font-gilroy-bold text-white text-left "
                onClick={provideExample}
              >
                Provide more examples
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#EEEEEE] self-stretch rounded-2xl bg-whitesmoke flex flex-row items-start justify-start py-[10px] px-8 box-border relative max-w-full z-[1] text-lg font-gilroy-regular">
        <div className="h-14 w-full relative rounded-2xl bg-whitesmoke hidden max-w-full z-[0]" />
        <input
          type="text"
          id="exampleInput"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
          className="w-full border-none bg-whitesmoke bg-[#EEEEEE] text-gray-600 text-lg p-1 outline-none"
        />
        <div className="w-8 text-gray-500 rotate-90 cursor-pointer">
          <PaperAirplaneIcon onClick={getResponse} />
        </div>
      </div>
    </div>
  );
}

export default Component1Footer;
