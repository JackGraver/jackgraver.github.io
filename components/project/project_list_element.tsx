import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Project } from "@/types/project";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faReact, faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const iconMap: { [key: string]: IconDefinition } = {
    faJava,
    faReact,
    faDatabase
};

type ProjectListElementProps = {
    project: Project
}

export default function ProjectListElement({ project }: ProjectListElementProps) {
    return (
        <div className="" id={project.name}>
            <div className="rounded-md p-4 m-2">
                <h2 className="text-2xl mr-2">{project.name}</h2>
                <p>{project.description}</p>
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-grayk-600 hover:text-gray-900 transition duration-300"
                    aria-label="GitHub"
                >
                    <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                </a>
                {project.technology.map((iconName) => (
                    <FontAwesomeIcon key={iconName} icon={iconMap[iconName]} className="w-6 h-6" />
                ))}
                <Swiper
                    spaceBetween={5}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={true}
                    speed={2000}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    modules={[Navigation, Scrollbar, Scrollbar, Autoplay]} // Ensure this is included
                >
                    {project.images.map((i, index) => (
                        <SwiperSlide key={index} className="">
                            <div className="text-center">
                                <img src={`/project_img/${i}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}