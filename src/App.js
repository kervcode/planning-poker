import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import AdminPage from './pages/AdminPage';
import VotingPage from './pages/VotingPage';
import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage';
import Signup from './pages/SignUp';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/vote" element={<VotingPage/>} />
        {/* <Route element={NotFound} /> */}
      </Routes>
    </Router>
  );
}

export default App;