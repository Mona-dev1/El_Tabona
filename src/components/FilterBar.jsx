export default function FilterBar({
  categories,
  activeFilter,
  setActiveFilter,
  sort,
  setSort,
}) {
  return (
    <div className="filters-box p-3 mb-4 rounded shadow-sm">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
        
        <div className="btn-group flex-wrap" role="group">
          <button
            className={`btn category-btn rounded-pill ${
              activeFilter === "all" ? "active btn-warning" : ""
            }`}
            onClick={() => setActiveFilter("all")}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn category-btn rounded-pill ${
                activeFilter === cat ? "active btn-warning" : ""
              }`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div>
          <select
            className="form-select bg-black text-white border-secondary"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="recommended">Sort By: Recommended</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
}
