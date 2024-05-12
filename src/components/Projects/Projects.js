import './Projects.css';

function Projects() {
    const projects = [
        {
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Apr 2024 - May 2024",
            title: "Blog Website",
            techstack: "HTML/CSS, React, Axios API",
            description: "A blog website that lets users create, update, delete their blogs, and explore various blogs in different communities\nUsing HTML/CSS/React for the frontend, Axios API for fetching external data to display in the app",
            url: "https://haichao-joy.github.io/BlogWebsite/",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwaXxlbnwwfHwwfHx8MA%3D%3D",
            date: "Jun 2023",
            title: "Tarpaulin App",
            techstack: "Node.js, Express.js, RESTful API, MySQL DB, Docker",
            description: "Collaborated with a team to build and integrate RESTful APIs using Node.js and Express.js into the application, resulting in improved scalability and performance, and enabling support for various endpoints and user actions, pagination, authorization, and rate limiting across multiple endpoints\nImplemented a robust MySQL database system to store and manage API data, Optimized API deployment process by containerizing services with Docker",
            url: "https://github.com/haichao-joy/final-project-haichao-joy",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1669814665626-70d9802b449e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlncmF0aW9uJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
            date: "Apr 2023 – Jun 2023",
            title: "Forms of Migration Website",
            techstack: "Figma, HTML/CSS, React, Node.js, Express.js, Axios API",
            description: "Collaborated with a cross-functional team to build and integrate user-friendly web application serving as a digital hub for a publication, implemented features including advanced search functionality, comprehensive listings, and seamless navigation",
            url: "https://github.com/haichao-joy/Forms-of-Migration-Website",
        },
        {
            image: "https://images.unsplash.com/photo-1667984390535-6d03cff0b11a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNsb3VkJTIwbW9uaXRvcmluZ3xlbnwwfHwwfHx8MA%3D%3D",
            date: "Jul 2022 - Aug 2022",
            title: "Cloud Monitoring Agent",
            techstack: "Python, Linux",
            description: "Spearheaded the development and deployment of a Python-powered cloud monitoring agent, enabling seamless communication between a cloud monitoring server and local devices, empowering hardware manufacturers to effectively manage, service, and monetize connected devices (boosted operational efficiency and revenue generation for hardware manufacturers)\n Implemented various functionalities in this agent including device registration, device status/relevant data delivery and update, command delivery and execution, firmware update on devices, and device diagnostics generation, improving overall customer satisfaction\nOrchestrated the creation of a service unit file, effectively converting the agent into a Linux system service, streamlining system operations, and bolstering overall performance and stability",
            url: "",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMGFwcGxpY2F0aW9uJTIwZnJhbWV3b3JrfGVufDB8fDB8fHww",
            date: "Jun 2022",
            title: "Desktop Application Framework",
            techstack: "Angular, Typescript, Electron, Python, Flask, FastAPI",
            description: "a desktop application framework to provide a desktop application prototype for integrating software tools, empowered developers to adhere to a unified development style for 5+ tools",
            url: "",
        },
        {
            image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpZGVvJTIwZ2VuZXJhdG9yfGVufDB8fDB8fHww",
            date: "Apr 2022 - May 2022",
            title: "Video Generator Website",
            techstack: "HTML/CSS, Angular, TypeScript",
            description: "Created checkboxes for video output on/off switching, added button to automate the start/stop of a service, implemented navigation between sections/pages with toolbar, added pickers on UI for choosing video resolutions, enabled real-time video output info showing on the UI, as well as polishing overall UI appearance",
            url: "",
        },
        {
            image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFuaW1lJTIwdHJhY2tlcnxlbnwwfHwwfHx8MA%3D%3D",
            date: "Mar 2022",
            title: "Anime Tracker App",
            techstack: "Kotlin, Andriod Studio",
            description: "an Android mobile app leveraging Kotlin to serve as a cutting-edge anime tracker, leveraged Jikan Anime API to automate the process of retrieving anime ratings and reviews, integrated Room persistence library to efficiently store and manage complex data structures, implemented a comprehensive set of intents and features to enhance user experience in the anime app, including information display, seamless navigation, advanced search functionality, and dynamic anime randomization",
            url: "https://github.com/haichao-joy/final-project-final-project-team-14",
        },
        {
            image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwc2NyYXBpbmd8ZW58MHx8MHx8fDA%3D",
            date: "Jun 2021 - Jul 2021",
            title: "Games Scraper",
            techstack: "Python, Beautiful Soup",
            description: "a web scraper generated in Python BeautifulSoup, automate data collection from 80+ different game product websites, and generate industry analysis report",
            url: "https://github.com/haichao-joy/Games-Scraper",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1681466343764-b0a04153bc07?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGV4dCUyMHN1bW1hcml6ZXIlMjB0ZWNofGVufDB8fDB8fHww",
            date: "Apr 2021 - Jun 2021",
            title: "Text Summarizer App",
            techstack: "HTML/CSS, JavaScript, Python, Beautiful Soup, Flask, Node.js, Express.js",
            description: "Architected and executed a user-friendly GUI using HTML, CSS, and JavaScript\nDeveloped a Python Beautiful Soup web scraper, serving as a microservice, that automated data extraction from 5+ sources\nEngineered seamless synchronization between 2 key microservices\nOptimized data flow between the web scraper and other software using Python Flask, streamlining processes\nConstructed a robust server architecture leveraging Node.js and Express.js",
            url: "https://github.com/haichao-joy/CS-361-Nuclear-Noodles",
        },
        {
            image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHZpZGVvJTIwc2hhcmluZ3xlbnwwfHwwfHx8MA%3D%3D",
            date: "Dec 2020",
            title: "Video Website",
            techstack: "HTML/CSS, JavaScript, Node.js, Express.js, handlebars",
            description: "a web application serving as a video sharing platform, which is a simple web page for entertainment, learning and sharing life. Used HTML, CSS, JavaScript for frontend, rendering dynamic content with handlebars, used node.js, asynchronous client server communication and express for server",
            url: "https://github.com/haichao-joy/final-project-team-11",
        },

    ];

    return (
        <section id='projects' className="projects">
            <h2 id='projects-title'>Projects</h2>
            <div className='projects-list'>
                        {projects.map((project, i) => {
                                return (
                                    <div key={i} className='single-project'>
                                        <div className='project-img-container'>
                                            <img src={project.image} alt="project-img" className='project-image'/>
                                        </div>
                                        <div className='project-content'>
                                            <div className='project-title'>{project.title}</div>
                                            <div className='project-date'>{project.date}</div>
                                            <div className='project-tech-stack'>{project.techstack}</div>
                                            <div className='project-description'>{project.description}</div>
                                            <div className='project-extend'><a href={project.url} target="_blank" rel="noopener noreferrer">Explore More</a></div>
                                        </div>
                                    </div>
                                )
                        })}

            </div>
        </section>
    )
}

export default Projects;