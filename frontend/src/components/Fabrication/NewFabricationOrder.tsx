import React from "react";
import { useNavigate } from "react-router-dom";

const NewFabricationOrder: React.FC = () => {
    const navigate = useNavigate();

    // Sample data for the "Composants" table (empty to match screenshot)
    const components = [];

    return (
        <div className="flex-1 flex flex-col p-4 bg-white overflow-y-auto">
            {/* Header with Buttons */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        CONFIRMER
                    </button>
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
                <div className="flex space-x-2">
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        Imprimer
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        Action
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        onClick={() => navigate("/fabrication")}
                    >
                        Nouveau
                    </button>
                </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-6 rounded-md">
                <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">
                            Produit *
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            placeholder="À produire"
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-2">
                            Nomenclature *
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-2">
                            Quantité *
                        </label>
                        <input
                            type="number"
                            value="1.00"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="w-1/3 text-right">
                        <label className="block text-sm font-medium text-gray-700">
                            Date planifiée *
                        </label>
                        <input
                            type="text"
                            value="07/04/2025 07:06:37"
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
                            readOnly
                        />
                    </div>
                </div>

                {/* Tabs for Components, Work Orders, Sub-Products, Miscellaneous */}
                <div className="mb-4">
                    <div className="flex space-x-4 border-b">
                        <button className="pb-2 text-sm font-medium text-gray-800 border-b-2 border-blue-500">
                            Composants
                        </button>
                        <button className="pb-2 text-sm font-medium text-gray-600">
                            Ordres de travail
                        </button>
                        <button className="pb-2 text-sm font-medium text-gray-600">
                            Sous-produits
                        </button>
                        <button className="pb-2 text-sm font-medium text-gray-600">
                            Divers
                        </button>
                    </div>
                </div>

                {/* Components Table */}
                <div className="overflow-x-auto">
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
                                    Quantité
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Date de début plan.
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
                            {components.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={7}
                                        className="p-2 text-center text-sm text-gray-600"
                                    >
                                        Ajouter une ligne
                                    </td>
                                </tr>
                            ) : (
                                components.map((component, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="p-2 text-sm text-gray-800">
                                            {component.operation}
                                        </td>
                                        <td className="p-2 text-sm text-gray-800">
                                            {component.workstation}
                                        </td>
                                        <td className="p-2 text-sm text-gray-800">
                                            {component.product}
                                        </td>
                                        <td className="p-2 text-sm text-gray-800">
                                            {component.quantity}
                                        </td>
                                        <td className="p-2 text-sm text-gray-800">
                                            {component.startDate}
                                        </td>
                                        <td className="p-2 text-sm text-gray-800">
                                            {component.estimatedDuration}
                                        </td>
                                        <td className="p-2 text-sm text-gray-800">
                                            {component.actualDuration}
                                        </td>
                                    </tr>
                                ))
                            )}
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
                        onClick={() => navigate("/fabrication")}
                    >
                        Suivre
                    </button>
                </div>
            </div>

            {/* Activity Log */}
            <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-800">
                    Aujourd'hui
                </h3>
                <div className="flex items-start mt-2">
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center mr-2">
                        H
                    </div>
                    <div>
                        <p className="text-sm text-gray-800">
                            <span className="font-medium"> John Doe</span>{" "}
                            Création d'un nouvel enregistrement
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewFabricationOrder;
