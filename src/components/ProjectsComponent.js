import React from "react";

export const ProjectsComponent = ({projects}) => {

    return (
        <ul>
            {projects.map(project => (
                <li
                    className="project"
                    key={project.id}
                >
                    {project.title}
                </li>
            ))}
        </ul>
    )
}