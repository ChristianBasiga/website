import React, {Component } from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../../components/Project/header';
import ProjectPage  from '../../components/Project';
import Carousel from '../../components/Carousel';
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
        console.log("props", this.props);
        const {thumbnail} = this.props.location.state;
      //  console.log("thumbnail", thumbnail);
        //Must replicate the data, incase they go directly to url of project without clicking a project card.
        const { title, description, metadata, snapshots, contributions} = this.state.projectData;
        const snapshotTests = [require("../../images/email-logo.png"), require("../../images/github-logo.png")]
        return (
        
        <ProjectPage>

            <Header title={title} metadata = {metadata} thumbnail = {thumbnail} />


            <Carousel images = {snapshotTests} style = {{margin:"auto", width:"50%"}}/>

            {contributions && contributions.map ( contribution => {

                const {title, description, snapshots} = contribution;
                return <Contribution key = {title} title = {title} description = {description} snapshots = {snapshotTests}/>
            })} 
            
             </ProjectPage>);
    }



}

export default withRouter(Project);