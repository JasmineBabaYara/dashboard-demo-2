"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import BarChart from "../barchart/page";

export default function page() {
  return (
    <div className="mt-4 h-screen bg-white">
      <div className="grid grid-cols-4">
        <div className="bg-secondary rounded-xl col-span-2 p-4">
          <div className="flex justify-between items-center">
            <p className="font-medium text-black text-base">Statistics</p>
            <div className="flex items-center gap-1 text-gray text-sm">
              <p className="">Spend</p>
              <IoIosArrowDown />
            </div>
          </div>
          <BarChart />
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-3 mt-4">
        <div className="bg-secondary h-40 rounded-xl col-span-2"></div>
      </div>
    </div>
  );
}
