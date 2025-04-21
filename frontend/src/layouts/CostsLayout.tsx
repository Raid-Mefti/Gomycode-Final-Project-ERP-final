import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const CostsLayout: React.FC = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col md:ml-[220px]">
                <Header />
                <Outlet />{" "}
                {/* Renders Costs.tsx or ERP2.tsx based on the route */}
            </div>
        </div>
    );
};

export default CostsLayout;
