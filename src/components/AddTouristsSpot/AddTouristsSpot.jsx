import { useContext, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../Authprovider/AuthProvider";
import { toast } from "react-toastify";


const AddTouristsSpot = () => {
    const {user, setUser} = useContext(AuthContext);
    // const {displayName, email,  photoURL } = user;
    const displayName = user?.displayName;
    const email = user?.email;
    const photoURL = user?.photoURL;
    const notify = () => toast("Congratulations Added Successfully!!");

    const handelSubmitt = (e)=>{
        e.preventDefault()
        
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
            fetch("http://localhost:4000/add-tourists",{
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(addTouristsSpot)
            })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                if (res.acknowledged) {
                    notify()
                }
            })

    }
    // console.log(user)
    useEffect(()=>{
        if(user){
          setUser(user)
        }
      },[user])
  return (
    <div>
        <div className="text-center">
            <h1 className="text-4xl font-bold opacity-85">Add Tourists Spot</h1>
        </div>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
        <form
          onSubmit={handelSubmitt}
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
                    "Country Information...!",
                ]}
              /></p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div className="grid grid-cols-6 space-x-5 gap-y-12 font-semibold gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label  className="text-sm">
                  Country Name
                </label>
                <input
                  id="firstname"
                  name="countryName"
                  type="text"
                  placeholder="  Country Name"
                  className="w-full rounded-md   focus:outline-none"
                />
                <hr />
              </div>
              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="lastname" className="text-sm">
                Tourists Spot Name
                </label>
                <input
                  name="spotName"
                  id="lastname"
                  type="text"
                  placeholder="    Tourists Spot Name"
                  className="w-full rounded-md   focus:outline-none"
                />
                <hr />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label  className="text-sm">
                 Photo ( Use Photo URL)
                </label>
                <input
                  name="photo"
                  
                  type="url"
                  placeholder="     Photo ( Use Photo URL)"
                  className="w-full rounded-md   focus:outline-none"
                />
                <hr />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label  className="text-sm">
                Average Cost
                </label>
                <input
                  name="cost"
                  
                  type="number"
                  placeholder="    Average Cost"
                  className="w-full rounded-md   focus:outline-none"
                />
                <hr />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">
                Tota Visitors Per Year
                </label>
                <input
                  name="visitors"
                  
                  type="text"
                  placeholder="     Tota Visitors Per Year"
                  className="w-full rounded-md   focus:outline-none"
                />
                <hr />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">
                Description
                </label>
                <input
                  name="description"
                  
                  type="text"
                  placeholder="    Description"
                  className="w-full rounded-md   focus:outline-none"
                />
                <hr />
              </div>
              
              

              <div className="col-span-full sm:col-span-2">
              <label htmlFor=" seasonality " className="text-sm">
              Seasonality 
                </label>
                <input
                 name="seasonality"
                  type="text"
                  placeholder="    Seasonality "
                  className="w-full rounded-md   focus:outline-none"
                />
                <hr />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="location" className="text-sm">
                  Location
                </label>
                <input
                  name="location"
                  id=""
                  type="text"
                  placeholder="    Location"
                  className="w-full rounded-md   focus:outline-none"
                />
                <hr />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor=" travel_time" className="text-sm">
                Travel Time
                </label>
                <input
                 name="travel_time"
                  type="text"
                  placeholder="    Travel Time"
                  className="w-full rounded-md   focus:outline-none"
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
                <label htmlFor="bio" className="text-sm">
                  Photo
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
                    Submit
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

export default AddTouristsSpot;
