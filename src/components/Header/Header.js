import React, { useState, useEffect } from 'react'
import './Header.css'
import {
	BrowserRouter, Link, useMatch,
	useResolvedPath
} from "react-router-dom";

const Header = () => {
	let isReadingLists = useMatch("/reading-lists");
	;

	return (

		<header>
			<Link to="/" className='flex'><img src="https://www.google.com/intl/en_ALL/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" className='logo' />
				<h5>Books</h5>
			</Link>

			<Link to="reading-lists">	<p className={`${isReadingLists ? 'active-link' : ''} reading-list`} >Reading List</p></Link>
		</header>
	)
}

export default Header