import React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

import { PROJECTS_PAGE,PROJECT_PAGE, BLOG_PAGE, CONTACT_PAGE, ABOUT_PAGE} from '../../containers/App/constants';
import NavBar, {NavItem, NavLink} from '../../components/App/navbar';

const HeaderWrapper = styled.div`

    grid-area:header;
    position: -webkit-sticky;
    position:sticky;
    overflow:hidden;
    top: 0; 
    flex-grow:1;
  //  border-bottom:1px solid black;

    
  //Want this to only trigger when sticky is triggered.
    background-color:rgb(87, 86, 86);

`;


const Header = props => {


    return (<HeaderWrapper>

 <NavBar>


          <NavItem> <NavLink to={ABOUT_PAGE.path} location = {props.location} > {ABOUT_PAGE.name} </NavLink></NavItem>

          <NavItem> <NavLink to={PROJECTS_PAGE.path} location = {props.location}> {PROJECTS_PAGE.name} </NavLink></NavItem>
          <NavItem> <NavLink to={BLOG_PAGE.path}  location = {props.location}> {BLOG_PAGE.name} </NavLink></NavItem>
          <NavItem> <NavLink to={CONTACT_PAGE.path} location ={props.location}  > {CONTACT_PAGE.name}</NavLink></NavItem>
        </NavBar>
        
    </HeaderWrapper>)
}

export default withRouter(Header);