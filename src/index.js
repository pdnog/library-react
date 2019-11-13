import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDuRV70M-50x2-_awqGHGQOcF4aieFfWgk",
  authDomain: "library-react-15930.firebaseapp.com",
  databaseURL: "https://library-react-15930.firebaseio.com",
  projectId: "library-react-15930",
  storageBucket: "library-react-15930.appspot.com",
  messagingSenderId: "666059581853",
  appId: "1:666059581853:web:54d301d28f037c2950a774",
  measurementId: "G-BP652FE1G2"
};

const connection = firebase.initializeApp(firebaseConfig);
const database = connection.database();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
