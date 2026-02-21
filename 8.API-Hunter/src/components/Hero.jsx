export default function Hero() {
  return (
    <header className="max-w-7xl mx-auto px-4 py-8 animate-fade-up">
      <div className="bg-indigo-900 dark:bg-indigo-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-lg">
          <span className="inline-block px-3 py-1 bg-indigo-500/30 rounded-full text-xs font-semibold mb-4">
            Global Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Elite Goods, Darkly Refined.
          </h2>
          <p className="text-indigo-100 text-lg">
            Experience a seamless shopping interface with real-time API integration.
          </p>
        </div>
      </div>
    </header>
  );
}
