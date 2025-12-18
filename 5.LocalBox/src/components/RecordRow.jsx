import React from 'react'
import {Trash2, Edit, Mail, Phone, } from 'lucide-react';

const RecordRow = ({ record, onEdit, onDelete }) => {
  // Helper to get initials for avatar
  const getInitials = (name) => {
    return name && name.length > 0 ? name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'U';
  };

  return (
    <tr className="border-b border-gray-700 hover:bg-gray-750 transition-colors group">
      <td className="p-4">
        <div className="flex items-center gap-3">
          {/* Avatar Circle */}
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
            {getInitials(record.name)}
          </div>
          <div>
            <div className="text-white font-medium">{record.name}</div>
            <div className="text-xs text-gray-400 flex items-center gap-1">
               {record.company}
            </div>
          </div>
        </div>
      </td>
      <td className="p-4">
        <div className="flex flex-col text-sm">
          <span className="text-gray-300 flex items-center gap-1">
            <Mail size={12} className="text-gray-500" /> {record.email}
          </span>
          <span className="text-gray-400 flex items-center gap-1 mt-1">
            <Phone size={12} className="text-gray-500" /> {record.phone}
          </span>
        </div>
      </td>
      <td className="p-4">
        <span className={`px-2 py-1 rounded-md text-xs font-bold border ${
          record.role === 'Admin' ? 'bg-purple-900/40 text-purple-200 border-purple-800' :
          record.role === 'Manager' ? 'bg-blue-900/40 text-blue-200 border-blue-800' :
          'bg-gray-700/50 text-gray-300 border-gray-600'
        }`}>
          {record.role}
        </span>
      </td>
      <td className="p-4">
         <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium ${
            record.status === 'Active' ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
         }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${record.status === 'Active' ? 'bg-green-400' : 'bg-red-400'}`}></span>
            {record.status}
         </span>
      </td>
      <td className="p-4 flex gap-2 justify-end opacity-80 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onEdit(record)}
          className="p-2 bg-indigo-900/30 text-indigo-400 rounded hover:bg-indigo-900/50 border border-indigo-800/50"
          title="Edit Record"
        >
          <Edit size={16} />
        </button>
        <button
          onClick={() => onDelete(record.id)}
          className="p-2 bg-red-900/30 text-red-400 rounded hover:bg-red-900/50 border border-red-800/50"
          title="Delete Record"
        >
          <Trash2 size={16} />
        </button>
      </td>
    </tr>
  );
};

export default RecordRow