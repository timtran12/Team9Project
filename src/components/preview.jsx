import React from "react";
import AppNav from "./Nav";
import '../Fonts.css';
import '../App.css';
import Sidebar from "./Sidebar"


function Preview() {
    return (
        <>
            <AppNav />
            <Sidebar></Sidebar>
            <iframe title="editor" src="https://fathomink.com/fathomink/shop/design-studio/select-product" frameborder="0"></iframe>
        </>
    );
}

export default Preview;
