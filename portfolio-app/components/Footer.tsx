import React from "react";

function Footer() {
  return (
    <footer className=" py-8 text-white text-opacity-80 text-center">
      <p className="text-opacity-80">
        &copy; {new Date().getFullYear()} matt-medlin.com. All rights reserved.
      </p>
      <p className="text-opacity-80 pt-2">
        Made with <span className="text-red-500">&hearts;</span> by Matt.
      </p>
    </footer>
  );
}

export default Footer;
