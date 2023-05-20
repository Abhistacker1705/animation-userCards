import React, { useState } from "react"
import Navbar from "./components/Navbar"
import UserDataSection from "./components/UserDataSection"
import Loading from "./components/Loading"
function App() {
	const [userDatas, setUserDatas] = useState([])
	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState([])

	return (
		<div className='App'>
			<Navbar setUsers={setUsers} userDatas={userDatas} setUserDatas={setUserDatas} setLoading={setLoading} />
			{loading ? <Loading /> : <UserDataSection users={users} />}
		</div>
	)
}

export default App
