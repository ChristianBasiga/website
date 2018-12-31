import React, {Component } from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../../components/Project/header';
import ProjectPage, {ScreenshotCarousel}  from '../../components/Project';
import Contribution from './contribution';
import firebase from 'firebase';
//Page for displaying individual projects.
class Project extends Component{



    constructor(props){

        super(props);

        this.state = {
            projectData : null
        };

    }

    componentDidMount(){

        this.pullProjectInfo();

    }

    pullProjectInfo(){

        const firestore = firebase.firestore();
        const projectId = this.props.match.params.projectId;
        const docRef = firestore.collection("projects").doc(projectId);

        docRef.get()
            .then( snapshot => {

                this.setState({
                    projectData: snapshot.data()
                });
            })
            .catch( error => {

                console.log("error pulling project info:", error);
            })
    }

    render(){

        
        if (this.state.projectData == null) return null;
        console.log("get to here?");

        //Title and thumbnail, can come through props via project card in actuality, to reduce redundant information
        const {title, thumbnail} = this.props;
        const { metadata, snapshots, contributions} = this.state.projectData;
        return (
        
        <ProjectPage>
            <Header title={title} metadata = {metadata} thumbnail = {thumbnail} />


            <ScreenshotCarousel>

                {snapshots && snapshots.map (snapshot => {
                    return <img src={snapshot} key={snapshot}/>
                })}

            </ScreenshotCarousel>

            {contributions && contributions.map ( contribution => {

                const {title, description, snapshots} = contribution;
                return <Contribution key = {title} title = {title} description = {description} snapshots = {snapshots}/>
            })} 
            
             </ProjectPage>);
    }



}

export default withRouter(Project);