import React, {Component} from 'react';
import styled from 'styled-components';
import Arrow from './arrow';



const Wrapper = styled.div`

    display:flex;
    justify-content:center;
    
   
`;

const ActiveScreen = styled.div`


    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 400px;
    height: 300px;
    border: 2px solid black;
`;

class Carousel extends Component{

    constructor(props){

        super(props);

        this.state = {

            currentIndex:0,

        };

        this.onMoveLeft = this.onMoveLeft.bind(this);
        this.onMoveRight = this.onMoveRight.bind(this);
    }

    onMoveLeft(){

        this.setState( state => {

             const currentIndex = state.currentIndex == 0? this.props.images.length - 1 : state.currentIndex - 1;

             return {
                 currentIndex
             };
        });
    }

    onMoveRight(){

        this.setState( state => {

            console.log("I'm happening? Move right");
            const currentIndex = (state.currentIndex + 1) % this.props.images.length;

            return {
                currentIndex
            };
       });
    }

    render(){


        const currentImage = this.props.images[this.state.currentIndex];
        console.log("images", this.props.images );
        console.log("curentImage is " , currentImage);

        //Basic core of carousel done, now would be good to show mini versions of all pictures?
        //Is it worth doing that or is just having arrow indicaters enough? If so then they should be on same line.
        //Also look into making this touch screen.
        return (<Wrapper style = {this.props.style}>

            <Arrow direction = "left" onClick = {this.onMoveLeft} style = {{ width: "50px", height:"50px", alignSelf: "center"}}/>

            <ActiveScreen image={currentImage}></ActiveScreen>
            <Arrow direction = "right" onClick = {this.onMoveRight} style = {{ width: "50px", height:"50px", alignSelf: "center"}}/>


        </Wrapper>)

    }




};

export default Carousel;
//Start doing stuff like required props and expected prop types too.