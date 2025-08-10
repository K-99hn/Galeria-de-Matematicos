import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Galeria from './Galeria.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Galeria />
  </StrictMode>,
)
