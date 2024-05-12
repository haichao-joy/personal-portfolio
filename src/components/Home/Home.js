import React from "react";
import { useState, useEffect } from "react";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import './Home.css';
import resume from '../../assets/Resume_HaichaoYang.pdf';

function Home() {
    const toRotate = [ "Web Developer", "UI/UX Designer", "Software Engineer", "Frontend Developer"];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
        // eslint-disable-next-line
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
        if (index) {
            setIndex(1);
        }
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
    
    return (
        <section className="home-aboutme" id="home">
            <div className="container">
            <div className="row align-items-center">
            <div className="col">
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm Haichao Yang`} 
                    <div className="txt-rotate" dataperiod='1000' data-rotate='["Web Developer", "UI/UX Designer", "Software Engineer", "Frontend Developer"]'><span className="wrap">{text}</span></div></h1>
                    <p>I'm a graduate student studying computer science in MSCS program at Northeastern University Seattle Campus. 
                      I got my Bachelor of Science degree in Computer Science from Oregon State University. I'm enthusiastic in the tech area, and I'm a dedicated problem solver, good communicator as well as a responsible team worker. I enjoy exploring new stuff, adapt to new things, and I like applying all my knowledge, skills and available resources to take any challenge and resolve it. 
                      I have a few project experiences as well as internship experiences during my undergraduate program.
                      I'm ready for delving deeper into the tech area to learn more stuff, get more hands on practice or experiences, and make impactful contributions to the tech field.
                      I'm currently looking for any internship opportunity in related CS fields for the summer 2025.
                      Please feel free to contact me if you think I would be a potential fit!</p>
                    <div className="resume-connect">
                      <button className='resume-btn'><a href={resume} download className='r-btn'>Download My Resume</a></button>
                      <button className='connect-me-btn'><a href="#footer" className='connect-btn'>Connect with Me</a></button>
                    </div>
                </div>}
                </TrackVisibility>
            </div>
            <div className="col">
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src="https://img.freepik.com/premium-vector/cute-girl-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3975.jpg?w=1380" width={200} height={200} className="home-image" alt="home-animated"/>
                    </div>}
                </TrackVisibility>
            </div>
            
            </div>
        </div>
        </section>
    )
}

export default Home;