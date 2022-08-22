import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="flex flex-wrap items-center justify-between px-12 py-8">
			{/* title */}
			<div className="flex items-center flex-shrink-0">
				<Link to="/">
					<h1 className="text-3xl font-bold">doku</h1>
				</Link>
			</div>

			{/* burger menu */}
			<div className="block md:hidden">
				<button className="flex items-center px-3 py-2 text-black border border-black rounded border-2">
					<svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
				</button>
			</div>

			
			<div className="items-center flex-grow hidden w-full md:flex md:items-center md:w-auto">
				<div className="md:flex-grow"></div>
				<div>
					<Link to="/register">
						<button type="button" className="block mr-8 md:inline-block md:mt-0">
							register
						</button>
					</Link>
					<Link to="/login">
						<button type="button" className="block md:inline-block md:mt-0 px-4 py-2 rounded-lg bg-indigo-200 border-indigo-500 hover:border-2">
							login
						</button>
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar