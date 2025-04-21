import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, MessageSquare, Activity, Eye } from "lucide-react";

const NewMeeting: React.FC = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        sujet: "Audit interne N1 - Exercice 2025",
        heureDebut: "2025-04-14T00:00", // Adjusted format for datetime-local
        heureFin: "2025-04-17T00:00", // Adjusted format for datetime-local
        touteJournee: false,
        organisateur: "Housseme kouachi",
        description: "Audit interne",
        lieu: "El Achour",
        urlVideo: "",
        recurrent: false,
        confidentialite: "Public",
        montrerComme: "Occupé(e)",
        rappels: "Lieu",
    });

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({ ...prev, [name]: checked }));
    };

    const handleEnregistrer = () => {
        alert("Enregistrer clicked!");
        // Add logic to save the meeting
        navigate("/calendar"); // Navigate to calendar view after saving
    };

    const handleEnvoyerMessage = () => {
        alert("Envoyer un message clicked!");
        // Add logic to send a message
    };

    const handleEnregistrerNote = () => {
        alert("Enregistrer une note clicked!");
        // Add logic to save a note
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
                    Réunions (7 - 13 avr. 2025) / Nouveau
                </h2>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => navigate("/calendar")}
                        className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                        aria-label="Retour au calendrier"
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

            {/* Form Section */}
            <div className="bg-gray-50 p-4 rounded-md shadow-sm mb-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label
                            htmlFor="sujet"
                            className="block text-sm text-gray-600 mb-1"
                        >
                            Sujet de la réunion
                        </label>
                        <input
                            id="sujet"
                            type="text"
                            name="sujet"
                            value={formData.sujet}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">
                            Housseme kouachi
                        </span>
                        <button className="text-purple-600 hover:underline">
                            EMAIL
                        </button>
                        <button className="text-gray-600 hover:underline">
                            SMS
                        </button>
                    </div>
                    <div className="col-span-2">
                        <ul className="flex space-x-4 border-b border-gray-200 mb-4">
                            <li className="text-sm text-gray-600 border-b-2 border-blue-500 pb-2">
                                Détails de la réunion
                            </li>
                            <li className="text-sm text-gray-600 pb-2">
                                Options
                            </li>
                        </ul>
                    </div>
                    <div>
                        <label
                            htmlFor="heureDebut"
                            className="block text-sm text-gray-600 mb-1"
                        >
                            Heure de début *
                        </label>
                        <input
                            id="heureDebut"
                            type="datetime-local"
                            name="heureDebut"
                            value={formData.heureDebut}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="rappels"
                            className="block text-sm text-gray-600 mb-1"
                        >
                            Rappels ? *
                        </label>
                        <select
                            id="rappels"
                            name="rappels"
                            value={formData.rappels}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Lieu">Lieu</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="heureFin"
                            className="block text-sm text-gray-600 mb-1"
                        >
                            Se terminant à *
                        </label>
                        <input
                            id="heureFin"
                            type="datetime-local"
                            name="heureFin"
                            value={formData.heureFin}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="lieu"
                            className="block text-sm text-gray-600 mb-1"
                        >
                            Lieu
                        </label>
                        <input
                            id="lieu"
                            type="text"
                            name="lieu"
                            value={formData.lieu}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="flex items-center text-sm text-gray-600 mb-1">
                            <input
                                type="checkbox"
                                name="touteJournee"
                                checked={formData.touteJournee}
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            Toute la journée
                        </label>
                    </div>
                    <div>
                        <label
                            htmlFor="urlVideo"
                            className="block text-sm text-gray-600 mb-1"
                        >
                            URL de l’appel vidéo
                        </label>
                        <input
                            id="urlVideo"
                            type="text"
                            name="urlVideo"
                            value={formData.urlVideo}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="text-purple-600 hover:underline text-sm mt-1">
                            Ajouter une réunion Odoo
                        </button>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Organisateur
                        </label>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">
                                Housseme kouachi
                            </span>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="etiquettes"
                            className="block text-sm text-gray-600 mb-1"
                        >
                            Étiquettes
                        </label>
                        <input
                            id="etiquettes"
                            type="text"
                            name="etiquettes"
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm text-gray-600 mb-1"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={3}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="flex items-center text-sm text-gray-600 mb-1">
                                <input
                                    type="checkbox"
                                    name="recurrent"
                                    checked={formData.recurrent}
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                />
                                Récurrent
                            </label>
                        </div>
                        <div>
                            <label
                                htmlFor="confidentialite"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Confidentialité *
                            </label>
                            <select
                                id="confidentialite"
                                name="confidentialite"
                                value={formData.confidentialite}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="Public">Public</option>
                                <option value="Privé">Privé</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="montrerComme"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Montrer comme *
                            </label>
                            <select
                                id="montrerComme"
                                name="montrerComme"
                                value={formData.montrerComme}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="Occupé(e)">Occupé(e)</option>
                                <option value="Libre">Libre</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                    <button
                        onClick={handleEnregistrer}
                        className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                        aria-label="Enregistrer la réunion"
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
                        onClick={handleEnregistrerNote}
                        className="bg-gray-500 text-white px-4 py-1 rounded-md text-sm hover:bg-gray-600"
                        aria-label="Enregistrer une note"
                    >
                        Enregistrer une note
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
                    Aujourd'hui - Housseme kouachi - Création d’un nouvel
                    enregistrement.
                </span>
            </div>
        </div>
    );
};

export default NewMeeting;
