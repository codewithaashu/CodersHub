import React from "react";
import FilterItem from "./FilterItem";
import { FilterJobCategories } from "@/DB/FilterCategories";
import { Card } from "../ui/card";

const FilterContainer = () => {
  return (
    <>
      <Card className="p-5">
        <div className="text-base font-semibold">Filter Search</div>
        {Object.keys(FilterJobCategories).map((curr, index) => {
          return <FilterItem category={curr} key={index} />;
        })}
      </Card>
    </>
  );
};

export default FilterContainer;
