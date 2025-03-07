import React, { useState } from "react";

const Register = () => {
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
    const { name, value } = e.target;
    setInp((preval) => ({
      ...preval,   // ✅ Spread previous state correctly
      [name]: value, 
    }));
  };
  

  const addinpdata = async (e) => {
    e.preventDefault();
    
    // Validate inputs before sending request
    const { name, email, work, add, mobile, desc, age } = intval;
    if (!name || !email || !work || !add || !mobile || !desc || !age) {
        alert("Please fill all fields");
        return;
    }

    try {
        const res = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, work, add, mobile, desc, age })
        });

        const data = await res.json();
        console.log(data);

        if (res.status !== 201) {
            alert(`Error: ${data.error || "Something went wrong"}`);
            console.log("Error:", data.error);
        } else {
            alert("Data added successfully!");
            console.log("Data added:", data);
        }
    } catch (error) {
        console.error("Fetch error:", error);
        alert("Server error, please try again later.");
    }
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
            marginTop: "9px",
          }}
        >
          Register
        </h2>

        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {/* Name & Email (Side by Side) */}
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <label className="form-label">Name</label>
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
                name="add"
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
              name="desc"
              rows="3"
              style={{ padding: "10px", width: "100%" }}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={addinpdata}
            className="btn btn-primary"
            style={{ fontSize: "20px", padding: "10px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
