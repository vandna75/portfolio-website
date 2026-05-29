import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm(

            "service_919971vk13",
            "template_fe6sm86",
            form.current,
            "_bIc_JgzC891oqQYW"

        )

        

        .then(() => {

            alert("Message Sent Successfully ✅");

            e.target.reset();

        })

        .catch((error) => {

            alert("Failed to Send Message ❌");

            console.log(error);

        });
        

    };

    return (

        <section className="contact" id="contact">

            <h2 className="heading">
                Contact <span>Me!</span>
            </h2>

            <form ref={form} onSubmit={sendEmail}>

                <div className="input-box">

                    <div className="input-field">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Full Name"
                            required
                        />
                    </div>

                    <div className="input-field">
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email Address"
                            required
                        />
                    </div>

                </div>

                <div className="input-box">

                    <div className="input-field">
                        <input
                            type="number"
                            name="user_phone"
                            placeholder="Mobile Number"
                            required
                        />
                    </div>

                    <div className="input-field">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Email Subject"
                            required
                        />
                    </div>

                </div>

                <div className="textarea-field">

                    <textarea
                        name="message"
                        rows="10"
                        placeholder="Your Message"
                        required
                    ></textarea>

                </div>

                <div className="btn-box btns">

                    <button type="submit" className="btn">
                        Submit
                    </button>

                </div>

            </form>

        </section>
    );
}

export default Contact;