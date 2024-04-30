import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";

const CountryCard = ({countri}) => {
    const {countryName, description, flag} = countri;
    return (
      
     <div>
       <Slide>
      <Link 
      to={`/countri-deatiel/${countryName}`}>
        <div className="card card-compact lg:w-96  shadow-xl">
        <figure>
          <img className="w-full h-72"
            src={flag}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> Countri Name:{countryName}</h2>
          <hr />
          
              <div className=" space-y-2">
                  <p className="font-semibold">Average Cost: {description}$</p>
                 
              </div>
              <hr />
          
          <div className="card-actions justify-end">
            
            <Link  className="btn   hover:bg-slate-500 ">View Details</Link>
          </div>
        </div>
      </div>
      </Link>
    </Slide>
    
    
     </div>
    
    );
};

export default CountryCard;