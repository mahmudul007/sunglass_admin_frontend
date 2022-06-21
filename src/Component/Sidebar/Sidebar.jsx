import React, { useContext } from "react";
import "./Sidebar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PinOutlinedIcon from "@mui/icons-material/PinOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link, useHistory } from "react-router-dom";
export const Sidebar = () => {
  let history = useHistory();

  const logOut = (e) => {
    localStorage.removeItem("user");
    localStorage.removeItem("data");
    localStorage.removeItem("setupTime");
    alert("logged out");
    history.push("/login");

    e.preventDefault();
  };
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <span className="logo">Admin Board</span>
        </div>
        <hr className="hr" />
        <div className="center">
          <ul>
            <div className="title">MAIN </div>
            <Link to="/">
              <li>
                <DashboardOutlinedIcon className="icon" />
                <span>Dashboard</span>
              </li>
            </Link>

            <div className="title">LIST</div>
            <Link to="/">
              <li>
                <PersonOutlinedIcon className="icon" />
                <span>Users</span>
              </li>
            </Link>
            <Link to="/add">
              <li>
                <InventoryOutlinedIcon className="icon" />
                <span>Products</span>
              </li>
            </Link>

            <li>
              <BorderColorOutlinedIcon className="icon" />
              <span>Orders</span>
            </li>
            <div className="title">USER </div>

            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>

            <li>
              <PinOutlinedIcon className="icon" />
              <span onClick={logOut}>LogOut</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
