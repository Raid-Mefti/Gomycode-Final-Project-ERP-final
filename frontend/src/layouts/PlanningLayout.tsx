import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const PlanningLayout: React.FC = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col md:ml-[220px] ">
                <Header />
                <Outlet /> {/* Renders PlanningList.tsx or NewPlanning.tsx */}
            </div>
        </div>
    );
};

export default PlanningLayout;
