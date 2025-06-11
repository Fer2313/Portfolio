"use client";
import React from "react";
import { useIsMobile } from "../utils/isMobile";
export default function Nav({
  ES,

}) {

  return (
    <div className="flex flex-col px-3 py-2 gap-5 bg-[#35467377]">
      <nav className="flex flex-col justify-center">
        <div className="flex flex-col rounded-md overflow-hidden border border-[#354673] shadow-md backdrop-blur-sm">
          <button className="px-4 py-2 text-sm font-semibold bg-[#354673] text-white">
            {labels[0]}
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-white hover:bg-[#3546738f]">
            {labels[1]}
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-white hover:bg-[#3546738f]">
            {labels[2]}
          </button>
        </div>
      </nav>
    </div>
  );
}
