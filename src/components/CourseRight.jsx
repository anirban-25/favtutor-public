"use client";
import React, { useEffect, useState } from "react";
import Component2Header from "./Component2Header";
import CodeEditor from "./CodeEditor";
import axios from "axios";
import { Resizable } from "react-resizable";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/outline";
import { testApiEndpoint } from "../utils/api";
import { useAppContext } from "@/contexts/AppContext";
const CourseRight = () => {
  const { content, setContent, tryItYourself, setDebug } = useAppContext();
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  async function executeCode() {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: content }),
      };

      const response = await fetch(
        "http://localhost:5000/execute",
        requestOptions
      );
      console.log("response is ", response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.text();
    } catch (error) {
      console.error("Error executing code:", error);
      throw error;
    }
  }

  const submitCode = async () => {
    setLoader(true); // Set loader state to true to indicate loading
    setComplete(false); // Set complete state to false

    // Replace example code with the actual code to execute
    // Call executeCode function to execute the code
    executeCode()
      .then((response) => {
        const result = JSON.parse(response)
        // Assuming executeCode returns a response
        // Check if the response indicates an error
        if (response.error) {
          // If an error is returned, set the error state and clear the output state
          setError(result.error);
          setOutput("");
        } else {
          // If no error is returned, set the output state and clear the error state
          setOutput(result.output);
          setError("");
        }
      })
      .catch((error) => {
        // If an error occurs during the execution, set the error state and clear the output state
        setError("Error executing code");
        setOutput("");
        console.error("Error:", error);
      })
      .finally(() => {
        // Set loader state to false to indicate that loading has finished
        setLoader(false);
        // Set complete state to true to indicate that the execution is complete
        setComplete(true);
      });
  };

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [complete, setComplete] = useState(false);
  const [pythonCode, setPythonCode] = useState("# Write your Python code here");

  const handleCodeChange = (newCode) => {
    setPythonCode(newCode);
    setCode(newCode);
    setContent(newCode);
  };

  return (
    <div className=" overflow-y-hidden w-full min-h-screen flex flex-col  bg-[#202123]">
      <div className="flex-grow">
        <Component2Header />
        <CodeEditor code={tryItYourself} onChange={handleCodeChange} />

        <div className="flex flex-row justify-between px-10 bg-black pb-5 items-center">
          <div>
            {!complete ? (
              <div className="text-[#FB2D00] items-center flex">
                <div className="w-4 md:w-6 m-1">
                  <InformationCircleIcon />
                </div>
                <div className="font-bold text-lg">Pending</div>
              </div>
            ) : (
              <div className="text-[#00B448] items-center flex">
                <div className="w-6 m-1">
                  <CheckIcon />
                </div>
                <div className="font-bold text-lg">Completed Successfully</div>
              </div>
            )}
          </div>
          <div className="md:flex gap-x-5 pt-5">
            <div
              className=" cursor-pointer px-5 mb-1 text-xs md:text-base md:m-0 py-3 border-2 rounded-xl text-[#FB8800] border-[#FB8800] "
              onClick={() => setDebug(true)}
            >
              Debug with Chat-GPT
            </div>
            <div
              className="text-xs md:text-base cursor-pointer px-5 py-3 rounded-xl bg-[#FB8800] flex justify-center text-white border-[#FB8800] hover:bg-[#fc7600] transition ease-in"
              onClick={submitCode}
            >
              Run
            </div>
          </div>
        </div>
      </div>
      <Resizable
        style={{ maxHeight: "50vh", minHeight: "20px" }}
        height={200}
        axis="y"
      >
        <div>
          <div className="m-2 px-2 bg-[#202123] rounded-xl md:overflow-y-auto h-[11rem]  ">
            <div>
              {!loader ? (
                <div>
                  <h2>Output:</h2>

                  <pre className="text-white">{output}</pre>
                  <pre className="text-white">{error}</pre>
                </div>
              ) : (
                <div>
                  <div className="flex flex-col items-center justify-center min-h-[10vh]">
                    <div className="flex justify-center items-center py-3">
                      <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-white border-dotted" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-2 bg-black cursor-pointer"></div>
        </div>
      </Resizable>
    </div>
  );
};

export default CourseRight;
