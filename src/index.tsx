import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import theme from './configs/theme.json'
ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </I18nextProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
