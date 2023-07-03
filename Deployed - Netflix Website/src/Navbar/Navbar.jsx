import React, { useEffect, useState } from 'react';
import "./Navbar.scss"

export default function Navbar() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setShow(true)
			} else {
				setShow(false)
			}
		})
		return () => window.removeEventListener("scroll")
	}, []);


	return <div className={`nav ${show && "nav__black"}`}>

		<div className="imageClass">
			<img
				className='nav__logo'
				src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
				alt="Netflix logo" />
		</div>
		<div className="loginSection">
			<select>
				<option value="Russian">Русский</option>
				<option value="English">English</option>
			</select>

			<input type="submit" value="Sign In"/>
		</div>
	</div>
}
