import React from "react";
const ProductCard = React.lazy(() => import("../components/ProductCard"));

export default function ProductGrid({
  products,
  activeFilter,
  sort,
  onProductClick,
}) {
  let filtered = products.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );
  if (sort === "price-asc")
    filtered = filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc")
    filtered = filtered.sort((a, b) => b.price - a.price);
  if (sort === "newest") filtered = filtered.reverse();

  return (
    <div className="row g-3 justify-content-center align-items-center">
      {filtered.map((p) => (
        <div key={p.id} className="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
          <ProductCard product={p} onClick={onProductClick} />
        </div>
      ))}
    </div>
  );
}
