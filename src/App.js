import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Header from "./pages/Shared/Header/Header";
import Footer from "./pages/Shared/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/about" element={<About></About>}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
