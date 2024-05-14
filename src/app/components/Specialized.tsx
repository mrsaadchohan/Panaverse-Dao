"use client";
import { Button } from "@/components/ui/button";
// import Pic1 from "/pic1.png"
// import Pic1 from "/Hero.png"
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import QuarterBox from "./Quarter";
export const programsData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    // image: Pic1,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    // image: Pic1,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5,
      },
    ],
  },
  {
    slug: "cn",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    // image: Pic1,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "ac",
    header: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    // image: Pic1,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: 5,
      },
    ],
  },
  {
    slug: "Bio",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    // image: Pic1,
    quarters: [
      {
        header: "Quarter IV",
        description: "Bio-351: Python for Biologists",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5,
      },
    ],
  },
  {
    slug: "Npa",
    header: "Network Programmability and Automation Specialization",
    description:
      "GMore than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    // image: Pic1,
    quarters: [
      {
        header: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: 5,
      },
    ],
  },
];

const SpecializedTracks = () => {
  const [selectedItem, setSelectedItem] = useState("wmd");
  const selectedItemData = programsData.find(
    (item) => item.slug === selectedItem
  );

  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 gap-x-6 gap-y-8">
      {/* Left side */}
      <div className="top-28 self-start rounded-xl basis-8/12  py-8 px-8">
        <h1 className="text-[40px] font-bold">Specialized Tracks</h1>
        <p className="max-w-xl text-[17px] mt-6 text-[#4A5B5C] leading-[26px]">
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each.
        </p>
        <div className="bg-[#FFFFFF] border mt-10 py-10 px-10">
          <p className="text-[16px] text-[#00616C] font-bold">
            Specialized Program
          </p>
          <h3 className="text-[30px] font-bold max-w-xl">
            Web 3.0 (Blockchain) and Metaverse Specialization
          </h3>
          <p className="leading-[25px] max-w-screen-sm mt-5">
            This Web 3.0 and Metaverse specialization focuses on developing
            full-stack Web 3.0 and Metaverse experiences for the next generation
            of the internet by specializing in building worlds that merge the
            best of cutting-edge decentralized distributed blockchains with 3D
            metaverse client experiences.
          </p>
          <Button
            variant={"outline"}
            className="text-[#00616C] 
        border-[#5e5d5b] px-5 py-4 mt-5 text-[15px] hover:text-[#00616C]"
          >
            Learn More
            <ArrowRight className="ml-2" />
          </Button>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {selectedItemData?.quarters.map((item) => (
              <QuarterBox
                key={item.number}
                description={item.description}
                header={item.header}
                number={item.number}
                haveBorder={false}
              />
            ))}
          </div>
        </div>
      </div>
      {/* right side */}

      <div className="space-y-4 px-4 md:pt-48  basis-4/12">
        {programsData.map((item, id) => {
          return (
            <div
              onClick={() => setSelectedItem(item.slug)}
              key={item.slug}
              className="flex  items-center cursor-pointer"
            >
              <div className="flex-shrink-0 h-24 w-36">
                <Image
                  src={"/pic1.png"}
                  alt={"Image"}
                  width={110}
                  height={84}
                  className="h-24 object-cover rounded-md"
                />
              </div>
              <div>
                <h4 className="text-primary font-medium">
                  Specialized Program
                </h4>
                <h3 className="text-md font-semibold">{item.header}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecializedTracks;
