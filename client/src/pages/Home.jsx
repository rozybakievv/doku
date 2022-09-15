import Navbar from '../components/Navbar';
import Document from '../components/Document';
import LoginModal from '../components/LoginModal';
import { useState } from 'react';

const Home = () => {
	const [closed, setClosed] = useState(true);

	// function that takes the data from child component loginmodal and sets the closed to true if cancel is pressed on modal
	const callbackStateModal = (data) => {
		setClosed(data);
	}

	return (
		<div>
			<Navbar open={callbackStateModal}/>

			{ closed === false ? <LoginModal close = {callbackStateModal}/> : <div></div> }

			{/* home content */}
			<div className='mt-20'>
				{/* main content */}
				<div>
					{/* search & filter bar */}
					<div className='flex flex-row items-center'>
						{/* search bar */}
						<input type="Search" placeholder='Search for a document' className='block w-1/3 rounded-xl border-4 outline-none duration-200 p-2 placeholder:italic text-black'/>

						{/* filter */}
						<div className='ml-8 rounded-md bg-gradient-to-r from-indigo-300 to-purple-400 px-4 py-2 text-white hover:cursor-pointer duration-200 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2'>New</div>
						<div className='ml-8 px-4 py-2 hover:cursor-pointer duration-200 bg-zinc-800 rounded-md hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2'>Popularity</div>
					</div>

					{/* documentation results filtered */}
					<div className='mt-8 grid grid-cols-1 md:grid-rows-4 md:grid-cols-5 gap-4'>
						<Document title="Document"/>
						<Document title="Document"/>
						<Document title="Document"/>
						<Document title="Document"/>
						<Document title="Document"/>
						<Document title="Document"/>
						<Document title="Document"/>
						<Document title="Document"/>
						<Document title="Document"/>
						<Document title="Document"/>
						<Document title="Document"/>
						<Document title="Document"/>
						<Document title="Document"/>
						<Document title="Document"/>
						<Document title="Document"/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home