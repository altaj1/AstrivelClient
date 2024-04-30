import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {

    const spot = useLoaderData();
    const {countryName, spotName, photo, cost, visitors, description, seasonality,
        location, travelTime, _id} =spot;
    console.log(spot)
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
	
			
			<img src={photo} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-md" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">
                {spotName}
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">{description}
			</p>
			<div className=" font-medium flex-col space-y-7 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<p className="text-3xl font-bold">Countri Name: {countryName}</p>
				<p>Location: {location}</p>
				<p>Avareg Cont: {cost}</p>
				<p>Visitors: {visitors}</p>
				<p>Seasonality: {seasonality}</p>
				<p>Travel Time:{travelTime}</p>

			</div>
		</div>
	</div>
</section>
    );
};

export default ViewDetails;