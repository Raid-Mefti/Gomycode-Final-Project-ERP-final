import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
    allowedRoles = [],
}) => {
    const { isLoggedIn, userRole } = useAuth();
    const location = useLocation();

    if (!isLoggedIn) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (
        allowedRoles.length > 0 &&
        userRole &&
        !allowedRoles.includes(userRole)
    ) {
        // Redirect to unauthorized page if user doesn't have required role
        return <Navigate to="/unauthorized" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
