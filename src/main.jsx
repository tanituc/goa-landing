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

const themeTokens = {
  colorPrimary: '#3D4751', // Charcoal Blue
  colorInfo: '#7F8F9F', // Slate Grey (Accent)
  colorError: '#DF9A57', // Golden Apricot (CTA)
  colorSuccess: '#25D366', // WhatsApp Green
  colorWarning: '#e0961b', // Escapadas Orange
  colorTextBase: '#121417', // Onyx
  colorBgBase: '#FCF5EE', // Seashell
  fontFamily: "'Montserrat', sans-serif",
  borderRadius: 4,
};

// Inyectar variables en :root para que las clases CSS personalizadas puedan consumirlas
const style = document.createElement('style');
style.innerHTML = `
  :root {
    --ant-color-primary: ${themeTokens.colorPrimary};
    --ant-color-info: ${themeTokens.colorInfo};
    --ant-color-error: ${themeTokens.colorError};
    --ant-color-success: ${themeTokens.colorSuccess};
    --ant-color-warning: ${themeTokens.colorWarning};
    --ant-color-text-base: ${themeTokens.colorTextBase};
    --ant-color-bg-base: ${themeTokens.colorBgBase};
    --ant-font-family: ${themeTokens.fontFamily};
  }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        cssVar: true,
        hashed: false,
        token: themeTokens,
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
