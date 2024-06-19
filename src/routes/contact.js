import React from "react";
import MainNavbar from "../components/navbar.component";
import "../styles.css"
import { Button, Image } from "react-bootstrap";
import Footer from "../components/footer.component";

const Contact = () => {
    const sendEmail = () => window.open('mailto:dennisdao2001@gmail.com', '_blank');
    const goToLinkedIn = () => window.open('https://www.linkedin.com/in/dennis-dao0802/', '_blank');

    return (
        <div className="App">
            <div id="page">
                <MainNavbar selected={{id:6}}/>
                <h1 className="mt-3">Contact Me</h1>
                <h2>Get in Touch</h2>
                <p>Feel free to reach out to say hello, request code from certain projects, or to work on something together!</p>

                <div className="mt-2" style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                    <Button
                        className="mt-2 mx-2 contactButton"
                        variant="secondary"
                    >
                        <Image
                            src={"../img/email.png"}
                            width={32}
                            height={32}
                            alt={"email"}
                            className="logoImg mx-2 my-1"
                            onClick={sendEmail}
                        />
                        <span style={{fontWeight: "bold"}}>Send an Email</span>
                    </Button>

                    <Button
                        className="mt-2 contactButton"
                        variant="secondary"
                    >
                        <Image
                            src={"../img/linkedin.png"}
                            width={32}
                            height={32}
                            alt={"Linkedin"}
                            className="logoImg mx-2 my-1"
                            onClick={goToLinkedIn}
                        />
                        <span style={{fontWeight: "bold"}}>Connect on LinkedIn</span>
                    </Button>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Contact;