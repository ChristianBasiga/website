import React, {Component } from 'react';

import Header from '../../components/Project/header';
import ProjectPage  from '../../components/Project';
import Contribution from './contribution';

//Page for displaying individual projects.
class Project extends Component{


    render(){

        const snapshots = [require("../../images/pdfIcon.png"), require("../../images/pdfIcon.png"), require("../../images/pdfIcon.png"),require("../../images/pdfIcon.png")];
        const metadata = [{key: "Project Type", value: "university"}, {key: "Technology", value: "unity"},{key: "Technology", value: "unity"},
        {key: "Project Type", value: "university"}, ];
        return (<ProjectPage>
            <Header title="title" metaData = {metadata} thumbnail = {require("../../images/pdfIcon.png")} />
            
            <Contribution title = {"I contributed this" } description = {"descriptions"} snapshots = {snapshots}></Contribution>
            <Contribution title = {"I contributed this" } description = {"descriptions"} snapshots = {snapshots}></Contribution>
            
             </ProjectPage>);
    }



}

export default Project;