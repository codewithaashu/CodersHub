import AvatarComponent from "@/shareable/AvatarComponent";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

const LeaderBoardItem = () => {
  return (
    <>
      <div className="w-full">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-fit text-center">Coder Name</TableHead>
                <TableHead className="text-center">Score</TableHead>
                <TableHead className="text-center">Rank</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((curr, index) => (
                <TableRow key={index} className="px-2">
                  <TableCell className="font-medium flex gap-3 p-1 py-[10px] items-center text-center w-max">
                    <AvatarComponent
                      imgSrc={
                        "http://res.cloudinary.com/dycobmjyk/image/upload/v1714114731/Social%20Media/mebzkna2ttje2y7v1cze.jpg"
                      }
                      className="w-9 h-9"
                    />
                    <div className="flex flex-col gap-0 items-center">
                      <div className="text-[14px] font-semibold leading-4">
                        Ashish Ranjan
                      </div>
                      <p className="text-[11px] font-medium text-muted-foreground leading-4">
                        LNCT College
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm py-[10px] p-1 text-center w-fit">
                    {curr.score}
                  </TableCell>
                  <TableCell className="text-sm py-[10px] p-1 text-center w-fit">
                    {curr.rank}
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

export default LeaderBoardItem;
