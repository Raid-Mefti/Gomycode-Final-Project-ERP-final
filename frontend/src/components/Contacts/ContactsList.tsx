import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Search,
    Filter,
    Group,
    Star,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const ContactsList: React.FC = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 1171;

    const contactsData = [
        {
            id: 1,
            name: "AB COLOR",
            type: "Particulier",
            opportunities: 2,
            email: "contact@abcolor.com",
        },
        {
            id: 2,
            name: "AB SERVICE COMMUNICATION ET PUBLICITE",
            type: "Société",
            opportunities: 0,
            email: "contact@abservice.com",
        },
        {
            id: 3,
            name: "ABBOU MED NADJIB",
            type: "Particulier",
            opportunities: 1,
            email: "",
        },
        {
            id: 4,
            name: "ABC DISTRIBUTION",
            type: "Société",
            opportunities: 1,
            email: "sjerfe@arcana-soft.com",
        },
        {
            id: 5,
            name: "ABD EL HAMID MAOUCHE",
            type: "Particulier",
            opportunities: 0,
            email: "",
        },
        {
            id: 6,
            name: "ABDESSALEM FERIEL (HILTHO BISCUITERIE)",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 7,
            name: "ABDI BRAHIM REMEDE PHARMA (AIRP)",
            type: "Société",
            opportunities: 0,
            email: "nanou12@gmail.com",
        },
        {
            id: 8,
            name: "ABDI CHEESE",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 9,
            name: "ABDI EMBALLAGE",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 10,
            name: "ABDI EMBALLAGE, ALI BEN ALI Resp Appro & ACHAT EMBALLAGE",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 11,
            name: 'ABDI NOUREDDINE "Best Emballage"',
            type: "Particulier",
            opportunities: 0,
            email: "",
        },
        {
            id: 12,
            name: "ABP PLAST",
            type: "Société",
            opportunities: 0,
            email: "assistant.abpplast@gmail.com",
        },
        {
            id: 13,
            name: "AC GRAPHIC",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 14,
            name: "ACE Algérie",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 15,
            name: "ACYL EMBALLAGE (BOUGUETTAYA MALIK)",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 16,
            name: "AD & EVE",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 17,
            name: "ADA/ALLIANCE DEVELOPMENT AGRO INDUSTRIEL",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 18,
            name: "ADIAID DISTRIBUTION SARL",
            type: "Société",
            opportunities: 0,
            email: "sarladiaid@yahoo.fr",
        },
        {
            id: 19,
            name: "ADOLESENCE",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 20,
            name: "ADVANCED MANUFACTURING",
            type: "Société",
            opportunities: 0,
            email: "carelia.advanceinfo@gmail.com",
        },
        {
            id: 21,
            name: "ADVANCARE INDUSTRIES",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 22,
            name: "ADYASCUIT",
            type: "Société",
            opportunities: 0,
            email: "adyascuit@gmail.com",
        },
        {
            id: 23,
            name: "AFRIQUE EPICES",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 24,
            name: "AGRALUX IMPORT ET EXPORT SARL",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 25,
            name: "AGRO AIS",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 26,
            name: "AGRO DES ALPES",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 27,
            name: "AGRO GHO SARL",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 28,
            name: "AGRO MAYLIS",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 29,
            name: "AHMED ADAMOU (SOCIETE A & A)",
            type: "Particulier",
            opportunities: 0,
            email: "",
        },
        {
            id: 30,
            name: "AHMED BELKAHLA EXPORT",
            type: "Particulier",
            opportunities: 0,
            email: "",
        },
        {
            id: 31,
            name: "AHPC GLOVES",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 32,
            name: "AIR BRAKE CENTER (YEZZA RACHID)",
            type: "Société",
            opportunities: 0,
            email: "",
        },
        {
            id: 33,
            name: "AK REGNO",
            type: "Société",
            opportunities: 0,
            email: "",
        },
    ];

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleNewContact = () => {
        navigate("/contacts/new");
    };

    const handleContactClick = (id: number) => {
        navigate(`/contacts/${id}`);
    };

    return (
        <div className="flex-1 flex flex-col p-4 bg-white overflow-y-auto">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Contacts
                </h2>
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
                        <Group size={16} className="mr-1" />
                        Regrouper
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-800">
                        <Star size={16} className="mr-1" />
                        Favoris
                    </button>
                    <div className="flex items-center space-x-1">
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className="p-1 text-gray-600 hover:text-gray-800 disabled:text-gray-300"
                            aria-label="Page précédente"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <span className="text-sm text-gray-600">
                            {currentPage} / {totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="p-1 text-gray-600 hover:text-gray-800 disabled:text-gray-300"
                            aria-label="Page suivante"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 mb-4">
                <button
                    onClick={handleNewContact}
                    className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                    aria-label="Créer un nouveau contact"
                >
                    Nouveau
                </button>
            </div>

            {/* Contacts Kanban View */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {contactsData.map((contact) => (
                    <div
                        key={contact.id}
                        onClick={() => handleContactClick(contact.id)}
                        className="border border-gray-200 rounded-md p-4 hover:shadow-md cursor-pointer"
                    >
                        <div className="flex items-center justify-center mb-2">
                            <img
                                src="/icons/company-placeholder.png"
                                alt="Company Logo"
                                className="w-12 h-12"
                            />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800 text-center">
                            {contact.name}
                        </h3>
                        <p className="text-xs text-gray-600 text-center">
                            {contact.type}
                        </p>
                        {contact.opportunities > 0 && (
                            <p className="text-xs text-gray-600 text-center mt-1">
                                ⭐ {contact.opportunities}
                            </p>
                        )}
                        {contact.email && (
                            <p className="text-xs text-gray-600 text-center mt-1 truncate">
                                {contact.email}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactsList;
