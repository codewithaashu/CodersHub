import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "../ui/checkbox";
import { LeetcodeIcon, YoutubeIcon } from "@/shareable/Icons";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { MdEditDocument } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa";
import { BiDownvote, BiUpvote } from "react-icons/bi";

const data = [
  {
    id: 1,
    coder: "Ashish Ranjan",
    score: 256,
    rank: 1,
  },
  {
    id: 2,
    coder: "Ashish Ranjan",
    score: 256,
    rank: 2,
  },
  {
    id: 3,
    coder: "Ashish Ranjan",
    score: 256,
    rank: 3,
  },
  {
    id: 4,
    coder: "Ashish Ranjan",
    score: 256,
    rank: 4,
  },
  {
    id: 5,
    coder: "Ashish Ranjan",
    score: 256,
    rank: 5,
  },
  {
    id: 6,
    coder: "Ashish Ranjan",
    score: 256,
    rank: 6,
  },
  {
    id: 7,
    coder: "Ashish Ranjan",
    score: 256,
    rank: 7,
  },
];
const AccordinTable = () => {
  return (
    <>
      <div className="w-full py-1 px-2">
        <div className="rounded-md border-2 shadow-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="border-r-2">Status</TableHead>
                <TableHead className="border-r-2">Problem</TableHead>
                <TableHead className="border-r-2">Pratice</TableHead>
                <TableHead className="border-r-2">Note</TableHead>
                <TableHead className="border-r-2">Difficult</TableHead>
                <TableHead className="border-r-2">Solution</TableHead>
                <TableHead className="border-r-2">Reaction</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((curr, index) => (
                <TableRow key={index} className="px-2">
                  <TableCell className="border-r-2">
                    <Checkbox />
                  </TableCell>
                  <TableCell className="border-r-2">
                    <p className="text-sm text-gray-800">
                      Sort an array of 0's, 1's and 2's
                    </p>
                  </TableCell>
                  <TableCell className="border-r-2 flex w-full justify-center">
                    <a href="">
                      <LeetcodeIcon />
                    </a>
                  </TableCell>
                  <TableCell className="border-r-2 text-center">
                    <HiOutlineDocumentPlus className="text-[26px] cursor-pointer rounded-full p-1 bg-gray-200" />
                    {/* <MdEditDocument className="text-[26px] text-[#1d4ed8] cursor-pointer rounded-full p-1 bg-gray-200" /> */}
                  </TableCell>
                  <TableCell className="border-r-2 items-center">
                    <p className="bg-green-100 w-fit px-2 rounded-md text-sm text-green-600 ">
                      Easy
                    </p>
                    {/* <p className="bg-yellow-100 w-fit px-2 p-1 rounded-md text-sm text-yellow-600 ">
                      Medium
                    </p> */}
                    {/* <p className="bg-red-100 w-fit px-2 p-1 rounded-md text-sm text-red-600 ">
                      Hard
                    </p> */}
                  </TableCell>
                  <TableCell className="border-r-2 flex w-full justify-center">
                    <a href="">
                      <YoutubeIcon />
                    </a>
                  </TableCell>
                  <TableCell className="border-r-2">
                    {/* <FaRegStar className="text-lg cursor-pointer" /> */}
                    <FaStar className="text-lg cursor-pointer text-yellow-500" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default AccordinTable;
