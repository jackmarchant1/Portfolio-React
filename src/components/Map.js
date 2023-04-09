import React from 'react'
import { Link } from 'react-router-dom';
import '../lib/css/Map.css';


function Map( {animateIn, selected, stop, setStopHandler} ) {

    var defaultVal = '0.4';
    if (selected === undefined) {
        defaultVal = '1';
    }
    var [og, ag, pg, cg] = [defaultVal, defaultVal, defaultVal, defaultVal];
    switch (selected) {
        case 'proj':
            pg = '1';
            break;
        case 'about':
            ag = '1';
            break;
        case 'cont':
            cg = '1';
            break;
        case 'other':
            og = '1';
            break;
        default:
            break;
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 788 452" fill="none">
            <g className={animateIn} id="tubeMap">
                <g id="otherGroup" opacity={og}>
                    <path id="line_green1" d="M133.5 9.5L205.75 121.027C207.219 123.294 208 125.937 208 128.639V287.5V450.5" stroke="#2AD147" strokeWidth="12"/>
                    <path id="line_grey" d="M373.5 3.5V133.491C373.5 136.73 374.623 139.868 376.678 142.372L537.322 338.128C539.377 340.632 540.5 343.77 540.5 347.009V451.5" stroke="#ADADAD" strokeWidth="12"/>
                    <path id="line_green2" d="M214 314H787.5" stroke="#2AD147" strokeWidth="12"/>
                </g>

                <g id="projectGroup" opacity={pg} className={selected === "proj" ? 'activeGroup' : 'inactiveGroup'}>
                    <Link to="/projects" id="proj" className='li' onClick={() => {
                        setStopHandler(0);
                    }}>
                        <rect id="projectsLine" x="103" y="56" width="582" height="335" rx="59" stroke="#FCFA21" strokeWidth="12" />
                    </Link>
                    <circle id="p_stop_05" className={stop === 5 ? "active" : "inactive"} cx="119" cy="68" r="14.5" fill="#D9D9D9" stroke="black" strokeWidth="5"/>
                    <circle id="p_stop_04" className={stop === 4 ? "active" : "inactive"} cx="297" cy="54" r="14.5" fill="#D9D9D9" stroke="black" strokeWidth="5"/>
                    <circle id="p_stop_03" className={stop === 3 ? "active" : "inactive"} cx="686" cy="153" r="14.5" fill="#D9D9D9" stroke="black" strokeWidth="5"/>
                    <circle id="p_stop_02" className={stop === 2 ? "active" : "inactive"} cx="609" cy="391" r="14.5" fill="#D9D9D9" stroke="black" strokeWidth="5"/>   
                    <circle id="p_stop_01" className={stop === 1 ? "active" : "inactive"} cx="300" cy="391" r="14.5" fill="#D9D9D9" stroke="black" strokeWidth="5"/>
                </g>

                <g id="aboutGroup" opacity={ag} className={selected === "about" ? 'activeGroup' : 'inactiveGroup'}>
                    <Link to="/about" id="proj" className='li' onClick={() => {
                        setStopHandler(0);
                    }}>
                        <path id="aboutLine" d="M1.5 357H246.204C249.617 357 252.912 355.753 255.47 353.495L632.03 21.0054C634.588 18.7466 637.883 17.5 641.296 17.5H778.5" stroke="#00D7C7" strokeWidth="12"/>
                    </Link>
                    <circle id="a_stop_01" className={stop === 1 ? "active" : "inactive"} cx="250" cy="357" r="14.5" fill="#D9D9D9" stroke="black" strokeWidth="5"/>
                    <circle id="a_stop_02" className={stop === 2 ? "active" : "inactive"} cx="635" cy="17" r="14.5" fill="#D9D9D9" stroke="black" strokeWidth="5"/>
                </g>

                <g id="contactGroup" opacity={cg} className={selected === "cont" ? 'activeGroup' : 'inactiveGroup'}>
                    <Link to="/contact" id="proj" className='li' onClick={() => {
                        setStopHandler(0);
                    }}>
                        <path id="contactLine" d="M0 223H787" stroke="#FC0000" strokeWidth="12"/>
                    </Link>
                    <circle id="c_stop_01" className={stop === 1 ? "active" : "inactive"} cx="136" cy="223" r="14.5" fill="#D9D9D9" stroke="black" strokeWidth="5"/>
                    <circle id="c_stop_02" className={stop === 2 ? "active" : "inactive"} cx="308" cy="223" r="14.5" fill="#D9D9D9" stroke="black" strokeWidth="5"/>
                    <circle id="c_stop_03" className={stop === 3 ? "active" : "inactive"} cx="480" cy="223" r="14.5" fill="#D9D9D9" stroke="black" strokeWidth="5"/>
                    <circle id="c_stop_04" className={stop === 4 ? "active" : "inactive"} cx="652" cy="223" r="14.5" fill="#D9D9D9" stroke="black" strokeWidth="5"/>
                </g>
            </g>
        </svg>
    )
}

export default Map
