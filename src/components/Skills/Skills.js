import React from 'react'
import './Skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Skills() {
    return (
        <section id='skills'>
            <h2 className='skills-title'>Skills</h2>
            <div className="skills__container">
                <div className="skills__frontend">
                    <h3>Frontend Development</h3>
                    <div className="skills__content">
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>CSS</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>React</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>TypeScript</h4>
                        <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Angular</h4>
                        <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Electron</h4>
                        <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Figma</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    </div>
                </div>
                {/* End of frontend part */}

                <div className="skills__backend">
                    <h3>Backend Development</h3>
                    <div className="skills__content">

                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Node.js</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Express.js</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>MySQL</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Python</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Java</h4>
                        <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>C/C++</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>MongoDB</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
                </div>
                <div className="skills__tools">
                    <h3>Technologies</h3>
                    <div className="skills__content">

                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Git</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>RESTful API</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Linux</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Bash</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Docker</h4>
                        <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Jenkins</h4>
                        <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Flask</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>BeautifulSoup</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>FastAPI</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
                </div>
                <div className="skills__others">
                    <h3>Others</h3>
                    <div className="skills__content">
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>UI/UX Design</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Software Design</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Agile/Scrum</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>CI/CD</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Collaboration</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Problem-solving</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Time Management</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Troubleshooting</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsFillPatchCheckFill className='skills__details-icon'/>
                        <div>
                        <h4>Communication</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;