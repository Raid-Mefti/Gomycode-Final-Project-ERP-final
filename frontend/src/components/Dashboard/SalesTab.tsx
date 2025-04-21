import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const SalesTab: React.FC = () => {
    const salesData = {
        labels: [
            "SOTIPAPIER",
            "HEIDELBERG ALGE",
            "SARL SOCIETE MODERNE",
            "AMS-MB",
            "SARL LE PAON",
        ],
        datasets: [
            {
                label: "Montant (DZD)",
                data: [1400000, 600000, 400000, 200000, 100000],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    const unitsSoldData = {
        labels: [],
        datasets: [
            {
                label: "Unités vendues",
                data: [],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value: number) =>
                        `${(value / 1000).toFixed(0)}K`,
                },
            },
        },
    };

    const orders = [
        {
            id: 1,
            commande: "PO0007",
            acheteur: "3/25/2025",
            origine: "Nassime ali hadj",
            montant: "3,420,025 DZD",
        },
        {
            id: 2,
            commande: "PO0008",
            acheteur: "3/23/2025",
            origine: "Nassime ali hadj",
            montant: "3,420,025 DZD",
        },
        {
            id: 3,
            commande: "PO0009",
            acheteur: "3/23/2025",
            origine: "Nassime ali hadj",
            montant: "3,420,025 DZD",
        },
        {
            id: 4,
            commande: "PO0010",
            acheteur: "3/20/2025",
            origine: "Nassime ali hadj",
            montant: "3,420,025 DZD",
        },
        {
            id: 5,
            commande: "PO0011",
            acheteur: "3/24/2025",
            origine: "Nassime ali hadj",
            montant: "3,420,025 DZD",
        },
    ];

    const supplyByCountry = [
        {
            id: 1,
            fournisseur: "HEIDELBERG ALGE",
            montant: "2,897,700.00 DZD",
            pays: "Tunisie",
            commandes: 1,
        },
        {
            id: 2,
            fournisseur: "SARL SOCIETE MO",
            montant: "2,117,850.00 DZD",
            pays: "Algérie",
            commandes: 4,
        },
        {
            id: 3,
            fournisseur: "SOTIPAPIER",
            montant: "81,100.00 DZD",
            pays: "Algérie",
            commandes: 3,
        },
        {
            id: 4,
            fournisseur: "AMS-MB",
            montant: "20,559.30 DZD",
            pays: "Tunisie",
            commandes: 3,
        },
        {
            id: 5,
            fournisseur: "HEIDELBERG ALGE",
            montant: "16,190.00 DZD",
            pays: "Tunisie",
            commandes: 1,
        },
    ];

    return (
        <div>
            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        Achaté
                    </h3>
                    <p className="text-lg font-bold text-gray-800">
                        20,191K DZD
                    </p>
                    <p className="text-xs text-green-600">
                        +7.53% depuis la période précédente
                    </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        Commandes
                    </h3>
                    <p className="text-lg font-bold text-gray-800">9</p>
                    <p className="text-xs text-green-600">
                        +800% depuis la période précédente
                    </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        Commande moyenne
                    </h3>
                    <p className="text-lg font-bold text-gray-800">
                        2,243K DZD
                    </p>
                    <p className="text-xs text-red-600">
                        -88.05% depuis la période précédente
                    </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        Délai pour recevoir
                    </h3>
                    <p className="text-lg font-bold text-gray-800">0 jours</p>
                    <p className="text-xs text-gray-600">
                        0 période précédente
                    </p>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                        Meilleures ventes par chiffre d'affaires
                    </h3>
                    <div className="h-64">
                        <Bar data={salesData} options={options} />
                    </div>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                        Meilleures ventes par unités vendues
                    </h3>
                    <div className="h-64">
                        <Bar data={unitsSoldData} options={options} />
                    </div>
                </div>
            </div>

            {/* Tables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                        Meilleures commandes
                    </h3>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Commande
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Acheteur
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Origine
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Montant
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="border-b">
                                    <td className="p-2 text-sm text-gray-800">
                                        {order.commande}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {order.acheteur}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {order.origine}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {order.montant}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                        Approvisionnement par pays
                    </h3>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Fournisseur
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Montant
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Pays
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Commandes
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {supplyByCountry.map((item) => (
                                <tr key={item.id} className="border-b">
                                    <td className="p-2 text-sm text-gray-800">
                                        {item.fournisseur}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {item.montant}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {item.pays}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {item.commandes}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SalesTab;
