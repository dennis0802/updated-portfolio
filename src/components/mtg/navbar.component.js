import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles.css"
import { Button, Modal, Nav } from 'react-bootstrap';
import { useState } from 'react';

function MTGNavbar({inGame}) {
      const [wantToQuit, setWantToQuit] = useState(false);
      const navigate = useNavigate();

      const handleQuit = () => {
        setWantToQuit(true);
      }

      const handleExit = () => {
        setWantToQuit(false);
        localStorage.clear();
        navigate("/mtgHome");
      }

      return (
        <>
          <header>
            <Navbar expand="lg" className="bg-body-tertiary" bg='brand' fixed="top">
              <Container>
                <Navbar.Brand as={Link} to="/mtgHome" style={{color: "white", fontWeight:"bold"}}>            
                  MTG Tracker
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {inGame ? 
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link 
                                as={Link} 
                                style={{color: "white"}} 
                                onClick={handleQuit}>
                                Return to Game Creation
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    :
                    ""
                }
              </Container>
            </Navbar>
          </header>
          <Modal show={wantToQuit} onHide={() => {setWantToQuit(false)}}>
            <Modal.Header closeButton>
            <Modal.Title>Returning to Game Creation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to create a new game? <b>Your data will not be saved!</b></Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={() => {setWantToQuit(false)}}>
                    Return
                </Button>
                <Button variant="danger" onClick={handleExit}>
                    Quit
                </Button>
            </Modal.Footer>
          </Modal>
        </>
      )
    }

  export default MTGNavbar;