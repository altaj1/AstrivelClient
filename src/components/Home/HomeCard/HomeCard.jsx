import { Link } from "react-router-dom";


const HomeCard = ({spot}) => {
    const {countryName, spotName, photo, cost, visitors, description, seasonality,
        location, travelTime, _id} =spot;
    return (
        <div className="card card-compact lg:w-96  shadow-xl">
        <figure>
          <img className="lg:w-full lg:h-72"
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{spotName}</h2>
          <hr />
          
              <div className=" space-y-2">
                  <p className="font-semibold">Average Cost: {cost}$</p>
                  <p className="font-semibold">Tota Visitors Per Year: {visitors}$</p>
              
                  <p className="font-semibold">Travel Time: {travelTime}</p>
                  <p className="font-semibold">Seasonality: {seasonality}$</p>
              </div>
              <hr />
          
          <div className="card-actions justify-end">
            
            <Link to={`/view-deatils/${_id}`} className="btn   hover:bg-slate-500 ">View Details</Link>
          </div>
        </div>
      </div>
    );
};

export default HomeCard;