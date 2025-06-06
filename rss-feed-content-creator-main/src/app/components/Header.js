"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import ModalMenu from "./ModalMenu";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex relative">
      <nav className="fixed top-0 z-50 w-full  border-b  bg-gray-800 border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-5">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="flex itmes-center justify-start font-bold text-xl cursor-pointer text-white">
                Ai Content Creator
              </h1>
            </Link>
            <div className="justify-end ">
              <div className=" mt-4 hidden md:flex space-x-6 sm:justify-center items-center sm:mt-0">
                <a
                  href="https://github.com/LostBoy143"
                  target="_blank"
                  className="text-gray-300 hover:text-gray-900 hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shubham-singh-35153122b/"
                  target="_blank"
                  className="text-gray-300 hover:text-gray-900 hover:text-white"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://x.com/LostBoy13299877"
                  target="_blank"
                  className="text-gray-300 hover:text-gray-900 hover:text-white"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
              {/* <MdMenu
                className="block md:hidden cursor-pointer text-white"
                size={22}
                onClick={handleMenuClick}
              /> */}
            </div>
          </div>
        </div>
      </nav>

      <ModalMenu isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Header;
