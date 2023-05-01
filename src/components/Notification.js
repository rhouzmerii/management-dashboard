import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { VscBellDot } from "react-icons/vsc";
import { IconContext } from "react-icons";
function Notification() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div>
      <IconContext.Provider value={{ color: "#62AB4D", size: "25px" }}>
        <header className="h-[55px] sm:h-[70px] w-[100%]  sm:w-[100%] bg-[#f7f7f7] flex justify-center items-center px-2 sm:px-3 md:px-6">
          <h4 className="font-bold text-[#62AB4D] text-md sm:text-lg">
            Notifications/ E-Mails
          </h4>
        </header>
      </IconContext.Provider>
      <hr className="mb-5 mt-5 px-3 sm:mx-6" />
      <div className="flex items-center h-[70vh] mx-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center w-[400px] justify-between">
            <h6 className="text-[14px] w-[250px] text-center">
              Send notification for new orders
            </h6>
            <div className="flex px-[2px] flex items-center w-[100px] h-9 bg-red-500 rounded-full">
              <span className="h-8 w-[50px] bg-blue-300 rounded-full"></span>
            </div>
          </div>
          <div className="flex items-center w-[400px] justify-between">
            <h6 className="text-[14px] w-[250px] text-center">
              Update message/Farm edit confirmed/not confirmed by admin
            </h6>
            <div className="flex px-[2px] flex items-center w-[100px] h-9 bg-red-500 rounded-full">
              <span className="h-8 w-[50px] bg-blue-300 rounded-full"></span>
            </div>
          </div>
          <div className="flex items-center w-[400px] justify-between">
            <h6 className="text-[14px] w-[180px] text-center">
              Order delivered
            </h6>
            <div className="flex px-[2px] flex items-center w-[100px] h-9 bg-red-500 rounded-full">
              <span className="h-8 w-[50px] bg-blue-300 rounded-full"></span>
            </div>
          </div>
          <div className="flex items-center w-[400px] justify-between">
            <h6 className="text-[14px] w-[180px] text-center">
              New client rating
            </h6>
            <div className="flex px-[2px] flex items-center w-[100px] h-9 bg-red-500 rounded-full">
              <span className="h-8 w-[50px] bg-blue-300 rounded-full"></span>
            </div>
          </div>
          <div className="flex items-center w-[400px] justify-between">
            <h6 className="text-[14px] w-[180px] text-center">
              Items out of stock
            </h6>
            <div className="flex px-[2px] flex items-center w-[100px] h-9 bg-red-500 rounded-full">
              <span className="h-8 w-[50px] bg-blue-300 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
