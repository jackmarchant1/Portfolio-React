import React, {useEffect} from 'react'
import Resume from '../lib/misc/Resume_Portfolio.pdf'
import pgbann from '../lib/images/pub-golf-banner.png'
import '../lib/css/AboutDetail.css'

function AboutDetail(about) {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div className="container text-left">
      <img id="banner" src={pgbann} alt="Project Banner" />
      <h1 className="display-3 text-center">{about.title}</h1>
      <p>{about.text}</p>
        <br/>
        <a className='li' href={Resume}><i className={about.title==="Myself" ? "bi bi-download" : "bi bi-forward"}></i>  {about.title==="Myself" ? "Resume" : "Website"}</a>
    </div>
  )
}

export default AboutDetail