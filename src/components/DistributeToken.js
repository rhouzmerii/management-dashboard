import React from "react";

import { motion } from "framer-motion";
import { useRef } from "react";
function DistributeToken() {
 
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
    }}
    exit={{
      opacity: 0,

      transition: { duration: 0.5, ease: "easeIn" },
    }} className="ml-[15rem] pr-10">
      <div className="">
        <div className="pt-24">
          <h2 className="text-white text-[32px] font-bold">Distribute Token</h2>
        </div>
        <p className="text-[#FFFFFF] text-[13px] my-12">
          Distribute tokens to many wallets in one go. Easy. Costs 0.0001 Aptos
          per address.
        </p>
        <div className="w-[78vw] h-[40px]  rounded-l-[10px] mb-24">
          <h6 className="text-white text-[16px] font-bold mb-[2px]">
            Select token to Distribute
          </h6>
          <input
            className="w-[100%] h-[100%] text-white outline-none bg-transparent border-solid border-2 border-[white] rounded-[10px] pl-4 font-light"
            type="text"
          />
        </div>
        <div className="w-[20vw] h-[40px]  rounded-l-[10px] mb-24 ">
          <h6 className="text-white text-[16px] font-bold mb-[2px] ">
            Amount of tokens to send.
          </h6>
          <input
            className="w-[100%] text-white h-[100%] outline-none bg-transparent border-solid border-2 border-[white] rounded-[10px] pl-4 font-light"
            type="text"
          />
        </div>
        <div>
          <div className=" ">
            <h6 className="text-white text-[16px] font-bold ">
              Wallet Addresses.
            </h6>
            <p className="text-white text-[13px] mt-1 mb-4">
              Enter separate wallet addresses on a new line.
            </p>
            <div className="w-[78vw] h-[600px] outline-none bg-transparent border-solid border-2 border-[white] rounded-[10px] pl-4 font-light flex flex-col justify-center items-center">
              <h5 className="text-[60px] font-bold text-[#D9D9D9]">
                Upload File
              </h5>
              <h5 className="text-[20px] font-bold text-[#D9D9D9]">
                Or enter Manually
              </h5>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="w-[250px] mt-4 sm:w-[160px] md:w-[220px] h-[25px] md:h-[40px] sm:h-[35px] flex justify-center items-center  bg-[#00FFF0] text-[
#000D25]  text-[10px] sm:text-[12px] font-bold "
          >
            Confirm and Distribute
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default DistributeToken;
