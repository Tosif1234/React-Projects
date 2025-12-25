import { useEffect, useState } from "react";
import {Save, Edit, Plus, X, Mail, Phone, Building, UserCheck, User,} from "lucide-react";

const RecordForm = ({ onAdd, onUpdate, editingRecord, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "User",
    status: "Active",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingRecord) {
      setFormData(editingRecord);
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        role: "User",
        status: "Active",
      });
    }
    setError("");
  }, [editingRecord]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Name and Email are required.");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (editingRecord) {
      onUpdate({ ...formData, id: editingRecord.id });
    } else {
      onAdd({ ...formData, id: Date.now() });
    }

    if (!editingRecord) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        role: "User",
        status: "Active",
      });
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 h-fit sticky top-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          {editingRecord ? (
            <Edit className="text-yellow-500" />
          ) : (
            <Plus className="text-indigo-500" />
          )}
          {editingRecord ? "Edit Record" : "Add New Record"}
        </h2>
        {editingRecord && (
          <button
            onClick={onCancel}
            className="text-xs text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded transition-colors"
          >
            Cancel
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded flex items-center gap-2">
            <X size={16} /> {error}
          </div>
        )}

        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase">
            Full Name
          </label>
          <div className="relative">
            <User size={16} className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Sarah Connor"
              className="w-full bg-gray-900/50 border border-gray-600 text-white rounded-lg pl-10 p-2.5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase">
              Email
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-3 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="sarah@mail.com"
                className="w-full bg-gray-900/50 border border-gray-600 text-white rounded-lg pl-10 p-2.5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase">
              Phone
            </label>
            <div className="relative">
              <Phone
                size={16}
                className="absolute left-3 top-3 text-gray-500"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 555-0199"
                className="w-full bg-gray-900/50 border border-gray-600 text-white rounded-lg pl-10 p-2.5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-sm"
              />
            </div>
          </div>
        </div>

        {/* Company */}
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase">
            Company / Dept
          </label>
          <div className="relative">
            <Building
              size={16}
              className="absolute left-3 top-3 text-gray-500"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Cyberdyne Systems"
              className="w-full bg-gray-900/50 border border-gray-600 text-white rounded-lg pl-10 p-2.5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Role and Status */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-gray-900/50 border border-gray-600 text-white rounded-lg p-2.5 focus:border-indigo-500 outline-none"
            >
              <option value="User">User</option>
              <option value="Manager">Manager</option>
              <option value="Admin">Admin</option>
              <option value="Developer">Developer</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-gray-900/50 border border-gray-600 text-white rounded-lg p-2.5 focus:border-indigo-500 outline-none"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="On Leave">On Leave</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className={`w-full py-3 rounded-lg font-bold text-white shadow-lg transition-all transform active:scale-[0.98] flex justify-center items-center gap-2 mt-2 ${
            editingRecord
              ? "bg-yellow-600 hover:bg-yellow-500 shadow-yellow-900/20"
              : "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-900/20"
          }`}
        >
          {editingRecord ? <Save size={18} /> : <UserCheck size={18} />}
          {editingRecord ? "Update Record" : "Create Record"}
        </button>
      </form>
    </div>
  );
};

export default RecordForm;
////,a,;s;as;a