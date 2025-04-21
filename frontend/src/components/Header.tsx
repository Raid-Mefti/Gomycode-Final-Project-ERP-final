import React, { useState } from "react";
import { Bell, MessageSquare, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
    const [isMessagesOpen, setIsMessagesOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    const handleMarkAllRead = () => {
        alert("Marked all as read!");
        // Add logic to mark all messages as read
    };

    const toggleMessagesDropdown = () => {
        setIsMessagesOpen(!isMessagesOpen);
        setIsNotificationsOpen(false); // Close the other dropdown
    };

    const toggleNotificationsDropdown = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
        setIsMessagesOpen(false); // Close the other dropdown
    };

    return (
        <div className="bg-[#2c3e50] text-white p-3 flex justify-between items-center">
            <div className="flex items-center">
                <span>👤 HOUZEM kouachi</span>
            </div>
            <div className="flex items-center space-x-4">
                {/* Messages Dropdown */}
                <div className="relative">
                    <button
                        onClick={toggleMessagesDropdown}
                        className="relative flex items-center text-white hover:text-gray-300"
                    >
                        <MessageSquare size={18} />
                        <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            1
                        </span>
                        <ChevronDown size={16} className="ml-1" />
                    </button>
                    {isMessagesOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10">
                            <div className="p-2 border-b border-gray-200">
                                <span className="text-sm font-semibold">
                                    Messages
                                </span>
                            </div>
                            <div className="p-2">
                                <div className="text-sm">
                                    New message from John
                                </div>
                                <div className="text-xs text-gray-500">
                                    Hey, can we meet?
                                </div>
                            </div>
                            <div className="p-2 border-t border-gray-200">
                                <button className="text-sm text-blue-500 hover:underline">
                                    View all messages
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Notifications Dropdown */}
                <div className="relative">
                    <button
                        onClick={toggleNotificationsDropdown}
                        className="flex items-center text-white hover:text-gray-300"
                    >
                        <Bell size={18} />
                        <ChevronDown size={16} className="ml-1" />
                    </button>
                    {isNotificationsOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10">
                            <div className="p-2 border-b border-gray-200">
                                <span className="text-sm font-semibold">
                                    Notifications
                                </span>
                            </div>
                            <div className="p-2">
                                <div className="text-sm">Meeting scheduled</div>
                                <div className="text-xs text-gray-500">
                                    10:00 AM tomorrow
                                </div>
                            </div>
                            <div className="p-2 border-t border-gray-200">
                                <button className="text-sm text-blue-500 hover:underline">
                                    View all notifications
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Mark All as Read Button */}
                <button
                    onClick={handleMarkAllRead}
                    className="text-xs text-white hover:text-gray-300"
                >
                    TOUT MARQUER COMME LU
                </button>
            </div>
        </div>
    );
};

export default Header;
