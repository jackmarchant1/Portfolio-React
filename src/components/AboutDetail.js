import React, {useEffect} from 'react'
import Resume from '../lib/misc/Resume_Portfolio.pdf'
import '../lib/css/AboutDetail.css'

function AboutDetail(about) {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div className="container text-left">
      <h1 className="display-3 text-center">{about.title}</h1>
      <p>{about.text}</p>
        <br/>
        <a className='li' href={about.title ==="Myself" ? Resume : "mailto:info@forge38.co.uk"}><i className={about.title==="Myself" ? "bi bi-download" : "bi bi-forward"}></i>  {about.title==="Myself" ? "Resume" : "Reach out"}</a>
    </div>
  )
}

export default AboutDetail