import React from "react";

const CategoryItem = ({ value }) => {
  return (
    <>
      <span className="bg-[#1d4fd826] text-[#1d4ed8] py-1 px-2 rounded-full text-xs md:text-sm cursor-pointer">
        {value}
      </span>
    </>
  );
};

export default CategoryItem;
