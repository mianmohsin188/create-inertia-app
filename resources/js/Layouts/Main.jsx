import React from "react";
import ReactDOM from "react-dom";
import Navbar from "@/Layouts/Navbar.jsx";
import Sidebar from "@/Layouts/Sidebar";
import Login from "@/Pages/Login.jsx";
const Main = ({children}) => {
    
    return (

        <div>
        <Navbar></Navbar>
        <Sidebar></Sidebar>

            <div className="page-wrapper">
                <div className="container-fluid">
                    {children}
                </div>
            </div>

        </div>
    )
}
export default Main
