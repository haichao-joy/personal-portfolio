import './Projects.css';

function Projects() {
    const projects = [
        {
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoY2FyZSUyMGRhdGF8ZW58MHx8MHx8fDA%3D",
            date: "Sept 2025 - Dec 2025",
            title: "Early Detection of Alzheimer’s Disease from Cognitive Assessments",
            techstack: "Python, Machine Learning, EDA, Kaggle Clinical Data",
            description: "Designed and implemented machine-learning models to predict early-stage Alzheimer’s disease (Healthy vs MCI vs AD) using structured cognitive-assessment and behavioral data (MMSE, ADL, IADL)\nConducted extensive EDA, feature scaling, and validation on a 2K-record clinical dataset (Kaggle 2024); applied Logistic Regression, Random Forest, and baseline classifiers to evaluate predictive performance\nIdentified MMSE and ADL as top discriminative features through correlation and feature-importance analysis, revealing interpretable clinical markers\nAddressed potential data-leakage issues and proposed model-generalization strategies, including K-Fold cross-validation, SMOTE, and hyperparameter tuning\nSynthesized insights from eight peer-reviewed studies (2021-2025) to situate the work within current AI-for-health literature, emphasizing explainability and accessibility in early screening",
            url: "",
        },
        {
            image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaW8lMjByZWNvcmRpbmd8ZW58MHx8MHx8fDA%3D",
            date: "Sept 2025 - Present",
            title: "Co-creative Audio Storytelling System (Ongoing)",
            techstack: "Flutter, FastAPI, PostgreSQL, FFmpeg",
            description: "Designed and implemented a cross-platform audio-based co-creative storytelling system enabling multiple users to record and assemble shared narratives for fostering social connection\nBuilt a Flutter-based mobile client (iOS and Android) supporting real-time audio recording, local processing, and push notifications\nDeveloped a FastAPI plus PostgreSQL backend for session management, story coordination, audio upload, and server-side merging of user recordings through an FFmpeg-based pipeline\nImplemented an asynchronous multi-user session model supporting dynamic participant assignment, turn-taking, and automated story synthesis\nDeployed a functional MVP prototype validating end-to-end user flow (record to merge to notify to playback) across platforms\nPrepared for future behavioral studies examining how collaborative voice creation impacts emotional connectedness and belonging",
            url: "",
        },
        {
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
            date: "Mar 2025 - Present",
            title: "Care Package Website (Ongoing)",
            techstack: "VitePress, Three.js, JavaScript, UI/UX",
            description: "Developing a website using VitePress for care package delivery, focusing on a user-friendly interface and aesthetic design\nImplementing interactive 3D animations with Three.js, including scroll-triggered effects and animated objects, to enhance visual appeal and user engagement\nIntegrating web store features by developing product pages and checkout functionalities to support smooth interaction and seamless transaction flows\nCollaborating with team members to ensure the website design aligns with branding and UX goals\nContinuously improving UI/UX through feedback-driven development and ongoing testing",
            url: "",
        },
        {
            image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaW98ZW58MHx8MHx8fDA%3D",
            date: "Apr - May 2025",
            title: "Verbal Tic Detection App Prototype",
            techstack: "JavaScript, Vosk.js, Web Audio API",
            description: "Designed and implemented a browser-based app prototype for audio recording, processing, real-time detection, and real-time feedback of verbal filler words using Vosk.js and the Web Audio API\nDeveloped an audio processing pipeline with silence trimming, amplitude normalization, and low-latency buffering to improve speech-capture accuracy and responsiveness\nIntegrated speech recognition and real-time audible feedback to promote speaker awareness of filler-word frequency during speaking\nAdded user controls, including a toggle to enable or disable detection and audio processing, supporting flexible testing and usability studies\nDiagnosed and resolved microphone-capture and latency issues across desktop and mobile browsers, optimizing for reliable real-time speech feedback",
            url: "",
        },
        {
            image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxnb3JpdGhtfGVufDB8fDB8fHww",
            date: "Apr 2025",
            title: "A* Search Algorithm Analysis",
            techstack: "Python, Jupyter Notebook, A* Search, Heuristics",
            description: "Analyzed A* performance for optimal pathfinding, highlighting efficiency in real-time applications\nConducted correctness analysis by proving optimality through heuristic admissibility and consistency\nPerformed time and memory complexity analysis to identify factors impacting computational efficiency\nImplemented the algorithm using Python in Jupyter Notebook to simulate pathfinding across varied graph structures\nConducted experiments to evaluate and compare heuristic functions, providing insights into pathfinding effectiveness in different scenarios",
            url: "",
        },
        {
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YWJhc2V8ZW58MHx8MHx8fDA%3D",
            date: "Apr 2025",
            title: "Multiplayer Online Role Playing Game Database",
            techstack: "ER Modeling, MySQL, SQL, JSP, JDBC",
            description: "Designed a logical data model through an ER diagram to represent entities and relationships while adhering to normalization standards\nImplemented a physical database model in MySQL to store and manage game data\nEnabled CRUD operations for managing entities, including searching, creating, updating, and deleting data\nEnsured data integrity with primary and foreign key constraints while optimizing SQL queries for efficient data retrieval\nDeveloped a JSP-based web frontend using JSP and JDBC for seamless database interaction",
            url: "",
        },
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
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9iJTIwc2VhcmNofGVufDB8fDB8fHww",
            date: "Nov 2022 - Dec 2022",
            title: "Job Search App Interface Design",
            techstack: "Figma, HCI, Inclusive Design, UX Research",
            description: "Collaborated with a team in an HCI inclusive design course to design and prototype a job search app for a limited-English-proficient minority group using Figma wireframes and prototypes at multiple fidelity levels\nCreated persona models and use cases to design and improve user interaction flow and visual layout\nConducted surveys, interviews, heuristic evaluations, and usability tests to enhance user experience, reducing user task time by 20% based on feedback",
            url: "",
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
                                            <div className='project-description'>
                                                <ul className='project-description-list'>
                                                    {project.description.split('\n').map((point, idx) => (
                                                        point.trim() && <li key={idx}>{point.trim()}</li>
                                                    ))}
                                                </ul>
                                            </div>
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
