import { useState, useRef } from "react";

export default function ProductCard({ product, onClick }) {
  const images = Array.isArray(product.image) ? product.image : [product.image];
  const [currentImg, setCurrentImg] = useState(images[0]);
  const cardRef = useRef(null);
  console.log(images);
  const handleMouseMove = (e) => {
    if (images.length <= 1) return;
    const rect = cardRef.current.getBoundingClientRect();
    const index = Math.floor(
      ((e.clientX - rect.left) / rect.width) * images.length
    );
    setCurrentImg(images[index]);
  };
  const resetImage = () => setCurrentImg(images[0]);

  return (
    <div
      ref={cardRef}
      className="card h-100 text-white shadow-sm mx-auto"
      onClick={() => onClick(product.id)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetImage}
      style={{
        borderRadius: "16px",
        cursor: "pointer",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.03)",
      }}
    >
      <img
        src={currentImg}
        className="card-img-top"
        alt={product.title}
        style={{ height: "140px", objectFit: "cover" }}
      />
      <div className="card-body p-2">
        <h5
          className="card-title mb-1"
          style={{ fontSize: "15px", fontWeight: 600 }}
        >
          {product.title}
        </h5>
        <p className="card-text text-muted mb-1" style={{ fontSize: "12px" }}>
          {product.desc}
        </p>
        <div className="fw-bold text-warning" style={{ fontSize: "15px" }}>
          {product.price}
        </div>
      </div>
    </div>
  );
}
