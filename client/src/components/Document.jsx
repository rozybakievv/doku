const Document = (props) => {
	return (
		<div className='border-2 w-full p-4 mb-4 rounded-xl h-80 hover:translate-y-2 ease-in-out duration-200'>
			{/* document title */}
			<div className='text-xl font-bold'>{props.document.title}</div>

			{/* author */}
			<div className='italic text-sm'>
				{props.document.creator}
			</div>

			{/* description */}
			<div className='mt-4'>{props.document.chapters[0].title}</div>
		</div>
	)
}

export default Document