import React, {Component} from 'react';
import {Label, Field} from './index';
import firebase from 'firebase';
import styled from 'styled-components';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import {TagTypes, ProjectLinks} from './constants';

//Move these into components folder later after update layout.
const Wrapper = styled.div`


    width:60%;
    margin:auto;
    display:flex;
    flex-direction:column;
    text-align:left;


`;

const StyledDropdown = styled(Dropdown)`


    width: 60%;
`;

const GeneralInformation = styled.div`

    display:flex;
    flex-direction:column;
`;

const FieldsHeader = styled.p`


    font-weight:bold;
    font-size:20px;
    text-decoration:underline;
`;

const SubmitButton = styled.button`

    display:block;
    margin:auto;
    margin-top:1%;


`;
//Essentially a form that handles uploading project cards into database.
//This will make testing new layouts easy and adding new content easy as well.
//ToDo: Also add dropdown for list of projects to choose from, eitherway this
//is meant for rapid testing layout and adding these easily.
class ProjectCardCreation extends Component{



    constructor(props){

        super(props);

       
        //Is it worth making this?
        this.state = {

            title:"",
            description:"",
            //How am I going to make the screen shot shit for this?? Lmao, okay, this takes care of tedious part
            //uploading screenshots not too tedious but maybe add as feature later.
            contribution:"",
            contributions: [],
            //Links will have type, like github and I'll store that locally, not in storage.
            linkImage:"",
            linkUrl:"",
            links :[],
            tagTitle:"",
            tagType:"",
            tags:[],
            projectUid:"",
            result:"",

            thumbnail:null,

        }

        this.onFieldUpdate = this.onFieldUpdate.bind(this);
        this.addContribution = this.addContribution.bind(this);
        this.addLink = this.addLink.bind(this);
        this.addTag = this.addTag.bind(this);
        this.addProjectCard = this.addProjectCard.bind(this);

        //TODO: Add error and empty field checking before adding any of these.
    }

    onFieldUpdate(evt){

        const target = evt.target;
        this.setState({
            [target.id] : target.value
        });
    }

    addContribution(){


        this.setState( state => {

            const contributions = state.contributions.concat(state.contribution);

            return {
                contributions,
                contribution:"",
            };
        });
    }

    addTag(){

        const {tagTitle, tagType} = this.state;
        const tag = {title:tagTitle, type:tagType};
        //It is in state, but not necessarry to update.. hmm.
        this.setState( state => {
            const tags = state.tags.concat(tag);
            console.log("tags", tags);
            return {
                tags,
                tagTitle:"",
                tagType:"",
            };
        })
    }

    addLink(){

        const {linkImage, linkUrl} = this.state;
        const link = {url:linkUrl, image: linkImage};
        
        this.setState( state => {

            const links = state.links.concat(link);

            return {
                links,
                linkImage: "",
                linkUrl:"",
            }
        })

    }


    addProjectCard(){

        const firestore = firebase.firestore();

        const collectionRef = firestore.collection("project-cards");

        //Retrieves componetns of project card from state.
        //Links have limited images, will just be dropdown of type actually.
        const {projectUid, title, description, contributions, tags, links, thumbnail} = this.state;

            console.log("thumbnail", thumbnail);
        //Uploads thumbnail into storage.
        const storage = firebase.storage().ref("project-cards/thumbnails/"+thumbnail.name);
        storage.put(thumbnail)
            .then( bucket =>{

                console.log("Thumbnail uploaded",bucket);


                        //Uploads project card.
                collectionRef.doc().set({
                    projectUid,
                    title,
                    description,
                    thumbnail: thumbnail.name,
                    contributions,
                    tags,
                    links,
                })
                .then( value => {

                    console.log("project card made",value);
                    this.setState({
                        result :"Added project card, you can check homepage"
                    });

                })
                .catch( err => {

                    console.log("error making project card.", err);
                    storage.delete();
                });
                
            })
            .catch( err => {

                console.log("error uploading thumbnail", err);
            });



       
    }

    render(){


        return (

            <Wrapper>

                <GeneralInformation>

                    <FieldsHeader> General Information </FieldsHeader>
                <div>

                {/*In future make this dropdown after pulling all projects*/}
                <Label for ="projectUid"> Project Id</Label>
                <Field id = "projectUid" onChange = {this.onFieldUpdate} value = {this.state.projectUid}/>
                <Label for = "title"> Title </Label>
                <Field id="title" onChange = {this.onFieldUpdate} value = {this.state.title}/>
                </div>

                <div>
                <Label for = "description"> Description </Label>
                <Field id="description" onChange = {this.onFieldUpdate} value = {this.state.description}/>
                </div>

                <div>
                <Label for = "thumbnail"> Thumbnail</Label>
                <Field id="thumbnail" type="file" onChange = { (evt,file) => {

                    this.setState({
                        thumbnail : evt.target.files[0],
                    })
                }}/>
                </div>

                </GeneralInformation>

                <div>
                <Label for = "contribution"> Contribution </Label>
                <Field id="contribution" onChange = {this.onFieldUpdate} value = {this.state.contribution}/>
                <SubmitButton onClick = {this.addContribution} > Add Contribution</SubmitButton>
                </div>

                <div>
                <FieldsHeader>Tag</FieldsHeader>
                <Label for = "tagTitle"> Title </Label>
                <Field id="tagTitle" onChange = {this.onFieldUpdate} value = {this.state.tagTitle}/>
                <div>
                <Label for = "tagType"> Type </Label>
                {/*Change to drop down later*/}
                <StyledDropdown id = "tagType" options = {TagTypes} onChange = {this.onFieldUpdate} value ={this.state.tagType}/>
                </div>
                <SubmitButton onClick = {this.addTag} >Add Tag</SubmitButton>
                </div>

                <div>
                <FieldsHeader>Link</FieldsHeader>
                <Label> url </Label>
                <Field id="linkUrl" onChange = {this.onFieldUpdate} value = {this.state.linkUrl}/>

                <div>
                <Label> Image </Label>
                <StyledDropdown id ="linkUrl" options = {ProjectLinks} onChange = {this.onFieldUpdate} value = {this.state.linkImage}/> 
                </div>
                
                <SubmitButton onClick = {this.addLink}> Add Link</SubmitButton>
                </div>

                


                <SubmitButton style={{marginTop:"5%"}}onClick = {this.addProjectCard}> Add Project Card</SubmitButton>
                <p>{this.state.result}</p>

            </Wrapper>

        )
    }

}

export default ProjectCardCreation;