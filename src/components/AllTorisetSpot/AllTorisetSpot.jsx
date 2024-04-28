import { useLoaderData } from "react-router-dom";
import TouristCard from "../TouristCard/TouristCard";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";


const AllTorisetSpot = () => {
    const allTorisetSpot = useLoaderData();
    const [spots, setSpots] = useState(allTorisetSpot);
    const handeleSort =()=>{
       const result =  [...allTorisetSpot].sort((a, b)=>{
       
        return b.cost - a.cost;
        
       })
       setSpots(result)
       console.log(result)
    }
    console.log(spots)
    return (
       <div className=" pt-16 text-center ">
        <div className=" lg:flex justify-around space-y-8 items-center">
        <h1 className="text-4xl font-bold lg:pl-24">
        <Typewriter
                  delaySpeed={500}
                  deleteSpeed={10}
                  loop={1}
                  typeSpeed={200}
                  words={["  All Tourist Spots Information"]}
                />
           </h1>
        <button onClick={handeleSort} className="btn font-bold">Sort Average Cost</button>
        </div>
         <div className="grid text-start lg:grid-cols-3 md:grid-cols-2 mx-auto pt-10 w-[70%] justify-around lg:pl-20 gap-5">
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