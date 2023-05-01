import React from "react";
import { IconContext } from "react-icons";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { BsCaretDown } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

function All() {
  return (
    <div className="w-[100%] sm:overflow-x-hidden overflow-x-scroll">
      <IconContext.Provider value={{ size: "10px" }}>
        <h6 className="lg:px-6 text-[12px] mb-2 px-3">
          Showing 11-20 of 64 results
        </h6>

        <div className="w-[100%]">
          <table style={{ width: "100%" }}>
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
                    PAYMENT <br /> METHOD
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
                  <h6 className="text-[12px] lg:text-[14px]">DATE & TIME</h6>
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

            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className=" px-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Visa</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">123.00</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Delivered</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    DD.MM.YYYY <br />
                    HH:MM
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <IconContext.Provider value={{ size: "30px" }}>
                    <FiEdit />
                  </IconContext.Provider>
                </div>
              </td>
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="px-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Visa</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">123.00</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Delivered</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    DD.MM.YYYY <br />
                    HH:MM
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <IconContext.Provider value={{ size: "30px" }}>
                    <FiEdit />
                  </IconContext.Provider>
                </div>
              </td>
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="px-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Visa</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">123.00</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Delivered</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    DD.MM.YYYY <br />
                    HH:MM
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <IconContext.Provider value={{ size: "30px" }}>
                    <FiEdit />
                  </IconContext.Provider>
                </div>
              </td>
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="px-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Visa</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">123.00</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Delivered</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    DD.MM.YYYY <br />
                    HH:MM
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <IconContext.Provider value={{ size: "30px" }}>
                    <FiEdit />
                  </IconContext.Provider>
                </div>
              </td>
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="px-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Visa</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">123.00</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Delivered</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    DD.MM.YYYY <br />
                    HH:MM
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <IconContext.Provider value={{ size: "30px" }}>
                    <FiEdit />
                  </IconContext.Provider>
                </div>
              </td>
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="px-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Visa</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">123.00</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Delivered</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    DD.MM.YYYY <br />
                    HH:MM
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <IconContext.Provider value={{ size: "30px" }}>
                    <FiEdit />
                  </IconContext.Provider>
                </div>
              </td>
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="px-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Visa</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">123.00</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Delivered</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    DD.MM.YYYY <br />
                    HH:MM
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <IconContext.Provider value={{ size: "30px" }}>
                    <FiEdit />
                  </IconContext.Provider>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default All;
