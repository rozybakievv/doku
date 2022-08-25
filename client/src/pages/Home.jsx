import Navbar from '../components/Navbar';

const Home = () => {
	return (
		<div className='w-full'>
			<Navbar/>

			{/* home content */}
			<div className='grid-home-layout mt-20'>
				{/* main content */}
				<div>
					main
				</div>

				{/* side content */}
				<div className='border-4 border-lime-400 rounded-xl p-4 flex flex-col'>
					<div className='rounded-xl p-2 font-bold text-xl'>Tutorial</div>

					<iframe title='tutorial' width="full" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
				</div>
			</div>
		</div>
	)
}

export default Home