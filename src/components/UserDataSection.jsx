import React from "react"
import UserCard from "./UserCard"

const UserDataSection = ({ users }) => {
	return (
		<div className='grid grid-flow-row-dense grid-cols-3 p-12 gap-8 max-md:grid-cols-2  max-sm:grid-cols-1'>
			{users.map(
				(user) => (
					<UserCard key={user.id} user={user} />
				) // inline style used to load card asyncronously
			)}
		</div>
	)
}

export default UserDataSection
