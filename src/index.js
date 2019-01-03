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

    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    projectId: process.env.FIREBASE_PROJECT_ID,
}


firebase.initializeApp(config);

const settings = { timestampsInSnapshots: true};
firebase.firestore().settings(settings);
  
const history =  createBrowserHistory();
ReactDOM.render(<Router history = {history}><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
