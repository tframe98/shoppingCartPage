import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './cartPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
