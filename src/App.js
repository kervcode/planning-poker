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
import Error from "./pages/Error/Error";
import Confirmation from "./pages/confirmation/Confirmation";
import { useAuthContext } from "./hooks/useAuthContext";

// import NotFound from './pages/NotFound';

export default function App() {
	const { user, authIsReady } = useAuthContext();

	return (
		<div>
			{authIsReady && (
				<Router>
					<Header user={user}/>
					<Routes>
						<Route
							exact
							path="/"
							element={<HomePage />}
						/>
						{/* <Route path="/homepage" element={ <HomePage />}/> */}
            			<Route path="/admin" 
							element={ 
								user ?
									<AdminPage />
								: <Navigate to="/login" />
							} 
						/>

						<Route path="/login" 
							element={ 
								!user ? 
									<LoginPage />
								:	<Navigate to="/admin" />
							} 
						/>
						<Route path="/signup" 
							element={
								!user ?
									<Signup /> 
								: 
									<Navigate to="/admin" />
							} 
						/>


						<Route path="/vote" element={<VotingPage /> } /> 
						<Route path="/confirmed" element={<Confirmation />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</Router>
			)}
		</div>
	);
}

// export default App;
