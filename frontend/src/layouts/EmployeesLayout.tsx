import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const EmployeesLayout: React.FC = () => {
    const location = useLocation();

    const getBreadcrumb = () => {
        const path = location.pathname;
        if (path === "/employees") return "Employés";
        if (path === "/employees/new") return "Employés / Nouveau";
        return "";
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col md:ml-[220px]">
                {/* Header */}
                <div className="navbar bg-gray-800 text-white shadow-md top-0 left-[220px] right-0 z-10">
                    <div className="flex-1">
                        <span className="text-lg">{getBreadcrumb()}</span>
                    </div>
                    <div className="flex-none space-x-2">
                        {location.pathname === "/employees" && (
                            <>
                                <Link
                                    to="/employees/new"
                                    className="btn btn-info"
                                >
                                    Nouveau
                                </Link>
                                <button className="btn btn-ghost">
                                    Filtres
                                </button>
                                <button className="btn btn-ghost">
                                    Regrouper par
                                </button>
                                <button className="btn btn-ghost">
                                    Favoris
                                </button>
                            </>
                        )}
                        {location.pathname === "/employees/new" && (
                            <>
                                <div className="dropdown dropdown-end">
                                    <label
                                        tabIndex={0}
                                        className="btn btn-ghost"
                                    >
                                        Action
                                    </label>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-gray-800"
                                    >
                                        <li>
                                            <a>Option 1</a>
                                        </li>
                                        <li>
                                            <a>Option 2</a>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Sub-Navbar with Tabs */}
                <div className="bg-gray-100 pt-16">
                    <div className="tabs mb-4">
                        <Link
                            to="/employees"
                            className={`tab tab-bordered ${
                                location.pathname === "/employees"
                                    ? "tab-active"
                                    : ""
                            }`}
                        >
                            Départs
                        </Link>
                        {location.pathname === "/employees/new" && (
                            <Link
                                to="/employees/new"
                                className={`tab tab-bordered ${
                                    location.pathname === "/employees/new"
                                        ? "tab-active"
                                        : ""
                                }`}
                            >
                                Plan de lancement
                            </Link>
                        )}
                    </div>

                    {/* Child Routes Content */}
                    <div className="p-6 bg-gray-100 min-h-screen">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeesLayout;
