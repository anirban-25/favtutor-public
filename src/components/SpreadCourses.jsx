import React from "react";

const SpreadCourses = () => {
  const topics = ["Java", "C", "Python"];
  return (
    <div className="md:w-96 ">
      <div className="flex justify-between text-black font-semibold text-lg md:text-xl">
        {topics.map((topic, i) => (
          <div className="hover:underline cursor-pointer" key={i}>{topic}</div>
        ))}
      </div>
    </div>
  );
};

export default SpreadCourses;
