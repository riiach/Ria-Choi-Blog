import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ScrollToTopOnLoad from "./components/ScrollToTopOnLoad.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <ScrollToTopOnLoad />
          <App />
      </BrowserRouter>
  </StrictMode>,
)
