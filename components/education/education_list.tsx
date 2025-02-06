import React from 'react';
import SchoolListElement from "./school_list_element";
import schools from "@/public/data/Education.json"

export default function EducationList() {
    return (
        <div>
            <h1 className="text-6xl">Education</h1>
            {schools.map((s) => (
                <SchoolListElement key={s.name} school={s} />
            ))}
        </div>
    );
}