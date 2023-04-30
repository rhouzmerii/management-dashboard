import React from "react";
import { motion } from "framer-motion";
import { VscBellDot } from "react-icons/vsc";
import { IconContext } from "react-icons/lib";
import { FiSearch } from "react-icons/fi";
import { RxCaretDown } from "react-icons/rx";
import { AiOutlineSliders } from "react-icons/ai";
import { BsSave2, BsTag } from "react-icons/bs";
import DateRangeComp from "./DateRangeComp";
import Tabs from "../components/Tabs";
function Orders() {
  return (
    <motion.div>
      <IconContext.Provider value={{ color: "#62AB4D", size: "25px" }}>
        <header className="h-[55px] sm:h-[70px] w-[100%] bg-[#f7f7f7] flex justify-between items-center px-2 sm:px-6">
          <h4 className="font-bold text-[#62AB4D] text-md sm:text-lg">
            ORDERS
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

        <div className="flex  mt-5 px-6 w-[100%] justify-between">
          <div className="">
            <div className="sm:w-[350px]  w-[320px] sm:h-[35px]  rounded-[5px] border-[2px] border-red-[#f7f7f7] flex  gap-2 justify-center items-center flex-row px-1 ">
              <IconContext.Provider value={{ size: "20px",color: "#62AB4D" }}>
                <FiSearch />
              </IconContext.Provider>
              <input
                type="text"
                className="w-[100%] h-[100%] bg-transparent outline-none text-[#f7f7f7] rounded-l-[10px] pl-3 placeholder:text-[14px]"
                placeholder="Search by any order parameter....."
              />
            </div>
          </div>
          <DateRangeComp />
          <div className="w-[160px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
            <button className="flex items-center justify-between w-[160px] ">
              <div className="flex items-center gap-3">
                <IconContext.Provider value={{ size: "15px" }}>
                  {" "}
                  <BsTag />
                </IconContext.Provider>

                <h6 className="text-[12px]">Status</h6>
              </div>

              <div>
                <IconContext.Provider value={{ size: "25px" }}>
                  <RxCaretDown />
                </IconContext.Provider>
              </div>
            </button>
          </div>
          <div className="w-[160px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
            <button className="flex items-center justify-between w-[160px] ">
              <div className="flex items-center gap-3">
                <IconContext.Provider value={{ size: "13px" }}>
                  {" "}
                  <BsSave2 />
                </IconContext.Provider>

                <h6 className="text-[12px]">Saved filters(0)</h6>
              </div>

              <div>
                <IconContext.Provider value={{ size: "25px" }}>
                  <RxCaretDown />
                </IconContext.Provider>
              </div>
            </button>
          </div>
          <div className="w-[160px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
            <button className="flex items-center justify-between w-[160px] ">
              <div className="flex items-center gap-3">
                <IconContext.Provider value={{ size: "17px" }}>
                  {" "}
                  <AiOutlineSliders />
                </IconContext.Provider>

                <h6 className="text-[12px]">More filters</h6>
              </div>

              <div>
                <IconContext.Provider value={{ size: "25px" }}>
                  <RxCaretDown />
                </IconContext.Provider>
              </div>
            </button>
          </div>
        </div>
        <div>
          <div className="px-6 mt-5">
            <hr className="mb-5" />
          </div>
          <div>
            <Tabs />
          </div>
        </div>
      </IconContext.Provider>
    </motion.div>
  );
}

export default Orders;
