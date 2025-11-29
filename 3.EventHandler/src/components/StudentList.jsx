import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students, onDelete, onToggle, onMark }) => {
  return (
    <>
      <h2 className="text-xl md:text-2xl font-semibold text-indigo-300 mb-4">
        Student List
      </h2>

      {students.length === 0 && (
        <p className="text-sm md:text-base text-slate-300/80">
          No students added yet. Start by adding a student from the left panel.
        </p>
      )}

      <ul className="space-y-4 mt-2">
        {students.map((stu) => (
          <StudentCard
            key={stu.id}
            stu={stu}
            onDelete={onDelete}
            onToggle={onToggle}
            onMark={onMark}
          />
        ))}
      </ul>
    </>
  );
};

export default StudentList;
