import React from 'react'
import RecordRow from "./RecordRow"
import { Users,Trash2} from 'lucide-react';

const RecordList = ({ records, onEdit, onDelete, onClearAll }) => {
  if (records.length === 0) {
    return (
      <div className="bg-gray-800 rounded-xl p-12 text-center border border-gray-700 flex flex-col items-center justify-center min-h-[300px]">
        <div className="bg-gray-700/50 p-4 rounded-full mb-4">
            <Users className="text-gray-500" size={40} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">No Records Found</h3>
        <p className="text-gray-400 max-w-xs mx-auto">
            Your directory is empty. Add a new record to get started with the CRM.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-xl shadow-xl border border-gray-700 overflow-hidden flex flex-col">
      <div className="p-5 border-b border-gray-700 flex justify-between items-center bg-gray-850">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Users className="text-indigo-500" size={20} /> Record Directory
        </h3>
        <button
          onClick={onClearAll}
          className="text-xs font-medium text-red-400 hover:text-red-300 hover:bg-red-400/10 px-3 py-1.5 rounded transition-colors flex items-center gap-1"
        >
          <Trash2 size={14} /> Wipe Data
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-900/50 text-gray-400 text-xs uppercase tracking-wider border-b border-gray-700">
              <th className="p-4 font-semibold">Profile</th>
              <th className="p-4 font-semibold">Contact Details</th>
              <th className="p-4 font-semibold">Role</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <RecordRow
                key={record.id}
                record={record}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-3 bg-gray-900/50 border-t border-gray-700 text-xs text-gray-500 text-center">
        Total Records: {records.length}
      </div>
    </div>
  );
};

export default RecordList