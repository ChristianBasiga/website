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

    justify-content: space-between;
    align-items: space-between;
    list-style: none;

    
`;

export default HomePageWrapper;