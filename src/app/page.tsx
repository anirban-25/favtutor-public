import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MyCourses from "@/components/MyCourses";
import MapCourses from "@/components/MapCourses";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import SignUpNavbar from "@/components/SignUpNavbar";
import { AppProvider } from "@/contexts/AppContext";

import { UserButton, UserProfile, currentUser } from "@clerk/nextjs";
async function Home(){
  
  var check: boolean = false;
  const user = await currentUser();
  if (user) {
    check = true;
  }

  return (
    <AppProvider>
      <main className="min-h-screen bg-gray-200 ">
        {check ? <Navbar check={check} name={user?.firstName} /> : <div><SignUpNavbar/></div>}
        <div className="text-2xl text-center">
          <HeroSection />
          <MapCourses/>
          <FeaturedCourses />
        </div>
      </main>
    </AppProvider>
  );
}

export default Home;
