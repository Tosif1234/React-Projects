import React, { useState } from "react";

const ListRender = () => {
  const [search, setSearch] = useState("");

  const employees = [
    { id: 101, name: "Alice", role: "Developer" },
    { id: 102, name: "Bob", role: "Designer" },
    { id: 103, name: "Charlie", role: "Tester" },
    { id: 104, name: "Diana", role: "Developer" },
  ];

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-[100%] mx-auto mt-12 p-6 bg-[#1a2433] rounded-2xl shadow-lg text-gray-300">

      <h2 className="text-3xl font-bold text-indigo-300 text-center mb-6">
        List Rendering (`map`) & Filtering
      </h2>

      <input
        type="text"
        placeholder="Filter by Name or Role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg bg-transparent border-2 border-slate-600 text-gray-200 text-lg mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <div className="bg-[#0f172a] p-5 rounded-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-3 text-indigo-300 text-lg border-b border-slate-600">ID</th>
              <th className="py-3 text-indigo-300 text-lg border-b border-slate-600">Name</th>
              <th className="py-3 text-indigo-300 text-lg border-b border-slate-600">Role</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((emp) => (
              <tr key={emp.id} className="hover:bg-slate-800 transition">
                <td className="py-3 text-center border-b border-slate-700">{emp.id}</td>
                <td className="py-3 text-center border-b border-slate-700 font-bold">{emp.name}</td>
                <td
                  className={`py-3 text-center border-b border-slate-700 font-bold ${
                    emp.role === "Developer"
                      ? "text-emerald-400"
                      : emp.role === "Designer"
                      ? "text-amber-300"
                      : "text-orange-400"
                  }`}
                >
                  {emp.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ListRender;
