// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./composants/About";
import { Admin } from "./composants/Admin";
import { Featured } from "./composants/Featured";
import { Home } from "./composants/Home";
import { Navbar } from "./composants/Navbar";
import { New } from "./composants/New";
import { NoMatch } from "./composants/NoMatch";
import { OrderSummary } from "./composants/OrderSummary";
import { Product } from "./composants/Product";
import { UserDetails } from "./composants/UserDetails";
import { Users } from "./composants/Users";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/order-summary' element={<OrderSummary />} />
				<Route path='/product' element={<Product />}>
					<Route index element={<Featured />} />
					<Route path='featured' element={<Featured />} />
					<Route path='new' element={<New />} />
				</Route>
				<Route path='/users' element={<Users />}>
					<Route path=':userId' element={<UserDetails />} />
					<Route path='admin' element={<Admin />} />
				</Route>
				<Route path='*' element={<NoMatch />} />
			</Routes>
		</>
	);
}

export default App;
