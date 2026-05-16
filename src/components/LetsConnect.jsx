import React from "react";
import { callToAction } from "../constants";
import { FaLinkedin } from "react-icons/fa";

const LetsConnect = () => {
  return (
    <a
      href={callToAction}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <div className="w-[141px] h-[141px] rounded-full bg-blue-gradient p-[2px] cursor-pointer group hover:scale-110 transition-transform duration-300">
        <div className="bg-primary rounded-full w-full h-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/80 group-hover:to-primary/60 transition-all duration-300">
          <FaLinkedin className="w-1/2 h-1/2 text-secondary" />
        </div>
      </div>
    </a>
  );
};

export default LetsConnect;
