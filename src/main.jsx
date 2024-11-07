import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Flashcards from './pages/Flashcards.jsx';
import DevComp from './pages/DevComp.jsx';
import Tower from './pages/Tower.jsx';
import Cerom from './pages/Cerom.jsx';
import Contact from './pages/Contact.jsx';
import NoPage from './pages/NoPage.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./assets/app.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* All contained within the layout component which introduces header and footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="flashcards" element={<Flashcards />} />
          <Route path="devcomp" element={<DevComp />} />
          <Route path="tower" element={<Tower />} />
          <Route path="cerom" element={<Cerom />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route >
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
