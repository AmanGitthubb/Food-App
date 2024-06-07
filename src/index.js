import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "./index.css";

const AppLayout = () => {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)