import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "../ui/progress";
import AccordinTable from "./AccordinTable";
import AccordinHeader from "./AccordinHeader";
const AccordionComponent = ({ item }) => {
  return (
    <>
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="w-full flex flex-col gap-5 relative"
      >
        <Progress
          value={30}
          className="w-full h-1 bg-[#1d4fd826] absolute rounded-md"
          color="bg-[#1d4fd8d5]"
        />
        <AccordionItem
          value={`item-${item}`}
          className="rounded-md shadow-md px-3  bg-background"
        >
          <AccordionTrigger className="hover:no-underline">
            <AccordinHeader />
          </AccordionTrigger>
          <AccordionContent>
            <AccordinTable />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AccordionComponent;
