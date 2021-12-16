import React from "react";
import GlitchText from "react-glitch-effect/core/GlitchText";
import { FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative pt-8 pb-6 bg-primary-red">
      <div className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none h-[80px]">
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-current text-primary-red"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container px-20 mx-auto">
        {/* <div className="flex flex-wrap"> */}
        <div className="w-full px-4 mx-auto text-center md:w-6/12">
          <GlitchText
            className="text-5xl font-semibold text-gray-300 font-bebas"
            component="h4"
            color1="rgb(0,0,0)"
            color2="rgb(172,21,21)"
            duration={5000}
          >
            JUICE ME UP
          </GlitchText>
          <div className="flex items-center justify-center gap-3 mt-8">
            <a
              href="https://twitch.tv/willneff"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white rounded-full group"
            >
              <FaTwitch className="m-auto text-lg text-purple-500 transition-transform duration-200 ease-in-out group-hover:scale-105" />
            </a>
            <a
              href="https://www.twitter.com/thewillneff"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white rounded-full group"
            >
              <FaTwitter className="m-auto text-lg text-blue-400 transition-transform duration-200 ease-in-out group-hover:scale-105" />
            </a>
            <a
              href="https://www.instagram.com/thewillneff/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white rounded-full group"
            >
              <FaInstagram className="m-auto text-lg group-hover:scale-105 transition-transform duration-200 ease-in-out text-[rgb(188,22,142)]" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCFsDMlkYLpTVt9-cqmZxqZg"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white rounded-full group"
            >
              <FaYoutube className="m-auto text-lg text-red-600 transition-transform duration-200 ease-in-out group-hover:scale-105" />
            </a>
          </div>
        </div>
        {/* </div> */}
        <hr className="my-6 border-gray-200" />
        <div className="flex flex-wrap items-center justify-center text-lg md:justify-between font-bebas">
          <div className="w-full px-4 mx-auto text-center md:w-4/12">
            <div className="py-1 text-2xl font-semibold text-gray-200">
              Copyright © {new Date().getFullYear()} Will Neff
            </div>
            <div className="py-1 font-semibold text-gray-200">
              Site by:{" "}
              <a
                className="text-base underline decoration-dotted decoration-red-300 font-roboto"
                href="https://www.jccdev.tech"
                target="_blank"
                rel="noreferrer"
              >
                JCCDev
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
