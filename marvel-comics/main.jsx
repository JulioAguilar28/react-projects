import React from 'react'
import ReactDom from 'react-dom/client'
import App from './src/App'
import './style.css'

const app = document.querySelector('#app')
ReactDom.createRoot(app).render(<App />)
