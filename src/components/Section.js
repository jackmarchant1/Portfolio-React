import React from 'react'
import  '../lib/css/Section.css'
import {Project} from '../classes/Project'
import Map from './Map'
import Sign from './Sign';
import ProjectDetail from './ProjectDetail'

function Section({section}) {
    const project1 = new Project(1, "Pub Golf","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et luctus risus, non lobortis ante. Aenean sollicitudin ultricies ex, in dapibus eros tempor nec. Phasellus velit leo, dignissim ultricies odio quis, tincidunt efficitur risus. Etiam eu velit vulputate risus feugiat consequat. Nam aliquam ut lacus sed rhoncus. Pellentesque porttitor cursus neque, ac luctus est feugiat id. Morbi at scelerisque lectus. Sed sit amet pulvinar urna, a luctus est. Aliquam aliquet dignissim quam non egestas. In vitae erat ullamcorper, mattis nulla a, scelerisque ex. Cras tincidunt cursus massa in interdum. Praesent in purus quam. Donec viverra rhoncus nunc, ac dictum eros molestie at. Cras id sodales turpis, vitae facilisis elit. Cras erat quam, elementum ut lorem eget, vestibulum facilisis metus. Proin quam est, dapibus et porta et, egestas non ligula. Proin posuere, elit non bibendum scelerisque, neque elit dignissim ante, ut viverra nisi ante a enim. Nunc vehicula accumsan iaculis. In cursus vitae felis in vehicula. Vestibulum vel felis vitae tortor ultrices pretium et fringilla urna. Curabitur dui mauris, congue at molestie non, sollicitudin ut mi. Etiam accumsan, odio at rhoncus euismod, turpis mauris pulvinar dolor, quis blandit libero tortor iaculis elit. Mauris placerat malesuada fringilla. Maecenas enim metus, ornare ac semper id, commodo sit amet massa. Donec sed ipsum semper, dignissim leo quis, pellentesque ipsum. Mauris tristique sed nibh sed mollis. Donec feugiat interdum ligula, id tristique magna dictum et. Suspendisse a suscipit velit, eu lacinia libero. Sed consectetur commodo malesuada.","Personal project","2023","ASP.NET, C#, Azure, SQL");
    return (
        <div className="d-flex justify-content-between flex-row project-container">
            <div className="left d-flex flex-column flex-grow">
                <Sign />
                <Map selected={section}/>
            </div>
            <div className="project-detail">
                {
                section === "proj" ? <ProjectDetail {...project1}/> : 
                section === "about" ? <ProjectDetail {...project1}/> :
                section === "cont" ? <ProjectDetail {...project1}/> : null
                }
            </div>
        </div>
    )
}

export default Section