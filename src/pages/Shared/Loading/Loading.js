import React from "react";
import { Spinner } from "react-bootstrap";
import PageTitle from "../PageTitle/PageTitle";

const Loading = () => {
	return (
		<div
			style={{ height: "300px" }}
			className="w-100 d-flex justify-content-center align-items-center"
		>
			<PageTitle title="Loading"></PageTitle>
			<Spinner animation="border" variant="primary" />
		</div>
	);
};

export default Loading;
