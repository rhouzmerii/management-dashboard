import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { VscBellDot } from "react-icons/vsc";
import { IconContext } from "react-icons";
function Notification() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="">
      <IconContext.Provider value={{ color: "#62AB4D", size: "25px" }}>
        <header className="h-[55px] sm:h-[70px] w-[100%]  sm:w-[100%] bg-[#f7f7f7] flex justify-center items-center px-2 sm:px-3 md:px-6">
          <h4 className="font-bold text-[#62AB4D] text-md sm:text-lg">
            Notifications/ E-Mails
          </h4>
        </header>
      </IconContext.Provider>
      <hr className="mb-5 mt-5 px-3 sm:mx-6" />
      <div className="flex items-center h-[70vh] mx-4 w-[100%]  sm:mx-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center w-[300px] sm:w-[400px] justify-between">
            <h6 className="text-[14px] w-[250px] text-center">
              Send notification for new orders
            </h6>
            <div className="flex px-[2px] border items-center w-[80px] sm:w-[100px] sm:h-9 h-7 bg-[#f6f5f5] rounded-full">
              <span className="h-6 sm:h-8 sm:w-[50px] w-[37px] border bg-[#28f928] rounded-full"></span>
            </div>
          </div>
          <div className="flex items-center w-[300px] sm:w-[400px] justify-between">
            <h6 className="text-[14px] w-[250px] text-center">
              Update message/Farm edit confirmed/not confirmed by admin
            </h6>
            <div className="flex px-[2px] border items-center w-[80px] sm:w-[100px] sm:h-9 h-7 bg-[#f6f5f5] rounded-full">
              <span className="h-6 sm:h-8 sm:w-[50px] w-[37px] border bg-[#28f928] rounded-full"></span>
            </div>
          </div>
          <div className="flex items-center w-[300px] sm:w-[400px] justify-between">
            <h6 className="text-[14px] w-[180px] text-center">
              Order delivered
            </h6>
            <div className="flex px-[2px] border items-center w-[80px] sm:w-[100px] sm:h-9 h-7 bg-[#f6f5f5] rounded-full">
              <span className="h-6 sm:h-8 sm:w-[50px] w-[37px] border bg-[#28f928] rounded-full"></span>
            </div>
          </div>
          <div className="flex items-center w-[300px] sm:w-[400px] justify-between">
            <h6 className="text-[14px] w-[180px] text-center">
              New client rating
            </h6>
            <div className="flex px-[2px] border items-center w-[80px] sm:w-[100px] sm:h-9 h-7 bg-[#f6f5f5] rounded-full">
              <span className="h-6 sm:h-8 sm:w-[50px] w-[37px] border bg-[#28f928] rounded-full"></span>
            </div>
          </div>
          <div className="flex items-center w-[300px] sm:w-[400px] justify-between">
            <h6 className="text-[14px] w-[180px] text-center">
              Items out of stock
            </h6>
            <div className="flex px-[2px] border items-center w-[80px] sm:w-[100px] sm:h-9 h-7 bg-[#f6f5f5] rounded-full">
              <span className="h-6 sm:h-8 sm:w-[50px] w-[37px] border bg-[#28f928] rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
