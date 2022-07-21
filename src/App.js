import "./App.css";

//import { Route, Routes, Link } from 'react-router-dom';
import React from "react";

import Navbar from "./components/Navbar";
//import Footer from './components/Footer';
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import MovieList from "./components/MovieList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from './components/Login';
import Register from './components/Register'
import DetailFilm from "./components/DetailFilm";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/detaillFilm/:id" element={<DetailFilm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
