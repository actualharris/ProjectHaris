import React, { Fragment } from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import projectData from "../data/projectData";
import certificationData from "../data/certificationData";

const About = () => {

  // will use useState to apply skills dynamically later


    return (
        <Fragment>

            <div className="container">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <Profile/>
                <div className="col-lg-6 d-flex flex-column align-items-center text-center">
                      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 heading">About Me</h1>
                      <p className="lead describe">My journey into cybersecurity started with a strong interest in 
                      Network Security and Security Analysis, which has motivated me to keep learning and advancing in this area. 
                      Alongside my security skills, I've also gained experience in web development, aiming to blend my knowledge of both fields.</p>
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
                    <p className="lead describe">Hi! I'm <span className="imp">Mohammed Haris</span>, an aspiring <span className="imp">Information Security Analyst</span> and <span className="imp">Cybersecurity Enthusiast</span> from Coorg, India.
                    I earned my <span className="imp">B.Tech in Computer Science and Engineering</span> from <span className="imp">PES University</span>, Bangalore, in October of 2023, along with 
                    a <span className="imp">Specialization in Network and Cybersecurity</span>. 
                    My passion for information security and privacy advocacy sparked when I discovered the fascinating tactics and techniques that security researchers use to explore and protect systems worldwide. Since then, I have been dedicated to 
                    enhancing my research, analysis, and programming skills through earning various <span className="imp">industry-level certifications</span> and hands-on practice in real-world environments. This journey has fueled my curiosity for safeguarding digital spaces and building secure applications.</p>
                    {/* <p className="lead describe">I aspire to become a full-stack developer, skilled in creating secure and robust websites that deliver both functionality and protection.</p> */}
                    <p className="lead describe">Feel free to explore my projects and achievements and see my progress in action! I'm always eager to learn and collaborate on exciting projects. Don't hesitate to <span className="imp">reach out!</span></p>
                    
                    <h2 className="display-5 link-body-emphasis mb-1" style={{ fontFamily: 'DM Serif Display, serif' }}>My Skills</h2>
                    <hr />
                    <ul>
                        <li className="lead describe"><span className="imp">Web Development: </span>Javascript, HTML/CSS, RESTful APIs, SQL, MongoDB, Git, Docker, postgreSQL, CI/CD, React-Redux, Node JS, Express JS, React JS.</li>
                        <li className="lead describe"><span className="imp">Information Security: </span>Log Analysis, Vulnerability Assessment, Security Principles, Security Operations, TCP/IP, VPNs, Firewalls, Access Control, SIEM, 
                        Wireshark, IDS, IPS, Antivirus, Digital Forensics, Linux, MacOS and Windows, Applied Cryptography, Network Security, IT Service Management</li>
                        <li className="lead describe"><span className="imp">Learning: </span>I am actively acquiring new knowledge to enhance my skills, specifically focusing on the Information Security domain to improve my security research and troubleshooting abilities.</li>
                    </ul>
                    
                    <h2 className="display-5 link-body-emphasis mb-1" style={{ fontFamily: 'DM Serif Display, serif' }}>Certifications</h2>
                    <hr />
                    {certificationData.map((certificate) => (
                    <ul key={certificate.id} className="list-unstyled">
                        <li className="lead describe d-flex justify-content-between align-items-center flex-wrap">
                            <div className="col-12 col-md-8">
                                <span className="imp">{certificate.title}</span> from {certificate.issuer}
                            </div>
                            <div className="col-12 col-md-4 text-right">
                                <a href={certificate.verifyLink} className="ml-2">
                                    <button type="button" className="btn btn-outline-dark btn-lg cert-btn">
                                        View Credentials
                                    </button>
                                </a>
                            </div>
                        </li>
                    </ul>
                    ))}
                    <h2 className="display-5 link-body-emphasis mb-1" style={{ fontFamily: 'DM Serif Display, serif' }}>Interests</h2>
                    <hr />
                    {/* Uncomment and use correct paths for images */}
                    {/* <img src={`${process.env.PUBLIC_URL}/path/to/your/image.jpg`} height="150px" style={{ borderRadius: '20px', float: 'right' }} alt="Interest" /> */}
                    {/* <p className="lead describe">I actively participate in <span className="imp">Capture The Flag (CTF)</span> challenges on TryHackMe,
                    where I continuously enhance my skills in ethical hacking, cybersecurity, and problem-solving. These
                    activities allow me to stay current with industry trends, develop practical experience, and tackle real-world security scenarios.</p> */}
                    <p className="lead describe"><span className="imp">Digital Privacy Advocacy –</span> Dedicated to safeguarding
                    online security and privacy. Committed to promoting <span className="imp">Free and Open-Source (FOSS) software</span> by actively encouraging
                    friends and peers to adopt FOSS apps for enhanced data protection.</p>
                </article>
            </div>
        </Fragment>
    );
}

export default About;