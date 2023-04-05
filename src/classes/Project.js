export class Project {
    id;
    title = "Project Title";
    description = "Project Description";
    category = "Project Category";
    year = "2023";
    technologies = "Technologies used";


    constructor(id, t, d, c, y, techs) {
        this.id = id;
        this.title = t;
        this.description = d;
        this.category = c;
        this.year = y;
        this.technologies = techs;
    }
}