import { Link } from "react-router-dom";

const Navbar = (props) => {
	const open = () => {
		props.open(false);
	}

	return (
		<nav className="flex flex-wrap items-center justify-between">
			{/* title */}
			<div className="flex items-center flex-shrink-0">
				<Link to="/">
					<h1 className="text-3xl font-extrabold">doku!</h1>
				</Link>
			</div>

			{/* burger menu */}
			<div className="block md:hidden">
				<button className="flex items-center px-3 py-2 text-black border-black rounded border-2">
					<svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
				</button>
			</div>

			{/* right buttons */}
			<div className="items-center flex-grow hidden w-full md:flex md:items-center md:w-auto">
				<div className="md:flex-grow"></div>
				<div>
					<button type="button" className="block mr-8 md:inline-block md:mt-0 font-bold hover:opacity-80 duration-200">
						register
					</button>
					<button type="button" onClick={open} className="block bg-gradient-to-r from-indigo-300 to-purple-400 md:inline-block md:mt-0 px-6 py-4 duration-200 rounded-xl font-bold hover:border-violet-400 hover:opacity-80 hover:outline-none hover:ring-2 hover:ring-indigo-300 hover:ring-offset-2">
						login
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar