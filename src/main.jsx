import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppWithTransition from './components/AppWithFadeTransition.jsx'; // Importe o AppWithTransition

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          element={<AppWithTransition />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path='about'
            element={<About />}
          />
          <Route
            path='projects'
            element={<Projects />}
          />
          <Route
            path='contact'
            element={<Contact />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
