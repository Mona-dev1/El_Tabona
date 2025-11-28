
import React, { useState, useEffect } from "react";
import "../assets/css/account.css";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("userEmail") || "");
    setName(localStorage.getItem("userName") || "");
  }, []);

  const handleChangeAvatar = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    navigate("/"); 
  };

  return (
    <div className="account-container">
      <div className="account-box">
        <h1 className="title">Your Profile</h1>

        <div className="profile-content">
          <div className="avatar-section">
            {avatar ? (
              <img src={avatar} alt="Avatar" className="avatar" />
            ) : (
              <FaUserCircle size={100} color="#ccc" />
            )}

            <input
              type="file"
              accept="image/*"
              id="avatarInput"
              style={{ display: "none" }}
              onChange={handleChangeAvatar}
            />
            <button
              className="avatar-btn"
              onClick={() => document.getElementById("avatarInput").click()}
            >
              Change Avatar
            </button>
          </div>

          <div className="inputs">
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>Email Address</label>
            <input type="email" value={email} readOnly />
          </div>
        </div>

        <div className="btns">
          <button className="back-btn" onClick={() => navigate("/")}>
            Back to Dashboard
          </button>
          <button className="save-btn" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
