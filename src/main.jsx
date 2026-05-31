// Monkey-patch EventTarget to prevent libraries (like Spline) from hijacking the scroll wheel
(function() {
  if (typeof window === 'undefined') return;

  const originalAdd = EventTarget.prototype.addEventListener;
  const originalRemove = EventTarget.prototype.removeEventListener;

  EventTarget.prototype.addEventListener = function(type, listener, options) {
    if ((type === 'wheel' || type === 'mousewheel') && listener) {
      const target = this;
      const wrapped = function(e) {
        try {
          Object.defineProperty(e, 'preventDefault', {
            value: () => {},
            writable: true,
            configurable: true
          });
        } catch (err) {
          // Ignore errors
        }
        return listener.call(this, e);
      };

      if (!listener.__wrapped) {
        listener.__wrapped = [];
      }
      listener.__wrapped.push({ target, type, wrapped });

      let opt = options;
      if (typeof options === 'object') {
        opt = { ...options, passive: true };
      } else if (typeof options === 'boolean') {
        opt = { capture: options, passive: true };
      } else {
        opt = { passive: true };
      }

      return originalAdd.call(this, type, wrapped, opt);
    }
    return originalAdd.apply(this, arguments);
  };

  EventTarget.prototype.removeEventListener = function(type, listener, options) {
    if ((type === 'wheel' || type === 'mousewheel') && listener && listener.__wrapped) {
      const target = this;
      const index = listener.__wrapped.findIndex(item => item.target === target && item.type === type);
      if (index !== -1) {
        const { wrapped } = listener.__wrapped[index];
        listener.__wrapped.splice(index, 1);
        return originalRemove.call(this, type, wrapped, options);
      }
    }
    return originalRemove.apply(this, arguments);
  };
})();

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
