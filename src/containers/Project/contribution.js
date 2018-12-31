import React, {Component} from 'react';
import styled from 'styled-components';

import buttonImage from '../../images/down-arrow.png';
const Wrapper = styled.div`

    display:grid;
    width:65%;
    margin-left:25%;
    margin-bottom:1%;
    
    grid-template-columns: 80%;
    grid-template-rows: 10% 90%;
    grid-template-areas:
    "bullet"
    "content";
`;



//Change this to contain whole image, I'll make in gimp, then swap images.  
const ContributionBullet = styled.div`
    
    grid-area: bullet;
    display:grid;
    grid-template-columns: 95% 5%;
    grid-template-rows: auto;
    grid-template-areas:
    "title button";
    border: 2px solid black;
    height:30px;
    background-color:#082ed0;
    color:white;
    margin-left: 5%;
    cursor: pointer;

    &: hover{

        //Do acual color later.
        opacity:0.5;
    }
`;

const ContributionTitle = styled.div`
    grid-area: title;
    text-align:left;



`;

const DropdownButton = styled.div`

    grid-area: button;
    height:20px;
    background-image: url(${props => props.image});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    grid-area:button;
    margin-top:1%;
`;

const ContributionContent = styled.div`

    grid-area: content;
    display: flex;
    flex-direction:column;
    align-items: space-between;
`;



const Description = styled.p`

    text-align:left;
    width:80%;
    margin:auto;
    margin-top:5%;
`;

const Snapshots = styled.div`

    display:flex;
    margin:auto;
    justify-content: space-evenly;
    flex-wrap:wrap;
    align-items: space-evenly;
`;

const Snapshot = styled.img`

    flex-shrink: 2;
    align-self:space-evenly;
    width:30%;
    margin-left: 1%;
    margin-bottom:2%;

`;



class Contribution extends Component{


    constructor(props){
        
        super(props);

        this.state = {

            dropdownOpen: false,
        };

        this.onDropdownClicked = this.onDropdownClicked.bind(this);
    }

    onDropdownClicked(){

        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render(){

        console.log("contribution props", this.props);
        return <Wrapper>

           
            <ContributionBullet  onClick = {this.onDropdownClicked} >
                <ContributionTitle> {this.props.title} </ContributionTitle>
                <DropdownButton image = {buttonImage}/>
            </ContributionBullet>

            {this.state.dropdownOpen && <ContributionContent>

              
                {/*Description maybe markdown */}
                <Description> {this.props.description} </Description>
                <Snapshots>

                    {this.props.snapshots && this.props.snapshots.map( snapshot => {

                        return  <Snapshot key = {snapshot} src= {snapshot}></Snapshot>
                    })}

                </Snapshots>
            </ContributionContent>}


        </Wrapper>

    }
}

export default Contribution;