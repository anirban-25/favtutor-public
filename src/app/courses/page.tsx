"use client";
import React from "react";
import { Boxes } from "../../components/ui/background-boxes";
import { cn } from "@/utils/cn";
import Link from "next/link";
import SpreadCourses from "../../components/SpreadCourses"
export default function BackgroundBoxesDemo() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="h-48 md:h-72 relative w-full overflow-hidden bg-gray-200 flex flex-col items-center justify-center rounded-lg ">
        <Link href="/">
          <div className="text-gray-200 font-semibold absolute top-4 md:top-10 left-4 md:left-10 z-30 bg-[#FB8800] p-2 text-xs md:text-base rounded-3xl">
            Home Page
          </div>
        </Link>
        <div className="absolute inset-0 w-full h-full bg-gray-200 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1
          className={cn(
            "md:text-4xl text-xl text-black font-extrabold relative z-20"
          )}
        >
          Courses
        </h1>
        <p className="text-center mt-2 text-neutral-900 font-semibold relative z-20">
          Welcome to the Courses Section of{" "}
          <span className="text-[#FB8800] font-bold text-xl">Favtutor</span>
        </p>
      </div>
      <div className="mx-10 mt-10">

      <SpreadCourses/>
      </div>
    </div>
  );
}
