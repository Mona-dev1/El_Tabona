import React, { useState } from "react";
import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Package,
  CreditCard,
  CheckCircle,
  X,
} from "lucide-react";
import "../assets/css/Cart.css";

export default function Cart({ cart, setCart, removeFromCart,updateQty }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("userLoggedIn") === "true";

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login-signup");
    }
  }, []);


  const [ship, setShip] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    method: "",
  });

  const [_pay, _setPay] = useState({
    cardNum: "",
    name: "",
    exp: "",
    cvv: "",
  });

  const subtotal = cart.reduce((a, b) => a + b.price * b.qty, 0);
  const shipCost = ship.method === "express" ? 12.99 : 5.99;
  const tax = subtotal * 0.06;
  const total = subtotal + shipCost + tax;


  return (
   
    <div className="wrapper-black">
      <h1 className="title-center">Your Sweet Cart</h1>

      <div className="steps-bar">
        {[
          { icon: ShoppingCart, label: "Cart" },
          { icon: Package, label: "Shipping" },
          { icon: CreditCard, label: "Payment" },
          { icon: CheckCircle, label: "Confirm" },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="step-box">
              <div className={step >= i ? "step-dot active" : "step-dot"}>
                <Icon size={20} />
              </div>
              <span>{s.label}</span>
              {i < 3 && <div className={step > i ? "line active" : "line"} />}
            </div>
          );
        })}
      </div>

      <div className="layout-flex container-box">
        <div className="left-box content-box">
          {step === 0 && (
            <div>
              <h2>Your Order</h2>
              {cart.map((item) => (
                <div className="cart-row-dark" key={item.id}>
                  <img src={item.img} />
                  <div className="cart-info">
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                  </div>

                  <div className="qty-box">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>
                      -
                    </button>
                    <span className="qty-number">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>  removeFromCart(item.id)}
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {step === 1 && (
            <div>
              <h2>Shipping Details</h2>

              <div className="grid2">
                <input
                  value={ship.name}
                  onChange={(e) => setShip({ ...ship, name: e.target.value })}
                  placeholder="Full Name"
                />
                <input
                  value={ship.phone}
                  onChange={(e) => setShip({ ...ship, phone: e.target.value })}
                  placeholder="Phone"
                />
              </div>

              <input
                value={ship.street}
                onChange={(e) => setShip({ ...ship, street: e.target.value })}
                placeholder="Street"
              />

              <div className="grid3">
                <input
                  value={ship.city}
                  onChange={(e) => setShip({ ...ship, city: e.target.value })}
                  placeholder="City"
                />
                <input
                  value={ship.state}
                  onChange={(e) => setShip({ ...ship, state: e.target.value })}
                  placeholder="State"
                />
                <input
                  value={ship.zip}
                  onChange={(e) => setShip({ ...ship, zip: e.target.value })}
                  placeholder="Zip"
                />
              </div>

              <h3>Shipping Method</h3>
              <div className="ship-select">
                <div
                  className={
                    ship.method === "standard"
                      ? "ship-card active"
                      : "ship-card"
                  }
                  onClick={() => setShip({ ...ship, method: "standard" })}
                >
                  <h4>Standard</h4>
                  <p>3–5 days ($5.99)</p>
                </div>

                <div
                  className={
                    ship.method === "express" ? "ship-card active" : "ship-card"
                  }
                  onClick={() => setShip({ ...ship, method: "express" })}
                >
                  <h4>Express</h4>
                  <p>1–2 days ($12.99)</p>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2>Payment Info</h2>
              <input
  placeholder="Card Number"
  value={_pay.cardNum}
  onChange={(e) => _setPay({ ..._pay, cardNum: e.target.value })}
/>
<input
  placeholder="Name on Card"
  value={_pay.name}
  onChange={(e) => _setPay({ ..._pay, name: e.target.value })}
/>
<div className="grid2">
  <input
    placeholder="MM/YY"
    value={_pay.exp}
    onChange={(e) => _setPay({ ..._pay, exp: e.target.value })}
  />
  <input
    placeholder="CVV"
    value={_pay.cvv}
    onChange={(e) => _setPay({ ..._pay, cvv: e.target.value })}
  />
</div>

              </div>
            
          )}

          {step === 3 && (
            <div>
              <h2>Confirm Order</h2>
              <p>
                <b>Name:</b> {ship.name}
              </p>
              <p>
                <b>Address:</b> {ship.street}, {ship.city}, {ship.state}{" "}
                {ship.zip}
              </p>

              <h3>Items</h3>
              {cart.map((item) => (
                <p key={item.id}>
                  {item.name} x {item.qty} = ${""}
                  {(item.price * item.qty).toFixed(2)}
                </p>
              ))}

              <h2>Total: ${total.toFixed(2)}</h2>
            </div>
          )}

          <div className="btn-row">
            {step > 0 && (
              <button className="back-btn" onClick={() => setStep(step - 1)}>
                Back
              </button>
            )}
  <button
  className="next-btn"
  onClick={() => {
    if (step === 1) {
      const { name, phone, street, city, state, zip } = ship;
      if (!name || !phone || !street || !city || !state || !zip) {
        alert("Please fill in all shipping details.");
        return; 
      }
    }
    if (step === 2) {
      const { cardNum, name, exp, cvv } = _pay;
      if (!cardNum || !name || !exp || !cvv) {
        alert("Please fill in all payment details.");
        return;
      }
    }
    if (step === 3) {
      setOrderPlaced(true);
      return; 
    }
    setStep(step + 1);
  }}
>
  {step === 3 ? "Place Order" : "Continue"}
</button>


          </div>
        </div>

        <div className="right-box content-box">
          <h3>Order Summary</h3>

          {cart.map((i) => (
            <div className="sum-item" key={i.id}>
              <img src={i.img} />
              <div>
                <h4>{i.name}</h4>
                <p>Qty: {i.qty}</p>
              </div>
              <strong>${(i.price * i.qty).toFixed(2)}</strong>
            </div>
          ))}

          <hr />

          <p className="summary-line">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </p>

          <p className="summary-line">
            <span>Shipping:</span>
            <span>${shipCost.toFixed(2)}</span>
          </p>

          <p className="summary-line">
            <span>Tax:</span>
            <span>${tax.toFixed(2)}</span>
          </p>

          <h2>Total: ${total.toFixed(2)}</h2>
        </div>
      </div>
      {orderPlaced && (
  <div className="order-message">
    <h2>🎉 Your order has been placed successfully!</h2>
    <p>Thank you for shopping with us.</p>
  </div>
)}
    </div>
  );
}