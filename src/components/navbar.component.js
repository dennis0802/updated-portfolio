import Nav  from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ContactComponent from './contact.component';
import MainNavbarElement from './navbarelem.component';
import { Link } from 'react-router-dom';
import "../styles.css"

function MainNavbar({selected}) {
      return (
          <header>
            <Navbar expand="lg" className="bg-body-tertiary" bg='brand' fixed="top">
              <Container>
                <Navbar.Brand as={Link} to="/index" style={{color: "white", fontWeight:"bold"}}>            
                  {/* <img
                    src="../img/logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Logo"
                  />{' '} */}
                  Dennis Dao
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <MainNavbarElement props={{target: "/index", targetName: "Home", selected: selected.id, targetID: 1}} />
                    <MainNavbarElement props={{target: "/about", targetName: "About", selected: selected.id, targetID: 2}} />
                    <MainNavbarElement props={{target: "/projects", targetName: "Projects", selected: selected.id, targetID: 3}} />
                    <MainNavbarElement props={{target: "/skills", targetName: "Skills", selected: selected.id, targetID: 4}} />
                    <MainNavbarElement props={{target: "/experience", targetName: "Experience", selected: selected.id, targetID: 5}} />
                    <MainNavbarElement props={{target: "/contact", targetName: "Contact", selected: selected.id, targetID: 6}} />
                  </Nav>
                  <Nav>
                    <Nav.Link as={Link} to={"../docs/DennisDao_Resume.pdf"} target="_blank" rel="noopener noreferrer" style={{color: "white"}}>Resume</Nav.Link>
                    <ContactComponent props={{link: "mailto:dennisdao2001@gmail.com", img: "../img/email.png", alt: "email"}} />
                    <ContactComponent props={{link: "https://github.com/dennis0802", img: "../img/githubLarge.png", alt: "github"}} />
                    <ContactComponent props={{link: "https://www.linkedin.com/in/dennis-dao0802/", img: "../img/linkedin.png", alt: "linkedin"}} />
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </header>
      )
    }

  export default MainNavbar;