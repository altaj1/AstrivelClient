import { useLoaderData } from "react-router-dom";
import CountriDeatilCard from "../CountriDeatileCard/CountriDeatilCard";


const CountriDeatile = () => {
    const loaderData = useLoaderData()
    return (
        <div className="text-center mt-12">
             <h1 className="text-4xl font-bold">Spasafice Country Information</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto pt-10 w-[70%] justify-around lg:pl-20 gap-5 text-start">
            {
                loaderData.map((spot, idx)=> <CountriDeatilCard key={idx} spot={spot} ></CountriDeatilCard>)
            }
        </div>
        </div>
    );
};

export default CountriDeatile;