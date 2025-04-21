import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Search, Filter, Star } from "lucide-react";

const CalendarView: React.FC = () => {
    const navigate = useNavigate();
    const [currentWeek, setCurrentWeek] = useState("2025-04-07"); // Starting week

    const daysOfWeek = [
        { day: "lun. 7", date: "7" },
        { day: "mar. 8", date: "8" },
        { day: "mer. 9", date: "9" },
        { day: "jeu. 10", date: "10" },
        { day: "ven. 11", date: "11" },
        { day: "sam. 12", date: "12" },
        { day: "dim. 13", date: "13" },
    ];

    const timeSlots = Array.from({ length: 24 }, (_, i) => `${i}:00`);

    const handlePreviousWeek = () => {
        // Logic to go to previous week (simplified for now)
        alert("Previous week clicked!");
    };

    const handleNextWeek = () => {
        // Logic to go to next week (simplified for now)
        alert("Next week clicked!");
    };

    const handleToday = () => {
        // Logic to set to current week
        alert("Aujourd’hui clicked!");
    };

    const handleNewMeeting = () => {
        navigate("/calendar/new");
    };

    return (
        <div className="flex-1 flex flex-col p-4 bg-white">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Réunions (7 - 13 avr. 2025)
                    </h2>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Recherche..."
                            className="pl-8 pr-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search
                            size={16}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                        />
                    </div>
                    <button className="flex items-center text-gray-600 hover:text-gray-800">
                        <Filter size={16} className="mr-1" />
                        Filtres
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-800">
                        <Star size={16} className="mr-1" />
                        Favoris
                    </button>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-2 mb-4">
                <button
                    onClick={handleNewMeeting}
                    className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                >
                    Nouveau
                </button>
                <button
                    onClick={handleToday}
                    className="bg-gray-200 text-gray-800 px-4 py-1 rounded-md text-sm hover:bg-gray-300"
                >
                    Aujourd’hui
                </button>
                <button
                    onClick={handlePreviousWeek}
                    className="p-1 text-gray-600 hover:text-gray-800"
                >
                    <ChevronLeft size={16} />
                </button>
                <button
                    onClick={handleNextWeek}
                    className="p-1 text-gray-600 hover:text-gray-800"
                >
                    <ChevronRight size={16} />
                </button>
                <span className="text-sm text-gray-600">Semaine 15</span>
                <select className="border border-gray-300 rounded-md text-sm p-1">
                    <option>Semaine</option>
                    <option>Jour</option>
                    <option>Mois</option>
                </select>
                <span className="text-sm text-gray-600">avr. 2025</span>
            </div>

            {/* Calendar Grid */}
            <div className="flex-1 overflow-auto">
                <div className="grid grid-cols-8 gap-px bg-gray-200">
                    {/* Time Column */}
                    <div className="col-span-1">
                        <div className="h-12"></div>{" "}
                        {/* Empty space for day headers */}
                        {timeSlots.map((time) => (
                            <div
                                key={time}
                                className="h-12 border-t border-gray-200 text-sm text-gray-600 p-2"
                            >
                                {time}
                            </div>
                        ))}
                    </div>

                    {/* Days of the Week */}
                    {daysOfWeek.map((day) => (
                        <div key={day.day} className="col-span-1">
                            <div className="h-12 border-t border-gray-200 text-sm text-gray-600 p-2 text-center">
                                <div>{day.day}</div>
                                <div className="font-semibold">{day.date}</div>
                            </div>
                            {timeSlots.map((time) => (
                                <div
                                    key={`${day.day}-${time}`}
                                    className="h-12 border-t border-gray-200 bg-white hover:bg-gray-50"
                                >
                                    {/* Add meeting events here */}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar for Participants */}
            <div className="absolute right-4 top-20 w-64 bg-white border border-gray-200 rounded-md shadow-sm p-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    Participants
                </h4>
                <div className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-600">
                        Housseme kouachi
                    </span>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-600">
                        Calendriers de tout le monde
                    </span>
                </div>
                <button className="text-purple-600 hover:underline text-sm mt-2">
                    Ajouter
                </button>
            </div>
        </div>
    );
};

export default CalendarView;
