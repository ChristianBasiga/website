import React, {Component} from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`

    display:grid;

    grid-template-columns: auto 10%;
    grid-template-rows: 10% 90%;
    grid-template-areas:
    "bullet"
    "content";
`;



const ContributionBullet = styled.div`
    
    grid-area: bullet;
    display:flex;

`;

const ContributionTitle = styled.p`

    flex-grow:2;
`;

const DropdownButton = styled.div`

    background-image: url(${props => props.image});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const ContributionContent = styled.div`

    grid-area: content;
    display: flex;
    flex-direction:column;

`;

const Description = styled.p`

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
    margin-top:1%;
    margin-left:5%;

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
        return <Wrapper>

            <ContributionBullet>
                <ContributionTitle> {this.props.title} </ContributionTitle>
                <DropdownButton onClick = {this.onDropdownClicked}>Dropdown</DropdownButton>

            </ContributionBullet>


            {this.state.dropdownOpen && <ContributionContent>


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