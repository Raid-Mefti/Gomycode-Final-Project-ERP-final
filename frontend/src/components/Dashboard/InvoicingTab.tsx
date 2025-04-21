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

const InvoicingTab: React.FC = () => {
    const monthlySalesData = {
        labels: [],
        datasets: [
            {
                label: "Ventes",
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

    const quotes = [
        {
            id: 1,
            devis: "S00012",
            client: "AB COLOR",
            vendeur: "Boucenna soflan",
            revenus: "20,000.00 DZD",
        },
    ];

    const purchaseOrders = [];

    return (
        <div>
            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        Devis
                    </h3>
                    <p className="text-lg font-bold text-gray-800">1</p>
                    <p className="text-xs text-gray-600">
                        +0% depuis la période précédente
                    </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        Commandes
                    </h3>
                    <p className="text-lg font-bold text-gray-800">0</p>
                    <p className="text-xs text-gray-600">
                        0% depuis la période précédente
                    </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        Revenus
                    </h3>
                    <p className="text-lg font-bold text-gray-800">0</p>
                    <p className="text-xs text-gray-600">
                        0% depuis la période précédente
                    </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        Commande moyenne
                    </h3>
                    <p className="text-lg font-bold text-gray-800">0</p>
                    <p className="text-xs text-gray-600">
                        0% depuis la période précédente
                    </p>
                </div>
            </div>

            {/* Charts */}
            <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    Ventes mensuelles
                </h3>
                <div className="h-64">
                    <Bar data={monthlySalesData} options={options} />
                </div>
            </div>

            {/* Tables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                        Meilleures devis
                    </h3>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Devis
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Client
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Vendeur
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Revenus
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {quotes.map((quote) => (
                                <tr key={quote.id} className="border-b">
                                    <td className="p-2 text-sm text-gray-800">
                                        {quote.devis}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {quote.client}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {quote.vendeur}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {quote.revenus}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                        Meilleures bons de commande
                    </h3>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Commande
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Client
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Vendeur
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Revenus
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchaseOrders.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={4}
                                        className="p-2 text-sm text-gray-600 text-center"
                                    >
                                        Aucune donnée disponible
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InvoicingTab;
