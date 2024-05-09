import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [Services, setServices] = useState([]);

    useEffect( () =>  {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return(
        <div className=" mt-4">
            <div className=" text-center">
            <h3 className="text-3xl text-orange-600">Our Services</h3>
            <h2 className="text-5xl"> Our Services Area</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, nisi. Voluptatem repellendus facere adipisci vitae. Sint magni id nihil. Accusantium exercitationem amet, delectus doloribus harum aliquid iusto incidunt dicta saepe!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    Services.map(Service => <ServiceCard key={Service._id} Service={Service}></ServiceCard>)
                }
            </div>
        </div>
    )
}

export default Services; 