import React, {Component} from 'react';
import styled from 'styled-components';
import Tags from './tags';

//This is cards on homepage previewing projects.
//Card Wrappers are flex items.
const CardWrapper = styled.li`

    margin-left:5%;
   

    border: 1px solid black;
    overflow:hidden;
 
`;

const ThumbNail = styled.div`

    width:100%;
    background-image: url(${props => props.thumbNail});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    //That's problem, width and height need to be set exactly for overlay to work.
    height:200px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
`;


//Since this is overlaying, I want it to be on bottom of image.
//Only as big as text that covers it.
const Title = styled.p`

    //color:white;
    //background-color: red;

    //opacity: 0.5;
    text-align: ${props => props.flipped? "left" : "center"};
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

    display:flex;
    flex-direction: column;
    align-items:flex-end;
    height:300px;
`;

const FlippedContent = styled.div`


    height:300px;
    display:grid;
    grid-template-columns: 85% 10%;
    grid-template-rows: 8% 25% 5% 50% 8%;
    grid-template-areas: 
    "Header Button"
    "Description Description"
    ". ."
    "Contributions Contributions"
    ". .";

`;

const Description  = styled.p`

    border: 2px solid black;
    text-align:center;
    grid-area: Description;
    font-size:10px;
`;

const Contributions = styled.ul`

border: 2px solid black;

    list-style:none;
    grid-area: Contributions;
    flex-direction:column;
    text-align:left;
    justify-content: space-evenly;
    align-items: space-evenly;
`;

const Contribution = styled.li`

    font-size:10px;
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
    return (<CardWrapper style={this.props.style}>


        {this.state.cardFlipped? <FlippedContent>

            {/*would change the flip to x instead when flipped or reverse swirly*/}
            <Title flipped = {true}> {title} </Title>
            <FlipButton  onClick = {this.flipButton} image = ""/>

            <Description> {description}</Description>

            <Contributions>
                <strong style={{textAlign:"left", textDecoration:"underline"}}> Contributions</strong>
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
            <FlipButton  onClick = {this.flipButton} image = " "/>

       </NonFlipped>
        }

        
    </CardWrapper>


    )
    }
}
export default ProjectCard;