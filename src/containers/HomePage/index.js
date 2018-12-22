import React, {Component } from 'react';


import HomePageWrapper  from '../../components/HomePage';


//This will take as props from state of App, the loaded in list of meta data of all projects.
//Because while they are within app, unlikely that changes so don't want to pull
//from database everytime they visit homepage.
class HomePage extends Component{


    render(){

        return (<HomePageWrapper> </HomePageWrapper>);
    }



}

export default HomePage;