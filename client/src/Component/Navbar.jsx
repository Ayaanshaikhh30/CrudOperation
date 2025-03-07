import React, { useState } from "react";
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
    height: "60px", // 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: "1000",
    overflow: "hidden", 
  },

  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  searchContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  searchInput: {
    padding: "8px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    outline: "none",
    width: "200px",
  },

  searchButton: {
    padding: "8px 12px",
    fontSize: "14px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
    setSearchTerm(""); // ✅ Clear input after search
  };

  return (
    <div style={styles.navbar}>
      {/* Logo */}
      <h2
        style={styles.logo}
        onMouseEnter={(e) => (e.target.style.color = "red")}
        onMouseLeave={(e) => (e.target.style.color = "black")}
      >
        Navbar
      </h2>

      {/* Search Bar & Button */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <button style={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
