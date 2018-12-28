import styled from 'styled-components';
import React from 'react';


const Wrapper = styled.div`

    border:2px solid black;
    flex-direction:row;
    justify-content: space-between;

    display:flex;
`;




const CopyrightNotice = styled.p`

    margin-left:5%;
`;
//Flex as images and texy may vary in size.
const ContactLinks = styled.div`

    
    display:inline-flex;
    justify-content: space-evenly;
    flex-direction: row; 
`;


//They will be lists with image background cause honestly that is dopamine.
const ContactLink = styled.a`
    
    flex-grow: 1;
    cursor:pointer;
    text-align:center;
`;

const Footer = (props) => {


    console.log("props", props);

    return ( <Wrapper>

        <CopyrightNotice> Copyright</CopyrightNotice>
        <ContactLinks>

            { props.links && props.links.map ( link => {

                console.log("link looking at ", link);
                return <ContactLink key = {link.url}  href ={link.url}> 
                {/*In future resize these images myself to be appropriate size and position, for most part everything is correct*/}
                <img src= {link.image} alt={link.title} style={{height:"25px", marginTop:"50%"}}/>
                </ContactLink>
            })}


        </ContactLinks>


    </Wrapper>

    )

}

export default Footer;