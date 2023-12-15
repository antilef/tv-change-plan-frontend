import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PlanProvider } from './contexts/planContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PlanProvider>
    <App />
  </PlanProvider>
)
