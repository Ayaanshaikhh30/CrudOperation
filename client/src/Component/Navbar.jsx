import React from "react";

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
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: "1000",
  },
  logo: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "color 0.3s ease",
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
        {" "}
        Navbar
      </h2>

      <ul style={styles.navLinks}>
        {["Home", "About", "Contact"].map((item, index) => (
          <li key={index}>
            <a
              href="#"
              style={styles.link}
              onMouseEnter={(e) => (e.target.style.color = "red")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
