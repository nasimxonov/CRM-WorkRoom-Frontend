import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css";
import Icon from "./Icon";

const DateRangePicker: React.FC = () => {
  const [range, setRange] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const formattedRange = `${format(
    range[0].startDate,
    "MMM dd, yyyy"
  )} - ${format(range[0].endDate, "MMM dd, yyyy")}`;

  return (
    <div className="flex flex-col items-start gap-2">
      {/* Input Box */}
      <div className="flex text-[#0A1629] items-center gap-3 bg-[#e6edf5] px-[15px] py-[12px] rounded-[12px] cursor-pointer">
        <Icon.calendar/>
        <span className="text-[#0A1629]">{formattedRange}</span>
      </div>

      {/* Calendar */}
      {/* <DateRange
        editableDateInputs={true}
        onChange={(item) => setRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={range}
      /> */}
    </div>
  );
};

export default DateRangePicker;
