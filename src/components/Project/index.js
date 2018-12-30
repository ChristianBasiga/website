import styled from 'styled-components';
import {Carousel} from 'react-responsive-carousel';

const ProjectsPageWrapper = styled.div`

    width:100%;
    margin:auto;
    margin-bottom:5%;

`;

export const ScreenshotCarousel = styled(Carousel)`

    width:30%;

`;


//Because of the formatting of carousel, don't need to
//make actual screenshot component really.




export default ProjectsPageWrapper;