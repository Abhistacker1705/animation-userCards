import React from "react"

const UserCard = ({ user }) => {
	return (
		<div className='flex flex-col p-4 bg-blue-100 h-96 justify-start items-center rounded-3xl drop-shadow-xl transition-all duration-500 animate-fadeIn hover:drop-shadow-[0_15px_15px_#00000077]'>
			<div className='rounded-full bg-gray-400 h-24 w-24'>
				<img
					className='rounded-full transition-all duration-300 hover:scale-110'
					src={user.avatar}
					alt='Avatar of user'
				/>
			</div>
			<h2 className='text-xl mt-8 font-medium'>
				{user.first_name} {user.last_name}
			</h2>
			<p className='text-base mt-2 opacity-60'>{user.email}</p>
		</div>
	)
}

export default UserCard
