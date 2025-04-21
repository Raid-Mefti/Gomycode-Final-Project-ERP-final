import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

const NewEmployee: React.FC = () => {
    const [activeTab, setActiveTab] = useState("details");

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">
                Nom de l’employé
            </h1>
            <Formik
                initialValues={{
                    name: "",
                    tags: "",
                    location: "",
                    workAddress: "",
                    department: "",
                    position: "",
                    manager: "",
                    mobilePhone: "",
                    workPhone: "",
                    email: "",
                    schedule: "",
                    timezone: "",
                }}
                onSubmit={(values) => {
                    console.log("Form data", values);
                }}
            >
                <Form>
                    <div className="card bg-white shadow-md border border-gray-200 rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Left Section: Main Fields */}
                            <div className="col-span-2 space-y-4">
                                <div>
                                    <Field
                                        name="name"
                                        className="input input-bordered w-full text-lg font-semibold"
                                        placeholder="Nom de l’employé"
                                    />
                                </div>
                                <div>
                                    <label className="label text-gray-700">
                                        Étiquettes
                                    </label>
                                    <Field
                                        name="tags"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                {/* Informations professionnelles */}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                        Informations professionnelles
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="label text-gray-700">
                                                Lieu
                                            </label>
                                            <Field
                                                name="location"
                                                className="input input-bordered w-full"
                                                placeholder="Karim Imprimerie Moderne"
                                            />
                                        </div>
                                        <div>
                                            <label className="label text-gray-700">
                                                Adresse professionnelle
                                            </label>
                                            <Field
                                                name="workAddress"
                                                className="input input-bordered w-full"
                                                placeholder="36, Rue Fateh Khelkane Hydra, Alger"
                                            />
                                        </div>
                                        <div>
                                            <label className="label text-gray-700">
                                                Département
                                            </label>
                                            <Field
                                                name="department"
                                                className="input input-bordered w-full"
                                                placeholder="Poste"
                                            />
                                        </div>
                                        <div>
                                            <label className="label text-gray-700">
                                                Poste
                                            </label>
                                            <Field
                                                name="position"
                                                className="input input-bordered w-full"
                                            />
                                        </div>
                                        <div>
                                            <label className="label text-gray-700">
                                                Manager
                                            </label>
                                            <Field
                                                name="manager"
                                                className="input input-bordered w-full"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Informations privées */}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                        Informations privées
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="label text-gray-700">
                                                Téléphone portable
                                            </label>
                                            <Field
                                                name="mobilePhone"
                                                className="input input-bordered w-full"
                                            />
                                        </div>
                                        <div>
                                            <label className="label text-gray-700">
                                                Téléphone professionnel
                                            </label>
                                            <Field
                                                name="workPhone"
                                                className="input input-bordered w-full"
                                            />
                                        </div>
                                        <div>
                                            <label className="label text-gray-700">
                                                Adresse email
                                            </label>
                                            <Field
                                                name="email"
                                                className="input input-bordered w-full"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Paramètres RH */}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                        Paramètres RH
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="label text-gray-700">
                                                Horaire
                                            </label>
                                            <Field
                                                name="schedule"
                                                className="input input-bordered w-full"
                                                placeholder="2 Shift 8X8H"
                                            />
                                        </div>
                                        <div>
                                            <label className="label text-gray-700">
                                                Fuseau horaire
                                            </label>
                                            <Field
                                                name="timezone"
                                                className="input input-bordered w-full"
                                                placeholder="Africa/Tunis"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section: Organizational Chart */}
                            <div className="col-span-1">
                                <div className="card bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        Aucune position hiérarchique.
                                    </h3>
                                    <p className="text-gray-600">
                                        Cet employé n’a pas de responsable ni de
                                        subordonné. Afin d’obtenir un
                                        organigramme, ajoutez un responsable et
                                        enregistrez.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Buttons and Tabs */}
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                            <button
                                type="button"
                                className="btn btn-outline btn-sm"
                            >
                                Envoyer un message
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline btn-sm"
                            >
                                Enregistrer une note
                            </button>
                        </div>
                        <div className="tabs">
                            <button
                                type="button"
                                className={`tab tab-bordered ${
                                    activeTab === "details" ? "tab-active" : ""
                                }`}
                                onClick={() => setActiveTab("details")}
                            >
                                Activités
                            </button>
                            <button
                                type="button"
                                className={`tab tab-bordered ${
                                    activeTab === "follow" ? "tab-active" : ""
                                }`}
                                onClick={() => setActiveTab("follow")}
                            >
                                Suivre
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default NewEmployee;
