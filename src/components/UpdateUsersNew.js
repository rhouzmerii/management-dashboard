import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { BsTag } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import { VscBellDot } from "react-icons/vsc";

function UpdateUsersNew() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",

    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <motion.div className="overflow-x-hidden">
        <IconContext.Provider value={{ color: "#62AB4D", size: "25px" }}>
          <header className="h-[55px] sm:h-[70px] w-[100%]  sm:w-[100%] bg-[#f7f7f7] flex justify-center items-center px-2 sm:px-3 md:px-6">
            <h4 className="font-bold text-[#62AB4D] text-md sm:text-lg">
              Update Users <br /> - Create New
            </h4>
          </header>

          <div>
            <hr className="mb-5 mt-5 px-3 sm:mx-6" />

            <div className="px-6 flex justify-between items-center">
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

                <div className="flex justify-between  w-[500px]">
                  <h6 className="text-[14px]">Description</h6>

                  <textarea
                    className="border-[2px] border-red-[#f7f7f7] outline-none rounded-[10px]"
                    rows="10"
                    cols="48"
                  />
                </div>
              </div>
              <div className="flex flex-col ">
                <h5 className="text-center tex-[14px] ">
                  Preview (Show on
                  <br />
                  Home)
                </h5>
                <div className="w-[500px] h-[400px] bg-red-500 "></div>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-[100%] items-end px-6 mt-3">
            <button
              onClick={handleOpen}
              className="w-[100px] rounded-[7px] h-[30px] flex justify-center items-center bg-green-500"
            >
              Save
            </button>
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  <div className="flex justify-center items-center flex-col text-center gap-6">
                    <h6 className="text-[14px]">
                      Your user update has been sent to the administration to
                      confirm.
                    </h6>
                    <button
                      onClick={handleClose}
                      className="w-[100px] text-white rounded-[7px] h-[30px] text-[14px] flex justify-center items-center bg-blue-500"
                    >
                      Okay
                    </button>
                  </div>
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </IconContext.Provider>
      </motion.div>
    </div>
  );
}

export default UpdateUsersNew;