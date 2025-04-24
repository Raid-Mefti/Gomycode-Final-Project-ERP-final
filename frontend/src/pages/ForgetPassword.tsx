import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

// Define types for form data
interface ForgotPasswordFormValues {
    email: string;
}

const ForgotPassword: React.FC = () => {
    const initialValues: ForgotPasswordFormValues = {
        email: "",
    };

    // Define Yup validation schema
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
    });

    const handleSubmit = (
        values: ForgotPasswordFormValues,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        console.log("Forgot Password Data:", values);
        window.alert("Password reset link sent to your email!");
        setSubmitting(false);
    };

    return (
        <div className="flex h-screen">
            {/* Main Section */}
            <div className="min-w-full bg-gradient-to-br from-blue-950 to-blue-400 flex flex-col items-center justify-center">
                <div className="text-center mb-8">
                    <h3 className="text-3xl text-white font-semibold">
                        Forgot Your Password?
                    </h3>
                    <p className="text-lg text-white">
                        Enter your email to receive a password reset link.
                    </p>
                </div>

                {/* Forgot Password Form with Formik and Yup */}
                <div className="w-full max-w-md bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="mb-4">
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="w-full px-3 py-2 bg-white/20 border border-gray-300/30 rounded-md shadow-sm placeholder-gray-300 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="cursor-pointer w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 disabled:opacity-50 transition duration-300"
                                >
                                    Send Reset Link
                                </button>
                                <div className="text-center mt-4">
                                    <Link
                                        to="/login"
                                        className="text-sm text-white hover:text-cyan-300 transition duration-300"
                                    >
                                        Back to Login
                                    </Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
