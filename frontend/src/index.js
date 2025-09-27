import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from "./App";
import  Navbar from "./Navbar.js";
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from './landing_page/product/ProductPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';
import  Footer from "./Footer.js";
import Signin from "./landing_page/login/Signin";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
      <Navbar/>
      <Routes>
    <Route path="home" element={<HomePage/>}/>
    <Route path="signup" element={<Signup/>}/>
    <Route path="about" element={<AboutPage/>}/>
    <Route path="product" element={<ProductPage/>}/>
    <Route path="pricing" element={<PricingPage/>}/>
    <Route path="support" element={<SupportPage/>}/>
    <Route path="/login" element={<Signin />} />
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter> 
);
