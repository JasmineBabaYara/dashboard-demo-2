"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import BarChart from "../barchart/page";
import DonutChart from "../donutchart/page";

export default function page() {
  return (
    <div className="mt-4 h-screen bg-white">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-secondary rounded-xl col-span-2 p-4 h-96">
          <div className="flex justify-between items-center">
            <p className="font-medium text-black text-base">Statistics</p>
            <div className="flex items-center gap-1 text-gray text-sm">
              <p>Spend</p>
              <IoIosArrowDown />
            </div>
          </div>
          <BarChart />
        </div>
        <div className="bg-red-50 rounded-xl col-span-1 p-4 h-96">
          <div className="flex justify-between items-center">
            <p className="font-medium text-black text-base">
              Available Revenue
            </p>
            <BsThreeDots />
          </div>
          <DonutChart />
          <div className="flex mt-2 gap-x-8">
            <div>
              <p className="text-black font-bold text-sm">25%</p>
              <p className="text-black text-xs">Available</p>
              <p className="h-2 bg-white w-32 rounded-lg mt-1">
                <p className="h-2 w-10 bg-red-600 rounded-lg" />
              </p>
            </div>
            <div>
              <p className="text-black font-bold text-sm">75%</p>
              <p className="text-black text-xs">Unavailable</p>
              <p className="h-2 bg-white w-32 rounded-lg mt-1">
                <p className="h-2 w-20 bg-[#ffcac8] rounded-lg" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-4">
        <div className="bg-secondary h-40 rounded-xl col-span-2"></div>
      </div>
    </div>
  );
}
