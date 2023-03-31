import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import VotingPage from './pages/VotingPage';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/login" element={<AdminPage/>} />
        <Route path="/vote" element={<VotingPage/>} />
        {/* <Route element={NotFound} /> */}
      </Routes>
    </Router>
  );
}

export default App;