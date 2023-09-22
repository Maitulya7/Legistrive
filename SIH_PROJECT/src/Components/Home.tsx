import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Login from "./login";
function Home() {
  // Check if mobile and password are present in local storage
  const mobile = localStorage.getItem("phoneNumber");
  const password = localStorage.getItem("password");

  // If both mobile and password are present, render Navbar and Hero
  if (mobile && password) {
    return (
      <>
        <Navbar />
        <Hero />
      </>
    );
  } else {
    // If not present, render the Login component
    return <Login />;
  }
}

export default Home;
