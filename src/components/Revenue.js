import React from "react";

import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { BsTag } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import { VscBellDot } from "react-icons/vsc";

function Revenue() {
  return (
    <div>
      <motion.div className="overflow-x-hidden">
        <IconContext.Provider value={{ color: "#62AB4D", size: "25px" }}>
          <header className="h-[55px] sm:h-[70px] w-[100%]  sm:w-[100%] bg-[#f7f7f7] flex justify-between items-center px-2 sm:px-3 md:px-6">
            <h4 className="font-bold text-[#62AB4D] text-md sm:text-lg">
              EditFarm
            </h4>

            <div className="flex gap-2 items-center">
              <div className="sm:h-[45px] sm:w-[45px] w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center">
                <h6 className="font-bold text-[#62AB4D] text-md sm:text-lg">
                  RV
                </h6>
              </div>
              <VscBellDot />
            </div>
          </header>

          <div className="w-[100%]">
            <hr className="mb-5 mt-5 px-3 sm:px-6" />
            <div className="">
              <div className="px-6 flex justify-between items-end mt-8 ">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between w-[500px]">
                    <h6 className="text-[14px]">Farm Name</h6>
                    <div className="w-[400px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                      <input
                        className="w-[100%] h-[100%] outline-none rounded-[10p]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-[500px]">
                    <h6 className="text-[14px]">Farm Address</h6>
                    <div className="w-[400px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                      <input
                        className="w-[100%] h-[100%] outline-none rounded-[10p]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-[500px]">
                    <h6 className="text-[14px]">City/Village</h6>
                    <div className="w-[400px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                      <input
                        className="w-[100%] h-[100%] outline-none rounded-[10p]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-[500px]">
                    <h6 className="text-[14px]">Upload Picture</h6>
                    <div className="w-[400px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                      <input
                        className="w-[100%] h-[100%] outline-none rounded-[10p]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-[500px]">
                    <h6 className="text-[14px]">Phone Number</h6>
                    <div className="w-[400px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                      <input
                        className="w-[100%] h-[100%] outline-none rounded-[10p]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-[500px]">
                    <h6 className="text-[14px]">Select Filters</h6>
                    <div className="w-[400px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                      <input
                        className="w-[100%] h-[100%] outline-none rounded-[10p]"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <h5 className="text-center text-[14px] mb-8">
                    Diagram of selected Value
                    <br />
                    (Sales in CHF)
                  </h5>
                  <div className="w-[500px] h-[270px] bg-red-500 "></div>
                </div>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </motion.div>
    </div>
  );
}

export default Revenue;
