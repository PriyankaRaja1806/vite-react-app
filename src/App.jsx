import React, { useState } from "react";
import Header from "./Header";
import Userdetails from "./Userdetails";
import Footer from "./Footer";
import Parallax from "./components/Parallax"
import ParallaxPage from "./components/ParallaxPage";
import "./App.css"; 

function App() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });

  return (
    <div style={{ backgroundColor: "#f0f4f8", overflowX: "hidden" }}>
      <Header />

  
      <section
        style={{
          minHeight: "100vh",
          padding: "5rem 2rem 10rem", 
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center", paddingBottom: "2rem", fontSize: "2rem" }}>
          User Details App
        </h2>
        <Userdetails onDetailsChange={setUserDetails} />
        <Footer name={userDetails.name} email={userDetails.email} />
      </section>

    
      {/* <div style={{ height: "10vh" }}></div>

      <Parallax />

      <div style={{ height: "20vh", background: "#0a2a43" }}></div>

      <ParallaxPage /> */}
    </div>
  );
}

export default App;
