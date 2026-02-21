import { Filter } from "lucide-react";

export default function CategoryBar({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-8 flex items-center gap-4 overflow-x-auto animate-fade-up">
      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-300">
        <Filter size={16} /> <span className="text-sm font-medium">Filter:</span>
      </div>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
            selectedCategory === cat
              ? "bg-indigo-600 text-white hover:bg-indigo-500"
              : "bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
