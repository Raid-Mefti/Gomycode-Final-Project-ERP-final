const MainContent: React.FC = () => {
    return (
        <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="p-4 bg-white shadow-sm flex justify-between items-center">
                <h1 className="text-xl font-semibold">Démarrer une réunion</h1>
                <button className="text-green-500 hover:underline">
                    Tout marquer comme lu
                </button>
            </div>

            {/* Inbox Area */}
            <div className="flex-1 flex items-center justify-center bg-gray-100">
                <div className="text-center text-gray-500">
                    <p>Félicitations, votre boîte de réception est vide</p>
                    <p className="text-sm mt-2">
                        Les nouveaux messages s'afficheront ici
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
