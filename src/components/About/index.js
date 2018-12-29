import styled from 'styled-components';



const AboutPage = styled.div`


    width:60%;
    margin:auto;
    display:grid;
    grid-template-columns: 15% 75%;
    grid-template-rows: auto auto auto auto;
    grid-template-areas: 
    "Picture BioHeader"
    "Bio Bio "
    "EducationHeader EducationHeader"
    "Education Education"
    "AchievementsHeader AchievementsHeader"
    "Achievements Achievements";


`;

const ProfilePicture = styled.div`

    
    background-image: url(${props => props.image});
    grid-area: Picture
    background-position:center;
    background-size: contain;
    background-repeat: no-repeat;
    overflow:hidden;
    width: 100px;
    height: 100px;
    border: 2px double white;
    border-radius: 25px;

`;


const BioHeader = styled.div`

   // border:2px solid black;
    grid-area: BioHeader;
    text-align:left;
    font-weight:bold;

`;
const Bio = styled.p`

    text-align:left;
`;

const ListHeader = styled.p`

    color: white;
    text-align:left;
    font-weight: bold;
`;

//Essentially list of achievements, awards, whatever else.
const List = styled.ul`

    list-style:none;
    text-align:left;
`;

const ListItem = styled.li`

`;

export{
    ProfilePicture,
    BioHeader,
    Bio,
    ListHeader,
    List,
    ListItem
};
export default AboutPage;