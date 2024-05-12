import React from 'react';
import './Experiences.css';
import {GiGraduateCap} from 'react-icons/gi'
import { BsFillBriefcaseFill } from "react-icons/bs";

const Experiences = () => {
  const workExperiences = [
    {
      company: "Boston University",
      position: "Part-Time Technical Assistant",
      duration: "Jan 2024 - May 2024",
      description: "Cooperated with IT department to test AV system in a BU classroom for a hybrid course. Recorded all sessions on zoom. Troubleshooted audio or video issues"
    },
    {
      company: "Planar Systems",
      position: "Software Engineer Intern",
      duration: "Mar 2022 - Sep 2022",
      description: "Worked in the production development team as an intern to make contributions to internal website development, initiate a desktop application framework to streamline internal software tools integration, originated a cloud monitoring agent prototype which enables cloud monitoring functionalities over local devices and facilitates overall development for the future plan of the company, and update a video generator installer to enhance installation performances on Raspberry Pi"
    },
    {
      company: "Aviagames Inc",
      position: "Industry Analysis Intern",
      duration: "Jun 2021 - Sep 2021",
      description: "Collaborated with the game R&D team to execute market research for game projects, generate a web scraper to automate data collection, and deliver reports as well as proposing design ideas for games in early development stage"
    }
  ];

  const educationExperiences = [
    {
      school: "Boston University",
      degree: "Master of Science in Software Development",
      duration: "Jan 2024 - May 2024",
      description: "Courses: Data Communication and Networks, Information Structures with Java, Web Application Development"
    },
    {
      school: "Oregon State University",
      degree: "Bachelor of Science in Computer Science",
      duration: "Sep 2018 – Sep 2023",
      description: "GPA: 3.83/4.0\nCourses: Algorithms, Data Structures, Introduction to Database, Operating Systems, Web/Mobile/Cloud Application Development, Software Engineering, Information Visualization, Programming Languages\nHonors: Dean’s Honor List in College of Engineering at OSU"
    }
  ];

  return (
    <section id='experiences'>
        <div className="experiences-container">
            <div className='work-experiences'>
                <h2 className='work-experience-title'>Work Experience <span className='work-icon'><BsFillBriefcaseFill className="w-icon"/></span></h2>
                <div className="work-timeline">
                    {workExperiences.map((workExperience, i) => (
                    <div className="work-event" key={i}>
                        <div className="work-content">
                        <h3 className='work-position-title'>{workExperience.position}</h3>
                        <h4 className='company-title'>{workExperience.company}</h4>
                        <p className="work-duration">{workExperience.duration}</p>
                        <p className="work-description">{workExperience.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className='education-experiences'>
                <h2 className='education-experience-title'>Education Experience <span className='education-icon'><GiGraduateCap className='e-icon'/></span></h2>
                <div className="education-timeline">
                    {educationExperiences.map((educationExperience, i) => (
                    <div className="education-event" key={i}>
                        <div className="education-content">
                        <h3 className='education-position-title'>{educationExperience.school}</h3>
                        <h4 className='school-title'>{educationExperience.degree}</h4>
                        <p className="education-duration">{educationExperience.duration}</p>
                        <p className="education-description">{educationExperience.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Experiences;
