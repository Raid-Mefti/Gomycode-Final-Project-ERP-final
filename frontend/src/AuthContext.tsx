import React, {
    createContext,
    useState,
    useEffect,
    ReactNode,
    useContext,
} from "react";

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

// Custom hook to use the auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userRole, setUserRole] = useState<string | null>(null);

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

            // Instead of using navigate directly, we'll return the role
            // The component using this can handle the navigation
            return data.role;
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
