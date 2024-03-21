import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { SparklesCore } from "./ui/sparkles";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "./ui/typewriter-effect";

async function HeroSection() {
  const words = [
    {
      text: "F",
    },
    {
      text: "a",
    },
    {
      text: "v",
    },
    {
      text: "T",
    },
    {
      text: "u",
    },
    {
      text: "t",
    },
    {
      text: "o",
    },
    {
      text: "r",
    },
  ];
  return (
    <div className="md:pt-40  w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:pb-0">
      <div className="pt-4 z-10 w-full text-center  ">
        <div className="flex flex-col justify-center ">
          <h1 className="flex w-full flex-col  justify-center relative mt-24 md:mt-10 text-4xl md:text-7xl font-bold bg-clip-text text-black  ">
            <TypewriterEffect words={words} className="text-black" />
          </h1>
          <div className="w-full flex justify-center">
            <div className="border-b-2 border-[#FB8800]  justify-center flex w-96" />
          </div>
          <div className=" flex justify-center ">
            <SparklesCore
              background="transparent"
              minSize={0.1}
              maxSize={2}
              particleDensity={1200}
              className="w-96 h-20"
              particleColor="#FB8800"
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[90%] rounded-3xl   mx-20">
            <p className="mt-4 px-2 pb-2  font-normal text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              fugit, nobis dolor inventore consectetur voluptas earum voluptate
              id ea dolorum esse, beatae delectus similique assumenda fuga sit
              aperiam atque rem porro vitae?
            </p>
          </div>
        </div>
        <div className="mt-4">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-[#FB8800] font-bold text-white border-gray-900 hover:bg-[#fc7600] ease-in transition "
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
