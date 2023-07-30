import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import server from './server.jsx';
server()

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)