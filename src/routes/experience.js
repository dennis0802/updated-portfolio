import React from "react";
import MainNavbar from "../components/navbar.component";
import "../styles.css"
import "../box.css"
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Footer from "../components/footer.component";

const Experience = () => {
    const openTranscript = () => window.open('../docs/DennisDao_Transcript.pdf', '_blank');

    return (
        <div className="App">
            <div id="page">
                <MainNavbar selected={{id:5}}/>

                <Container fluid style={{width: "50%"}} className="my-3">
                    <Row>
                        <h3 className="my-2 py-2 bg-brand" style={{outline: "1px solid #CCCCCC", borderRadius: "10px", color: "#FFFFFF", fontWeight: "bold"}}>Education</h3>
                    </Row>
                    <Row>
                        <Col className="mx-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>
                            <h3>University of Windsor</h3>
                            <h4>B.CS Computer Science (Honours) with Co-op</h4>
                            <h5>September 2019 - December 2023</h5>
                            <ul>
                                <li>Specialized in Game Development</li>
                                <li>Minored in Mathematics</li>
                                <li><b>92.5%</b> Major Average, <b>92.98%</b> Cumulative Average</li>
                            </ul>
                            <Button className="mb-2" variant="secondary" onClick={openTranscript}>
                                <Image
                                    src="../img/transcript.png"
                                    width=""
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
                            <h4>Undergraduate Teaching Assistant</h4>
                            <h5>September 2020 - December 2023</h5>
                            <ul style={{textAlign: "left"}}>
                                <li>
                                    Evaluated quality of student work, led lab sessions, proctored exams, and answered 
                                    student questions during weekly office hours for classes of <b>70+ students</b>
                                </li>
                                <li>
                                    Worked for courses such as: Introduction to Algorithms and Programming I; System Programming; Introduction to the Internet; 
                                    Computer Languages, Grammars, and Translators; Advanced Website Design; Game Design, Development, and Tools
                                </li>
                            </ul>
                        </Col>

                        <Col className="mx-2 mt-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>                                        
                            <h3 className="mt-2">Windsor-Detroit Bridge Authority</h3>
                            <h4>IT/Facilities Co-op Student</h4>
                            <h5>September 2022 - August 2023</h5>
                            <ul style={{textAlign: "left"}}>
                                <li>
                                    Supported IT and Facilities staff with troubleshooting technical problems, participating in the on-boarding of new employees, and with records administration using  
                                    <b> Microsoft 365</b> and <b>Power Platform</b> <i>(hiatus Jan. 2023 - Apr. 2023)</i>
                                </li>
                                <li>
                                    Contributed to the company's return to office plan by drafting employee handbooks, moving office furniture, setting up office workstations and IT equipment, and rolled out new 
                                    work phones to 60+ employees for security improvements
                                </li>
                            </ul>
                        </Col>

                        <Col className="mx-2 mt-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>                                        
                            <h3 className="mt-2">The Narmco Group</h3>
                            <h4>IT Co-op Student</h4>
                            <h5>January 2022 - April 2022</h5>
                            <ul style={{textAlign: "left"}}>
                                <li>
                                    Designed, configured, and implemented software and services for network operating efficiency with <b>Visual Basic</b> and <b>SQL Server</b>
                                </li>
                                <li>
                                    Maintained the software of the company through the helpdesk to ensure operating problems are resolved and the availability of disk space, 
                                    response time, and information security for <b>200+ employees</b>
                                </li>
                            </ul>
                        </Col>
                    </Row>

                    <Row className="my-1">
                        <Col className="mx-2 mt-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>
                            <h3 className="mt-2">Communitech</h3>
                            <h4>Graphic Designer</h4>
                            <h5>May 2021 - June 2021</h5>
                            <ul style={{textAlign: "left"}}>
                                <li>
                                    Developed photos, logos, social media campaigns, infographics, and other marketing documents for small to medium businesses using <b>Adobe Creative Cloud</b> software in the Digital Main Street program
                                </li>
                                <li>
                                    Met with clients regularly to showcase designs done for them and revise it based on their feedback
                                </li>
                            </ul>
                        </Col>
                        {/* <Col className="mx-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>

                        </Col>
                        <Col className="mx-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>

                        </Col> */}
                    </Row>
                    
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default Experience;