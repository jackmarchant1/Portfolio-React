import React, {useEffect} from 'react'
import '../lib/css/Detail.css'

function ContactDetail(contact) {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
    <h1 className="display3">{contact.title}</h1>
    <a href={contact.link}>
      <img id="contact-banner" src={contact.icon} alt="Icon"/>
    </a>
    
    </>
  )
}

export default ContactDetail