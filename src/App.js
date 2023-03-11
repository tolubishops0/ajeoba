import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OverView from './Components/OverView';
import Tickets from './Components/Tickets';
import { useState } from 'react';

function App() {
	const [sideBar, setSideBar] = useState(false);

	const handleSideBar = () => {
		setSideBar(!setSideBar);
	};

	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={<OverView sideBar={sideBar} handleSideBar={handleSideBar} />}
				/>
				<Route
					path="/tickets"
					element={<Tickets sideBar={sideBar} handleSideBar={handleSideBar} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
