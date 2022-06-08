import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { storeServices } from './services/store-services'

(window as any).storeServices = storeServices

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
