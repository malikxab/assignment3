import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import global CSS styles
import App from './App'; // Import the main App component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Render the App component into the root element in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
