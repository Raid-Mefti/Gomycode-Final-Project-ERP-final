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
                            value="07/04/2025 07:07:34"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            readOnly
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-2">
                            Responsable
                        </label>
                        <input
                            type="text"
                            value="Houssem kouachi"
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
                            <option>KIM: Fabrication</option>
                        </select>
                        <label className="block text-sm font-medium text-gray-700 mt-2">
                            Origine *
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-2">
                            Emplacement des composants *
                        </label>
                        <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                            <option>ST/Pré-Production</option>
                        </select>
                        <label className="block text-sm font-medium text-gray-700 mt-2">
                            Emplacement des produits finis *
                        </label>
                        <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                            <option>ST/Post-Production</option>
                        </select>
                    </div>
                    <div className="w-1/3">
                        {/* Placeholder for additional fields if needed */}
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
        </div>
    );
};

export default NewManufacturingOrder;
