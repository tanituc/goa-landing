// Polyfill: force touchmove/touchstart listeners to be passive by default
// This silences the "[Violation] non-passive event listener" warning from third-party libs (Ant Design, rc-*)
;(function () {
  const orig = EventTarget.prototype.addEventListener
  EventTarget.prototype.addEventListener = function (type, fn, options) {
    if (type === 'touchmove' || type === 'touchstart') {
      const opts = typeof options === 'object'
        ? { passive: true, ...options }
        : { passive: true, capture: !!options }
      orig.call(this, type, fn, opts)
    } else {
      orig.call(this, type, fn, options)
    }
  }
})()

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#4A3B32',
          colorInfo: '#A67B5B',
          fontFamily: "'Montserrat', sans-serif",
          borderRadius: 4,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
