import React from "react";
import MainNavbar from "../components/navbar.component";
import "../styles.css"
import Footer from "../components/footer.component";

const About = () => {
    return (
        <div className="App">
            <div id="page">
                <MainNavbar selected={{id:2}}/>
                <h1 className="mt-3">About Me</h1>
                <div className="line-1 anim-typewriter mt-4" >
                    <h6 style={{fontWeight: "bold"}}>Hi there, I'm Dennis Dao, a full-stack developer.</h6>
                </div>
                 
                <p className="mt-2" style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                    I first became interested in what technology can do as a kid, starting with my interest in video games. This led to my interest in taking computer science classes during high school. 
                    After doing exceptionally well in those classes, I began pursuing a Bachelor of Computer Science degree from the University of Windsor, where I graduated with great distinction in June 2024.
                    I've picked up programming, algorithms, database management, AI, and web development.
                </p>

                <p className="mt-2" style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                    During my academics, I have had opportunites to work on various projects for companies during co-op terms, school, and personal use. I have also worked as 
                    a teaching assistant for various computer science courses, ranging from intro to programming to compiler theory. These experiences have provided opportunites 
                    to network with others and to hone my technical skills and my problem-solving skills.
                </p>

                <p className="mt-2" style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                    Looking ahead, I am excited to continue learning in computer science and technology as it advances. 
                    My goal is to make a meaningful impact to the people I work with, using my skills to build solutions to positively impact their lives.
                    Outside of computer science, I enjoy drawing, painting, gaming, watching TV shows, and photography. 
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default About;