"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import Image from "next/image";
import card1 from "../../public/card1.jpg";
const FeaturedCourses = () => {
  const projects = [
    {
      title: "Python Basic",
      image: "card1.jpg",
      description: "2024 Web Development Bootcamp",
      rating: 4.3,
      price: "1256",
      link: "https://stripe.com",
    },
    {
      title: "Python Basic",
      image: "card1.jpg",
      description: "2024 Web Development Bootcamp",
      rating: 4.3,
      price: "1256",
      link: "https://stripe.com",
    },
    {
      title: "Python Basic",
      image: "card1.jpg",
      description: "2024 Web Development Bootcamp",
      rating: 4.3,
      price: "1256",
      link: "https://stripe.com",
    },
    {
      title: "Python Basic",
      image: "card1.jpg",
      description: "2024 Web Development Bootcamp",
      rating: 4.3,
      price: "1256",
      link: "https://stripe.com",
    },
    {
      title: "Python Basic",
      image: "card1.jpg",
      description: "2024 Web Development Bootcamp",
      rating: 4.3,
      price: "1256",
      link: "https://stripe.com",
    },
    {
      title: "Python Basic",
      image: "card1.jpg",
      description: "2024 Web Development Bootcamp",
      rating: 4.3,
      price: "1256",
      link: "https://stripe.com",
    },
  ];
  return (
    <div className="md:py-12 md:mx-20 bg-gray-200">
      <div
        className="
      w-full"
      >
        <div className="w-full">
          <h2 className="md:justify-start md:pl-4 text-3xl  justify-center mt-20 flex text-black font-bold ">
            Featured Courses
          </h2>
        </div>
      </div>
      <div className="m-3 py-5 rounded-2xl border-2 border-white ">
        <div className=" px-5">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
