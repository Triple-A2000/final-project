import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
// We were having issues with the homepage not loading on startup for most of the project.
// While I don't know how this works exactly it was the easiest fix I could find at 11:50pm
// on the night before submission. -Connor Hall

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);