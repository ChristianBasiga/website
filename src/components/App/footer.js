import styled from 'styled-components';
import React from 'react';
import { renderers } from 'react-markdown';


const Wrapper = styled.div`

    position: -webkit-sticky;
    position:sticky;
    flex-direction:row;
    justify-content: space-between;
    display:flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    grid-area:footer;
    background-color:rgb(87, 86, 86);
`;




const CopyrightNotice = styled.p`

    margin-left:5%;
    color:white;
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


class Footer extends React.Component{


    shouldComponentUpdate(nextProps){
        if (nextProps.links != this.props.links){
            return true;
        }
        return false;
    }
    render(){

    const props = this.props;

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
}

export default Footer;