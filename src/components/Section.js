import React, {useState, useEffect} from 'react'
import  '../lib/css/Section.css'
import {projectArray, aboutArray, contactArray} from '../lib/objects/Objects'
import Map from './Map'
import Sign from './Sign';
import ProjectDetail from './ProjectDetail'
import ContactDetail from './ContactDetail';
import AboutDetail from './AboutDetail';
import { Link } from 'react-router-dom';


function Section({section}) {
    useEffect(() => {
        document.title = section === "proj" ? "Projects" : section === "about" ? "About" : "Contact"
    }, []);

    const [stop, setStop] = useState(0);

    function getDivisor() {
        switch (section) {
            case "proj":
                return projectArray.length;
            case "about":
                return aboutArray.length;
            case "cont":
                return contactArray.length;
            default:
                return 1;
        }
    }

    return (
        <div className="d-flex justify-content-between flex-row project-container">
            <div className="left d-flex flex-column flex-grow">
                <Link to='/'>
                    <Sign section={section}/>
                </Link>
               
                <Map selected={section} stop={stop+1} setStopHandler={setStop}/>
            </div>
            <div className="detail d-flex flex-column justify-content-between">
                {
                section === "proj" ? <ProjectDetail {...projectArray[stop]}/> : 
                section === "about" ? <AboutDetail {...aboutArray[stop]}/> :
                section === "cont" ? <ContactDetail {...contactArray[stop]}/> : null
                }
                <div className="row arrows">
                    <div className="col clickable"  onClick={() => {
                        setStop((stop - 1 + getDivisor()) % getDivisor());
                    }}>
                        <i className="bi bi-arrow-left" role="button" style={{fontSize: '4rem', float: 'left'}}></i>
                    </div>
                    <div className="col" onClick={() => {
                        setStop((stop+1) % getDivisor());
                    }}>
                        <i className="bi bi-arrow-right" role="button" style={{fontSize: '4rem', float: 'right'}}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section