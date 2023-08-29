import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Pages from "./components/Pages";
import Zipcodes from "./components/Zipcodes";
import User from "./components/User";
import VerticalNavbar from "./components/Sidebar";
import UpdateProvider from "./components/UpdateProvider";
import MainSectionEditor from "./pages/MainSectionEditor";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/pages" exact Component={Pages}></Route>
        <Route
          path="/pages/main_section"
          exact
          Component={MainSectionEditor}
        ></Route>
        <Route path="/update_privoder" exact Component={UpdateProvider}></Route>
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
          }
        />
      </Routes>
    </div>
  );
  function ProtectedDashboard() {
    return <Dashboard />;
  }
}
export default App;
