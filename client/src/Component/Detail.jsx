import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton } from "@mui/material";
import { Email, Work, Phone, LocationOn, Edit, Delete } from "@mui/icons-material";
import profileImg from "../Component/profile.png";

const Detail = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 80px)",
        marginTop: "80px",
        overflow: "hidden",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card
        sx={{
          minWidth: 500,
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "5px 5px 15px rgba(0,0,0,0.2)",
          backgroundColor: "#ffffff",
        }}
      >
        <CardContent>
          {/* Header */}
          <Typography variant="h5" fontWeight="bold" align="center" color="primary">
            Welcome, Tony Stark!
          </Typography>
           {/* Action Buttons */}
           <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px"  }}>
           <button className="btn btn-primary" style={{ marginRight: "10px", }}>
           <i className="fa-solid fa-pen"></i>
         </button>
         <button className="btn btn-danger">
           <i className="fa-solid fa-trash"></i>
         </button>
         </div>

          {/* Profile Section */}
          <div style={{marginBottom:120}}>
          <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
            <Avatar src={profileImg} sx={{ width: 70, height: 70, marginRight: "15px" }} />
            <div>
              <Typography variant="h6" fontWeight="bold">Tony Stark</Typography>
              <Typography variant="body1" color="textSecondary">Age: 24</Typography>
            </div>
          </div>

          {/* Contact & Work Info */}
          <div style={{marginTop:20}}>
          
            <Typography variant="body1" display="flex" alignItems="center"  sx={{ marginBottom: "10px" }}>
              <Email sx={{ marginRight: "10px", color: "#1976d2" }} /> <b>Email:</b> Tony@gmail.com
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center" sx={{ marginBottom: "10px" }}>
              <Work sx={{ marginRight: "10px", color: "#1976d2" }} /> <b>Occupation:</b> MERN Stack Developer
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center" sx={{ marginBottom: "10px" }}>
              <Phone sx={{ marginRight: "10px", color: "#1976d2" }} /> <b>Mobile:</b> +91 9537412280
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center" sx={{ marginBottom: "10px" }}>
              <LocationOn sx={{ marginRight: "10px", color: "#1976d2" }} /> <b>Location:</b> Ahmedabad, India
            </Typography>
          </div>
          </div>
          
          {/* Description */}
          
          <Typography variant="body2" sx={{ marginTop: "20px", fontStyle: "italic", color: "#555" }}>
            <b>Description:</b> Hey, I’m Stark from Ahmedabad! 🚀  
            I'm a passionate MERN Stack Developer, currently working on some exciting projects that push the limits of technology.  
            I specialize in building high-performance web applications and love experimenting with cutting-edge tech.  
            When I’m not coding, you’ll find me exploring AI advancements or discussing futuristic innovations.  
          </Typography>
         

         
        </CardContent>
      </Card>
    </div>
  );
};

export default Detail;
