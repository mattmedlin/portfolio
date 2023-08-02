import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="w-full py-16">
      <h1 className="text-center text-[#1BA098] text-lg tracking-wider pt-4">
        About
      </h1>
      <div className="w-1/4 border-b border-white border-opacity-70 mx-auto my-12"></div>
      <Image
        className="mx-auto pl-4"
        src="/images/avatar.svg"
        alt="Avatar"
        width={500}
        height={500}
      ></Image>
      <div className="mx-auto max-sm:w-10/12 w-1/3 pt-16">
        <h2 className="text-white text-opacity-80 text-left text-3xl">
          Hey there, I'm Matt.
        </h2>
        <p className="text-white text-opacity-80 text-left pt-6">
          A passionate Software Developer who loves to create and design with
          technology. Originally hailing from California but raised in Missouri,
          I've had an adventurous journey that led me to discover my true
          calling in software development.
        </p>
        <p className="text-white text-opacity-80 text-left pt-6">
          From recording music and writing stories as a kid to diving deep into
          software development during my college days, I've always been drawn to
          the world of creativity and problem-solving. My BA in Computer Science
          laid the foundation for my career, but it was the real-world
          experiences that truly shaped me.
        </p>
        <p className="text-white text-opacity-80 text-left pt-6">
          Over the years, I've specialized in geospatial libraries and mastered
          the art of crafting captivating web experiences using Angular and
          React on the frontend. On the backend, I've dived into the world of
          Django and embraced the power of Docker to streamline development.
        </p>
        <p className="text-white text-opacity-80 text-left pt-6">
          Beyond my professional endeavors, I'm a hobbyist game developer,
          infusing my projects with a dash of creativity and a love for solving
          challenges. When I'm not immersed in code, you can find me gaming
          away, reminiscing with classics like Chrono Trigger, Skyrim, and
          Overwatch. On sunny days, I head to the skatepark, seeking thrills and
          adventure. But I also appreciate the simple joys of life, savoring
          craft beer with friends and whipping up delightful meals in the
          kitchen.
        </p>
        <p className="text-white text-opacity-80 text-left pt-6">
          This website is not just a portfolio of my work, but a glimpse into my
          world of creativity, technology, and the things I'm truly passionate
          about. Let's connect and explore the endless possibilities of the
          digital realm together! Feel free to reach out, and let's embark on
          this exciting journey of innovation and discovery. Cheers! 🚀
        </p>
      </div>
    </div>
  );
}

export default About;
