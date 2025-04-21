import React from "react";
import { Link } from "react-router-dom";

const ERP2: React.FC = () => {
    return (
        <div className="flex-1 flex flex-col p-4 bg-white">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Coûts logistiques / ERP2
                </h2>
                <Link
                    to="/costs"
                    className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
                >
                    Retour
                </Link>
            </div>
            <div className="flex-1 flex justify-center items-center">
                {/* Placeholder for ERP2 image */}
                <div className="text-center">
                    <img
                        src="https://via.placeholder.com/400x300?text=ERP2+Image"
                        alt="ERP2"
                        className="mb-4"
                    />
                    <p className="text-gray-600">
                        This is a placeholder for the ERP2 image. Replace the
                        src with your actual ERP image.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ERP2;
