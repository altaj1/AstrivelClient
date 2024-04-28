import { useLoaderData } from "react-router-dom";
import TouristCard from "../TouristCard/TouristCard";
import { useState } from "react";


const AllTorisetSpot = () => {
    const allTorisetSpot = useLoaderData();
    const [spots, setSpots] = useState(allTorisetSpot);
    const [relode, setRelode] = useState(false)
 
    const handeleSort =()=>{
       const result =  [...allTorisetSpot].sort((a, b)=>{
       
        return b.cost - a.cost;
        
       })
       setSpots(result)
       console.log(result)
    }
    console.log(spots)
    return (
       <div className=" mt-12">
        <div className="flex justify-around items-center">
        <h1 className="text-4xl font-bold">All Tourist Spots Information</h1>
        <button onClick={handeleSort} className="btn font-bold">Sort Average Cost</button>
        </div>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto pt-10 w-[70%] justify-around lg:pl-20 gap-5">
            {
                spots.map((spot, idx)=><TouristCard 
                key={idx}
                spot={spot}
                
                ></TouristCard>)
            }
        </div>
       </div>
    );
};

export default AllTorisetSpot;