import { useState, useEffect } from "react";
import productsData from "../data/products.json";
import FilterBar from "../components/FilterBar";
import ProductGrid from "../components/ProductGrid";
import { useNavigate } from "react-router-dom";
import "../assets/css/products-bs.css"; 

export default function Products({ addToCart }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [sort, setSort] = useState("recommended");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container py-4">
      <div className="text-center mb-4 page-title">
        <h2
          className="fw-bold"
          style={{ fontFamily: "Allura", fontSize: "48px", color: "#924d11" }}
        >
          Our Delicious Creations
        </h2>
        <p className="text-muted">Handpicked treats, baked fresh every day.</p>
      </div>

      <FilterBar
        categories={categories}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        sort={sort}
        setSort={setSort}
      />
      

      <ProductGrid
        products={products}
        activeFilter={activeFilter}
        sort={sort}
        onProductClick={handleProductClick}
      />
    </div>
  );
}