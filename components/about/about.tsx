import React from 'react';
import { technologies, languages } from "@/public/data/About.json"
import AboutList from './about_list';
import Languages from './languages';

export default function About() {
    const languagesDelay = 0.2 * technologies.frameworks.length;
    const conceptsDelaey = 0.2 * technologies.languages.length + languagesDelay;
    const otherDelay = 0.2 * technologies.concepts.length + conceptsDelaey;

    return (
        <div className=''>
            <AboutList list={technologies.frameworks} delay={0} />

            <AboutList list={technologies.languages} delay={languagesDelay} />

            <AboutList list={technologies.concepts} delay={conceptsDelaey} />

            <AboutList list={technologies.other} delay={otherDelay} />

            <Languages list={languages} />
        </div >
    )
}