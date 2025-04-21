import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const InventoryReceptions: React.FC = () => {
    const navigate = useNavigate();
    const { section } = useParams<{ section: string }>();

    // Map section to display title
    const sectionTitles: { [key: string]: string } = {
        receptions: "KIM: Réceptions",
        transfers: "Transferts internes",
        deliveries: "Livraisons",
        returns: "Retours",
        reservations: "Réservation Stock",
        manufacturing: "Fabrication",
        "finished-products": "Stocker les produits finis",
        "cq-to-stock": "MP. CQ. -> Stock",
        "receptions-to-cq": "MP. Réceptions -> Contrôle Qualité",
        "kim-receptions": "KIM. Réceptions Divers",
    };

    // Map section to operation type for the dropdown
    const operationTypes: { [key: string]: string } = {
        receptions: "KIM. Réceptions",
        transfers: "Transferts internes",
        deliveries: "Livraisons",
        returns: "Retours",
        reservations: "Réservation Stock",
        manufacturing: "Fabrication",
        "finished-products": "Stocker les produits finis",
        "cq-to-stock": "MP. CQ. -> Stock",
        "receptions-to-cq": "MP. Réceptions -> Contrôle Qualité",
        "kim-receptions": "KIM. Réceptions Divers",
    };

    const title = sectionTitles[section || "receptions"] || "KIM: Réceptions";
    const operationType =
        operationTypes[section || "receptions"] || "KIM. Réceptions";

    const receptions = [
        {
            reference: "ST/IN/00008",
            from: "Partners/Vendors",
            type: "MP. Réception",
            contact: "WILFRIED HEINZEL AG",
            dueDate: "il y a 26 jours",
            sourceDoc: "PO0012",
            status: "Fait",
        },
        {
            reference: "ST/IN/00009",
            from: "Partners/Vendors",
            type: "MP. Réception",
            contact: "SARL SOCIETE MODERNE TRANSFO PAP",
            dueDate: "il y a 26 jours",
            sourceDoc: "PO0013",
            status: "Prêt",
        },
        {
            reference: "ST/IN/00010",
            from: "Partners/Vendors",
            type: "MP. Réception",
            contact: "HEIDELBERG ALGERIE",
            dueDate: "il y a 16 jours",
            sourceDoc: "PO0014",
            status: "Prêt",
        },
        {
            reference: "ST/IN/00011",
            from: "Partners/Vendors",
            type: "MP. Réception",
            contact: "SARL LE PAON",
            dueDate: "il y a 15 jours",
            sourceDoc: "PO0016",
            status: "Prêt",
        },
        {
            reference: "ST/IN/00012",
            from: "Partners/Vendors",
            type: "MP. Réception",
            contact: "SOTIPAPIER",
            dueDate: "il y a 14 jours",
            sourceDoc: "PO0015",
            status: "Prêt",
        },
        {
            reference: "ST/IN/00013",
            from: "Partners/Vendors",
            type: "MP. Réception",
            contact: "HEIDELBERG ALGERIE",
            dueDate: "il y a 14 jours",
            sourceDoc: "PO0017",
            status: "Annulé",
        },
        {
            reference: "ST/IN/00014",
            from: "Partners/Vendors",
            type: "MP. Réception",
            contact: "AMS-MB",
            dueDate: "il y a 12 jours",
            sourceDoc: "PO0018",
            status: "Prêt",
        },
    ];

    return (
        <div className="flex-1 flex flex-col p-4 bg-white overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {title}
                    </h2>
                    <select className="border border-gray-300 rounded-md p-2">
                        <option>Type d'opération: {operationType}</option>
                    </select>
                </div>
                <div className="flex space-x-2">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        onClick={() =>
                            navigate("/inventory/new", {
                                state: { from: section },
                            })
                        }
                    >
                        NOUVEAU
                    </button>
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

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                <input type="checkbox" />
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                Référence
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                De
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                Vers
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                Contact
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                Date prévue
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                Document d'origine
                            </th>
                            <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                Statut
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {receptions.map((reception, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-2">
                                    <input type="checkbox" />
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {reception.reference}
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {reception.from}
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {reception.type}
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {reception.contact}
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {reception.dueDate}
                                </td>
                                <td className="p-2 text-sm text-gray-800">
                                    {reception.sourceDoc}
                                </td>
                                <td className="p-2 text-sm">
                                    <span
                                        className={`px-2 py-1 rounded ${
                                            reception.status === "Fait"
                                                ? "bg-green-100 text-green-800"
                                                : reception.status === "Prêt"
                                                ? "bg-blue-100 text-blue-800"
                                                : "bg-red-100 text-red-800"
                                        }`}
                                    >
                                        {reception.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-600">1-8 / 8</p>
                <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                        Précédent
                    </button>
                    <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                        Suivant
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryReceptions;
