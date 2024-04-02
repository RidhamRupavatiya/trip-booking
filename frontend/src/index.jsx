import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchResults from "./pages/SearchResults";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import ThankYou from "./pages/ThankYou";
import ImageGallery from "./components/ImageGallery/ImageGallery";

import  { AuthContextProvider } from './context/AuthContext.js';
import { SkeletonTheme } from "react-loading-skeleton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <SkeletonTheme baseColor="#313131" highlightColor="#525252"> */}
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/tours' element={<Tours/>}/>
            <Route path='/tours/:id' element={<TourDetails/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/gallery' element={<ImageGallery/>}/>
            <Route path='/thank-you' element={<ThankYou/>}/>
            <Route path='/tours/search' element={<SearchResults/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  {/* </SkeletonTheme> */}
  </React.StrictMode>
);