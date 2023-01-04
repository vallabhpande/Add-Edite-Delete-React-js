import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import SassDemo from './components/sassDemo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <SassDemo/> */}
  </React.StrictMode>
);

reportWebVitals();
