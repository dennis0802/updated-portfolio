import React from "react";
import MainNavbar from "../components/navbar.component";
import "../styles.css"
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/footer.component";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <div className="App">
            <div id="page">
                <MainNavbar selected={{id:5}}/>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: "0.4"}}
                >
                    <h1 className="mt-3">Skills</h1>
                    <p style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                        A list of skills, frameworks, and technologies I am familiar with and have utilized. I'm always open to learning new skills to improve my 
                        capabilities for upcoming projects and opportunities.
                    </p>

                    <Container fluid style={{width: "50%"}} className="mt-3">
                        <Row><h3 className="my-2 py-2 bg-brand" style={{outline: "1px solid #CCCCCC", borderRadius: "10px", color: "#FFFFFF", fontWeight: "bold"}}>Skills</h3></Row>
                        <Row className="my-1">
                            <Col className="mx-2 mt-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>                                        
                                <h5 className="mt-2">Languages</h5>
                                <ul style={{listStyleType: "square", textAlign: "left"}}>
                                    <li>Python</li>
                                    <li>C</li>
                                    <li>Java</li>
                                    <li>MASM32</li>
                                    <li>C#</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>PHP</li>
                                    <li>Power Fx</li>
                                    <li>C++</li>
                                    <li>BASH</li>
                                </ul>
                            </Col>

                            <Col className="mx-2 mt-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>
                                <h5 className="mt-2">Technologies</h5>                                        
                                <ul style={{listStyleType: "square", textAlign: "left"}}>
                                    <li>Unity</li>
                                    <li>GitHub</li>
                                    <li>Microsoft 365</li>
                                    <li>Windows</li>
                                    <li>Mac</li>
                                    <li>Linux</li>
                                    <li>VSCode</li>
                                    <li>MySQL</li>
                                    <li>SQL Server</li>
                                    <li>SQL Server Reporting Services (SSRS)</li>
                                    <li>SQL Server Management Studio (SSMS)</li>
                                    <li>Active Directory Users and Computers (ADUC)</li>
                                    <li>Adobe Creative Cloud</li>
                                    <li>Power Platform</li>
                                    <li>PHPmyAdmin</li>
                                    <li>Docker</li>
                                    <li>MongoDB</li>
                                    <li>Google Cloud Platform</li>
                                    <li>PostgreSQL</li>
                                    <li>Git</li>
                                </ul>
                            </Col>

                            <Col className="mx-2 mt-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>                                        
                                <h5 className="mt-2">Libraries and Frameworks</h5>      
                                <ul style={{listStyleType: "square", textAlign: "left"}}>
                                    <li>.NET</li>
                                    <li>SQLite-net</li>
                                    <li>Flask</li>
                                    <li>Pandas</li>
                                    <li>NumPy</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>React</li>
                                    <li>Spring Boot</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}

export default Skills;