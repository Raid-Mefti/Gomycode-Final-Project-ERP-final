import React from "react";
import { useNavigate } from "react-router-dom";

const NewPriceRequest: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 flex flex-col p-4 bg-white overflow-y-auto">
            {/* Header with Buttons */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        ENVOYER PAR EMAIL
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        IMPRIMER LA DEMANDE DE PRIX
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        CONFIRMER LA COMMANDE
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        ANNULER
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        APPLIQUER LE TIMBRE FISCAL
                    </button>
                </div>
                <div className="flex space-x-2">
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        DEMANDE DE PRIX
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        ENVOYÉE
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        BON DE COMMANDE
                    </button>
                </div>
            </div>

            {/* Documents Indicator */}
            <div className="flex justify-end mb-4">
                <span className="text-sm text-gray-600">Documents: 0</span>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-6 rounded-md">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Demande de prix
                </h2>
                <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">
                            Type Achats
                        </label>
                        <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                            <option>Local</option>
                            <option>Import</option>
                            <option>Investissement</option>
                            <option>Divers</option>
                        </select>
                    </div>
                    <div className="w-1/3 text-right">
                        <label className="block text-sm font-medium text-gray-700">
                            échéance de commande
                        </label>
                        <input
                            type="text"
                            value="07/04/2025 07:05:12"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            readOnly
                        />
                    </div>
                </div>

                <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">
                            Fournisseur <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Nom, numéro TVA, email"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        <p className="text-sm text-gray-600 mt-1">
                            Référence fournisseur
                        </p>
                        <input
                            type="text"
                            value="DZD"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="w-1/3">
                        <label className="block text-sm font-medium text-gray-700">
                            Arrivée prévue
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            placeholder="Sélectionnez une date"
                        />
                        <div className="flex items-center mt-2">
                            <input type="checkbox" className="mr-2" />
                            <label className="text-sm text-gray-700">
                                Demande de confirmation
                            </label>
                        </div>
                        <label className="block text-sm font-medium text-gray-700 mt-2">
                            livrer à
                        </label>
                        <input
                            type="text"
                            placeholder="KIM: Réceptions"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
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
                                    Description
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Coût logistique
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Quantité
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    UDM
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Prix un...
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Remise...
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Taxes
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Sous-total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td
                                    colSpan={9}
                                    className="p-2 text-center text-sm text-gray-600"
                                >
                                    Ajouter un produit
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button className="text-blue-500 text-sm mb-4">
                    Ajouter une section
                </button>
                <button className="text-blue-500 text-sm mb-4 ml-4">
                    Ajouter une note
                </button>

                {/* Totals */}
                <div className="flex justify-between mb-4">
                    <div>
                        <p className="text-sm text-gray-600">
                            (*) montant hors taxes
                        </p>
                        <p className="text-sm text-gray-600">TOTAL: 1 Words</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-600">Remise: 0.00 DA</p>
                        <p className="text-sm text-gray-600">
                            Logistic Cost: 0.00 DA
                        </p>
                        <p className="text-sm font-semibold text-gray-800">
                            TOTAL: 0.00 DA
                        </p>
                    </div>
                </div>

                {/* Conditions */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Définissez vos conditions générales
                    </label>
                    <textarea
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        rows={3}
                    />
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
                        onClick={() => navigate("/purchases")}
                    >
                        Sauver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewPriceRequest;
