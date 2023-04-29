import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import DistributeToken from "../components/DistributeToken";
import { AnimatePresence } from "framer-motion";
import Orders from "./Orders";
import Products from "./Products";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Orders />} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedRoutes;
