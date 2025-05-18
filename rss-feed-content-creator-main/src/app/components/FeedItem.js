"use client";
import React, { useState, useContext } from "react";
import { useMyContext } from "../context/ContentContext";
import parseContent from "../utils/parseContent";
import { BlogPrompt, LinkedInPrompt, TweetPrompt } from "../utils/constants";
import call from "../utils/CohereApiCall";
import LoadingSpinner from "./LoadingFull"; // Assuming you have a loading spinner component
import StepContext, { useStepContext } from "../context/StepContext";
const FeedItem = ({ item }) => {
  const { state, dispatch } = useMyContext();
  const { setStep } = useStepContext();

  // State to handle loader visibility
  const [isLoading, setIsLoading] = useState(false);

  const createBlog = async (prompt, content) => {
    try {
      setIsLoading(true); // Start loader
      const data = await call(prompt, content);
      dispatch({
        type: "SET_BLOG",
        payload: data?.text,
      });
      setIsLoading(false); // Stop loader
    } catch (error) {
      setIsLoading(false); // Stop loader in case of error
      console.log(error);
    }
  };

  const createTweet = async (prompt, content) => {
    try {
      setIsLoading(true); // Start loader
      const data = await call(prompt, content);
      dispatch({
        type: "SET_TWEET",
        payload: data?.text,
      });
      setIsLoading(false); // Stop loader
    } catch (error) {
      setIsLoading(false); // Stop loader in case of error
      console.log(error);
    }
  };

  const createLinkedinPost = async (prompt, content) => {
    try {
      setIsLoading(true); // Start loader
      const data = await call(prompt, content);
      dispatch({
        type: "SET_LINKEDIN_POST",
        payload: data?.text,
      });
      setIsLoading(false); // Stop loader
    } catch (error) {
      setIsLoading(false); // Stop loader in case of error
      console.log(error);
    }
  };

  return (
    <div className="relative pb-4 ">
      {/* Full-screen loader overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
          <LoadingSpinner />
        </div>
      )}

      <div className="transition-all flex hover:scale-110 flex-col space-x-3 mb-2 space-y-1  bg-gray-900  p-4 duration-300 transform rounded-lg text-gray-200 hover:bg-gray-800  hover:text-gray-200 ">
        <div className="flex ">{item?.title}</div>
        <div className="p-1 space-x-3 pt-4">
          <button
            onClick={() => {
              dispatch({
                type: "SET_DATA",
                payload: parseContent(item?.description),
              });
              setStep((prev) => prev + 1);
            }}
            className="transition-colors text-[12px] md:text-[16px] bg-[#3B82F6] p-1 duration-300 transform rounded-lg text-gray-200 hover:bg-gray-50  hover:text-gray-500 font-medium background-transparent outline-none focus:outline-none"
          >
            expand..
          </button>
          <button
            onClick={() => {
              createBlog(BlogPrompt, item?.title + " " + item?.description);
              setStep((prev) => prev + 1);
            }}
            className="transition-colors text-[12px] md:text-[16px] bg-[#6B7280] p-1 duration-300 transform rounded-lg text-gray-200 hover:bg-gray-50  hover:text-gray-500 font-medium background-transparent outline-none focus:outline-none"
          >
            blog..
          </button>
          <button
            onClick={() => {
              createTweet(TweetPrompt, item?.title + " " + item?.description);
              setStep((prev) => prev + 1);
            }}
            className="transition-colors text-[12px] md:text-[16px] bg-[#1DA1F2] p-1 duration-300 transform rounded-lg text-gray-200 hover:bg-gray-50  hover:text-gray-500 font-medium background-transparent outline-none focus:outline-none"
          >
            tweet..
          </button>
          <button
            onClick={() => {
              createLinkedinPost(
                LinkedInPrompt,
                item?.title + " " + item?.description
              );
              setStep((prev) => prev + 1);
            }}
            className="transition-colors p-1 text-[12px] md:text-[16px] bg-[#0077B5] duration-300 transform rounded-lg text-gray-200 hover:bg-gray-50  hover:text-gray-500 font-medium background-transparent outline-none focus:outline-none"
          >
            linkedin..
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
