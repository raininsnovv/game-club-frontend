import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'
import { store } from './features/store/store'

const Global = createGlobalStyle`
*{margin: 0px;
 padding: 0px;
 box-sizing: border-box;}`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Global />
        <App />
      </BrowserRouter>
    </Provider>
)
