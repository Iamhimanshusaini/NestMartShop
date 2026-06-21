import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router';
import './App.css';
import Header from './components/header/header.js';
import Home from './pages/home/index.js'
import About from './pages/about/about.js';
import Footer from './components/footer/footer.js';
import Shop from './pages/listing/listing.js';
import Not404 from './pages/404/not404.js';
import ProdDeatils from './pages/prodDetails/prodDeatils.js';
import CartProvider from './context/CartContext.js'
import Login from './userDashboard/Login.js';
import Signup from './userDashboard/Signup.js';
import MyOrders from './userDashboard/MyOrders.js';
import UserProfile from './userDashboard/userProfile.js';
import AdminLayout from './admin/admindashLayout.js';
import AdminDashboard from './admin/AdminDashboard.js'
import AddProduct from './admin/addProduct.js';
import AllProducts from './admin/showAllProduct.js';
import ShowUsers from './admin/showAllUsers.js'
import AdminOrders from './admin/adminOrderCheck.js';
import Checkout from './userDashboard/checkOut.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

function ClientLayout() {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  );
}
function ShopLayout() {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route exact={true} path='/' element={<ClientLayout />}>
            <Route exact={true} path='/myorders/:userId' element={<MyOrders />} />
            <Route exact={true} path='/signup' element={<Signup />} />
            <Route exact={true} path='/login' element={<Login />} />
            <Route path='/product/details/:id' element={<ProdDeatils />} />
            <Route index element={<Home />} />
            <Route exact={true} path='/about' element={<About />} />
            <Route path='*' element={<Not404 />} />
            <Route path='user/profile/:userId' element={<UserProfile />} />
            <Route path='/checkout' element={<Checkout />} />


          </Route>


          {/* shop layout route  */}

          <Route path='/Shop' element={<ShopLayout />}>
            <Route index element={<Shop />} />

            <Route path=":category" element={<Shop />} />
          </Route>

          {/* admin dashboard layout route */}

          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path='/admin/add-product' element={<AddProduct />} />
            <Route path='/admin/all-products' element={<AllProducts />} />
            <Route path='/admin/users' element={<ShowUsers />} />
            <Route path='/admin/orders' element={<AdminOrders />} />



          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

