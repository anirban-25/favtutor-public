"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { UserButton, UserProfile, currentUser } from "@clerk/nextjs";
import { ArrowRightIcon } from "@heroicons/react/solid";

function Navbar({
  className,
  check,
  name,
}: {
  className?: string;
  check?: boolean;
  name?: string|null|undefined;
}) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 border-3  border-gray-100 rounded-3xl inset-x-0 max-w-5xl  mx-5 md:mx-auto  z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="w-full">
          <div className="flex justify-between items-center w-full ">
            <div className="text-white text-lg md:text-2xl font-bold pl-4 md:pl-10">
              <div className="block md:flex gap-x-4">
                <UserButton afterSignOutUrl="/" />
                <div className="flex">
                  Welcome&nbsp;
                  <div className="text-lg md:text-2xl text-[#FB8800]">
                    {name},
                  </div>
                </div>
              </div>
              <div className="hidden md:flex text-[#D6D6D6] font-thin text-sm py-5">
                Hi, we are pleased to welcome you on our platform. Check your
                courses here.{" "}
              </div>
            </div>
            <div className=" bg-[#FB8800] flex items-center gap-x-2 p-2 md:py-4 md:px-7 mr-10 text-white  md:font-bold rounded-2xl text-sm md:text-base">
              <MenuItem setActive={setActive} active={active} item="Courses">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/courses/python">Python</HoveredLink>
                  <HoveredLink href="/courses/c">C/C++</HoveredLink>
                  <HoveredLink href="/java">Java</HoveredLink>
                </div>
              </MenuItem>
              <div className="w-5">
                <ArrowRightIcon />
              </div>
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;
