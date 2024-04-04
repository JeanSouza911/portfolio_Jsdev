import React from 'react';
import { useLocation } from 'react-router-dom';
import FadeTransition from '../components/FadeTransition.jsx';
import App from '../App.jsx';

function AppWithTransition() {
  const location = useLocation();

  return (
    <FadeTransition key={location.pathname}>
      <App />
    </FadeTransition>
  );
}

export default AppWithTransition;
