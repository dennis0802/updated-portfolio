import Nav  from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import "../styles.css"

function MainNavbarElement({props}) {
    return (
        <>
            {props.selected === props.targetID ?
                <Nav.Link as={Link} style={{backgroundColor:"#0D244A", borderRadius: "10px", color: "white"}} to={props.target}>{props.targetName}</Nav.Link> 
            :
                <Nav.Link as={Link} style={{color: "white"}} to={props.target}>{props.targetName}</Nav.Link> 
            }
        </>
    )
}

export default MainNavbarElement;