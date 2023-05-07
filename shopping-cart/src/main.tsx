import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { FiltersProvider } from './context/Filters.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>
)
