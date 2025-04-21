import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
    // Define the sub-tabs with their respective groups for titles
    const tabGroups = [
        {
            title: "Sales",
            tabs: [
                { name: "Sales", path: "sales" },
                { name: "Product", path: "product" },
            ],
        },
        {
            title: "Finance",
            tabs: [{ name: "Invoice", path: "invoicing" }],
        },
        {
            title: "Logistics",
            tabs: [
                { name: "Purchase", path: "purchase" },
                { name: "Vendors", path: "vendors" },
                { name: "Inventory", path: "inventory" },
            ],
        },
    ];

    return (
        <div className="flex-1 flex flex-col p-4 bg-white overflow-y-auto">
            {/* Sub-tab Navigation */}
            <div className="flex space-x-4 mb-4 border-b items-center">
                {tabGroups.map((group, groupIndex) => (
                    <React.Fragment key={groupIndex}>
                        {/* Unclickable Title */}
                        <h2 className="pb-2 px-2 text-md font-extrabold">
                            {group.title}
                        </h2>
                        {/* Tabs under this title */}
                        {group.tabs.map((tab) => (
                            <NavLink
                                key={tab.path}
                                to={`/dashboard/${tab.path}`}
                                className={({ isActive }) =>
                                    `pb-2 px-2 text-sm font-medium ${
                                        isActive
                                            ? "border-b-2 border-blue-500 text-blue-500"
                                            : "text-gray-600 hover:text-gray-800"
                                    }`
                                }
                            >
                                {tab.name}
                            </NavLink>
                        ))}
                    </React.Fragment>
                ))}
            </div>
            <Outlet />
        </div>
    );
};

export default Dashboard;
