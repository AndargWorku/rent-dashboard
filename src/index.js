import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'remixicon/fonts/remixicon.css'
import 'react-circular-progressbar/dist/styles.css';
import {BrowserRouter as Routes} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes>
    <App />
    </Routes>
    
  </React.StrictMode>
);


