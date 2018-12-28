import React from 'react';
import styled from 'styled-components';
import Tags from './tags';

//This is cards on homepage previewing projects.
//Card Wrappers are flex items.
const CardWrapper = styled.li`

    flex-grow: 2;
    //This initself will be in a flex or grid box, so will fix width later, just setting hard now
    //for testing.
    
    border:1px solid red;
    display:flex;
    flex-direction: column;
    align-items:flex-start;
   // margin-top:1%;//But then this is magic number,
    //Order not needed here, actually would've been good for the printing thing, order by date.
    overflow:hidden;
`;

const ThumbNail = styled.div`

    width:100%;
    //I want height of this set.
    border:2px solid black; 
    background-image: url(${props => props.thumbNail});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    //That's problem, width and height need to be set exactly for overlay to work.
    height:200px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
`;


//Since this is overlaying, I want it to be on bottom of image.
//Only as big as text that covers it.
const Title = styled.p`

    color:white;
    background-color: red;

    opacity: 0.5;
    border: 1px solid red;
    border-width: 5px 10px 5px 10px;
`;

const Description  = styled.p`


`;

//This will be a horizontal flex container itself.
//Maybe it's own thing.


const ProjectCard = (props) => {


    const {title, description, tags, thumbNail} = props;


    //Add grid here.
    return (<CardWrapper style={props.style}>

        {thumbNail && <ThumbNail thumbNail={thumbNail}>
        
        <Title> {title} </Title>

        
        </ThumbNail>}
        <Tags tags={tags}/>

        <p> {description}</p>


    </CardWrapper>


    )
}
export default ProjectCard;