import React from "react";
import Image from "next/image";

function ProjectButton() {
  return (
    <div>
      <button className="transform hover:translate-y-[-10px] transition">
        <Image
          className=" rounded-full border-[#1BA098] border-opacity-25"
          style={{ borderWidth: "6px" }}
          src="/images/UnityLogo.svg"
          alt="Profile Picture"
          width={188}
          height={188}
        ></Image>
      </button>
      <h2 className="text-opacity-80">Project Name</h2>
      <p className="text-opacity-80">Project Description</p>
    </div>
  );
}

export default ProjectButton;
