import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    Outlet,
} from "react-router-dom";
import CostsLayout from "./layouts/CostsLayout";
import CalendarLayout from "./layouts/CalendarLayout";
import PlanningLayout from "./layouts/PlanningLayout";
import StockAnalysisLayout from "./layouts/StockAnalysisLayout";
import ContactsLayout from "./layouts/ContactsLayout";
import CRMLayout from "./layouts/CRMLayout";
import SalesLayout from "./layouts/SalesLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import FacturationLayout from "./layouts/FacturationLayout";
import PurchasesLayout from "./layouts/PurchasesLayout";
import InventoryLayout from "./layouts/InventoryLayout";
import FabricationLayout from "./layouts/FabricationLayout";
import EmployeesLayout from "./layouts/EmployeesLayout";
import Costs from "./components/Costs/Costs";
import ERP2 from "./components/Costs/CostsNew";
import Discussion from "./components/Discussion";
import StockAnalysisList from "./components/StockAnalysis/StockAnalysisList";
import ContactsList from "./components/Contacts/ContactsList";
import ContactDetails from "./components/Contacts/ContactDetails";
import CRMBoard from "./components/CRM/CRMBoard";
import SalesList from "./components/Sales/SalesList";
import NewQuote from "./components/Sales/NewQuote";
import Dashboard from "./components/Dashboard/Dashboard";
import SalesTab from "./components/Dashboard/SalesTab";
import ProductTab from "./components/Dashboard/ProductTab";
import PurchaseTab from "./components/Dashboard/PurchaseTab";
import VendorsTab from "./components/Dashboard/VendorsTab";
import InventoryTab from "./components/Dashboard/InventoryTab";
import InvoicingTab from "./components/Dashboard/InvoicingTab";
import Facturation from "./components/Facturation/Facturation";
import Purchases from "./components/Purchases/Purchases";
import NewPriceRequest from "./components/Purchases/NewPriceRequest";
import Inventory from "./components/Inventory/Inventory";
import InventoryReceptions from "./components/Inventory/InventoryReceptions";
import NewInventoryOperation from "./components/Inventory/NewInventoryOperation";
import FabricationOverview from "./components/Fabrication/FabricationOverview";
import NewFabricationOrder from "./components/Fabrication/NewFabricationOrder";
import EmployeesList from "./components/Employees/EmployeesList.tsx";
import NewEmployee from "./components/Employees/NewEmployee";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import CalendarView from "./components/Calendar/CalendarView";
import NewMeeting from "./components/Calendar/NewMeeting";
import PlanningList from "./components/Planning/PlanningLists";
import NewPlanning from "./components/Planning/NewPlanning";
import LoginPage from "./pages/Login";
import { AuthContext, AuthProvider } from "@/AuthContext.tsx";

// Placeholder component
const Placeholder: React.FC<{ title: string }> = ({ title }) => (
    <div className="flex-1 flex flex-col p-4 bg-white min-h-screen overflow-y-auto">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">
            This section is under development.
        </p>
    </div>
);

// ProtectedRoute component to handle authentication
const ProtectedRoute: React.FC = () => {
    const { isLoggedIn, userRole } = useContext(AuthContext);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    // Example role-based redirection (optional)
    // if (userRole === "RH") return <Navigate to="/employees" replace />;
    // else if (userRole === "Marketing") return <Navigate to="/crm" replace />;
    // else if (userRole === "Finances") return <Navigate to="/costs" replace />;

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Public Routes (Login) */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/LogIN" element={<LoginPage />} />

                    {/* Protected Routes */}
                    <Route element={<ProtectedRoute />}>
                        {/* Costs Layout */}
                        <Route element={<CostsLayout />}>
                            <Route path="/costs" element={<Costs />} />
                            <Route path="/costs/erp2" element={<ERP2 />} />
                        </Route>

                        {/* Calendar Layout */}
                        <Route element={<CalendarLayout />}>
                            <Route
                                path="/calendar"
                                element={<CalendarView />}
                            />
                            <Route
                                path="/calendar/new"
                                element={<NewMeeting />}
                            />
                        </Route>

                        {/* Planning Layout */}
                        <Route element={<PlanningLayout />}>
                            <Route
                                path="/planning"
                                element={<PlanningList />}
                            />
                            <Route
                                path="/planning/new"
                                element={<NewPlanning />}
                            />
                        </Route>

                        {/* Stock Analysis Layout */}
                        <Route element={<StockAnalysisLayout />}>
                            <Route
                                path="/stock-analysis"
                                element={<StockAnalysisList />}
                            />
                        </Route>

                        {/* Contacts Layout */}
                        <Route element={<ContactsLayout />}>
                            <Route
                                path="/contacts"
                                element={<ContactsList />}
                            />
                            <Route
                                path="/contacts/:id"
                                element={<ContactDetails />}
                            />
                            <Route
                                path="/contacts/new"
                                element={<ContactDetails />}
                            />
                        </Route>

                        {/* CRM Layout */}
                        <Route element={<CRMLayout />}>
                            <Route path="/crm" element={<CRMBoard />} />
                        </Route>

                        {/* Sales Layout */}
                        <Route element={<SalesLayout />}>
                            <Route path="/sales" element={<SalesList />} />
                            <Route path="/sales/new" element={<NewQuote />} />
                        </Route>

                        {/* Dashboard Layout */}
                        <Route element={<DashboardLayout />}>
                            <Route path="/dashboard" element={<Dashboard />}>
                                <Route path="sales" element={<SalesTab />} />
                                <Route
                                    path="product"
                                    element={<ProductTab />}
                                />
                                <Route
                                    path="invoicing"
                                    element={<InvoicingTab />}
                                />
                                <Route
                                    path="purchase"
                                    element={<PurchaseTab />}
                                />
                                <Route
                                    path="vendors"
                                    element={<VendorsTab />}
                                />
                                <Route
                                    path="inventory"
                                    element={<InventoryTab />}
                                />
                                <Route
                                    index
                                    element={<Navigate to="sales" />}
                                />
                            </Route>
                        </Route>

                        {/* Facturation Layout */}
                        <Route element={<FacturationLayout />}>
                            <Route
                                path="/facturation"
                                element={<Facturation />}
                            />
                        </Route>

                        {/* Purchases Layout */}
                        <Route element={<PurchasesLayout />}>
                            <Route path="/purchases" element={<Purchases />} />
                            <Route
                                path="/purchases/new"
                                element={<NewPriceRequest />}
                            />
                        </Route>

                        {/* Inventory Layout */}
                        <Route element={<InventoryLayout />}>
                            <Route path="/inventory" element={<Inventory />} />
                            <Route
                                path="/inventory/receptions"
                                element={<InventoryReceptions />}
                            />
                            <Route
                                path="/inventory/transfers"
                                element={<InventoryReceptions />}
                            />
                            <Route
                                path="/inventory/deliveries"
                                element={<InventoryReceptions />}
                            />
                            <Route
                                path="/inventory/returns"
                                element={<InventoryReceptions />}
                            />
                            <Route
                                path="/inventory/reservations"
                                element={<InventoryReceptions />}
                            />
                            <Route
                                path="/inventory/finished-products"
                                element={<InventoryReceptions />}
                            />
                            <Route
                                path="/inventory/cq-to-stock"
                                element={<InventoryReceptions />}
                            />
                            <Route
                                path="/inventory/receptions-to-cq"
                                element={<InventoryReceptions />}
                            />
                            <Route
                                path="/inventory/kim-receptions"
                                element={<InventoryReceptions />}
                            />
                            <Route
                                path="/inventory/new"
                                element={<NewInventoryOperation />}
                            />
                        </Route>

                        {/* Fabrication Layout */}
                        <Route element={<FabricationLayout />}>
                            <Route
                                path="/fabrication"
                                element={<FabricationOverview />}
                            />
                            <Route
                                path="/fabrication/new"
                                element={<NewFabricationOrder />}
                            />
                            <Route
                                path="/fabrication/operations"
                                element={<Placeholder title="Opérations" />}
                            />
                            <Route
                                path="/fabrication/products"
                                element={<Placeholder title="Produits" />}
                            />
                            <Route
                                path="/fabrication/analysis"
                                element={<Placeholder title="Analyse" />}
                            />
                        </Route>

                        {/* Employees Layout */}
                        <Route element={<EmployeesLayout />}>
                            <Route
                                path="/employees"
                                element={<EmployeesList />}
                            />
                            <Route
                                path="/employees/new"
                                element={<NewEmployee />}
                            />
                        </Route>

                        {/* Other Routes */}
                        <Route path="/discussion" element={<Discussion />} />
                        <Route
                            path="*"
                            element={<Navigate to="/discussion" />}
                        />
                    </Route>

                    {/* Fallback Route */}
                    <Route
                        path="*"
                        element={<Navigate to="/login" replace />}
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
