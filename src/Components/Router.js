import React from 'react'
import Header from './Header';
import Footer from './Footer'; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Food from '../ReceipeApp/Food';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header /> 
        <Routes> 
          <Route path="/" element={<Food />} > </Route> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  ) 
} 
export default Router;
