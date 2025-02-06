import React from 'react';
import { School } from "@/types/school";
import { faLocationDot, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SchoolProps = {
    school: School;
}

export default function SchoolListElement({ school }: SchoolProps) {

    // function scrollToProject(section: string) {
    //     const target = document.getElementById(section);
    //     if (target) {
    //         target.scrollIntoView({ behavior: "smooth" });
    //     }
    // }

    return (
        <div className="mb-2 mt-8 pb-1 transition rounded-md px-4 py-2 duration-300 ease-in-out hover:bg-zinc-700 w-11/12">
            <div className="mb-4">
                <div className="flex flex-row">
                    <h1 className="font-semibold text-2xl grow">{school.certificiation}</h1>
                    <div className="bg-zinc-600 rounded-md px-2">
                        <p className="mt-1">
                            {school.startYear} - {school.endYear}
                        </p>
                    </div>
                </div>
                <h2 className="text-xl">{school.name}</h2>

                <div className="flex flex-row items-center text-black">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="ml-2">Calgary AB, CA</p>
                </div>
            </div>

            <div className="mb-4">
                <p>{school.description}</p>
            </div>

            <div className="flex flex-row mb-4">
                <div className='w-1/2'>
                    <h4 className="text-2xl">Achievements</h4>
                    <ul className="list-disc ml-10 mb-4">
                        {school.achievements.map((a) => (
                            <li key={a}>
                                <p>{a}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    {school.projects.length > 0 && (
                        <div>
                            <h4 className="text-2xl">Projects</h4>
                            {school.projects.map((p) => (
                                <div key={p}>
                                    <button
                                        className="transition duration-75 ease-in-out hover:text-gray-600 hover:scale-110 mb-2"
                                    // onClick={() => scrollToProject(p)}
                                    >
                                        {p}
                                        <FontAwesomeIcon icon={faLink} className="ml-2" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>


            {school.relevantCourses.length > 0 && (
                <div className="mb-4">
                    <h4 className="text-2xl">Relevant Course Work/Classes</h4>
                    <div className="flex flex-row flex-wrap">
                        {school.relevantCourses.map((c) => (
                            <div className="rounded-md border-2 border-zinc-400 mx-1 px-3 mb-2" key={c}>
                                <p>{c}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
