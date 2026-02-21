export default function StatusBar({ loading, count }) {
  return (
    <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-2xl bg-white/90 text-slate-900 border border-slate-200 dark:bg-slate-900/90 dark:text-slate-100 dark:border-slate-700 rounded-2xl p-4 flex items-center justify-between shadow-lg shadow-slate-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-up">
      <div className="flex items-center gap-3">
        <div
          className={`w-2 h-2 rounded-full animate-pulse ${
            loading ? "bg-yellow-500" : "bg-green-500"
          }`}
        ></div>
        <span className="text-xs font-bold uppercase">
          {loading ? "API Loading..." : "Server Live"}
        </span>
      </div>

      <div className="text-xs font-bold uppercase">{count} Results</div>
    </footer>
  );
}
