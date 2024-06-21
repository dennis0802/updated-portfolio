import React, { useState } from "react";
import MainNavbar from "../components/navbar.component";
import "../styles.css"
import "../projects.json"
import { Badge, Button, Col, Container, Figure, Modal, Row } from "react-bootstrap";
import ProjectInfoElement from "../components/projectinfo.component";
import Footer from "../components/footer.component";
import { motion } from "framer-motion";

var json = require('../projects.json'); 

const ProjectsPage = () => {
    const [viewProject, setViewProject] = useState(null);
    const [viewing, setViewing] = useState(false);
    const [maxViewCount, setMaxViewCount] = useState(2);
    const [projectListing, setProjectListing] = useState(json.projects.slice(0,maxViewCount));

    const changeView = function(rowIndex, colIndex){
        if(viewing){
            setViewProject(null);
        }
        else{
            setViewProject(json.projects[rowIndex][colIndex])
        }

        setViewing(!viewing);
    }

    const viewMore = function(){
        setMaxViewCount(maxViewCount + 2);
        setProjectListing(json.projects.slice(0, maxViewCount+2));
    }

    return (
        <div className="App">
            <div id="page">
                <MainNavbar selected={{id:3}}/>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: "0.4"}}
                >
                    <h1 className="mt-3">Projects</h1>
                    <p style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                        Projects have always been an opportunity for me to develop personally and professionally. With each project, it provides learning experiences and an opportunity 
                        to refine my problem-solving skills, improve my ability to articulate ideas, and promote effective collaboration.
                    </p>

                    <Container style={{width: "50%"}} className="mt-3">
                        <Row>
                        <h3 className="my-2 py-2 bg-brand" style={{outline: "1px solid #CCCCCC", borderRadius: "10px", color: "#FFFFFF", fontWeight: "bold"}}>Projects</h3>
                        </Row>

                        {viewProject ? 
                            <Modal show={viewing} onHide={changeView}>
                                <Modal.Header closeButton>
                                    <Modal.Title><b>{viewProject.title}</b></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Figure className="mt-2 text-center">
                                        <Figure.Image
                                            alt={viewProject.alt}
                                            src={viewProject.src}
                                            rounded
                                        />
                                        <Figure.Caption>
                                            <b>{viewProject.title}</b><br/>
                                            {viewProject.timeframe}
                                        </Figure.Caption>
                                    
                                        <hr/>
                                        <ProjectInfoElement project={viewProject} />
                                        <div className="mb-3 mx-4">
                                            {viewProject.fullDesc}
                                        </div>
                                        <div className="mb-3 mx-4 badgeCustom">
                                            {viewProject.tools ?
                                            <>
                                                {viewProject.tools.map((tool, index) => (
                                                    <Badge bg="secondary" key={index} className="mx-1">{tool}</Badge>
                                                ))}
                                            </>
                                            :
                                            ""
                                            }
                                            
                                        </div>

                                    </Figure>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="success" onClick={changeView}>
                                    Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        :
                            ""
                        }
                        
                        {projectListing.map((projectRow, rowIndex) => (
                            <Row key={rowIndex} style={{}} className="my-1">
                                {projectRow.map((project, colIndex) => (
                                    <Col key={project.id} className="mx-2 mt-2 boxProj" style={{outline: "1px solid #CCCCCC", borderRadius: "10px"}} onClick={() => changeView(rowIndex, colIndex)}>
                                        <Figure className="mt-2">
                                            <Figure.Image
                                                alt={project.alt}
                                                src={project.src}
                                                id="projectImg"
                                                rounded
                                            />
                                            <Figure.Caption className="caption">
                                                <b>{project.title}</b><br/>
                                                {project.timeframe}
                                            </Figure.Caption>
                                        
                                            <hr className="caption-hr"/>
                                            <ProjectInfoElement project={project} /><br/>
                                            <div className="mb-3 desc">
                                                {project.partialDesc}
                                            </div>

                                            <div className="mb-3 mx-4">
                                            {project.tools ?
                                            <>
                                                {project.tools.slice(0,3).map((tool, index) => (
                                                    <Badge bg="secondary" key={index} className="mx-1 caption-badge">{tool}</Badge>
                                                ))}
                                                {project.tools.length - project.tools.slice(0,3).length > 0 ?
                                                    <Badge bg="secondary" className="mx-1 caption-badge">{"+" + (project.tools.length - project.tools.slice(0,3).length)}</Badge>
                                                :
                                                    ""
                                                }
                                            </>
                                            :
                                            ""
                                            }
                                            
                                        </div>
                                        </Figure>



                                    </Col>
                                ))}
                            </Row>
                        ))}
                    </Container>

                    <div className="mt-2" style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                        {maxViewCount < json.projects.length ?
                            <Button className="bg-brand" onClick={viewMore}>View More</Button>
                        :
                            ""
                        }
                        
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectsPage;