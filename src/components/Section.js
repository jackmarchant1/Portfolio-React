import React, {useState, useEffect} from 'react'
import  '../lib/css/Section.css'
import {Project, About, Contact} from '../Classes.js'
import Map from './Map'
import Sign from './Sign';
import ProjectDetail from './ProjectDetail'
import ContactDetail from './ContactDetail';
import AboutDetail from './AboutDetail';
import { Link } from 'react-router-dom';
import LinkedInLogo from '../lib/images/linkedin-logo.png'
import MailLogo from '../lib/images/mail-logo.png'
import GithubLogo from '../lib/images/github-logo.png'

function Section({section}) {
    useEffect(() => {
        document.title = section === "proj" ? "Projects" : section === "about" ? "About" : "Contact"
    }, []);

    const project1 = new Project(1, "Pub Golf","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et luctus risus, non lobortis ante. Aenean sollicitudin ultricies ex, in dapibus eros tempor nec. Phasellus velit leo, dignissim ultricies odio quis, tincidunt efficitur risus. Etiam eu velit vulputate risus feugiat consequat. Nam aliquam ut lacus sed rhoncus. Pellentesque porttitor cursus neque, ac luctus est feugiat id. Morbi at scelerisque lectus. Sed sit amet pulvinar urna, a luctus est. Aliquam aliquet dignissim quam non egestas. In vitae erat ullamcorper, mattis nulla a, scelerisque ex. Cras tincidunt cursus massa in interdum. Praesent in purus quam. Donec viverra rhoncus nunc, ac dictum eros molestie at. Cras id sodales turpis, vitae facilisis elit. Cras erat quam, elementum ut lorem eget, vestibulum facilisis metus. Proin quam est, dapibus et porta et, egestas non ligula. Proin posuere, elit non bibendum scelerisque, neque elit dignissim ante, ut viverra nisi ante a enim. Nunc vehicula accumsan iaculis. In cursus vitae felis in vehicula. Vestibulum vel felis vitae tortor ultrices pretium et fringilla urna. Curabitur dui mauris, congue at molestie non, sollicitudin ut mi. Etiam accumsan, odio at rhoncus euismod, turpis mauris pulvinar dolor, quis blandit libero tortor iaculis elit. Mauris placerat malesuada fringilla. Maecenas enim metus, ornare ac semper id, commodo sit amet massa. Donec sed ipsum semper, dignissim leo quis, pellentesque ipsum. Mauris tristique sed nibh sed mollis. Donec feugiat interdum ligula, id tristique magna dictum et. Suspendisse a suscipit velit, eu lacinia libero. Sed consectetur commodo malesuada.","Personal project","2023","ASP.NET, C#, Azure, SQL");
    const projectArray = [project1];

    const aboutMe = new About(1, "Myself", "Hi, my name is Jack Marchant. I’m a computer science student at the University of Sheffield in the United Kingdom, and when not studying live in Connecticut, United States.I have a passion for both mobile and web development, usually opting to get involved in both the front end and back end of projects. I love to search for exciting projects going on and finding startups that are eager to use their skills and creativity to help their communities or give something good to the world.  I’m always curious to learn more when it comes to new technologies and creative coding.", "");
    const aboutCompany = new About(2, "My Company", "Mid 2023, I started a software engineering company with a university friend, Forge38. The company is in its early stages and right now is used as a umbrella to encompass every project that we work together under, such as PubGolf. We hope there will be more to come from Forge38 soon.", "");
    const aboutArray = [aboutMe, aboutCompany]

    const linkedIn = new Contact(1, "LinkedIn", LinkedInLogo);
    const mail = new Contact(2, "Mail", MailLogo);
    const github = new Contact(3, "Github", GithubLogo);
    const contactArray = [linkedIn, mail, github]


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