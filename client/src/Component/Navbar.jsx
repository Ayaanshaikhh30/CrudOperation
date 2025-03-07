import React from "react";
import { Link } from "react-router-dom";

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "lightskyblue",
    color: "black",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "60px", // ✅ Fixed height
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: "1000",
    overflow: "hidden", // ✅ Prevents scrollbar issue
  },

  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },

  link: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "color 0.2s ease",
  },
};

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <h2
        style={styles.logo}
        onMouseEnter={(e) => (e.target.style.color = "red")}
        onMouseLeave={(e) => (e.target.style.color = "black")}
      >
        Navbar
      </h2>

      <ul style={styles.navLinks}>
        <li>
          <Link
            to="/"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = "red")}
            onMouseLeave={(e) => (e.target.style.color = "black")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = "red")}
            onMouseLeave={(e) => (e.target.style.color = "black")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = "red")}
            onMouseLeave={(e) => (e.target.style.color = "black")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
