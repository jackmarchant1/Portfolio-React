import React, {useEffect} from 'react'
import Map from './Map'
import { Link } from 'react-router-dom';
import '../lib/css/Map.css'

function Homepage() {
    useEffect(() => {
        document.title = "Home";
    }, []);
  return (
    <div className="container-fluid">
                <div className="title">
                    <h1 className="display-1">JACK MARCHANT</h1>
                    <h3>computer science student and software developer</h3>
                </div>
                <div className="navigation">
                    <div className="tubemap">
                        <Map animateIn="animate"/>
                    </div>
                    <div className="menu">
                        <ul>
                            <Link to="/projects" id="proj" className='li'>Projects Line</Link>
                            <Link to="/about" id="about" className='li'>About Me Line</Link>
                            <Link to="/contact" id="cont" className='li'>Contact Line</Link>
                        </ul>
                    </div>
                </div>
                
            </div>
  )
}

export default Homepage