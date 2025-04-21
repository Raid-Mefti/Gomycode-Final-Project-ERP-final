import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Search,
    Filter,
    Group,
    Star,
    ChevronLeft,
    ChevronRight,
    MessageSquare,
    Activity,
    Eye,
} from "lucide-react";

const Costs: React.FC = () => {
    const [formData, setFormData] = useState({
        nom: "",
        date: "07/04/2025",
        appliquerSur: "Transferts",
        transferts: "",
    });

    const [products, setProducts] = useState([
        {
            id: 1,
            produit: "",
            description: "",
            compte: "",
            methode: "",
            cout: "",
        },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 2;

    const navigate = useNavigate();

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleProductChange = (
        index: number,
        field: string,
        value: string
    ) => {
        const updatedProducts = [...products];
        updatedProducts[index] = { ...updatedProducts[index], [field]: value };
        setProducts(updatedProducts);
    };

    const addProductRow = () => {
        setProducts([
            ...products,
            {
                id: products.length + 1,
                produit: "",
                description: "",
                compte: "",
                methode: "",
                cout: "",
            },
        ]);
    };

    const handleValider = () => {
        alert("Valider clicked!");
        // Add logic to validate and save the form
    };

    const handleAnnuler = () => {
        alert("Annuler clicked!");
        // Add logic to cancel the form
        setFormData({
            nom: "",
            date: "07/04/2025",
            appliquerSur: "Transferts",
            transferts: "",
        });
        setProducts([
            {
                id: 1,
                produit: "",
                description: "",
                compte: "",
                methode: "",
                cout: "",
            },
        ]);
    };

    const handleBrouillon = () => {
        alert("Brouillon clicked!");
        // Add logic to save as draft
    };

    const handleComptabilise = () => {
        alert("Comptabilisé clicked!");
        // Add logic to mark as comptabilisé
    };

    const handleNouveau = () => {
        navigate("/costs/newCost");
    };

    const handleEnregistrer = () => {
        alert("Enregistrer clicked!");
        // Add logic to save the form
    };

    const handleEnvoyerMessage = () => {
        alert("Envoyer un message clicked!");
        // Add logic to send a message
    };

    const handleActivites = () => {
        alert("Activités clicked!");
        // Add logic to view activities
    };

    const handleSuivre = () => {
        alert("Suivre clicked!");
        // Add logic to follow the entry
    };

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
                <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Coûts logistiques / Nouveau
                    </h2>
                </div>
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
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 mb-4">
                <button
                    onClick={handleValider}
                    className="bg-green-500 text-white px-4 py-1 rounded-md text-sm hover:bg-green-600"
                >
                    Valider
                </button>
                <button
                    onClick={handleAnnuler}
                    className="bg-red-500 text-white px-4 py-1 rounded-md text-sm hover:bg-red-600"
                >
                    Annuler
                </button>
                <button
                    onClick={handleBrouillon}
                    className="bg-gray-500 text-white px-4 py-1 rounded-md text-sm hover:bg-gray-600"
                >
                    Brouillon
                </button>
                <button
                    onClick={handleComptabilise}
                    className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                >
                    Comptabilisé
                </button>
                <button
                    onClick={handleNouveau}
                    className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                >
                    Nouveau
                </button>
            </div>

            {/* Form Section */}
            <div className="bg-gray-50 p-4 rounded-md shadow-sm mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Nouveau
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Nom
                        </label>
                        <input
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Date
                        </label>
                        <input
                            type="text"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Appliquer sur
                        </label>
                        <select
                            name="appliquerSur"
                            value={formData.appliquerSur}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Transferts">Transferts</option>
                            <option value="Ordres de fabrication">
                                Ordres de fabrication
                            </option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Transferts
                        </label>
                        <select
                            name="transferts"
                            value={formData.transferts}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Sélectionner...</option>
                            <option value="Journal">Journal</option>
                            <option value="Valorisation des stocks">
                                Valorisation des stocks
                            </option>
                            <option value="Facture fournisseur">
                                Facture fournisseur
                            </option>
                        </select>
                    </div>
                </div>

                {/* Products Table */}
                <div className="mb-4">
                    <h4 className="text-sm text-gray-600 mb-2">
                        Coûts additionnels
                    </h4>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200 text-sm text-gray-600">
                                <th className="p-2 text-left">Produit</th>
                                <th className="p-2 text-left">Description</th>
                                <th className="p-2 text-left">Compte</th>{" "}
                                {/* Fixed syntax error here */}
                                <th className="p-2 text-left">
                                    Méthode de répartition
                                </th>
                                <th className="p-2 text-left">Coût</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr
                                    key={product.id}
                                    className="border-b border-gray-200"
                                >
                                    <td className="p-2">
                                        <input
                                            type="text"
                                            value={product.produit}
                                            onChange={(e) =>
                                                handleProductChange(
                                                    index,
                                                    "produit",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="p-2">
                                        <input
                                            type="text"
                                            value={product.description}
                                            onChange={(e) =>
                                                handleProductChange(
                                                    index,
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="p-2">
                                        <input
                                            type="text"
                                            value={product.compte}
                                            onChange={(e) =>
                                                handleProductChange(
                                                    index,
                                                    "compte",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="p-2">
                                        <input
                                            type="text"
                                            value={product.methode}
                                            onChange={(e) =>
                                                handleProductChange(
                                                    index,
                                                    "methode",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="p-2">
                                        <input
                                            type="text"
                                            value={product.cout}
                                            onChange={(e) =>
                                                handleProductChange(
                                                    index,
                                                    "cout",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
                        onClick={addProductRow}
                        className="text-blue-500 text-sm hover:underline mt-2"
                    >
                        Ajouter une ligne
                    </button>
                </div>

                {/* Correction de valorisation */}
                <div>
                    <h4 className="text-sm text-gray-600 mb-2">
                        Correction de valorisation
                    </h4>
                    <div className="flex justify-end">
                        <span className="text-sm text-gray-800">
                            Total: 0.00 DA
                        </span>
                    </div>
                    <button className="text-blue-500 text-sm hover:underline">
                        Calculer
                    </button>
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                    <button
                        onClick={handleEnregistrer}
                        className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                    >
                        Enregistrer
                    </button>
                    <button
                        onClick={handleEnvoyerMessage}
                        className="flex items-center text-gray-600 hover:text-gray-800"
                    >
                        <MessageSquare size={16} className="mr-1" />
                        Envoyer un message
                    </button>
                    <button
                        onClick={handleActivites}
                        className="flex items-center text-gray-600 hover:text-gray-800"
                    >
                        <Activity size={16} className="mr-1" />
                        Activités
                    </button>
                    <button
                        onClick={handleSuivre}
                        className="flex items-center text-gray-600 hover:text-gray-800"
                    >
                        <Eye size={16} className="mr-1" />
                        Suivre
                    </button>
                </div>
                <span className="text-sm text-gray-600">
                    Aujourd'hui - Housseme kouachi - Création d’un nouvel
                    enregistrement.
                </span>
            </div>
        </div>
    );
};

export default Costs;
