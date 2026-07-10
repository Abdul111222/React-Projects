import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import Home from './Home.jsx'
import Popup from './components/Popup.jsx'
import Routing from './components/Routing.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Popup />
    </BrowserRouter>
  </StrictMode>,
)
