import React from 'react';
import { render } from 'react-dom';
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>

  </>,
  document.getElementById('root')
);
