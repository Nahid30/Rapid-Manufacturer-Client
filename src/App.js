import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/HomePage/Home/Home';
import Parts from './Pages/HomePage/Parts/Parts';
import BusinessSummary from './Pages/HomePage/BusinessSummary/BusinessSummary';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="parts" element={<Parts />} />
        <Route path="business" element={<BusinessSummary />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        
        
      </Routes>
    </div>
  );
}

export default App;
