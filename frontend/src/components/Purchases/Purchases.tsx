import React from "react";
import { useNavigate } from "react-router-dom";

const Purchases: React.FC = () => {
    const navigate = useNavigate();

    // Static data for the table (replace with API data in the future)
    const priceRequests = [
        {
            reference: "POO018",
            supplier: "AMS-MB",
            buyer: "Nassime el hadj",
            deadline: "-",
            activity: "Bon de commande",
            sourceDocument: "",
            taxes: "3,913.11 DA",
            stampAmount: "0.00 DA",
            total: "24,508.41 DA",
            status: "Bon de commande",
        },
        {
            reference: "POO017",
            supplier: "HEIDELBERG ALGERIE",
            buyer: "Nassime el hadj",
            deadline: "-",
            activity: "Bon de commande",
            sourceDocument: "",
            taxes: "0.00 DA",
            stampAmount: "0.00 DA",
            total: "2,587,700.00 DA",
            status: "Bon de commande",
        },
        {
            reference: "POO016",
            supplier: "SARL LE PAON",
            buyer: "Nassime el hadj",
            deadline: "-",
            activity: "Bon de commande",
            sourceDocument: "",
            taxes: "0.00 DA",
            stampAmount: "0.00 DA",
            total: "0.00 DA",
            status: "Bon de commande",
        },
        {
            reference: "POO015",
            supplier: "SOTIPAPIER",
            buyer: "Nassime el hadj",
            deadline: "-",
            activity: "Bon de commande",
            sourceDocument: "",
            taxes: "0.00 €",
            stampAmount: "0.00 €",
            total: "81,000.00 €",
            status: "Bon de commande",
        },
        {
            reference: "POO014",
            supplier: "HEIDELBERG ALGERIE",
            buyer: "Nassime el hadj",
            deadline: "-",
            activity: "Bon de commande",
            sourceDocument: "",
            taxes: "0.00 €",
            stampAmount: "0.00 €",
            total: "15,190.00 €",
            status: "Bon de commande",
        },
        {
            reference: "POO013",
            supplier: "SARL SOCIETE MODERNE TRANSFO PAP",
            buyer: "Nassime el hadj",
            deadline: "-",
            activity: "Bon de commande",
            sourceDocument: "",
            taxes: "0.50 DA",
            stampAmount: "0.00 DA",
            total: "2,320,241.50 DA",
            status: "Bon de commande",
        },
        {
            reference: "POO012",
            supplier: "WILFRIED HEINZEL AG",
            buyer: "Nassime el hadj",
            deadline: "il y a 33 jours",
            activity: "Demande de prix",
            sourceDocument: "",
            taxes: "0.00 €",
            stampAmount: "0.00 €",
            total: "134,123.00 €",
            status: "Demande de prix",
        },
        {
            reference: "POO011",
            supplier: "WILFRIED HEINZEL AG",
            buyer: "Nassime el hadj",
            deadline: "il y a 33 jours",
            activity: "Demande de prix",
            sourceDocument: "",
            taxes: "0.00 €",
            stampAmount: "0.00 €",
            total: "0.00 €",
            status: "Demande de prix",
        },
        {
            reference: "POO010",
            supplier: "WILFRIED HEINZEL AG",
            buyer: "Nassime el hadj",
            deadline: "il y a 33 jours",
            activity: "Demande de prix",
            sourceDocument: "",
            taxes: "0.00 €",
            stampAmount: "0.00 €",
            total: "0.00 €",
            status: "Demande de prix",
        },
        {
            reference: "POO007",
            supplier: "WILFRIED HEINZEL AG",
            buyer: "Nassime el hadj",
            deadline: "-",
            activity: "",
            sourceDocument: "",
            taxes: "0.00 €",
            stampAmount: "0.00 €",
            total: "0.00 €",
            status: "Annulé",
        },
    ];

    return (
        <div className="flex-1 flex flex-col p-4 bg-white overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Demandes de prix
                </h2>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={() => navigate("/purchases/new")}
                >
                    NOUVEAU
                </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        Toutes les demandes de prix
                    </h3>
                    <p className="text-lg font-bold text-gray-800">2</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        À envoyer
                    </h3>
                    <p className="text-lg font-bold text-gray-800">0</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        En Attente
                    </h3>
                    <p className="text-lg font-bold text-gray-800">2</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        En Retard
                    </h3>
                    <p className="text-lg font-bold text-gray-800">0</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        Valeur moyenne de la commande
                    </h3>
                    <p className="text-lg font-bold text-gray-800">
                        5,624,886.27 DA
                    </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        Achat ces 7 derniers jours
                    </h3>
                    <p className="text-lg font-bold text-gray-800">0.00 DA</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        Demandes de prix envoyées
                    </h3>
                    <p className="text-lg font-bold text-gray-800">0.14</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        Demandes de prix envoyées pour les achats
                    </h3>
                    <p className="text-lg font-bold text-gray-800">0</p>
                    <p className="text-xs text-gray-600">
                        ces 7 derniers jours
                    </p>
                </div>
            </div>

            {/* Table */}
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
                                Fournisseur
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                Acheteur
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                Échéance de commande
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                Activité
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                Document d'origine
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                Taxes
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                Montant du Timbre
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                TOTAL
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                STATUT
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {priceRequests.map((request, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-2">
                                    <input type="checkbox" />
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {request.reference}
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {request.supplier}
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {request.buyer}
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {request.deadline}
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {request.activity}
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {request.sourceDocument}
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {request.taxes}
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {request.stampAmount}
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {request.total}
                                </td>
                                <td className="p-2 text-sm">
                                    <span
                                        className={`px-2 py-1 rounded ${
                                            request.status === "Bon de commande"
                                                ? "bg-green-100 text-green-800"
                                                : request.status ===
                                                  "Demande de prix"
                                                ? "bg-red-100 text-red-800"
                                                : "bg-gray-100 text-gray-800"
                                        }`}
                                    >
                                        {request.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
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
        </div>
    );
};

export default Purchases;
