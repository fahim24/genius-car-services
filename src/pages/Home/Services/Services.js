import React from "react";
import Service from "../Service/Service";
import "./Services.css";
import useServices from "../../../hooks/useServices";

const Services = () => {
	const [services] = useServices();

	return (
		<div id="services" className="container">
			<h2 className="text-primary text-center my-5">Our Services</h2>
			<div className="services-container">
				{services.map((service) => (
					<Service key={service._id} service={service}></Service>
				))}
			</div>
		</div>
	);
};

export default Services;
