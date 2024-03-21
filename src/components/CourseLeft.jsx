import React from "react";
import Component1Header from "./Component1Header";
import Component1Container from "./Component1Container";
import Component1Footer from "./Component1Footer";

const CourseLeft = () => {
  return (
    <div className="w-full overflow-x-hidden h-screen bg-white">
      <Component1Header />
      <div className="w-full border-gray-300 border-4"></div>
      <div className="p-4">
        <Component1Container />
      </div>
      <div className="w-full border-gray-300 border-4"></div>
      <div>
        <Component1Footer />
      </div>
    </div>
  );
};

export default CourseLeft;
