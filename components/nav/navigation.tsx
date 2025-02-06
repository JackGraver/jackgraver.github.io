import React from 'react';

import Navigation_Button from "./navigation_button";


export default function Navigation() {

    const buttons = ["Home", "Education", "Projects"];

    function scrollToSection(section: string) {
        const target = document.getElementById(section);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div>
            <ol className="text-xl">
                {buttons.map((button) => (
                    <li key={button.toLowerCase()}>
                        <Navigation_Button section={button} scrollFunction={() => scrollToSection(button.toLowerCase())} />
                    </li>
                ))}
            </ol>
        </div>
    )
}