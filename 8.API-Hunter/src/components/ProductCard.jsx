import { Star, ChevronRight } from "lucide-react";

export default function ProductCard({ product, onClick, index = 0 }) {
  return (
    <div
      className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 animate-fade-up"
      style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
      onClick={() => onClick(product)}
    >
      <div className="relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800 mb-4 h-56 flex items-center justify-center p-6 transition-colors duration-300">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100 px-2 py-1 rounded-full text-xs font-bold transition-transform duration-300 group-hover:scale-105">
          <Star size={12} className="text-yellow-500 fill-yellow-500" />
          {product.rating.rate}
        </div>
      </div>

      <p className="text-[10px] uppercase font-bold text-indigo-500 mb-1">
        {product.category}
      </p>

      <h3 className="font-bold text-slate-900 dark:text-slate-100 line-clamp-2 min-h-[3rem]">{product.title}</h3>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xl font-black text-slate-900 dark:text-slate-100">${product.price}</span>
        <button className="p-2 bg-slate-900 text-white rounded-lg transition-all duration-300 group-hover:bg-indigo-600 group-hover:translate-x-1">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
