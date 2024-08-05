import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DateSelect = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Date" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>January 12 - January 18</SelectLabel>
            <SelectItem value="apple">January 12 - January 18</SelectItem>
            <SelectItem value="banana">January 12 - January 18</SelectItem>
            <SelectItem value="blueberry">January 12 - January 18</SelectItem>
            <SelectItem value="grapes">January 12 - January 18</SelectItem>
            <SelectItem value="pineapple">January 12 - January 18</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DateSelect;
