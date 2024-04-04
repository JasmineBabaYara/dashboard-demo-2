import React from "react";
import Image from "next/image";
import { BsBell } from "react-icons/bs";
import profile from "../images/profile.jpg";
import bell from "../images/bell.png";
import Link from "next/link";

export default function page() {
  return (
    <nav className="border-b border-gray flex justify-between items-center h-20 bg-white pl-10 pr-10">
      <div className="flex items-center">
        <p>CashPie</p>
      </div>
      <div>

      </div>
      <div className="flex items-center gap-x-4">
        <div className="bg-zinc-200 rounded-full w-8 h-8 flex items-center justify-center">
      <Image src={bell} alt="profile" className="h-4 w-4" />
       </div> <Image src={profile} alt="profile" className="h-10 w-8 rounded-full" />
        <div  className="text-xs flex flex-col gap-y-1">
          <p  className="text-black">Tony Barton</p>
          <p  className="text-gray">Finance manager</p>
        </div>
      </div>
    </nav>
  );
}
