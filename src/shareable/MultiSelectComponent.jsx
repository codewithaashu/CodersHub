import { Skills } from "@/DB/MentorsDomain";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

const MultiSelectComponent = () => {
  const [showDropDown, setShowDropDown] = useState(true);
  const [skills, setSkillsSelected] = useState([]);
  return (
    <>
      <div className="relative w-[180px]">
        <Button
          variant="outline"
          className="hover:bg-gray-50 w-full flex justify-between"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          Skills{" "}
          <span
            className={`bg-primary ${
              skills.length === 0 ? "hidden" : "block"
            } text-background h-5 w-5 text-sm object-center rounded-full mx-2`}
          >
            {skills.length}
          </span>
          <span>
            {showDropDown ? (
              <IoChevronDownSharp className="text-sm" />
            ) : (
              <IoChevronUpSharp className="text-sm" />
            )}
          </span>
        </Button>
        <div
          className={`absolute ${
            showDropDown ? "hidden" : ""
          } top-12 flex flex-col gap-3 bg-background rounded-md shadow-md p-3 z-10 border-[1px]`}
        >
          <div className="flex gap-x-2 border rounded-md p-2 bg-white w-[160px] items-center">
            <div className="w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                stroke="#000"
              >
                <path
                  d="m14.352 13.646-3.13-3.128a5.506 5.506 0 1 0-.706.707l3.128 3.129a.5.5 0 0 0 .708-.708ZM2.498 7a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <input
              placeholder="Search for skills..."
              className="flex border-none text-[13px] outline-none  !p-0 !ring-0"
            />
          </div>
          <div
            className="flex flex-col gap-2 px-2 max-h-[160px] md:max-h-[320px]  overflow-y-auto "
            style={{ scrollbarWidth: "none" }}
          >
            {Skills.map((curr, index) => {
              return (
                <div className="flex gap-2 items-center" key={index}>
                  <input
                    className="flex cursor-pointer items-center  border-[1px] bg-transparent checked:bg-[#1d4ed8] focus:ring-transparent rounded-md text-sm"
                    type="checkbox"
                    value={curr}
                    onChange={(e) => {
                      console.log(e.target.checked);
                      if (e.target.checked) {
                        setSkillsSelected((prev) => [...prev, curr]);
                      } else {
                        setSkillsSelected((prev) =>
                          prev.filter((item) => item !== curr)
                        );
                      }
                    }}
                  />
                  <label
                    htmlFor={curr}
                    className="cursor-pointer text-sm text-gray-700"
                  >
                    {curr}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiSelectComponent;
