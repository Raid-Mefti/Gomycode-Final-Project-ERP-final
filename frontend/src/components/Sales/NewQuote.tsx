import React, { useState } from "react";
import {
    Printer,
    FileText,
    Send,
    Check,
    MoreVertical,
    ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewQuote: React.FC = () => {
    const navigate = useNavigate();
    const [orderLines, setOrderLines] = useState([
        {
            id: 1,
            product: "",
            description: "",
            quantity: 0,
            unit: "",
            unitPrice: 0,
            taxes: "",
            discount: 0,
            subtotal: 0,
        },
    ]);

    const handleAddLine = () => {
        setOrderLines([
            ...orderLines,
            {
                id: orderLines.length + 1,
                product: "",
                description: "",
                quantity: 0,
                unit: "",
                unitPrice: 0,
                taxes: "",
                discount: 0,
                subtotal: 0,
            },
        ]);
    };

    const handleSave = () => {
        alert("Quote saved!");
        navigate("/sales");
    };

    return (
        <div className="flex-1 flex flex-col p-4 bg-white overflow-y-auto">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Devis / Nouveau
                </h2>
                <div className="flex items-center space-x-2">
                    <button className="flex items-center text-gray-600 hover:text-gray-800">
                        <Printer size={16} className="mr-1" />
                        Imprimer
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-800">
                        <FileText size={16} className="mr-1" />
                        Action
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                        onClick={handleSave}
                    >
                        Nouveau
                    </button>
                </div>
            </div>

            {/* Form Section */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                    <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm">
                        Envoyer par email
                    </button>
                    <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm">
                        Confirmer
                    </button>
                    <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm">
                        Appliquer le timbre fiscal
                    </button>
                </div>
                <div className="flex space-x-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm flex items-center">
                        <Send size={16} className="mr-1" />
                        Devis
                    </button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm flex items-center">
                        <Check size={16} className="mr-1" />
                        Envoyé
                    </button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm flex items-center">
                        <FileText size={16} className="mr-1" />
                        Bon de commande
                    </button>
                </div>
            </div>

            {/* Form Fields */}
            <div className="bg-gray-50 p-4 rounded-md mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Client
                        </label>
                        <select className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Sélectionner un client</option>
                            <option value="henry">Henry Campbell</option>
                            <option value="camille">Camille Hélène</option>
                            <option value="john">John Miller</option>
                            <option value="thomas">Thomas Pasqui</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Expiration
                        </label>
                        <input
                            type="date"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Liste de prix
                        </label>
                        <select className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Sélectionner une liste</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Conditions de paiement
                        </label>
                        <select className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Sélectionner une condition</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Order Lines Table */}
            <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    Lignes de commande
                </h3>
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
                                Quantité
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                UDM
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                Prix unit.
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                TAXES
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                Rem. %
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                Sous-total
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderLines.map((line) => (
                            <tr key={line.id} className="border-b">
                                <td className="p-2">
                                    <select className="w-full border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="">
                                            Ajouter un produit
                                        </option>
                                    </select>
                                </td>
                                <td className="p-2">
                                    <input
                                        type="text"
                                        placeholder="Ajouter une description"
                                        className="w-full border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </td>
                                <td className="p-2">
                                    <input
                                        type="number"
                                        defaultValue={line.quantity}
                                        className="w-full border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </td>
                                <td className="p-2">
                                    <select className="w-full border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="">--</option>
                                    </select>
                                </td>
                                <td className="p-2">
                                    <input
                                        type="number"
                                        defaultValue={line.unitPrice}
                                        className="w-full border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </td>
                                <td className="p-2">
                                    <select className="w-full border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="">--</option>
                                    </select>
                                </td>
                                <td className="p-2">
                                    <input
                                        type="number"
                                        defaultValue={line.discount}
                                        className="w-full border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {line.subtotal.toFixed(2)} €
                                </td>
                                <td className="p-2">
                                    <button className="text-gray-600 hover:text-gray-800">
                                        <MoreVertical size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button
                    onClick={handleAddLine}
                    className="mt-2 text-blue-500 hover:underline text-sm"
                >
                    Ajouter une ligne
                </button>
            </div>

            {/* Totals Section */}
            <div className="flex justify-end mb-4">
                <div className="w-64">
                    <div className="flex justify-between text-sm text-gray-800">
                        <span>Remise:</span>
                        <span>0.00 €</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-800 font-semibold">
                        <span>TOTAL:</span>
                        <span>0.00 €</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-800">
                        <span>Marge:</span>
                        <span>0.00 €</span>
                    </div>
                </div>
            </div>

            {/* Tabs and Actions */}
            <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                    <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm">
                        Envoyer un message
                    </button>
                    <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm">
                        Enregistrer une note
                    </button>
                    <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm flex items-center">
                        <ChevronDown size={16} className="mr-1" />
                        Activités
                    </button>
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                    onClick={handleSave}
                >
                    Sauver
                </button>
            </div>
        </div>
    );
};

export default NewQuote;
