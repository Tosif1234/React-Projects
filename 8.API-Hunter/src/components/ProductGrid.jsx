import ProductCard from "./ProductCard";

export default function ProductGrid({ products = [], loading, onSelect }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-4 animate-pulse border border-slate-200 dark:border-slate-700">
            <div className="w-full h-48 bg-slate-200 dark:bg-slate-700 rounded-xl mb-4"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  return ( 
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
      {products.map((p, idx) => (
        <ProductCard key={p.id} product={p} onClick={onSelect} index={idx} />
      ))}
    </div>
  );
}
