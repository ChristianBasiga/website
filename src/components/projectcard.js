import React, {Component} from 'react';
import styled from 'styled-components';
import Tags from './tags';

//This is cards on homepage previewing projects.
//Card Wrappers are flex items.
const CardWrapper = styled.li`

    margin-left:5%;
    margin-top:1%;
    border: 1px solid black;
    overflow:hidden;
    width:40%;

`;

const ThumbNail = styled.div`

    width:80%;
    margin:auto;
    border-bottom: 1px solid white;
    background-image: url(${props => props.thumbNail});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height:200px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
`;


//Since this is overlaying, I want it to be on bottom of image.
//Only as big as text that covers it.
const Title = styled.p`

    text-align: ${props => props.flipped? "center" : "center"};
    font-weight:bold;
    grid-area: Header;
    margin: ${props => props.flipped? "0" : "auto"};
`;


//Add flip shit later.
//Why isn't this and title on same row??
const FlipButton = styled.div`

    cursor:pointer;
    grid-area: Button;
    align-self:right;
    background-image: url(${props => props.image});
`;



const NonFlipped = styled.div`

    width:250px;
    height:300px;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
`;

const FlippedContent = styled.div`

    height:300px;
    width:250px;
    display:grid;
    flex-direction:column;
    grid-template-columns: 100%;
    grid-template-rows: 15% 4% 20% 2% 35%;
    grid-template-areas: 
    "Flip"
    "Header"
    "Description"
    "contribution-header"
    "Contributions";

`;

const FlippedHeader = styled.div`

    display:flex;
    grid-area:Flip;
    justify-content: flex-end;
`;

const Description  = styled.p`

    grid-area: Description;
    font-size:10px;
`;

const ContributionsHeader = styled.p`

    grid-area:contribution-header;
    text-decoration:underline;
    font-weight:bold;


`;
const Contributions = styled.ul`


    list-style:none;
    display:flex;
    width:100%;
    grid-area: Contributions;
    flex-direction:column;
    margin:auto;
    justify-content: space-evenly;
    align-items: flex-start;
`;

const Contribution = styled.li`

    font-size:12px;
    width:100%;
    text-align:left;
    margin:auto;
`;

const LinksToProject = styled.div`

    grid-area:Footer;
`;

const LinkToMore = styled.button`

    grid-area:Button;

`;
//This will be a horizontal flex container itself.
//Maybe it's own thing.


class ProjectCard extends Component{


    constructor(props){

        super(props);


        this.state = {
            cardFlipped: false
        };

        this.flipButton = this.flipButton.bind(this);
    }

    flipButton()  {

        this.setState({cardFlipped : !this.state.cardFlipped});
    }

    render(){

    const {title, tags, thumbNail, links, description, contributions} = this.props;


    //Add grid here.
    return (<CardWrapper>


        {this.state.cardFlipped? <FlippedContent>

            {/*would change the flip to x instead when flipped or reverse swirly*/}
            <FlippedHeader><FlipButton  onClick = {this.flipButton} image = ""> Flip </FlipButton>
            </FlippedHeader>
            <Title flipped = {true}> {title} </Title>
            

            <Description> {description}</Description>


            <ContributionsHeader>Contributions</ContributionsHeader>
            <Contributions>

                {contributions && contributions.map( contribution => {


                    return <Contribution key ={ contribution.title }>  <strong> {contribution.title}: </strong> 
                    {contribution.description} </Contribution>
                })}

            </Contributions>


        </FlippedContent> :
        
        <NonFlipped>

            {thumbNail && <ThumbNail thumbNail={thumbNail}>
            
            </ThumbNail>}
            <Title flipped={false}> {title} </Title>    

            <Tags tags={tags}/>
            <FlipButton  onClick = {this.flipButton} image = " "> Flip </FlipButton>

       </NonFlipped>
        }

        
    </CardWrapper>


    )
    }
}
export default ProjectCard;