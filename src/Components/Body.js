import React, { useEffect, useState } from "react";
import Restaurants from "./Restaurants";

const Body = () => {

   const [listOfRestaurants , setListOfRestaurants ]  = useState([])


  useEffect(() => {
      fetchData();
  } , [])

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627")
    const json = await data.json();
    const list = json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(list)

}

 
  
    return (
        <div className="flex justify-around flex-wrap">
              {listOfRestaurants.map( (restaurants) => {
         return  <Restaurants key={restaurants.info.id} info={restaurants.info}/>
              })}
        </div>
    )
}

export default Body;