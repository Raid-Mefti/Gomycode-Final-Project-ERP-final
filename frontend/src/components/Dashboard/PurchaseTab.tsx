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

const PurchaseTab: React.FC = () => {
    const purchaseData = {
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

    const priceRequests = [
        { id: 1, demandeOuvert: "3/11/2016", acheteur: "Nassime ali hadj" },
    ];

    const topCountries = [
        {
            id: 1,
            fournisseur: "WILFRIED HEINZEL AG",
            totalHorsTaxes: "",
            pays: "Tunisie",
        },
        { id: 2, fournisseur: "Tunisie", totalHorsTaxes: "", pays: "Tunisie" },
        { id: 3, fournisseur: "Autres", totalHorsTaxes: "", pays: "Autres" },
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
            <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    Montant acheté
                </h3>
                <div className="h-64">
                    <Bar data={purchaseData} options={options} />
                </div>
            </div>

            {/* Tables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                        Meilleures demandes de prix
                    </h3>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Demande d’Ouvert
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Acheteur
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {priceRequests.map((request) => (
                                <tr key={request.id} className="border-b">
                                    <td className="p-2 text-sm text-gray-800">
                                        {request.demandeOuvert}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {request.acheteur}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                        Meilleures pays
                    </h3>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Fournisseur
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Total hors taxes
                                </th>
                                <th className="p-2 text-left text-sm font-semibold text-gray-800">
                                    Pays
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {topCountries.map((country) => (
                                <tr key={country.id} className="border-b">
                                    <td className="p-2 text-sm text-gray-800">
                                        {country.fournisseur}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {country.totalHorsTaxes}
                                    </td>
                                    <td className="p-2 text-sm text-gray-800">
                                        {country.pays}
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

export default PurchaseTab;
