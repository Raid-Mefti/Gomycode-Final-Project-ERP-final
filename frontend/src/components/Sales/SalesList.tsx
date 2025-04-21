import React, { useState } from "react";
import {
    Search,
    Filter,
    Group,
    Star,
    MoreVertical,
    ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SalesList: React.FC = () => {
    const [hasAccess, setHasAccess] = useState(false); // Mock access state
    const navigate = useNavigate();

    const quotes = [
        {
            id: 1,
            number: "REF001",
            creationDate: "12/04/2023",
            client: "Henry Campbell",
            vendor: "",
            activities: 0,
            stampAmount: "0.00 €",
            total: "0.00 €",
            status: "Envoyé",
            deliveryStatus: "À livrer",
        },
        {
            id: 2,
            number: "REF002",
            creationDate: "26/05/2023",
            client: "Camille Hélène",
            vendor: "",
            activities: 0,
            stampAmount: "74,733.00 €",
            total: "74,733.00 €",
            status: "Envoyé",
            deliveryStatus: "À livrer",
        },
        {
            id: 3,
            number: "REF003",
            creationDate: "25/04/2023",
            client: "John Miller",
            vendor: "",
            activities: 0,
            stampAmount: "0.00 €",
            total: "0.00 €",
            status: "Envoyé",
            deliveryStatus: "À livrer",
        },
        {
            id: 4,
            number: "REF004",
            creationDate: "15/04/2023",
            client: "Thomas Pasqui",
            vendor: "",
            activities: 0,
            stampAmount: "0.00 €",
            total: "0.00 €",
            status: "Envoyé",
            deliveryStatus: "À livrer",
        },
        {
            id: 5,
            number: "REF005",
            creationDate: "07/04/2023",
            client: "Henry Campbell",
            vendor: "",
            activities: 0,
            stampAmount: "0.00 €",
            total: "0.00 €",
            status: "Envoyé",
            deliveryStatus: "À livrer",
        },
        {
            id: 6,
            number: "REF006",
            creationDate: "16/05/2023",
            client: "Camille Hélène",
            vendor: "",
            activities: 0,
            stampAmount: "0.00 €",
            total: "0.00 €",
            status: "Envoyé",
            deliveryStatus: "À livrer",
        },
        {
            id: 7,
            number: "REF007",
            creationDate: "16/05/2023",
            client: "Camille Hélène",
            vendor: "",
            activities: 0,
            stampAmount: "0.00 €",
            total: "0.00 €",
            status: "Envoyé",
            deliveryStatus: "À livrer",
        },
        {
            id: 8,
            number: "REF008",
            creationDate: "16/05/2023",
            client: "Camille Hélène",
            vendor: "",
            activities: 0,
            stampAmount: "0.00 €",
            total: "0.00 €",
            status: "Envoyé",
            deliveryStatus: "À livrer",
        },
        {
            id: 9,
            number: "REF009",
            creationDate: "16/05/2023",
            client: "Camille Hélène",
            vendor: "",
            activities: 0,
            stampAmount: "0.00 €",
            total: "0.00 €",
            status: "Envoyé",
            deliveryStatus: "À livrer",
        },
        {
            id: 10,
            number: "REF010",
            creationDate: "16/05/2023",
            client: "Camille Hélène",
            vendor: "",
            activities: 0,
            stampAmount: "0.00 €",
            total: "0.00 €",
            status: "Envoyé",
            deliveryStatus: "À livrer",
        },
    ];

    const handleNewQuote = () => {
        navigate("/sales/new");
    };

    return (
        <div className="flex-1 flex flex-col p-4 bg-white overflow-y-auto">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Devis</h2>
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
                    onClick={handleNewQuote}
                    className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                    aria-label="Créer un nouveau devis"
                >
                    Nouveau
                </button>
            </div>

            {/* Quotes Table */}
            {hasAccess ? (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Numéro
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Date de création
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Client
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Vendeur
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Activités
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Montant DU timbre
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    TOTAL
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Statut
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Statut de livraison
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {quotes.map((quote) => (
                                <tr
                                    key={quote.id}
                                    className="border-b hover:bg-gray-50"
                                >
                                    <td className="p-2 text-sm text-gray-800">
                                        {quote.number}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {quote.creationDate}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {quote.client}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {quote.vendor}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        <span className="inline-flex items-center justify-center w-5 h-5 bg-gray-200 rounded-full text-xs text-gray-600">
                                            {quote.activities}
                                        </span>
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {quote.stampAmount}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {quote.total}
                                    </td>
                                    <td className="p-2 text-sm">
                                        <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs">
                                            {quote.status}
                                        </span>
                                    </td>
                                    <td className="p-2 text-sm">
                                        <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md text-xs">
                                            {quote.deliveryStatus}
                                        </span>
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        <button className="text-gray-600 hover:text-gray-800">
                                            <MoreVertical size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex items-center justify-between mt-4">
                        <div className="text-sm text-gray-600">1-10 de 10</div>
                        <div className="flex items-center space-x-2">
                            <button className="p-1 text-gray-600 hover:text-gray-800">
                                <ChevronDown size={16} className="rotate-90" />
                            </button>
                            <button className="p-1 text-gray-600 hover:text-gray-800">
                                <ChevronDown size={16} className="-rotate-90" />
                            </button>
                        </div>
                    </div>
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
                        Créez un nouveau devis, la première étape d’une vente !
                    </h3>
                    <p className="text-sm text-gray-600 text-center max-w-md">
                        Une fois le devis confirmé par le client, il devient un
                        bon de commande. Vous pourrez créer une facture et
                        encaisser le paiement.
                    </p>
                </div>
            )}
        </div>
    );
};

export default SalesList;
