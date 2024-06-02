import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { BiChevronDown } from "react-icons/bi";

const FilterBox = () => {
  const [position, setPosition] = useState("allPost");
  return (
    <>
      <div className="w-full pb-2 flex flex-row justify-end">
        <DropdownMenu className="w-28">
          <DropdownMenuTrigger asChild>
            <button className="w-fit h-fit text-xs border-[1px] p-[6px] py-1 rounded-md flex flex-row items-center">
              Filter By
              <BiChevronDown className="text-sm" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-fit">
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <DropdownMenuRadioItem value="allPost" className="text-xs pl-6">
                All Post
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="thoughts" className="text-xs">
                Thoughts
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="doubts" className="text-xs">
                Doubts
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="experiences" className="text-xs">
                Experiences
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default FilterBox;
