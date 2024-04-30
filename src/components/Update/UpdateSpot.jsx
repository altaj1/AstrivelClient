import { useContext, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import { AuthContext } from "../Authprovider/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";


const UpdateSpot = () => {

  
    const spot = useLoaderData();
    console.log(spot)

    const {user, setUser} = useContext(AuthContext);
    // const {displayName, email,  photoURL } = user;

    const displayName = user?.displayName;
    const email = user?.email;
    const photoURL = user?.photoURL;
    const notify = () => toast("Congratulations Update Successfully!!");
    
   
    const {countryName, spotName, photo, cost, visitors, description, seasonality,
      location, travelTime, _id} =spot;

    const handelSubmitt = (e, _id)=>{
        e.preventDefault()
        console.log("ouch")
        const form = e.target;
        const countryName = form.countryName.value;
        
        const spotName = form.spotName.value;
        
        const photo = form.photo.value;
        
        const cost = form.cost.value;
        
        const visitors = form.visitors.value;
       
        const description = form.description.value;
       
        const seasonality = form.seasonality.value;
        
        const location = form.location.value;
       
        const travelTime = form.travel_time.value;

        const addTouristsSpot = {countryName, spotName, photo, cost, visitors, description, seasonality,
            location, travelTime, displayName, email,  photoURL}
            // console.log(addTouristsSpot)
            fetch(`https://astrovel-server.vercel.app/update/${_id}`,{
                method: 'PUT',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(addTouristsSpot)
            })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                if (res.modifiedCount > 0) {
                    notify()
                }
            })

    }


    useEffect(()=>{
        if(user){
          setUser(user)
        }
      },[user])
    return (
        <div>
        <div className="text-center">
            <h1 className="text-4xl font-bold opacity-85">
            <Typewriter
                  delaySpeed={500}
                  deleteSpeed={10}
                  loop={1}
                  typeSpeed={200}
                  words={["  Update Tourists Spot...!"]}
                />
             </h1>
        </div>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
        <form
          onSubmit={(e)=>{
            
            handelSubmitt( e,_id)}}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium"> <Typewriter
                delaySpeed={500}
                deleteSpeed={10}
                loop={1}
                typeSpeed={200}
                words={[
                    "Update Tourist Spot...!",
                ]}
              /></p>
              <p className="text-xs">
              Stay informed with real-time notifications on events, weather, and special offers, ensuring you never miss out on the latest happenings during your travels.
              </p>
            </div>
            <div className="grid grid-cols-6 space-x-5 gap-y-12 font-semibold gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label  className="text-sm">
                  Country Name
                </label>
                <input
                defaultValue={countryName}
                readOnly
                disabled
                  id="firstname"
                  name="countryName"
                  type="text"
                  placeholder="  Country Name"
                  className="w-full rounded-md text-black  focus:outline-none"
                />
                <hr />
              </div>
              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="lastname" className="text-sm">
                Tourists Spot Name
                </label>
                <input
                defaultValue={spotName}
                
                  name="spotName"
                  id="lastname"
                  type="text"
                  placeholder="    Tourists Spot Name"
                  className="w-full rounded-md text-black  focus:outline-none"
                />
                <hr />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label  className="text-sm">
                 Photo ( Use Photo URL)
                </label>
                <input
                  name="photo"
                  defaultValue={photo}
                
                  type="url"
                  placeholder="     Photo ( Use Photo URL)"
                  className="w-full rounded-md text-black  focus:outline-none"
                />
                <hr />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label  className="text-sm">
                Average Cost
                </label>
                <input
                  name="cost"
                  defaultValue={cost}
                
                  type="number"
                  placeholder="    Average Cost"
                  className="w-full rounded-md text-black  focus:outline-none"
                />
                <hr />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">
                Tota Visitors Per Year
                </label>
                <input
                  name="visitors"
                  defaultValue={visitors}
               
                  type="text"
                  placeholder="     Tota Visitors Per Year"
                  className="w-full rounded-md text-black  focus:outline-none"
                />
                <hr />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">
                Description
                </label>
                <input
                  name="description"
                  defaultValue={description}
               
                  type="text"
                  placeholder="    Description"
                  className="w-full rounded-md  text-black focus:outline-none"
                />
                <hr />
              </div>
              
              

              <div className="col-span-full sm:col-span-2">
              <label htmlFor=" seasonality " className="text-sm">
              Seasonality 
                </label>
                <input
                 name="seasonality"
                 defaultValue={seasonality}
                
                  type="text"
                  placeholder="    Seasonality "
                  className="w-full rounded-md text-black   focus:outline-none"
                />
                <hr />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="location" className="text-sm">
                  Location
                </label>
                <input
                defaultValue={location}
                
                  name="location"
                  id=""
                  type="text"
                  placeholder="    Location"
                  className="w-full rounded-md  text-black focus:outline-none"
                />
                <hr />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor=" travel_time" className="text-sm">
                Travel Time
                </label>
                <input
                defaultValue={travelTime}
                
                 name="travel_time"
                  type="text"
                  placeholder="    Travel Time"
                  className="w-full rounded-md  text-black focus:outline-none"
                />
                <hr />
              </div>
              
              
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-bold">Profile</p>
              <p className="text-xs">{user?.displayName}</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
                  User Name
                </label>
                <input
                  
                  type="text"
                  defaultValue={user?.displayName}
                  className="w-full rounded-md   focus:outline-none"
                  readOnly
                  disabled
                />
                <hr />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm">
                  Email
                </label>
                <input
                  id="website"
                  type="text"
                  defaultValue={user?.email}
                  className="w-full rounded-md   focus:outline-none"
                  readOnly
                  disabled
                />
                <hr />
              </div>
             
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm m-4">
                  {displayName}
                </label>
                <div className="flex items-center space-x-2">
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 border rounded-md dark:border-gray-800"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
    );
};

export default UpdateSpot;