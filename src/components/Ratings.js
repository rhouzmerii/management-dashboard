import React from "react";

import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { BsTag } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import { VscBellDot } from "react-icons/vsc";

function Ratings() {
  return (
    <div><motion.div className="overflow-x-hidden">
    <IconContext.Provider value={{ color: "#62AB4D", size: "25px" }}>
      <header className="h-[55px] sm:h-[70px] w-[100%]  sm:w-[100%] bg-[#f7f7f7] flex justify-center items-center px-2 sm:px-3 md:px-6">
        <h4 className="font-bold text-[#62AB4D] text-md sm:text-lg">
        Ratings
        </h4>

        
      </header>

      <div>
      <hr className="mb-5 mt-5 px-3 sm:mx-6" />
          <div className="px-3 sm:px-6 my-5 flex gap-4">
            <div className="w-[160px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
              <button className="flex items-center justify-between w-[160px] ">
                <div className="flex items-center gap-3">
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
            <div className="flex items-center gap-3">
              <h6 className="text-[14px]"> Search:</h6>
              <div className="w-[230px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                <input
                  className="w-[100%] h-[100%] outline-none rounded-[10p]"
                  type="text"
                />
              </div>
              <h6 className="text-[14px]"> from</h6>
              <div className="w-[200px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                <input
                  className="w-[100%] h-[100%] outline-none rounded-[10p]"
                  type="text"
                />
              </div>
              <h6 className="text-[14px]"> to</h6>
              <div className="w-[200px] border-[2px] h-[30px] flex justify-center items-center border-red-[#f7f7f7] rounded-[5px] px-1">
                <input
                  className="w-[100%] h-[100%] outline-none rounded-[10p]"
                  type="text"
                />
              </div>
              <button className="w-[100px] rounded-[7px] h-[30px] flex justify-center items-center bg-green-500">Save</button>
            </div>
          </div>
        <div>
          <div className="w-[100%] sm:overflow-x-hidden overflow-x-scroll">
            <IconContext.Provider value={{ size: "10px" }}>
              <h6 className="lg:px-6 mb-2 text-[12px] px-3">
                Showing 11-20 of 64 results
              </h6>

              <div className="w-[100%]">
                <table style={{ width: "100%" }}>
                  <tr className="lg:pl-6 pl-3 bg-[#f7f7f7]">
                    <td className="lg:pl-6 px-3">
                      <div>
                        <div className="flex gap-2 items-center">
                          <input type="checkbox" />
                          <h6 className=" text-[12px] sm:text-[12px] lg:text-[14px]">
                            ITEMS
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          QUANTITY
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          AMOUNT <br />
                          (0=infinite)
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          Auto <br />
                          Renew
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">FILTER</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">PRICE</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          AVAILABLE
                        </h6>
                      </div>
                    </td>
                  </tr>
                  <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
                    <td className="pl-6 py-4">
                      <div className="flex gap-2 items-center">
                        <input type="checkbox" />
                        <h6 className="text-[12px] sm:text-[14px]">
                          Carrots
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">KG</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">20.20</h6>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">Daily</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          Organic
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">12.34</h6>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px] ">X</h6>
                      </div>
                    </td>
                  </tr>
                  <tr className="lg:pl-6 pl-3 bg-[#f7f7f7]">
                    <td className="lg:pl-6 px-3">
                      <div>
                        <div className="flex gap-2 items-center">
                          <input type="checkbox" />
                          <h6 className=" text-[12px] sm:text-[12px] lg:text-[14px]">
                            ITEMS
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          QUANTITY
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          AMOUNT <br />
                          (0=infinite)
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          Auto <br />
                          Renew
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">FILTER</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">PRICE</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          AVAILABLE
                        </h6>
                      </div>
                    </td>
                  </tr>
                  <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
                    <td className="pl-6 py-4">
                      <div className="flex gap-2 items-center">
                        <input type="checkbox" />
                        <h6 className="text-[12px] sm:text-[14px]">
                          Carrots
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">KG</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">20.20</h6>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">Daily</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          Organic
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">12.34</h6>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px] ">X</h6>
                      </div>
                    </td>
                  </tr>
                  <tr className="lg:pl-6 pl-3 bg-[#f7f7f7]">
                    <td className="lg:pl-6 px-3">
                      <div>
                        <div className="flex gap-2 items-center">
                          <input type="checkbox" />
                          <h6 className=" text-[12px] sm:text-[12px] lg:text-[14px]">
                            ITEMS
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          QUANTITY
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          AMOUNT <br />
                          (0=infinite)
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          Auto <br />
                          Renew
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">FILTER</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">PRICE</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          AVAILABLE
                        </h6>
                      </div>
                    </td>
                  </tr>
                  <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
                    <td className="pl-6 py-4">
                      <div className="flex gap-2 items-center">
                        <input type="checkbox" />
                        <h6 className="text-[12px] sm:text-[14px]">
                          Carrots
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">KG</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">20.20</h6>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">Daily</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          Organic
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">12.34</h6>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px] ">X</h6>
                      </div>
                    </td>
                  </tr>
                  <tr className="lg:pl-6 pl-3 bg-[#f7f7f7]">
                    <td className="lg:pl-6 px-3">
                      <div>
                        <div className="flex gap-2 items-center">
                          <input type="checkbox" />
                          <h6 className=" text-[12px] sm:text-[12px] lg:text-[14px]">
                            ITEMS
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          QUANTITY
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          AMOUNT <br />
                          (0=infinite)
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          Auto <br />
                          Renew
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">FILTER</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">PRICE</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          AVAILABLE
                        </h6>
                      </div>
                    </td>
                  </tr>
                  <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
                    <td className="pl-6 py-4">
                      <div className="flex gap-2 items-center">
                        <input type="checkbox" />
                        <h6 className="text-[12px] sm:text-[14px]">
                          Carrots
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">KG</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">20.20</h6>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">Daily</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          Organic
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">12.34</h6>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px] ">X</h6>
                      </div>
                    </td>
                  </tr>
                  <tr className="lg:pl-6 pl-3 bg-[#f7f7f7]">
                    <td className="lg:pl-6 px-3">
                      <div>
                        <div className="flex gap-2 items-center">
                          <input type="checkbox" />
                          <h6 className=" text-[12px] sm:text-[12px] lg:text-[14px]">
                            ITEMS
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          QUANTITY
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          AMOUNT <br />
                          (0=infinite)
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          Auto <br />
                          Renew
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">FILTER</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">PRICE</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          AVAILABLE
                        </h6>
                      </div>
                    </td>
                  </tr>
                  <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
                    <td className="pl-6 py-4">
                      <div className="flex gap-2 items-center">
                        <input type="checkbox" />
                        <h6 className="text-[12px] sm:text-[14px]">
                          Carrots
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">KG</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">20.20</h6>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">Daily</h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">
                          Organic
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px]">12.34</h6>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2 items-center">
                        <h6 className="text-[12px] lg:text-[14px] ">X</h6>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  </motion.div></div>
  )
}

export default Ratings