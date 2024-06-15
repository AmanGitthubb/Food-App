import React, { useEffect, useState } from "react";
import Restaurants from "./Restaurants";

const Body = () => {

   const [listOfRestaurants , setListOfRestaurants ]  = useState([])


  useEffect(() => {
      fetchData();
  } , [])

// const fetchData = () => {
//     axios.get("https://www.swiggy.com/mapi/homepage/getCards?lat=23.2599333&lng=77.412615").then((json) => {
//           const list = json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
//          setListOfRestaurants(list)
//          console.log(list);

//     })
// }

const fetchData = async () => {
    const data =  await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=23.2599333&lng=77.412615")
    const json = await data.json()
    const list = json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
    console.log(json);
    setListOfRestaurants(list)
    console.log(list);
}


 
  
    return (
        <div className="flex justify-around flex-wrap">
              { listOfRestaurants.map( (restaurants) => {
                console.log(restaurants);
         return <Restaurants key={restaurants.info.id} info={restaurants.info}/>
              })}
        </div>
    )
}

export default Body;