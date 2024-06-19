import React from "react";
import MainNavbar from "../components/navbar.component";
import "../styles.css"
import { Link } from "react-router-dom";
import Footer from "../components/footer.component";

const Home = () => {
    return (
        <div className="App">
            <div id="page">
                <MainNavbar selected={{id:1}}/>
                <h1 className="mt-3">Dennis Dao</h1>
                <h2>Computer Science Graduate</h2>
                <p>Welcome to my website, I have recently graduated with my Bachelor of Computer Science in June 2024.</p>

                <h3 className="mt-3">Sitemap</h3>
                <ul style={{listStylePosition: "inside"}}>
                    <li><Link to={"/index"}>Home</Link></li>
                    <li><Link to={"/about"}>About Me</Link></li>
                    <li><Link to={"/projects"}>Projects</Link></li>
                    <li><Link to={"/skills"}>Skills</Link></li>
                    <li><Link to={"/experience"}>Experience</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Home;