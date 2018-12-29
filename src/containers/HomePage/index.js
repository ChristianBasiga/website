import React, {Component } from 'react';


import HomePageWrapper, {ProjectCardContainer}  from '../../components/HomePage';
import TimeLine from '../../components/HomePage/timeline';
import ProjectCard from '../../components/projectcard';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';



import {Carousel} from 'react-responsive-carousel';
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.css';



const StyledCarousel = styled(Carousel)`


    width:30%;
    margin-left:35%;
    & thumb{

        width:50%;
    }

`;



const ProjectsGrid = styled.ul`

    border:2px solid black;
    display:grid;

    grid-template-columns: 300px 300px 300px;
    grid-template-rows: auto;
    list-decoration:none;

`;

//This will take as props from state of App, the loaded in list of meta data of all projects.
//Because while they are within app, unlikely that changes so don't want to pull
//from database everytime they visit homepage.
class HomePage extends Component{


    constructor(props){

        super(props);   
        
    }



    render(){

        //Might have to use child selectors.
        //So ha to be \n
        const testTags = [{title:"C#", type:"Language"}, {title: "Unity", type:"Tech"}, {title: "Unity", type:"Tech"},{title: "Unity", type:"Tech"},{title: "Unity", type:"Tech"},{title: "Unity", type:"Tech"}];
       return (<HomePageWrapper>
            

            <TimeLine year={2018}></TimeLine>
            <ProjectCardContainer>
            <ProjectCard title = "title" description = "description yo of about this size. Next line." tags = {testTags} style = {{width:"20%", textAlign:"center"}}
            thumbNail = {"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"} />
           
            
           <ProjectCard title = "title" description = "description yo of about this size. Next line." tags = {testTags} style = {{width:"20%", textAlign:"center"}}
            thumbNail = {"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"} />

<ProjectCard title = "title" description = "description yo of about this size. Next line." tags = {testTags} style = {{width:"20%", textAlign:"center"}}
            thumbNail = {"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"} />

<ProjectCard title = "title" description = "description yo of about this size. Next line." tags = {testTags} style = {{width:"20%", textAlign:"center"}}
            thumbNail = {"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"} />
<ProjectCard title = "title" description = "description yo of about this size. Next line." tags = {testTags} style = {{width:"20%", textAlign:"center"}}
            thumbNail = {"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"} />

            
</ProjectCardContainer>
<TimeLine year={2017}></TimeLine>
        <ProjectCardContainer>

        <ProjectCard title = "title" description = "description yo of about this size. Next line." tags = {testTags} style = {{width:"20%", textAlign:"center"}}
            thumbNail = {"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"} />

<ProjectCard title = "title" description = "description yo of about this size. Next line." tags = {testTags} style = {{width:"20%", textAlign:"center"}}
            thumbNail = {"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"} />
        </ProjectCardContainer>

             </HomePageWrapper>);
    }



}

export default HomePage;