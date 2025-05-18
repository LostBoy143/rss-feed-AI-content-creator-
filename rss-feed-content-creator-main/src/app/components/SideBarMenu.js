"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { RiHospitalLine } from "react-icons/ri";
import { FaChartPie, FaBitcoin } from "react-icons/fa";
import { PiChartLineBold } from "react-icons/pi";
import { MdOutlineAttachMoney, MdComputer } from "react-icons/md";

const sections = [
  {
    title: "technology",
    icon: <MdComputer size={24} />,
  },
  {
    title: "finance",
    icon: <MdOutlineAttachMoney size={24} />,
  },
  {
    title: "cryptocurrencies",
    icon: <FaBitcoin size={24} />,
  },
  {
    title: "stocks",
    icon: <PiChartLineBold size={24} />,
  },
  {
    title: "wellness",
    icon: <RiHospitalLine size={24} />,
  },
  {
    title: "politics",
    icon: <FaChartPie size={24} />,
  },
];

const SideBarMenu = ({ setStep }) => {
  const pathname = usePathname();

  return (
    <div className="space-y-3">
      {sections.map((section) => {
        const fullPath = `/dashboard/${section.title}`;
        const isActive = pathname === fullPath;

        return (
          <Link
            key={section.title}
            href={fullPath}
            onClick={() => setStep((prev) => prev + 1)}
          >
            <p
              className={`flex m-2 text-sm gap-4 uppercase font-medium items-center px-4 py-3  transition-colors duration-300 transform rounded-lg text-gray-200 hover:bg-gray-800 hover:text-gray-200  ${
                isActive ? "" : ""
              }`}
            >
              {section.icon} {section.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBarMenu;
