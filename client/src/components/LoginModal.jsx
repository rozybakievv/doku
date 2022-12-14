import { useState } from "react"
import { useContext } from "react";
import { UserContext } from "../App";

const LoginModal = (props) => {
	// retrieve context method variables from /App
	const { tokenMethod, userMethod } = useContext(UserContext);
	const [info, setInfo] = useState({ email: '', password: '' });

	const inputHandler = (e) => {
		e.preventDefault();
		setInfo((prevState) => ({
			...prevState,
			[e.target.name] : e.target.value
		})) // set info variable of inputs depending on the name of the element by replacing previous state to new state
	}

	const close = () => {
		props.close(true);
	}

	const auth = async(email, password) => {
		const body = {email: email, password: password};
	
		const response = await fetch("/api/users/login/", {
			method: 'POST',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' },
		});
	
		if (response.ok) {
			const data = await response.json();
			tokenMethod.setToken(data.token);
			userMethod.setUser(data.user);
		} else {
			alert(response.error);
		}
	}

	const authenticate = (e) => {
		// verify if inputs are not empty
		if(info.email === "" || info.password === "") {
			e.preventDefault();
			console.log("please enter email and password")
		} else {
			auth(info.email, info.password);
			close();
		}
	}

	return (
		<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
			<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

			<div className="fixed inset-0 z-10 overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
						<div className="bg-zinc-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							{/* username input */}
							<div className="p-2">
								<input onChange={inputHandler} name="email" type="text" placeholder="Email" className="p-2 rounded-md text-black w-full"/>
							</div>

							{/* password input */}
							<div className="p-2 my-3">
							<input onChange={inputHandler} type="password" name="password" placeholder="Password" className="p-2 rounded-md text-black w-full"/>
							</div>
						</div>

						{/* button cancel and login */}
						<div className="bg-zinc-800 px-4 pb-6 sm:flex sm:flex-row-reverse sm:px-6">
							<button type="button" onClick={authenticate} className="inline-flex mr-2 duration-200 w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-indigo-300 to-purple-400 px-4 text-base font-medium text-white shadow-sm hover:opacity-80 hover:outline-none hover:ring-2 hover:ring-indigo-300 hover:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
								<svg width="30pt" height="30pt" version="1.1" viewBox="0 0 752 752" xmlns="http://www.w3.org/2000/svg">
								<path d="m537.02 375.98c-0.13281-3.3867-1.5273-7.3008-3.8477-9.7695l-75.773-80.512c-5.1328-4.6133-14.98-6.5195-20.719-1.1836-5.6523 5.2539-5.4844 15.445 0.14844 20.719l53.277 56.535h-260.91c-7.8477 0-14.207 6.3633-14.207 14.207 0 7.8477 6.3594 14.207 14.207 14.207h260.91l-53.277 56.535c-4.8477 4.8555-5.7422 15.406-0.14844 20.719 5.5977 5.3125 15.797 3.6172 20.719-1.1836l75.773-80.512c2.5938-2.7539 3.8555-5.9883 3.8477-9.7695z" fill="#fff"/>
								</svg>
							</button>
							<button type="button" onClick={close} className="items-center duration-200 inline-flex w-full justify-center rounded-md px-4 py-2 text-base font-medium shadow-sm hover:opacity-80 sm:mt-0 sm:w-auto sm:text-sm hover:underline">Cancel</button>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginModal