import React from 'react';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PersonalLinks() {
    return (
        <div className="flex flex-row">
            <a
                href={"https://github.com/JackGraver"}
                target="_blank"
                rel="noopener noreferrer"
                className="justify-start text-zinc-200"
                aria-label="GitHub"
            >
                <FontAwesomeIcon icon={faGithub} className="w-8 h-8 hover:text-zinc-400 hover:scale-125 transition duration-75 ease-in-out" />
            </a>
            <a
                href={"JackGraver_Resume2025.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow justify-center text-zinc-200"
                aria-label="GitHub"
            >
                <FontAwesomeIcon icon={faFilePdf} className="w-8 h-8 hover:text-zinc-400 hover:scale-125 transition duration-75 ease-in-out" />
            </a>
            <a
                href={"https://www.linkedin.com/in/jack-graver/"}
                target="_blank"
                rel="noopener noreferrer"
                className="justify-end text-zinc-200"
                aria-label="GitHub"
            >
                <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 hover:text-zinc-400 hover:scale-125 transition duration-75 ease-in-out" />
            </a>
        </div>
    )
}