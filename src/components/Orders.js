import React from "react";
import { motion } from "framer-motion";
import { VscBellDot } from "react-icons/vsc";
import { IconContext } from "react-icons/lib";

function Orders() {
  return (
    <motion.div>
      <header className="h-[55px] sm:h-[70px] w-[100%] bg-[#f7f7f7] flex justify-between items-center px-3 sm:px-6">
        <h4 className="font-bold text-[#62AB4D] text-md sm:text-lg">ORDERS</h4>

        <IconContext.Provider value={{ color: "#62AB4D", size: "25px" }}>
          <div className="flex gap-2 items-center">
            <div className="sm:h-[45px] sm:w-[45px] w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center">
              {" "}
              <h6 className="font-bold text-[#62AB4D] text-md sm:text-lg">RV</h6>
            </div>
            <VscBellDot />
          </div>
        </IconContext.Provider>
      </header>
    </motion.div>
  );
}

export default Orders;
