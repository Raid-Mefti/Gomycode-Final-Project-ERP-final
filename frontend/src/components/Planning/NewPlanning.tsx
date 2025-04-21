import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Activity, Eye } from "lucide-react";

const NewPlanning: React.FC = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        numeroDossier: "Nouveau",
        dateDebut: "2025-03-07T06:58:40",
        dateFin: "2025-03-11T09:59:59",
        pourcentage: 0,
    });

    const [dossiers, setDossiers] = useState([
        {
            id: 1,
            dossierTechnique: "D/25/02/000...",
            typeDossier: "Compact",
            etatDossier: "Nouvelle Ma...",
            designation: "Boxes Petit Lumex",
            quantite: 10000,
            client: "ABC DISTRIBU...",
            epaisseur: 2000,
            typePapier: "GD2 BLANC G...",
            grammagePapier: 230,
            etat: "Validé",
        },
        {
            id: 2,
            dossierTechnique: "D/25/02/000...",
            typeDossier: "Compact",
            etatDossier: "Nouvelle Ma...",
            designation: "Boxe XL",
            quantite: 5000,
            client: "ABC SERVICE...",
            epaisseur: 2000,
            typePapier: "GD2 BLANC G...",
            grammagePapier: 230,
            etat: "Validé",
        },
        {
            id: 3,
            dossierTechnique: "D/25/02/000...",
            typeDossier: "Contre Collage",
            etatDossier: "Nouvelle Ma...",
            designation: "Caisses Papier",
            quantite: 8000,
            client: "Yaya cosmetique...",
            epaisseur: 0,
            typePapier: "GD2 BLANC G...",
            grammagePapier: 230,
            etat: "Validé",
        },
    ]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDossierChange = (
        index: number,
        field: string,
        value: string
    ) => {
        const updatedDossiers = [...dossiers];
        updatedDossiers[index] = { ...updatedDossiers[index], [field]: value };
        setDossiers(updatedDossiers);
    };

    const handleValider = () => {
        alert("Valider clicked!");
        // Add logic to validate and save the form
        navigate("/planning");
    };

    const handleAnnuler = () => {
        alert("Annuler clicked!");
        // Reset form
        setFormData({
            numeroDossier: "Nouveau",
            dateDebut: "2025-03-07T06:58:40",
            dateFin: "2025-03-11T09:59:59",
            pourcentage: 0,
        });
        setDossiers([
            {
                id: 1,
                dossierTechnique: "",
                typeDossier: "",
                etatDossier: "",
                designation: "",
                quantite: 0,
                client: "",
                epaisseur: 0,
                typePapier: "",
                grammagePapier: 0,
                etat: "",
            },
        ]);
        navigate("/planning");
    };

    const handleBrouillon = () => {
        alert("Brouillon clicked!");
        // Add logic to save as draft
    };

    const handleAddRow = () => {
        setDossiers([
            ...dossiers,
            {
                id: dossiers.length + 1,
                dossierTechnique: "",
                typeDossier: "",
                etatDossier: "",
                designation: "",
                quantite: 0,
                client: "",
                epaisseur: 0,
                typePapier: "",
                grammagePapier: 0,
                etat: "",
            },
        ]);
    };

    const handleRemoveRow = (index: number) => {
        setDossiers(dossiers.filter((_, i) => i !== index));
    };

    const handleEnregistrer = () => {
        alert("Enregistrer clicked!");
        // Add logic to save the form
        navigate("/planning");
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

    return (
        <div className="flex-1 flex flex-col p-4 bg-white">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Planification / Nouveau
                </h2>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => navigate("/planning")}
                        className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                        aria-label="Retour à la liste de planification"
                    >
                        Retour
                    </button>
                    <button
                        className="flex items-center text-gray-600 hover:text-gray-800"
                        aria-label="Actions"
                    >
                        <span className="mr-1">Action</span>
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 mb-4">
                <button
                    onClick={handleValider}
                    className="bg-green-500 text-white px-4 py-1 rounded-md text-sm hover:bg-green-600"
                    aria-label="Valider le planning"
                >
                    Validation Initial
                </button>
                <button
                    onClick={handleAnnuler}
                    className="bg-red-500 text-white px-4 py-1 rounded-md text-sm hover:bg-red-600"
                    aria-label="Annuler le planning"
                >
                    Annuler
                </button>
                <button
                    onClick={handleBrouillon}
                    className="bg-gray-500 text-white px-4 py-1 rounded-md text-sm hover:bg-gray-600"
                    aria-label="Sauvegarder comme brouillon"
                >
                    Brouillon
                </button>
            </div>

            {/* Tabs */}
            <div className="flex space-x-2 mb-4 border-b border-gray-200">
                <button className="text-sm text-gray-600 pb-2 border-b-2 border-blue-500">
                    Vérification Stock
                </button>
                <button className="text-sm text-gray-600 pb-2">
                    Préparation Hors Machine
                </button>
                <button className="text-sm text-gray-600 pb-2">
                    Planification
                </button>
                <button className="text-sm text-gray-600 pb-2">Planifié</button>
                <button className="text-sm text-gray-600 pb-2">
                    Anticipation
                </button>
            </div>

            {/* Form Section */}
            <div className="bg-gray-50 p-4 rounded-md shadow-sm mb-4">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                        <label
                            htmlFor="numeroDossier"
                            className="block text-sm text-gray-600 mb-1"
                        >
                            N° Dossier
                        </label>
                        <input
                            id="numeroDossier"
                            type="text"
                            name="numeroDossier"
                            value={formData.numeroDossier}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="dateDebut"
                            className="block text-sm text-gray-600 mb-1"
                        >
                            Date Début
                        </label>
                        <input
                            id="dateDebut"
                            type="datetime-local"
                            name="dateDebut"
                            value={formData.dateDebut}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="dateFin"
                            className="block text-sm text-gray-600 mb-1"
                        >
                            Date Fin
                        </label>
                        <input
                            id="dateFin"
                            type="datetime-local"
                            name="dateFin"
                            value={formData.dateFin}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Dossiers Table */}
                <div className="mb-4">
                    <h4 className="text-sm text-gray-600 mb-2">
                        Dossiers Techniques
                    </h4>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200 text-sm text-gray-600">
                                    <th className="p-2 text-left">
                                        N° Dossier
                                    </th>
                                    <th className="p-2 text-left">
                                        Type de D...
                                    </th>
                                    <th className="p-2 text-left">
                                        État Dossier
                                    </th>
                                    <th className="p-2 text-left">
                                        Désignation
                                    </th>
                                    <th className="p-2 text-left">Quantité</th>
                                    <th className="p-2 text-left">Client</th>
                                    <th className="p-2 text-left">Épaisseur</th>
                                    <th className="p-2 text-left">
                                        Type de P...
                                    </th>
                                    <th className="p-2 text-left">
                                        Grammage Papier
                                    </th>
                                    <th className="p-2 text-left">
                                        État Dossier
                                    </th>
                                    <th className="p-2 text-left"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dossiers.map((dossier, index) => (
                                    <tr
                                        key={dossier.id}
                                        className="border-b border-gray-200"
                                    >
                                        <td className="p-2">
                                            <input
                                                type="text"
                                                value={dossier.dossierTechnique}
                                                onChange={(e) =>
                                                    handleDossierChange(
                                                        index,
                                                        "dossierTechnique",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </td>
                                        <td className="p-2">
                                            <input
                                                type="text"
                                                value={dossier.typeDossier}
                                                onChange={(e) =>
                                                    handleDossierChange(
                                                        index,
                                                        "typeDossier",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </td>
                                        <td className="p-2">
                                            <input
                                                type="text"
                                                value={dossier.etatDossier}
                                                onChange={(e) =>
                                                    handleDossierChange(
                                                        index,
                                                        "etatDossier",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </td>
                                        <td className="p-2">
                                            <input
                                                type="text"
                                                value={dossier.designation}
                                                onChange={(e) =>
                                                    handleDossierChange(
                                                        index,
                                                        "designation",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </td>
                                        <td className="p-2">
                                            <input
                                                type="number"
                                                value={dossier.quantite}
                                                onChange={(e) =>
                                                    handleDossierChange(
                                                        index,
                                                        "quantite",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </td>
                                        <td className="p-2">
                                            <input
                                                type="text"
                                                value={dossier.client}
                                                onChange={(e) =>
                                                    handleDossierChange(
                                                        index,
                                                        "client",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </td>
                                        <td className="p-2">
                                            <input
                                                type="number"
                                                value={dossier.epaisseur}
                                                onChange={(e) =>
                                                    handleDossierChange(
                                                        index,
                                                        "epaisseur",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </td>
                                        <td className="p-2">
                                            <input
                                                type="text"
                                                value={dossier.typePapier}
                                                onChange={(e) =>
                                                    handleDossierChange(
                                                        index,
                                                        "typePapier",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </td>
                                        <td className="p-2">
                                            <input
                                                type="number"
                                                value={dossier.grammagePapier}
                                                onChange={(e) =>
                                                    handleDossierChange(
                                                        index,
                                                        "grammagePapier",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </td>
                                        <td className="p-2">
                                            <input
                                                type="text"
                                                value={dossier.etat}
                                                onChange={(e) =>
                                                    handleDossierChange(
                                                        index,
                                                        "etat",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full p-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </td>
                                        <td className="p-2">
                                            <button
                                                onClick={() =>
                                                    handleRemoveRow(index)
                                                }
                                                className="text-red-500 hover:text-red-700"
                                                aria-label="Supprimer la ligne"
                                            >
                                                ✕
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button
                        onClick={handleAddRow}
                        className="text-blue-500 text-sm hover:underline mt-2"
                        aria-label="Ajouter une ligne"
                    >
                        Ajouter une ligne
                    </button>
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                    <button
                        onClick={handleEnregistrer}
                        className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                        aria-label="Enregistrer le planning"
                    >
                        Enregistrer
                    </button>
                    <button
                        onClick={handleEnvoyerMessage}
                        className="bg-gray-500 text-white px-4 py-1 rounded-md text-sm hover:bg-gray-600"
                        aria-label="Envoyer un message"
                    >
                        Envoyer un message
                    </button>
                    <button
                        onClick={handleActivites}
                        className="flex items-center text-gray-600 hover:text-gray-800"
                        aria-label="Voir les activités"
                    >
                        <Activity size={16} className="mr-1" />
                        Activités
                    </button>
                    <button
                        onClick={handleSuivre}
                        className="flex items-center text-gray-600 hover:text-gray-800"
                        aria-label="Suivre"
                    >
                        <Eye size={16} className="mr-1" />
                        Suivre
                    </button>
                </div>
                <span className="text-sm text-gray-600">
                    Aujourd'hui - Housseme kouachi - Fiche Exigence Product
                    Commerciale Créée
                </span>
            </div>
        </div>
    );
};

export default NewPlanning;
