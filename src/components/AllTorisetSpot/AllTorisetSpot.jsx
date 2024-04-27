import { useLoaderData } from "react-router-dom";
import TouristCard from "../TouristCard/TouristCard";


const AllTorisetSpot = () => {
    const allTorisetSpot = useLoaderData();
    console.log(allTorisetSpot)
    return (
       <div>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto pt-10 w-[70%] justify-around lg:pl-20 gap-5">
            {
                allTorisetSpot.map((spot, idx)=><TouristCard 
                key={idx}
                spot={spot}
                
                ></TouristCard>)
            }
        </div>
       </div>
    );
};

export default AllTorisetSpot;