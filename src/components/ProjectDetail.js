import React, {useEffect} from 'react'
import '../lib/css/Detail.css'

function ProjectDetail(project) {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  if (project.screenshots !== undefined) {
    var screenshots = project.screenshots.map(function(image) {
      return (<img src={image} alt="Project screenshot" />);
     });
  }

  return (
      <div className="pd container text-left">
        {project.banner !== undefined ? <img id="banner" src={project.banner} alt="Project Banner" /> : <></>}
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
        <div className="screenshots">
          {project.screenshots !== undefined ? screenshots : <></>}
        </div>
      </div>
  )
}

export default ProjectDetail