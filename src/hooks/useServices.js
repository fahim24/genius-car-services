import { useEffect, useState } from "react";

const useServices = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("https://desolate-woodland-86317.herokuapp.com/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return [services, setServices];
};

export default useServices;
