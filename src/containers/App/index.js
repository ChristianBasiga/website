import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Helmet from 'react-helmet';
import { PROJECT_PAGE, BLOG_PAGE, CONTACT_PAGE} from './constants';

import  Body, {Header} from '../../components/App';
import NavBar, {NavItem, NavLink} from '../../components/App/navbar';
import './App.css';
import HomePage from '../HomePage';
import ProjectsPage from '../Projects';
import BlogPage from '../Blog';
import ContactPage from '../Contact';
import { withRouter } from "react-router";


//The local state of App will contain meta information about projects.
//ie: Title, description, and thumbnail, as well as uid of full project information.


class App extends Component {



  render() {

    const props = this.props;
    console.log(props);
    return (
      <div className="App">
        
        <Helmet>
          <title> Chrisbtreats</title>

        </Helmet>
        
        <Header>
        <NavBar>




          <NavItem> <NavLink to={PROJECT_PAGE.path} location = {props.location}> {PROJECT_PAGE.name} </NavLink></NavItem>
          <NavItem> <NavLink to={BLOG_PAGE.path}  location = {props.location}> {BLOG_PAGE.name} </NavLink></NavItem>
          <NavItem> <NavLink to={CONTACT_PAGE.path}  location = {props.location}> {CONTACT_PAGE.name}</NavLink></NavItem>
          </NavBar>

        </Header>
      
        <Body>
        <Switch>


        {/*Render because want to be specific in rendering it*/}
        <Route exact path = "/" render = {(props) => {

            //Todo: Pass in the state's list of project as props
            return <HomePage/>

        }}/>

        <Route path = {PROJECT_PAGE.path} component = {ProjectsPage}/>
        <Route path = {BLOG_PAGE.path} component = {BlogPage}/>
        <Route path = {CONTACT_PAGE.path} component = {ContactPage}/>



        </Switch>

        </Body>
      </div>
    );
  }
}

//Makes sure it has router props.
export default withRouter(App);
