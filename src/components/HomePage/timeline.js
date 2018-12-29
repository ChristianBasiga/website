import React from 'react';
import styled from 'styled-components';


const TimeLineWrapper = styled.div`


    border-right:1px solid black;
    text-align:center;
    display:grid;
    grid-template-columns:90% 10%;
    grid-template-rows:auto;

`;


const TimeStamp = styled.div`

    background-color:red;
    height:10px;
    width:10px;
    margin-top:20px;
    border-radius:25px;
`;

const TimeLine = (props) => {


    //Need to somehow draw the timeline thing.
    return (<TimeLineWrapper><p>
        {props.year}

    </p>
    <TimeStamp></TimeStamp>
    </TimeLineWrapper>);


}

export default TimeLine;