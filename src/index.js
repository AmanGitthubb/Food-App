import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
   return (
     <div className="border border-black border-x-2 ">
        <h1 className="bg-slate-600 text-indigo-600"> Heyy Cutieee !!! </h1>
     </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header/>)