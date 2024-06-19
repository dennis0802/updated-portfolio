
import Container from 'react-bootstrap/Container';
import {Button, Col, Row} from 'react-bootstrap';

function Footer() {
      const toTop = () => {window.scrollTo(0,0)}

      return (
          <Container className='footer mt-3 bg-brand ' style={{textAlign: "center", maxWidth: "100%"}}>
              <Row className="mt-2">
                <Col className='text-center my-1'>
                    <Button onClick={toTop}>Return to Top</Button><br/>
                    {"© " + new Date().getFullYear() + " Dennis Dao. All rights reserved."}
                </Col>
              </Row>
          </Container>
      )
    }

  export default Footer;