import styled from 'styled-components';
import {Link } from 'react-router-dom';
const NavBar = styled.ul`

    list-style-type:none;
    text-align:right;
    border-bottom: 2px solid black;
    display:flex;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;

    flex-direction: row;
    flex-wrap: nowrap;
    -webkit-flex-wrap: nowrap;

    justify-content: flex-end;
    align-items: flex-start;
    list-style: none;
`;

const NavItem = styled.li`
    display:inline;
    margin-right:1%;
    text-align:center;
   
   
`;

const NavLink = styled(Link)`

    text-decoration: ${props => props.location.pathname == props.to? 'underline' : 'none'};
    color:black;
   
    &:hover{
        text-decoration:underline;
    };

   
`;


 export default NavBar

 export{

    NavItem,
    NavLink
 };