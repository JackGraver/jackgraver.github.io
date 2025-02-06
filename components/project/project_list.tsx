import React from 'react';

import { School, Personal } from "@/public/data/Projects.json";
import ProjectListElement from "./project_list_element";

export default function ProjectList() {
    return (
        <div>
            <h1 className="text-6xl">School Projects</h1>
            {School.map((project) => (
                <ProjectListElement key={project.name} project={project} />
            ))}
            <h1 className="text-6xl">Personal Projects</h1>
            {Personal.map((project) => (
                <ProjectListElement key={project.name} project={project} />
            ))}
        </div>
    );
}