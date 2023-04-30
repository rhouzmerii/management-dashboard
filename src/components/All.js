import React from "react";
import { IconContext } from "react-icons";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { BsCaretDown } from "react-icons/bs";

function All() {
  return (
    <div className="">
      <IconContext.Provider value={{ size: "10px" }}>
        <h6 className="px-6 text-[12px] py-3">Showing 11-20 of 64 results</h6>

        <div className="w-[100%]">
          <table style={{ width: "100%" }}>
            <tr className="pl-6 bg-[#f7f7f7]">
              <td className="pl-6 py-3">
                <div>
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" />
                    <h6 className="text-[14px]">REF</h6>
                    <div>
                      <AiFillCaretUp />
                      <AiFillCaretDown />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">CREATED</h6>
                  <div>
                    <AiFillCaretUp />
                    <AiFillCaretDown />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">CUSTOMER</h6>
                  <div>
                    <AiFillCaretUp />
                    <AiFillCaretDown />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">PRODUCTS</h6>
                  <div>
                    <AiFillCaretUp />
                    <AiFillCaretDown />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">START TIME</h6>
                  <div>
                    <AiFillCaretUp />
                    <AiFillCaretDown />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">END TIME</h6>
                  <div>
                    <AiFillCaretUp />
                    <AiFillCaretDown />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">DISTRIBUTION</h6>
                  <div>
                    <AiFillCaretUp />
                    <AiFillCaretDown />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">STATUS</h6>
                  <div>
                    <AiFillCaretUp />
                    <AiFillCaretDown />
                  </div>
                </div>
              </td>

              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">PRICE</h6>
                  <div>
                    <AiFillCaretUp />
                    <AiFillCaretDown />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="pl-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px] bg-red-300 p-1 rounded-[10px] text-red-500 font-bold">
                    Cancelled
                  </h6>
                </div>
              </td>

              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    150,000
                    <br />
                    NGN
                  </h6>
                </div>
              </td>
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="pl-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px] bg-gray-300 p-1 rounded-[10px] text-gray-500 font-bold">
                    Closed
                  </h6>
                </div>
              </td>

              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    150,000
                    <br />
                    NGN
                  </h6>
                </div>
              </td>
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="pl-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px] bg-gray-300 p-1 rounded-[10px] text-gray-500 font-bold">
                    Drooped
                  </h6>
                </div>
              </td>

              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    150,000
                    <br />
                    NGN
                  </h6>
                </div>
              </td>
            </tr>
            <tr className="pl-6 bg-yellow-200 border-[1px] border-b-[#f7f7f7]">
              <td className="pl-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px] bg-green-300 p-1 rounded-[10px] text-green-500 font-bold">
                    Delievred
                  </h6>
                </div>
              </td>

              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    150,000
                    <br />
                    NGN
                  </h6>
                </div>
              </td>
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="pl-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px] bg-red-300 p-1 rounded-[10px] text-red-500 font-bold">
                    Cancelled
                  </h6>
                </div>
              </td>

              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    150,000
                    <br />
                    NGN
                  </h6>
                </div>
              </td>
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="pl-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px] bg-red-300 p-1 rounded-[10px] text-red-500 font-bold">
                    Cancelled
                  </h6>
                </div>
              </td>

              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    150,000
                    <br />
                    NGN
                  </h6>
                </div>
              </td>
            </tr>

            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="pl-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px] bg-red-300 p-1 rounded-[10px] text-red-500 font-bold">
                    Cancelled
                  </h6>
                </div>
              </td>

              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[14px]">
                    150,000
                    <br />
                    NGN
                  </h6>
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
