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

const PlanningList: React.FC = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    const planningData = [
        {
            numeroDossier: "Nouveau",
            dateDebut: "02/03/2025 10:31:50",
            dateFin: "06/03/2025 09:59:59",
            responsable: "Administrator",
            etat: "Préparation Hors Machine",
        },
        {
            numeroDossier: "Nouveau",
            dateDebut: "28/02/2025 16:37:30",
            dateFin: "07/03/2025 09:59:59",
            responsable: "Administrator",
            etat: "Préparation Hors Machine",
        },
        {
            numeroDossier: "Nouveau",
            dateDebut: "02/03/2025 16:44:06",
            dateFin: "06/03/2025 09:59:59",
            responsable: "Administrator",
            etat: "Brouillon",
        },
    ];

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleNewPlanning = () => {
        navigate("/planning/new");
    };

    return (
        <div className="flex-1 flex flex-col p-4 bg-white">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Planification
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
                    onClick={handleNewPlanning}
                    className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                    aria-label="Créer un nouveau planning"
                >
                    Nouveau
                </button>
            </div>

            {/* Planning Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-sm text-gray-600">
                            <th className="p-2 text-left">N° Dossier</th>
                            <th className="p-2 text-left">Date Début</th>
                            <th className="p-2 text-left">Date Fin</th>
                            <th className="p-2 text-left">Responsable</th>
                            <th className="p-2 text-left">État</th>
                        </tr>
                    </thead>
                    <tbody>
                        {planningData.map((entry, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200 hover:bg-gray-50"
                            >
                                <td className="p-2 text-sm text-gray-600">
                                    {entry.numeroDossier}
                                </td>
                                <td className="p-2 text-sm text-gray-600">
                                    {entry.dateDebut}
                                </td>
                                <td className="p-2 text-sm text-gray-600">
                                    {entry.dateFin}
                                </td>
                                <td className="p-2 text-sm text-gray-600">
                                    {entry.responsable}
                                </td>
                                <td className="p-2 text-sm text-gray-600">
                                    {entry.etat}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PlanningList;
