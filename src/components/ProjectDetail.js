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
            <div className="d-flex justify-content-around flex-wrap">
                <div className={'attribute'}>
                    <h4 className={'mb-0'}>Category: </h4>
                    <span className="yellow">{project.category}</span>
                </div>
                <div className={'attribute'}>
                    <h4 className={'mb-0'}>Technologies: </h4>
                    <span className="yellow">{project.technologies}</span>
                </div>
                <div className={'attribute'}>
                    <h4 className={'mb-0'}>Year: </h4>
                    <span className="yellow">{project.year}</span>
                </div>
                {project.demo != null ? (<div className={'attribute'}>
                    <h4 className={'mb-0'}>Demo: </h4>
                    <a href={project.demo} className="yellow">Click here</a>
                </div>) : <></>}

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