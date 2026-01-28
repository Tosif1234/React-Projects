import React, { useState } from "react";
import { addTask, toggleTask, deleteTask } from "./taskSlice";
import { useDispatch, useSelector } from "react-redux";

const Task = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTask({ id: Date.now(), text: task, completed: false }));
    setTask("");
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const progress = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-purple-100 to-blue-100 flex items-center justify-center p-6 font-sans">
      
      {/* GLASS CONTAINER */}
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/40 ring-1 ring-white/30">
        
        {/* HEADER */}
        <div className="p-8 pb-6">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-1">
            My Tasks
          </h1>
          
          {/* Progress Section */}
          <div className="flex justify-between items-end mb-8">
            <p className="text-gray-500 text-sm font-medium pl-1">
              Let's get things done.
            </p>
            <div className="text-right flex flex-col items-end">
                <span className="text-xs font-bold text-indigo-600 mb-1">
                    {Math.round(progress)}% Complete
                </span>
                <div className="w-24 h-1.5 bg-indigo-100 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
          </div>

          {/* --- NEW UPDATED FORM --- */}
          <form onSubmit={handleSubmit} className="relative group z-10">
            {/* 1. Subtle Glow Effect Behind Input */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-60 transition duration-500 blur-sm group-focus-within:opacity-100"></div>
            
            <div className="relative flex items-center bg-white rounded-2xl p-1.5 shadow-inner border border-indigo-50">
                {/* Icon inside input */}
                <div className="pl-3 text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </div>
                
                <input
                    type="text"
                    className="w-full bg-transparent px-3 py-3 text-gray-700 placeholder-gray-400 font-medium text-lg focus:outline-none"
                    placeholder="Type a new task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                {/* Gradient Button */}
                <button 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white p-3.5 rounded-xl shadow-lg hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>
          </form>
          {/* --- END FORM --- */}

        </div>

        {/* TASK LIST */}
        <div className="bg-indigo-50/30 p-6 pt-2 h-[400px] overflow-y-auto custom-scrollbar pb-5">
            {tasks.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                    <div className="text-5xl mb-4 grayscale opacity-50">📝</div>
                    <p className="text-gray-500 font-medium">Your list is clear.</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {tasks.map((item) => (
                        <div 
                            key={item.id} 
                            className={`group flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                                item.completed 
                                ? 'bg-gray-50/50 border-transparent opacity-60' 
                                : 'bg-white border-white shadow-sm hover:shadow-md hover:shadow-indigo-500/10 hover:-translate-y-0.5'
                            }`}
                        >
                            <div className="flex items-center gap-4 overflow-hidden">
                                <button 
                                    onClick={() => dispatch(toggleTask(item.id))}
                                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                        item.completed
                                        ? 'bg-gradient-to-r from-green-400 to-emerald-500 border-transparent shadow-sm'
                                        : 'border-indigo-200 hover:border-indigo-500'
                                    }`}
                                >
                                    {item.completed && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </button>
                                
                                <span className={`text-lg truncate transition-all duration-300 ${
                                    item.completed ? 'text-gray-400 line-through' : 'text-gray-800 font-medium'
                                }`}>
                                    {item.text}
                                </span>
                            </div>

                            <button 
                                onClick={() => dispatch(deleteTask(item.id))}
                                className="p-2 text-gray-400 hover:text-red-500 rounded-lg transition-all duration-200 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Task;