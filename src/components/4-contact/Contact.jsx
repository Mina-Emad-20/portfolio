import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../animation/Animation - 1725862290320.json"
import contactAnimation from "../../animation/Animation - 1725991003476.json"


const Contact = () => {
    const [state, handleSubmit] = useForm("mgvwqqqa");


    return (
        <section id='contact' className='contact-us'>
            <h2 className='title'>
                <span className='icon-envelope'></span>
                Contact Us
            </h2>
            <p>Contact me for more information and Get notified When I publish something new.</p>
            <div className="flex" style={{ justifyContent: 'space-between' }}>
                <form className='' onSubmit={handleSubmit}>
                    <div className='flex'>
                        <label htmlFor="email">Email Address:</label>
                        <input autoComplete='off' type="email" id='email' name='email' placeholder='Email Address' />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className='flex' style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your Message:</label>
                        <textarea required name="message" id="message"></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button className='submit' type='submit' disabled={state.submitting}>
                        {state.submitting ? "Submitting..." : "Submit"}
                    </button>
                    {state.succeeded && (<p className='flex' style={{ fontSize: "18px", fontWeight: "bold", marginTop: "1.7rem" }}>
                        <Lottie loop={false} style={{ height: 55 }} animationData={doneAnimation} />
                        Your message has been sent successfully...</p>)}
                </form>
                <div className="animation">
                    <Lottie style={{ height: 500 }} animationData={contactAnimation} />
                </div>
            </div>
        </section>
    );
}

export default Contact;
