import React from "react";
import { LiaDownloadSolid } from "react-icons/lia";

function Nav() {
  return (
    <div className="w-full">
      <div className="flex w-11/12 mx-auto border-b-2 border-white border-opacity-70 h-24 text-[#1BA098] font-sans justify-center gap-20">
        <button>Home</button>
        <button>Projects</button>
        <button>About</button>
        <button>Blog</button>
        <button className="flex gap-0 my-auto border border-[#1BA098] border-opacity-75 hover:bg-[#1BA098] hover:text-white pr-2 pb-1 rounded-lg">
          <span className="mt-1 pl-2">Resume</span>
          <LiaDownloadSolid className="mt-1.5" size={22} />
        </button>
      </div>
    </div>
  );
}

export default Nav;
