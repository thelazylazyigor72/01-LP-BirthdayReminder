import React from 'react';
import ReactDOM from 'react-dom';
//getting styles
import './style';
//getting App.js
import App from './App';

//make a root to place our app
const root = ReactDOM.createRoot(document.getElementById('root'))

//using strict mode to catch more potential problems
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
