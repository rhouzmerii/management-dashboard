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
          <header className="h-[55px] sm:h-[70px] w-[100%]  sm:w-[100%] bg-[#f7f7f7] flex justify-center items-center px-2 sm:px-3 md:px-6">
            <h4 className="font-bold text-[#62AB4D] text-md sm:text-lg">
              REVENUE
            </h4>
          </header>

          <div className="w-[100%]">
            <hr className="mb-5 mt-5 px-3 sm:px-6" />
            <div className="">
              <div className="px-6 flex justify-between sm:flex-row flex-col sm:items-end mt-8 ">
                <div className="flex flex-col gap-3">
                  <div className="flex sm:items-center justify-between w-[100%] sm:flex-row flex-col md:w-[400px] lg:w-[550px]">
                    <h6 className="text-[14px]">Number of sales</h6>
                    <div className="md:w-[250px] lg:w-[400px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                      <input
                        className="w-[100%] h-[100%] outline-none rounded-[10p]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex sm:items-center justify-between w-[100%] sm:flex-row flex-col md:w-[400px] lg:w-[550px]">
                    <h6 className="text-[14px]">Sales in CHF</h6>
                    <div className="md:w-[250px] lg:w-[400px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                      <input
                        className="w-[100%] h-[100%] outline-none rounded-[10p]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex sm:items-center justify-between w-[100%] sm:flex-row flex-col md:w-[400px] lg:w-[550px]">
                    <h6 className="text-[14px]">Revenue/profit</h6>
                    <div className="md:w-[250px] lg:w-[400px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                      <input
                        className="w-[100%] h-[100%] outline-none rounded-[10p]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex sm:items-center justify-between w-[100%] sm:flex-row flex-col md:w-[400px] lg:w-[550px]">
                    <h6 className="text-[14px]">Best selling item</h6>
                    <div className="md:w-[250px] lg:w-[400px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                      <input
                        className="w-[100%] h-[100%] outline-none rounded-[10p]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex sm:items-center justify-between w-[100%] sm:flex-row flex-col md:w-[400px] lg:w-[550px]">
                    <h6 className="text-[14px] sm:text-center">
                      Region with most
                      <br className="hidden sm:flex" />
                      Clients
                    </h6>
                    <div className="md:w-[250px] lg:w-[400px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                      <input
                        className="w-[100%] h-[100%] outline-none rounded-[10px]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex sm:items-center justify-between w-[100%] sm:flex-row flex-col md:w-[400px] lg:w-[550px]">
                    <h6 className="text-[14px] sm:text-center">
                      Region with most
                      <br className="hidden sm:flex" />
                      deliveries
                    </h6>
                    <div className="md:w-[250px] lg:w-[400px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                      <input
                        className="w-[100%] h-[100%] outline-none rounded-[10p]"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <h5 className="text-center text-[14px] sm:mb-10 sm:mt-0 my-5">
                    Diagram of selected Value
                    <br />
                    (Sales in CHF)
                  </h5>
                  <div className="w-[100%] sm:w-[300px] md:w-[350px] lg:w-[500px] h-[270px] bg-[#333333] "></div>
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
