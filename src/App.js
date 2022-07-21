import './App.css';


//import { Route, Routes, Link } from 'react-router-dom';
import React from 'react';

import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
      </div>
    </ThemeProvider>
  );
}

export default App;
