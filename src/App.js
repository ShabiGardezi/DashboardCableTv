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
import EditHeroSection from "./pages/EditHeroSection";
import EditBlogSection from "./pages/EditBlogSection";
import EditServiceSection from "./pages/EditServiceSection";
import EditAboutShopSatelliteTVSection from "./pages/EditAboutShopSatelliteTVSection";
import EditCheckServicesProvidersSection from "./pages/EditCheckServicesProvidersSection";
import EditFooterSection from "./pages/EditFooterSection";
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
        <Route
          path="/pages/hero_section"
          exact
          Component={EditHeroSection}
        ></Route>{" "}
        <Route
          path="/pages/blog_section"
          exact
          Component={EditBlogSection}
        ></Route>
        <Route
          path="/pages/checkserviceprovider_section"
          exact
          Component={EditCheckServicesProvidersSection}
        ></Route>
        <Route
          path="/pages/service_section"
          exact
          Component={EditServiceSection}
        ></Route>{" "}
        <Route
          path="/pages/footer_section"
          exact
          Component={EditFooterSection}
        ></Route>
        <Route
          path="/pages/aboutshopsatellite_section"
          exact
          Component={EditAboutShopSatelliteTVSection}
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
