import React from "react";
import Image from "next/image";

function Introduction() {
  return (
    <div>
      <h1
        className="text-white font-extralight text-8xl text-center pt-12 pb-2"
        style={{ letterSpacing: "12px" }}
      >
        MATT MEDLIN
      </h1>
      <h1 className="text-center text-[#1BA098] text-lg tracking-wider pt-4 pb-12">
        Software Developer
      </h1>
      <div className="w-full ">
        <Image
          className="mx-auto rounded-full border-[#1BA098] border-opacity-25"
          style={{ borderWidth: "6px" }}
          src="/images/profile.jpeg"
          alt="Profile Picture"
          width={300}
          height={300}
        ></Image>
      </div>
      <div className="w-full">
        <p className="text-white w-1/3 mx-auto text-center pt-6 pb-2">
          Tech enthusiast, code crafter, gaming lover. Join me on a digital
          journey, exploring tech, gaming, and more. Let's unleash creativity
          and innovation together!
        </p>
      </div>
    </div>
  );
}

export default Introduction;
