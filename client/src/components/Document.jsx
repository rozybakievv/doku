const Document = (props) => {
	return (
		<div className='border-2 border-black w-full p-4 mb-4 rounded-xl h-80 hover:translate-y-2 ease-in-out duration-200'>
			{/* document title */}
			<div className='text-xl font-bold'>{props.title}</div>

			{/* author */}
			<div className='italic text-sm'>
				By Roro Roro
			</div>

			{/* description */}
			<div className='mt-4'>alsdkjngfasdgafhf aksjlghkjdfbhglksdfhbjkl najklsfng klasjg nfjksagnk</div>
		</div>
	)
}

export default Document