import React, { useState } from 'react';

const EmployeesList: React.FC = () => {
  const [department, setDepartment] = useState('Tous');

  return (
    <div className="space-y-6">
      <div className="tabs mb-4">
        <button
          className={`tab tab-bordered ${department === 'Tous' ? 'tab-active' : ''}`}
          onClick={() => setDepartment('Tous')}
        >
          Tous <span className="badge badge-info ml-2">1</span>
        </button>
        <button
          className={`tab tab-bordered ${department === 'Administrateur' ? 'tab-active' : ''}`}
          onClick={() => setDepartment('Administrateur')}
        >
          Administrateur
        </button>
      </div>

      <div className="card bg-white shadow-md border border-gray-200 rounded-lg p-6">
        <p className="text-gray-500">Aucun employé trouvé.</p>
      </div>
    </div>
  );
};

export default EmployeesList;