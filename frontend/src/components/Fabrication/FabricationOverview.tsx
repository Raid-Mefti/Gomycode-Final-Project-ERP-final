import React from "react";
import { useNavigate } from "react-router-dom";

// Define the interface for a fabrication order
interface FabricationOrder {
    reference: string;
    plannedDate: string;
    product: string;
    nextActivity: string;
    origin: string;
    componentStatus: string;
    quantity: string;
    estimatedDuration: string;
    actualDuration: string;
    status: string;
}

const FabricationOverview: React.FC = () => {
    const navigate = useNavigate();

    // Sample data to show table rows (uncomment to see rows, comment to see empty state)
    const orders: FabricationOrder[] = [
        {
            reference: "REF0001",
            plannedDate: "il y a 11 jours",
            product: "Produit A",
            nextActivity: "Étape 1",
            origin: "ST/Pré-Production",
            componentStatus: "Disponible",
            quantity: "100 UdM",
            estimatedDuration: "2h",
            actualDuration: "1h 45m",
            status: "En cours",
        },
        {
            reference: "REF0002",
            plannedDate: "il y a 10 jours",
            product: "Produit B",
            nextActivity: "Étape 2",
            origin: "ST/Pré-Production",
            componentStatus: "En attente",
            quantity: "50 UdM",
            estimatedDuration: "3h",
            actualDuration: "N/A",
            status: "Brouillon",
        },
    ];

    // To match the screenshot's empty state, use an empty array
    // const orders: FabricationOrder[] = [];

    return (
        <div className="flex-1 flex flex-col p-4 bg-white min-h-screen overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Ordres de fabrication
                </h2>
                <div className="flex space-x-2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="rechercher..."
                            className="border border-gray-300 rounded-md p-2 pl-8"
                        />
                        <svg
                            className="absolute left-2 top-2.5 w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        FILTRES
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        Regrouper par
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        onClick={() => navigate("/fabrication/new")}
                    >
                        NOUVEAU
                    </button>
                </div>
            </div>

            {/* Table or Empty State */}
            {orders.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full">
                    <svg
                        className="w-16 h-16 text-gray-400 mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Aucun ordre de fabrication trouvé. Créons-en un.
                    </h3>
                    <p className="text-sm text-gray-600 text-center">
                        Consommez des composants et créez des produits finis en
                        vous basant sur les nomenclatures
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    <input type="checkbox" />
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Référence
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Date planifiée
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Produit
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Activité suivante
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Origine
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Statut des composants
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Quantité UdM
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Durée prévue
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Durée réelle
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    État
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-2">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {order.reference}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {order.plannedDate}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {order.product}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {order.nextActivity}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {order.origin}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {order.componentStatus}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {order.quantity}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {order.estimatedDuration}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {order.actualDuration}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {order.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Pagination (only shown if there are orders) */}
            {orders.length > 0 && (
                <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-gray-600">1-10 / 10</p>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                            Précédent
                        </button>
                        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                            Suivant
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FabricationOverview;
