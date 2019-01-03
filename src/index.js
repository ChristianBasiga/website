import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import createBrowserHistory from "history/createBrowserHistory";
import firebase from 'firebase';
require('dotenv/config');


console.log("env variables", process.env);

const config = {

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
}

var config = {
    apiKey: "AIzaSyBrTOXsdWk0V0RHL78w7nAFRT4SGiVpgUE",
    authDomain: "chrisbtreat-website.firebaseapp.com",
    databaseURL: "https://chrisbtreat-website.firebaseio.com",
    projectId: "chrisbtreat-website",
    storageBucket: "chrisbtreat-website.appspot.com",
    messagingSenderId: "402247804940"
  };

firebase.initializeApp(config);

const settings = { timestampsInSnapshots: true};
firebase.firestore().settings(settings);
  
const history =  createBrowserHistory();
ReactDOM.render(<Router history = {history}><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
