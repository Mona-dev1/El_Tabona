import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json";
import Modal from "../components/QRmodal";
import Section from "../components/Section";
import "../assets/css/product-bs.css";
import productsData from "../data/products.json";

export default function Product({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [mainImg, setMainImg] = useState("");
  const [qty, setQty] = useState(1);

  const [modal3D, setModal3D] = useState(false);
  const [modalQR, setModalQR] = useState(false);

  useEffect(() => {
    const p = products.find((item) => item.id === Number(id));
    if (p) {
      setProduct(p);
      const imgs = Array.isArray(p.image) ? p.image : [p.image];
      setMainImg(imgs[0]);
    }
  }, [id]);

  if (!product)
    return <h2 className="text-center text-white mt-5">Product Not Found</h2>;

  const images = Array.isArray(product.image) ? product.image : [product.image];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      img: Array.isArray(product.image) ? product.image[0] : product.image,
      qty: qty,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };
  const section1 = productsData.filter((c) => c.id !== product.id).slice(0, 4);
  const section2 = productsData.filter((c) => c.id !== product.id).slice(4, 8);
  return (
    <div className="container py-4 product-page">
      <div className="row g-4 product-top">
        <div className="col-lg-6 d-flex flex-column align-items-center product-gallery p-3 rounded shadow-sm">
          <img
            id="mainImage"
            src={mainImg}
            alt="product"
            className="img-fluid main-img mb-3 rounded"
          />

          <div className="d-flex gap-2 mb-3 thumbs flex-wrap justify-content-center">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className={`img-thumbnail ${
                  mainImg === img ? "active border-warning" : ""
                }`}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => setMainImg(img)}
              />
            ))}
          </div>

          <div className="d-flex gap-2">
            <button
              className="btn btn-warning fw-bold"
              onClick={() => setModal3D(true)}
            >
              VIEW 3D
            </button>
            <button
              className="btn btn-outline-light fw-bold"
              onClick={() => setModalQR(true)}
            >
              VIEW QR
            </button>
          </div>
        </div>

        <div className="col-lg-6 product-info text-white">
          <h2
            className="mb-3"
            style={{ fontFamily: "Pacifico, cursive", fontSize: "30px" }}
          >
            {product.title}
          </h2>

          <p className="fw-bold text-warning fs-5">{product.price}</p>
          <p className="text-white mb-3">{product.desc}</p>

          <div className="mb-3">
            <label className="form-label fw-bold">Size</label>
            <select className="form-select mb-2 bg-dark text-white border-secondary">
              <option>Standard</option>
              <option>Mini</option>
            </select>

            <label className="form-label fw-bold">Frosting</label>
            <select className="form-select bg-dark text-white border-secondary">
              <option>Vanilla</option>
              <option>Chocolate</option>
            </select>
          </div>

          <div className="d-flex align-items-center gap-2 mb-3">
            <button
              className="btn btn-warning fw-bold"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <span className="px-2">{qty}</span>
            <button
              className="btn btn-warning fw-bold"
              onClick={() => setQty((q) => q + 1)}
            >
              +
            </button>
          </div>

          <div className="d-flex gap-2 mb-3 flex-wrap">
            <button
              className="btn btn-warning flex-grow-1 fw-bold"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-outline-light flex-grow-1 fw-bold"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>

          <div className="accordion p-2 rounded">
            Purchase options and product details can go here.
          </div>
        </div>
      </div>

      <Section title="Frequently Bought Together" items={section1} />
      <Section title="People Also Loved" items={section2} />

      {modal3D && (
        <Modal onClose={() => setModal3D(false)}>
          <img src={mainImg} className="img-fluid modal-img rounded" />
        </Modal>
      )}

      {modalQR && (
        <Modal onClose={() => setModalQR(false)}>
          <h3 className="mb-3">Scan to view product</h3>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https://example.com/product/${id}`}
            className="img-fluid qr-img mb-2"
          />
          <p className="text-white">
            Open the product link on your phone to see details.
          </p>
        </Modal>
      )}
    </div>
  );
}
