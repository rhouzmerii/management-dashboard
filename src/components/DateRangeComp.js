import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import { BsCalendarEvent } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { IconContext } from "react-icons";

const DateRangeComp = () => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("click", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="calendarWrap">
      <IconContext.Provider value={{ size: "12px" }}>
        <div className="w-[160px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
        <button
          onClick={() => setOpen((open) => !open)}
          className="flex items-center justify-between w-[160px] "
        >
          <div className="flex items-center gap-3">
            <BsCalendarEvent />

            <h6 className="text-[12px]">Data Range</h6>
          </div>

          <div>
            <IconContext.Provider value={{ size: "25px" }}>
              <RxCaretDown />
            </IconContext.Provider>
          </div>
        </button>
        </div>
        
      </IconContext.Provider>

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangeComp;
