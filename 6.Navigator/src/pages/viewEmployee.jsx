import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2, Plus, UserCircle, Phone, Mail, IndianRupee, Search, Filter, ArrowUpDown } from "lucide-react";

const ViewEmployee = () => {

  const [employees, setEmployees] = useState(() => {
    const data = localStorage.getItem("UserData");
    return data ? JSON.parse(data) : [];
  });

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("UserData", JSON.stringify(employees));
  }, [employees]);

  const handleDelete = (eid) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      const updatedList = employees.filter((emp) => emp.eid !== eid);
      setEmployees(updatedList);
    }
  };

  const filteredEmp = employees
    .filter((emp) => {

      const searchTerm = search.toLowerCase();
      return (
        emp.name.toLowerCase().includes(searchTerm) ||
        emp.eid.toLowerCase().includes(searchTerm) ||
        emp.designation.toLowerCase().includes(searchTerm)
      );
    })
    .filter((emp) => (filter === "All" ? true : emp.status === filter)) // Status Filter
    .sort((a, b) => {
      // Sorting Logic
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      if (sort === "sal-low") return Number(a.salary) - Number(b.salary);
      if (sort === "sal-high") return Number(b.salary) - Number(a.salary);
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-25 pb-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Stats Container */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 p-6 md:p-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                <h1 className="text-3xl font-extrabold text-[#1e293b] tracking-tight">Team Directory</h1>
              </div>
              <p className="text-slate-500 font-medium ml-5">
                Total {filteredEmp.length} employees found
              </p>
            </div>

            <Link 
              to="/Add" 
              className="flex items-center justify-center gap-2 bg-[#4f46e5] hover:bg-[#4338ca] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 transition-all active:scale-95"
            >
              <Plus size={20} /> Onboard Employee
            </Link>
          </div>

          {/* Controls Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
            <div className="relative md:col-span-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search name, ID or position..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-transparent focus:border-indigo-500/30 rounded-2xl focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all font-medium"
              />
            </div>

            <div className="relative md:col-span-3">
              <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
              <select 
                value={sort} 
                onChange={(e) => setSort(e.target.value)}
                className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border-none rounded-2xl cursor-pointer outline-none font-bold text-slate-600 text-sm appearance-none"
              >
                <option value="">Sort by</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="sal-low">Salary: Low to High</option>
                <option value="sal-high">Salary: High to Low</option>
              </select>
            </div>

            <div className="relative md:col-span-3">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
              <select 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border-none rounded-2xl cursor-pointer outline-none font-bold text-slate-600 text-sm appearance-none"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Table */}
          {filteredEmp.length === 0 ? (
            <div className="py-20 text-center bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
              <UserCircle size={60} className="mx-auto text-slate-300 mb-4" />
              <h3 className="text-xl font-bold text-slate-500">No team members found</h3>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-slate-50">
              <table className="w-full text-left">
                <thead className="bg-slate-50/80">
                  <tr className="text-[#94a3b8]">
                    <th className="p-5 text-[11px] font-bold uppercase tracking-widest">Profile</th>
                    <th className="p-5 text-[11px] font-bold uppercase tracking-widest hidden md:table-cell">Contact</th>
                    <th className="p-5 text-[11px] font-bold uppercase tracking-widest hidden lg:table-cell">Position</th>
                    <th className="p-5 text-[11px] font-bold uppercase tracking-widest">Pay Grade</th>
                    <th className="p-5 text-[11px] font-bold uppercase tracking-widest text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredEmp.map((emp) => (
                    <tr key={emp.eid} className="hover:bg-slate-50/50 transition-all group">
                      <td className="p-5">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-white border shadow-sm">
                            {emp.image ? (
                              <img src={emp.image} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-200"><UserCircle size={24} /></div>
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-slate-800">{emp.name}</div>
                            <div className="text-[10px] font-bold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-md inline-block mt-1 uppercase tracking-wider">{emp.eid}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-5 hidden md:table-cell">
                        <div className="text-sm text-slate-600 font-medium flex items-center gap-2"><Mail size={14} className="text-slate-400" /> {emp.email}</div>
                        <div className="text-xs text-slate-400 flex items-center gap-2 mt-1"><Phone size={14} className="text-slate-300" /> {emp.phone}</div>
                      </td>
                      <td className="p-5 hidden lg:table-cell">
                        <div className="text-sm font-bold text-slate-700">{emp.designation}</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{emp.department}</div>
                      </td>
                      <td className="p-5">
                        <div className="flex items-center gap-1 font-bold text-slate-700">
                           <IndianRupee size={14} className="text-slate-400" />
                           {Number(emp.salary).toLocaleString('en-IN')}
                        </div>
                        <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-md ${emp.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}>
                          {emp.status}
                        </span>
                      </td>
                      <td className="p-5">
                        <div className="flex items-center justify-center gap-2">
  
                          <Link to={`/Update/${emp.eid}`} className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                            <Pencil size={18} />
                          </Link>
                          <button 
                            onClick={() => handleDelete(emp.eid)} 
                            className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;