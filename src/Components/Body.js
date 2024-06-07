import React, { useEffect, useState } from "react";
import Restaurants from "./Restaurants";
import axios from "axios"

const Body = () => {

   const [listOfRestaurants , setListOfRestaurants ]  = useState([])


  useEffect(() => {
      fetchData();
  } , [])

const fetchData = () => {
    axios.get("https://www.swiggy.com/mapi/homepage/getCards?lat=22.7195687&lng=75.8577258").then((json) => {
          const list = json?.data?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
         setListOfRestaurants(list)
         console.log(list);

    })
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