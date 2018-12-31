import React, {Component} from 'react';
import {Label, Input} from './index';

import styled from 'styled-components';



//Move these into components folder later.
const Wrapper = styled.div`


`;

const FieldsHeader = styled.p`


`;

const SubmitButton = styled.button`



`;
//Essentially a form that handles uploading project cards into database.
//This will make testing new layouts easy and adding new content easy as well.
class ProjectCardCreation{



    constructor(props){

        super(props);

       
        //Is it worth making this?
        this.state = {

            title:"",
            description:"",
            //How am I going to make the screen shot shit for this?? Lmao, okay, this takes care of tedious part
            //uploading screenshots not too tedious but maybe add as feature later.
            contribution:"",
            contributions,
            //Links will have type, like github and I'll store that locally, not in storage.
            linkImage:null,
            linkUrl:"",
            links,
            tagTitle:"",
            tagType:"",
            tags,

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
        this.state({
            [target.id] : target.value
        });
    }

    addContribution(){

        this.contributions.push(this.state.contribution);

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
        const tag = {title:tagTitle, type:type};
        //It is in state, but not necessarry to update.. hmm.
        this.setState( state => {
            const tags = state.tags.concat(tag);

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
        const {title, description, contributions, tags, links, thumbnail} = this.state;

        //Uploads thumbnail into storage.
        const storage = firebase.storage().ref("project-cards/thumbnails/");
        storage.put(thumbnail)
            .then( value =>{

                console.log("Thumbnail uploaded",value);
                
            })
            .catch( err => {

                console.log("error uploading thumbnail", err);
            });



        //Uploads project card.
        collectionRef.doc().set({
            title,
            description,
            thumbnail: thumbnail.url,
            contributions,
            tags,
            links,

        })
        .then( value => {

            console.log("project card made",value);

        })
        .catch( err => {

            console.log("error making project card.", err);
        })
    }

    render(){


        return (

            <Wrapper>

                <div>
                <Label> Title </Label>
                <Input id="title" onChange = {this.onFieldUpdate}/>
                </div>

                <div>
                <Label> Description </Label>
                <Input id="description" onChange = {this.onFieldUpdate}/>
                </div>

                <div>
                <Label> Thumbnail</Label>
                <Input id="thumbnail" type="file" onChange = {this.onFieldUpdate}/>
                </div>

                <div>
                <Label> Contribution </Label>
                <Input id="contribution" onChange = {this.onFieldUpdate}/>
                <SubmitButton onClick = {this.addContribution}> Add Contribution</SubmitButton>
                </div>

                <div>
                <FieldsHeader>Tag</FieldsHeader>
                <Label> Title </Label>
                <Input id="tagTitle" onChange = {this.onFieldUpdate}/>
                <Label> Type </Label>
                {/*Change to drop down later*/}
                <Input id="tagType" onChange = {this.onFieldUpdate}/>
                <SubmitButton onClick = {this.addTag} >Add Tag</SubmitButton>
                </div>

                <div>
                <FieldsHeader>Link</FieldsHeader>
                <Label> url </Label>
                <Input id="linkUrl" onChange = {this.onFieldUpdate}/>
                <Label> Title </Label>
                <Input type = "file" id="linkImage" onChange = {this.onFieldUpdate}/>
                <SubmitButton onClick = {this.addLink}> Add Link</SubmitButton>
                </div>

                


                <SubmitButton onClick = {this.addProjectCard}> Add Project Card</SubmitButton>

            </Wrapper>

        )
    }

}

export default ProjectCardCreation;