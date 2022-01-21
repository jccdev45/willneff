import React, { useState } from "react";
import { FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdClose, MdOutlineMenu } from "react-icons/md";

const logo =
  "https://static-cdn.jtvnw.net/jtv_user_pictures/0526935c-5783-4590-8dc1-16445842633d-profile_image-70x70.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 bg-black/30">
      <div className="container relative flex flex-wrap items-center justify-between px-4 mx-auto">
        <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
          <a className="inline-block py-2 mr-4" href="/">
            <img src={logo} alt="Will Neff Logo" className="inline" />
          </a>
          <button
            className="fixed right-4 top-8 block px-3 py-1 text-xl leading-none bg-black/20 rounded-full border border-transparent border-solid outline-none cursor-pointer lg:hidden focus:outline-none"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <MdClose className="text-4xl text-white" />
            ) : (
              <MdOutlineMenu className="text-4xl text-white" />
            )}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center fixed right-0 top-24 lg:static bg-black/90 lg:bg-transparent lg:shadow-none transition-all duration-200 ease-in-out" +
            (isOpen
              ? " rounded shadow-lg py-4 left-0 w-5/6 mx-auto opacity-100"
              : " translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100")
          }
        >
          <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
            <li className="text-white flex items-center mx-3 my-2 lg:my-0 transition-colors duration-200 ease-in-out hover:text-purple-500">
              <a
                className="flex items-center text-xs font-bold uppercase lg:py-2"
                href="https://twitch.tv/willneff"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitch className="text-lg lg:text-2xl" />
                <span className="inline-block ml-2 text-base tracking-tight text-white underline lg:hidden decoration-wavy decoration-purple-300/70">
                  Twitch
                </span>
              </a>
            </li>

            <li className="text-white flex items-center mx-3 my-2 lg:my-0 transition-colors duration-200 ease-in-out hover:text-blue-400">
              <a
                className="flex items-center text-xs font-bold uppercase lg:py-2"
                href="https://www.twitter.com/thewillneff"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="text-lg lg:text-2xl" />
                <span className="inline-block ml-2 text-base tracking-tight text-white underline lg:hidden decoration-wavy decoration-blue-300/70">
                  Twitter
                </span>
              </a>
            </li>

            <li className="text-white flex items-center mx-3 my-2 lg:my-0 transition-colors duration-200 ease-in-out hover:text-[rgb(188,22,142)]">
              <a
                className="flex items-center text-xs font-bold uppercase lg:py-2"
                href="https://www.instagram.com/thewillneff/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-lg lg:text-2xl" />
                <span className="inline-block ml-2 text-base tracking-tight text-white underline lg:hidden decoration-wavy decoration-yellow-600/70">
                  Instagram
                </span>
              </a>
            </li>

            <li className="text-white flex items-center mx-3 my-2 lg:my-0 transition-colors duration-200 ease-in-out hover:text-red-600">
              <a
                className="flex items-center text-xs font-bold uppercase lg:py-2"
                href="https://www.youtube.com/channel/UCFsDMlkYLpTVt9-cqmZxqZg"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="text-lg lg:text-2xl" />
                <span className="inline-block ml-2 text-base tracking-tight text-white underline lg:hidden decoration-wavy decoration-red-300/70">
                  YouTube
                </span>
              </a>
            </li>

            {/* <li className="flex items-center">
              <button
                className={
                  (transparent
                    ? "bg-white text-gray-800 active:bg-gray-100"
                    : "bg-pink-500 text-white active:bg-pink-600") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                <i className="fas fa-arrow-alt-circle-down"></i> Download
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
