import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

import HomeCard from "./HomeCard/HomeCard";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard/CountryCard";

const Home = () => {
    const [countries, setCountries] = useState([])
    const spots = useLoaderData();
   
    const first6Spots = spots.slice(0,6);
    
    useEffect(()=>{
        fetch('http://localhost:4000/all-country')
        .then(res=>res.json())
        .then(data =>{
            setCountries(data)
        })
    },[])
    console.log(countries)
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
        <div className="text-center mt-12">
        <h1 className="text-4xl font-bold">Cuntries</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto pt-10 w-[70%] justify-around lg:pl-20 gap-5 text-start">
        {
            countries.map((countri, idx)=><CountryCard key={idx} countri={countri} ></CountryCard>)
        }
        </div>
        </div>
        </div>


        </div>
    );
};

export default Home;