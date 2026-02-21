import { useMemo, useState } from "react";
import useProducts from "../hooks/useProducts";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryBar from "../components/CategoryBar";
import ProductGrid from "../components/ProductGrid";
import ProductModal from "../components/ProductModal";
import StatusBar from "../components/StatusBar";

export default function Home() {
  const { products, loading, error } = useProducts();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  const categories = ["All", ...new Set(products.map((p) => p.category))];
      console.log("products", products);
console.log("filtered", filteredProducts);

  return (

    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-20 transition-colors duration-300">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <Hero />

        <CategoryBar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <main className="max-w-7xl mx-auto px-4 animate-fade-up">
          {error && <p className="text-red-500">API Error: {error}</p>}

          <ProductGrid
            products={filteredProducts}
            loading={loading}
            onSelect={setSelectedProduct}
          />
        </main>

        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />

        <StatusBar loading={loading} count={filteredProducts.length} />
      </div>
    </div>
    
  );
}
