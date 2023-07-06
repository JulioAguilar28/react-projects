import React from 'react'
import ReactDom from 'react-dom/client'
import App from './src/App'
import { Provider } from 'react-redux'
import store from './src/store'
import './style.css'

const root = ReactDom.createRoot(document.querySelector('#app'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
