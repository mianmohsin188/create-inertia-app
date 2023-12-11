import React from "react";
import ReactDOM from "react-dom";
import Navbar from "@/Layouts/Navbar.jsx";
import Sidebar from "@/Layouts/Sidebar";
import Login from "@/Pages/Login.jsx";
const Main = ({children,auth,title}) => {

    return (

        <React.Fragment>

            <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                 data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
        <Navbar auth={auth}></Navbar>
        <Sidebar></Sidebar>

            <div className="page-wrapper">
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-12 d-flex no-block align-items-center">
                            <h4 className="page-title">{title}</h4>
                            <div className="ms-auto text-end">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">{title}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    {children}
                </div>
            </div>
            </div>

        </React.Fragment>
    )
}
export default Main
