import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import MyListcard from "./MyListcard";

const MyList = () => {
  const [spots, setSpots] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:4000/my-list/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, [user]);
  return (
    <div className="overflow-x-auto">
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
        {spots.map((spot, idx) => (
          <MyListcard key={idx} spot={spot} idx={idx}></MyListcard>
        ))}
        </tbody>
       
      </table>
    </div>
  );
};

export default MyList;
