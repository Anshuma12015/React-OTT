import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true)
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    }
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://images-platform.99static.com//3_LW5wxmY4aiIN-qdh58-qJYGqE=/0x1006:994x2000/fit-in/500x500/99designs-contests-attachments/127/127500/attachment_127500048"
        alt="vistream Logo"
      />
      <img
        className="nav_avatar"
        src="https://t3.ftcdn.net/jpg/00/97/08/52/360_F_97085245_Thj4wh1687BRffbzt4zDckRHkiEaNG1g.jpg"
        alt="vistream Logo"
      />
    </div>
  )
}

export default Nav