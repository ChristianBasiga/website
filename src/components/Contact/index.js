import styled from 'styled-components';


 const PageWrapper = styled.div`

    width:40%;
    display:grid;
    margin:auto;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto 20px;
    grid-template-areas:
    "contact-header"
    "contacts"
    "resume-header"
    "resume"
    ". ";



`;

//To reduce duplicate will set grid-area in style inline.
export const Header = styled.p`

    font-weight: bold;
    color:white;
    font-size:20px;
`;

export const ContactWrapper = styled.div`

    display:flex;
    width:100%;
    justify-content:space-evenly;
    

`;

export const ContactLink = styled.a`


    background-image: url(${ props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    width: 50px;
    height:50px;
    

`;



export default PageWrapper;