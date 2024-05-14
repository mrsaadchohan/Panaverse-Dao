import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Buttons from "./Button";

function Hero() {
  return (
    <div className="w-full flex flex-col md:flex-row lg:mt-20 mt-7 justify-between flex-1 ">
      {/* left side */}
      <div className="px-5">
        <p className="lg:text-[16px] text-[12px] text-[#00616C] font-bold text-base/6">
          Presidential Initiative for Artificial Intelligence and Computing
          (PIAIC)
        </p>
        <h1 className="lg:text-[40px] text-[30px] max-w-lg font-bold">
          Certified Web 3.0 and Metaverse Developer
        </h1>
        <div className="mt-5 text-[#4A5B5C] font-[400px] lg:leading-6">
          <p className="lg:text-[16px] text-[14px] max-w-lg">
            A One and Quarter Years Panaverse DAO Earn as you Learn Program
            Getting Ready for the Next Generation of the Internet
          </p>
          <p className="lg:text-[16px] text-[14px] max-w-lg mt-5">
            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
            Cloud, Edge, Ambient Computing/IoT, Network Automation, and
            Bioinformatics Technologies
          </p>
        </div>
        <Link href={"https://www.piaic.org/"} target="_blank">
          <Buttons text="Learn More" />
        </Link>
      </div>
      {/* rightside */}
      <div className="">
        <Image
          src={"/Hero.png"}
          width={634}
          height={558}
          alt="Hero"
          className="lg:-mt-24"
        />
      </div>

      <div></div>
    </div>
  );
}

export default Hero;
