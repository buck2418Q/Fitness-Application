import { NextUIProvider } from '@nextui-org/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './theme/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </ThemeProvider>
  </StrictMode>,
)
