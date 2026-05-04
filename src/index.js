import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Переконайтеся, що цей файл порожній

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);