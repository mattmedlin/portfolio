import React from "react";
import Image from "next/image";
import ProjectButton from "./ProjectButton";

function Projects() {
  return (
    <div className="w-full mt-16 text-white text-opacity-80">
      <h1 className="text-center text-[#1BA098] text-lg tracking-wider pt-4">
        Projects
      </h1>
      <div className="w-1/4 border-b border-white border-opacity-70 mx-auto my-12"></div>
      <p className="text-center">A few highlights of my best work</p>
      <div>
        <div className="w-full max-sm:flex-col flex justify-center text-center gap-10 pt-20 pb-6">
          <ProjectButton />
          <ProjectButton />
          <ProjectButton />
          <ProjectButton />
        </div>
      </div>
    </div>
  );
}

export default Projects;
