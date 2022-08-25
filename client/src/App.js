import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
	return (
		<div className='px-12 py-8'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/register' element={<Register/>} />
					<Route path='/login' element={<Login/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App