import { useState } from 'react'

function About() {

    const [showMore, setShowMore] = useState(false)

    return (

        <section className="about" id="about">

            <h2 className="heading">
                About <span>Me</span>
            </h2>


            <div className="about-img">

                <img src="/about.jpg" alt="" />

                <span className="circle-spin"></span>

            </div>



            <div className="about-content">

                <h3>
                    Full Stack Developer!
                </h3>


                <p>

                    I am a passionate and detail-oriented Full Stack Developer with strong knowledge of
                    MERN Stack development and modern web technologies.

                    {!showMore && '...'}

                    {showMore && (

                        <>

                            <br />
                            <br />

                            I have developed a full stack Food Delivery web application featuring secure authentication,
                            dynamic food menu, cart management, responsive user interface, and admin dashboard functionality.

                            <br />
                            <br />

                            My technical skills include Python, JavaScript, React.Js, Node.Js, Express.Js, HTML,
                            CSS, SQL, and MongoDB.

                            <br />
                            <br />

                            I enjoy building responsive and user-friendly web applications and continuously learning new technologies.

                        </>

                    )}

                </p>



                <div className="btn-box btns">

                    <button
                        className="btn"
                        onClick={() => setShowMore(!showMore)}
                    >

                        {showMore ? 'Read Less' : 'Read More'}

                    </button>

                </div>

            </div>

        </section>
    )
}

export default About