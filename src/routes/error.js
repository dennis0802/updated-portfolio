import React from "react";
import MainNavbar from "../components/navbar.component";
import { Link } from "react-router-dom";
import Footer from "../components/footer.component";
import { motion } from "framer-motion";

const ErrorPage = (props) => {
    return (
        <div className="App">
            <div id="page">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: "0.4"}}
                >
                    <MainNavbar selected={{id:-1}}/>
                    <h1 style={{marginTop: "20px"}}>Error</h1>
                    <p>We couldn't find what you were looking for... Try following one of these links to get to your intended destination:</p>

                    <ul style={{listStylePosition: "inside"}}>
                        <li><Link to={"/index"}>Home</Link></li>
                        <li><Link to={"/about"}>About Me</Link></li>
                        <li><Link to={"/projects"}>Projects</Link></li>
                        <li><Link to={"/skills"}>Skills</Link></li>
                        <li><Link to={"/experience"}>Experience</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                </motion.div>
            </div>
            <Footer/>
        </div>
    );
};
 
export default ErrorPage;
