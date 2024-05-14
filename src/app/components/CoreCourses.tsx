import { Button } from "@/components/ui/button";
import React from "react";
import Buttons from "./Button";
import Link from "next/link";

const programs = [
  {
    Quarter: "Quarter I",
    text: "CS-101: Object-Oriented Programming using TypeScript",
    id: 1,
  },
  {
    Quarter: "Quarter II",
    text: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    id: 2,
  },
  {
    Quarter: "Quarter III",
    text: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    id: 3,
  },
];

function CoreCourses() {
  const header = "Core Courses \n (Common in All Specializations)";
  return (
    <div className="w-full mt-36 px-6 ">
      <p className="text-[16px] text-[#00616C] font-bold">Program of Studies</p>
      <h2 className="text-[40px] font-bold whitespace-pre-line leading-tight">
        {header}
      </h2>
      <p className="text-[15px] mt-5 text-[#4A5B5C]">
        Every participant of the program will start by completing the following
        three core courses.
      </p>
      <Link href={"https://www.piaic.org/"} target="_blank">
        <Buttons text="Enroll Now" />
      </Link>
      <div className="mt-2 flex flex-col md:flex-row py-20 gap-x-4 gap-y-4 max-w-screen-xl ">
        {programs.map((information, id) => {
          return (
            <div
              key={id}
              className="border rounded-md flex flex-1 flex-col relative  px-8 py-10"
            >
              <h4 className="font-bold text-lg">{information.Quarter}</h4>
              <p className="mt-2 text-slate-600 max-w-md z-0">
                {information.text}
              </p>
              <div className="absolute top-0 right-10 text-slate-100 text-[140px] font-bold -z-10">
                {information.id}
              </div>
            </div>
          );
        })}

       
      </div>
    </div>
  );
}

export default CoreCourses;
