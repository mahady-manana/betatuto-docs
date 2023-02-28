import Launch from "@mui/icons-material/Launch";
import { Link } from "gatsby";
import React, { useState } from "react";
import { SubMenu } from "./Submenu";

export const MenuDesktop = () => {
  return (
    <header className="fixed w-full top-0 right-0 bg-white h-[60px] shadow-xl z-50">
      <div className="flex justify-between items-center w-full h-full p-2 max-w-[1550px] m-auto">
        <div className="">
          <Link
            to="/"
            className="text-xl font-bold leading-2 flex items-center"
          >
            <span className="mr-2">
              B-DEVCOM - LOCAL DEVELOPMENT SITE
            </span>
          </Link>
        </div>
        <div className="text-right px-5">{/* <SearchBar /> */}</div>
        <nav className="px-4 flex items-center">
          <a
            href="https://github.com/mahady-manana/betatuto-docs"
            target="_blank"
            referrerPolicy="no-referrer"
            className="mx-2 md:mx-4 p-2 border-2 border-gray-600 md:uppercase text-sm border-white font-bold border-b-2 hover:border-gray-200 hover:text-secondary flex items-center"
          >
            <span className="pr-2">Github</span>
            <Launch />
          </a>
        </nav>
      </div>
      <SubMenu />
    </header>
  );
};
