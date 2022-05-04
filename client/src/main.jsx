import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import {store} from './app/store'
import {Provider} from 'react-redux'
import App from './App'
import './index.scss'
import 'react-toastify/dist/ReactToastify.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)
