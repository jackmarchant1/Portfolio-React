import React, {useEffect} from 'react'
import './Projects'
import '../lib/css/ProjectDetail.css'
import pgbann from '../lib/pub-golf-banner.png'

function ProjectDetail(project) {
  useEffect(() => {
    document.title = "Projects";
  }, []);
  return (
      <div className="pd container text-left">
        <img id="banner" src={pgbann} alt="Project Banner" />
        <h1 className="display-3 text-center">{project.title}</h1>
          <div className="attributes">
            <div className="row">
              <div className="col">
                <h4>Category: <span className="yellow">{project.category}</span></h4>
              </div>
              <div className="col">
                <h4>Technologies: <span className="yellow">{project.technologies}</span></h4>
              </div>
              <div className="w-100"></div>
              <div className="col">
                <h4>Year: <span className="yellow">{project.year}</span></h4>
              </div>
              <div className="col">
                <h4>Live Demo: </h4>
              </div>
            </div>
          </div>
        <h2>Description</h2>
        <p>{project.description}</p>
      </div>
  )
}

export default ProjectDetail