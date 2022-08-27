import Navbar from '../components/Navbar';
import Document from '../components/Document';

const Home = () => {
	return (
		<div>
			<Navbar/>

			{/* home content */}
			<div className='mt-20'>
				{/* main content */}
				<div>
					{/* search & filter bar */}
					<div className='flex flex-row items-center'>
						{/* search bar */}
						<input type="Search" placeholder='Search for a document' className='block w-1/3 rounded-xl border-4 border-violet-600 outline-none duration-200 p-2 hover:border-violet-500 placeholder:italic placeholder:text-slate-400 '/>

						{/* filter */}
						<div className='ml-8 rounded-xl bg-violet-600 px-4 py-3 text-white hover:cursor-pointer duration-200'>New</div>
						<div className='ml-8 rounded-xl px-4 py-3 border-2 border-violet-600 hover:cursor-pointer hover:border-violet-400 duration-200'>Popularity</div>
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