import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const FacturationLayout: React.FC = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col md:ml-[220px]">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default FacturationLayout;
