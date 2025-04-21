import React, { useState } from "react";
import { Search, Filter, Group, Star } from "lucide-react";

const CRMBoard: React.FC = () => {
    const [hasAccess, setHasAccess] = useState(true); // Mock access state

    const pipelineStages = [
        {
            name: "Proposition Commerciale",
            count: 4,
            total: "2,594.00 €",
            opportunities: [
                {
                    id: 1,
                    name: "Thomas Pasqui",
                    amount: "2,594.00 €",
                    status: "In Progress",
                    dueDate: "2025-04-25",
                },
                {
                    id: 2,
                    name: "John Miller",
                    amount: "0.00 €",
                    status: "Pending",
                    dueDate: "2025-04-30",
                },
            ],
        },
        {
            name: "Prépress",
            count: 7,
            total: "9,790.00 €",
            opportunities: [
                {
                    id: 3,
                    name: "Henry Campbell",
                    amount: "6,520.00 €",
                    status: "In Progress",
                    dueDate: "2025-04-22",
                },
                {
                    id: 4,
                    name: "Larouci Id",
                    amount: "3,270.00 €",
                    status: "Pending",
                    dueDate: "2025-04-28",
                },
            ],
        },
        {
            name: "Validation Technique",
            count: 5,
            total: "837.00 €",
            opportunities: [
                {
                    id: 5,
                    name: "Thomas Pasqui",
                    amount: "837.00 €",
                    status: "In Progress",
                    dueDate: "2025-04-20",
                },
            ],
        },
        {
            name: "Devis et Validation Client",
            count: 4,
            total: "3,509.00 €",
            opportunities: [
                {
                    id: 6,
                    name: "Camille Hélène",
                    amount: "3,509.00 €",
                    status: "Pending",
                    dueDate: "2025-04-26",
                },
            ],
        },
        {
            name: "Etude et Développement",
            count: 2,
            total: "7,605.00 €",
            opportunities: [
                {
                    id: 7,
                    name: "Camille Hélène",
                    amount: "7,605.00 €",
                    status: "In Progress",
                    dueDate: "2025-04-29",
                },
            ],
        },
        {
            name: "Planification",
            count: 2,
            total: "198,138.00 €",
            opportunities: [
                {
                    id: 8,
                    name: "Camille Hélène",
                    amount: "198,138.00 €",
                    status: "In Progress",
                    dueDate: "2025-05-01",
                },
            ],
        },
        {
            name: "Exécution",
            count: 2,
            total: "39,424.00 €",
            opportunities: [
                {
                    id: 9,
                    name: "Camille Hélène",
                    amount: "39,424.00 €",
                    status: "Completed",
                    dueDate: "2025-04-18",
                },
            ],
        },
    ];

    const handleCreateOpportunity = () => {
        alert("Create a new opportunity!");
        // Logic to create a new opportunity (e.g., navigate to a form)
    };

    return (
        <div className="flex-1 flex flex-col p-4 bg-white overflow-y-auto">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Pipeline
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
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 mb-4">
                <button
                    onClick={handleCreateOpportunity}
                    className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                    aria-label="Créer une nouvelle opportunité"
                >
                    Nouveau
                </button>
                <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm">
                    Générer des pistes
                </button>
            </div>

            {/* Kanban Board */}
            {hasAccess ? (
                <div className="flex space-x-4 flex-wrap pb-4">
                    {pipelineStages.map((stage) => (
                        <div
                            key={stage.name}
                            className="flex-none w-64 bg-gray-50 rounded-md shadow-sm p-4 m-4 border border-gray-300"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-sm font-semibold text-gray-800">
                                    {stage.name}
                                </h3>
                                <span className="text-xs text-gray-600">
                                    {stage.count}
                                </span>
                            </div>
                            <p className="text-xs text-gray-600 mb-4">
                                {stage.total}
                            </p>
                            {stage.opportunities.map((opportunity) => (
                                <div
                                    key={opportunity.id}
                                    className="bg-white border border-gray-200 rounded-md p-3 mb-2 hover:shadow-md cursor-pointer"
                                >
                                    <p className="text-sm text-gray-800">
                                        {opportunity.name}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        {opportunity.amount}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {opportunity.status}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Due: {opportunity.dueDate}
                                    </p>
                                </div>
                            ))}
                            <button
                                className="text-blue-500 hover:underline text-sm mt-2"
                                onClick={() =>
                                    alert(`Add opportunity to ${stage.name}`)
                                }
                            >
                                +
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <svg
                            className="w-8 h-8 text-purple-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Créer une opportunité
                    </h3>
                    <p className="text-sm text-gray-600 text-center max-w-md">
                        Comme vous n'êtes pas membre d'une équipe commerciale,
                        le pipeline de la première équipe s'affiche par défaut.
                        Pour travailler avec le CRM, vous devriez rejoindre une
                        équipe.
                    </p>
                </div>
            )}
        </div>
    );
};

export default CRMBoard;
