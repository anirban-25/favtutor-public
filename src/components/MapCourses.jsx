import React from "react";
import MyCourses from "./MyCourses";

const MapCourses = () => {
  return (
    <div className="">
      <div className="md:justify-start md:pl-24 mt-10 text-3xl text-black font-bold justify-center flex mb-10 z-50">
        Your Courses
      </div>
      <div className="absolute inset-auto z-20 h-24 w-full -translate-y-1/2 rounded-full bg-gray-200 opacity-90 blur-xl"></div>
      <div className="max-h-[30rem]  w-full overflow-hidden overflow-y-auto no-scrollbar">
        <MyCourses className="" />
        <MyCourses />
        <MyCourses />
        <MyCourses />
      </div>
      <div className="absolute inset-auto z-20 h-24 w-full -translate-y-1/2 rounded-full bg-gray-200 opacity-90 blur-xl"></div>
    </div>
  );
};

export default MapCourses;
