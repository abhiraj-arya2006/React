import React from 'react'
import ReactDOM from 'react-dom/xclient'
import App from './App.jsx'

const Element=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'Click me to visit google'
)

createRoot(document.getElementById('root')).
render(
    <App/>
  
)
    