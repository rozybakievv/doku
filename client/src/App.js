import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
	return (
		<div className='px-12 py-8'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App