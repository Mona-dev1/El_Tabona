import React, { useState, useEffect } from "react";
import "../assets/css/aboutus-bs.css";

const AboutUs = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  return (
    <div className={`about-us-container py-5 ${theme}-theme`}>
      {/* Theme Toggle */}
      <button className="btn theme-toggle-button" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      {/* Our Story */}
      <section className="text-center mb-5 container">
        <h1 className="main-title mb-3">Our Story, Baked with Love</h1>
        <p className="main-description mb-3">
          From a humble beginning to a cherished community bakery, Bake & Bloom
          has been on a delightful journey, crafting moments of joy with every
          treat. Discover our path, our passion, and the people behind the
          magic.
        </p>
        <div className="spark-icon">
          <i className="fas fa-bread-slice"></i>
        </div>
      </section>

      {/* Timeline */}
      <section className="story-timeline position-relative mb-5 container">
        <div className="timeline-line position-absolute"></div>

        {[
          {
            year: "2010",
            title: "The First Spark",
            text: "Bake & Bloom began in Sarah's cozy kitchen, inspired by a lifelong dream and grandmother's secret recipes...",
            img: "images/aboutus/storyImage1.jpg",
            side: "right",
          },
          {
            year: "2015",
            title: "Opening Our First Store",
            text: "With overwhelming support, we opened our first brick-and-mortar bakery...",
            img: "images/aboutus/storyImage2.jpg",
            side: "left",
          },
          {
            year: "2018",
            title: "Embracing Local Ingredients",
            text: "We solidified our commitment to quality by partnering with local farms...",
            img: "images/aboutus/storyImage3.jpg",
            side: "right",
          },
          {
            year: "2020",
            title: "Bake & Bloom Online",
            text: "Responding to the demand for our treats nationwide, we launched our online shop...",
            img: "images/aboutus/storyImage4.jpg",
            side: "left",
          },
          {
            year: "2023",
            title: "Community & Classes",
            text: "We expanded our mission to include baking workshops and community events...",
            img: "images/aboutus/storyImage5.jpg",
            side: "right",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`row timeline-item ${item.side} justify-content-${
              item.side === "right" ? "end" : "start"
            } mb-5`}
          >
            <div className="col-md-6">
              <div className="card timeline-content p-3">
                <span className="year text-warning fw-bold">{item.year}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="text-white">{item.text}</p>
                <img
                  src={item.img}
                  alt={item.title}
                  className="timeline-image rounded mt-2"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Values Section */}
      <section className="values-section text-center mb-5 container">
        <h2 className="section-title mb-4">Our Values</h2>
        <div className="row justify-content-center g-4">
          {[
            {
              icon: "fas fa-heart",
              title: "Community First",
              text: "We believe in supporting local suppliers and fostering strong connections within our neighborhood.",
            },
            {
              icon: "fas fa-seedling",
              title: "Sustainable Sourcing",
              text: "Committed to ethical and environmentally friendly practices from farm to oven.",
            },
            {
              icon: "fas fa-star",
              title: "Uncompromising Quality",
              text: "Every ingredient is carefully selected, and every product is crafted with meticulous attention to detail.",
            },
          ].map((val, i) => (
            <div key={i} className="col-md-4 value-card card p-3 mx-2">
              <i className={`${val.icon} mb-2 display-6 text-warning`}></i>
              <h4 className="card-title">{val.title}</h4>
              <p className="text-white">{val.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section text-center mb-5 container">
        <h2 className="section-title mb-4">Meet The Team</h2>
        <div className="row justify-content-center g-4">
          {[
            {
              name: "Sarah Chen",
              role: "Founder & Head Baker",
              bio: "Sarah's passion for baking began in her grandmother's kitchen...",
              img: "images/aboutus/teamMember1.jpg",
            },
            {
              name: "Mark Johnson",
              role: "Operations Manager",
              bio: "Mark ensures everything runs smoothly, from ingredient sourcing to timely deliveries...",
              img: "images/aboutus/teamMember2.jpg",
            },
            {
              name: "Maria Rodriguez",
              role: "Pastry Artist",
              bio: "Maria brings artistic flair to every cake and pastry...",
              img: "images/aboutus/teamMember3.jpg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="col-md-4 team-member card p-3 align-items-center mx-2"
            >
              <img
                src={member.img}
                alt={member.name}
                className="team-photo rounded-circle mb-2"
              />
              <h4 className="member-name">{member.name}</h4>
              <p className="member-role text-white">{member.role}</p>
              <p className="member-bio text-white">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
