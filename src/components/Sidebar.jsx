import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Paper,
  Grid,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assests/header-Logo.png";
import "../styles/Sidebar.css";
import Home from "@mui/icons-material/Home";
import Room from "@mui/icons-material/Room";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ExitToApp from "@mui/icons-material/ExitToApp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { styled } from "@mui/material/styles"; // Import styled from v5import { AccountCircle, ExitToApp, Home, Room } from "@mui/icons-material";
import { Dashboard } from "@mui/icons-material";
import Avatar from "../assests/avatar.png";
const drawerWidth = 240;

const useStyles = styled((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function VerticalNavbar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("authToken");
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar}>
          {/* Logo */}
          <div className={classes.logoContainer}>
            <div className="sideBarLogo">
              <img
                src={Logo}
                alt="Logo"
                className={classes.logo}
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
          {/* End Logo */}
        </div>
        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <Link to="/dashboard">
              <ListItemText primary="Dashboard" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <Link to="/pages">
              <ListItemText primary="Pages" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Room />
            </ListItemIcon>
            <Link to="/zipcode">
              <ListItemText primary="Zip Code" />
            </Link>
          </ListItem>

          {user.role === "admin" && (
            <ListItem button>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <Link to="/user">
                <ListItemText primary="User" />
              </Link>
            </ListItem>
          )}

          <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
        <div className="UserWidget">
          <div className="leftside">
            <img src={Avatar} alt="Avater" />
          </div>
          <div className="rightside">
            <h3>Haseeb Irfan</h3>
            <h4>Admin</h4>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default VerticalNavbar;
