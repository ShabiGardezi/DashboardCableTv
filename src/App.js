import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
// import Sidebar from "./components/Sidebar";
import VerticalNavbar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Pages from "./components/Pages";
import Zipcodes from "./components/Zipcodes";
import User from "./components/User";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {/* <VerticalNavbar /> */}
      <main>
        <Routes>
          {/* <Route path="/signup" exact Component={SignUp}></Route> */}
          <Route path="/pages" exact Component={Pages}></Route>
          <Route path="/zipcode" exact Component={Zipcodes}></Route>
          <Route path="/user" exact Component={User}></Route>
          <Route
            path="/login"
            exact
            element={<Login setIsLoggedIn={setIsLoggedIn} />} // This route should have the prop
          />
          <Route
            path="/dashboard/*"
            exact
            element={
              isLoggedIn ? <ProtectedDashboard /> : <Navigate to="/login" />
            } // Protected route
          />
        </Routes>
      </main>
    </div>
  );
  function ProtectedDashboard() {
    return <Dashboard />;
  }
}
export default App;
