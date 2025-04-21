import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
    return (
        <div className="w-[220px] h-[100%] bg-gray-900 text-white fixed ">
            <div className="p-4">
                <h1 className="text-xl font-bold">Menu</h1>
            </div>
            <nav className="mt-4 overflow-y-auto h-[calc(100vh-5rem)]">
                <NavLink
                    to="/discussion"
                    className={({ isActive }) =>
                        `block p-4 hover:bg-gray-700 ${
                            isActive ? "bg-gray-700" : ""
                        }`
                    }
                >
                    Discussion
                </NavLink>
                <NavLink
                    to="/costs"
                    className={({ isActive }) =>
                        `block p-4 hover:bg-gray-700 ${
                            isActive ? "bg-gray-700" : ""
                        }`
                    }
                >
                    Coûts logistiques
                </NavLink>
                <NavLink
                    to="/calendar"
                    className={({ isActive }) =>
                        `block p-4 hover:bg-gray-700 ${
                            isActive ? "bg-gray-700" : ""
                        }`
                    }
                >
                    Calendrier
                </NavLink>
                <NavLink
                    to="/planning"
                    className={({ isActive }) =>
                        `block p-4 hover:bg-gray-700 ${
                            isActive ? "bg-gray-700" : ""
                        }`
                    }
                >
                    Planification
                </NavLink>
                <NavLink
                    to="/stock-analysis"
                    className={({ isActive }) =>
                        `block p-4 hover:bg-gray-700 ${
                            isActive ? "bg-gray-700" : ""
                        }`
                    }
                >
                    Analyse Stock
                </NavLink>
                <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                        `block p-4 hover:bg-gray-700 ${
                            isActive ? "bg-gray-700" : ""
                        }`
                    }
                >
                    Contacts
                </NavLink>
                <NavLink
                    to="/crm"
                    className={({ isActive }) =>
                        `block p-4 hover:bg-gray-700 ${
                            isActive ? "bg-gray-700" : ""
                        }`
                    }
                >
                    CRM
                </NavLink>
                <NavLink
                    to="/sales"
                    className={({ isActive }) =>
                        `block p-4 hover:bg-gray-700 ${
                            isActive ? "bg-gray-700" : ""
                        }`
                    }
                >
                    Ventes
                </NavLink>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `block p-4 hover:bg-gray-700 ${
                            isActive ? "bg-gray-700" : ""
                        }`
                    }
                >
                    Tableau de bord
                </NavLink>
                <NavLink
                    to="/facturation"
                    className={({ isActive }) =>
                        `block p-4 hover:bg-gray-700 ${
                            isActive ? "bg-gray-700" : ""
                        }`
                    }
                >
                    Facturation
                </NavLink>
                <NavLink
                    to="/purchases"
                    className={({ isActive }) =>
                        `block p-4 hover:bg-gray-700 ${
                            isActive ? "bg-gray-700" : ""
                        }`
                    }
                >
                    Achat
                </NavLink>
                <div>
                    <NavLink
                        to="/inventory"
                        className={({ isActive }) =>
                            `block p-4 hover:bg-gray-700 ${
                                isActive ? "bg-gray-700" : ""
                            }`
                        }
                    >
                        Inventaire
                    </NavLink>
                </div>
                <NavLink
                    to="/fabrication"
                    className={({ isActive }) =>
                        `block p-4 hover:bg-gray-700 ${
                            isActive ? "bg-gray-700" : ""
                        }`
                    }
                >
                    Fabrication
                </NavLink>
                <NavLink
                    to="/employees"
                    className={({ isActive }) =>
                        `block p-4 hover:bg-gray-700 ${
                            isActive ? "bg-gray-700" : ""
                        }`
                    }
                >
                    Employés
                </NavLink>
                <NavLink
                    to="/car-park"
                    className={({ isActive }) =>
                        `block p-4 hover:bg-gray-700 ${
                            isActive ? "bg-gray-700" : ""
                        }`
                    }
                >
                    Parc automobile
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;
