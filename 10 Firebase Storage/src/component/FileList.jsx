import React from 'react';
import { FileText, Image as ImageIcon, FileCode, File as FileIcon, Trash2, Download, Search } from 'lucide-react';

const KIND_CONFIG = {
  pdf:   { color: '#ef4444', icon: FileText, label: 'PDF' },
  img:   { color: '#10b981', icon: ImageIcon, label: 'Image' },
  doc:   { color: '#3b82f6', icon: FileCode, label: 'Doc' },
  other: { color: '#a1a1aa', icon: FileIcon, label: 'File' },
};

const getKind = (type = '', name = '') => {
  if (type.startsWith('image/')) return 'img';
  if (type.includes('pdf')) return 'pdf';
  if (type.includes('word') || type.includes('text') || type.includes('sheet') || type.includes('csv')) return 'doc';
  const ext = name.split('.').pop().toLowerCase();
  if (['jpg','jpeg','png','gif','webp','svg'].includes(ext)) return 'img';
  if (ext === 'pdf') return 'pdf';
  return 'other';
};

const FileCard = ({ file, onDelete, index }) => {
  const kind = getKind(file.type, file.name);
  const config = KIND_CONFIG[kind] || KIND_CONFIG.other;
  const Icon = config.icon;

  return (
    <div className="group relative flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 50}ms` }}>
      <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
        {kind === 'img' && file.fileContent ? (
          <img src={file.fileContent} alt={file.name} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Icon size={22} style={{ color: config.color }} />
            <span className="text-[8px] font-bold mt-1 uppercase tracking-widest opacity-60" style={{ color: config.color }}>{config.label}</span>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-semibold text-zinc-100 truncate tracking-tight group-hover:text-white transition-colors">{file.name}</h3>
        <p className="text-[12px] text-zinc-500 mt-1 font-medium">{file.size} • {new Date(file.uploadDate).toLocaleDateString()}</p>
      </div>
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <a href={file.fileContent || '#'} download={file.name} className="p-2.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700/50"><Download size={16} /></a>
        <button onClick={() => onDelete(file)} className="p-2.5 rounded-lg bg-zinc-800/50 text-zinc-500 hover:text-red-400 border border-zinc-700/50"><Trash2 size={16} /></button>
      </div>
    </div>
  );
};

const FileList = ({ items, onDelete }) => {
  if (items.length === 0) return (
    <div className="flex flex-col items-center justify-center py-20 rounded-3xl bg-zinc-900/20 border border-zinc-800/50 border-dashed">
      <Search size={32} className="text-zinc-700 mb-4" />
      <h5 className="text-zinc-200 font-bold text-lg">No files found</h5>
    </div>
  );

  return (
    <div className="flex flex-col gap-3">
      {items.map((file, i) => <FileCard key={file.id} file={file} onDelete={onDelete} index={i} />)}
    </div>
  );
};

export default FileList;