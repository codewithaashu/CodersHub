import React from "react";
import { Card } from "../ui/card";
import AccordionComponent from "./AccordionComponent";

const SheetAccordion = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <AccordionComponent item={1} />
        <AccordionComponent item={2} />
        <AccordionComponent item={3} />
        <AccordionComponent item={4} />
        <AccordionComponent item={5} />
        <AccordionComponent item={6} />
      </div>
    </>
  );
};

export default SheetAccordion;
