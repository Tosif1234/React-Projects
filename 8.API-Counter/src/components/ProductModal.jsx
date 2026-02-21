import { X, Star } from "lucide-react";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl overflow-hidden flex flex-col md:flex-row border border-slate-200 dark:border-slate-700">
        <button
          className="absolute top-4 right-4 p-2 bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-100 rounded-full transition-colors duration-300 hover:bg-slate-100 dark:hover:bg-slate-700"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="md:w-1/2 bg-slate-50 dark:bg-slate-800 p-8 flex items-center justify-center">
          <img src={product.image} alt={product.title} className="max-h-[350px]" />
        </div>

        <div className="md:w-1/2 p-8 text-slate-900 dark:text-slate-100">
          <span className="text-sm font-bold text-indigo-600 uppercase">
            {product.category}
          </span>
          <h2 className="text-3xl font-black mt-2 mb-4 text-slate-900 dark:text-slate-100">{product.title}</h2>

          <div className="flex items-center gap-2 mb-4">
            <Star size={16} className="fill-yellow-500 text-yellow-500" />
            {product.rating.rate}
          </div>

          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{product.description}</p>

          <div className="flex items-center justify-between">
            <p className="text-4xl font-black text-slate-900 dark:text-slate-100">${product.price}</p>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl transition-colors duration-300 hover:bg-indigo-500">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
