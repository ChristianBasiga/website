import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
`;


const Arrow = (props) => {


    const  {direction, onClick, symbol, style} = props;

    const image = require("../../images/arrow_" + direction +".png");
    return (<Wrapper
        style = {style}
        onClick = {onClick}
        image = {image}
    >

    </Wrapper>)
}

export default Arrow;