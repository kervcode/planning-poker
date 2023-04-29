import React from "react";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function () {
	const { user, authIsReady } = useAuthContext();
	const { logout } = useLogout();
	console.log("USER DATA FROM CONTEXT:", user)

	return (
		<header className='header'>
			<div className="wrapper">
				<div className="logo">
					<NavLink to="/">
						Planning Poker
						<img src="" alt="" />
					</NavLink>
				</div>

				<div className="menu">
					<NavLink to="/vote" className="listItem">
						Voter
					</NavLink>
					<NavLink to="/admin" className="listItem">
						Admin
					</NavLink>
					{/* <NavLink to="/about" className="listItem" onClick={logout}>
						about
					</NavLink> */}
					{
						user ? 
						<NavLink to="/" className="listItem" onClick={logout}>
							Logout
						</NavLink> : null
							
						
					}
				</div>
			</div>
		</header>
	);
}
