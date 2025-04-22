import React from "react";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="group relative min-h-[90vh]  p-4 sm:p-10 w-full flex justify-center items-center">
      <div className="fixed bg-black z-20 top-4 left-[-4px] max-w-[200px] py-2 px-4 rounded-tr-2xl rounded-br-2xl border-[1px] border-blue-600 ">
        <Link href="/">AI Content Creator</Link>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div
          id="text-content"
          className="sm:-mt-10 flex flex-col gap-2 "
        >
          <h1 className="sm:text-5xl text-3xl font-bold">
            Turn News Into Content—In Seconds.
          </h1>
          <h2 className="text-gray-400 ">
            Generate high-quality LinkedIn posts,
            tweets, and blogs from the latest news
            using AI.
          </h2>
          <Link
            href="/dashboard"
            className="block"
          >
            <div className="animated-border inline-block mt-2">
              <button className="relative  z-10 text-white px-8 py-2 rounded-2xl bg-transparent transition-colors duration-300">
                Try It Now
              </button>
            </div>
          </Link>
        </div>
        <div
          id="image"
          className="transition-all duration-500 -mr-24 hidden sm:block group-hover:-translate-x-[0px] translate-x-[200px]"
        >
          <img
            src="./ai-bot.png"
            alt="bot"
            className="  transition-transform  duration-500 animate-float-rotate"
          />
        </div>
        <div id="image" className="sm:hidden">
          <img
            src="./ai-bot.png"
            alt="bot"
            className="absolute opacity-45 bottom-0 -right-6 h-44 transition-transform duration-500 animate-float-rotate"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
