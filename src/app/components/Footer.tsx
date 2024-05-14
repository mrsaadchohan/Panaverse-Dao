import {
  FaFacebookF,
  FaGithub,
  FaGithubSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import Image from "next/image";
import React from "react";

const footer = [
  {
    name: "Web 3.0 and Metaverse Developer",
  },
  {
    name: "Artificial Intelligence",
  },
  {
    name: "Cloud-Native Computing",
  },
  {
    name: "Ambient Computing and IoT",
  },
  {
    name: "Genomics and Bioinformatics",
  },
  {
    name: "Network Programmability and Automation",
  },
];

function Footer() {
  return (
    <div className="w-full border-t shadow-sm mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
      <div className="py-14 px-2 flex flex-col flex-wrap md:flex-row gap-14 ">
        <div className="flex flex-col">
          <Image
            src={"/logo.png"}
            width={150}
            height={150}
            className=""
            alt="Logo"
          />

          <div className="max-w-xl py-5 leading-normal">
            <p className="md:text-[17px] text-[14px] text-slate-800 ">
              Certified Web 3.0 and Metaverse Developer A One and Quarter Years
              Panaverse DAO Earn as you Learn Program Getting Ready for the Next
              Generation of the Internet
            </p>
          </div>
          <div className="flex gap-3">
            <div className="bg-[#1ab8c9] rounded-full w-fit px-3 py-3">
              <FaFacebookF className="text-center mx-auto text-white font-extrabold" />
            </div>
            <div className="bg-[#1ab8c9] rounded-full w-fit px-3 py-3">
              <FaTwitter className="text-center mx-auto text-white font-extrabold" />
            </div>
            <div className="bg-[#1ab8c9] rounded-full w-fit px-3 py-3">
              <FaYoutube className="text-center mx-auto text-white font-extrabold" />
            </div>
            <div className="bg-[#1ab8c9] rounded-full w-fit px-3 py-3">
              <FaGithub className="text-center mx-auto text-white font-extrabold" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl">Programs</h4>
          {footer.map((data, id) => {
            return (
              <ul className="mt-1" key={id}>
                <li className="text-[15px] text-slate-800">{data.name}</li>
              </ul>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl">Pages</h4>
          <ul className="flex flex-col gap-2">
            <li className="text-[15px] text-slate-800">Home</li>
            <li className="text-[15px] text-slate-800">Quarter 1</li>
            <li className="text-[15px] text-slate-800">Quarter 2</li>
            <li className="text-[15px] text-slate-800">Quarter 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
