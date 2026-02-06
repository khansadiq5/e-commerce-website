import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import ShopContextProvider from './context/ShopContext'
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
)
