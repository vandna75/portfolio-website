function Projects() {

    return (

        <section className="projects" id="projects">

            <h2 className="heading">
                My <span>Projects</span>
            </h2>

            <div className="projects-grid">

                <div className="project-item">
                    <a
                        href="https://foodhub-delivery-website.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="project-image">
                            <img src="/foodhub.png" alt="FoodHub" />
                        </div>
                    </a>

                    <div className="project-content">
                        <h3>FoodHub – Full Stack Food Delivery Website</h3>

                        <p>
                            FoodHub is a modern MERN stack food delivery platform featuring
                            secure authentication, dynamic food menu, cart system, online ordering,
                            and responsive user interface for seamless user experience.
                        </p>
                    </div>
                </div>

                <div className="project-item">
                    <a
                        href="https://agecalculator-website.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="project-image">
                            <img src="/age-calculator.png" alt="Age Calculator" />
                        </div>
                    </a>

                    <div className="project-content">
                        <h3>Age Calculator Web Application</h3>

                        <p>
                            Developed an interactive Age Calculator using HTML, CSS, and JavaScript that accurately calculates age in years, months, and days.
                            Implemented responsive design, input validation, and dynamic result generation for an improved user experience.
                        </p>
                    </div>
                </div>

            </div>

            <div className="box-3">

                <ul className="line1">

                    <li>
                        Experience
                        <span>
                            <br />
                            Fresher
                        </span>
                    </li>

                </ul>



                <ul className="line2">

                    <li>
                        Projects
                        <span>
                            <br />
                            2
                        </span>
                    </li>

                </ul>



                <ul className="line3">

                    <li>
                        Certifications
                        <span>
                            <br />
                            12
                        </span>
                    </li>

                </ul>

            </div>

        </section>
    )
}

export default Projects