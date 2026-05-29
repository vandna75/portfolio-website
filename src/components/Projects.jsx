function Projects() {

    return (

        <section className="projects" id="projects">

            <h2 className="heading">
                My <span>Projects</span>
            </h2>



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
                            1
                        </span>
                    </li>

                </ul>



                <ul className="line3">

                    <li>
                        Certificate
                        <span>
                            <br />
                            4
                        </span>
                    </li>

                </ul>

            </div>




            <div className="project-card">


                <a
                    href="https://foodhub-delivery-website.netlify.app/"
                    target="_blank"
                >

                    <div className="project-image">

                        <img src="/foodhub.png" alt="" />

                    </div>

                </a>




                <div className="project-content">

                    <h3>
                        FoodHub – Full Stack Food Delivery Website
                    </h3>


                    <p>

                        FoodHub is a modern MERN stack food delivery platform featuring
                        secure authentication, dynamic food menu, cart system, online ordering,
                        and responsive user interface for seamless user experience.

                    </p>

                </div>

            </div>

        </section>
    )
}

export default Projects