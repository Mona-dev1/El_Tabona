import React from "react";
import covImage from "../assets/images/cov.jpg";

import { useNavigate } from "react-router-dom";

import "../assets/css/home.css";
import "../assets/css/global.css";

export default function HeroSection({ addToCart }) {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${covImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="circle c1"></span>
        <span className="circle c2"></span>
        <span className="circle c3"></span>
        <span className="circle c4"></span>

        <h1>Where Every Bite is a Bloom.</h1>
        <p>
          Crafting delightful moments with artisanal baked goods, made with
          love.
        </p>

        <button onClick={() => navigate("/products")}>Shop Our Delights</button>
      </section>

      <section className="freshly-baked">
        <h2 className="fresh-title">Today's Freshly Baked</h2>

        <div className="cards-wrapper">
          <div className="baked-card">
            <img
              src="/El_Tabona/images/Pink-Velvet-Cucpakes.jpg"
              className="baked-img"
            />
            <div className="card-body">
              <h3 className="baked-name">Pink Velvet Cupcakes</h3>
              <p className="baked-price">$4.50</p>
              <p className="baked-desc">
                Our signature velvet cupcakes, topped with smooth strawberry
              </p>
              <p className="view-link">View Details</p>
            </div>
          </div>

          <div className="baked-card">
            <img
              src="/El_Tabona/images/Artisan-Sourdough-Bread.jpg"
              className="baked-img"
            />
            <div className="card-body">
              <h3 className="baked-name">Artisan Sourdough Loaf</h3>
              <p className="baked-price">$9.99</p>
              <p className="baked-desc">
                Hand-kneaded sourdough, baked to perfection with a crispy crust
              </p>
              <p className="view-link">View Details</p>
            </div>
          </div>

          <div className="baked-card">
            <img
              src="/El_Tabona/images/Chocolate-Croissants-min.jpg"
              className="baked-img"
            />
            <div className="card-body">
              <h3 className="baked-name">Double Chocolate Croissant</h3>
              <p className="baked-price">$5.25</p>
              <p className="baked-desc">
                Buttery, flaky croissant filled with rich dark chocolate
              </p>
              <p className="view-link">View Details</p>
            </div>
          </div>
        </div>
      </section>
      <section className="signature-section">
        <h2 className="signature-title">Our Signature Collection</h2>

        <div className="signature-cards">
          <div className="sig-card">
            <img
              src="/El_Tabona/images/macaron.jpg"
              className="sig-img"
              alt="Macarons"
            />

            <div className="sig-info">
              <h3 className="sig-name">Lavender Honey Macarons</h3>
              <p className="sig-desc">
                Delicate macarons with a hint of floral sweetness, perfect for
                any
              </p>

              <div className="sig-row">
                <span className="sig-price">$24.00</span>
                <button
                  className="sig-btn"
                  onClick={() =>
                    addToCart({
                      id: 1,
                      name: "Lavender Honey Macarons",
                      price: 24.0,
                      qty: 1,
                      img: "/El_Tabona/images/macaron.jpg",
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="sig-card">
            <img
              src="/El_Tabona/images/brownies.jpg"
              className="sig-img"
              alt="Brownies"
            />

            <div className="sig-info">
              <h3 className="sig-name">Decadent Chocolate Fudge</h3>
              <p className="sig-desc">
                Layers of moist chocolate cake and rich fudge frosting, pure
                indulgence.
              </p>

              <div className="sig-row">
                <span className="sig-price">$48.00</span>
                <button
                  className="sig-btn"
                  onClick={() =>
                    addToCart({
                      id: 102,
                      name: "Decadent Chocolate Fudge",
                      price: 9.99,
                      qty: 1,
                      img: "/El_Tabona/images/brownies.jpg",
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="sig-card">
            <img
              src="/El_Tabona/images/muffin.jpg"
              className="sig-img"
              alt="Muffins"
            />

            <div className="sig-info">
              <h3 className="sig-name">Classic Blueberry Muffins</h3>
              <p className="sig-desc">
                Perfectly baked, light, and fluffy muffins bursting with fresh
              </p>

              <div className="sig-row">
                <span className="sig-price">$18.00</span>
                <button
                  className="sig-btn"
                  onClick={() =>
                    addToCart({
                      id: 103,
                      name: "Classic Blueberry Muffins",
                      price: 5.25,
                      qty: 1,
                      img: "/El_Tabona/images/muffin.jpg",
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2 className="title">Hear From Our Happy Customers</h2>

        <div className="cards">
          <div className="card">
            <img
              src="/El_Tabona/images/2.jpg"
              alt="Customer"
              className="avatar"
              class="testimonial-img"
            />
            <div className="stars">★★★★★</div>
            <h4>Alice Chen</h4>
            <p>
              Bake & Bloom never disappoints! Their croissants are heavenly and
              the customer service is exceptional.
            </p>
          </div>

          <div className="card">
            <img
              src="/El_Tabona/images/1.jpg"
              alt="Customer"
              className="avatar"
              class="testimonial-img"
            />
            <div className="stars">★★★★★</div>
            <h4>David Nelson</h4>
            <p>
              The custom cake for my wife's birthday was a masterpiece.
              Absolutely delicious and beautifully decorated!
            </p>
          </div>

          <div className="card">
            <img
              src="/El_Tabona/images/3.jpg"
              alt="Customer"
              className="avatar"
              class="testimonial-img"
            />
            <div className="stars">★★★★★</div>
            <h4>Emily Rose</h4>
            <p>
              I love their seasonal specialties! Always fresh and innovative.
              The cookies are my personal favorite.
            </p>
          </div>
        </div>
      </section>
      <section className="subscribe">
        <div className="box">
          <h2>Join Our Sweet Community</h2>
          <p>
            Sign up for our newsletter to receive exclusive offers, new product
            announcements, and baking tips!
          </p>

          <div className="form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe Now</button>
          </div>
        </div>
      </section>
    </>
  );
}
