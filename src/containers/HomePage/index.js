import React, {Component } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import firebase from 'firebase';
import HomePageWrapper, {ProjectCardContainer}  from '../../components/HomePage';
import TimeLine from '../../components/HomePage/timeline';
import ProjectCard from '../../components/projectcard';










//This will take as props from state of App, the loaded in list of meta data of all projects.
//Because while they are within app, unlikely that changes so don't want to pull
//from database everytime they visit homepage.
class HomePage extends Component{


    constructor(props){

        super(props);   

        this.state = {

            projectCards: null,
        };
        
    }

    componentDidMount(){
        this.loadProjectCards();
    }

    loadProjectCards(){

        const firestore = firebase.firestore();


        const collRef = firestore.collection("project-cards");


        //If keeping timeline may filter this via year.
        //Or set keys in objects here.
        collRef.get()
            .then( querySnapshot => {

                var pulledCards = []
                console.log("got napshot");
                querySnapshot.docs.forEach( doc=> {

                    console.log("doc ", doc.data());
                    pulledCards.push(doc.data());
                });

                this.setState({
                    projectCards : pulledCards
                });
            })
            .catch ( err => {

                console.log(err);
            })

    }



    render(){

        //Might have to use child selectors.
        //So ha to be \n

        if (this.state.projectCards == null) return null;
        
       return (<HomePageWrapper>
            

            <TimeLine year={2018}></TimeLine>

            
            <ProjectCardContainer>
            {

                this.state.projectCards.map (projectCard => {

                    return <ProjectCard key = {projectCard.projectUid} {...projectCard}
                     projectUid = {projectCard.projectUid}/>;
                })
            }    

             


            
</ProjectCardContainer>
           
             </HomePageWrapper>);
    }



}

export default HomePage;