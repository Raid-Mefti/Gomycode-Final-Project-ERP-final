import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

// Schema de validation avec Yup
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Adresse email invalide")
        .required("Champ requis"),
    password: Yup.string().required("Champ requis"),
});

const LoginPage: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (values: any, { setSubmitting }: any) => {
        try {
            const role = await login(values.email, values.password);

            // Handle navigation based on role
            if (role === "RH") navigate("/employees");
            else if (role === "Marketing") navigate("/crm");
            else if (role === "Finances") navigate("/costs");
            else navigate("/dashboard"); // Default route for other roles
        } catch (error) {
            console.error("Login failed:", error);
            alert("Échec de la connexion");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-500">
            <div className="lg:w-1/2 p-10 flex flex-col justify-center bg-gradient-to-br from-blue-950 to-blue-900 text-white">
                <div className="mb-4 flex items-center">
                    <div className="w-8 h-8 rounded-full border-2 border-blue-400 flex items-center justify-center mr-2">
                        <span className="text-blue-400 font-bold">G</span>
                    </div>
                    <h1 className="text-2xl font-bold">GMC</h1>
                </div>
                <h2 className="text-4xl font-bold mb-6">
                    Hello there, welcome to GMC.
                </h2>
                <p className="text-lg mb-6">
                    marahba bik kho akhdem w askot lah ystrk.
                </p>
                <button className="cursor-pointer bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
                    dok nchofo wesh ndiro hna
                </button>
            </div>

            <div className="w-2/3 flex flex-col items-center justify-center p-12">
                <div className="mb-8 text-center">
                    <p className="text-white text-3xl">
                        dok nchofo wesh ndiro hna lhdlidol!
                    </p>
                </div>

                {/* Formulaire */}
                <div className="w-full max-w-md bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl">
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={LoginSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-white mb-1"
                                    >
                                        Email
                                    </label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="w-full px-3 py-2 bg-white/20 border border-gray-300/30 rounded-md shadow-sm placeholder-gray-300 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                        placeholder="you@example.com"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-400 text-xs mt-1"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between items-baseline">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-white mb-1"
                                        >
                                            Password
                                        </label>
                                        <a
                                            href="#"
                                            className="text-xs text-cyan-300 hover:text-cyan-100"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <Field
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="w-full px-3 py-2 bg-white/20 border border-gray-300/30 rounded-md shadow-sm placeholder-gray-300 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                        placeholder="********"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-red-400 text-xs mt-1"
                                    />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="cursor-pointer w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 disabled:opacity-50 transition duration-300"
                                    >
                                        {isSubmitting
                                            ? "Logging in..."
                                            : "Login"}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
