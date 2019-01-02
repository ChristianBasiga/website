import React from 'react';
import styled from 'styled-components';
import { ProfilePicture } from '../About';


const Wrapper = styled.div`


    display:grid;
    width:60%;
    margin:auto;
    margin-top: 5%;
    grid-template-columns: 50% 30%;
    grid-template-rows: 25% 50%;
    grid-template-areas:
    "thumbnail title"
    "thumbnail bullets";

`;


const Title = styled.div`

    grid-area: title;
    font-size:50px;
`;

//This is one for generic.
const Thumbnail = styled.div`

    background-image: url(${props => props.image});
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
   // border:2px solid black;
    grid-area: thumbnail;
`;

//This is pretty generic what bout to make, could prob move alot of this to very general folder in terms of clean up.
//For now fuck it though, if very little similarities not worth doing that.
const DetailBullets = styled.ul`

    grid-area:bullets;
    list-style:none;   
    display:grid;
    grid-template-columns: auto;
    grid-template-rows: 12.5% 12.5% 12.5% 12.5%;
`;

const DetailTitle = styled.p`

    font-weight: bold;
`;

const DetailValue = styled.p`


`;

const DetailBullet = styled.li`


    
    text-align:left;

    display:grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto auto;
    grid-template-areas:
    "title value"
    "title value";

`;


const Header = props => {


    //Idk if really need thumbnail here if have screenshots.
    return ( <Wrapper>


        <Thumbnail image={props.thumbnail}/>
        <Title> {props.title} </Title>
        <DetailBullets>

            { props.metadata && props.metadata.map( metadata => {

                return <DetailBullet key ={metadata.key} > <DetailTitle>{metadata.key}</DetailTitle>  <DetailValue>{metadata.value}</DetailValue></DetailBullet>
            })}

        </DetailBullets>

</Wrapper>
    )

};

export default Header;