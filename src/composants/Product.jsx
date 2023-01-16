import { Link, Outlet } from "react-router-dom";
import React from "react";

export const Product = () => {
	return (
		<>
			<input type='search' placeholder='search products' />
			<nav>
				<Link to='featured'>Featured</Link>
				<Link to='new'>New</Link>
			</nav>
			<Outlet />
		</>
	);
};
