"use client";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import EducationList from "@/components/education/education_list";
import ProjectList from "@/components/project/project_list";
import Navigation from "@/components/nav/navigation";
import PersonalLinks from "@/components/personal/personal_links";
import About from "@/components/about/about";
import "./globals.css"

export default function Home() {
    return (
        <div className="flex flex-col lg:flex_row relative bg-zinc-800"> {/* whole page */}
            <div className="flex flex-col text-center lg:fixed lg:pl-[4vw] lg:pt-[3vw]"> {/* left side */}
                <PersonalLinks />
                <h1 className="text-6xl">Jack Graver</h1>
                <h2 className="text-4xl mt-4">Software Developer</h2>
                <h3>
                    <FontAwesomeIcon icon={faHome} className="w-5 h-5 mr-1" />
                    Calgary, Alberta, Canada
                </h3>
                <h2 className="text-sm mt-4">?Page Views?</h2>
                <div className="ml-8 mt-6">
                    <Navigation />
                </div>
            </div>

            <div className="flex flex-col lg:pl-[40vw]"> {/* Full height container */}
                <div id="home" className="min-h-screen pt-4">
                    <About />
                </div>
                <div id="education" className="min-h-screen pt-4">
                    <EducationList />
                </div>
                <div id="projects" className="min-h-screen pt-4">
                    <ProjectList />
                </div>
            </div>
        </div>
    );
}

// <div className="flex flex-col items-center mt-10 space-y-8">
// <div className="w-11/12 md:w-2/3 lg:w-1/2">
// 	{/* Container for Image and Text Side by Side */}
// 	<div className="flex flex-row justify-center w-full space-x-4 border-b border-gray-300 pb-4 mb-4">
// 		{" "}
// 		{/* Full width and centered */}
// 		<Image
// 			src="/headshot.jpg" // Replace with your image path
// 			alt="Headshot image of me"
// 			width={200} // Adjust the width as needed
// 			height={200} // Adjust the height as needed
// 			// className="hover:transform transition-transform duration-300 hover:scale-125 border"
// 			className="hover:text-gray-900 transition-all duration-700 transform hover:scale-150 hover:my-16 hover:mx-12"
// 		/>
// 		{/* Text Content */}
// 		<div>
// 			<h1 className="text-4xl font-bold underline">Jack Graver</h1>
// 			<p className="text-base">Software Developer</p>
// 			<p className="text-base">23 years old from Calgary, Alberta</p>
// 			{/* GitHub */}
// 			<a
// 				href="https://github.com/JackGraver"
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				className="text-gray-600 hover:text-gray-900 transition duration-300"
// 				aria-label="GitHub"
// 			>
// 				<FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
// 			</a>
// 		</div>
// 	</div>
// </div>

// {/* Main Container for Education and Experience/Technologies */}
// <div className="w-11/12 md:w-2/3 lg:w-1/2">
// 	{" "}
// 	{/* Adjust width as needed */}
// 	{/* Flex container for Education and Experience/Technologies */}
// 	<div className="flex flex-row justify-center w-full space-x-8 border-b border-gray-300 pb-4 mb-4">
// 		{/* Education Section */}
// 		<div className="flex flex-col items-center">
// 			<h1 className="text-xl font-bold">Education</h1>

// 			<ul className="text-center">
// 				<li>
// 					<Image
// 						src="/sait.png" // Replace with your image path
// 						alt="Headshot image of me"
// 						width={50} // Adjust the width as needed
// 						height={50} // Adjust the height as needed
// 					/>
// 					<h2>SAIT (Graduated 2021)</h2>
// 					<p>Graduated with honours from Software Development Program</p>
// 				</li>
// 				<li>
// 					<Image
// 						src="/uofc.jpg" // Replace with your image path
// 						alt="Headshot image of me"
// 						width={50} // Adjust the width as needed
// 						height={50} // Adjust the height as needed
// 					/>
// 					<h2>University of Calgary (2021-2025)</h2>
// 					<p>Currently studying towards BSc in Computer Science</p>
// 				</li>
// 				<li>
// 					<Image
// 						src="/abe.jpg" // Replace with your image path
// 						alt="Headshot image of me"
// 						width={50} // Adjust the width as needed
// 						height={50} // Adjust the height as needed
// 					/>
// 					<h2>High School (Graduated 2019)</h2>
// 					<p>French Immersion with B2 DELF Certification</p>
// 				</li>
// 			</ul>
// 		</div>

// 		{/* Experience/Technologies Section */}
// 		<div className="flex flex-col items-center">
// 			<h1 className="text-xl font-bold">Experience/Technologies</h1>
// 			<ul className="text-center">
// 				<li>Java/C#, Python, Javascript/Typescript, SQL</li>
// 				<li>React, NextJS, Express, Tailwind</li>
// 			</ul>
// 		</div>
// 	</div>
// 	{/* Projects Section */}
// 	<div className="flex flex-col items-center border-b border-gray-300 pb-4 mb-4">
// 		<h1 className="text-xl font-bold">Projects</h1>
// 		<ul className="text-center">
// 			<li>Database Class</li>
// 			<li>SENG Class</li>
// 		</ul>
// 	</div>
// 	<div className="group p-4 flex flex-col items-center border-b border-gray-300 pb-4 mb-4">
// 		<h1 className="text-xl font-bold">Non-CS Experience (hover me ☺)</h1>
// 		<ul className="hidden group-hover:block text-center">
// 			<li>UofC Active Living - Jun 2019 - Aug 2020</li>
// 			<li>BestBuy Sales Representative Nov 2020 - Feb 2022</li>
// 			<li>Village Ice Cream Keyholder/Scooper - Oct 2022 - Present</li>
// 		</ul>
// 	</div>
// </div>
// </div>




{/* <div className="flex flex-col mb-96 pb-12">
          <h1 className="text-black text-6xl">Education</h1>
          <div className="flex flex-row mt-4">
            <div className="grid grid-row-3 mr-2 text-right">
              <div></div>
              <div className="text-2xl">
                2021
              </div>
              <div className="text-2xl">
                2019
              </div>
            </div>
            <div className="border-l-2 border-black">
              <div className="bg-green-500 rounded-2xl p-6 m-2">
                <h1 className="text-black font-semibold text-2xl">University of Calgary (UofC)</h1>
                <h2 className="pl-4 text-gray-800 italic text-xl">Computer Science BSc</h2>
              </div>
              <div className="bg-blue-500 rounded-2xl p-6 m-2">
                <h1 className="text-black font-semibold text-2xl">Southern Alberta Institute of Technology (SAIT)</h1>
                <h2 className="pl-4 text-gray-800 italic text-xl">Information Technology Diploma</h2>
              </div>
              <div className="bg-orange-500 rounded-2xl p-6 m-2">
                <h1 className="text-black font-semibold text-2xl">William Aberhart High School (ABE)</h1>
                <h2 className="pl-4 text-gray-800 italic text-xl">French Immersion High School Diploma</h2>
              </div>
            </div>
          </div>
        </div> */}

{/* <div id="projects" className="flex flex-col mb-96 pb-12">
                    <h1 className="text-black text-6xl">Projects</h1>
                    <h2 className="text-4xl">School</h2>
                    <div className="flex flex-row">
                        <h3 className="text-2xl mr-2">SAIT Capstone Project</h3>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <h3 className="text-2xl mr-2">AI Model Implemention</h3>
                            <a
                                href="https://github.com/JackGraver/CPSC433-Project-Floette"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-grayk-600 hover:text-gray-900 transition duration-300"
                                aria-label="GitHub"
                            >
                                <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                            </a>
                        </div>
                        <FontAwesomeIcon icon={faJava} className="w-6 h-6" />
                        <a
                            href="/Proposal_Paper.pdf" target="_blank" rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faFilePdf} className="w-6 h-6" />
                        </a>

                        <p>
                            This was the term project for an AI class (CPSC 433) <br />
                            We were taught three different AI Models; Set Based, And-Tree, and Or-Tree <br />
                            Then tasked with creating a proposal of two of the three models to solve the term problem of scheduling soccer games for the City of Calgary <br />
                            My group chose Set-Based and And-Tree Models, which you can read in the paper provided above (with personal information of group members ommitted for privacy)
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <h3 className="text-2xl mr-2">Self-Checkout System Simulation</h3>
                        <a
                            href="https://github.com/JackGraver/SENG300-Project-Iteration3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-grayk-600 hover:text-gray-900 transition duration-300"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                        </a>
                    </div>
                    <FontAwesomeIcon icon={faJava} className="w-6 h-6" />

                    <div className="flex flex-row">
                        <h3 className="text-2xl mr-2">Online Store Replica</h3>
                        <a
                            href="https://github.com/mahianm/Price-Comparison-Project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-grayk-600 hover:text-gray-900 transition duration-300"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                        </a>
                    </div>
                    <FontAwesomeIcon icon={faReact} className="w-6 h-6" />
                    <FontAwesomeIcon icon={faDatabase} className="w-6 h-6" />
                    <p>
                        GitHub may be private, can show upon request
                    </p>

                    <h2 className="text-4xl pt-8">Personal</h2>
                    <div className="flex flex-row">
                        <h3 className="text-2xl mr-2">This Website!</h3>
                        <a
                            href="https://github.com/JackGraver/DevSite"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-grayk-600 hover:text-gray-900 transition duration-300"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                        </a>
                    </div>
                    <FontAwesomeIcon icon={faReact} className="w-6 h-6" />
                    <p>
                        This website was my first &quot;finished&quot; product into web development. <br />
                        Used as an opportunity to get my hands dirty learning React and Tailwind. <br />
                        I hope to continuously add to this site with more projects, skills, work experience as time goes on <br />
                    </p>
                </div> */}