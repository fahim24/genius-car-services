import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Header from "./pages/Shared/Header/Header";
import Footer from "./pages/Shared/Footer/Footer";
import Home from "./pages/Home/Home";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register/Register";

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/home" element={<Home></Home>}></Route>
				<Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
				<Route path="/about" element={<About></About>}></Route>
				<Route path="/login" element={<Login></Login>}></Route>
				<Route path="/register" element={<Register></Register>}></Route>
				<Route path="*" element={<NotFound></NotFound>}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
