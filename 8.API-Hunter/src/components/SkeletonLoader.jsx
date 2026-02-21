const SkeletonLoader = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
      <div key={i} className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 animate-pulse">
        <div className="w-full h-56 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-6"></div>
        <div className="h-5 bg-slate-100 dark:bg-slate-800 rounded-full w-3/4 mb-3"></div>
        <div className="h-5 bg-slate-100 dark:bg-slate-800 rounded-full w-1/2 mb-6"></div>
        <div className="flex justify-between items-center">
          <div className="h-8 bg-slate-100 dark:bg-slate-800 rounded-lg w-20"></div>
          <div className="h-8 bg-slate-100 dark:bg-slate-800 rounded-lg w-8"></div>
        </div>
      </div>
    ))}
  </div>
);