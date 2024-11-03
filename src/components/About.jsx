import React, { Fragment } from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";

const About = () => {

  // will use useState to apply skills dynamically later


    return (
        <Fragment>

            <div className="container">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <Profile/>
                <div className="col-lg-6 d-flex flex-column align-items-center text-center">
                      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 heading">About Me</h1>
                      <p className="lead describe">My journey into the world of cybersecurity began with a deep interest in <span className="imp">Penetration Testing</span>, 
                        which has fueled my drive to continuously learn and grow in this field. In addition to my security expertise, I am also an 
                        aspiring web developer, eager to merge my knowledge of security with innovative web solutions.</p>
                        <Navigation/>
                    </div>
                  </div>
            </div>

            <div className="container">
                <article className="about-me">
                    <h2 className="display-5 link-body-emphasis mb-1" style={{ fontFamily: 'DM Serif Display, serif' }}>Who am I?</h2>
                    <hr />
                    {/* Uncomment and use correct paths for images */}
                    {/* <img src={`${process.env.PUBLIC_URL}/image src/sleepcat.jpg`} height="250px" style={{ borderRadius: '10px', float: 'right' }} alt="Sleep Cat" /> */}
                    <p className="lead describe">Hi! I'm <span className="imp">Mohammed Haris</span>, a 24-year-old aspiring <span className="imp">Web Developer</span> and <span className="imp">Information Security Researcher</span> from Coorg, India.
                    I earned my <span className="imp">B.Tech</span> from <span className="imp">PES University</span>, Bangalore, in 2023.
                    I also have a <span className="imp">Specialization in Network and Cyber Security</span> from PES University. 
                    My passion for information security and privacy advocacy sparked when I discovered the fascinating tactics and techniques that security researchers use to explore and protect systems worldwide. Since then, I've been committed to enhancing 
                    my penetration testing and programming skills through YouTube tutorials, Udemy courses, and hands-on practice in real-world environments. My journey has fueled a deeper curiosity for safeguarding digital spaces and 
                    building secure applications.</p>
                    <p className="lead describe">I aspire to become a full-stack developer, skilled in creating secure and robust websites that deliver both functionality and protection.</p>
                    <p className="lead describe">Feel free to explore my projects and see my progress in action! I'm always eager to learn and collaborate on exciting projects. Don't hesitate to <span className="imp">reach out!</span></p>
                    
                    <h2 className="display-5 link-body-emphasis mb-1" style={{ fontFamily: 'DM Serif Display, serif' }}>My Skills</h2>
                    <hr />
                    <ul>
                        <li className="lead describe"><span className="imp">Web Development: </span>React.JS, Node.JS, Express.JS, RESTful APIs, jQuery, HTML, CSS, JavaScript (ES6), Python, and SQL.</li>
                        <li className="lead describe"><span className="imp">Information Security: </span>Network Security Protocols, Vulnerability Assessment, Penetration Testing, Networking Concepts.</li>
                        <li className="lead describe"><span className="imp">Learning: </span>Actively learning Data Structures and Algorithms to enhance problem-solving skills. Focusing on the Information Security domain to improve security research skills.</li>
                    </ul>
                    
                    <h2 className="display-5 link-body-emphasis mb-1" style={{ fontFamily: 'DM Serif Display, serif' }}>Certifications</h2>
                    <hr />
                    <ul>
                        <li className="lead describe"><span className="imp">Web Development Bootcamp</span> from Udemy</li>
                        <li className="lead describe"><span className="imp">Jr. Penetration Tester</span> from TryHackMe</li>
                    </ul>
                    <h2 className="display-5 link-body-emphasis mb-1" style={{ fontFamily: 'DM Serif Display, serif' }}>Interests</h2>
                    <hr />
                    {/* Uncomment and use correct paths for images */}
                    {/* <img src={`${process.env.PUBLIC_URL}/path/to/your/image.jpg`} height="150px" style={{ borderRadius: '20px', float: 'right' }} alt="Interest" /> */}
                    <p className="lead describe">I actively participate in <span className="imp">Capture The Flag (CTF)</span> challenges on TryHackMe,
                    where I continuously enhance my skills in ethical hacking, cybersecurity, and problem-solving. These
                    activities allow me to stay current with industry trends, develop practical experience, and tackle real-world security scenarios.</p>
                    <p className="lead describe">I am also a passionate <span className="imp">Digital Privacy Advocate</span> dedicated to safeguarding
                    online security and privacy. Committed to promoting <span className="imp">Free and Open-Source (FOSS) software</span> by actively encouraging
                    friends and peers to adopt FOSS apps for enhanced data protection.</p>
                </article>
            </div>
        </Fragment>
    );
}

export default About;