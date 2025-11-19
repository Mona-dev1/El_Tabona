import React from "react";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Freshly Baked Happiness</h1>
          <p>
            Discover our handcrafted pastries, cupcakes, and artisan breads made
            with love every single day.
          </p>
          <Link to="/products">
            <button className="btn-primary">Explore Menu</button>
          </Link>
        </div>
      </section>

      {/* CATEGORY HIGHLIGHTS */}
      <section className="category-section">
        <h2 className="section-title">What Are You Craving Today?</h2>

        <div className="category-grid">
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800" />
            <div className="category-layer">
              <h3>Cupcakes</h3>
            </div>
          </div>

          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800" />
            <div className="category-layer">
              <h3>Pastries</h3>
            </div>
          </div>

          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1509440159598-5fec1f0c6f81?q=80&w=800" />
            <div className="category-layer">
              <h3>Artisan Bread</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured-section">
        <h2 className="section-title">Customer Favorites</h2>

        <div className="product-grid">
          {[1, 2, 3, 4].map((i) => (
            <div className="product-card" key={i}>
              <img src={`https://picsum.photos/300?random=${i}`} />
              <h3>Delicious Treat #{i}</h3>
              <p className="price">$4.99</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-grid">
          <img src="https://images.unsplash.com/photo-1464347744102-11db6282f854?q=80&w=1000" />

          <div className="about-content">
            <h2>Baked With Passion</h2>
            <p>
              At Tabona Bakery, every item is freshly prepared using the finest
              ingredients and traditional baking techniques. Whether you’re in
              the mood for something sweet, buttery, or savory — we’ve got
              something special waiting for you.
            </p>
            <button className="btn-dark">Learn More</button>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Place Your Order Now</h2>
        <p>Fresh, warm, and delicious — delivered right to your doorstep.</p>
        <button className="btn-light">Start Ordering</button>
      </section>
    </div>
  );
}
