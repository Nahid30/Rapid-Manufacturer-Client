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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Pages/HomePage/Footer/Footer';
import PurchaseDetails from './Pages/Purchase/PurchaseDetails';
import Dashboard from './Dashboard/Dashboard';
import MyOrders from './Dashboard/MyOrders';
import AddAReview from './Dashboard/AddAReview';
import MyProfile from './Dashboard/MyProfile';
import AddAProduct from './Dashboard/AddAProduct';
import ManageAllOrders from './Dashboard/ManageAllOrders';
import MakeAdmin from './Dashboard/MakeAdmin';
import ManageProducts from './Dashboard/ManageProducts';
import Payment from './Dashboard/Payment';
import Blogs from './Pages/Blogs/Blogs';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="parts" element={<Parts />} />
        <Route path="business" element={<BusinessSummary />} />
        <Route path="item/:id" element={<RequireAuth><PurchaseDetails /></RequireAuth>} />
        <Route path="purchase" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>


        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addReview" element={<AddAReview></AddAReview>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<Payment />} />
          <Route path="manageOrders" element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path="addProduct" element={<AddAProduct></AddAProduct>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="manageProducts" element={<ManageProducts></ManageProducts>}></Route>

          {/* <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route> */}

        </Route>


        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />


      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
