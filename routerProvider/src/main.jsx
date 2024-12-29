import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RootLayout from './layout/RootLayout.jsx'

createRoot(document.getElementById('root')).render(

  <App />
  
)
