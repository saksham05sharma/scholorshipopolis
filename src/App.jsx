import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ContactUs from "./pages/ContactUs/ContactUs";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/contact" element={<ContactUs />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
