import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import MainPage from './ui/pages/MainPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)
