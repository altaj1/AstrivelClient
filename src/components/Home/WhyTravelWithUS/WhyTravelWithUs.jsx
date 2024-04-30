import Ratting from "../../CustomersSay/Ratting";


const WhyTravelWithUs = () => {
    return (
        <div className="lg:pl-72 lg:pr-72 pt-24"> 
    <h1 className="text-5xl">WHY TRAVEL WITH US</h1>
    
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-10">
        <div >
            {
                <Ratting></Ratting>
            }
            <h1 className="text-3xl">OUR MISSION</h1>
            <p>
            To personalize each trip with experiences that are unique, authentic and a million miles from mass tourism. We care about quality and provide the best of what Seychelles offer.
            </p>
        </div>
        <div>
            {
                <Ratting></Ratting>
            }
            <h1 className="text-3xl">EXPERIENCE</h1>
            <p>
            An excellent reputation for personal services, quality, and value through extensive research and a comprehensive database backed up by years of experience in the travel industry.
            </p>
        </div>
        <div>
            {
                <Ratting></Ratting>
            }
            <h1 className="text-3xl">SERVICES</h1>
            <p>
            We pride ourselves on your satisfaction. A large percentage of our bookings are from repeat clientele while much of our new business is from word-of-mouth recommendations.
            </p>
        </div>
    </div>
   </div>
    );
};

export default WhyTravelWithUs;
