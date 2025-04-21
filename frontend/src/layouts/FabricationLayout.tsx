import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const FabricationLayout: React.FC = () => {
    return (
        <div className="flex h-screen ">
            <Sidebar />
            <div className="flex-1 flex flex-col  md:ml-[220px]">
                <Header />
                <div className="flex space-x-4 px-4 py-2 bg-gray-100 border-b ">
                    <NavLink
                        to="/fabrication"
                        className={({ isActive }) =>
                            `px-4 py-2 text-sm font-medium ${
                                isActive
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-600"
                            }`
                        }
                    >
                        Fabrication
                    </NavLink>
                    <NavLink
                        to="/fabrication/operations"
                        className={({ isActive }) =>
                            `px-4 py-2 text-sm font-medium ${
                                isActive
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-600"
                            }`
                        }
                    >
                        Opérations
                    </NavLink>
                    <NavLink
                        to="/fabrication/products"
                        className={({ isActive }) =>
                            `px-4 py-2 text-sm font-medium ${
                                isActive
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-600"
                            }`
                        }
                    >
                        Produits
                    </NavLink>
                    <NavLink
                        to="/fabrication/analysis"
                        className={({ isActive }) =>
                            `px-4 py-2 text-sm font-medium ${
                                isActive
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-600"
                            }`
                        }
                    >
                        Analyse
                    </NavLink>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default FabricationLayout;
