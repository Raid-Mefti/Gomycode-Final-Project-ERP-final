import React, { useState } from "react";
import {
    Search,
    Filter,
    Group,
    Star,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const StockAnalysisList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 773; // As per the screenshot (1/773)

    const stockData = [
        {
            categorie: "Tous / MP / Consommable",
            produit: "[1] Prod",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 0,
            virtuellementDisponible: 0,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "Tous / MP / Encre / Bobine",
            produit: "[1212] test/00002",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 0,
            virtuellementDisponible: 0,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "Tous / MP / Papier / Folia...",
            produit: "[1212]/5/01/00002",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 0,
            virtuellementDisponible: 0,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "Tous / MP / Plaques Impr...",
            produit: "[1234] Botte mouche",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 0,
            virtuellementDisponible: 0,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "",
            produit: "[2344] Caisse Papier",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 0,
            virtuellementDisponible: 0,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "",
            produit: "[2456] Boxes Petit",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 0,
            virtuellementDisponible: 0,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "",
            produit: "[2456] Insect Killer",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 55,
            virtuellementDisponible: 55,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "",
            produit: "[5681] Boxe XL",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 0,
            virtuellementDisponible: 0,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "",
            produit: "[5888] Boxe Lumex",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 0,
            virtuellementDisponible: 0,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "",
            produit: "[B51] BISCUITS",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 0,
            virtuellementDisponible: 0,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "",
            produit: "[C-4000] Forme découpe",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 0,
            virtuellementDisponible: 0,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "",
            produit: "[CON-11] CAISSE 43",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 0,
            virtuellementDisponible: 0,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "",
            produit: "[CON-110] VERNIS DRIP-OFF C",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 60,
            virtuellementDisponible: 60,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "",
            produit: "[CON-110] ENCRE JAUNE 110 C",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 30,
            virtuellementDisponible: 30,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "",
            produit: "[CON-103] ENCRE JAUNE 119 C",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 0,
            virtuellementDisponible: 0,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "",
            produit: "[CON-105] ENCRE JAUNE 120 C",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 0,
            virtuellementDisponible: 0,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "",
            produit: "[CON-105] ENCRE JAUNE 121 C",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 0,
            virtuellementDisponible: 0,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
        {
            categorie: "",
            produit: "[CON-106] ENCRE JAUNE 122 C",
            coutUnitaire: "0.00 DA",
            valeurTotale: "0.00 DA",
            enStock: 0,
            virtuellementDisponible: 0,
            reception: 0,
            sortant: 0,
            unite: "0.00 kg",
        },
    ];

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="flex-1 flex flex-col p-4 bg-white">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Stock</h2>
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
                    className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                    aria-label="Créer un nouvel enregistrement"
                >
                    Nouveau
                </button>
            </div>

            {/* Stock Analysis Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-sm text-gray-600">
                            <th className="p-2 text-left">Catégorie</th>
                            <th className="p-2 text-left">Produit</th>
                            <th className="p-2 text-left">Coût unitaire</th>
                            <th className="p-2 text-left">Valeur totale</th>
                            <th className="p-2 text-left">En Stock</th>
                            <th className="p-2 text-left">
                                Virtuellement disponible
                            </th>
                            <th className="p-2 text-left">Réception</th>
                            <th className="p-2 text-left">Sortant</th>
                            <th className="p-2 text-left">Unité</th>
                            <th className="p-2 text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {stockData.map((entry, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200 hover:bg-gray-50"
                            >
                                <td className="p-2 text-sm text-gray-600">
                                    {entry.categorie}
                                </td>
                                <td className="p-2 text-sm text-gray-600">
                                    {entry.produit}
                                </td>
                                <td className="p-2 text-sm text-gray-600">
                                    {entry.coutUnitaire}
                                </td>
                                <td className="p-2 text-sm text-gray-600">
                                    {entry.valeurTotale}
                                </td>
                                <td className="p-2 text-sm text-gray-600">
                                    {entry.enStock}
                                </td>
                                <td className="p-2 text-sm text-gray-600">
                                    {entry.virtuellementDisponible}
                                </td>
                                <td className="p-2 text-sm text-gray-600">
                                    {entry.reception}
                                </td>
                                <td className="p-2 text-sm text-gray-600">
                                    {entry.sortant}
                                </td>
                                <td className="p-2 text-sm text-gray-600">
                                    {entry.unite}
                                </td>
                                <td className="p-2 text-sm text-gray-600 flex space-x-2">
                                    <button className="text-blue-500 hover:underline">
                                        Historique
                                    </button>
                                    <button className="text-blue-500 hover:underline">
                                        Réassort
                                    </button>
                                    {(entry.produit ===
                                        "[CON-110] VERNIS DRIP-OFF C" ||
                                        entry.produit ===
                                            "[CON-110] ENCRE JAUNE 110 C") && (
                                        <button className="text-blue-500 hover:underline">
                                            Emplacements
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StockAnalysisList;
