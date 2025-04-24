import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Define types for form data, including toggle states
interface PasswordFormValues {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
    showOldPassword: boolean;
    showNewPassword: boolean;
    showConfirmPassword: boolean;
}

const SetPassword: React.FC = () => {
    const initialValues: PasswordFormValues = {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
        showOldPassword: false,
        showNewPassword: false,
        showConfirmPassword: false,
    };

    // Define Yup validation schema
    const validationSchema = Yup.object({
        oldPassword: Yup.string().required("Required"),
        newPassword: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("newPassword")], "Passwords do not match")
            .required("Required"),
    });

    const handleSubmit = (
        values: PasswordFormValues,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        console.log("Password Data:", {
            oldPassword: values.oldPassword,
            newPassword: values.newPassword,
            confirmPassword: values.confirmPassword,
        });
        window.alert("Password set successfully!");
        setSubmitting(false);
    };

    return (
        <div className="flex h-screen">
            {/* Right Section */}
            <div className="min-w-full bg-gradient-to-br from-blue-950 to-blue-400 flex flex-col items-center justify-center">
                <div className="text-center mb-8">
                    <h3 className="text-3xl text-white font-semibold">
                        Set Your New Password
                    </h3>
                    <p className="text-lg text-cyan-400">
                        Ensure your password is strong and secure.
                    </p>
                </div>

                {/* New Password Form with Formik and Yup */}
                <div className="w-full max-w-md bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, values, setFieldValue }) => (
                            <Form>
                                
                                <div className="mb-4 relative">
                                    <Field
                                        type={
                                            values.showNewPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="newPassword"
                                        placeholder="New Password"
                                        className="w-full px-3 py-2 bg-white/20 border border-gray-300/30 rounded-md shadow-sm placeholder-gray-300 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setFieldValue(
                                                "showNewPassword",
                                                !values.showNewPassword
                                            )
                                        }
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-300 hover:text-white focus:outline-none"
                                    >
                                        {values.showNewPassword ? (
                                            <FaEyeSlash size={20} />
                                        ) : (
                                            <FaEye size={20} />
                                        )}
                                    </button>
                                    <ErrorMessage
                                        name="newPassword"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <Field
                                        type={
                                            values.showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        className="w-full px-3 py-2 bg-white/20 border border-gray-300/30 rounded-md shadow-sm placeholder-gray-300 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setFieldValue(
                                                "showConfirmPassword",
                                                !values.showConfirmPassword
                                            )
                                        }
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-300 hover:text-white focus:outline-none"
                                    >
                                        {values.showConfirmPassword ? (
                                            <FaEyeSlash size={20} />
                                        ) : (
                                            <FaEye size={20} />
                                        )}
                                    </button>
                                    <ErrorMessage
                                        name="confirmPassword"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="cursor-pointer w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 disabled:opacity-50 transition duration-300"
                                >
                                    Save Password
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default SetPassword;
