"use client";
import React from "react";
import Image from "next/image";
import profile from "../images/profile.jpg";
import bell from "../images/bell.png";
import logo from "../images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function page() {
  const pathname = usePathname();

  //if pathname equals the href set is active
  const isActive = (href) => pathname === href;
  // console.log(pathname)

  return (
    <nav className="border-b border-zinc-200 flex justify-between items-center h-28 bg-white ">
      <div className="flex items-center text-black">
        <Image src={logo} alt="logo" className="w-10 h-10" />
        <p>CashPie</p>
      </div>
      <div className="bg-secondary rounded-full p-1 text-sm font-light flex items-center gap-x-4 h-12 text-black">
        <Link
          href="/"
          className={
            isActive("/")
              ? "bg-primary text-white rounded-full h-10 flex items-center pl-4 pr-4"
              : "bg-transparent pl-4 pr-4"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/cards"
          className={
            isActive("/cards")
              ? "bg-primary text-white rounded-full h-10 flex items-center pl-4 pr-4"
              : "bg-transparent pl-4 pr-4"
          }
        >
          Cards
        </Link>
        <Link
          href="/payment"
          className={
            isActive("/payment")
              ? "bg-primary text-white rounded-full h-10 flex items-center pl-4 pr-4"
              : "bg-transparent pl-4 pr-4"
          }
        >
          Payment
        </Link>
        <Link
          href="/transaction"
          className={
            isActive("/transaction")
              ? "bg-primary text-white rounded-full h-10 flex items-center pl-4 pr-4"
              : "bg-transparent pl-4 pr-4"
          }
        >
          Transaction
        </Link>
        <Link
          href="/contracts"
          className={
            isActive("/contracts")
              ? "bg-primary text-white rounded-full h-10 flex items-center pl-4 pr-4"
              : "bg-transparent pl-4 pr-4"
          }
        >
          Contracts
        </Link>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="bg-zinc-200 rounded-full w-8 h-8 flex items-center justify-center">
          <Image src={bell} alt="profile" className="h-4 w-4" />
        </div>
        <Image src={profile} alt="profile" className="h-10 w-8 rounded-full" />
        <div className="text-xs flex flex-col gap-y-1">
          <p className="text-black">Tony Barton</p>
          <p className="text-gray">Finance manager</p>
        </div>
      </div>
    </nav>
  );
}


// const NavCard