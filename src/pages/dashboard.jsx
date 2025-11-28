import React from "react";
import "../assets/css/dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome Back, John!</h1>
        <p>Your personalized bakery dashboard awaits.</p>

        <div className="header-buttons">
          <button className="order-btn">Order Again</button>
          <button className="update-btn">Update Profile</button>
        </div>
      </div>

      <div className="cards-row">
        <div className="card">
          <h3>Total Orders</h3>
          <div className="value">15</div>
          <small className="small">Delicious treats enjoyed so far</small>
        </div>

        <div className="card">
          <h3>Loyalty Points</h3>
          <div className="value">350</div>
          <small className="small">Almost enough for a free cake!</small>
        </div>

        <div className="card">
          <h3>Favorite Treat</h3>
          <div className="value" style={{ fontSize: "28px" }}>
            Croissant
          </div>
          <small className="small">A flaky, buttery delight</small>
        </div>
      </div>

      <div className="bottom-grid">
        <div className="activity-section">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <span>Placed an order for “Chocolate Mousse Cake”</span>
              <span>2 days ago</span>
            </div>

            <div className="activity-item">
              <span>Earned 50 loyalty points from recent purchase</span>
              <span>3 days ago</span>
            </div>

            <div className="activity-item">
              <span>Reviewed “Almond Croissant” with 5 stars</span>
              <span>1 week ago</span>
            </div>

            <div className="activity-item">
              <span>Redeemed 100 points for a coffee voucher</span>
              <span>2 weeks ago</span>
            </div>

            <div className="activity-item">
              <span>Updated profile information</span>
              <span>3 weeks ago</span>
            </div>
          </div>
        </div>

        <div className="promotions-section">
          <h3>Upcoming Promotions</h3>

          <img src="images/promo.jpg" alt="Promo" />

          <p className="small">
            Embrace the flavors of autumn with our limited-time Pumpkin Spice
            collection!
          </p>

          <button className="offer-btn">View Offer</button>
        </div>
      </div>
    </div>
  );
}
