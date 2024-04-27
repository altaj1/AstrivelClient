import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import { AuthContext } from "../Authprovider/AuthProvider";
import HomeCard from "./HomeCard/HomeCard";

const Home = () => {
    const spots = useLoaderData();
   
    const first6Spots = spots.slice(0,6);
    console.log(first6Spots)
    return (
        <div>
        <Banner></Banner>



        {/* Home Card */}
        <div className="text-center mt-12">
            <h1 className="text-4xl font-bold">Tourists Spots</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto pt-10 w-[70%] justify-around lg:pl-20 gap-5 text-start">
            {
                first6Spots.map((spot, idx)=><HomeCard key={idx} spot={spot}></HomeCard>)
            }
        </div>
        </div>


        </div>
    );
};

export default Home;