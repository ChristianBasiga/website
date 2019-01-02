import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`


    background-image: url(${props => "images/arrow_" + props.direction});
    background-position: center;
    background-size: contain;

`;


const Arrow = (props) => {


    const  {direction, clickCallback, symbol, style} = props;


    return (<Wrapper
        style = {style}
        onClick = {clickCallback}
        direction = {direction}
    >
    {symbol}

    </Wrapper>)
}

export default Arrow;