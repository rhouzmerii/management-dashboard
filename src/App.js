import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <div>
      <Router>
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
