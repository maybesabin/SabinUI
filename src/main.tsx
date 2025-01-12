import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/Routes.tsx'
import { GlobalProvider } from './context/globalContext'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <AppRoutes />
    </GlobalProvider>
  </StrictMode>,
)
