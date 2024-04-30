import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomeCard from "./HomeCard/HomeCard";
import {  useEffect, useState } from "react";
import CountryCard from "./CountryCard/CountryCard";
import { Typewriter } from "react-simple-typewriter";
import CustomersSay from "../CustomersSay/CustomersSay";
import WhyTravelWithUs from "./WhyTravelWithUS/WhyTravelWithUs";


const Home = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const spots = useLoaderData();
   
    const first6Spots = spots.slice(0,6);
   
    useEffect(()=>{
        fetch('https://astrovel-server.vercel.app/all-country')
        .then(res=>res.json())
        .then(data =>{
            // setLoading(!loading)
            setCountries(data)
            
        })
    },[])

    if(loading){
         <div className="text-center"> <span className="loading loading-spinner loading-lg"></span></div>
    }
    
    console.log(countries)
    return (
        <div>
        <Banner></Banner>
        {/* Home Card */}
        <div className="text-center mt-12">
            <h1 className="text-4xl font-bold">
            <Typewriter
                delaySpeed={500}
                deleteSpeed={10}
                loop={1}
                typeSpeed={200}
                words={[
                    "Tourists Spots",
                ]}
              />
                Tourists Spots</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto pt-10 w-[70%] justify-around lg:pl-20 gap-5 text-start">
            {
                first6Spots.map((spot, idx)=><HomeCard key={idx} spot={spot}></HomeCard>)
            }
        </div>
        <div className="text-center mt-12">
        <h1 className="text-4xl font-bold">
        <Typewriter
                delaySpeed={500}
                deleteSpeed={10}
                loop={1}
                typeSpeed={200}
                words={[
                    "Cuntries",
                ]}
              />
            Cuntries</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto pt-10 w-[70%] justify-around lg:pl-20 gap-5 text-start">
        {
            countries.map((countri, idx)=><CountryCard key={idx} countri={countri} ></CountryCard>)
        }
        </div>
        </div>
        <div>
           {
            <WhyTravelWithUs></WhyTravelWithUs>
           }
           </div>

           <div className="pt-11 "> 
            <div>
                <h1 className="text-6xl pb-16">Customer Say About Us</h1>
            </div>
            {
                <CustomersSay/>
            }
           </div>
        </div>

          
        </div>
    );
};

export default Home;