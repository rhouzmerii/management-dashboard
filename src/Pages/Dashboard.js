import React from "react";

import AnimatedRoutes from "../components/AnimatedRoutes";
import Sidebar from "../components/Sidebar";
function Dashboard() {
  return (
    <div className=" ">
      <div className="flex">
        <Sidebar />
        <AnimatedRoutes />
      </div>
    </div>
  );
}

export default Dashboard;
