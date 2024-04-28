import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import MyListcard from "./MyListcard";
import { Typewriter } from "react-simple-typewriter";

const MyList = () => {
  const [spots, setSpots] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:4000/my-list/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, []);
  return (
   <div className="text-center p-14"> 
     <h1 className="text-4xl font-bold opacity-85">
            <Typewriter
                  delaySpeed={500}
                  deleteSpeed={10}
                  loop={1}
                  typeSpeed={200}
                  words={["  Update Tourists Spot...!"]}
                />
             </h1>
     <div className="overflow-x-auto pb-14">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Country</th>
            <th>Tourists Spot Name</th>
            <th>Visitors Per Year</th>
            <th>Average Cost</th>
            <th>Update</th>
            <th>Delete</th>


          </tr>
        </thead>
        <tbody>
        {spots.map((spot, idx, ) => (
          <MyListcard 
          spots={spots}
          key={idx} 
          spot={spot} 
          idx={idx}
          setSpots={setSpots}
          ></MyListcard>
        ))}
        </tbody>
       
      </table>
    </div>
   </div>
  );
};

export default MyList;
