import React, { useState } from "react";

const StudentForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Student name is required.");
      return;
    }

    onAdd(name.trim(), course.trim() || "Not specified");
    setName("");
    setCourse("");
    setError("");
  };

  return (
    <>
      <h2 className="text-xl md:text-2xl font-semibold text-indigo-300 mb-4">
        Add Student
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-slate-300 mb-1">
            Student Name
          </label>
          <input
            type="text"
            placeholder="Enter student name"
            className="w-full rounded-xl bg-slate-900/70 border border-slate-600 px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-1">
            Course / Program
          </label>
          <input
            type="text"
            placeholder="Enter course"
            className="w-full rounded-xl bg-slate-900/70 border border-slate-600 px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>

        {error && (
          <p className="text-sm text-rose-400 bg-rose-950/40 border border-rose-600/40 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full mt-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] transition-transform text-sm md:text-base font-semibold py-3 shadow-md"
        >
          Add Student
        </button>
      </form>
    </>
  );
};

export default StudentForm;
