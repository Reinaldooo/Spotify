import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
//
import './App.scss';
import Routes from '../../routes';
import { store, persistor } from '../../store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="app" data-testid="app">
          <Router>
            <Routes/>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
} 
