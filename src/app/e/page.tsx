import React, { useState } from "react";
import CourseRight from "../../components/CourseRight";
import CourseLeft from "../../components/CourseLeft";
import CourseLeft2 from "../../components/CourseLeft2";
type Props = {};

function courses({}: Props) {
  return (
      <div className="block md:flex border-none h-screen">
        <div
          className=" overflow-y-auto w-full md:w-[50%]"
          // onMouseDown={handleMouseDown}
        >
          <CourseLeft2 />
        </div>
        <div
          className="overflow-y-hidden w-full md:w-[50%]"
          // onMouseDown={handleMouseDown}
        >
          <CourseRight />
        </div>
      </div>
  );
}

export default courses;
