import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NewInventoryOperation: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Extract the section from the previous route (e.g., "/inventory/receptions" -> "receptions")
    const previousPath = location.state?.from || location.pathname;
    const section = previousPath.split("/").pop() || "receptions";

    // Map section to operation type for the dropdown
    const operationTypes: { [key: string]: string } = {
        receptions: "KIM: Réceptions",
        transfers: "Transferts internes",
        deliveries: "KIM: Livraisons",
        returns: "Retours",
        reservations: "Réservation Stock",
        manufacturing: "Fabrication",
        "finished-products": "Stocker les produits finis",
        "cq-to-stock": "MP. CQ. -> Stock",
        "receptions-to-cq": "MP. Réceptions -> Contrôle Qualité",
        "kim-receptions": "KIM. Réceptions Divers",
    };

    const operationType = operationTypes[section] || "KIM: Livraisons";

    return (
        <div className="flex-1 flex flex-col p-4 bg-white overflow-y-auto">
            {/* Header with Buttons */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        VALIDER
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        IMPRIMER LES ÉTIQUETTES
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        REBUT
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        ANNULER
                    </button>
                </div>
                <div className="flex space-x-2">
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        BROUILLON
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        EN ATTENTE
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        PRÊT
                    </button>
                </div>
            </div>

            {/* Documents Indicator */}
            <div className="flex justify-end mb-4">
                <span className="text-sm text-gray-600">Documents: 0</span>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-6 rounded-md">
                <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">
                            Adresse de livraison
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="w-1/3 text-right">
                        <label className="block text-sm font-medium text-gray-700">
                            Date prévue
                        </label>
                        <input
                            type="text"
                            value="07/04/2025 07:06:33"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            readOnly
                        />
                    </div>
                </div>

                <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">
                            Type d'opération
                        </label>
                        <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                            <option>{operationType}</option>
                        </select>
                        <label className="block text-sm font-medium text-gray-700 mt-2">
                            Emplacement d'origine
                        </label>
                        <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                            <option>ST/Stock</option>
                        </select>
                    </div>
                    <div className="w-1/3">
                        <label className="block text-sm font-medium text-gray-700">
                            Document d'origine
                        </label>
                        <input
                            type="text"
                            value="par ex. P00032"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div>

                <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">
                            Opérations détaillées
                        </label>
                        <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                            <option>Opérations</option>
                        </select>
                    </div>
                    <div className="w-1/3">
                        <label className="block text-sm font-medium text-gray-700">
                            Info complémentaire
                        </label>
                        <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                            <option>Note</option>
                        </select>
                    </div>
                </div>

                {/* Products Table */}
                <div className="overflow-x-auto mb-4">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Produit
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    De
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Lot/numéro de série
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Quantité de début...
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Fait
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Unité de mesure
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td
                                    colSpan={6}
                                    className="p-2 text-center text-sm text-gray-600"
                                >
                                    Ajouter une ligne
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        Envoyer un message
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        Enregistrer une note
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        Activités
                    </button>
                </div>
                <div className="flex space-x-2">
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        Attachments: 0
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        onClick={() => navigate(`/inventory/${section}`)}
                    >
                        Sauver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewInventoryOperation;
