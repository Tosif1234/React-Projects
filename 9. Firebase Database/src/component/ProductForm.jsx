import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../store/inventorySlice';
import { PackagePlus, Save, X } from 'lucide-react';

const ProductForm = ({ editingProduct, setEditingProduct }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', category: '', quantity: '', price: '' });

  useEffect(() => {
    if (editingProduct) setFormData(editingProduct);
    else setFormData({ name: '', category: '', quantity: '', price: '' });
  }, [editingProduct]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { ...formData, quantity: Number(formData.quantity), price: Number(formData.price) };
    if (editingProduct) {
      dispatch(updateProduct(productData));
      setEditingProduct(null);
    } else {
      dispatch(addProduct(productData));
    }
    setFormData({ name: '', category: '', quantity: '', price: '' });
  };

  const isEditing = !!editingProduct;

  return (
    <div className="relative rounded-2xl p-7 overflow-hidden border border-white/[0.07] backdrop-blur-xl"
      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)' }}>

      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${isEditing ? 'from-transparent via-[#a78bfa88] to-transparent' : 'from-transparent via-[#00d4aa88] to-transparent'}`} />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-[10px] flex items-center justify-center border ${isEditing ? 'bg-[rgba(124,58,237,0.15)] border-[rgba(124,58,237,0.35)]' : 'bg-[rgba(0,212,170,0.12)] border-[rgba(0,212,170,0.3)]'}`}>
            {isEditing ? <Save size={15} color="#a78bfa" /> : <PackagePlus size={15} color="#00d4aa" />}
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/30 mb-0.5">
              {isEditing ? 'Editing record' : 'New entry'}
            </p>
            <h2 className="text-[15px] font-bold tracking-tight text-white/90">
              {isEditing ? 'Update Product' : 'Add Product'}
            </h2>
          </div>
        </div>
        {isEditing && (
          <button
            onClick={() => setEditingProduct(null)}
            className="w-7 h-7 rounded-lg border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-200"
          >
            <X size={13} />
          </button>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-[10px] font-semibold tracking-[0.09em] uppercase text-white/30 mb-2">
            Product Name
          </label>
          <input
            required type="text" name="name" value={formData.name} onChange={handleChange}
            placeholder="e.g. Wireless Mouse"
            className="w-full px-3.5 py-2.5 rounded-[10px] border border-white/[0.08] bg-white/[0.04] text-[14px] font-medium text-white/80 placeholder:text-white/20 outline-none focus:border-[rgba(0,212,170,0.45)] focus:bg-white/[0.06] transition-all duration-200"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-[10px] font-semibold tracking-[0.09em] uppercase text-white/30 mb-2">
            Category
          </label>
          <input
            required type="text" name="category" value={formData.category} onChange={handleChange}
            placeholder="e.g. Electronics"
            className="w-full px-3.5 py-2.5 rounded-[10px] border border-white/[0.08] bg-white/[0.04] text-[14px] font-medium text-white/80 placeholder:text-white/20 outline-none focus:border-[rgba(0,212,170,0.45)] focus:bg-white/[0.06] transition-all duration-200"
          />
        </div>

        {/* Qty + Price */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] font-semibold tracking-[0.09em] uppercase text-white/30 mb-2">
              Stock Qty
            </label>
            <input
              required type="number" min="0" name="quantity" value={formData.quantity} onChange={handleChange}
              placeholder="0"
              className="w-full px-3.5 py-2.5 rounded-[10px] border border-white/[0.08] bg-white/[0.04] text-[14px] font-medium text-white/80 placeholder:text-white/20 outline-none focus:border-[rgba(0,212,170,0.45)] focus:bg-white/[0.06] transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-[10px] font-semibold tracking-[0.09em] uppercase text-white/30 mb-2">
              Price (₹)
            </label>
            <input
              required type="number" min="0" step="0.01" name="price" value={formData.price} onChange={handleChange}
              placeholder="0.00"
              className="w-full px-3.5 py-2.5 rounded-[10px] border border-white/[0.08] bg-white/[0.04] text-[14px] font-medium text-white/80 placeholder:text-white/20 outline-none focus:border-[rgba(0,212,170,0.45)] focus:bg-white/[0.06] transition-all duration-200"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-1 py-2.5 rounded-[10px] text-[14px] font-bold tracking-wide text-white transition-all duration-200 active:scale-[0.98] hover:opacity-85"
          style={{ background: isEditing ? 'linear-gradient(135deg, #7c3aed, #a855f7)' : 'linear-gradient(135deg, #00b894, #00d4aa)' }}
        >
          {isEditing ? 'Update Product' : '+ Add to Inventory'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;