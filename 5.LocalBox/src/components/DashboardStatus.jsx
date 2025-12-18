import React from 'react'
import { Users, Clock,Activity } from 'lucide-react';

const DashboardStatus = ({ records }) => {
  const activeCount = records.filter(c => c.status === 'Active').length;
  const lastAdded = records.length > 0 ? records[0].name : "None";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* Stat 1 */}
      <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Total Records</p>
          <p className="text-3xl font-extrabold text-white">{records.length}</p>
        </div>
        <div className="p-3 bg-indigo-900/20 text-indigo-400 rounded-lg">
          <Users size={28} />
        </div>
      </div>
      
      {/* Stat 2 */}
      <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Active Now</p>
          <p className="text-3xl font-extrabold text-white">{activeCount}</p>
        </div>
        <div className="p-3 bg-green-900/20 text-green-400 rounded-lg">
          <Activity size={28} />
        </div>
      </div>

      {/* Stat 3: Last Added (Replaced Administrator) */}
      <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 flex items-center justify-between">
        <div className="overflow-hidden">
          <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Last Added</p>
          <p className="text-xl font-extrabold text-white truncate" title={lastAdded}>{lastAdded}</p>
        </div>
        <div className="p-3 bg-purple-900/20 text-purple-400 rounded-lg shrink-0 ml-2">
          <Clock size={28} />
        </div>
      </div>
    </div>
  );
};

export default DashboardStatus