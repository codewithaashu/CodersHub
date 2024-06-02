import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
} from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const SocialProfile = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-sm font-medium">Social Profile</h1>
        <div className="grid grid-cols-2 justify-between gap-3">
          <div className="flex flex-row gap-[3px] items-center text-[13px] text-gray-700 font-medium">
            <FaInstagram />
            <a
              href={"https://www.instagram.com"}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="flex flex-row gap-[3px] items-center text-[13px] text-gray-700 font-medium">
            <FaSquareFacebook />
            <a
              href={"https://www.facebook.com/"}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
          {true && (
            <div className="flex flex-row gap-[3px] items-center text-[13px] text-gray-700 font-medium">
              <FaLinkedin />
              <a href={"/linkedinURL"} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          )}
          {true && (
            <div className="flex flex-row gap-[3px] items-center text-[13px] text-gray-700 font-medium">
              <FaSquareGithub />
              <a href={"/githubURL"} target="_blank" rel="noreferrer">
                Github
              </a>
            </div>
          )}
          {true && (
            <div className="flex flex-row gap-[3px] items-center text-[13px] text-gray-700 font-medium">
              <SiLeetcode />
              <a
                href={"https://leetcode.com/"}
                target="_blank"
                rel="noreferrer"
              >
                Leetcode
              </a>
            </div>
          )}
          {true && (
            <div className="flex flex-row gap-[3px] items-center text-[13px] text-gray-700 font-medium">
              <SiGeeksforgeeks />
              <a
                href={"https://www.geeksforgeeks.org/"}
                target="_blank"
                rel="noreferrer"
              >
                GeeksForGeeks
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SocialProfile;
