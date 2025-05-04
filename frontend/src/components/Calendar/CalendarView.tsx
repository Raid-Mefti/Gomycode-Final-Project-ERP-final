import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Search, Filter, Star } from "lucide-react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarView: React.FC = () => {
    const navigate = useNavigate();
    const [currentWeek, setCurrentWeek] = useState("2025-04-07");
    const [events, setEvents] = useState([
        {
            id: "1",
            title: "Meeting with Team",
            start: "2025-04-07T10:00:00",
            end: "2025-04-07T11:00:00",
        },
        {
            id: "2",
            title: "Lunch Break",
            start: "2025-04-08T12:00:00",
            end: "2025-04-08T13:00:00",
        },
    ]);

    const handlePreviousWeek = () => {
        setCurrentWeek((prev) => {
            const date = new Date(prev);
            date.setDate(date.getDate() - 7);
            return date.toISOString().split("T")[0];
        });
    };

    const handleNextWeek = () => {
        setCurrentWeek((prev) => {
            const date = new Date(prev);
            date.setDate(date.getDate() + 7);
            return date.toISOString().split("T")[0];
        });
    };

    const handleToday = () => {
        setCurrentWeek(new Date().toISOString().split("T")[0]);
    };

    const handleNewMeeting = () => {
        navigate("/calendar/new");
    };

    const handleEventDrop = (info: any) => {
        const updatedEvent = {
            id: info.event.id,
            title: info.event.title,
            start: info.event.start.toISOString(),
            end: info.event.end
                ? info.event.end.toISOString()
                : info.event.start.toISOString(),
        };
        setEvents((prev) =>
            prev.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
        );
    };

    const handleEventClick = (info: any) => {
        alert(`Event: ${info.event.title}\nStart: ${info.event.start}`);
    };

    const getWeekNumber = (date: string) => {
        const d = new Date(date);
        const startOfYear = new Date(d.getFullYear(), 0, 1);
        const diff = d.getTime() - startOfYear.getTime();
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        return Math.ceil((dayOfYear + startOfYear.getDay() + 1) / 7);
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
                <span className="text-sm text-gray-600">
                    Semaine {getWeekNumber(currentWeek)}
                </span>
                <select className="border border-gray-300 rounded-md text-sm p-1">
                    <option>Semaine</option>
                    <option>Jour</option>
                    <option>Mois</option>
                </select>
                <span className="text-sm text-gray-600">
                    {new Date(currentWeek).toLocaleString("fr-FR", {
                        month: "short",
                        year: "numeric",
                    })}
                </span>
            </div>

            {/* FullCalendar Component */}
            <div className="flex-1 overflow-auto">
                <FullCalendar
                    plugins={[timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    initialDate={currentWeek}
                    events={events}
                    editable={true}
                    droppable={true}
                    eventDrop={handleEventDrop}
                    eventClick={handleEventClick}
                    headerToolbar={false}
                    slotMinTime="00:00:00"
                    slotMaxTime="24:00:00"
                    allDaySlot={false}
                    height="auto"
                    locale="fr"
                    firstDay={1}
                />
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
