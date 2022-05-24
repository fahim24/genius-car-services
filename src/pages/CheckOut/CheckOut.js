import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useServiceDetail from "../../hooks/useServiceDetail";
import PageTitle from "../Shared/PageTitle/PageTitle";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
	const { serviceId } = useParams();
	const [service] = useServiceDetail(serviceId);
	const [user] = useAuthState(auth);

	const handlePlaceOrder = (event) => {
		event.preventDefault();
		const order = {
			email: user.email,
			service: service.name,
			serviceId: serviceId,
			address: event.target.address.value,
			phone: event.target.phone.value,
		};
		axios.post("https://desolate-woodland-86317.herokuapp.com/order", order).then((response) => {
			const { data } = response;
			if (data.insertedId) {
				toast("Your order is booked!!!");
				event.target.reset();
			}
		});
	};

	return (
		<div className="w-50 mx-auto">
			<PageTitle title="Check out"></PageTitle>
			<h2>Please Checkout your booking for {service.name}</h2>
			<form onSubmit={handlePlaceOrder}>
				<input
					className="w-100 mb-2"
					type="text"
					value={user?.displayName}
					name="name"
					placeholder="name"
					required
					readOnly
					disabled
				/>
				<br />
				<input
					className="w-100 mb-2"
					type="email"
					value={user?.email}
					name="email"
					placeholder="email"
					required
					readOnly
					disabled
				/>
				<br />
				<input
					className="w-100 mb-2"
					type="text"
					value={service.name}
					name="service"
					placeholder="service"
					required
					readOnly
				/>
				<br />
				<input
					className="w-100 mb-2"
					type="text"
					name="address"
					placeholder="address"
					autoComplete="off"
					required
				/>
				<br />
				<input className="w-100 mb-2" type="text" name="phone" placeholder="phone" required />
				<br />
				<input className="btn btn-primary" type="submit" value="Place Order" />
			</form>
		</div>
	);
};

export default Checkout;
