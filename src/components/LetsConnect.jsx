import React from "react";
import { socialMedia } from "../constants";

const LetsConnect = () => {
  const connectLinks = socialMedia.filter((item) => item.id === "linkedin" || item.id === "github");

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm uppercase tracking-[1px] text-secondary">Connect</p>
      <div className="flex gap-4">
        {connectLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[70px] h-[70px] rounded-full bg-blue-gradient p-[2px] cursor-pointer group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-primary rounded-full w-full h-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/80 group-hover:to-primary/60 transition-all duration-300">
                <Icon className="w-1/2 h-1/2 text-secondary" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default LetsConnect;
