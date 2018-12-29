import React from 'react';


import PageWrapper, {ContactLink, ContactWrapper, Header}  from '../../components/Contact';



const Contact = (props) => {

    const resumeURL = "https://firebasestorage.googleapis.com/v0/b/chrisbtreat-website.appspot.com/o/Prince%20Christian%20Basiga%20Resume.pdf?alt=media&token=2b212b1c-b5cf-4396-95d8-3493904715fd";

    console.log("contact props", props);
    return (
    
        <PageWrapper>
    <Header style = {{gridName: "contact-header"}}> Get in Touch!</Header>

    <ContactWrapper style = {{gridName: "contacts"}}>

            {props.contactLinks.map( contact => {
                    console.log(contact);
                    return <ContactLink  key = {contact.url} href = {contact.url} image={contact.image} alt={contact.title}/>

            })}

    </ContactWrapper>

    <Header style = {{gridName: "resume-header"}}>Download my Resume </Header>
    <ContactWrapper style = {{gridName: "resume"}}>
    <ContactLink key="resume" href = {resumeURL} image = {require("../../images/pdfIcon.png")}/>
    
    </ContactWrapper>


    </PageWrapper>)


}

export default Contact;