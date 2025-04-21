"use client";
import React, { useState } from "react";
import { useMyContext } from "../context/ContentContext";
import parseContent from "../utils/parseContent";
import {
  BlogPrompt,
  LinkedInPrompt,
  TweetPrompt,
} from "../utils/constants";
import call from "../utils/CohereApiCall";
import LoadingSpinner from "./LoadingFull"; // Assuming you have a loading spinner component

const FeedItem = ({ item }) => {
  const { state, dispatch } = useMyContext();

  // State to handle loader visibility
  const [isLoading, setIsLoading] =
    useState(false);

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

  const createLinkedinPost = async (
    prompt,
    content
  ) => {
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
    <div className="relative">
      {/* Full-screen loader overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
          <LoadingSpinner />
        </div>
      )}

      <div className="flex flex-col space-x-3 space-y-1 text-gray-600 transition-colors p-4 duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
        <div className="flex ">{item?.title}</div>
        <div className="p-3 space-x-3">
          <button
            onClick={() =>
              dispatch({
                type: "SET_DATA",
                payload: parseContent(
                  item?.description
                ),
              })
            }
            className="transition-colors p-2 duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-100 hover:text-gray-500 font-medium text-blue-600 background-transparent outline-none focus:outline-none"
          >
            expand..
          </button>
          <button
            onClick={() =>
              createBlog(
                BlogPrompt,
                item?.title +
                  " " +
                  item?.description
              )
            }
            className="transition-colors p-2 duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-100 hover:text-gray-500 font-medium text-blue-600 background-transparent outline-none focus:outline-none"
          >
            blog..
          </button>
          <button
            onClick={() =>
              createTweet(
                TweetPrompt,
                item?.title +
                  " " +
                  item?.description
              )
            }
            className="transition-colors p-2 duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-100 hover:text-gray-500 font-medium text-blue-600 background-transparent outline-none focus:outline-none"
          >
            tweet..
          </button>
          <button
            onClick={() =>
              createLinkedinPost(
                LinkedInPrompt,
                item?.title +
                  " " +
                  item?.description
              )
            }
            className="transition-colors p-2 duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-100 hover:text-gray-500 font-medium text-blue-600 background-transparent outline-none focus:outline-none"
          >
            linkedin..
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
