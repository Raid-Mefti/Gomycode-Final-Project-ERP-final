import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Activity, Eye } from "lucide-react";

const ContactDetails: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const contact = {
        id: parseInt(id || "0"),
        name: "AC GRAPHIC",
        type: "Société",
        isCustomer: true,
        isSupplier: false,
        address: {
            street1: "Rue 2",
            street2: "",
            city: "Wilaya",
            country: "Algérie",
            postalCode: "",
        },
        phone: "",
        mobile: "",
        fax: "",
        email: "",
        website: "par ex: https://www.odoo.com",
        vat: "0.00",
        turnover: 0.0,
        turnoverElsewhere: 0.0,
        tags: ["Encres"],
        note: 7,
    };

    const [formData, setFormData] = useState(contact);

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
        navigate("/contacts");
    };

    const handleEnvoyerMessage = () => {
        alert("Envoyer un message clicked!");
    };

    const handleActivites = () => {
        alert("Activités clicked!");
    };

    const handleSuivre = () => {
        alert("Suivre clicked!");
    };

    return (
        <div className="flex-1 flex flex-col p-4 bg-white overflow-y-auto">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Contacts / {formData.name}
                </h2>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => navigate("/contacts")}
                        className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                        aria-label="Retour à la liste des contacts"
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

            {/* Action Buttons and Stats */}
            <div className="flex space-x-2 mb-4">
                <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm">
                    Particulier
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
                    Société
                </button>
                <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm">
                    Réunion
                </button>
                <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm">
                    Opportunités
                </button>
                <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm">
                    Ventes
                </button>
                <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm">
                    Achats
                </button>
                <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm">
                    Taux de Dé...
                </button>
                <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm">
                    Facturé
                </button>
                <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm">
                    Factures four...
                </button>
            </div>

            {/* Contact Details */}
            <div className="flex space-x-4">
                <div className="flex-1 bg-gray-50 p-4 rounded-md shadow-sm mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Nom
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex space-x-2">
                            <label className="flex items-center text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    name="isCustomer"
                                    checked={formData.isCustomer}
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                />
                                Client récupéré
                            </label>
                            <label className="flex items-center text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    name="isSupplier"
                                    checked={formData.isSupplier}
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                />
                                Client perdu
                            </label>
                        </div>
                        <div>
                            <label
                                htmlFor="street1"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Adresse
                            </label>
                            <input
                                id="street1"
                                type="text"
                                name="street1"
                                value={formData.address.street1}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            street1: e.target.value,
                                        },
                                    }))
                                }
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Téléphone
                            </label>
                            <input
                                id="phone"
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="street2"
                                value={formData.address.street2}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            street2: e.target.value,
                                        },
                                    }))
                                }
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="mobile"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Mobile
                            </label>
                            <input
                                id="mobile"
                                type="text"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="city"
                                value={formData.address.city}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            city: e.target.value,
                                        },
                                    }))
                                }
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="fax"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Fax
                            </label>
                            <input
                                id="fax"
                                type="text"
                                name="fax"
                                value={formData.fax}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="country"
                                value={formData.address.country}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            country: e.target.value,
                                        },
                                    }))
                                }
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="postalCode"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Code postal
                            </label>
                            <input
                                id="postalCode"
                                type="text"
                                name="postalCode"
                                value={formData.address.postalCode}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            postalCode: e.target.value,
                                        },
                                    }))
                                }
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="website"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Site web
                            </label>
                            <input
                                id="website"
                                type="text"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="vat"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Chiffre d'affaire
                            </label>
                            <input
                                id="vat"
                                type="text"
                                name="vat"
                                value={formData.vat}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="tags"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Étiquettes
                            </label>
                            <input
                                id="tags"
                                type="text"
                                name="tags"
                                value={formData.tags.join(", ")}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        tags: e.target.value.split(", "),
                                    }))
                                }
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="turnover"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Volume
                            </label>
                            <input
                                id="turnover"
                                type="number"
                                name="turnover"
                                value={formData.turnover}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="note"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Note ?
                            </label>
                            <div className="flex items-center">
                                {[...Array(10)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`text-xl ${
                                            i < formData.note
                                                ? "text-yellow-500"
                                                : "text-gray-300"
                                        }`}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="turnoverElsewhere"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Chiffre d'affaire ailleurs
                            </label>
                            <input
                                id="turnoverElsewhere"
                                type="number"
                                name="turnoverElsewhere"
                                value={formData.turnoverElsewhere}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex space-x-2 border-b border-gray-200 mb-4">
                        <button className="text-sm text-gray-600 pb-2 border-b-2 border-blue-500">
                            Contacts & Adresses
                        </button>
                        <button className="text-sm text-gray-600 pb-2">
                            Ventes & Achats
                        </button>
                        <button className="text-sm text-gray-600 pb-2">
                            Facturation
                        </button>
                        <button className="text-sm text-gray-600 pb-2">
                            Notes internes
                        </button>
                    </div>
                </div>

                {/* Image Upload Section */}
                <div className="w-40 flex flex-col items-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center mb-2">
                        <img
                            src="/icons/image-placeholder.png"
                            alt="Contact Image"
                            className="w-12 h-12"
                        />
                    </div>
                    <button className="text-blue-500 hover:underline text-sm">
                        Ajouter
                    </button>
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                    <button
                        onClick={handleEnregistrer}
                        className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                        aria-label="Enregistrer le contact"
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
                    Il n'y a aucun message dans cette conversation.
                </span>
            </div>
        </div>
    );
};

export default ContactDetails;
