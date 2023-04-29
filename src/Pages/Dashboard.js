import React from "react";


import AnimatedRoutes from "../components/AnimatedRoutes";
import Sidebar from "../components/Sidebar";
function Dashboard() {
  return (
    <section className="flex gap-6">
<Sidebar/>
      <AnimatedRoutes />
    </section>
  );
}

export default Dashboard;
