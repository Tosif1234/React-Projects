import React from "react";

const StudentCard = ({ stu, onDelete, onToggle, onMark }) => {
  const isPresent = stu.status === "present";
  const isAbsent = stu.status === "absent";

  const borderColor = isPresent
    ? "border-emerald-500/70"
    : isAbsent
    ? "border-rose-500/70"
    : "border-slate-600/70";

  return (
    <li
      className={`w-full rounded-2xl bg-slate-900/70 ${borderColor} border px-6 py-5 shadow-lg`}
    >
      {/* Top row: name + badge */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-slate-50">
            {stu.name}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {stu.course || "Course: Not specified"}
          </p>
        </div>

        {stu.status !== "none" && (
          <span
            className={`px-4 py-1 rounded-full text-xs font-bold tracking-wide ${
              isPresent
                ? "bg-emerald-500 text-slate-900"
                : "bg-rose-500 text-slate-900"
            }`}
          >
            {stu.status.toUpperCase()}
          </span>
        )}
      </div>

      {/* Buttons row */}
      <div className="flex flex-wrap items-center gap-3 mt-5">
        <button
          onClick={() => onToggle(stu.id)}
          className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-xs md:text-sm font-semibold text-white shadow-sm"
        >
          {stu.showDetails ? "Hide Details" : "Show Details"}
        </button>

        {isPresent ? (
          <button
            onClick={() => onMark(stu.id, "absent")}
            className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-xs md:text-sm font-semibold text-slate-900 shadow-sm"
          >
            Mark Absent
          </button>
        ) : (
          <button
            onClick={() => onMark(stu.id, "present")}
            className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-xs md:text-sm font-semibold text-slate-900 shadow-sm"
          >
            Mark Present
          </button>
        )}

        <button
          onClick={() => onDelete(stu.id)}
          className="ml-auto px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-xs md:text-sm font-semibold text-slate-100 shadow-sm"
        >
          Delete
        </button>
      </div>

      {/* Details */}
      {stu.showDetails && (
        <p className="mt-4 text-xs md:text-sm text-slate-300 border-t border-slate-700 pt-3">
          Attendance status:{" "}
          {stu.status === "none"
            ? "Not marked yet."
            : stu.status === "present"
            ? "Present in today’s session."
            : "Marked absent for today."}
        </p>
      )}
    </li>
  );
};

export default StudentCard;
