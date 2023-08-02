import React from "react";
import Image from "next/image";

function Introduction() {
  return (
    <div className="p-4 md:p-8">
      <h1
        className="text-white font-extralight text-5xl sm:text-8xl text-center text-opacity-80 pt-12 pb-2"
        style={{ letterSpacing: "12px" }}
      >
        MATT MEDLIN
      </h1>
      <h1 className="text-center text-[#1BA098] text-base md:text-lg tracking-wider pt-4 pb-12">
        Software Developer
      </h1>
      <div className="w-72 md:w-96 mx-auto">
        <Image
          className="mx-auto rounded-full border-[#1BA098] border-opacity-25"
          style={{ borderWidth: "6px" }}
          src="/images/profile.jpeg"
          alt="Profile Picture"
          width={300}
          height={300}
        />
      </div>
      <div className="w-full text-white pt-6">
        <p className="text-center text-opacity-80">
          Tech enthusiast, code crafter, gaming lover. Join me on a digital
          journey, exploring tech, gaming, and more. Let's unleash creativity
          and innovation together!
        </p>
      </div>
    </div>
  );
}

export default Introduction;
