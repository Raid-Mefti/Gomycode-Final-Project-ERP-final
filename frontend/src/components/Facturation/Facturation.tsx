import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const Facturation: React.FC = () => {
    // Data for Customer Invoices (Bar Chart)
    const customerInvoicesData = {
        labels: [
            "31 mars",
            "6 avr.",
            "Cette semaine",
            "14 - 20 avr.",
            "21 - 27 avr.",
            "Pas d.",
        ],
        datasets: [
            {
                label: "Factures clients",
                data: [0, 0, 0, 0, 0, 0], // No data in the screenshot
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    // Data for Vendor Invoices (Bar Chart)
    const vendorInvoicesData = {
        labels: [
            "31 mars",
            "6 avr.",
            "Cette semaine",
            "14 - 20 avr.",
            "21 - 27 avr.",
            "Pas d.",
        ],
        datasets: [
            {
                label: "Factures fournisseurs",
                data: [0, 0, 0, 0, 0, 0], // No data in the screenshot
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };

    // Data for Miscellaneous Operations (Line Chart)
    const miscOperationsData = {
        labels: [
            "31 mars",
            "6 avr.",
            "Cette semaine",
            "14 - 20 avr.",
            "21 - 27 avr.",
            "Pas d.",
        ],
        datasets: [
            {
                label: "Paiements entrants/sortants",
                data: [0, 0, 0, 0, 0, 0], // No data in the screenshot
                fill: false,
                borderColor: "rgba(54, 162, 235, 1)",
                tension: 0.1,
            },
        ],
    };

    const chartOptions = {
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

    return (
        <div className="flex-1 flex flex-col p-4 bg-white overflow-y-auto">
            {/* Factures clients */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Factures clients
                    </h2>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        NOUVELLE FACTURE
                    </button>
                </div>
                <div className="h-64">
                    <Bar data={customerInvoicesData} options={chartOptions} />
                </div>
            </div>

            {/* Factures fournisseurs */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Factures fournisseurs
                    </h2>
                    <div className="space-x-2">
                        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                            CHARGER
                        </button>
                        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                            CRÉER MANUELLEMENT
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 bg-gray-50 rounded-md">
                        <h3 className="text-sm font-semibold text-gray-800">
                            1 Factures à payer
                        </h3>
                        <p className="text-lg font-bold text-gray-800">
                            20,799,158.00 DA
                        </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-md">
                        <h3 className="text-sm font-semibold text-gray-800">
                            1 Factures fournisseurs en retard
                        </h3>
                        <p className="text-lg font-bold text-gray-800">
                            20,799,158.00 DA
                        </p>
                    </div>
                </div>
                <div className="h-64">
                    <Bar data={vendorInvoicesData} options={chartOptions} />
                </div>
            </div>

            {/* Opérations diverses */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Opérations diverses
                    </h2>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        NOUVELLE ÉCRITURE
                    </button>
                </div>
                <div className="mb-4">
                    <div className="p-4 bg-gray-50 rounded-md">
                        <h3 className="text-sm font-semibold text-gray-800">
                            Paiements entrants/sortants en suspend
                        </h3>
                        <p className="text-lg font-bold text-gray-800">
                            1,000.00 DA
                        </p>
                    </div>
                </div>
                <div className="h-64">
                    <Line data={miscOperationsData} options={chartOptions} />
                </div>
            </div>
        </div>
    );
};

export default Facturation;
