/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyListcard = ({spot, idx, spots, setSpots }) => {
    
    const {countryName, spotName, photo, cost, visitors, description, seasonality,
        location, travelTime, _id} =spot;

        
    const handeleDelete = (_id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then(result =>{
            if(result.isConfirmed)
            {
                console.log(result)
                console.log(_id)
                fetch(`https://astrovel-server.vercel.app/delete/${_id}`,{
                    method:'DELETE'
                })
                .then(res =>res.json())
                .then(data =>{
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Tourist Spot Has Been Deleted.',
                            'success'
                        )
                        const remaining = spots.filter(spot => spot._id !== _id);
                        setSpots(remaining);
                    }
                })
            }
        })
    }
        
    return (

            <tr>
              <th>{idx +1}</th>
              <td>{countryName}</td>
              <td>{spotName}</td>
              <td>{visitors}</td>
              <td>{cost}$</td>
              <td><Link to={`/update/${_id}`} className="btn">Update</Link></td>
              <td><button onClick={()=>handeleDelete(_id)}  className="btn bg-red-300">Delete</button></td>
              
            </tr>
          
       
     
    );
};

export default MyListcard;