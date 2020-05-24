import React from 'react';
import { BrowserRouter } from "react-router-dom";

import RouterOutlet from './router-outlet';
import Header from './components/header';
import Footer from './components/footer';
import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouterOutlet />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
