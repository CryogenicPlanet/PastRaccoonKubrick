import '@styles/tailwind.css'

import React from 'react'
import ReactDOM from 'react-dom'

import Apollo from './ApolloProvider'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Apollo>
      <App />
    </Apollo>
  </React.StrictMode>,
  document.getElementById('root')
)
