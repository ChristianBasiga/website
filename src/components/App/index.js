import styled from 'styled-components';



const AppWrapper = styled.div`

  background-color:gray;  
 
    display:flex;
  border:2px solid black;
  min-height:100vh;

`;

export const Body = styled.div`


    grid-area: body;  


    flex-grow:2;
`;




export default AppWrapper;