import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import DistributeToken from "../components/DistributeToken";
import { AnimatePresence } from "framer-motion";
import Orders from "./Orders";
import Products from "./Products";
import CuriersDeliveries from "./CuriersDeliveries";
import UpdateUsersNew from "./UpdateUsersNew";
import UpdateUsers from "./UpdateUsers";
import Ratings from "./Ratings";
import EditFarm from "./EditFarm";
import Revenue from "./Revenue";
import Notification from "./Notification";
import UpdateUserDetails from "./UpdateUserDetails";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div className="w-[100%]">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/curier-deliveries" element={<CuriersDeliveries />} />
          <Route path="/update-users" element={<UpdateUsers />} />
          <Route path="/update-users-new" element={<UpdateUsersNew />} />
          <Route path="/rating" element={<Ratings />} />
          <Route path="/edit-farm" element={<EditFarm />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/update-user-details" element={<UpdateUserDetails />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedRoutes;
