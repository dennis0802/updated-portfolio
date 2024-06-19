import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProjectInfoElement({project}) {
    return (
        <>
            {project.repository ?
                <Link
                    to={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                >                                
                    <Image 
                        src="../img/githubLarge.png"
                        id="gitrepository"
                        alt="Git repository"
                        width={32}
                        height={32}
                    /> 
                </Link> 
                : 
                ""
            }

            {project.isPersonal ?                                 
                <Image 
                    src="../img/personalProject.png"
                    id="personalProject"
                    alt="Personal project"
                    width={32}
                    height={32}
                />
                : 
                ""
            }

            {project.isAcademic ?                                 
                <Image 
                    src="../img/university.png"
                    id="academicProject"
                    alt="Academic project"
                    width={32}
                    height={32}
                />
                : 
                ""
            }

            {project.isWork ?                                 
                <Image 
                    src="../img/workplace.png"
                    id="workProject"
                    alt="Work project"
                    width={32}
                    height={32}
                />
                : 
                ""
            }

            {project.video ?
                <Link
                    to={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                >                                                                               
                    <Image 
                        src="../img/video.png"
                        id="video"
                        alt="Demo video"
                        width={32}
                        height={32}
                    />
                </Link> 
                : 
                ""
            }

            {project.doc ?
                <Link
                    to={project.doc}
                    target="_blank"
                    rel="noopener noreferrer"
                >                                                                               
                    <Image 
                        src="../img/report.png"
                        id="doc"
                        alt="Doc"
                        width={32}
                        height={32}
                    />
                </Link> 
                : 
                ""
            }

            {project.link ?
                <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >                                                                               
                    <Image 
                        src="../img/web.png"
                        id="Web link"
                        alt="Web link"
                        width={32}
                        height={32}
                    />
                </Link> 
                : 
                ""
            }

            {project.download ?
                <Link
                    to={project.download}
                    target="_blank"
                    rel="noopener noreferrer"
                >                                                                               
                    <Image 
                        src="../img/windows.png"
                        id="Windows download"
                        alt="Windows download"
                        width={32}
                        height={32}
                    />
                </Link> 
                : 
                ""
            }
        </>
    )
}

export default ProjectInfoElement;