import React, {Component } from 'react';

import AboutPage, {ProfilePicture, BioHeader, Bio, ListHeader, List, ListItem} from '../../components/About';




class About extends Component{


    constructor(props){

        super(props);

        //In future import firebase and pull this information so that it stays updated.
        this.state = {
            bio: "This is my bio.",
            achievements_rewards: [],
            education: [],
        }
    }

    render(){

        return (<AboutPage>

            <ProfilePicture image = {require("../../images/profilepic.jpg")}/>
            <BioHeader>
                <p>Hi, my name is Prince Christian Basiga</p>
                <p>I like making shit.</p>
            </BioHeader>
            <Bio>{this.state.bio}</Bio>
            
            {/*Perhaps add icons too later, wouldn't be hard to do, todo: adapt this to use firebase. */}
            <ListHeader style = {{gridArea:"EducationHeader"}}> Education </ListHeader>
            <List style = {{gridArea: "Education"}}>
        {/*Might make icon item, but idk if really worth lol*/}
                <ListItem><img style = {{width:"25px", height:"25px"}}src={require("../../images/profilepic.jpg")}/>fsdfdsfdsf</ListItem>
            </List>

            <ListHeader style = {{gridArea: "AchievementsHeader"}}> Achievements & Rewards</ListHeader>
            <List style = {{gridArea: "Achievements"}}>
            <ListItem>fsdfdsfdsf</ListItem>
            <ListItem>fsdfdsfdsf</ListItem>

            </List>

        </AboutPage>);
    }



}

export default About;