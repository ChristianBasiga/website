import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Helmet from 'react-helmet';
import {PROJECT_PAGE, BLOG_PAGE, CONTACT_PAGE, ABOUT_PAGE} from './constants';

import linkedInLogo from  '../../images/linkedin-logo.png';
import githubLogo from '../../images/github-logo.png';
import emailLogo from '../../images/email-logo.png';
import Header from '../../components/App/header';
import  Body from '../../components/App';
import Footer from '../../components/App/footer';
import './App.css';
import HomePage from '../HomePage';
import ProjectsPage from '../Project';
import BlogPage from '../Blog';
import ContactPage from '../Contact';
import PageNotFound from '../PageNotFound';
import styled from 'styled-components';
import AboutPage from '../../containers/About';

//The local state of App will contain meta information about projects.
//ie: Title, description, and thumbnail, as well as uid of full project information.

const AppWrapper = styled.div`

background-color:gray;  
`;

class App extends Component {


  constructor(props) {

    super(props);
    //Should I also pull contact links? Not really worth.


    this.contactLinks =  [

      {url: "https://www.linkedin.com/in/prince-christian-basiga-733527135/", title:"LinkedIn", image:linkedInLogo},
      {url: "https://github.com/ChristianBasiga", title:"Github", image: githubLogo},
      {url: "mailto: princebasiga@gmail.com", title:"Email", image: emailLogo}
  
  ];
  }

  render() {

    return (
      <AppWrapper className="App">
        
        <Helmet>
          <title> Chrisbtreats</title>

        </Helmet>
        

        <Header/>
      
        <Body>


    {/*Using switch glitches it out for some reason*/}
        {/*Render because want to be specific in rendering it*/}
        <Switch>
        <Route  exact path = "/" render = {(props) => {

            //Todo: Pass in the state's list of project as props
            return <HomePage/>

        }}/>

        <Route path = {ABOUT_PAGE.path} component = {AboutPage}/>
        <Route path = {PROJECT_PAGE} component = {ProjectsPage}/>
        <Route path = {BLOG_PAGE.path} component = {BlogPage}/>
        <Route path = {CONTACT_PAGE.path} render =  { props => {
          
            console.log("clicked contact");
            return <ContactPage {...props} contactLinks = {this.contactLinks}/>
          
        }}/>

        <Route component = {PageNotFound}/>

        </Switch>
        </Body>

        <Footer links = {this.contactLinks}/>
      </AppWrapper>
    );
  }
}

//Makes sure it has router props.
export default (App);
