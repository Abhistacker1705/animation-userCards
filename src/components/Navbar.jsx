import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
const Navbar = ({ setUsers, userDatas, setUserDatas, setLoading }) => {
	const [dataFetchedFlag, setDataFetchedFlag] = useState(false) // flag to avoid fetching again when button is clicked

	useEffect(() => {
		setDataFetchedFlag(false)
	}, [])

	// add an animation effect while loading so adding users to array with a delay
	useEffect(() => {
		userDatas.forEach((user) => {
			setTimeout(() => {
				setUsers((prevUsers) => [...prevUsers, user])
			}, user.id * 200 + 500)
		})
	}, [userDatas])

	const fetchData = () => {
		// checking if already fetched or not
		if (dataFetchedFlag) {
			return
		}
		setLoading(true)
		axios.get("https://reqres.in/api/users?page=1").then((res) => {
			setUserDatas(res.data.data)
			setDataFetchedFlag(true)
			setLoading(false)
		})
	}

	return (
		<div className='flex justify-between max-w-screen px-12 py-6 bg-slate-800 text-slate-200'>
			<h1 className='text-blue-200 text-3xl font-bold max-[400px]:hidden'>BrandLogo</h1>
			<h1 className='text-blue-200 text-3xl font-bold min-[400px]:hidden'>B.</h1>
			<button className='bg-blue-200 text-black px-5 rounded-full ' onClick={fetchData}>
				Get Users
			</button>
		</div>
	)
}

export default Navbar
