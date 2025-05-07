import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    isLoggedIn: boolean;
    userRole: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    userRole: null,
    login: async () => {},
    logout: () => {},
});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userRole, setUserRole] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedRole = localStorage.getItem("role");
        if (token && storedRole) {
            setIsLoggedIn(true);
            setUserRole(storedRole);
        }
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }

            const data = await response.json();
            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);
            setIsLoggedIn(true);
            setUserRole(data.role);

            if (data.role === "RH") navigate("/employees");
            else if (data.role === "Marketing") navigate("/crm");
            else if (data.role === "Finances") navigate("/costs");
        } catch (error) {
            console.error(error);
            throw new Error("Invalid credentials");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setIsLoggedIn(false);
        setUserRole(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
