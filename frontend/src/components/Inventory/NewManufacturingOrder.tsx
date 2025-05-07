import React from "react";
import { useNavigate } from "react-router-dom";

const NewManufacturingOrder: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 flex flex-col p-4 bg-white overflow-y-auto">
            {/* Header with Buttons */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        CONFIRMER
                    </button>
                </div>
                <div className="flex space-x-2">
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        BROUILLON
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        CONFIRMÉ
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        EN COURS
                    </button>
                </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-6 rounded-md">
                <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">
                            Produit
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-2">
                            Nomenclature
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-2">
                            Quantité
                        </label>
                        <input
                            type="number"
                            value="1.00"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="w-1/3 text-right">
                        <label className="block text-sm font-medium text-gray-700">
                            Date planifiée
                        </label>
                        <input
                            type="text"
                            value="07/04/2025 07:06:07"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            readOnly
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-2">
                            Responsable
                        </label>
                        <input
                            type="text"
                            value=" John Doe"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-2">
                            À produire
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Composants
                    </label>
                    <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                        <option>Ordres de travail</option>
                        <option>Sous-produits</option>
                        <option>Divers</option>
                    </select>
                </div>

                {/* Operations Table */}
                <div className="overflow-x-auto mb-4">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Opération
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Poste de travail
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Produit
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Quantité de début...
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Durée prévue
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Durée réelle
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
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        onClick={() => navigate("/inventory")}
                    >
                        Sauver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewManufacturingOrder;
