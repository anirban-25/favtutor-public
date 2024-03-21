import McqFrame from "./McqFrame";
import SumFrame from "./SumFrame";
import { UserAddIcon, UserCircleIcon } from "@heroicons/react/outline";
const Component1Container = () => {
  const options = [
    "object-oriented programming",
    "structured programming",
    "functional programming",
    "all of the mentioned",
  ];
  return (
    <div className="flex-1 rounded-lg bg-white box-border flex flex-col items-start justify-start py-4 pr-[21px] pl-4 font-bold gap-[16px_0px] max-w-full z-[1] text-left text-lg text-black font-gilroy-bold border-[1px] border-solid border-gainsboro">
      <div className="w-[848px] h-[797px] relative rounded-lg bg-white box-border hidden max-w-full border-[1px] border-solid border-gainsboro" />
      <div className="relative text-2xl z-[2] md:text-2xl">Exercises</div>
      <div className="self-stretch rounded-lg bg-white box-border flex flex-col items-start justify-start pt-4 pb-[22px] pr-[29px] pl-4 gap-[32px_0px] max-w-full z-[2] border-[1px] border-solid border-gainsboro mq450:gap-[16px_0px]">
        <div className="w-[808px] h-[519px] relative rounded-lg bg-white box-border hidden max-w-full border-[1px] border-solid border-gainsboro" />
        <SumFrame
          exercise1="Exercise 1:"
          writeAProgramThatPrintsTh=" Write a program that prints the sum of all even numbers from 1 to 100 using a loop."
        />
        <SumFrame
          exercise1="Exercise 2:"
          writeAProgramThatPrintsTh=" Write a program to find if the given number is prime or not."
          propAlignSelf="unset"
        />
        <SumFrame
          exercise1="Exercise 3:"
          writeAProgramThatPrintsTh=" Write a program to check if the given number is Armstrong or not."
          propAlignSelf="unset"
        />
        <McqFrame
          exercise1="Exercise 4:"
          writeAProgramThatPrintsTh=" Which type of Programming does Python support? (Select one)"
          options={options}
          propAlignSelf="unset"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-4 pb-10 pr-0 pl-px box-border relative gap-[15px_0px] max-w-full bg-[#4dc17b4f] rounded-md">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[1px] bottom-[0px] left-[0px] rounded-lg bg-forestgreen-200 box-border z-[2] border-[1px] border-solid border-gainsboro" />
        <div className="flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[0px_8px] max-w-full">
            <div className="relative leading-[144%] z-[3] ">
              <div className="flex items-center">
                <div className="w-8 mx-2">
                  <UserCircleIcon />
                </div>
                Please explain me more about python?
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-gray-400 border-1" />
        <div className="flex flex-row items-start justify-start py-0 px-[18px] box-border max-w-full text-base font-gilroy-regular">
          <div className="relative leading-[152%] z-[3]">
            <p className="m-0 font-serif text-base font-light">
              Python is an interpreted, object-oriented, high-level programming
              language with dynamic semantics developed by Guido van Rossum. It
              was originally released in 1991. Designed to be easy as well as
              fun, the name &quot;Python&quot; is a nod to the British comedy group Monty
              Python.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1Container;
