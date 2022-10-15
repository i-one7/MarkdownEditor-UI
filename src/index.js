import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './app';
import './theme/font.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
   	<App />
	</React.StrictMode>
);
