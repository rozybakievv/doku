import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

export const UserContext = React.createContext();

const App = () => {
	const [token, setToken] = useState('');
	const tokenMethod = { token, setToken };
	const [user, setUser] = useState({});
	const userMethod = { user, setUser };

	return (
		<div className='px-12 py-8'>
			<UserContext.Provider value={{ tokenMethod, userMethod }}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home/>} />
						<Route path='/profile' element={<Profile/>} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</div>
	);
}

export default App