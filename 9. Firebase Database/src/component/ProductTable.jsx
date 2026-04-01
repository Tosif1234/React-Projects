import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../store/inventorySlice';
import { Pencil, Trash2, AlertCircle, Package } from 'lucide-react';

const LOW_STOCK_THRESHOLD = 10;

// Auto color-code categories
const catColors = [
  'bg-[rgba(0,212,170,0.10)] border-[rgba(0,212,170,0.25)] text-[#00d4aa]',
  'bg-[rgba(124,58,237,0.10)] border-[rgba(124,58,237,0.25)] text-[#a78bfa]',
  'bg-[rgba(251,191,36,0.10)] border-[rgba(251,191,36,0.25)] text-[#fbbf24]',
  'bg-[rgba(248,113,113,0.10)] border-[rgba(248,113,113,0.25)] text-[#f87171]',
  'bg-[rgba(52,211,153,0.10)] border-[rgba(52,211,153,0.25)] text-[#34d399]',
  'bg-[rgba(251,146,60,0.10)] border-[rgba(251,146,60,0.25)] text-[#fb923c]',
];

const categoryColorCache = {};
let colorIndex = 0;
const getCatColor = (cat) => {
  const key = cat?.toLowerCase() || 'default';
  if (!categoryColorCache[key]) categoryColorCache[key] = catColors[colorIndex++ % catColors.length];
  return categoryColorCache[key];
};

const ProductTable = ({ setEditingProduct }) => {
  const { items, loading } = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  if (loading) return (
    <div className="text-center py-16 text-white/30 text-[13px] font-medium tracking-wide">
      Loading inventory...
    </div>
  );

  return (
    <div className="rounded-2xl border border-white/[0.07] overflow-hidden backdrop-blur-xl"
      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)' }}>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/[0.06]" style={{ background: 'rgba(255,255,255,0.02)' }}>
              {['Product', 'Category', 'Price', 'Stock', ''].map((h, i) => (
                <th key={i} className={`px-4 py-3.5 text-[10px] font-semibold tracking-[0.1em] uppercase text-white/25 ${i === 4 ? 'text-right' : ''}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-16 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/[0.07] bg-white/[0.03]">
                      <Package size={22} className="text-white/20" />
                    </div>
                    <p className="text-[13px] text-white/25 font-medium">No products in inventory</p>
                  </div>
                </td>
              </tr>
            ) : (
              items.map((product, idx) => {
                const isLow = product.quantity <= LOW_STOCK_THRESHOLD;
                const catClass = getCatColor(product.category);
                return (
                  <tr
                    key={product.id}
                    className="border-b border-white/[0.04] hover:bg-white/[0.025] transition-colors duration-150 group"
                  >
                    {/* Product */}
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg border border-white/[0.07] bg-white/[0.05] flex items-center justify-center text-[12px] font-bold text-white/40 flex-shrink-0">
                          {product.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-[14px] font-semibold text-white/80">{product.name}</span>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-4 py-3.5">
                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border ${catClass}`}>
                        {product.category}
                      </span>
                    </td>

                    {/* Price */}
                    <td className="px-4 py-3.5 text-[14px] font-medium text-white/60 tabular-nums">
                      ₹{product.price.toFixed(2)}
                    </td>

                    {/* Stock */}
                    <td className="px-4 py-3.5">
                      {isLow ? (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/25 text-red-400">
                          <AlertCircle size={10} />
                          {product.quantity} Low
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[rgba(0,212,170,0.08)] border border-[rgba(0,212,170,0.2)] text-[#00d4aa]">
                          {product.quantity}
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3.5">
                      <div className="flex justify-end gap-1.5">
                        <button
                          onClick={() => setEditingProduct(product)}
                          className="w-8 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center text-white/25 hover:text-[#a78bfa] hover:bg-[rgba(124,58,237,0.15)] hover:border-[rgba(124,58,237,0.3)] transition-all duration-200"
                        >
                          <Pencil size={13} />
                        </button>
                        <button
                          onClick={() => dispatch(deleteProduct(product.id))}
                          className="w-8 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center text-white/25 hover:text-red-400 hover:bg-red-500/15 hover:border-red-500/30 transition-all duration-200"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;