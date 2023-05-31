import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Layout from '../containers/layout' 
import Login from '../containers/login';
import RecoveryPassword from '../containers/RecoveryPassword';
import AppContext from '@context/AppContext';


import Home from '../pages/Home'
import Clothes from '../pages/Clothes'
import NotFound from '../pages/NotFound';
import Others from '../pages/Others';
import Toys from '../pages/Toys';
import Furnitures from '../pages/Furnitures';
import Electronics from '../pages/Electronics';

import '../styles/global.css';
import useInitialState from '@hooks/useInitialState'

const App = () => {
	const initialState = useInitialState()
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/clothes" element={<Clothes />} />
					<Route exact path="/electronics" element={<Electronics />} />
					<Route exact path="/furnitures" element={<Furnitures />} />
					<Route exact path="/toys" element={<Toys />} />
					<Route exact path="/others" element={<Others />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/recovery-password" element={<RecoveryPassword />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;