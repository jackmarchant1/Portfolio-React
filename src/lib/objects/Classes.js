export class Project {
    id;
    title = "Project Title";
    description = "Project Description";
    category = "Project Category";
    year = "2023";
    technologies = "Technologies used";
    banner;
    screenshots = [];


    constructor(id, t, d, c, y, techs, b, ss) {
        this.id = id;
        this.title = t;
        this.description = d;
        this.category = c;
        this.year = y;
        this.technologies = techs;
        this.banner = b;
        this.screenshots = ss;
    }
}

export class About {
    id;
    title = "Project Title";
    text = "Project Description";
    banner;

    constructor(id, title, text, banner) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.banner = banner;
    }
}

export class Contact {
    id;
    title = "Contact Method";
    icon;

    constructor(id, title, icon) {
        this.id = id;
        this.title = title;
        this.icon = icon;
    }
}