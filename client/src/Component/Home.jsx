import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Home = () => {

  const [getuserdata,setUserdata] = useState([]);
  // console.log(getuserdata);
  
  const getdata = async (e) => {
    // e.preventDefault();  
    
    
        const res = await fetch("http://localhost:8000/api/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            
        });

        const data = await res.json();
        console.log(data);

        if (res.status !== 200) {
             console.log("Error:", data.error);
        
            } else {
             setUserdata(data)
            //  console.log("get data:", data);
        }

    
};

useEffect(()=>{
  getdata();
},[])


  return (
    <div style={{ fontFamily: "cursive" }}>
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-3">
          <NavLink to="/register">
          <button className="btn btn-primary">Add Data</button>
        </NavLink>
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
                {
                  getuserdata.map((element,id) =>{
                    return(
                      <>
                      <tr key={id}>
                      <th scope="row">{id + 1}</th>
                      <td>{element.name}</td>
                      <td>{element.email}</td>
                      <td>{element.work}</td>
                      <td>{element.mobile}</td>
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
                      
                      </>
                    )
                  })
                }
             
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
