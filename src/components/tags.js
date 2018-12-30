import React from 'react';
import styled from 'styled-components';

const TagsWrapper = styled.ul`

    display:flex;
    flex-direction:row;
    list-style:none;
    justify-content:flex-start;
    flex-wrap: wrap;
    width:60%;
    margin:auto;
`;

//I want to limit flex per column better.
export const Tag = styled.li`


    text-align:center;
    //Then color will depend on stype of tag, will change colors later.
    background-color: ${props => props.color};
    border-style:double;
    border-color: ${props => props.color};
    border-width:2px 5px 2px 5px;
    border-radius: 10px;
    color:white;
    margin-right:10px;
    margin-bottom:5px;
    flex-shrink:2;
    font-size:10px;
    
`;

const Tags = (props) => {

    return (<TagsWrapper>

        {props.tags && props.tags.map( tag => {

            var color = "black";
            switch (tag.type){
                case "Language":
                    color = "red";
                break;

                case "Tech":
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




