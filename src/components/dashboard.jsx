import React from "react";
import AppNav from "./Nav";
import '../Fonts.css';
import '../App.css';
import Sidebar from "./Sidebar"

function Dashboard() {
    return (
        <>
            <AppNav />
            <Sidebar></Sidebar>
            <iframe title="editor" src="https://salgum1114.github.io/react-design-editor/" frameborder="0"></iframe>
        </>
    );
}

export default Dashboard;
