import React from "react"

const Loading = () => {
	return (
		<div className='grid grid-flow-row-dense grid-cols-3 p-12 gap-8 max-md:grid-cols-2  max-sm:grid-cols-1'>
			{Array(6)
				.fill(1)
				.map((el, index) => (
					<div
						key={index}
						className='flex flex-col p-4 h-96 bg-blue-100 justify-start items-center rounded-3xl drop-shadow-xl animate-pulse'
					>
						<div className='rounded-full bg-gray-400 h-24 w-24 animate-pulse'></div>
						<div className='bg-gray-400 h-8 w-72 mt-8 animate-pulse'></div>
						<div className='bg-gray-400 h-4 w-72 mt-12 animate-pulse'></div>
					</div>
				))}
		</div>
	)
}

export default Loading
