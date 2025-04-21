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

const ProductTab: React.FC = () => {
    const salesByRevenueData = {
        labels: [],
        datasets: [
            {
                label: "Chiffre d'affaires (DZD)",
                data: [],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    const salesByUnitsData = {
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

    return (
        <div>
            {/* No Metrics (Empty Placeholders) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        Meilleure vente vendu
                    </h3>
                    <p className="text-lg font-bold text-gray-800">-</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-800">
                        Meilleure catégorie vendu
                    </h3>
                    <p className="text-lg font-bold text-gray-800">-</p>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                        Meilleures ventes par chiffre d'affaires
                    </h3>
                    <div className="h-64">
                        <Bar data={salesByRevenueData} options={options} />
                    </div>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                        Meilleures ventes par unités vendues
                    </h3>
                    <div className="h-64">
                        <Bar data={salesByUnitsData} options={options} />
                    </div>
                </div>
            </div>

            {/* Empty Placeholders for Tables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                        Meilleures pays
                    </h3>
                    <p className="text-sm text-gray-600">
                        Aucune donnée disponible
                    </p>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                        Meilleures catégories
                    </h3>
                    <p className="text-sm text-gray-600">
                        Aucune donnée disponible
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductTab;
