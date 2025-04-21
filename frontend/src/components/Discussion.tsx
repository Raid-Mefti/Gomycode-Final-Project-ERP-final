import React, { useState } from "react";
import { ChevronDown, ChevronRight, Plus } from "lucide-react";

const Discussion: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"Favoris" | "Historique">(
        "Favoris"
    );
    const [channelsExpanded, setChannelsExpanded] = useState(true);
    const [directMessagesExpanded, setDirectMessagesExpanded] = useState(true);

    const handleStartMeeting = () => {
        alert("Starting a meeting!");
        // Add logic to start a meeting
    };

    const toggleChannels = () => {
        setChannelsExpanded(!channelsExpanded);
    };

    const toggleDirectMessages = () => {
        setDirectMessagesExpanded(!directMessagesExpanded);
    };

    const handleAddChannel = () => {
        alert("Add a new channel!");
        // Add logic to add a new channel
    };

    const handleAddDirectMessage = () => {
        alert("Start a new direct message!");
        // Add logic to start a new direct message
    };

    return (
        <div className="flex h-full md:ml-[220px]">
            {/* Left Section: Tabs and Channels */}
            <div className="w-64 bg-[#dfe6e9] border-r border-gray-300 flex flex-col ">
                <div className="p-3 flex justify-between items-center">
                    <h2 className="m-0 text-base text-[#2d3436] uppercase">
                        DÉMARRER UNE RÉUNION
                    </h2>
                    <button
                        onClick={handleStartMeeting}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600"
                    >
                        Start
                    </button>
                </div>
                <div className="flex border-b border-gray-300">
                    <button
                        onClick={() => setActiveTab("Favoris")}
                        className={`flex-1 py-2 text-sm ${
                            activeTab === "Favoris"
                                ? "border-b-2 border-blue-500 text-blue-500"
                                : "text-gray-600"
                        }`}
                    >
                        Favoris
                    </button>
                    <button
                        onClick={() => setActiveTab("Historique")}
                        className={`flex-1 py-2 text-sm ${
                            activeTab === "Historique"
                                ? "border-b-2 border-blue-500 text-blue-500"
                                : "text-gray-600"
                        }`}
                    >
                        Historique
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {/* Canaux Section */}
                    <div className="mt-2">
                        <button
                            onClick={toggleChannels}
                            className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-200"
                        >
                            {channelsExpanded ? (
                                <ChevronDown size={16} className="mr-2" />
                            ) : (
                                <ChevronRight size={16} className="mr-2" />
                            )}
                            CANAUX
                            <button
                                onClick={handleAddChannel}
                                className="ml-auto text-gray-600 hover:text-gray-800"
                            >
                                <Plus size={16} />
                            </button>
                        </button>
                        {channelsExpanded && (
                            <div className="pl-6">
                                <div className="flex items-center px-3 py-1 text-sm text-gray-600 hover:bg-gray-200 cursor-pointer">
                                    <span className="mr-2 text-purple-500">
                                        #
                                    </span>{" "}
                                    general
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Messages Directs Section */}
                    <div className="mt-2">
                        <button
                            onClick={toggleDirectMessages}
                            className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-200"
                        >
                            {directMessagesExpanded ? (
                                <ChevronDown size={16} className="mr-2" />
                            ) : (
                                <ChevronRight size={16} className="mr-2" />
                            )}
                            MESSAGES DIRECTS
                            <button
                                onClick={handleAddDirectMessage}
                                className="ml-auto text-gray-600 hover:text-gray-800"
                            >
                                <Plus size={16} />
                            </button>
                        </button>
                        {directMessagesExpanded && (
                            <div className="pl-6">
                                {/* Placeholder for direct messages */}
                                <div className="px-3 py-1 text-sm text-gray-600">
                                    No direct messages yet
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Right Section: Main Content */}
            <div className="flex-1 flex flex-col">
                <div className="bg-[#dfe6e9] p-3 flex justify-between items-center border-b border-gray-300">
                    <span className="text-xs text-[#636e72] flex items-center">
                        <span className="mr-1">📥</span> Boîte de réception
                    </span>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="text-center text-[#666]">
                        Félicitations, votre boîte de réception est à vide.
                        <br />
                        Les nouveaux messages s’afficheront ici.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discussion;
