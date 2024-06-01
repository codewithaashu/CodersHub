import React from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
const TwoColumnsInput = ({ label, placeholder, setPoll, poll, field }) => {
  return (
    <>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label className="font-medium text-[13px]">{label}</Label>
        <Input
          id="maxHeight"
          className="col-span-2 h-8 text-[13px]"
          placeholder={placeholder}
          onChange={(e) => setPoll({ ...poll, [field]: e.target.value })}
        />
      </div>
    </>
  );
};

export default TwoColumnsInput;
