import React from "react";

function Nav() {
  return (
    <div className="w-full">
      <div className="flex w-11/12 mx-auto border-b-2 border-[#DEB992] h-24 text-[#1BA098] font-sans justify-center gap-20">
        <button>Home</button>
        <button>Projects</button>
        <button>About</button>
        <button>Blog</button>
      </div>
    </div>
  );
}

export default Nav;
