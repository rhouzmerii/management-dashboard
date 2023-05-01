import React from "react";
import { motion } from "framer-motion";
import { BsTag } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import { VscBellDot } from "react-icons/vsc";
import { IconContext } from "react-icons/lib";
import DateRangeComp from "./DateRangeComp";
import All from "./All";
import { FiEdit } from "react-icons/fi";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
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
            <div className="w-[100%] ss:w-[120px] lg:w-[160px] border-[2px] h-[35px] sm:mb-0 mb-2 flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
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
              <div className="w-[100%] ss:w-[120px] md:w-[140px] sm:mb-0 mb-2  lg:w-[200px] border-[2px] h-[35px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                <input
                  className="w-[100%] h-[100%] outline-none rounded-[10p]"
                  type="text"
                />
              </div>
              <h6 className="text-[12px] lg:text-[14px]"> from</h6>
              <div className="w-[100%] ss:w-[120px] md:w-[140px] lg:w-[200px] sm:mb-0 mb-2  border-[2px] h-[35px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                <input
                  className="w-[100%] h-[100%] outline-none rounded-[10p]"
                  type="text"
                />
              </div>
              <h6 className="text-[12px] lg:text-[14px]"> to</h6>
              <div className="w-[100%]  ss:w-[120px] md:w-[140px]lg:w-[200px] border-[2px] h-[35px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                <input
                  className="w-[100%] h-[100%] outline-none rounded-[10p]"
                  type="text"
                />
              </div>
              <button className="w-[100%] ss:mt-0 mt-3 lg:w-[100px] ss:w-[80px] rounded-[7px] h-[35px] lg:text-[14px] sm:text-[12px] flex justify-center items-center bg-green-500">
                Save
              </button>
            </div>
          </div>
          <div>
            <table>
              <thead>
                <IconContext.Provider value={{ size: "12px" }}>
                  <tr className=" pl-3 bg-[#f7f7f7]">
                    <td className=" py-3 px-6">
                      <div>
                        <div className="flex gap-2 items-center">
                          <input type="checkbox" />
                          <h6 className=" text-[12px] sm:text-[12px] lg:text-[14px]">
                            REF
                          </h6>
                          <div>
                            <AiFillCaretUp />
                            <AiFillCaretDown />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          PAYMENT  METHOD
                        </h6>
                        <div>
                          <AiFillCaretUp />
                          <AiFillCaretDown />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">PRICE</h6>
                        <div>
                          <AiFillCaretUp />
                          <AiFillCaretDown />
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">STATUS</h6>
                        <div>
                          <AiFillCaretUp />
                          <AiFillCaretDown />
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          DATE & TIME
                        </h6>
                        <div>
                          <AiFillCaretUp />
                          <AiFillCaretDown />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">DETAILS</h6>
                        <div>
                          <AiFillCaretUp />
                          <AiFillCaretDown />
                        </div>
                      </div>
                    </td>
                  </tr>
                </IconContext.Provider>
              </thead>
              <tbody>
                <tr className="">
                  <td data-label="Ref" className=" px-4 sm:pl-6">
                    <h6 className="text-[14px]">QH29</h6>
                  </td>
                  <td data-label=" PAYMENT  METHOD" className="px-3 ">
                    {" "}
                    <h6 className="text-[14px]">Visa</h6>
                  </td>
                  <td data-label="Price" className=" px-3">
                    <h6 className="text-[14px]">123.00</h6>
                  </td>
                  <td data-label="STATUS" className="px-3">
                    {" "}
                    <h6 className="text-[14px] ">Delivered</h6>
                  </td>
                  <td data-label="DATE & TIME" className="px-3">
                    {" "}
                    <h6 className="text-[14px]">
                      DD.MM.YYYY <br />
                      HH:MM
                    </h6>
                  </td>
                  <td data-label="DETAILS" className=" px-3">
                
                   Edit
                  </td>
                </tr>
                <tr className="">
                  <td data-label="Ref" className=" px-4 sm:pl-6">
                    <h6 className="text-[14px]">QH29</h6>
                  </td>
                  <td data-label=" PAYMENT  METHOD" className="px-3 ">
                    {" "}
                    <h6 className="text-[14px]">Visa</h6>
                  </td>
                  <td data-label="Price" className=" px-3">
                    <h6 className="text-[14px]">123.00</h6>
                  </td>
                  <td data-label="STATUS" className="px-3">
                    {" "}
                    <h6 className="text-[14px] ">Delivered</h6>
                  </td>
                  <td data-label="DATE & TIME" className="px-3">
                    {" "}
                    <h6 className="text-[14px]">
                      DD.MM.YYYY <br />
                      HH:MM
                    </h6>
                  </td>
                  <td data-label="DETAILS" className=" px-3">
                
                   Edit
                  </td>
                </tr>
                <tr className="">
                  <td data-label="Ref" className=" px-4 sm:pl-6">
                    <h6 className="text-[14px]">QH29</h6>
                  </td>
                  <td data-label=" PAYMENT  METHOD" className="px-3 ">
                    {" "}
                    <h6 className="text-[14px]">Visa</h6>
                  </td>
                  <td data-label="Price" className=" px-3">
                    <h6 className="text-[14px]">123.00</h6>
                  </td>
                  <td data-label="STATUS" className="px-3">
                    {" "}
                    <h6 className="text-[14px] ">Delivered</h6>
                  </td>
                  <td data-label="DATE & TIME" className="px-3">
                    {" "}
                    <h6 className="text-[14px]">
                      DD.MM.YYYY <br />
                      HH:MM
                    </h6>
                  </td>
                  <td data-label="DETAILS" className=" px-3">
                
                   Edit
                  </td>
                </tr>
                <tr className="">
                  <td data-label="Ref" className=" px-4 sm:pl-6">
                    <h6 className="text-[14px]">QH29</h6>
                  </td>
                  <td data-label=" PAYMENT  METHOD" className="px-3 ">
                    {" "}
                    <h6 className="text-[14px]">Visa</h6>
                  </td>
                  <td data-label="Price" className=" px-3">
                    <h6 className="text-[14px]">123.00</h6>
                  </td>
                  <td data-label="STATUS" className="px-3">
                    {" "}
                    <h6 className="text-[14px] ">Delivered</h6>
                  </td>
                  <td data-label="DATE & TIME" className="px-3">
                    {" "}
                    <h6 className="text-[14px]">
                      DD.MM.YYYY <br />
                      HH:MM
                    </h6>
                  </td>
                  <td data-label="DETAILS" className=" px-3">
                
                   Edit
                  </td>
                </tr>
                <tr className="">
                  <td data-label="Ref" className=" px-4 sm:pl-6">
                    <h6 className="text-[14px]">QH29</h6>
                  </td>
                  <td data-label=" PAYMENT  METHOD" className="px-3 ">
                    {" "}
                    <h6 className="text-[14px]">Visa</h6>
                  </td>
                  <td data-label="Price" className=" px-3">
                    <h6 className="text-[14px]">123.00</h6>
                  </td>
                  <td data-label="STATUS" className="px-3">
                    {" "}
                    <h6 className="text-[14px] ">Delivered</h6>
                  </td>
                  <td data-label="DATE & TIME" className="px-3">
                    {" "}
                    <h6 className="text-[14px]">
                      DD.MM.YYYY <br />
                      HH:MM
                    </h6>
                  </td>
                  <td data-label="DETAILS" className=" px-3">
                
                   Edit
                  </td>
                </tr>
                <tr className="">
                  <td data-label="Ref" className=" px-4 sm:pl-6">
                    <h6 className="text-[14px]">QH29</h6>
                  </td>
                  <td data-label=" PAYMENT  METHOD" className="px-3 ">
                    {" "}
                    <h6 className="text-[14px]">Visa</h6>
                  </td>
                  <td data-label="Price" className=" px-3">
                    <h6 className="text-[14px]">123.00</h6>
                  </td>
                  <td data-label="STATUS" className="px-3">
                    {" "}
                    <h6 className="text-[14px] ">Delivered</h6>
                  </td>
                  <td data-label="DATE & TIME" className="px-3">
                    {" "}
                    <h6 className="text-[14px]">
                      DD.MM.YYYY <br />
                      HH:MM
                    </h6>
                  </td>
                  <td data-label="DETAILS" className=" px-3">
                
                   Edit
                  </td>
                </tr>
                <tr className="">
                  <td data-label="Ref" className=" px-4 sm:pl-6">
                    <h6 className="text-[14px]">QH29</h6>
                  </td>
                  <td data-label=" PAYMENT  METHOD" className="px-3 ">
                    {" "}
                    <h6 className="text-[14px]">Visa</h6>
                  </td>
                  <td data-label="Price" className=" px-3">
                    <h6 className="text-[14px]">123.00</h6>
                  </td>
                  <td data-label="STATUS" className="px-3">
                    {" "}
                    <h6 className="text-[14px] ">Delivered</h6>
                  </td>
                  <td data-label="DATE & TIME" className="px-3">
                    {" "}
                    <h6 className="text-[14px]">
                      DD.MM.YYYY <br />
                      HH:MM
                    </h6>
                  </td>
                  <td data-label="DETAILS" className=" px-3">
                
                   Edit
                  </td>
                </tr>
             
              </tbody>
            </table>
          </div>
        </div>
      </IconContext.Provider>
    </motion.div>
  );
}

export default Orders;
