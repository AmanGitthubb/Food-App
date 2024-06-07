import { CLOUD_URL } from "../Utils/common";
const Restaurants = (props) => {

 const { name , cloudinaryImageId , costForTwo , avgRatingString , cuisines  } = props.info;
     return (
        <div className="   bg-gray-200 p-2 gap-5 my-4 w-[300px] h-[500px] hover:bg-gray-250 hover:border-black hover:border-[1px] cursor-pointer hover:rounded-md">
             <img className="w-[300px] h-[300px] p-2" src={CLOUD_URL + cloudinaryImageId } alt="" /> 
             <h1 className="font-bold p-2"> {name} </h1>
             <h1  className="font-bold p-2"> {costForTwo} </h1>
             <h1  className="font-bold p-2"> {avgRatingString} <i class="fa-solid fa-star"></i></h1>
             <p> {cuisines.join(" , ")} </p>
        </div> 
     )
}

export default Restaurants;