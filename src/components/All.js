import React from "react";
import { IconContext } from "react-icons";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { BsCaretDown } from "react-icons/bs";

function All() {
  return (
    <div className="w-[100%] sm:overflow-x-hidden overflow-x-scroll">
      <IconContext.Provider value={{ size: "10px" }}>
        <h6 className="lg:px-6 text-[12px] px-3">Showing 11-20 of 64 results</h6>

        <div className="w-[100%]">
          <table style={{width:'100%'}} >
            <tr className="lg:pl-6 pl-3 bg-[#f7f7f7]">
              <td className="lg:pl-6 px-3">
                <div>
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" />
                    <h6 className=" text-[12px] sm:text-[12px] lg:text-[14px]">REF</h6>
                    <div>
                      <AiFillCaretUp />
                      <AiFillCaretDown />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                <h6 className="text-[12px] lg:text-[14px]">CREATED</h6>
                  <div>
                    <AiFillCaretUp />
                    <AiFillCaretDown />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                <h6 className="text-[12px] lg:text-[14px]">CUSTOMER</h6>
                  <div>
                    <AiFillCaretUp />
                    <AiFillCaretDown />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                <h6 className="text-[12px] lg:text-[14px]">PRODUCTS</h6>
                  <div>
                    <AiFillCaretUp />
                    <AiFillCaretDown />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                <h6 className="text-[12px] lg:text-[14px]">START TIME</h6>
                  <div>
                    <AiFillCaretUp />
                    <AiFillCaretDown />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                <h6 className="text-[12px] lg:text-[14px]">END TIME</h6>
                  <div>
                    <AiFillCaretUp />
                    <AiFillCaretDown />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                <h6 className="text-[12px] lg:text-[14px]">LOCATION</h6>
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
                <h6 className="text-[12px] lg:text-[14px]">PRICE</h6>
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
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                <h6 className="text-[12px] lg:text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] bg-red-300 md:p-[2px] lg:p-1 rounded-[10px] text-red-500 font-bold">
                    Cancelled
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] ">
                   150,000<br/>
                   NGN
                  </h6>
                </div>
              </td>

              
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="pl-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                <h6 className="text-[12px] lg:text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] bg-red-300 md:p-[2px] lg:p-1 rounded-[10px] text-red-500 font-bold">
                    Cancelled
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] ">
                   150,000<br/>
                   NGN
                  </h6>
                </div>
              </td>

              
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="pl-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                <h6 className="text-[12px] lg:text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] bg-red-300 md:p-[2px] lg:p-1 rounded-[10px] text-red-500 font-bold">
                    Cancelled
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] ">
                   150,000<br/>
                   NGN
                  </h6>
                </div>
              </td>

              
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="pl-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                <h6 className="text-[12px] lg:text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] bg-red-300 md:p-[2px] lg:p-1 rounded-[10px] text-red-500 font-bold">
                    Cancelled
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] ">
                   150,000<br/>
                   NGN
                  </h6>
                </div>
              </td>

              
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="pl-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                <h6 className="text-[12px] lg:text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] bg-red-300 md:p-[2px] lg:p-1 rounded-[10px] text-red-500 font-bold">
                    Cancelled
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] ">
                   150,000<br/>
                   NGN
                  </h6>
                </div>
              </td>

              
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="pl-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                <h6 className="text-[12px] lg:text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] bg-red-300 md:p-[2px] lg:p-1 rounded-[10px] text-red-500 font-bold">
                    Cancelled
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] ">
                   150,000<br/>
                   NGN
                  </h6>
                </div>
              </td>

              
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="pl-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                <h6 className="text-[12px] lg:text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] bg-red-300 md:p-[2px] lg:p-1 rounded-[10px] text-red-500 font-bold">
                    Cancelled
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] ">
                   150,000<br/>
                   NGN
                  </h6>
                </div>
              </td>

              
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="pl-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                <h6 className="text-[12px] lg:text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] bg-red-300 md:p-[2px] lg:p-1 rounded-[10px] text-red-500 font-bold">
                    Cancelled
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] ">
                   150,000<br/>
                   NGN
                  </h6>
                </div>
              </td>

              
            </tr>
            <tr className="pl-6 border-[1px] border-b-[#f7f7f7]">
              <td className="pl-6 py-4">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h6 className="text-[12px] sm:text-[14px]">QH29</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                <h6 className="text-[12px] lg:text-[14px]">
                    15 April 2023 <br />
                    16:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Peter Yinka</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">Yams</h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    18 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    28 April 2023
                    <br />
                    14:00
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px]">
                    Idumota
                    <br />
                    Lagos
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] bg-red-300 md:p-[2px] lg:p-1 rounded-[10px] text-red-500 font-bold">
                    Cancelled
                  </h6>
                </div>
              </td>
              <td>
                <div className="flex gap-2 items-center">
                  <h6 className="text-[12px] lg:text-[14px] ">
                   150,000<br/>
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
