import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const CalendarLayout: React.FC = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col md:ml-[220px]">
                <Header />
                <Outlet /> {/* Renders NewMeeting.tsx or CalendarView.tsx */}
            </div>
        </div>
    );
};

export default CalendarLayout;
