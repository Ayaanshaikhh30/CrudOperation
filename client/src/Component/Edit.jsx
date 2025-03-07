import React from 'react'
import { useState } from 'react';


const Edit = () => {
    
      const [intval, setInp] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: "",
      });
    
      const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setInp((preval) => {
          return {
            preval,
            [name]: value,
          };
        });
      };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px", // Adjusted for side-by-side layout
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Register
        </h2>

        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {/* Name & Email (Side by Side) */}
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <label className="form-label">Name14</label>
              <input
                type="text"
                value={intval.name}
                onChange={setdata}
                name="name"
                className="form-control"
                style={{ padding: "10px", width: "100%" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label className="form-label">Email</label>
              <input
                type="email"
                value={intval.email}
                onChange={setdata}
                name="email"
                className="form-control"
                style={{ padding: "10px", width: "100%" }}
              />
            </div>
          </div>

          {/* Age & Mobile (Side by Side) */}
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <label className="form-label">Age</label>
              <input
                type="number"
                value={intval.age}
                onChange={setdata}
                name="age"
                className="form-control"
                style={{ padding: "10px", width: "100%" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label className="form-label">Mobile</label>
              <input
                type="tel"
                value={intval.mobile}
                onChange={setdata}
                name="mobile"
                className="form-control"
                style={{ padding: "10px", width: "100%" }}
              />
            </div>
          </div>

          {/* Work & Address (Side by Side) */}
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <label className="form-label">Work</label>
              <input
                type="text"
                value={intval.work}
                onChange={setdata}
                name="work"
                className="form-control"
                style={{ padding: "10px", width: "100%" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label className="form-label">Address</label>
              <input
                type="text"
                value={intval.add}
                onChange={setdata}
                name="address"
                className="form-control"
                style={{ padding: "10px", width: "100%" }}
              />
            </div>
          </div>

          {/* Description (Full Width) */}
          <div>
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              value={intval.desc}
              onChange={setdata}
              name="description"
              rows="3"
              style={{ padding: "10px", width: "100%" }}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary"
            style={{ fontSize: "20px", padding: "10px" }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

  


export default Edit
