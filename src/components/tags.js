import React from 'react';
import styled from 'styled-components';

const TagsWrapper = styled.ul`

    display:flex;
    flex-direction:row;
    list-style:none;
    justify-content:flex-start;
    flex-wrap: wrap;
    //width:60%;
`;

//I want to limit flex per column better.
export const Tag = styled.li`


    text-align:center;
    background-color: ${props => props.color};
    border-style:double;
    border-color: ${props => props.color};
    border-radius: 10px;
    color:white;
    margin-right:10px;
    margin-bottom:5px;
    
`;

const Tags = (props) => {

    return (<TagsWrapper>

        {props.tags && props.tags.map( tag => {

            var color = "black";
            switch (tag.type){
                case "Language":
                    color = "red";
                break;

                case "Technology":
                    color = "blue";
                break;

                case "Context":
                    color = "green";
                break;
                
            }

            return <Tag key = {tag.title} color = {color}> <p style={{display:"inline", fontSize:"1em", textAlign:"center"}}>{tag.title} </p></Tag>;

        })}

    </TagsWrapper>)

}


export default Tags;




