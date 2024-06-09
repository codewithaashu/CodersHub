import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const SelectComponent = ({
  placeholder,
  selectItems,
  itemStyle,
  selectBtnStyle,
  setSelect,
}) => {
  return (
    <>
      <Select onValueChange={(value) => setSelect(value)}>
        <SelectTrigger className={selectBtnStyle}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-xs">{placeholder}</SelectLabel>

            {selectItems.map((curr, index) => {
              return (
                <SelectItem value={curr} className={itemStyle} key={index}>
                  {curr}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectComponent;
