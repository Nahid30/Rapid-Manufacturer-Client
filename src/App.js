import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage/Home/Home';
import Parts from './Pages/HomePage/Parts/Parts';
import BusinessSummary from './Pages/HomePage/BusinessSummary/BusinessSummary';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="parts" element={<Parts />} />
        <Route path="business" element={<BusinessSummary />} />
        <Route path="purchase" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        
        
      </Routes>
    </div>
  );
}

export default App;
