import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  // Add Student
  const addStudent = (name, course) => {
    setStudents([
      ...students,
      {
        id: Date.now(),
        name,
        course,
        status: "none",       // "present" | "absent" | "none"
        showDetails: false,
      },
    ]);
  };

  // Delete
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // Toggle details
  const toggleDetails = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, showDetails: !s.showDetails } : s
      )
    );
  };

  // Mark attendance
  const updateStatus = (id, status) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, status } : s
      )
    );
  };

  const total = students.length;
  const present = students.filter((s) => s.status === "present").length;
  const absent = students.filter((s) => s.status === "absent").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">

        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            Student Activity Manager
          </h1>
          <p className="text-sm md:text-base text-teal-300/90">
            Track student records while practicing{" "}
            <span className="font-semibold">
              Events, State, Props & Conditional Rendering
            </span>
          </p>
        </header>

        {/* Stats row */}
        <section className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm px-6 py-5 shadow-lg">
            <p className="text-sm text-slate-300">Total Records</p>
            <p className="mt-2 text-3xl font-bold text-indigo-300">{total}</p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-emerald-500/40 backdrop-blur-sm px-6 py-5 shadow-lg">
            <p className="text-sm text-slate-300">Present</p>
            <p className="mt-2 text-3xl font-bold text-emerald-400">
              {present}
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-rose-500/40 backdrop-blur-sm px-6 py-5 shadow-lg">
            <p className="text-sm text-slate-300">Absent</p>
            <p className="mt-2 text-3xl font-bold text-rose-400">{absent}</p>
          </div>
        </section>

        {/* Form + List */}
        <main className="grid gap-8 lg:grid-cols-[1.1fr,1.2fr] items-start">
          <section className="rounded-3xl bg-white/5 border border-white/10 shadow-xl px-6 py-6 md:px-8 md:py-7">
            <StudentForm onAdd={addStudent} />
          </section>

          <section className="rounded-3xl bg-white/5 border border-white/10 shadow-xl px-6 py-6 md:px-8 md:py-7">
            <StudentList
              students={students}
              onDelete={deleteStudent}
              onToggle={toggleDetails}
              onMark={updateStatus}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
