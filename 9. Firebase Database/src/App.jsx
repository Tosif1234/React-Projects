import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listenToInventory } from "./store/inventorySlice";
import ProductForm from "./component/ProductForm";
import ProductTable from "./component/ProductTable";
import {
  Boxes,
  TrendingUp,
  AlertTriangle,
  Activity,
  LayoutDashboard,
} from "lucide-react";

// tailwind.config.js → extend: { fontFamily: { syne: ['Syne', 'sans-serif'] } }
// index.html <head> → <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet">

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.inventory);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    dispatch(listenToInventory());
  }, [dispatch]);

  const totalItems = items.length;
  const totalValue = items.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );
  const lowStockItems = items.filter((item) => item.quantity <= 10).length;

  const stats = [
    { icon: Boxes, label: "Total Products", value: totalItems, accent: "teal" },
    {
      icon: TrendingUp,
      label: "Inventory Value",
      value: `₹${totalValue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`,
      accent: "purple",
    },
    {
      icon: AlertTriangle,
      label: "Low Stock Alerts",
      value: lowStockItems,
      accent: "red",
    },
  ];

  const accentMap = {
    teal: {
      border: "border-[#00d4aa33]",
      glow: "shadow-[0_0_40px_rgba(0,212,170,0.08)]",
      iconBg: "bg-[rgba(0,212,170,0.12)]",
      iconColor: "#00d4aa",
      line: "from-transparent via-[#00d4aa44] to-transparent",
    },
    purple: {
      border: "border-[#7c3aed33]",
      glow: "shadow-[0_0_40px_rgba(124,58,237,0.08)]",
      iconBg: "bg-[rgba(124,58,237,0.12)]",
      iconColor: "#a78bfa",
      line: "from-transparent via-[#a78bfa44] to-transparent",
    },
    red: {
      border: "border-[#ef444433]",
      glow: "shadow-[0_0_40px_rgba(239,68,68,0.08)]",
      iconBg: "bg-[rgba(239,68,68,0.10)]",
      iconColor: "#f87171",
      line: "from-transparent via-[#f8717144] to-transparent",
    },
  };

  return (
    <div className="min-h-screen bg-[#080810] font-syne text-white relative overflow-x-hidden">
      {/* Dot grid bg */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,170,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glows */}
      <div
        className="fixed -top-48 -left-48 w-[520px] h-[520px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed -bottom-48 -right-24 w-[440px] h-[440px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.06] backdrop-blur-xl bg-[rgba(8,8,16,0.85)]">
        <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-[9px] flex items-center justify-center shadow-[0_0_16px_rgba(0,212,170,0.35)]"
              style={{
                background: "linear-gradient(135deg, #00b894, #00d4aa)",
              }}
            >
              <LayoutDashboard size={15} color="#fff" />
            </div>
            <span className="text-[22px] font-bold tracking-tight text-white/90">
              Inventra
            </span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-widest bg-[rgba(0,212,170,0.1)] border border-[rgba(0,212,170,0.25)] text-[#00d4aa]">
              LIVE
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[7px] h-[7px] rounded-full animate-pulse bg-[#00d4aa] shadow-[0_0_8px_rgba(0,212,170,0.6)]" />
            <span className="text-[11px] text-white/30 tracking-[0.1em] font-medium">
              REALTIME SYNC
            </span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-[22px] font-bold tracking-tight text-white/90 mb-1">
            Inventory Dashboard
          </h1>
          <p className="text-[13px] text-white/30 font-medium">
            Track, manage and monitor your stock in real time
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map(({ icon: Icon, label, value, accent }, i) => {
            const a = accentMap[accent];
            return (
              <div
                key={i}
                className={`relative rounded-2xl p-5 overflow-hidden border backdrop-blur-xl ${a.border} ${a.glow}`}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                }}
              >
                {/* accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${a.line}`}
                />
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/30 mb-2">
                      {label}
                    </p>
                    <p className="text-[28px] font-bold tracking-tight leading-none text-white/90">
                      {value}
                    </p>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${a.border} ${a.iconBg}`}
                  >
                    <Icon size={18} color={a.iconColor} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ProductForm
              editingProduct={editingProduct}
              setEditingProduct={setEditingProduct}
            />
          </div>
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Activity size={13} className="text-white/25" />
              <h2 className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/25">
                Inventory Overview
              </h2>
              <div className="flex-1 h-px bg-white/[0.06]" />
              <span className="text-[11px] text-white/20 font-medium">
                {totalItems} items
              </span>
            </div>
            <ProductTable setEditingProduct={setEditingProduct} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
