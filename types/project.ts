export interface Project {
    id: string;
    name: string;
    description: string[];
    thumb: string;
    link: string;
    liveSite: string;
    github: string;
    tag: string;
    techStack: string[];
}

export interface ProjectResponse {
    projects: Project[];
}

export interface ProjectRequest {
    projects: Project[];
}
