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
                                    Collaborated with professors and other TAs to provide support to <b>500+ students</b> for undergraduate computer science courses
                                </li>
                                <li>
                                    Provided one-on-one feedback to students during office hours, evaluated the quality of student work, and coordinated lab sessions
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
                                    Supported IT and Facilities staff with excellent service through helpdesk, participating in employee on-boarding, and rolling out new work 
                                    phones to <b>60+ employees</b> for enhanced information security (on hiatus Jan. 2023 - Apr. 2023)
                                </li>
                                <li>
                                    Contributed to IT records administration using <b>Microsoft 365</b> and <b>Power Platform</b> resulting in a more efficient management of assets
                                </li>
                            </ul>
                        </Col>

                        <Col className="mx-2 mt-2 box" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}}>                                        
                            <h3 className="mt-2">The Narmco Group</h3>
                            <h4>IT Co-op Student</h4>
                            <h5>January 2022 - April 2022</h5>
                            <ul style={{textAlign: "left"}}>
                                <li>
                                    Designed and implemented features for a quotes system and a secure reporting service using <b>Visual Basic</b> and <b>SQL Server</b>
                                </li>
                                <li>
                                    Maintained the software of the company using <b>Track-It!</b> to ensure operating problems were resolved and the availability of disk space, 
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
                                    Developed photos, logos, social media campaigns, infographics, and other marketing documents in small <b>Agile</b> teams to 
                                    facilitate digital transformations for small-medium businesses using <b>Adobe Creative Cloud</b> in the Digital Main Street 
                                    program
                                </li>
                                <li>
                                    Delivered designs and documents to clients regularly, revising them based on their feedback until clients were satisfied
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