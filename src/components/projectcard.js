import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Tags from './tags';
const FlipFront = require("../images/flip_front.png");
const FlipBack = require("../images/flip_back.png");
const MoreButton = require("../images/more_button.png");
//This is cards on homepage previewing projects.
//Card Wrappers are flex items.
const CardWrapper = styled.li`

    margin-left:5%;
    margin-top:1%;
    border: 1px solid black;
    overflow:hidden;
    width:300px;

    height:300px;

`;

const NonFlipped = styled.div`

    width:100%;
    display:grid;
    grid-template-columns: 100%;
    grid-template-rows: 200px 1fr 1fr 1fr;
    grid-template-areas:
    "thumbnail"
    "Header"
    "tags"
    "Button";
    
   
`;

const ThumbNail = styled.div`

    width:100%;

    height:100%;
    margin:auto;
    border-bottom: 1px solid white;
    background-image: url(${props => props.thumbnail});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    cursor:pointer;
`;


//Since this is overlaying, I want it to be on bottom of image.
//Only as big as text that covers it.
//Change to grid cause fuckkkk.
const Title = styled.p`

    text-align: ${props => props.flipped? "center" : "center"};
    font-weight:bold;
  //  flex-grow: 2;
    font-size:20px;
    grid-area: Header;
    margin: ${props => props.flipped? "0" : "auto"};
`;


//Add flip shit later.
//Why isn't this and title on same row??
const FlipButton = styled.div`

    cursor:pointer;
    grid-area: Button;
    justify-self:end;
    background-image: url(${props => props.image});
    width:32px;
    height:32px;
`;





const FlippedContent = styled.div`

    width:100%;
    overflow:hidden;
    height:100%;
    position:relative;

`;

const FlippedHeader = styled.div`
    width:100%;
    display:flex;
    grid-area:Flip;
    justify-content: flex-end;
`;

const Description  = styled.div`

    grid-area: Description;
    font-size:0.8em;
    word-wrap: break-word;

    overflow: auto;
    max-height:30%;
`;

const ContributionsHeader = styled.div`

    //why overflowing?
    grid-area:contribution-header;
    text-decoration:underline;
    font-weight:bold;
    font-size: 1em;


    width:100%;

`;
const Contributions = styled.ul`

    width:100%;
    list-style:none;
    grid-area: Contributions;
    flex-grow:2;
    display:flex;
    flex-direction:column;
    align-self: flex-end;
  
    align-items: flex-start;
`;

const Contribution = styled.li`

    font-size:10px;
    width:100%;
    text-align:left;
    flex-grow:2;

    margin:auto;
`;

const LinksToProject = styled.div`

    position:absolute;
    width:99%;
    bottom:0;
    grid-area:Footer;
    display:flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    margin-top: auto;


`;

const LinkToMore = styled.div`

    text-decoration:none;
    color:white;
    text-align:right;
    background-image: url(${props => props.image});
    height:32px;
    width:32px;
    background-position: center;
    background-size: contain;
    cursor:pointer;


`;

const ImageLinks = styled.div`
`;
const ImageLink = styled.a`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: contain;
    width:50px;
    height:50px;
    text-align:left;
    margin-left:10px;
`;
//This will be a horizontal flex container itself.
//Maybe it's own thing.


//This might ned to be container instead of component since is affecting state now.
class ProjectCard extends Component{


    constructor(props){

        super(props);


        this.state = {
            cardFlipped: false
        };

        this.flipButton = this.flipButton.bind(this);
        this.onProjectClicked = this.onProjectClicked.bind(this);
    }

    flipButton()  {

        this.setState({cardFlipped : !this.state.cardFlipped});
    }

    onProjectClicked(){

        //I want to push with props.
    const {title, tags, thumbnail, links, description, contributions, projectUid} = this.props;

        this.props.history.push("/projects/"+projectUid, {title,thumbnail, tags, links, description});

    }

    render(){

    const {title, tags, thumbnail, links, description, contributions} = this.props;

    console.log("card props", this.props);
    //Add grid here.
    return (<CardWrapper>


        {this.state.cardFlipped? <FlippedContent>

            {/*would change the flip to x instead when flipped or reverse swirly*/}
            <FlippedHeader><FlipButton  onClick = {this.flipButton} image = {FlipBack}/>
            </FlippedHeader>
            <Title flipped = {true}> {title} </Title>
            

            <Description> {description}</Description>


            <ContributionsHeader>Contributions</ContributionsHeader>
            <Contributions>

                {contributions && contributions.map( contribution => {


                    //Just title prob fine, tbh. That's point of full contribution drop down.
                    return <Contribution key ={ contribution }>  <strong> {contribution} </strong> 
                     </Contribution>
                })}

            </Contributions>

            <LinksToProject>


                <ImageLinks>
                { links && links.map (link => {

                    console.log("link",link);
                    return <ImageLink key = {link.url} href = {link.url}><img src={link.image} style={{width:"25px", height:"25px"}}/></ImageLink>
                })}
                </ImageLinks>
                <LinkToMore onClick = {this.onProjectClicked} image = {MoreButton}/>
            
            </LinksToProject>


        </FlippedContent> :
        
        <NonFlipped>

            {thumbnail && <ThumbNail thumbnail={thumbnail} onClick = {this.onProjectClicked}>
            </ThumbNail>}
            <Title flipped={false}> {title} </Title>    

            <Tags tags={tags} style={{gridName:"tags"}}/>
            <FlipButton  onClick = {this.flipButton} image = {FlipFront}/>

       </NonFlipped>
        }

        
    </CardWrapper>


    )
    }
}
export default withRouter(ProjectCard);