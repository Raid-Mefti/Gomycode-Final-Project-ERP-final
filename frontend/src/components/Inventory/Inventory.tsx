import React from "react";
import { useNavigate } from "react-router-dom";

const Inventory: React.FC = () => {
    const navigate = useNavigate();

    const handleCardClick = (section: string) => {
        navigate(`/inventory/${section}`);
    };

    return (
        <div className="flex-1 flex flex-col p-4 bg-white overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Aperçu du stock
                </h2>
                <div className="flex space-x-2">
                    <input
                        type="text"
                        placeholder="rechercher..."
                        className="border border-gray-300 rounded-md p-2"
                    />
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        FILTRES
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                        Regrouper par
                    </button>
                </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div
                    className="p-4 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCardClick("receptions")}
                >
                    <h3 className="text-sm font-semibold text-gray-800">
                        Réceptions
                    </h3>
                    <p className="text-lg font-bold text-gray-800">
                        6 À TRAITER
                    </p>
                    <p className="text-sm text-gray-600">6 En retard</p>
                </div>
                <div
                    className="p-4 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCardClick("transfers")}
                >
                    <h3 className="text-sm font-semibold text-gray-800">
                        Transferts internes
                    </h3>
                    <p className="text-lg font-bold text-gray-800">
                        0 À TRAITER
                    </p>
                </div>
                <div
                    className="p-4 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCardClick("deliveries")}
                >
                    <h3 className="text-sm font-semibold text-gray-800">
                        Livraisons
                    </h3>
                    <p className="text-lg font-bold text-gray-800">
                        0 À TRAITER
                    </p>
                </div>
                <div
                    className="p-4 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCardClick("returns")}
                >
                    <h3 className="text-sm font-semibold text-gray-800">
                        Retours
                    </h3>
                    <p className="text-lg font-bold text-gray-800">
                        0 À TRAITER
                    </p>
                </div>
                <div
                    className="p-4 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCardClick("reservations")}
                >
                    <h3 className="text-sm font-semibold text-gray-800">
                        Réservation Stock
                    </h3>
                    <p className="text-lg font-bold text-red-600">
                        0 À TRAITER
                    </p>
                </div>
                <div
                    className="p-4 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCardClick("manufacturing")}
                >
                    <h3 className="text-sm font-semibold text-gray-800">
                        Fabrication
                    </h3>
                    <p className="text-lg font-bold text-gray-800">
                        0 À TRAITER
                    </p>
                </div>
                <div
                    className="p-4 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCardClick("finished-products")}
                >
                    <h3 className="text-sm font-semibold text-gray-800">
                        Stocker les produits finis
                    </h3>
                    <p className="text-lg font-bold text-gray-800">
                        0 À TRAITER
                    </p>
                </div>
                <div
                    className="p-4 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCardClick("cq-to-stock")}
                >
                    <h3 className="text-sm font-semibold text-gray-800">
                        MP. CQ. -&gt Stock
                    </h3>
                    <p className="text-lg font-bold text-gray-800">
                        0 À TRAITER
                    </p>
                </div>
                <div
                    className="p-4 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCardClick("receptions-to-cq")}
                >
                    <h3 className="text-sm font-semibold text-gray-800">
                        MP. Réceptions -&gt Contrôle Qualité
                    </h3>
                    <p className="text-lg font-bold text-gray-800">
                        7 En attente
                    </p>
                    <p className="text-sm text-gray-600">3 En retard</p>
                </div>
                <div
                    className="p-4 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCardClick("kim-receptions")}
                >
                    <h3 className="text-sm font-semibold text-gray-800">
                        KIM. Réceptions Divers
                    </h3>
                    <p className="text-lg font-bold text-gray-800">
                        6 En attente
                    </p>
                    <p className="text-sm text-gray-600">9 En retard</p>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
