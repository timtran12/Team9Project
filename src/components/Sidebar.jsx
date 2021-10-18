import { render } from "@testing-library/react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import Dashboard from "./dashboard";


function Sidebar() {
  
  return (
    <>
      
      <ProSidebar style={{zIndex: "-1"}}>
        <Menu iconShape="square">
          <MenuItem>
            Dashboard
            <Link to="./dashboard" />
          </MenuItem> 

          <MenuItem>History</MenuItem>
          <MenuItem>Settings</MenuItem>
        </Menu>
      </ProSidebar>
    </>
  );
}

export default Sidebar;
