import styled from 'styled-components';


const HomePageWrapper = styled.div`

    display:grid;
    grid-template-columns: 10% 80%;


`;

export const ProjectCardContainer = styled.ul`

    display:flex;   
    flex-direction: row;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;

    justify-content: flex-start;
    align-items: space-evenly;
    list-style: none;

    
`;

export default HomePageWrapper;