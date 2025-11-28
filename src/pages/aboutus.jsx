import React from "react";
import "../assets/css/aboutus.css";

const AboutUs = () => {
  const timelineData = [
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
  ];

  const valuesData = [
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
  ];

  const teamData = [
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
  ];

  return (
    <div className="about-us-container">
      <section className="story-section text-center">
        <h1 className="main-title">Our Story, Baked with Love</h1>
        <p className="main-description">
          From a humble beginning to a cherished community bakery, Bake & Bloom
          has been on a delightful journey, crafting moments of joy with every
          treat. Discover our path, our passion, and the people behind the
          magic.
        </p>
      </section>

      <section className="story-timeline">
        {timelineData.map((item, i) => (
          <div key={i} className={`timeline-item ${item.side}`}>
            <div className="timeline-content">
              <span className="year">{item.year}</span>
              <h3 className="card-title">{item.title}</h3>
              <p>{item.text}</p>
              <img
                src={item.img}
                alt={item.title}
                className="timeline-image"
              />
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </section>

      <section className="values-section text-center">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          {valuesData.map((val, i) => (
            <div key={i} className="value-card">
              <i className={`${val.icon}`}></i>
              <h4 className="card-title">{val.title}</h4>
              <p>{val.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section text-center">
        <h2 className="section-title">Meet The Team</h2>
        <div className="team-grid">
          {teamData.map((member, i) => (
            <div key={i} className="team-member">
              <img
                src={member.img}
                alt={member.name}
                className="team-photo"
              />
              <h4 className="member-name">{member.name}</h4>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
