import React, { useState, useMemo } from 'react';
import { HardDrive, Filter, Search, CheckCircle2, AlertCircle } from 'lucide-react';
import UploadFile from '../component/UploadFile';
import FileList from '../component/FileList';

const Toast = ({ message, type, visible }) => (
  <div className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3 rounded-xl border shadow-2xl transition-all duration-300 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'} ${type === 'success' ? 'bg-zinc-900 border-emerald-500/30 text-emerald-400' : 'bg-zinc-900 border-red-500/30 text-red-400'}`}>
    {type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
    <span className="text-sm font-medium tracking-tight font-sans">{message}</span>
  </div>
);

const Dashboard = () => {
  const [files, setFiles] = useState([
    { id: '1', name: 'User_Agreement.pdf', type: 'application/pdf', size: '1.2 MB', uploadDate: '2024-03-15T10:00:00Z' },
    { id: '2', name: 'Profile_Photo.jpg', type: 'image/jpeg', size: '840 KB', uploadDate: '2024-03-20T14:30:00Z' },
  ]);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState({ visible: false, message: '', type: '' });

  const showToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast(p => ({ ...p, visible: false })), 3000);
  };

  const filteredFiles = useMemo(() => {
    return files
      .filter(f => filter === 'all' || f.type.includes(filter)) // Simple filter logic
      .filter(f => f.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [files, filter, searchQuery]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-400 p-6 md:p-12 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Syne:wght@800&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-blue-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-3"><HardDrive size={14} /> Cloud Storage</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white font-syne tracking-tight">Doc<span className="text-blue-500">Vault</span></h1>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
            <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="bg-zinc-900/50 border border-zinc-800 text-zinc-200 text-sm py-2.5 pl-10 pr-4 rounded-xl focus:border-blue-500/50 outline-none w-full md:w-64" />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section className="lg:col-span-5">
            <UploadFile onUpload={(f) => { setFiles([f, ...files]); showToast('Uploaded!'); }} />
            <div className="mt-8 p-6 rounded-3xl bg-zinc-900/20 border border-zinc-800/50">
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2"><Filter size={14} /> Filters</h4>
              <div className="grid grid-cols-2 gap-2">
                {['all', 'image', 'pdf'].map(f => (
                  <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2.5 rounded-xl text-xs font-bold capitalize border ${filter === f ? 'bg-blue-500 border-blue-400 text-white' : 'bg-zinc-900/50 border-zinc-800 text-zinc-400'}`}>{f}</button>
                ))}
              </div>
            </div>
          </section>

          <section className="lg:col-span-7">
            <FileList items={filteredFiles} onDelete={(f) => { setFiles(files.filter(x => x.id !== f.id)); showToast('Deleted', 'error'); }} />
          </section>
        </div>
      </div>
      <Toast {...toast} />
    </div>
  );
};

export default Dashboard;