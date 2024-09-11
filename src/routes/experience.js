import React from "react";
import MainNavbar from "../components/navbar.component";
import "../styles.css"
import "../box.css"
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../components/footer.component";
import { motion } from "framer-motion";

const Experience = () => {
    const openExternal = (link) => window.open(link, '_blank');

    return (
        <div className="App">
            <div id="page">
                <MainNavbar selected={{id:6}}/>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: "0.4"}}
                >
                    <Container fluid style={{width: "50%"}} className="my-3">
                        <Row><h3 className="my-2 py-2 bg-brand" style={{outline: "1px solid #CCCCCC", borderRadius: "10px", color: "#FFFFFF", fontWeight: "bold"}}>Education</h3></Row>
                        <Row className="my-1">
                            <Col className="mx-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>
                                <h3>University of Windsor</h3>
                                <h5>B.CS Computer Science (Honours) with Co-op</h5>
                                <h6>Sept 2019-Jun 2024</h6>
                                <ul>
                                    <li><b>92.5%</b> Major Average, <b>92.98%</b> Cumulative Average</li>
                                    <li>Specialized in Game Development</li>
                                    <li>Minored in Mathematics</li>
                                    <li>Coursework: Databases, Artificial Intelligence, Data Structures/Algorithms, Operating Systems, Networks, Software Engineering, Graphics</li>
                                </ul>
                                <Button className="my-2" variant="secondary" onClick={() => {openExternal('../docs/DennisDao_Transcript.pdf')}}>
                                    <Image
                                        src="../img/transcript.png"
                                        fluid
                                    /><br/>
                                    <b>View Transcript</b>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                    
                    <Container fluid style={{width: "50%"}}>
                        <Row><h3 className="my-2 py-2 bg-brand" style={{outline: "1px solid #CCCCCC", borderRadius: "10px", color: "#FFFFFF", fontWeight: "bold"}}>Experience</h3></Row>
                        <Row className="my-1">
                            <Col className="mx-2 mt-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>                                        
                                <h3 className="mt-2">University of Windsor</h3>
                                <h5>Undergraduate Teaching Assistant</h5>
                                <h6>Sept 2020-Dec 2023</h6>
                                <ul style={{textAlign: "left"}}>
                                    <li>
                                        Collaborated with professors and other TAs to provide support to <b>500+</b> students for <b>9</b> undergraduate computer science courses
                                    </li>
                                    <li>
                                        Effectively provided <b>1:1</b> feedback in evaluation of the quality of student work, increasing office hours attendance by <b>50%</b>
                                    </li>
                                    <li>
                                        Worked for courses such as: Introduction to Algorithms and Programming I; System Programming; Introduction to the Internet; 
                                        Computer Languages, Grammars, and Translators; Advanced Website Design; Game Design, Development, and Tools
                                    </li>
                                </ul>
                            </Col>

                            <Col className="mx-2 mt-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>                                        
                                <h3 className="mt-2">Windsor-Detroit Bridge Authority</h3>
                                <h5>IT Support Specialist Co-op Student</h5>
                                <h6>May 2023-Aug 2023<br/>Sept 2022-Dec 2022</h6>
                                <ul style={{textAlign: "left"}}>
                                    <li>
                                        Developed and designed an inventory tracking system and automated flows for repetitive tasks using <b>Microsoft Power Platform</b> and 
                                        <b> Microsoft 365</b>, allowing the IT team to perform facilities records administration more efficiently by <b>40%</b>
                                    </li>
                                    <li>
                                        Engaged with end‑users with excellent customer service at the helpdesk and rolled out <b>60+</b> new work phones for enhanced security
                                    </li>
                                </ul>
                            </Col>

                            <Col className="mx-2 mt-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>                                        
                                <h3 className="mt-2">The Narmco Group</h3>
                                <h5>IT Developer Co-op Student</h5>
                                <h6>Jan 2022-Apr 2022</h6>
                                <ul style={{textAlign: "left"}}>
                                    <li>
                                        Designed and developed <b>SQL Server</b> queries for a secure manufacturing reporting application to migrate from a legacy AS400 system
                                        and amortization calculations for a quote system in <b>Visual Basic</b> and <b>DevExpress WPF UI</b>, all ahead of schedule by <b>2</b> weeks
                                    </li>
                                    <li>
                                        Maintained software applications using <b>Track‑It</b> to resolve operating problems and ensure response time for <b>200+</b> employees
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                        <Row className="my-1">
                            <Col className="mx-2 mt-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>
                                <h3 className="mt-2">Communitech</h3>
                                <h5>Graphic Designer Co-op Student</h5>
                                <h6>May 2021-Jun 2021</h6>
                                <ul style={{textAlign: "left"}}>
                                    <li>
                                        Collaborated remotely in the <b>Digital Main Street (DMS) Future Proof</b> program with an Agile team of 8 to develop digital marketing strategies and tools for
                                        5 small Ontario businesses by developing photos, logos, social media campaigns, and infographics using <b>Photoshop</b> and <b>Illustrator</b>
                                    </li>
                                    <li>
                                        Delivered designs and documents to clients regularly, revising them based on their feedback until clients were satisfied
                                    </li>

                                    <div style={{textAlign: "center"}}>
                                        <Button className="my-2" variant="secondary" onClick={() => {openExternal('../docs/DennisDao_DMSCertificate.pdf')}}>
                                            <Image
                                                src="../img/transcript.png"
                                                fluid
                                            /><br/>
                                            <b>View Certificate</b>
                                        </Button>
                                    </div>
                                </ul>
                            </Col>
                            {/* <Col className="mx-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>

                            </Col>
                            <Col className="mx-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>

                            </Col>  */}
                        </Row>
                        
                    </Container>
                </motion.div>
            </div>
            <Footer/>
        </div>
    )
}

export default Experience;