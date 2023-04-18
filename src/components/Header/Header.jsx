import React from "react";
import { useLogout } from "../../hooks/useLogout";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function () {
	const { logout } = useLogout();

	return (
		<div className='header'>
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
					<NavLink to="/login" className="listItem" onClick={logout}>
						Logout
					</NavLink>
				</div>
			</div>
		</div>
	);
}
