import React from "react";
import { Link } from "react-router-dom";

const Unauthorized: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-2xl font-bold text-red-600 mb-4">
                    Access Denied
                </h1>
                <p className="text-gray-600 mb-6">
                    You don't have permission to access this page. Please
                    contact your administrator if you believe this is a mistake.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default Unauthorized;
