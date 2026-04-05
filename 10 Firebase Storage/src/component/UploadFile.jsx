import React, { useState, useRef } from 'react';
import { Upload, Plus, X } from 'lucide-react';

const UploadFile = ({ onUpload, loading }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef();

  const handleFileSelect = (e) => {
    const f = e.target.files[0];
    if (f) setFile(f);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    });
  };

  const handleUpload = async () => {
    if (!file) return;
    
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 30;
      if (p >= 95) {
        clearInterval(interval);
        setProgress(95);
      } else {
        setProgress(p);
      }
    }, 150);

    const base64Data = await convertToBase64(file);
    
    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      onUpload({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type,
        size: (file.size / 1024).toFixed(1) + ' KB',
        uploadDate: new Date().toISOString(),
        fileContent: base64Data
      });
      
      setTimeout(() => {
        setFile(null);
        setProgress(0);
      }, 600);
    }, 800);
  };

  return (
    <div 
      className={`relative group p-8 rounded-3xl border-2 border-dashed transition-all duration-500 ${
        isDragging ? 'border-blue-500 bg-blue-500/5 ring-4 ring-blue-500/10' : 'border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700'
      }`}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => { e.preventDefault(); setIsDragging(false); const f = e.dataTransfer.files[0]; if(f) setFile(f); }}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
          isDragging ? 'scale-110 bg-blue-500 text-white' : 'bg-zinc-800 text-zinc-400 group-hover:text-zinc-200'
        }`}>
          <Upload size={32} strokeWidth={1.5} />
        </div>
        
        <h2 className="text-xl font-bold text-zinc-100 mb-2 font-syne tracking-tight">Drop files here</h2>
        <p className="text-sm text-zinc-500 mb-8 max-w-xs font-sans">Supports PDF, images, or docs up to <span className="text-zinc-300">10MB</span>.</p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => fileInputRef.current.click()}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-100 text-zinc-950 font-bold text-sm hover:bg-white active:scale-95 transition-all"
          >
            <Plus size={18} /> Choose File
          </button>
          <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" accept="image/*,application/pdf,.doc,.docx,.txt" />

          {file && (
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-blue-500 text-white font-bold text-sm animate-in zoom-in-95 shadow-lg shadow-blue-500/20">
              <span className="max-w-[140px] truncate">{file.name}</span>
              <button onClick={handleUpload} disabled={loading || progress > 0} className="ml-1 pl-3 border-l border-white/20 hover:text-zinc-200">
                {progress > 0 ? '...' : 'Upload'}
              </button>
              <button onClick={() => setFile(null)} className="hover:text-zinc-200"><X size={16} /></button>
            </div>
          )}
        </div>

        {progress > 0 && (
          <div className="w-full max-w-md mt-8 animate-in fade-in slide-in-from-top-2">
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadFile;