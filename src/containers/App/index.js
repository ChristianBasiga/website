import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import { PROJECT_PATH, BLOG_PATH, HIRE_ME_PATH} from './constants';

import  Body from '../../components/App';
import './App.css';
import HomePage from '../HomePage';
import ProjectsPage from '../Projects';
import BlogPage from '../Blog';
import HireMePage from '../HireMe';


//The local state of App will contain meta information about projects.
//ie: Title, description, and thumbnail, as well as uid of full project information.


class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
         
        </header>
      
        <Body>
        <Switch>


        {/*Render because want to be specific in rendering it*/}
        <Route exact path = "/" render = {(props) => {

            //Todo: Pass in the state's list of project as props
            return <HomePage/>

        }}/>

        <Route path = {PROJECT_PATH} component = {ProjectsPage}/>
        <Route path = {BLOG_PATH} component = {BlogPage}/>
        <Route path = {HIRE_ME_PATH} component = {HireMePage}/>



        </Switch>

        </Body>
      </div>
    );
  }
}

export default App;
