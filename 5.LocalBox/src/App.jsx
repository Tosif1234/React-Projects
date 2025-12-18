import { useState, useEffect } from 'react'
import './App.css'
import {LayoutDashboard} from 'lucide-react';
import RecordForm from './components/RecordForm'
import RecordList from './components/RecordList'
import DashboardStatus from './components/DashboardStatus';

const App = () => {
  // State initialization
  const [records, setRecords] = useState(() => {
    const saved = localStorage.getItem('localboxRecords');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [editingRecord, setEditingRecord] = useState(null);

  // LocalStorage Sync
  useEffect(() => {
    localStorage.setItem('localboxRecords', JSON.stringify(records));
  }, [records]);

  // Handlers
  const handleAdd = (newRecord) => {
    setRecords([newRecord, ...records]);
  };

  const handleUpdate = (updatedRecord) => {
    setRecords(records.map(record => record.id === updatedRecord.id ? updatedRecord : record));
    setEditingRecord(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
        setRecords(records.filter(record => record.id !== id));
        if (editingRecord && editingRecord.id === id) setEditingRecord(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans p-4 sm:p-8 text-gray-100">
      <header className="max-w-6xl mx-auto mb-8 border-b border-gray-800 pb-6 flex items-center gap-4">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-3 rounded-xl shadow-lg shadow-indigo-900/50">
          <LayoutDashboard className="text-white" size={32} />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">RecordFlow CRM</h1>
          <p className="text-gray-400 text-sm">Data Relationship & Directory Manager</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Form Section */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <RecordForm 
            onAdd={handleAdd}
            onUpdate={handleUpdate}
            editingRecord={editingRecord}
            onCancel={() => setEditingRecord(null)}
          />
        </div>

        {/* List Section */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <DashboardStatus records={records} />
          
          <RecordList 
            records={records} 
            onEdit={setEditingRecord} 
            onDelete={handleDelete}
            onClearAll={() => {
                if(window.confirm("Delete ALL records?")) {
                    setRecords([]);
                    setEditingRecord(null);
                }
            }}
          />
        </div>

      </main>
    </div>
  );
};

export default App
