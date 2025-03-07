import React from "react";

const Home = () => {
  return (
    <div style={{ fontFamily: "cursive" }}>
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-3">
            <button className="btn btn-primary">Add Data</button>
          </div>
          <table className="table">
            <thead>
              <tr className="table-info">
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Job</th>
                <th scope="col">Number</th>
                <th scope="col" className="ps-3">
                  Actions
                </th>
                {/* ✅ Added this */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>mark12@gmail.com</td>
                <td>Web Developer</td>
                <td>1223456</td>
                <div className="icons1">
                  <td className="d-flex gap-5">
                    {" "}
                    {/* ✅ Fixed spacing */}
                    <button className="btn btn-success">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                    <button className="btn btn-primary">
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button className="btn btn-danger">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </div>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>mark12@gmail.com</td>
                <td>Web Developer</td>
                <td>1223456</td>
                <div className="icons2">
                  <td className="d-flex gap-5">
                    {" "}
                    {/* ✅ Fixed spacing */}
                    <button className="btn btn-success">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                    <button className="btn btn-primary">
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button className="btn btn-danger">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </div>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th scope="row">3</th>
                <td>Mark</td>
                <td>mark12@gmail.com</td>
                <td>Web Developer</td>
                <td>1223456</td>
                <div className="icons3">
                  <td className="d-flex gap-5">
                    {" "}
                    {/* ✅ Fixed spacing */}
                    <button className="btn btn-success">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                    <button className="btn btn-primary">
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button className="btn btn-danger">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
