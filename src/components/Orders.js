import React from "react";
import { motion } from "framer-motion";
import { BsTag } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import { VscBellDot } from "react-icons/vsc";
import { IconContext } from "react-icons/lib";
import DateRangeComp from "./DateRangeComp";
import All from "./All";
function Orders() {
  return (
    <motion.div className="overflow-x-hidden">
      <IconContext.Provider value={{ color: "#62AB4D", size: "25px" }}>
        <header className="h-[55px] sm:h-[70px] w-[100%]  sm:w-[100%] bg-[#f7f7f7] flex justify-center items-center px-2 sm:px-3 md:px-12">
          <h4 className="font-bold text-[#62AB4D] text-md sm:text-lg">
            ORDERS
          </h4>

         
        </header>

        <div>
          <hr className="mb-5 mt-5 px-3 sm:mx-6" />
          <div className="px-3 sm:'px-4 md:px-6 my-5 flex sm:flex-row flex-col  lg:gap-4 sm:gap-2 w-[100%]">
            <div className="w-[80%] ss:w-[120px] lg:w-[160px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
              <button className="flex items-center justify-between ss:w-[160px] w-[100%] ">
                <div className="flex items-center ss:gap-3">
                  <IconContext.Provider value={{ size: "15px" }}>
                    {" "}
                    <BsTag />
                  </IconContext.Provider>

                  <h6 className="text-[12px]">Filter</h6>
                </div>

                <div>
                  <IconContext.Provider value={{ size: "25px" }}>
                    <RxCaretDown />
                  </IconContext.Provider>
                </div>
              </button>
            </div>
            <div className="flex sm:flex-row flex-col sm:items-center sm:gap-2 lg:gap-3">
              <h6 className="text-[12px] lg:text-[14px]"> Search:</h6>
              <div className="w-[80%] ss:w-[120px] md:w-[140px] lg:w-[200px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                <input
                  className="w-[100%] h-[100%] outline-none rounded-[10p]"
                  type="text"
                />
              </div>
              <h6 className="text-[12px] lg:text-[14px]"> from</h6>
              <div className="w-[80%] ss:w-[120px] md:w-[140px] lg:w-[200px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                <input
                  className="w-[100%] h-[100%] outline-none rounded-[10p]"
                  type="text"
                />
              </div>
              <h6 className="text-[12px] lg:text-[14px]"> to</h6>
              <div className="w-[80%]  ss:w-[120px] md:w-[140px]lg:w-[200px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                <input
                  className="w-[100%] h-[100%] outline-none rounded-[10p]"
                  type="text"
                />
              </div>
              <button className="w-[80%] ss:mt-0 mt-3 lg:w-[100px] ss:w-[80px] rounded-[7px] h-[30px] lg:text-[14px] sm:text-[12px] flex justify-center items-center bg-green-500">Save</button>
            </div>
          </div>
          <div>
            <All />
          </div>
        </div>
      </IconContext.Provider>
    </motion.div>
  );
}

export default Orders;
