import React, {Component} from 'react';
import firebase from 'firebase';
import styled from 'styled-components';
import ProjectCardCreation from './projectcard-creation';
//This page is for my purposes, just streamlines writing into database to create a new project card
//with corresponding project page etc.
//This page will initially render with login page, only I have credentials for.
//then goes into what I can do.


const Wrapper = styled.div`

    margin:auto;
    width:60%;

`;


const LoginSection = styled.form`


`;


//Moved in componetns folder so its temp spaghetti.
export const Label = styled.label`


`;

export const Field = styled.input`

    border: 1px solid black;

`;

const LoginButton = styled.button`


    cursor:pointer;
    border:1px solid black;
`;

const LoggedInSection = styled.div`


`;


const Form = styled.div`

    border: 2px solid black;
`;

const InputGroup = styled.div`


`;



class AdminPage extends Component{



    constructor(props){

        super(props);

        //Well then... With this said, redux would be good lmao, nah
        //Safe measure force to always log in when enter admin page.
        this.state ={

            username: "",
            password: "",
            loggedIn : false,
        };

        this.updateField = this.updateField.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.createProjectCard = this.createProjectCard.bind(this);
    }



    updateField(evt){

        this.setState({
            [evt.target.id] : evt.target.value
        });
    }


    onLogin(){

        const firebaseAuth = firebase.auth();
        firebaseAuth.signInWithEmailAndPassword( this.state.username, this.state.password)
            .then( user => {

                console.log(user);
                this.setState({
                    loggedIn : user != null
                });
            })
            .catch (err => {

                console.log(err);
            })
    }



    createProjectCard(){


    }



    render(){



        return (
            <Wrapper>

                {this.state.loggedIn? 
                    <LoggedInSection>

                        <ProjectCardCreation/>
                        

                    </LoggedInSection>
                :
                    <LoginSection onSubmit = { (evt) => {


                        evt.preventDefault();

                        this.onLogin();

                    }}>

                        <Label for = "username"> Username </Label>
                        <Field id = "username" onChange = {this.updateField} value = {this.state.username}/>
                        <Label for ="password"> Password </Label>
                        <Field id = "password" type = "password" onChange = {this.updateField} value = {this.state.password}/>
                        <LoginButton type = "submit"> Login</LoginButton>
                    </LoginSection>
            
            }

            </Wrapper>
        )


    }


}

export default AdminPage;