import React, {Component} from 'react';
import Arrow from './arrow';



const Wrapper = styled.div`

    display:grid;

    grid-template-columns: 10% 50% 10%;
    grid-template-rows: 100%;
    grid-template-areas:
    "Left Slide Right";
`;

const ActiveScreen = styled.div`


    background-image: ${props => props.image};
    background-position: center;
    background-size: contain;
    width: 50%;
    height: 50%;
    grid-area: Slide;
`;

const Arrow = styled.div`

    background-image: ${props => props.image};
    background-position: center;
    background-size: contain;
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

            const currentIndex = (state.currentIndex + 1) % this.props.images.length;

            return {
                currentIndex
            };
       });
    }

    render(){


        const currentImage = this.props.images[this.state.currentIndex];



        //Basic core of carousel done, now would be good to show mini versions of all pictures?
        //Is it worth doing that or is just having arrow indicaters enough? If so then they should be on same line.
        //Also look into making this touch screen.
        return (<Wrapper>

            <ActiveScreen image={currentImage}></ActiveScreen>
            <Arrow direction = "left" onClick = {this.onMoveLeft} style = {{gridArea: "Left", alignSelf: "start"}}/>
            <Arrow direction = "right" onClick = {this.onMoveRight} style = {{gridArea: "Right", alignSelf: "end"}}/>


        </Wrapper>)

    }




};

export default Carousel;
//Start doing stuff like required props and expected prop types too.