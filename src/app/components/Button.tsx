import { Button } from "@/components/ui/button";
import React from "react";

function Buttons({ text, set }: any) {
  return (
    <Button
      className="bg-[#00616C] hover:bg-[#00616C] rounded-full lg:py-6 lg:px-7 
        py-6 px-5 text-[16px] shadow-lg transform hover:scale-105 transition-all
        font-semibold mt-7"
    >
      {text}
    </Button>
  );
}

export default Buttons;
