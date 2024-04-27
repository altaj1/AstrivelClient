import { Link } from "react-router-dom";


const MyListcard = ({spot, idx}) => {
    const {countryName, spotName, photo, cost, visitors, description, seasonality,
        location, travelTime, _id} =spot;
        
    return (
        
          
           
            <tr>
              <th>{idx +1}</th>
              <td>{countryName}</td>
              <td>{spotName}</td>
              <td>{visitors}</td>
              <td>{cost}$</td>
              <td><Link to='/update' className="btn">Update</Link></td>
              <td><button  className="btn bg-red-300">Delete</button></td>
              
            </tr>
            // row 2
            // <tr className="hover">
            //   <th>2</th>
            //   <td>Hart Hagerty</td>
            //   <td>Desktop Support Technician</td>
            //   <td>Purple</td>
            // </tr>
            // {/* row 3 */}
            // <tr>
            //   <th>3</th>
            //   <td>Brice Swyre</td>
            //   <td>Tax Accountant</td>
            //   <td>Red</td>
            // </tr>
          
       
     
    );
};

export default MyListcard;