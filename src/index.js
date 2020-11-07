import React from 'react';
import ReactDOM from 'react-dom';

// for redux 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';

import './index.css';
import App from './App';

// for react-mdl
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

// importing reducers
import reducers from "./reducers";


const createStoreWithMiddleWare = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(

  < Provider store = { createStoreWithMiddleWare(reducers) } >
    <>
      <App /> 
    </>   
  </Provider>  
  
  ,document.getElementById('root')

);


