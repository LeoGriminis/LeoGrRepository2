import store from './components/redux/reduxStore'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';




    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store} >
                <App  />
            </Provider>
        </BrowserRouter> , document.getElementById('root')
       
    );


// leo190332
// LEO94






