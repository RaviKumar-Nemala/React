import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { carsStore} from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {carsStore}>
        <App />
    </Provider>
);