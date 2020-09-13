import React from "react";
import {ProjectsComponent} from "../components/ProjectsComponent";

export const Projects = () => {
    const prs = new Array(3)
        .fill('')
        .map((_,i ) => ({id: i, title: "Project " +  (i+1) }))

    return (
        <div>
            <ProjectsComponent projects={prs}/>
        </div>
    )
}