import { Search, ShoppingBag, Moon, Sun } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode, searchTerm, setSearchTerm }) {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-4 transition-colors duration-300 animate-fade-in">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-600 rounded-lg text-white transition-transform duration-300 hover:scale-105">
              <ShoppingBag size={24} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-indigo-900 dark:text-indigo-400">VogueStore</h1>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="md:hidden p-2 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-100 transition-all duration-300 hover:scale-110 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-100 text-slate-900 placeholder:text-slate-400 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 rounded-full outline-none transition-all duration-300 focus:ring-2 focus:ring-indigo-500/50 focus:bg-white dark:focus:bg-slate-700"
            />
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden md:flex p-2 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-100 transition-all duration-300 hover:scale-110 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
