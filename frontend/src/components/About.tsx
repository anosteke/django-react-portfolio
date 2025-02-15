import { Component } from "react";
import '../styles/about.scss'

const About = () => {
    return (
        <div className="about">
            <img className='profile-pic' src="pdp.jpeg"></img>
            <span className="about-text font-extrabold">
                Hi! I'm Pierre-Raphaël, a 24-year-old enthusiastic software engineer with a profound passion for learning new things. Currently, I work at INSEE as a Java/React developer.
                I have studied Software Engineering and Video Game Development in both France and Canada, gaining diverse experiences through various internships. These opportunities have allowed me to work in different fields, broadening my skill set and expertise.

                This website was built using React for the frontend, thanks to its versatility. For the backend, I utilized the Django framework, which enables me to easily update my portfolio without needing to rebuild the front end. A SQLite database handles all my work,
                providing fast data management for adding/updating my experiences.

                Feel free to contact me by clicking here or on the mail button in the page's header. You can also download my resume if you wish. I look forward to connecting with you!

            </span>
        </div>)
}

export default About

