import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import AdminPage from "./pages/adminpage/AdminPage";
import VotingPage from "./pages/votingpage/VotingPage";
import Header from "./components/Header/Header";
import LoginPage from "./pages/signin/LoginPage";
import Signup from "./pages/signup/SignUp";
import { useAuthContext } from "./hooks/useAuthContext";

// import NotFound from './pages/NotFound';

export default function App() {
	const { user, authIsReady } = useAuthContext();

	return (
		<>
			{authIsReady && (
				<Router>
					<Header />
					<Routes>
						<Route
							exact
							path="/"
							element={user ? <HomePage /> : <Navigate to="/login" />}
						/>
            <Route path="/homepage" element={ <HomePage />}/>
            <Route path="/admin" element={!user ? <AdminPage />: <Navigate to='login' />} />
						<Route path="/login" element={user ? <AdminPage /> : <Navigate to='login' />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/vote" element={<VotingPage />} />
						{/* <Route element={NotFound} /> */}
					</Routes>
				</Router>
			)}
		</>
	);
}

// export default App;
