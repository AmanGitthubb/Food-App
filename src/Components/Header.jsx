import React from "react";
import "../index.css"

const Header = () => {
    return(
        <div className="flex h-[10vh] bg-gray-400 justify-around items-center ">
             <div>
                 <img className="mix-blend-multiply w-[150px]" src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" alt="" />
             </div> 
             <div>
                 <ul className="flex">
                    <li className="py-2 mx-6 font-bold"> Contact Us </li>
                    <li className=" py-2 mx-6 font-bold" > Menu </li>
                    <li className="py-2 mx-6 font-bold" > Home </li>
                    <li className="py-2 mx-6 font-bold" > Cart <i class="fa-solid fa-cart-shopping"></i></li>
                    <li className=" mx-6 font-bold" ><button className=" bg-gray-200 border border-black border-2 rounded-md mx-4 px-6 py-2"> Login </button></li>
                 </ul>
             </div>
        </div>
    )
}

export default Header;