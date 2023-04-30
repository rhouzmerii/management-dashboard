import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

    function Sidebar() {
      const menus = [
        { name: "orders", link: "/", icon: MdOutlineDashboard },
        { name: "products", link: "/products", icon: AiOutlineUser },
        { name: "Curier/Deliveries", link: "/curier-deliveries", icon: FiMessageSquare },
        { name: "Update Users", link: "/update-users", icon: TbReportAnalytics, margin: true },
        { name: "Edit Farm", link: "edit-farm", icon: FiFolder },
        { name: "Revenue", link: "/revenue", icon: FiShoppingCart },
        { name: "Notification", link: "/notification", icon: AiOutlineHeart, margin: true },
        { name: "Rating", link: "/rating", icon: AiOutlineHeart},
        { name: "Setting", link: "/", icon: RiSettings4Line },
      ];
      const [open, setOpen] = useState(true);
      return (
        <section className="">
        <div
          className={`bg-[#62AB4D] min-h-screen ${
            open ? "w-60" : "w-16"
          } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer mb-3"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
       
      </section>
      );
    }
 

export default Sidebar;
