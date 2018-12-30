import React, {Component } from 'react';

import Header from '../../components/Project/header';
import ProjectPage  from '../../components/Project';


//Page for displaying individual projects.
class Project extends Component{


    render(){

        const metadata = [{key: "Project Type", value: "university"}, {key: "Technology", value: "unity"},{key: "Technology", value: "unity"},
        {key: "Project Type", value: "university"}, ];
        return (<ProjectPage>
            <Header title="title" metaData = {metadata} thumbnail = {require("../../images/pdfIcon.png")} />
            
            
             </ProjectPage>);
    }



}

export default Project;